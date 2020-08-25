import React, { useState } from 'react'
import {  Members, Admins } from './store'
import Login from './login'
import About from './About'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
const Main =()=>{
   const [loggedIn,setLoggedIn]=useState(false);
   const [adminPortal, setAdminPortal] = useState(false);
   


   const memberLogIn = ({ email, password }) => {
    const validLogIn = Members.find(
        (mem) => mem.email === email && mem.password === password
    )

    if (validLogIn === undefined) {
        alert('Invalid Email and Password')
    } else {
        localStorage.setItem('user_id', validLogIn.id)
        setAdminPortal(false)
        setLoggedIn(true)
    }
}
const adminLogIn = ({ email, password }) => {
    const validLogIn = Admins.find(
        (mem) => mem.email === email && mem.password === password
    )

    if (validLogIn === undefined) {
        alert('Invalid Email and Password')
    } else {
        localStorage.setItem('user_id', validLogIn.id)
        setAdminPortal(true)
        setLoggedIn(true)
    }
}
    
    return (
        <div className="App">
       
			{loggedIn === true ? (
				<h1>  Welcome user</h1>
			) : (
				<Login memberLogIn={memberLogIn} adminLogIn={adminLogIn} />
			)}
			{adminPortal === false ? (
				<div>
					<h1></h1>
					
				</div>
			) : (
				<h1>Welcome Admin</h1>
			)}
		</div>)
      
}
export default Main;