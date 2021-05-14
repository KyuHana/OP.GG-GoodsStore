import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutation';
import '../componentscss/navbar/navbar.css';
import MenuIcon from '@material-ui/icons/Menu';

function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const clickFilter = () => {
    
  }
  const [createUser, { error }] = useMutation(CREATE_USER)
  return (
    <div className="navbar">
      <div className="inNavbarCon">
        <div className="navbar__logo">
          <span>OP.GG</span>  
        </div>
        <div className="navbar__searchInput">
            <input type="text" placeholder="굿즈는 opgg"/>
        </div>
        <div className="navbar__searchFilter">
          <MenuIcon className="navbar__searchFilter_icon" onClick={() => clickFilter()} fontSize="small"/>
        </div>
      </div>
    </div>
    //<div>
    //  <div className="createUser">
    //    <input 
    //      type="text" 
    //      placeholder="name" 
    //      value={name}
    //      onChange={(event) => {
    //      setName(event.target.value)
    //    }} />
    //    <input 
    //      type="text"
    //      placeholder="username" 
    //      value={userName}
    //      onChange={(event) => {
    //        setUserName(event.target.value)
    //      }}  
    //    />
    //    <input 
    //      type="text" 
    //      placeholder="password" 
    //      value={password}
    //      onChange={(event) => {
    //        setPassword(event.target.value)
    //      }}
    //    />
    //    <button onClick={() => {
    //      createUser({
    //        variables: { name: name, username: userName, password: password},
    //      });
    //    }}
    //    >
    //      Create User
    //    </button>
    //  </div>
    //</div>
  )
}

export default CreateUser