import React, { useState } from 'react';
import './ChatInput.css';
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'



function ChatInput({channelName, channelId}) {
  const [input, setInput] = useState('')
  const [{user}] = useStateValue();
  const sendMessages = e => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      })
    }

  }
  return (
    <div  className='chatInput'>
      <form>
        <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={`Enter Message...`}/>
        <button type="submit" onClick={sendMessages}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
