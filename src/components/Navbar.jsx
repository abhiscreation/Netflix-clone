import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const DEFAULT_AVATAR = "/Netflix_logo.png";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [profileAvatar, setProfileAvatar] = useState(DEFAULT_AVATAR);
  const navigate = useNavigate();

  useEffect(() => {
    const selected = localStorage.getItem("netflix_selected_profile");
    if (selected) {
      try {
        const parsed = JSON.parse(selected);
        if (parsed.avatar && typeof parsed.avatar === "string" && parsed.avatar.trim() !== "") {
          setProfileAvatar(parsed.avatar);
        } else {
          setProfileAvatar(DEFAULT_AVATAR);
        }
      } catch {
        setProfileAvatar(DEFAULT_AVATAR);
      }
    } else {
      setProfileAvatar(DEFAULT_AVATAR);
    }
  }, []);

  const handleLogoClick = () => navigate("/home");
  const handleProfileClick = () => setShowProfile((prev) => !prev);
  const handleLogout = () => {
    localStorage.removeItem("netflix_selected_profile");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/Logonetflix.png"
          alt="Netflix"
          className="navbar-logo"
          onClick={handleLogoClick}
        />
        <ul className="navbar-menu">
          <li onClick={() => navigate("/home")}>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <span className="navbar-icon" title="Search">🔍</span>
        <span className="navbar-kids">Kids</span>
        <span className="navbar-icon" title="Notifications">🔔</span>
        <div
          className="navbar-profile"
          onClick={handleProfileClick}
          tabIndex={0}
        >
          <img
            src={profileAvatar}
            alt="Profile"
            className="profile-avatar"
            onError={e => { e.target.onerror = null; e.target.src = DEFAULT_AVATAR; }}
          />
          <span className="navbar-caret">▼</span>
          {showProfile && (
            <ul className="profile-dropdown">
              <li onClick={() => navigate("/profile")}>Account</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
