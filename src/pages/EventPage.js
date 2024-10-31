import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EventPage() {
    const { idEvento } = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        fetch(`/evento/id/${idEvento}`)
            .then(response => response.json())
            .then(responseData => {
                if (responseData && responseData.statusCode === 200) {
                    setEvento(responseData.data);
                } else {
                    throw new Error("Event not found");
                }
            })
            .catch(error => console.error("Erro ao buscar evento:", error));
    }, [idEvento]);

    if (!evento) return <div style={{ textAlign: 'center', marginTop: '20px' }}>Carregando...</div>;

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <section style={{
                display: 'grid',
                gridTemplateRows: '3fr 1fr',
                gap: '10px',
                marginBottom: '20px',
                textAlign: 'center'
            }}>
                <div style={{
                    backgroundImage: `url('https://example.com/banner.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px',
                    height: '250px'
                }}></div>

                <h1 style={{ fontSize: '2.5em', color: '#333', margin: '0' }}>{evento.nomeEvento}</h1>
            </section>

            <section style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
            }}>
                <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                    <h2 style={{ color: '#444' }}>Descrição</h2>
                    <p>{evento.descricao || "Descrição do evento não disponível."}</p>

                    <h2 style={{ color: '#444', marginTop: '20px' }}>Informações Gerais</h2>
                    <p><strong>Classificação Etária:</strong> {evento.classificacaoIdade ? `${evento.classificacaoIdade}+` : "Indisponível"}</p>
                    <p><strong>Lotação Máxima:</strong> {evento.lotacaoMaxima || "Indefinida"}</p>
                    <p><strong>Status:</strong> {evento.statusEvento}</p>
                </div>

                <div style={{
                    padding: '15px',
                    backgroundColor: '#f1f1f1',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    <div>
                        <h2 style={{ color: '#444' }}>Detalhes do Evento</h2>
                        <p><strong>Data:</strong> {evento.dataEvento ? new Date(evento.dataEvento).toLocaleDateString() : "Data não disponível"}</p>
                        {evento.enderecoVO && (
                            <div style={{ marginTop: '15px' }}>
                                <p><strong>Local:</strong> {evento.enderecoVO.nomeEspaco}</p>
                                <p><strong>Endereço:</strong> {evento.enderecoVO.tipoLogradouro} {evento.enderecoVO.nomeLogradouro}, {evento.enderecoVO.numero}</p>
                                <p>{evento.enderecoVO.bairro}, {evento.enderecoVO.cidade} - {evento.enderecoVO.uf}</p>
                            </div>
                        )}

                        {evento.tickets && evento.tickets.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                                <h3 style={{ color: '#333' }}>Ingressos Disponíveis</h3>
                                {evento.tickets.map((ticket, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: '#fff'
                                    }}>
                                        <div>
                                            <p><strong>Tipo:</strong> {ticket.tipoTicket}</p>
                                            <p><strong>Valor:</strong> R${ticket.valorTicket?.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        alignSelf: 'center'
                    }}
                            onClick={() => handleAddToCart(evento.tickets)}>Adicionar ao Carrinho</button>
                </div>
            </section>
        </div>
    );

    function handleAddToCart(tickets) {
        console.log("Adicionando ao carrinho:", tickets);
    }
}

export default EventPage;
