import React from 'react';

const ContactForm = (props) =>(
    <div>
        <input 
            type="text" 
            value={props.nombre}
            onChange={props.onChangeNombre}
        />
        <input 
            type="text" 
            value={props.apellido}
            onChange={props.onChangeApellidos}
        />
        <input 
            type="text" 
            value={props.telefono}
            onChange={props.onChangeTelefono}
        />
        <div className="text-center">
            <button
                className="btn btn-primary"
                onClick={()=>props.saveContact({
                    firstName: props.nombre,
                    lastName: props.apellido,
                    phone: props.telefono
                })}
            >
            </button>
        </div>
    </div>
);

export default ContactForm;