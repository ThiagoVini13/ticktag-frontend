import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

function DetalhesEvento({ evento }) {
    const { enderecoVO, dataEvento, classificacaoIdade, lotacaoMaxima, statusEvento } = evento;

    // Formatar a data para o formato dd/MM/yyyy
    const formatarData = (data) => {
        return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(data));
    };

    return (
        <section className="card p-3 detalhes-evento">
            <h2 className="h5 mb-3 text-primary">Informações do Evento</h2>
            <div className="evento-info">
                <div className="evento-info-item">
                    <FaCalendarAlt className="icon" />
                    <p><strong>Data:</strong> {formatarData(dataEvento)}</p>
                </div>
                <div className="evento-info-item">
                    <FaUser className="icon" />
                    <p><strong>Classificação:</strong> {classificacaoIdade ? `${classificacaoIdade}+` : "Não disponível"}</p>
                </div>
                {enderecoVO && (
                    <div className="evento-info-item">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <p><strong>Local:</strong> {enderecoVO.nomeEspaco}</p>
                            <p>{`${enderecoVO.tipoLogradouro} ${enderecoVO.nomeLogradouro}, ${enderecoVO.numero}`}</p>
                            <p>{`${enderecoVO.bairro}, ${enderecoVO.cidade} - ${enderecoVO.uf}`}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="evento-status mt-3">
                <p><strong>Status:</strong> <span className={`status ${statusEvento.toLowerCase()}`}>{statusEvento}</span></p>
                <p><strong>Lotação Máxima:</strong> {lotacaoMaxima || "Indefinida"}</p>
            </div>
        </section>
    );
}

export default DetalhesEvento;
