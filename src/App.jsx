import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(5, 10));

  return <div className="App">
    <div className="header"><h1>IronContacts</h1></div>
      <table className='Table'>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        <tbody>
          {contacts.map(actors => {
            return (
              <tr>
                <td>
                  <img src={actors.pictureUrl} alt='profile_picture' width='100px' />
                </td>
                <td>{actors.name}</td>
                <td>{actors.popularity.toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>;
}

export default App;