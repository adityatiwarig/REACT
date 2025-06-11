import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            onClick={logoutHandler}
            className="text-white bg-blue-500 hover:bg-blue-600 transition duration-200 font-semibold py-2 px-4 rounded-full"
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
