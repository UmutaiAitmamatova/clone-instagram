import React, { useState } from "react";
import "./signIn.scss";
import instagram from "../../assets/img/instagram.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

function SignIn() {
    // const { userLogin } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {

    }

    return (
        <div className="sign_in">
            <div className="block">
                <div className="top">
                    <img src={instagram} alt="Logo" />
                    <form>
                        <input
                            type="text"
                            name="username"
                            value={username}
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                        />
                    </form>
                    <button onClick={handleSignIn()}>Войти</button>
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
