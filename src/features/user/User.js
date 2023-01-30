import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, fetchUsersByPage } from "./userSlice";

const User = () => {
    const users = useSelector(getUsers);
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(fetchUsersByPage(1))}>Get Users</button>
            {users.map(user => <p key={user.id}>{user.first_name}</p>)}
        </>
    )
};

export default User;