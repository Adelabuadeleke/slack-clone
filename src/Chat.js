import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams} from 'react-router-dom';
import { StarBorderOutlined } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';
import db from './firebase';
import Message from './Message'

import ChatInput from './ChatInput';

function Chat() {
  const {roomId} = useParams();
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])

  useEffect (()=>{
    if(roomId) {
      db.collection('rooms').doc(roomId)
      .onSnapshot(snapshot =>
        setRoomDetails(snapshot.data())
      )
    }

    db.collection('rooms').doc(roomId)
    .collection('messages').orderBy('timestamp', 'asc')
    .onSnapshot(
      (snapshot) =>setRoomMessages(snapshot.docs.map((doc) => (
        doc.data()
      )))
    )
  }, [roomId, roomMessages]);
  


  return (
    <div className='chat'>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className='chat__channelName'>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p><InfoOutlined />Detais</p>
        </div>

      </div>

      <div className='chat__messages'>
        {roomMessages.map(({ message, timestamp, user, userImage})=>(
          <Message message={message} timestamp={timestamp} user={user} userImage={userImage}/>
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  )
}

export default Chat
