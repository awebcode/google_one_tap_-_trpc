// src/components/UserProfile.tsx

import React from "react";

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  firstName: string;
  lastName: string;
  access: string[];
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={user.photoURL}
        alt={`${user.displayName}'s avatar`}
      />
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">{user.displayName}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">
          {user.firstName} {user.lastName}
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Access:</h2>
        <ul itemType=""  className="list-disc list-inside">
          {user.access.map((accessId) => (
            <li  key={accessId}>{accessId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
