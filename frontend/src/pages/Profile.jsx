import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [userName, setUserName] = useState("Anuj Ahirwar");
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfileImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
            <Link to='/main' className="bg-blue-600 rounded">Home</Link>

            {/* Profile Image Section */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-4">
                {profileImage ? (
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4 ml-23 text-sm text-gray-300"
            />

            {/* User Information */}
            <h2 className="text-2xl font-semibold">{userName}</h2>
        </div>
    );
};

export default Profile;
