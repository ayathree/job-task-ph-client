import { Link } from "react-router-dom";


const SendMoney = () => {
    return (
        <div className="bg-pink-200 h-screen">
             
             <Link to={'/'}> <button className="btn bg-pink-500 text-white">Home</button></Link>
            <form className="flex  justify-center items-center ">
                <div className="mt-40">
                <div>
                    <h1>pin</h1>
                    <input type="password" />
                </div>
                <div>
                <h1>Sender Account Number</h1>
                <input type="number" />
                </div>
                <div>
                <h1>Receiver Account Number</h1>
                <input type="number" />
                </div>
                <div>
                <h1>Send Amount</h1>
                <input type="number" />
                </div>
                <div className="mt-4 flex justify-center items-center ">
                    <button className="btn bg-pink-500 text-white px-16">Send</button>
                </div>
                </div>
            </form>
            
        </div>
    );
};

export default SendMoney;