import React from 'react';
import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 20%;
    height: 25%;
    display: flex;
    justify-content: flex-start;
`;

const ButtonsDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content space-between;
`;

const Left = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    @media (max-width: 768px) {
        width: 100%;
    }
`;


const SwitchDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    cursor: pointer;
    
`;

const SellButton = styled.div`
    border-radius: 5px;
    border: solid orange 2px;
    width: 14vw;
    height: 5.2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: orange;
    cursor: pointer;
    transition:0.2s ease;
    :hover{
        width: 14.5vw;
        height: 5.6vh;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Texts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;

const SmallText = styled.label`
    font-size: 10px;
    margin: 0;
    color: grey;
    cursor: pointer;
`;

const BigText = styled.label`
    font-size: 20px;
    margin: 0;
    color: #f3123c;
    cursor: pointer;
`;

function Index() {
  return (
    <Content>
        <Logo>
            <img src="../icons/webmotors.svg"></img>
        </Logo>
        <ButtonsDiv>
            <Left>
                <SwitchDiv style={{borderBottom: "solid 3px #f3123c"}}>
                    <img style={{ width: "40px", height: "40px" }} src="../icons/car.svg"/>
                    <Texts>
                        <SmallText>COMPRAR</SmallText>
                        <BigText style={{color: "#f3123c"}}>CARROS</BigText>
                    </Texts>
                </SwitchDiv>
                <SwitchDiv style={{ borderBottom: "solid 1.7px #d8d8d8"}}>
                    <img style={{ width: "40px", height: "40px" }} src="../icons/motorcycle.svg"/>
                    <Texts>
                        <SmallText>COMPRAR</SmallText>
                        <BigText style={{color: "grey"}}>MOTOS</BigText>
                    </Texts>
                </SwitchDiv>
            </Left>
            <SellButton>
                <label style={{cursor: "pointer"}}>Vender meu carro</label>
            </SellButton>
        </ButtonsDiv>
    </Content>
  );
}

export default Index;