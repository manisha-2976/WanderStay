import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PhotoTour.css";

const ROOM_OPTIONS = [
  { name: "Art studio", icon: "🎨" },
  { name: "Back garden", icon: "🌳" },
  { name: "Balcony", icon: "🏢" },
  { name: "Bedroom", icon: "🛏️" },
  { name: "Bathroom", icon: "🚿" },
];

export const PhotoTour = () => {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedRooms = localStorage.getItem("rooms");

    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  const handleNext = () => {
    if (!selectedRoom) return;

    const alreadyExists = rooms.find(r => r.name === selectedRoom.name);
    if (alreadyExists) {
      setShowModal(false);
      setSelectedRoom(null);
      return;
    }

    setRooms([...rooms, { name: selectedRoom.name }]);
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <>
      <div className="ps-4">
        <div className="d-flex justify-content-between mb-3">
          <h2>Image tour</h2>
          <button className="p-2 rounded bg-white" onClick={() => setShowModal(true)}>
            Add room or space
          </button>
        </div>

        <div className="d-flex flex-wrap gap-4">
          {rooms.map((room, i) => (

            <div key={i} className="room-card"
              onClick={() => navigate(`/listing/${id}/image/upload/${room.name}`)}>

              <div className="img-box">
                {room.images && room.images.length > 0 ? (
                  <img src={room.images[0]} alt="" />
                ) : (
                  <span onClick={() => navigate(`/listing/${id}/image/upload/${room.name}`)}>
                    Add photos
                  </span>
                )}
              </div>
              <p className="room-name text-center">{room.name}</p>
            </div>
          ))}
        </div>
      </div>

      {
        showModal && (
          <div className="overlay">
            <div className="p-4 rounded bg-white overflow-y-auto">
              <div className="show-modal ">
                <div className="d-flex justify-content-between">
                  <h3>Choose a room or space</h3>
                  <button className="border-0 bg-white" onClick={() => setShowModal(false)}>✖</button>
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  {ROOM_OPTIONS.map((room, i) => (
                    <div
                      key={i}
                      className={`modal-card ${selectedRoom?.name === room.name ? "active" : ""
                        }`}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <div className="icon">{room.icon}</div>
                      <p>{room.name}</p>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button className="bg-white p-2 rounded" onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );

}