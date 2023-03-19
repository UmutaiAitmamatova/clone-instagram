import React from "react";
import "./signIn.scss";
import instagram from "../../assets/img/instagram.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

function SignIn() {
    const { userLogin } = useAuth();
    // console.log('userLogin', userLogin);

    const handleSignIn = (data) => {

            userLogin(data)
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.refresh);
        
    }

    return (
        <div className="sign_in">
            <div className="block">
                <div className="top">
                    <img src={instagram} alt="Logo" />
                    <form onSubmit={handleSignIn} className="forms">
                        <div className='inputs'>
                            <input type="text" name="username" />
                            <label for="name">Username</label>
                        </div>
                        <div className='inputs'>
                            <input type="password" name="password" />
                            <label for="name">Password</label>
                        </div>
                        <button type="submit">Войти</button>
                    </form>
                    <span>Вы забыли пароль?</span>
                </div>

                <div className="bottom">
                    <span className="forget">У вас ещё нет аккаунта? </span>
                    <Link to={"/signUp"}>
                        <span className="signup">Зарегистрироваться</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
