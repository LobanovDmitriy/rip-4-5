import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Form, useNavigate} from 'react-router-dom';
import { fetchRefreshAction, fetchSigninAction } from '../store/actions/authAction';
import {LinkStyled} from "../components/LinkStyled";
import {fetchGetUser} from "../api/services/userService";
import {fetchGetUserAction} from "../store/actions/userAction";

export const SigninPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { error, authorized, access, user } = useSelector(store => store.user);
    const navigate = useNavigate();
    // const [access, setAccess] = useState(localStorage.getItem('accessToken'))
    // const [refresh, setRefresh] = useState(localStorage.getItem('refreshToken'))
    // const [refreshRequired, setRefreshRequired] = useState(false)


    const onSubmit = (data) => {
        dispatch(fetchSigninAction(data));
        // localStorage.getItem('access') && dispatch(fetchGetUserAction());
    };
    useEffect(()=>{
        authorized && navigate('/')
    }, [authorized, navigate])
    return (
        <div>
            {!authorized && (
                <div className="flex flex-col justify-center items-center">
                    <form className="flex flex-col items-center gap-1 text-xl border-2 rounded-md border-blue-500 font-semibold w-1/4 py-2 px-4" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="border h-10 py-2 px-4 outline-none rounded-md"
                            placeholder='Enter username...'
                            {...register('username', { required: true })}
                        />
                        <input
                            className="border h-10 py-2 px-4 outline-none rounded-md"
                            placeholder='Enter password...'
                            {...register('password', { required: true })}
                            type='password'
                        />

                        <button type='submit'>
                            Sign in
                        </button>
                        <p>
                            {error.message}
                        </p>
                        <p className="text-sm">
                            Don't have an account yet?{' '}
                            <LinkStyled to='/auth/signup'>
                                Sign up
                            </LinkStyled>
                        </p>
                    </form>
                </div>
            )}
        </div>
    );
};