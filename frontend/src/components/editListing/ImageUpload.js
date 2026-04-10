import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ImageUpload.css";

const MAX_TOTAL_SIZE = 10 * 1024 * 1024;

export const ImageUpload = () => {
  const { roomName, id } = useParams();
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [listingImages, setListingImages] = useState([]);
  const [roomImages, setRoomImages] = useState({});
  const [files, setFiles] = useState({});
  const [dragging, setDragging] = useState(false);
  const [showUploader, setShowUploader] = useState(false);

  useEffect(() => {
    setRooms(JSON.parse(localStorage.getItem("rooms")) || []);
  }, []);
  const currentRoom = rooms.find(room => room.name === roomName);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/listing/${id}`);
      setListingImages(
        res.data.images.filter(img => img.category === roomName.toLowerCase())
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [roomName]);

  const currentImages = roomImages[roomName] || [];
  const currentFiles = files[roomName] || [];

  // ---------- helpers ----------
  const getTotalSize = () =>
    Object.values(files).flat().reduce((t, f) => t + f.size, 0);

  const updateState = (setter, value) =>
    setter(prev => ({
      ...prev,
      [roomName]: [...(prev[roomName] || []), ...value]
    }));

  // ---------- file ----------
  const handleFiles = (selected) => {
    const imageFiles = selected.filter(f => f.type.startsWith("image/"));

    const size = imageFiles.reduce((t, f) => t + f.size, 0);
    if (getTotalSize() + size > MAX_TOTAL_SIZE) {
      return alert("Total size > 10MB");
    }

    updateState(setRoomImages, imageFiles.map(f => URL.createObjectURL(f)));
    updateState(setFiles, imageFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles([...e.dataTransfer.files]);
  };

  const handleUpload = async () => {
    if (!currentFiles.length) return alert("No files");

    try {
      const formData = new FormData();
      currentFiles.forEach(f => formData.append("images", f));

      await axios.post(
        `${process.env.REACT_APP_API_URL}/listing/${id}/image/upload/${roomName}`, formData,
        { withCredentials: true }
      );

      setRoomImages(p => ({ ...p, [roomName]: [] }));
      setFiles(p => ({ ...p, [roomName]: [] }));
      setShowUploader(false);

      fetchImages();
    } catch {
      alert("Upload failed");
    }
  };


  const handleRemove = (i) => {
    const remove = arr => arr.filter((_, idx) => idx !== i);

    setRoomImages(p => ({ ...p, [roomName]: remove(p[roomName] || []) }));
    setFiles(p => ({ ...p, [roomName]: remove(p[roomName] || []) }));
  };


  const handleDelete = async (imageId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/listing/${id}/image/${imageId}`, { withCredentials: true }
      );
      fetchImages();
    } catch {
      alert("Delete failed");
    }
  };

  const handleDeleteRoom = (roomName) => {
    const updatedRooms = rooms.filter(room => room.name !== roomName);
    setRooms(updatedRooms);

    localStorage.setItem("rooms", JSON.stringify(updatedRooms));

    // Navigate to another room (if exists)
    if (updatedRooms.length > 0) {
      navigate(`/listing/${id}/image/upload/${updatedRooms[0].name}`);
    } else {
      navigate(`/listing/${id}`); // fallback
    }
  };

  return (
    <div className="container-fluid d-flex vh-100">

      {/* LEFT PANEL */}
      <div className="col-3 border-end p-3">
        <h5 className="fw-semibold">Rooms</h5>

        {rooms.map(({ name, label }) => (

          <div key={name} onClick={() => navigate(`/listing/${id}/image/upload/${name}`)}
            className={`p-2 mb-3 rounded room-item ${name === roomName ? "active-room" : ""
              }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="col p-4 d-flex justify-content-center">
        <div className="p-2" style={{ width: "33rem" }}>

          <div className="d-flex justify-content-between align-items-center mb-4 mt-3">

            <h2 className="fw-semibold">{currentRoom?.label || roomName}</h2>
            <button className="rounded p-1 bg-white border-0 shadow" onClick={() => setShowUploader(true)}>
              <i class="fa-solid fs-5 fa-plus"></i>
            </button>
          </div>

          {listingImages.length > 0 ? (
            <div className="d-flex flex-wrap gap-3">
              {listingImages.map(img => (
                <div key={img._id} className="img-wrapper">
                  <img src={img.url} className="img-preview" />

                  <button className="delete-btn" onClick={() => handleDelete(img._id)}>
                    <i class="fa-regular fa-trash-can"></i>
                  </button>

                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5">
              <div className="mb-3 fs-1 text-center text-secondary border p-4 rounded">
                <i className="m-5 pt-5 pb-5 fa-regular fa-image"></i>
              </div>
              <button className="btn btn-outline-dark"onClick={() => handleDeleteRoom(roomName)}>
                Delete Room
              </button>
            </div>
          )}

        </div>
      </div>


      {showUploader && (
        <div className="upload-modal">

          <div className="upload-content">

            <div className="d-flex justify-content-between mb-2">
              <button className="border-0 bg-white" onClick={() => document.getElementById("fileInput").click()}>
                <i class="fa-solid fa-plus"></i>
              </button>
              <h6>Upload photo</h6>
              <button className="border-0 bg-white" onClick={() => setShowUploader(false)}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* DROP BOX */}
            <div
              className={`drop-box ${dragging ? "dragging" : ""}`}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={() => setDragging(true)}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >

              <input id="fileInput" type="file" multiple hidden
                onChange={(e) => handleFiles([...e.target.files])}
              />

              {currentImages.length === 0 ? (
                <p className="text-center btn-dark pt-2">Drag & Drop Images</p>
              ) : (
                <div className="d-flex flex-wrap gap-2">
                  {currentImages.map((img, i) => (
                    <div key={i} className="img-wrapper">
                      <img src={img} className="img-preview" />

                      <button
                        className="delete-btn"
                        onClick={() => handleRemove(i)}
                      >
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* UPLOAD */}
            {!!currentFiles.length && (
              <button className="btn btn-dark mt-3 w-100" onClick={handleUpload}>
                Upload
              </button>
            )}

          </div>
        </div>
      )}
    </div>
  );
};