import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContextProvider';
import UserContextProvider from './context/UserContextProvider';
import Router from './router/Router';


function App() {
  return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
  );
}

export default App;
