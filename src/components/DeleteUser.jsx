import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUsers } from '../store/UserSlice';
import { v1 } from 'uuid';

function DeleteUser() {
    const dispatch = useDispatch();
    const clearAll = () => {
        let obj = v1();
        console.log(obj);
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