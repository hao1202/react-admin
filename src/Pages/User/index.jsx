import "./user.scss";
import Single from "../../Components/Single";
import { singleUser } from "../../data";
const User = () => {
  // fetch data and send to single component

  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  );
};

export default User;
