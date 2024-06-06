import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth.selectors";
import "./User.scss";

const User = () => {
  const userName = useSelector(selectUser);
  return (
    <div className="user-item">
      <p className="title">Hello, {userName}</p>
      <button className="name-img">N</button>
    </div>
  );
};
export default User;
