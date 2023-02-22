import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUsers } from '../store/UserSlice';

function DeleteUser() {
    const dispatch = useDispatch();
    const clearAll = () => {
        dispatch(clearUsers());
    }
  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={clearAll}>Clear User</button>
    </div>
    </>
  )
}

export default DeleteUser