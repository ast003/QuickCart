// const LoginSignup = () => {
//   return (
//     <div className="bg-gradient-to-b from-pink-100 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-semibold mb-12">Sign Up</h1>
//       <div className="bg-white p-8 rounded-lg shadow-md w-96 h-9/12">
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
//           Continue
//         </button>
//         <p className="mt-4 text-center">
//           Already have an account? <span className="text-blue-500 cursor-pointer">Login here</span>
//         </p>
//         <div className="mt-6 flex items-center">
//         <input type="checkbox" className="mr-2" />
//         <p>By continuing, I agree to terms and policies</p>
//       </div>
//       </div>

//     </div>
//   );
// }

// export default LoginSignup;
const LoginSignup = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 h-auto">
      <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Continue
        </button>
        <p className="mt-4 text-center">
          Already have an account? <span className="text-blue-500 cursor-pointer hover:underline">Login here</span>
        </p>
        <div className="mt-6 flex items-center">
          <input type="checkbox" className="mr-2" />
          <p>By continuing, I agree to terms and policies</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;

