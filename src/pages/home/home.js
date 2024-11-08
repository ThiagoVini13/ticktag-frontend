import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import React, { useEffect, useState } from "react";
import {
  fetchPublicData,
  createData,
  updateData,
  deleteData,
} from "../../services/apiService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  let [eventos, setEventos] = useState([]);
  // const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchPublicData("evento");
        setEventos(response.data || []);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadData();
    console.log(eventos);
  }, []);

  const eventoDoDia = eventos.filter(
    (event) =>
      new Date(event.dataEvento).toLocaleDateString("pt-BR") ===
      new Date().toLocaleDateString("pt-BR")
  );
  const proximosEventos = eventos.filter(
    (event) =>
      new Date(event.dataEvento).toLocaleDateString("pt-BR") !==
      new Date().toLocaleDateString("pt-BR")
  );
  const eventosLivres = eventos.filter(
    (event) => event.classificacaoIdade === 0
  );
  const indiceAleatorio = Math.floor(Math.random() * eventoDoDia.length);

  return (
    <div className="Home">
      {/* Evento Destaque */}
      <section className="container my-5 p-4 bg-light rounded">
        <div className="d-flex justify-content-around">
          <div className="col-md-8 event-info">
            <h2 className="mb-3">Destaque</h2>
            <h3 className="mb-3">{eventoDoDia[indiceAleatorio]?.nomeEvento}</h3>
            <p className="text-muted">
              Dia:
              {new Date(
                eventoDoDia[indiceAleatorio]?.dataEvento
              ).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <p>
              {" "}
              Local: {eventoDoDia[indiceAleatorio]?.enderecoVO?.nomeEspaco}
            </p>
            <Button variant="primary">
              <Link
                to={`/evento/id/${eventoDoDia[indiceAleatorio]?.id}`}
                className="nav-link"
              >
                Saiba mais
              </Link>
            </Button>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center event-video-placeholder">
            <img
              variant="top"
              src={`data:image/png;base64,${eventoDoDia[indiceAleatorio]?.capaEvento}`}
              alt="Capa do Evento"
              style={{ maxHeight: "200px", width: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="new-events mx-4">
        <h3 className="mb-4">Eventos hoje</h3>
        <div className="d-flex flex-wrap">
          {eventoDoDia.length > 0 ? (
            eventoDoDia.map((evento, index) => (
              <div className="col-md-3 mb-4" key={evento.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`data:image/png;base64,${evento.capaEvento}`}
                  />
                  <Card.Body>
                    <Card.Title>{evento.nomeEvento}</Card.Title>
                    <Card.Text>
                      <p className="event-date text-muted">
                        {new Date(evento.dataEvento).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <p>{evento.enderecoVO.nomeEspaco}</p>
                    </Card.Text>
                    <Button variant="primary">
                      <Link to={`/evento/id/${evento.id}`} className="nav-link">
                        Saiba mais
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>Nenhum evento disponível.</p>
          )}
        </div>
      </section>

      <section className="new-events mx-4">
        <h3 className="mb-4">Proximos Eventos</h3>
        <div className="d-flex flex-wrap">
          {proximosEventos.length > 0 ? (
            proximosEventos.map((evento, index) => (
              <div className="col-md-3 mb-4" key={evento.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`data:image/png;base64,${evento.capaEvento}`}
                  />
                  <Card.Body>
                    <Card.Title>{evento.nomeEvento}</Card.Title>
                    <Card.Text>
                      <p className="event-date text-muted">
                        {new Date(evento.dataEvento).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <p>{evento.enderecoVO.nomeEspaco}</p>
                    </Card.Text>
                    <Button variant="primary">
                      <Link to={`/evento/id/${evento.id}`} className="nav-link">
                        Saiba mais
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>Nenhum evento disponível.</p>
          )}
        </div>
      </section>

      <section className="new-events mx-4">
        <h3 className="mb-4">Eventos para toda familia</h3>
        <div className="d-flex flex-wrap">
          {eventosLivres.length > 0 ? (
            eventosLivres.map((evento, index) => (
              <div className="col-md-3 mb-4" key={evento.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`data:image/png;base64,${evento.capaEvento}`}
                  />
                  <Card.Body>
                    <Card.Title>{evento.nomeEvento}</Card.Title>
                    <Card.Text>
                      <p className="event-date text-muted">
                        {new Date(evento.dataEvento).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <p>{evento.enderecoVO.nomeEspaco}</p>
                    </Card.Text>
                    <Button variant="primary">
                      <Link to={`/evento/id/${evento.id}`} className="nav-link">
                        Saiba mais
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>Nenhum evento disponível.</p>
          )}
        </div>
      </section>
    </div>
  );
}

const Base64Image = ({ base64String }) => {
  return (
    <div>
      {base64String ? (
        <img
          src={`data:image/png;base64,${base64String}`}
          alt="Imagem"
          style={{ maxWidth: "180px", height: "auto" }}
        />
      ) : (
        <p>Imagem não disponível.</p>
      )}
    </div>
  );
};

export default Home;
