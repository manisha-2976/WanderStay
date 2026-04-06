import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoTour.css";
import {
  FaBed, FaTree, FaBuilding, FaFilm, FaBath, FaUtensils, FaCouch, FaImages, FaHome
} from "react-icons/fa";

const ROOM_OPTIONS = [
  { name: "bedroom", label: "Bedroom", icon: FaBed, color: "#6C5CE7"},
  { name: "garden", label: "Garden", icon: FaTree, color: "#00B894" },
  { name: "balcony", label: "Balcony", icon: FaBuilding, color: "#0984E3" },
  { name: "cinema", label: "Cinema", icon: FaFilm, color: "#E84393" },
  { name: "bathroom", label: "Bathroom", icon: FaBath, color: "#00CEC9" },
  { name: "dining", label: "Dining area", icon: FaUtensils, color: "#FD9644" },
  { name: "kitchen", label: "Full kitchen", icon: FaUtensils, color: "#E17055" },
  { name: "living", label: "Living room", icon: FaCouch, color: "#A29BFE" },
  { name: "additional", label: "Additional photos", icon: FaImages, color: "#636E72" },
  { name: "exterior", label: "Exterior", icon: FaHome, color: "#2D3436" },
];

export const PhotoTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [imagesByRoom, setImagesByRoom] = useState({}); // ✅ NEW

  // ---------- LOAD ROOMS ----------
  useEffect(() => {
    const savedRooms = localStorage.getItem("rooms");
    if (savedRooms) setRooms(JSON.parse(savedRooms));
  }, []);

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
    console.log(rooms);
  }, [rooms]);

  // ---------- FETCH IMAGES FROM DB ----------
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/listing/${id}`
        );

        // group images by category
        const grouped = {};
        data.images.forEach(img => {
          const key = img.category;
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(img);
        });

        setImagesByRoom(grouped);

      } catch (err) {
        console.log(err);
      }
    };

    fetchImages();
  }, [id]);

  // ---------- ADD ROOM ----------
  const handleNext = () => {
    if (!selectedRoom) return;

    const exists = rooms.find(room => room.name === selectedRoom.name);
    if (exists) {
      setShowModal(false);
      setSelectedRoom(null);
      return;
    }

    setRooms([...rooms, { name: selectedRoom.name, label: selectedRoom.label }]);
    console.log("rooms:", rooms);
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <>
      <div className="ps-4">
        <div className="d-flex justify-content-between mb-3">
          <h2>Image tour</h2>

          <button
            className="p-2 rounded bg-white"
            onClick={() => setShowModal(true)}
          >
            Add room or space
          </button>
        </div>

        {/* ROOMS */}
        <div className="d-flex flex-wrap gap-4">
          {rooms.map((room, i) => {
            const roomImages = imagesByRoom[room.name.toLowerCase()] || [];

            return (
              <div key={i} className="room-card"
                onClick={() => navigate(`/listing/${id}/image/upload/${room.name}`)}
              >
                <div className="img-box">
                  {roomImages.length > 0 ? (
                    <img src={roomImages[0].url} alt="cover" />
                  ) : (
                    <span>Add photos</span>
                  )}
                </div>

                <p className="room-name text-center mb-0">{room.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="overlay">
          <div className="p-4 rounded bg-white overflow-y-auto" style={{ width: "43%" }}>

            <div className="d-flex justify-content-between">
              <h3>Choose a room or space</h3>
              <button
                className="border-0 bg-white"
                onClick={() => setShowModal(false)}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              {ROOM_OPTIONS.map((room, i) => {
                const Icon = room.icon; // 🔥 IMPORTANT

                return (
                  <div key={i}
                    className={`modal-card ${selectedRoom?.name === room.name ? "active" : "" }`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div className="icon">
                      <Icon size={24} color={room.color} /> 
                    </div>
                    <p>{room.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-end pt-3">
              <button className="bg-white p-2 rounded" onClick={handleNext}>
                Next
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};