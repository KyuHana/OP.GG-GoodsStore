import React, { useState } from 'react';
import {UPDATE_PASSWORD} from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';

function UpdatePassword() {
  const [username, setUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updateUser, { error }] = useMutation(UPDATE_PASSWORD);

  const updatePassword = () => {
    updateUser({variables: {username: username, currentPassword: currentPassword, newPassword: newPassword}})
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="username..." 
        onChange={(event) => {
          setUserName(event.target.value)
        }}  
        value={username}
      />
      <input 
        type="password" 
        placeholder="Current Password..." 
        onChange={(event) => {
          setCurrentPassword(event.target.value)
        }}
        value={currentPassword}
      />
      <input 
        type="password" 
        placeholder="New Password..." 
        onChange={(event) => {
          setNewPassword(event.target.value)
        }}  
        value={newPassword}
      />

      <button onClick={() => {updatePassword()}}>UPDATE PASSWORD</button>
    </div>
  )
}

export default UpdatePassword
