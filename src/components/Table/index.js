import React, { Component } from 'react';
import axios from 'axios';
import {
  Content,
  Mid,
  Desktop,
  Mobile,
  HalfMid,
  SelectDiv,
  SelectBig,
  SelectBig1,
  SelectSmall,
  SalesDiv,
  SalesButton,
  AdvancedSearch,
  Bottom,
  CleanSearch
} from "./styledComponents";
import Top from "./TableTop";

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      make: [],
      makeID: [],
      model: [],
      modelID: [],
      version: [],
      vehicles: []
    };
  }

  async getMake() {
    await axios.get("http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make").then(res => {
      this.setState({ make: res.data });

    })
  }

  async getMakeID() {

    this.setState({ makeID: document.getElementById("Make").selectedIndex }, () =>
      axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${this.state.makeID}`).then(res => {
        this.setState({ model: res.data });
      }));
  }

  async getModelID() {

    this.setState({ modelID: document.getElementById("Model").selectedIndex }, () =>
      axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${this.state.modelID}`).then(res => {
        this.setState({ version: res.data });
      }));
  }

  async componentDidMount() {
    await this.getMake();
  }
  render() {
    return (
      <Content>
        <Top />
        <Mid>
          <Desktop>
            <HalfMid>
              <SelectBig1>
                <div style={{ display: "flex", alignItems: "center", height: "100%", width: "70%", borderRight: "solid 1px gray" }}>
                  <img style={{ width: "20px", margin: "0 5px" }} src="./icons/gps.svg" />
                  <label>Onde:</label>
                  <label style={{ fontWeight: "bold", margin: "0 5px " }}>São Paulo - SP</label>
                </div>
                <label style={{ marginLeft: "10px" }}>Raio:</label>
                <select className="Select" style={{
                  fontWeight: "bold"
                }}>
                  <option className="option" value="">100km</option>
                </select>
              </SelectBig1>
              <SelectDiv>
                <SelectSmall>
                  <select className="Select" style={{
                    borderColor: "tranparent",
                    width: "95%",
                    height: "100%",
                  }}>
                    <option className="option" value="">Ano Desejado</option>
                  </select>
                </SelectSmall>
                <SelectSmall>
                  <select className="Select" style={{
                    borderColor: "tranparent",
                    width: "95%",
                    height: "100%",
                  }}>
                    <option className="option" value="">Faixa de Preço</option>
                  </select>
                </SelectSmall>
              </SelectDiv>
            </HalfMid>
            <HalfMid>
              <SelectDiv>
                <SelectSmall>
                  <label>Marca: </label>
                  <select className="Select" style={{
                    borderColor: "tranparent",
                    width: "75%",
                    height: "100%",
                    fontWeight: "bold",
                  }} id="Make" onChange={() => this.getMakeID()}>
                    <option className="option" value=""> Todas</option>
                    {this.state.make.map(res => {
                      return (
                        <option className="option" value={res.Name} >
                          {res.Name}
                        </option>
                      )
                    })}
                  </select>
                </SelectSmall>
                <SelectSmall>
                  <label>Modelo: </label>
                  <select className="Select" style={{
                    borderColor: "tranparent",
                    width: "70%",
                    height: "100%",
                    fontWeight: "bold",
                  }} id="Model" onChange={() => this.getModelID()}>
                    <option className="option" value=""> Todos</option>
                    {this.state.model.map(res => {
                      return (
                        <option className="option" value={res.Name} >
                          {res.Name}
                        </option>
                      )
                    })}
                  </select>
                </SelectSmall>
              </SelectDiv>
              <SelectBig styled={{ position: "relative" }}>
                <label>Versão: </label>
                <select className="Select" style={{
                  borderColor: "tranparent",
                  width: "23.5vw",
                  height: "100%",
                  fontWeight: "bold",
                }}>
                  <option className="option" value=""> Todas</option>
                  {this.state.version.map(res => {
                    return (
                      <option className="option" style={{ fontSize: "13px" }} value={res.Name} >
                        {res.Name}
                      </option>
                    )
                  })}
                </select>
              </SelectBig>
            </HalfMid>
          </Desktop>


          <Mobile>
            <SelectBig1>
              <div style={{ display: "flex", alignItems: "center", height: "100%", width: "70%", borderRight: "solid 1px gray" }}>
                <img style={{ width: "20px", margin: "0 5px" }} src="./icons/gps.svg" />
                <label>Onde:</label>
                <label style={{ fontWeight: "bold", margin: "0 5px " }}>São Paulo - SP</label>
              </div>
              <label style={{ marginLeft: "10px" }}>Raio:</label>
              <select className="Select" style={{
                fontWeight: "bold"
              }}>
                <option className="option" value="">100km</option>
              </select>
            </SelectBig1>
            <SelectSmall>
              <select className="Select" style={{
                borderColor: "tranparent",
                width: "100%",
                height: "90%",
              }}>
                <option className="option" value="">Ano Desejado</option>
              </select>
            </SelectSmall>
            <SelectSmall>
              <select className="Select" style={{
                borderColor: "tranparent",
                width: "100%",
                height: "90%",
              }}>
                <option className="option" value="">Faixa de Preço</option>
              </select>
            </SelectSmall>
            <SelectSmall>
              <label>Marca: </label>
              <select className="Select" style={{
                borderColor: "tranparent",
                width: "100%",
                height: "90%",
                fontWeight: "bold",
              }} id="Make" onChange={() => this.getMakeID()}>
                <option className="option" value=""> Todas</option>
                {this.state.make.map(res => {
                  return (
                    <option className="option" value={res.Name} >
                      {res.Name}
                    </option>
                  )
                })}
              </select>
            </SelectSmall>
            <SelectSmall>
              <label>Modelo: </label>
              <select className="Select" style={{
                borderColor: "tranparent",
                width: "100%",
                height: "90%",
                fontWeight: "bold",
              }} id="Model" onChange={() => this.getModelID()}>
                <option className="option" value=""> Todos</option>
                {this.state.model.map(res => {
                  return (
                    <option className="option" value={res.Name} >
                      {res.Name}
                    </option>
                  )
                })}
              </select>
            </SelectSmall>
            <SelectBig styled={{ position: "relative" }}>
              <label>Versão: </label>
              <select className="Select" style={{
                borderColor: "tranparent",
                width: "100%",
                height: "90%",
                fontWeight: "bold",
              }}>
                <option className="option" value=""> Todas</option>
                {this.state.version.map(res => {
                  return (
                    <option className="option" style={{ fontSize: "13px" }} value={res.Name} >
                      {res.Name}
                    </option>
                  )
                })}
              </select>
            </SelectBig>
          </Mobile>
        </Mid>
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
      </Content>
    );
  }
}

export default Index;