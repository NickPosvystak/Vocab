import { useSelector } from "react-redux";
import {
  selectAuthAuthenticated,
  selectUser,
} from "../../redux/auth.selectors";
import "./User.scss";

const User = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const userName = useSelector(selectUser);
  return (
    <div className="user-item">
      {authenticated ? (
        <>
          <p className="title">{userName}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default User;
