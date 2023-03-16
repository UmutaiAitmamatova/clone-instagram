import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

function Router() {
  return (
    <>
    <Routes>
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default Router;