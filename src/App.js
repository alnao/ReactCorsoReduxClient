import './App.css';
import /*MaterializeCSS from*/ 'materialize-css/dist/css/materialize.min.css'
import { Component } from 'react/cjs/react.production.min';

function App() {
  return (
      <div className="App">

      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">React corso redux client</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </nav>

      <h1>Title in materialize CSS</h1>
      <Contatore />
    </div>
  );
}
//component with state e metodi per cambiarlo
class Contatore extends Component {
  state={count:0}
  addUno(){ this.setState( (prevState ) => ( { count : prevState.count+1 } )); }
  set42(){ this.setState( { count:42 } ); }
  render(){
    return ( <div>
      <p>Contatore {this.state.count} </p>
      <button onClick={() => this.addUno()}>AddUno</button>
      <button onClick={() => this.set42()}>La vita, universo e tutto quanto</button>
      </div>)
  }
}

export default App;
