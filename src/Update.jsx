import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateUser } from './UserReducer';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';

function Update() {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f => f.id == id))
  const {name, email} = existingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }

  return (
    <div className='d-flex vh-100 justify-center items-center'>
      <div className='text-center w-50 border bg-neutral text-black p-5'>
        <h3 className='text-white mb-5 font-serif font-bold'>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className='mb-7'>
            <input
              type="text"
              name='name'
              placeholder='enter name'
              value={uname}
              onChange={e => setName(e.target.value)}
              className='input input-bordered input-warning w-full max-w-xs'
            />
          </div>
          <div>
            <input
              type="email"
              name='email'
              placeholder='enter email'
              value={uemail}
              onChange={e => setEmail(e.target.value)}
              className='input input-bordered input-warning w-full max-w-xs'
            />
          </div> <br />
          <button className='btn btn-outline btn-warning font-serif'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update