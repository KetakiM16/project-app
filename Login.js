import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { login } from './features/features/userSlice'
import "./Login.css"
function Login() {
    const[email,setEmail]= useState("")
    const[password,setPassword] = useState("")
    const[name,setName] = useState('')
    const[profilepic,setProfilepic]= useState('')
    const dispatch = useDispatch();
const loginToapp =(e)=>{
    
    e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
       .then(userAuth=>{
           dispatch(login({
            email : userAuth.user.email,
            uid : userAuth.user.uid,
            displayName :userAuth.user.displayName,
            photoUrl : userAuth.user.photoURL
           })
           )
       })
       .catch(error=>alert(error))
    }
    const register =()=>{
        if(!name){
            return alert("please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile ({
                displayName : name,
                photoUrl :   profilepic,
            })
            //dispatching into store after geting user at login page
            .then(()=>{
                dispatch(
                    login ({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName :name,
                    photoUrl : profilepic
                }))
            })
        })
        .catch((error)=> alert(error))
    }
       
    return (
        <div className="login">
            <img src ='https://www.pngfind.com/pngs/m/123-1232187_linkedin-icon-linkedin-hd-png-download.png'
            alt =""></img>
            <form>
                <input  value={name} 
                onChange ={(e)=>setName(e.target.value)}
                type ='text' placeholder="Full Name reqired to register"></input>
                
                <input type ='text' placeholder="Profile pic url (optional)"
                value ={profilepic}
                onChange ={(e)=>setProfilepic(e.target.value)}
                ></input>
                <input  placeholder="Email" 
                type ='email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}    />
                
                <input  placeholder="Password" 
                type ='password' 
                value ={password}
                onChange ={(e)=> setPassword(e.target.value)}  />
                <button type= "submit" onClick={loginToapp}>Sign in</button>
            </form>
        <p>Not a member ?{" "}
        <span className="login_register" onClick={register}>Register now</span>
        </p>
        </div>

    )
}

export default Login
