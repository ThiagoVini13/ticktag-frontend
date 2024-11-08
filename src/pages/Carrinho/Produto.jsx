import React from "react";
import Base64Image from "../../utils/BaseImage";

function Produto({ data, removerDoCarrinho, atualizarOCarrinho }) {
  return (
    <tr>
      <td>
        <div className="produto">
          <Base64Image base64String={data.evento?.capaEvento} />
          <div className="info">
            <div className="nome">{data.evento.nomeEvento}</div>
            <div className="tipo-ticket">Tipo: {data.tipoTicket?.tipoTicket}</div>
            <div className="lote">Lote: {data.tipoTicket?.lote}</div>
          </div>
        </div>
      </td>
      <td>R$ {data?.tipoTicket.valorTicket}</td>
      <td>
        <div className="quantidade">
          <span>{data?.quantidade}</span>
          {atualizarOCarrinho != null ? (
            <div>
              <button onClick={() => atualizarOCarrinho(data, "decrease")}>
                <i className="bx bx-minus">-</i>
              </button>
              <button onClick={() => atualizarOCarrinho(data, "increase")}>
                <i className="bx bx-plus">+</i>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </td>
      <td>R$ {data.tipoTicket?.valorTicket * data?.quantidade}</td>
      {removerDoCarrinho != null ? (
        <td>
          <button
            className="remover"
            onClick={() => {
              removerDoCarrinho(data);
            }}
          >
            X<i className="bx bx-x"></i>
          </button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}

export default Produto;
