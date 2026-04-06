import {
  FaWifi, FaCar, FaSnowflake, FaTv, FaUtensils,
  FaFan, FaCamera, FaSmoking
} from "react-icons/fa";

import {
  FaFireExtinguisher, FaBell, FaShieldAlt, FaDoorClosed, FaFirstAid, FaLock,
  FaVideo, FaExclamationTriangle, FaKey
} from "react-icons/fa";

// SAFETY MAP
export const safetyMap = {
  smoke_alarm: { icon: <FaBell />, label: "Smoke Alarm" },
  carbon_monoxide: { icon: <FaExclamationTriangle />, label: "Carbon Monoxide Alarm" },
  fire_extinguisher: { icon: <FaFireExtinguisher />, label: "Fire Extinguisher" },
  first_aid_kit: { icon: <FaFirstAid />, label: "First Aid Kit" },
  camera: { icon: <FaVideo />, label: "Security Camera" },
  safe: { icon: <FaLock />, label: "Safe / Locker" },
  lockbox: { icon: <FaKey />, label: "Lockbox" },
  bedroom_lock: { icon: <FaDoorClosed />, label: "Bedroom Door Lock" },
  gated_property: { icon: <FaShieldAlt />, label: "Gated Property" }
};

// AMENITIES MAP
export const amenitiesMap = {
  wifi: { icon: <FaWifi />, label: "Wi-Fi" },
  parking: { icon: <FaCar />, label: "Parking" },
  ac: { icon: <FaSnowflake />, label: "Air Conditioning" },
  tv: { icon: <FaTv />, label: "TV" },
  kitchen: { icon: <FaUtensils />, label: "Kitchen" },
  fan: { icon: <FaFan />, label: "Ceiling Fan" },
  camera: { icon: <FaCamera />, label: "Security Camera" },
  kettle: { icon: <FaUtensils />, label: "Kettle" },
  cutlery: { icon: <FaUtensils />, label: "Cutlery" },
  self_checkin: { icon: <FaLock />, label: "Self Check-in" },
  smoking: { icon: <FaSmoking />, label: "Smoking Allowed" }
};