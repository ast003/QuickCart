import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from './firebase';

const PasswordSignUp = () => {
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log('User signed up:', user);
      navigate('/');
    } catch (err) {
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);

      switch (errorCode) {
        case "auth/weak-password":
          setErrorMessage("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("This email address is already in use by another account.");
          break;
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          setErrorMessage("Email/password accounts are not enabled.");
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
      navigate('');
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
        <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
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
            Sign Up
          </button>
          {error && <p className="mt-4 text-red-500">{errorMessage}</p>}
        </form>
        <button onClick={handleGoogleSignIn} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Sign Up with Google
        </button>
        <p className="text-center mt-4">
          Already have an account? <Link to="/signin" className="text-blue-500 cursor-pointer hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordSignUp;
