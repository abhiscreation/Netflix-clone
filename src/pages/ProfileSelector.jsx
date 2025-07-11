import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalImage from "../components/GlobalImage";
import "./ProfileSelector.css";

const DEFAULT_PROFILES = [
  {
    id: "children",
    name: "Children",
    avatar: "/Netflix_logo.png",
    isChildren: true
  }
];

const getProfiles = () => {
  const stored = localStorage.getItem("netflix_profiles");
  if (stored) return JSON.parse(stored);
  return DEFAULT_PROFILES;
};

const saveProfiles = (profiles) => {
  localStorage.setItem("netflix_profiles", JSON.stringify(profiles));
};

const ProfileSelector = () => {
  const [profiles, setProfiles] = useState(getProfiles());
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("/Netflix_logo.png");
  const navigate = useNavigate();

  useEffect(() => {
    saveProfiles(profiles);
  }, [profiles]);

  const handleSelect = (profile) => {
    localStorage.setItem("netflix_selected_profile", JSON.stringify(profile));
    if (profile.isChildren) {
      navigate("/childrenhome");
    } else {
      navigate("/home");
    }
  };

  const handleAddProfile = () => {
    if (!newName.trim()) return;
    const newProfile = {
      id: Date.now().toString(),
      name: newName,
      avatar: selectedAvatar,
      isChildren: false
    };
    setProfiles([...profiles, newProfile]);
    setShowAdd(false);
    setNewName("");
    setSelectedAvatar("/Netflix_logo.png");
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="profile-selector-bg">
      <div className="profile-selector-container">
        <h2>Who's watching?</h2>
        <div className="profile-list">
          {profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <GlobalImage
                src={profile.avatar}
                alt={profile.name}
                width={100}
                height={100}
                className="profile-avatar"
                style={{ borderRadius: "8px" }}
                onClick={() => handleSelect(profile)}
              />
              <div className="profile-name">{profile.name}</div>
              {!profile.isChildren && (
                <button className="delete-btn" onClick={() => handleDelete(profile.id)}>
                  Delete
                </button>
              )}
            </div>
          ))}
          <div className="profile-card add-profile" onClick={() => setShowAdd(true)}>
            <div className="add-avatar">+</div>
            <div className="profile-name">Add Profile</div>
          </div>
        </div>
        {showAdd && (
          <div className="add-profile-modal">
            <h3>Create Profile</h3>
            <input
              type="text"
              placeholder="Profile Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            {/* You can add more avatar options here if you want */}
            <button onClick={handleAddProfile}>Create</button>
            <button onClick={() => setShowAdd(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSelector;
