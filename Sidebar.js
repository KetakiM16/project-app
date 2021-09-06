import { Avatar } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/features/userSlice'
import './Sidebar.css'
function Sidebar() {
    // getting user store layer left hand side
    const user = useSelector(selectUser)
    const recentitem = (topic)=>(
        <div className ="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
           <div className= "sidebar_top">
               {/* // background image*/}
               <img src=" https://png.pngtree.com/background/20210712/original/pngtree-abstract-connection-dots-technology-background-picture-image_1177231.jpg" alt = ""/>
               {/* // upward name */}
               {/* <Avatar src = {user.photoUrl} 
               style={{backgroundColor: '#fde3cf',size: '64',shape:"cirlcle" }} className="sidebar_avatar">{user.email[0]} 
                                </Avatar> */}
                  <Avatar style={{ backgroundColor: 'lightgray' }} icon={user.email[0]} shape="circle" size={40} > {user.email[0]}</Avatar>             
               <h2 >{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>
            <div className="sidebar_stats">
                  <div className="sidebar__stat">
                     <p>Who view your</p>
                     <p className="sidebar_statsNumber">1612</p>

                  </div>
                  <div className= 'sidebar__stat'>
                  <p> view on post</p>
                     <p className="sidebar_statsNumber">1612</p>

                 </div>
                 <div className= 'sidebar_bottom'>
                  <p>Recent</p>
                  {recentitem('reactjs')}
                  {recentitem('engineering')}
                  {recentitem('sowftware')}
                 
                  </div>
                 </div>
           </div>
    )
}

export default Sidebar
