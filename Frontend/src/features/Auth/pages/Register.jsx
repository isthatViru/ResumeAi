import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-500 font-mono">
            Register
          </h1>
          <p className="text-gray-500 mt-2">
            Create your account to continue
          </p>
        </div>

        {/* Username */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
        >
          Register
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          
          <NavLink to={"/login"} className="text-red-500 font-semibold cursor-pointer hover:underline">
            Sign In
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;