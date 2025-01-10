import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, logOut } = useAuth();
  // console.log(user);

  return (
    <section className="min-h-[calc(100vh-304px)] flex items-center">
      <Helmet>
        <title>Profile || Foddie</title>
      </Helmet>
      <div className="max-w-sm w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
        <img
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg object-cover"
          src={user.photoURL}
          alt="Profile Picture"
        />
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {user.displayName}
        </h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={logOut}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
