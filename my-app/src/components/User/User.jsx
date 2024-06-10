import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth.selectors";
import "./User.scss";
import { logOutThunk } from "../../redux/authReducer";

const User = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  const userName = useSelector(selectUser);
  return (
    <div className="user-item">
      <p className="title">Hello, {userName}</p>
      <button className="name-img">N</button>
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
    </div>
  );
};
export default User;
