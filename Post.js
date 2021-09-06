import { Avatar } from 'antd'
import React,{forwardRef }from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import{AiOutlineLike} from 'react-icons/ai'
import{FaRegCommentDots} from 'react-icons/fa'
import{RiShareForwardFill} from 'react-icons/ri'
import{IoIosSend} from 'react-icons/io'
const Post = forwardRef(({name,description, message,photoUrl},ref)=> {
    return (
        <div ref={ref} className="post">
            <div className='post_header'>
                <Avatar src={photoUrl}  style={{backgroundColor: 'lightgray' }} size={25}  icon={name[0]}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>

            </div>
            <div className="post_buttons">
                <InputOptions Icon ={AiOutlineLike} title='Like'
                color="gray"></InputOptions>
                <InputOptions Icon ={FaRegCommentDots}
                title="comment"
                color ='gray'></InputOptions>
                <InputOptions Icon ={RiShareForwardFill}
                title = "share"
                color ="gray"></InputOptions>
                <InputOptions Icon ={IoIosSend}
                title ='Send'
                color ="gray"></InputOptions>

            </div>
        </div>
    )
})

export default Post
