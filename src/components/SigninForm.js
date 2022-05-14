import React, {useState} from 'react'

function SigninForm({ Signin, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Signin(details);
    }


  return (
    <form onSubmit={submitHandler}>
        <div className="entry-section">
            <h2>Signin</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="SIGNIN" />
        </div>
    </form>
  )
}

export default SigninForm