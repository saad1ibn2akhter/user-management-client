import { useEffect, useState } from 'react'


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  const handleFormData = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');

    const user = {name ,email};

    console.log(name , email);
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },

      body: JSON.stringify(user),

    })
    .then(res => res.json())
    .then(data => {
      console.log('data from the fetch using post get' , data)
    })
  }


  return (
    <>
      <div>
        <h1>User management system</h1>
        <h2>Number if users : {users.length}</h2>

        <form action="" onSubmit={handleFormData}>
          <input type="name" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" name="" id="" />
          <br />
        </form>

        <div>
          {
            users.map((user, index) => <p>{user.id} : {user.name} : {user.email}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
