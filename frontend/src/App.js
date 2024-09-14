import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [chatMessage, setChatMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/profiles')
      .then(response => setProfiles(response.data))
      .catch(error => console.error('Error fetching profiles:', error));
  }, []);

  const handleMatch = () => {
    if (selectedProfile) {
      axios.post('http://localhost:5000/match', { profileId: selectedProfile.id })
        .then(response => console.log('Match response:', response.data))
        .catch(error => console.error('Error matching profiles:', error));
    }
  };

  const handleChat = () => {
    if (selectedProfile && chatMessage) {
      axios.post('http://localhost:5000/chat', { profileId: selectedProfile.id, message: chatMessage })
        .then(response => console.log('Chat response:', response.data))
        .catch(error => console.error('Error sending message:', error));
    }
  };

  return (
    <div>
      <h1>Tinder for Developers</h1>
      <ProfileList profiles={profiles} onSelectProfile={setSelectedProfile} />
      {selectedProfile && (
        <ProfileDetail
          profile={selectedProfile}
          onMatch={handleMatch}
          chatMessage={chatMessage}
          onChatMessageChange={setChatMessage}
          onSendMessage={handleChat}
        />
      )}
    </div>
  );
}

export default App;
