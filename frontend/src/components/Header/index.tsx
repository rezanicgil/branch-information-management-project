import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { logout } from "../../redux/authSlice";
function Header() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav>
      <h4>Routes</h4>
      <ul
      >
        <li>
          <Link to="/" >View List</Link>
        </li>
        {isAuthenticated && user ? (
          <>
            <li>Welcome, {user}!</li>
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
