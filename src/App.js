import { React } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from './components/signin/Signin'
import Register from './components/register/Register'
import Header from './components/header/Header';
function App() {
  return (
    <Router>
      <Header />
      <ToastContainer autoClose={2000} />
      <main className='main'>
        <Route path='/login' component={Signin} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Signin} exact />
      </main>
    </Router>

  );
}

export default App;
