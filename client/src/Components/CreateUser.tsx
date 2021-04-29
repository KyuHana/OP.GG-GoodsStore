import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutation';

function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER)
  return (
    <div>
      <div className="createUser">
        <input 
          type="text" 
          placeholder="name" 
          value={name}
          onChange={(event) => {
          setName(event.target.value)
        }} />
        <input 
          type="text"
          placeholder="username" 
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value)
          }}  
        />
        <input 
          type="text" 
          placeholder="password" 
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button onClick={() => {
          createUser({
            variables: { name: name, username: userName, password: password},
          });
        }}
        >
          Create User
        </button>
      </div>
    </div>
  )
}

export default CreateUser