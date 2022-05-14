import React, { useState } from 'react';
import SigninForm from "./components/SigninForm"


function App() {
  const adminUser = {
    email: "admin@yahoo.com",
    password: "admin"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Signin = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in succesfully");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Wrong input please!");
      setError("Wrong input please!")
    }


  }

  const Logout = () => {
    setUser({ name: "", email: ""});
  }


  return (
    <div className="App">
        {( user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          < SigninForm Signin={Signin} error={error}/>
        )}
    </div>
  );
}

export default App;
