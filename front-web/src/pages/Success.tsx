import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/success.css";

const Success = () => {
  return (
    <div id='page-success'>
      <div className='content-wrapper'>
        <main>
          <h1>Ebaaaaa!!!!</h1>
          <h3>
            Que bom ter você aqui com a gente. Tudo certo, seu orfanato já está
            no mapa!!!
          </h3>
          <Link to='/map' className='go-to-map'>
            Voltar para o mapa
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Success;
