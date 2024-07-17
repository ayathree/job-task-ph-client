import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const identifier = form.identifier.value; // Mobile Number or Email
    const pin = form.pin.value; // PIN
    const user = { identifier, pin };

    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    
    const data = await res.json();
    console.log(data);
    
    if (data.token) {
      localStorage.setItem('token', data.token); // Save token to local storage
      alert('Login successful');
      navigate('/userProfile');
      // Redirect or perform other actions
    } else {
      alert(data.message); // Show error message
    }
  };

  return (
    <div>
      <div className="hero bg-pink-200 min-h-screen">
        <div className="hero-content flex flex-col ">
          <h1 className="text-center text-6xl">T-kash</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={loginUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile Number/ Email</span>
                </label>
                <input type="text" placeholder="Mobile Number/ Email" name="identifier" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text">Pin</span>
                </label>
                <input type="password" placeholder="Pin" name="pin" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-600 text-white">Login</button>
              </div>
              <div className="form-control mt-6">
                <Link to={'/'}><button className="btn bg-pink-600 text-white">Not Now</button></Link>
              </div>
              <p>Do not have an account? Please <Link to={'/register'}><span className="text-blue-700 font-bold">Register</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
