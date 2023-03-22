import React from "react";
import "./signIn.scss";
import instagram from "../../assets/img/instagram.png";
import { Link } from "react-router-dom";
import { REQUEST } from "../../api";
import { log_in } from "../../configs/configs";
// import { useAuth } from "../../context/AuthProvider";

function SignIn() {

    const onSubmit = (data) => {
        // console.log('data', data);
        // if (data) {
            const request = log_in(data);
            console.log('log', request);

            request.then(res => {
                const data = res.data;
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.refresh);

            })
        // }
    };

    // console.log(onSubmit());


    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // // console.log('userLogin', userLogin);

    // const handleSignIn = (data) => {

    //         userLogin(username, password)
    //             localStorage.setItem("access", data.access);
    //             localStorage.setItem("refresh", data.refresh);

    // }

    return (
        <div className="sign_in">
            <div className="block">
                <div className="top">
                    <img src={instagram} alt="Logo" />
                    <form onSubmit={onSubmit} className="forms">
                        <div className='inputs'>
                            <input
                                type="text"
                                name="username"
                            />
                            <label for="name">Username</label>
                        </div>
                        <div className='inputs'>
                            <input
                                type="password"
                                name="password"
                            />
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
