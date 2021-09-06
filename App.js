import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import './App.css';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login,logout } from './features/features/userSlice'
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=>  {
    auth.onAuthStateChanged((userAuth)=>  {
      if(userAuth){
        //user logged in
        dispatch(
          login ({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName :userAuth.displayName,
          photoUrl : userAuth.photoURL
      }))
      }else{
         // user logout
         dispatch(logout())
      }
    });
  },[] );
  return (
    <div className="app">
     {/* <h1>Linkedln clone started</h1> */}
     {/* Header */}
     <Header/>
     {!user? (<Login/>) :
     (
        //  {/* App bar */}
         <div  className ="app_body">
                    {/* Side bar */}
             <Sidebar></Sidebar>
         {/* Feed */}
                   <Feed/>
                   <Widgets></Widgets>
        </div>
 
     )}
    </div>
  );
}

export default App;
