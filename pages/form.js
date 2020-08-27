import { useState } from "react";
import JWT from "jsonwebtoken";

export default function form() {
  const [name, set_name] = useState("");
  const [password, set_password] = useState("");
  const [message, set_message] = useState(null);

  const handle_change = ({ target }) => {
    const { name, value } = target;
    name === "name" ? set_name(value) : set_password(value);
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    if (!name || !password) return;

    const res = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name,
        password,
      }),
    }).then((data) => data.json());

    const { token } = res;

    if (token) {
      const decoded = JWT.verify(token, "asjknalksn123,z");
      let msg = `Welcome ${decoded.admin ? "admin" : ""} ${decoded.name}`;
      set_message(msg);
    }
  };

  return (
    <>
      {message && <h1>{message}</h1>}
      <form>
        <input name="name" value={name} type="text" onChange={handle_change} />
        <br />
        <input
          name="password"
          value={password}
          type="password"
          onChange={handle_change}
        />
        <br />
        <button onClick={handle_submit}>submit</button>
      </form>
    </>
  );
}
