import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    } else alert("Please enter all the fields");
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={submitForm}>
          <div className="inputBox">
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              name="password"
              id="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        {allEntry.map((curEle) => {
          const { id, email, password } = curEle;
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Form;
