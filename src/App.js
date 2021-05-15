import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/userTable';
import AddUser from './components/addUser';
import EditForm from './components/editUser';
function App() {
  const initialFormState = { id: null, name: '', username: '' }
  const [editing, setEditing] = useState(false)
  const [user, setUser] = useState(initialFormState);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser=(user)=>{
    console.log('delete user called');
    console.log(user);
    let newArr=users.filter(m=>user.id!==m.id);
    setUsers(newArr);
  }
  const editUser=(user)=>{
    setEditing(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  const [users, setUsers] = useState(usersData)
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">

      {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ):(
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUser addUser={addUser}
          ></AddUser>
        </div>
  )}
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}
          deleteUser={deleteUser}
          editUser={editUser}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
