import { useEffect, useState } from "react";
import { getUserInfo } from "../Api";
import { Link } from "react-router-dom";


const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUser(userInfo);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={'/'}> <button className="btn bg-pink-500 text-white">Home</button></Link>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default UserProfile;
