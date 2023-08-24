import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { AiFillDelete } from 'react-icons/ai'

function App() {
  const [data, setData] = useState([]);
  const [api, setApi] = useState('users');

  async function apicall() {
    try {
      const response = await (await fetch(`https://jsonplaceholder.typicode.com/${api}`)).json();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    apicall();
  }, [api]);

  const renderTable = () => {
    if (api === 'users') {
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td >{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td> <AiFillDelete
                  style={{ color: "red" }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (api === 'comments') {
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
                <td> <AiFillDelete
                  style={{ color: "red" }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (api === 'posts') {
      return (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td> <AiFillDelete
                  style={{ color: "red" }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="App">
      <Navbar apicall={apicall} setApi={setApi} />
      {renderTable()}
    </div>
  );
}

export default App;
