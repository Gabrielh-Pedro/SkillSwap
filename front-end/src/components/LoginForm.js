import React, { useState } from 'react';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login efetuado com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados para o backend.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>E-mail ou Nome de usuário</label>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
