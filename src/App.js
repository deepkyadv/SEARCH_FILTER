import './App.css';
import { useState } from 'react';

const Records = [
  {id: 1, name: "Deepak", email:"dpk@gmail.com", address:"kaladera"},
  {id: 1, name: "Pawan", email:"pwn@gmail.com", address:"jaipur"},
  {id: 1, name: "Dinesh", email:"dnsh@gmail.com", address:"Pataliya"},
  {id: 1, name: "Gulshan", email:"glshn@gmail.com", address:"renwal"},
]

function App() {
  const [search, setsearch] = useState("");

  const handleChange = (event)=>{
    setsearch(event.target.value);

  }

 
  const filteredItems = Records.filter(records=>
    records.name.toLowerCase().includes(search.toLowerCase())||
    records.email.toLowerCase().includes(search.toLowerCase())||
    records.address.toLowerCase().includes(search.toLowerCase())
   
  

  return (
    <div className="container">
      <h1>Search Filter</h1>
      <input type='text' placeholder='Search By Name or Email or Address' value={search} onChange={handleChange} className='search-box'/>

      <ul className="records-list">
      {
        filteredItems.map(record=>(
          <li key={record.id} className='record-item'>
          <h3>Name:{record.name}</h3>
          <p>Email:{record.email}</p>
          <p>Address:{record.address}</p>
          </li>
        ))
      }
      </ul>
      
    </div>
  );
}

export default App;
