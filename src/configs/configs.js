import axios from "axios";

// const baseUrl = "https://cryxxxen.pythonanywhere.com";
// export const instance = axios.create({baseUrl});

const instance = axios.create({baseURL: `https://cryxxxen.pythonanywhere.com/`});


export const log_in = ( data ) => instance.post('token/', data)




// export const SIGN_UP = (data) => instance.post(requestPath.signIn, data);
// export const SIGN_IN = (data) => instance.post(requestPath.signUp, data);