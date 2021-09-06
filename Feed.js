import React,{useState,useEffect} from 'react'
import './Feed.css'
import{GoPencil} from 'react-icons/go'
import InputOptions from './InputOptions'
import {ImImage} from 'react-icons/im'
import{RiVideoFill} from 'react-icons/ri'
import{RiCalendarEventFill} from 'react-icons/ri'
import{RiArticleLine} from 'react-icons/ri';
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from './features/features/userSlice'
import FlipMove from 'react-flip-move'
// import { auth } from './firebase'
function Feed() {
    const user = useSelector(selectUser);
    const[input, setInput] = useState('')
    const [posts,setPosts] = useState([]) 

    useEffect(()=>{
        db.collection("posts").orderBy("timestamo","desc").onSnapshot((snapshot)=> 
        setPosts(
             snapshot.docs.map((doc)=>({
                 id : doc.id,
                 data: doc.data(),

             }))
        )
        )
        
    },[])
    const sendPost = (e)=>{
        e.preventDefault();
      db.collection("posts").add({
          name :user.displayName,
          description:user.email,
          message: input,
          photoUrl: user.photoUrl || " ",
          timestamo : firebase.firestore.FieldValue.serverTimestamp()

      })
      setInput('');
    }
    return (
        <div className= "feed">
            <div className='feed_inputcontainer'>
                <div className="feed_input">
                  <GoPencil/>
                  <form >
                      <input  value = {input} 
                      onChange={(e)=>
                        setInput(e.target.value)}  type ='text'/>
                      <button onClick={sendPost} type="submit">Send</button>

                  </form>

                </div>
                <div className="feed_inptOption">
                    <InputOptions Icon = {ImImage}
                    title= "Photo" color = "#70B5F9"/>
                     <InputOptions Icon = {RiVideoFill}
                    title= "Video" color = "#E7A33E"/>
                     <InputOptions Icon = {RiCalendarEventFill}
                    title= "Event" color = "#C0CBCD"/>
                     <InputOptions Icon = {RiArticleLine}
                    title= "Write article" color = "#7fC159"/>
                </div>
            </div>
            {/* post */}
            <FlipMove>
            {posts.map(({id, data :{name, description,message,photoUrl}})=>(
              <Post
               key ={id}
               name ={name}
               description={description}
               message={message}
               photoUrl={photoUrl}>

              </Post>
            )
            )}
            </FlipMove>
           </div>
    )
}

export default Feed
