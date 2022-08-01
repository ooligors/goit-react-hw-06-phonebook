import React from "react";
import css from "./ContactElement.module.css";
export const ContactElement = ({ id, name, number, onClick }) => { 
 
//  onClick = (e) => {
//     this.setState( {
//      contacts:[ ...this.state.contacts.filter(contact => contact.id !== Number(e.target.id))]
//     })
//     }

    return (
        <li key={id}>
          <span className={css.span}>{name}: {number}</span>
          
            <button onClick={() => onClick(id)}>
                {/* id={id} type="button" */}
            Delete  
          </button>
        </li>
    );
    }
     
