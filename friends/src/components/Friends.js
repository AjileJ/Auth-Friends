import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import NewFriend from './NewFriend';
import Friend from './Friend';

const Friends = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('/friends')
    .then(res => setFriends(res.data))
    .catch(err => console.log(err.response))
  })
  return (
    <div>
      <NewFriend />
      <h1>List of Friends !</h1>
      {friends.map(friend => (
        <div key = {friend.id}>
          <Friend person = {friend} />
        </div>
      ))}
    </div>
  )
}
export default Friends;