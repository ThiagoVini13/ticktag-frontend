import React, { useEffect, useState } from "react";
import "./Carrinho.css";
import Produto from "./Produto";
import { carrinhoApi } from "./service/carrinho";
import Somatorio from "./Somatorio";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Carrinho() {
  
  const produtoObj = {
    nome: "Produto",
    categoria: "Categoria",
    preco: randomNumber(100, 1200),
    quantidade: 1,
  };
  
  const [carrinho, setCarrinho] = useState([produtoObj]);
  const fetchData = () => {
    
    carrinhoApi.get("/carrinho").then((response) => {
      console.log(response.data);
      // console.log(response.data.data);
      setCarrinho(response.data);
      // setCarrinho(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const adicionarAoCarrinho = () => {
    console.log("Adicionou item");

    carrinhoApi.post("/carrinho", produtoObj).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  const removerDoCarrinho = (item) => {
    console.log("Removou item");

    console.log({ item });

    carrinhoApi.delete(`/carrinho/${item._id}`).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  const atualizarOCarrinho = (item, action) => {
    console.log({ item });
    let novaQuantidade = item.quantidade;

    if (action === "increase") {
      novaQuantidade += 1;
    } else if (action === "decrease") {
      if (novaQuantidade >= 1) {
        novaQuantidade -= 1;
      } else {
        console.log("Quantidade mínima: ", novaQuantidade);
      }
    }

    const novoItem = { ...item, quantidade: novaQuantidade };
    delete novoItem._id;

    console.log(novoItem);
    carrinhoApi.put(`/carrinho/${item._id}`, novoItem).then((response) => {
      console.log(response);
      fetchData();
    });

    console.log(novaQuantidade);
  };

  const calcularTotal = () => {
    let soma = 0;

    for (let item of carrinho) {
      soma += item.preco * item.quantidade;
    }

    console.log({ soma });

    return soma;
  };

  const totalDoCarrinho = calcularTotal();

  return (
    <div className="carrinho-container">
      <div className="page-title">Carrinho de Compras</div>
      <div className="content">
        <section>
          {/* <button
            onClick={adicionarAoCarrinho}
            style={{ padding: "5px 10px", marginBottom: 15 }}
          >
            Adicione ao carrinho
          </button> */}
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrinho != null ? (
                carrinho.map((item) => (
                  <Produto
                    key={item._id}
                    data={item}
                    removerDoCarrinho={removerDoCarrinho}
                    atualizarOCarrinho={atualizarOCarrinho}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={"5"} style={{ textAlign: "center" }}>
                    Nenhum item foi selecionado, o carrinho está vazio.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <aside>
          <Somatorio total={totalDoCarrinho}/>
        </aside>
      </div>
    </div>
  );
}

export default Carrinho;
