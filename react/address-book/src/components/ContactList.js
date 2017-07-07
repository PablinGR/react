import React from 'react';
const ContactList = (props)=>{
    const contactos=props.contacts.map((contacto)=>(
        <div key = {contacto._id} className="list-group-item">
                
                <p>{contacto.firstName}</p>
                <p>{contacto.lastName}</p>
                <p>{contacto.phone}</p>
            </div>
    ));
    return(
        <div className="list-group">
            {contactos}
        </div>
    );
}

export default ContactList;