import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import ContactForm from './components/ContactForm'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchText:'Búsqueda',
      nombreText:'nombre',
      apellidosText:'apellidos',
      telefonoText:'telefono',
    };
  }

  handleSearchTextChange = (event)=>
  {
    this.setState({
      searchText: event.target.value
    });
  }
  handleNombreChange = (event)=>
  {
    this.setState({
      nombreText: event.target.value
    });
  }
  handleApellidosChange = (event)=>
  {
    this.setState({
      apellidosText: event.target.value
    });
  }
  handleTelefonoChange = (event)=>
  {
    this.setState({
      telefonoText: event.target.value
    });
  }

  render() {
    return (
        <div>
          <Header title="Pablo Gallego"/>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <SearchBox 
                  value={this.state.searchText}
                  onChange={this.handleSearchTextChange}
                />
              </div>
              <div className="col-sm-6">
                <h1>Nuevo Contacto</h1>
                <ContactForm 
                  nombre={this.state.nombreText}
                  onChangeNombre={this.handleNombreChange}

                  apellido={this.state.apellidosText}
                  onChangeApellidos={this.handleApellidosChange}

                  telefono={this.state.telefonoText}
                  onChangeTelefono={this.handleTelefonoChange}
                />
              </div>
            </div>
          </div>
          <Footer coppyR="Pablin 2017"/>          
        </div>
    );
  }
}

export default App;// que cuando exporte el modulo el app va a recibir
