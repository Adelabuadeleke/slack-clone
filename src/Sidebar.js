import './Sidebar.css'
import React, {useState, useEffect} from 'react'
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, PeopleAlt } from '@material-ui/icons'
import { Create } from '@material-ui/icons'
import SidebarOption from './SidebarOption'
import { InsertComment } from '@material-ui/icons'
// import { collection, getDocs} from 'firebase/firestore'
import db from'./firebase';
import {useStateValue} from './StateProvider';





function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{user}] =  useStateValue();


  useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot => {
      // console.log(snapshot.docs)
      setChannels(snapshot.docs.map(doc=>({
        id: doc.id,
        name:doc.data().name,
      })
      ))
    })
  }, [])
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Agba Coder! 🚀</h2>
          <h3><FiberManualRecord /> {user?.displayName}</h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads"/>
      <SidebarOption Icon={Inbox} title="Mentions & reactions"/>
      <SidebarOption Icon={Drafts} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
      <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
      <SidebarOption Icon={Apps} title="Apps"/>
      <SidebarOption Icon={FileCopy} title="File browser"/>
      <SidebarOption Icon={ExpandLess} title="Show less"/>
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels"/>
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
      {/* Connect to dB and list all the channels */}
      {/* <SidebarOption... /> */}
      {channels.map(channel =>(
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar
