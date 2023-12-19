import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(user);
  console.log(isAuthenticated);

  function handleClick() {
    logout();
    navigate("/");
  }

  if (!isAuthenticated) return null;

  return (
    <div className={styles.user}>
      <img src={user?.avatar} alt={user?.name} />
      <span>Welcome, {user?.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
