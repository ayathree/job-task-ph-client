import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [message, setMessage] = useState('');

  const addUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const mobile = form.number.value;
    const email = form.email.value;
    const pin = form.pin.value;
    const user = { name, mobile, email, pin };

    // Send data to the server (backend)
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const data = await response.json();
    if (data.insertedId) {
      form.reset();
      setMessage('User added successfully');
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div>
      <div className="hero bg-pink-200 min-h-screen">
        <div className="hero-content flex flex-col ">
          <h1 className="text-center text-6xl">T-kash</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={addUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input type="number" placeholder="Mobile Number" name="number" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text"> Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text"> Pin</span>
                </label>
                <input type="password" placeholder="Pin" name="pin" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-600 text-white">Register</button>
              </div>
              {message && <p>{message}</p>}
              <p>Already have an account? Please <Link to={'/login'}><span className="text-blue-700 font-bold">Login</span></Link> here</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
