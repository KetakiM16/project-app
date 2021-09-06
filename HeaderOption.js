import { Avatar } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/features/userSlice'
import './HeaderOption.css'
// import {Avatar} from 'antd'
function HeaderOption({ avatar, Icon, title,onClick}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headeroption_icon"></Icon>   }
            {avatar && <Avatar className="headeroption_icon"  style={{backgroundColor: 'lightgray'   }} size={30} icon={user?.email[0]} >{user?.email[0]}</Avatar>}
           <h3 className="headeroption_title">{title}</h3>
            
        </div>
    )
}
 
export default HeaderOption
