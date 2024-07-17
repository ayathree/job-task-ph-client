
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="bg-pink-200 h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <h1 className="text-center text-6xl">T-Kash</h1>
          {token ? (
            <button className="btn bg-pink-500 text-white" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn bg-pink-500 text-white" onClick={() => navigate('/login')}>
              Hi, Please Sign up
            </button>
          )}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-pink-500 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <Link to={'/userProfile'}><li><a>User Profile</a></li></Link>
            <Link to={'/send'}><li><a>Send Money</a></li></Link>
            <li><a>Cash Out</a></li>
            <li><a>Cash In</a></li>
            <li><a>Balance</a></li>
            <li><a>Transaction History</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
