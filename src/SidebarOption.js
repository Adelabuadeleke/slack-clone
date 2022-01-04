import React from 'react'
import './SidebarOption.css'
import { useNavigate } from 'react-router-dom';
import db from "./firebase";



function SidebarOption({Icon, title, id, addChannelOption}) {

  const history = useNavigate();
  const selectChannel = () => {
    if(id) {
      history(`/room/${id}`)
    } else {
      history(title);
    }
  };

  const addChannel = ()=>{
    const channelName = prompt('Please enter the channel name');


    if(channelName) {
      db.collection('rooms').add({
        name:channelName,
      })
    }
  };
  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ): (
        <h3 className="sidebarOption__channel">
          <span className='sidebarOption__hash'>#</span>{title}
        </h3>
      )}
    </div>
  )
}

export default SidebarOption;
