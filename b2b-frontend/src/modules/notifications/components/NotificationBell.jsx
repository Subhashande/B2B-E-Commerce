import React, { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await apiClient.get("/notifications");
        setNotifications(res.data.notifications || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotifications();
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ position: "relative" }}>
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer",
          padding: "5px",
          display: "flex",
          alignItems: "center"
        }}
      >
        🔔
        {unreadCount > 0 && (
          <span style={{
            position: "absolute",
            top: "0",
            right: "0",
            background: "#ef4444",
            color: "#fff",
            fontSize: "10px",
            padding: "2px 5px",
            borderRadius: "10px",
            fontWeight: "bold"
          }}>
            {unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (
        <div style={{
          position: "absolute",
          top: "40px",
          right: "0",
          width: "300px",
          maxHeight: "400px",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          overflowY: "auto",
          zIndex: 1000,
          color: "#333",
          border: "1px solid #eee"
        }}>
          <div style={{ padding: "12px", borderBottom: "1px solid #eee", fontWeight: "bold" }}>
            Notifications
          </div>
          {notifications.map((n) => (
            <div key={n._id} style={{
              padding: "12px",
              borderBottom: "1px solid #f9f9f9",
              background: n.read ? "#fff" : "#f0f7ff",
              fontSize: "14px"
            }}>
              <p style={{ margin: "0 0 5px", fontWeight: "500" }}>{n.title}</p>
              <p style={{ margin: "0", color: "#666", fontSize: "12px" }}>{n.message}</p>
              <p style={{ margin: "5px 0 0", color: "#999", fontSize: "10px" }}>
                {new Date(n.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
          {notifications.length === 0 && (
            <div style={{ padding: "20px", textAlign: "center", color: "#999" }}>
              No notifications
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;