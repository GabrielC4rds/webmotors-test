import React from 'react';
import { Top,Tdiv,Text, CustomCheckbox} from "../styledComponents";

function Index() {
  return (
    <Top>
      <Tdiv>
        <CustomCheckbox defaultChecked="false" />
        <Text>Novos</Text>
      </Tdiv>
      <Tdiv>
        <CustomCheckbox defaultChecked="true" />
        <Text>Usados</Text>
      </Tdiv>
    </Top>
  );
}

export default Index;