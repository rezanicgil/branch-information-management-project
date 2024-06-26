import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { logout } from "../../redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { userThunk } from "../../redux/userSlice";
function Header() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { user, isSuccess } = useSelector((state: RootState) => state.user);
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

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userThunk());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav>
        <h4 style={{ padding: "1rem" }}>
          Branch Information Management System
        </h4>
        <hr></hr>
        <ul className="text text-primary" style={{ cursor: "pointer" }}>
          <li>
            <Link to="/">View List</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <div onClick={handleLogout}>Logout</div>
              </li>
              <li className="text text-black" style={{ cursor: "text" }}>
                {" "}
                {isSuccess && (
                  <strong>
                  User: {user?.firstName + " " + user?.lastName}(Role: {user?.role})
                  </strong>
                )}
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
      <hr></hr>
    </>
  );
}

export default Header;
