import React from 'react';

const Friend = ({person}) => {
  return (
    <div>
      <h2>Name : {person.name}</h2>
      <p>Age : {person.age}</p>
      <p>Email : {person.email}</p>
    </div>
  )
}

export default Friend;