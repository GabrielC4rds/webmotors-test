import React from 'react';
import {
  SalesDiv,
  SalesButton,
  AdvancedSearch,
  Bottom,
  CleanSearch
} from "../styledComponents";

function Index() {
  return (
    <Bottom>
      <AdvancedSearch>
        <label style={{ cursor: "pointer" }}>> Busca Avançada</label>
      </AdvancedSearch>
      <SalesDiv>
        <CleanSearch>Limpar filtros</CleanSearch>
        <SalesButton>
          <label>VER OFERTAS</label>
        </SalesButton>
      </SalesDiv>
    </Bottom>
  );
}

export default Index;