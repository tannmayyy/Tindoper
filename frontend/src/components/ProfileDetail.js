import React from 'react';

function ProfileDetail({ profile, onMatch, chatMessage, onChatMessageChange, onSendMessage }) {
  return (
    <div>
      <h2>Selected Profile: {profile.name}</h2>
      <button onClick={onMatch}>Match with this profile</button>
      <textarea
        placeholder="Type your message here..."
        value={chatMessage}
        onChange={(e) => onChatMessageChange(e.target.value)}
      />
      <button onClick={onSendMessage}>Send Message</button>
    </div>
  );
}

export default ProfileDetail;
