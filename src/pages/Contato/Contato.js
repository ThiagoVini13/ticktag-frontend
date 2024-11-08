import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contato.css'; // Adicionando a importação do CSS

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [envioStatus, setEnvioStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_snepfbf', 'template_nne98h9', formData, 'user_3IAYe276ECwC0A0vs')
      .then(
        (result) => {
          setEnvioStatus('Mensagem enviada com sucesso!');
          setFormData({
            nome: '',
            email: '',
            mensagem: '',
          });
        },
        (error) => {
          setEnvioStatus('Erro ao enviar a mensagem. Tente novamente.');
        }
      );
  };

  return (
    <div className="contato-container">
      <div className="form-box">
        <h2>Entre em contato conosco</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>

        {envioStatus && <p>{envioStatus}</p>}
      </div>
    </div>
  );
}

export default Contato;
