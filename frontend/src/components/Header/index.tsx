import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { logout } from "../../redux/authSlice";
import { jwtDecode } from "jwt-decode";
function Header() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedJwt = jwtDecode(token);
      if (decodedJwt?.exp! * 1000 < Date.now()) {
        handleLogout();
      }
    }
  });

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav>
      <h4>Routes</h4>
      <ul>
        <li>
          <Link to="/">View List</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <div onClick={handleLogout}>Logout</div>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
