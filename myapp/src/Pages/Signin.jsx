import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from './firebase';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log('User signed in:', user);
      navigate('/shop');
    } catch (err) {
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);

      switch (errorCode) {
        case "auth/wrong-password":
          setErrorMessage("Incorrect password.");
          break;
        case "auth/user-not-found":
          setErrorMessage("No account found with this email.");
          break;
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in with Google:', user);
      navigate('/shop');
    } catch (err) {
      const errorMessage = err.message;
      console.error('Google sign-in error:', errorMessage);
      setError(true);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 h-auto">
        <h1 className="text-3xl font-semibold mb-6 p">Sign In</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            onChange={handleChange}
            name="email"
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            onChange={handleChange}
            name="password"
            value={password}
          />
          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200">
            Sign In
          </button>
          {error && <p className="mt-4 text-red-500">{errorMessage}</p>}
        </form>
        <button onClick={handleGoogleSignIn} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Sign In with Google
        </button>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/" className="text-blue-500 cursor-pointer hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

