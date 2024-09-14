import React from 'react';

function ProfileList({ profiles, onSelectProfile }) {
  return (
    <div>
      <h2>Profiles</h2>
      {profiles.map(profile => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          <button onClick={() => onSelectProfile(profile)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
