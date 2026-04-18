import React from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: 120,
      img: "/assets/room.png",
    },
    {
      id: 2,
      name: "Luxury Room",
      price: 250,
      img: "/assets/room2.png",
    },
  ];

  const handleSelect = (room) => {
    navigate("/booking", { state: room });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
      {rooms.map((room) => (
        <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          <img src={room.img} className="h-64 w-full object-cover" />

          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">{room.name}</h2>
            <p className="text-gray-500">${room.price} / night</p>

            <button
              onClick={() => handleSelect(room)}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
            >
              Забронировать
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Rooms;