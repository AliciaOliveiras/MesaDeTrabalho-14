import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers(){
    setLoading(true);

    try{
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      
      setUsers(data.users);
    } catch (error) {
      alert("Erro ao buscar dados de usuário.")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className='title'>
      <h1> Usuários</h1>
      </div>

      {loading === true ? "Carregando..." : null}

      {loading === false && users.length < 1 ? "Nenhum usuário encontrado" : null}

      <ul className='container' >
        {users.map((user) => (
          <li key={user.id}>
          <h2 className='name'> {user.firstName} {user.maidenName} {user.lastName} </h2>
          <h3 className='age'> Age: {user.age} </h3>
          <h4 className='bloodGroup'>{user.bloodGroup} </h4>
          <p className='gender'> Gender: {user.gender} </p>
          <p className='email'> Email: {user.email} </p>
          <img src={user.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
