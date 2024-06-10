import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { login } from "../../redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Successful Login!, Welcome {user?.firstName}</h2>
        </>
      ) : (
        <>
          <h2>Signin</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Signing in..." : "Signin"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}

export default Login;
