import React from 'react';
import './signIn.scss';
import instagram from '../../assets/img/instagram.png'

function SignIn() {
    return (
        <div className='sign_in'>
            <div className='block'>
                <div className='top'>
                    <img src={instagram} alt="Logo" />
                        <input type="text" name="username" value="username"/>
                        <input type="password" name="password" value="password"/>
                    <button>Back</button>
                    <span>Forgot passwors?</span>
                </div>

                <div className='bottom'>
                    <span className='forget'>У вас ещё нет аккаунта? </span>
                    <span className='sign_up'>Зарегистрироваться</span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;