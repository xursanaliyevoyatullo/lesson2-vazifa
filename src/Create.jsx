import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    navigate("/")
  }

  return (
    <div className='d-flex w-100 justify-center items-center'>
      <div className='w-50 text-center border bg-neutral text-black p-5'>
        <h3 className='mb-7 font-serif font-bold text-white'>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name='name'
              placeholder='enter name'
              onChange={e => setName(e.target.value)}
              className='input input-bordered input-warning w-full max-w-xs ml-10 mb-5'
            />
          </div>
          <div>
            <input
              type="email"
              name='email'
              placeholder='enter email'
              onChange={e => setEmail(e.target.value)}
              className='input input-bordered input-warning w-full max-w-xs ml-10'
            />
          </div> <br />
          <button className='btn btn-outline btn-warning font-serif'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create