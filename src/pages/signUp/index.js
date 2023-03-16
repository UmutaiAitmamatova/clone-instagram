import React from 'react';
import './signUp.scss';
import instagram from '../../assets/img/instagram.png'
import { Link } from 'react-router-dom';

function SignUp() {
    console.log('hello');
    return (
        <div className='sign_up'>
            <div className='block'>
                <div className='top'>
                    <img src={instagram} alt="Logo" />
                    <div className='inputs'>
                        <input type="text" name="username"/>
                        <label for="name">username</label>
                    </div>
                    <div className='inputs'>
                        <input type="text" name="firstname"/>
                        <label for="name">Firstname</label>
                    </div>

                    <div className='inputs'>
                        <input type="text" name="lastname"/>
                        <label for="name">Lastname</label>
                    </div>

                    <div className='inputs'>
                        <input type="email" name="email"/>
                        <label for="name">Email</label>
                    </div>

                    <div className='inputs'>
                        <input type="taxt" name="bio"/>
                        <label for="name">Bio</label>
                    </div>

                    <div className='inputs'>
                        <input type="password" name="password"/>
                        <label for="name">Password</label>
                    </div>

                    <div className='inputs'>
                    <input type="password" name="password"/>
                        <label for="name">Password repeat</label>
                    </div>

                    <div className='inputs'>
                    <input type="file" />
                        <label for="name">Avatar</label>
                    </div>

                    <button>Зарегистрироваться</button>
                </div>

                <div className='bottom'>
                    <span className='forget'>У вас уже есть аккаунт? </span>
                    <Link to={'/signIn'}><span className='signup'> Войти</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;