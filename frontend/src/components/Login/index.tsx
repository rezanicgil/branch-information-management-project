import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { login } from "../../redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );


  const handleLogin = async () => {
    await dispatch(login({ email, password }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
        }}
      >
        {isAuthenticated ? (
          <>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Logged in successfully!
            </h2>
          </>
        ) : (
          <>
            <div>
              <h3>Signin</h3>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                onClick={handleLogin}
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? "Signing in..." : "Signin"}
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
