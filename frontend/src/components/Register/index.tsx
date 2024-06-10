import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { register } from "../../redux/registerSlice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, isSuccess } = useSelector(
    (state: RootState) => state.register
  );

  const handleRegister = () => {
    dispatch(register({ email, password, role, firstName, lastName }));
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
        <>
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Role (Owner, Employee)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
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
              onClick={handleRegister}
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? "Saving..." : "Signup"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <p className="text text-primary">{isSuccess && "User created successfully!"}</p>
        </>
      </div>
    </div>
  );
}

export default Register;
