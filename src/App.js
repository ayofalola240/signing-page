import { React } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './components/signin/Signin'
import Register from './components/register/Register'
import Header from './components/header/Header';
function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Route path='/login' component={Signin} />
        <Route path='/register' component={Register} />
      </main>
    </Router>

  );
}

export default App;
