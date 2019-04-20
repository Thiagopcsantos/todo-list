import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {

    super(props);
    this.state = { 
      tasks: [
        "Yo creo en milagro", 
        "Lista de compras", 
        "React seu maldito", 
        "fazer o todo e enviar",
        "Quem inventou o react?"
        ],
        inputElement: ''
    };
    
    //this.handleChange = this.handleChange.bind(this)
  }
  
  enviar(evt){
    evt.preventDefault();
    console.log(this.state.inputElement)
    this.setState({
      tasks: this.state.tasks.concat([this.state.inputElement]),
      inputElement: ''
    })
  } 
  
  handleChange(evt) {
    this.setState({ inputElement: evt.target.value});
  }
  

  render() {
    const respuesta = this.state.tasks.map((lista, i) => {
      return <li key={i} className="list-group-item"> {lista} </li>;
    });
  
    let titulo = <h1>TODOS</h1>;  


    return (
      <div>
        {titulo}
        <div className="input-group mb-3">
          <form onSubmit={this.enviar.bind(this)}>
           <input type="text" className="form-control" value={this.state.inputElement} onChange={this.handleChange.bind(this)}/>
          </form>
        </div>
        <ul className="list-group">
          {respuesta} 
        </ul>
      </div>
    );
  }
}

export default App;
