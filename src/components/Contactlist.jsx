import React from 'react';
import contentcard from "./contentcard"
const ContactList =(props)=>{
    console.log("dffg",props)
    const renderContactList= props.contact.map((contact) => {
        console.log(contact.name)
        // return(
            // {console.log()}
        // );
    });
 return(
    <div>
        <div className="bold">Contact List </div>
        {props.contact.map((value)=>
        <div>{value.name}
        <h>{value.email}</h>
        
        </div>
        
)}
       {/* {renderContactList} */}
    </div>
 );
};
export default ContactList;
