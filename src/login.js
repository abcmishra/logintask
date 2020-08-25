import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'





 
 

const Login = ({ memberLogIn, adminLogIn }) => {
  const [view, setView] = useState("MEMBER_LOG_IN");

  const [info, setInfo] = useState({ email: "", password: "" });
 
 

  useEffect(() => {

    setInfo({ email: "", password: "" });
  }, [view]);

  return (
    <div className="Log-in">
   

      {view === "MEMBER_LOG_IN" ? (
        <div>
          <h3>Member Login</h3>
          <input
            type="text"
            value={info.email}
            onChange={(event) =>
              setInfo({ ...info, email: event.target.value })
            }
          />
          <input
            type="password"
            value={info.password}
            onChange={(event) =>
              setInfo({ ...info, password: event.target.value })
            }
          />
          <button onClick={() => memberLogIn(info)}>Log in</button>
          <span onClick={() => setView("ADMIN_LOG_IN")}>Go to admit login</span>
        </div>
      ) : null}

      {view === "ADMIN_LOG_IN" ? (
        <div>
          <h3>Admin Login</h3>
          <input
            type="text"
            value={info.email}
            onChange={(event) =>
              setInfo({ ...info, email: event.target.value })
            }
          />
          <input
            type="password"
            value={info.password}
            onChange={(event) =>
              setInfo({ ...info, password: event.target.value })
            }
          />
          <button onClick={() => adminLogIn(info)}>Log in</button>
          <span onClick={() => setView("MEMBER_LOG_IN")}>
            Go to member login
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Login;