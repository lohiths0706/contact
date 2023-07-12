import React,{useState}from 'react';

import Header from  './components/Header.jsx';
import Addcontent from './components/Addcontent.jsx';
import Contactlist from './components/Contactlist.jsx';
function App() {
  const [contact,setContact]=useState([]);

  const addcontacthandler=(contact1)=>{
    console.log(contact);
    // const list=[...contact]
    setContact([...contact,contact1]);
  };
  // addcontacthandler({ name: 'John', email: 'john@example.com' });
  return (
   <div>
    <Header />
    <Addcontent addcontacthandler={addcontacthandler}/>
    <Contactlist contact={contact}/>   
   </div>
  );
};
export default App;
