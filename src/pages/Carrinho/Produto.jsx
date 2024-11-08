import React from "react";

function Produto({ data, removerDoCarrinho, atualizarOCarrinho }) {
  return (
    <tr>
      <td>
        <div className="produto">
          <img src="https://picsum.photos/100/200" alt="produto" />
          <div className="info">
            <div className="nome">{data.nome}</div>
            <div className="categoria">{data.categoria}</div>
          </div>
        </div>
      </td>
      <td>R$ {data.preco}</td>
      <td>
        <div className="quantidade">
          <button onClick={() => atualizarOCarrinho(data, "decrease")}>
            <i className="bx bx-minus">-</i>
          </button>
          <span>{data.quantidade}</span>
          <button onClick={() => atualizarOCarrinho(data, "increase")}>
            <i className="bx bx-plus">+</i>
          </button>
        </div>
      </td>
      <td>R$ {data.preco * data.quantidade}</td>
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
    </tr>
  );
}

export default Produto;
