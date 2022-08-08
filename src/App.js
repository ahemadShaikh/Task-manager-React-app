import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Navbar from './components/Navbar';
import InputTask from './components/InputTask';

const App = () => {
  return (
    <main className='container'>
    <Navbar />
    <InputTask />
    </main>
  )
}

export default App;