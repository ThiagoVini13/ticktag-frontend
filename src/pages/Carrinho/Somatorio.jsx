import React from "react";

function Somatorio({total}) {
  return (
    <>
      <div className="box">
        <header>Resumo da Compra</header>
        <div className="info">
          <div>
            <span>Total</span>
            <span>R$ {total}</span>
          </div>
        </div>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
}

export default Somatorio;
