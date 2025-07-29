import { useState } from "react";
import Header from "./Header";


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_large.jpg"
                    alt="body-img"
                />
            </div>
            <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4 my-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                />}
                <input
                    type="text"
                    placeholder="E-mail Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />                
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In Now. "}
                </p>
            </form>
        </div>
    );
};

export default Login;