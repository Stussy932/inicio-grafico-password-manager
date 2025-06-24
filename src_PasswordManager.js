import React, { useState } from 'react';
import './styles.css';

const initialData = [
  { email: "iniciographico@gmail.com", password: "Startg2020" },
  { email: "iniciografico21@gmail.com", password: "Marketing2025" },
  { email: "creativos25iniciografico@gmail.com", password: "Impresos2024" },
  { email: "gerenciainiciograficoonline@gmail.com", password: "Mrktin2025%" }
];

function PasswordManager() {
  const [accounts, setAccounts] = useState(initialData);
  const [showPasswords, setShowPasswords] = useState({});
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleShow = idx => {
    setShowPasswords(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const addAccount = e => {
    e.preventDefault();
    if (!newEmail || !newPassword) return;
    setAccounts([...accounts, { email: newEmail, password: newPassword }]);
    setNewEmail('');
    setNewPassword('');
  };

  return (
    <div className="container">
      <h2>Gestor de Contraseñas Email<br/>Inicio Gráfico</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, idx) => (
            <tr key={idx}>
              <td>{acc.email}</td>
              <td>
                {showPasswords[idx] ? acc.password : '•'.repeat(acc.password.length)}
              </td>
              <td>
                <button
                  className="button secondary"
                  onClick={() => toggleShow(idx)}
                >
                  {showPasswords[idx] ? "Ocultar" : "Ver"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={addAccount}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Nuevo email"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contraseña"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">Agregar</button>
        </div>
      </form>
    </div>
  );
}

export default PasswordManager;