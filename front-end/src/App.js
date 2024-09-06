import React from 'react';
import axios from 'axios';
import './App.css'
import AuthForm from './components/AuthForm';
import { FaHome } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <AuthForm />
    </div>
  );
}

export default App;
