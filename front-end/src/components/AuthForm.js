import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import './styles/AuthForm.css';
import { FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <>
            <header className='loginHeader'>
                <img className='logoLogin' src="logo.png" alt="Logo" />
                <nav className='navbar'>
                    <a href="#login" onClick={() => setIsSignUp(false)}>Já tenho uma conta</a>
                    <a href="#register" onClick={() => setIsSignUp(true)}>Registrar conta</a>
                    <a href="#app">Baixe nosso aplicativo</a>
                </nav>
                <div className='socialLinks'>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </header>
            <div className="auth-form">
                {isSignUp ? (
                    <div className='register'>
                        <div className='backgroundLeft'>
                            <img className='loginImage' src="flat.png" alt="Image" />
                        </div>
                        <div className='registerArea'>
                            <SignUpForm />
                            <button className='buttonAuth' onClick={toggleForm}>Já possuo uma conta</button>
                        </div>
                    </div>
                ) : (
                    <div className='login'>
                        <h2>Login</h2>
                        <LoginForm />
                        <button onClick={toggleForm}>Não tenho conta</button>
                    </div>
                )}
            </div>
            <footer className='loginFooter'>
                <img className='footerLogo' src="logo.png" alt="Footer Logo" />
                <p id='marca'>Desenvolvido pela equipe Os Coddificadores | Fábrica de projetos V</p>
            </footer>
        </>
    );
};

export default AuthForm;
