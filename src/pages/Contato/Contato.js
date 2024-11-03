import React from 'react';
import './Contato.css'; // Se você tiver um arquivo CSS para estilizar o contato
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Contato com o Suporte</h2>
      <p>
        Nosso time de suporte está pronto para ajudar você em cada etapa da sua experiência. Se precisar de ajuda com suas compras, entender melhor nossas políticas, ou esclarecer qualquer dúvida, entre em contato conosco por meio dos canais abaixo:
      </p>
      <ul>
        <li><strong>E-mail:</strong> suporte@exemploingressos.com</li>
        <li><strong>Telefone:</strong> (XX) XXXX-XXXX (disponível de segunda a sexta, das 9h às 18h)</li>
        <li>
          <strong>Formulário de Contato:</strong> 
          <a href="https://docs.google.com/forms/d/1AK8GSEpsesmTFmaPSQWL3WMo8LNqouCpZtdrS3sxE_I/prefill" target="_blank" rel="noopener noreferrer">
            Clique aqui para preencher o formulário
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contato;

