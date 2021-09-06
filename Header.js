import React from 'react'
import './Header.css'
import { ImSearch} from "react-icons/im"
import HeaderOption from './HeaderOption'
import {TiHome} from 'react-icons/ti'
import {MdSupervisorAccount } from  'react-icons/md'
import {RiHandbagFill} from 'react-icons/ri'
 import  {BsFillChatDotsFill} from 'react-icons/bs'
 import {MdNotifications} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import {logout, selectUser} from './features/features/userSlice'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const logoutofApp =()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
           
            {/* <h1>This is header</h1> */}
            <div className="header_left">
                     <img src ="https://cdn-icons-png.flaticon.com/512/1409/1409945.png" alt ="">

                     </img>
             {/* serch icon */}
             <div className="header_search">
             <ImSearch/>
                  {/* serch text box */}
                <input placeholder="Search" type="text"></input> 
             </div>
            </div>
            <div className="header_right">
                  <HeaderOption Icon =  {TiHome} title= "Home"></HeaderOption>
                  <HeaderOption  Icon ={MdSupervisorAccount} title = "My Network"></HeaderOption>
                  <HeaderOption Icon ={RiHandbagFill} title= "job"></HeaderOption>
                  <HeaderOption Icon ={BsFillChatDotsFill} title ="Messaging"></HeaderOption>
                  <HeaderOption Icon={MdNotifications} title ="Notification"></HeaderOption>
                  <HeaderOption 
                   avatar = {true} title ="me"
                   onClick={logoutofApp}></HeaderOption>
            </div>
            
        </div>
    )
}

export default Header
