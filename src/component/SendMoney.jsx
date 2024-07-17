import { useState } from "react";
import { Link } from "react-router-dom";

const SendMoney = () => {
  const [message, setMessage] = useState('');
//   const navigate = useNavigate();

  const send = async (event) => {
    event.preventDefault();
    const form = event.target;
    const pin = form.pin.value;
    const senderAccount = form.senderAccount.value;
    const receiverAccount = form.receiverAccount.value;
    const amount = form.amount.value;
    const sendInfo = { pin, senderAccount, receiverAccount, amount };

    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:5000/sendMoney', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(sendInfo)
    });

    const data = await response.json();
    if (response.ok) {
      form.reset();
      setMessage(data.message);
      alert('Money sent successfully');
    } else {
      setMessage(data.message);
      alert(data.message);
    }
  }

  return (
    <div className="bg-pink-200 h-screen">
      <Link to={'/'}> 
        <button className="btn bg-pink-500 text-white">Home</button>
      </Link>
      <form onSubmit={send} className="flex justify-center items-center">
        <div className="mt-40">
          <div>
            <h1>PIN</h1>
            <input type="password" name="pin" required />
          </div>
          <div>
            <h1>Sender Account Number</h1>
            <input type="number" name="senderAccount" required />
          </div>
          <div>
            <h1>Receiver Account Number</h1>
            <input type="number" name="receiverAccount" required />
          </div>
          <div>
            <h1>Send Amount</h1>
            <input type="number" name="amount" required />
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button className="btn bg-pink-500 text-white px-16">Send</button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
