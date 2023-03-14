import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/signIn';

function Router() {
  return (
    <>
    <Routes>
        <Route path="/signIn" element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default Router;