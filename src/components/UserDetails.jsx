import React from 'react'
import { useDispatch } from 'react-redux';
import { fakeName } from '../API';
import { addUser } from '../store/UserSlice';
import DisplayUser from './DisplayUser'


function UserDetails() {
    const disPatch = useDispatch();
    const fakeUser = (payload) => {
        disPatch(addUser(payload));
    }
  return (
    <>
        <div>UserDetails</div>
        <div className="add-user">
            <button onClick={()=>fakeUser(fakeName())}>
                Add user
            </button>
            <div>
                <ul>
                    <DisplayUser />
                </ul>
            </div>
        </div>
    </>
  )
}

export default UserDetails