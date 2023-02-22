import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DeleteUser from './DeleteUser'
import { MdDeleteForever } from "react-icons/all.js"
import { removeUser } from '../store/UserSlice'

const DisplayUser = () => {
    const data = useSelector((state) => {
        return state.users;
    })
    const dispatch = useDispatch();
    const delFunc = (id) => {
        dispatch(removeUser(id));
    }
  return (
    data.map((user, id) => {
        return <li key={id}>
         {user}
          <button onClick={()=> delFunc(id)}>
            <MdDeleteForever className='delete-icon' />
          </button>
        </li>
    })
  )
}

export default DisplayUser