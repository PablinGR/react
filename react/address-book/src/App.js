import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const API_URL = 'https://address-book-api-kfpkaqtghu.now.sh';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      contacts: [],
      searchText:'',
      nombreText:'nombre',
      apellidosText:'apellidos',
      telefonoText:'telefono',
    };
  }

  getContacts=()=>{
    axios({
      method:'GET',
      url: API_URL +'/api/contacts',
      headers:{
        'Api-Key': '1104417009',
      },
    })
    .then((response)=>{
      console.log(response);
      this.setState({
        contacts: response.data.data
      })
    })
    .catch((error)=>{
      console.log(error, error.response);
    })
  }

  componentDidMount=()=>{
    this.getContacts();
  }

  saveContact=(contact)=>{
    console.log(contact);
    axios({
      method:'POST',
      url: API_URL +'/api/contacts',
      headers:{
        'Api-Key': '1104417009',
        'Content-Type':'application/json',
      },
      data:{
        firstName:contact.firstName,
        lastName:contact.lastName,
        phone:contact.phone,
      },
    })
    .then((response)=>{
      console.log(response);  
      this.getContacts();    
    })
    .catch((error)=>{
      console.log(error, error.response);
    })
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
    const contacts = this.state.contacts.filter((contact,index)=>{
      if(contact.firstName.indexOf(this.state.searchText)>-1){
        return true;
      }     
      if(contact.lastName.indexOf(this.state.searchText)>-1){
        return true;
      }     
      
      return false;
    });
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
                <ContactList
                    contacts = {contacts}
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
                  saveContact={this.saveContact}
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
