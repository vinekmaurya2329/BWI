import React, { useState } from "react";
import Swal from "sweetalert2";
function Login() {
//   let [userData, setUserData] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function Submitlogin() {

     fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message == "Invalid credentials") {
          return Swal.fire("opps!", result.message, "error");
        }
        // setUserData(result);
        
        localStorage.setItem("user", JSON.stringify(result));
        Swal.fire("congrats", "Logged In Successfully", "success");
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      })
      .catch((error) => console.log(error));
  } 
//  end Submitlogin function  - - - --- - -- - - 
  return (
    <div className="loginMain">
      <div className="imageContainer">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/872/646/small_2x/cute-bird-using-laptop-animal-cartoon-concept-isolated-can-used-for-t-shirt-greeting-card-invitation-card-or-mascot-flat-cartoon-style-free-vector.jpg"
          alt="img"
        />
      </div>

      <div className="loginContainer">
        <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>Login</h2>
        <p>welcome to our website</p>
        <input
          type="text"
          placeholder=" username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder=" password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {username.length >= 4 && password.length >= 4 ? (
          <button onClick={Submitlogin}>Login</button>
        ) : (
          <button
            type="submit"
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
