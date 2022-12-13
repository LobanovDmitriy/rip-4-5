import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchSignupAction } from '../store/actions/authAction';
import {useDispatch, useSelector} from "react-redux";
import {LinkStyled} from "../components/LinkStyled";
import {fetchGetUserAction} from "../store/actions/userAction";

export const RegistrationPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { error, authorized, access, user } = useSelector((store) => store.user);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(fetchSignupAction(data));
        // localStorage.getItem('access') && dispatch(fetchGetUserAction());
    };

    useEffect(() => {
        authorized && navigate('/');
    }, [authorized, dispatch, navigate]);

    return (
        <div>
            {!authorized && (
                <div className="flex flex-col justify-center items-center">
                <form  className="flex flex-col items-center gap-1 text-xl border-2 rounded-md border-blue-500 font-semibold w-1/4 py-2 px-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="border h-10 py-2 px-4 outline-none rounded-md"
                        width='280px'
                        height='36px'
                        placeholder='Enter username...'
                        {...register('username', { required: true })}
                    />
                    <input
                        className="border h-10 py-2 px-4 outline-none rounded-md"
                        width='280px'
                        height='36px'
                        placeholder='Enter email...'
                        {...register('email', { required: true })}
                    />
                    <input
                        className="border h-10 py-2 px-4 outline-none rounded-md"
                        width='280px'
                        height='36px'
                        placeholder='Enter password...'
                        {...register('password', { required: true })}
                        type='password'
                    />
                    <button type='submit'>
                        Sign up
                    </button>
                    <p>
                        {error.message}
                    </p>
                    <p className="text-sm">
                        Already have an account?{' '}
                        <LinkStyled to='/auth/signin'>
                            Sign in
                        </LinkStyled>
                    </p>
                </form>
                </div>
            )}
        </div>
    );
};