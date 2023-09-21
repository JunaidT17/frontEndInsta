import React, { useState  } from 'react';
import './User.css';





const User = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const User = {
            firstName: firstName,
            lastName:lastName,
            email: email,
            password: password,

        };

        console.log('firstName:', firstName);
        console.log('lastName:', lastName);

        console.log('Email:', email);
        console.log('Password:', password);


        fetch('http://localhost:8080/registrations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(User),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from server:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Instagram user</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        placeholder="first name"
                    />
                    <label htmlFor="lastName" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        placeholder="last name"
                    />

                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                    />

                    <label htmlFor="inputPassword5" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="inputPassword5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        placeholder="*******"
                    />

                    {/* <label htmlFor="photo" className="form-label">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.value)}
            className="form-control"
          /> */}

                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default User ;