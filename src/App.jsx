import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(5, 10));

  const addRandomContacts = () => {
    let leftContacts = [...contactsJSON].slice(5, contactsJSON.length - 1);
    const randomIndex = (Math.floor(Math.random() * (leftContacts.length)));
    const randomActors = leftContacts.splice(randomIndex, 1)[0];
    setContacts(contacts.concat(randomActors))
  }

  return <div className="App">
    <div className="header"><h1>IronContacts</h1></div>
    <button onClick={addRandomContacts}>Add random contacts</button>
      <table className='Table'>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won <br/> Oscar</th>
          <th>Won <br/> Emmy</th>
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
                <td>{actors.wonOscar ? <p>🏆</p> : <p>💩</p>}</td>
                <td>{actors.wonEmmy ? <p>✨</p> : <p>💩</p>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>;
}

export default App;