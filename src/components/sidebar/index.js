import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import firebase from '../../firebaseConfig';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <NavLink to='/' exact>Contacts</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
        <li>
          <button onClick={() => firebase.auth().signOut()}>SignOut</button>
        </li>
      </ul>
    </div>
  )
}
