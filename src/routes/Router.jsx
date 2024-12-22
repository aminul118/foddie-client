import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/Authenticatetion/Login";
import Register from "../pages/Authenticatetion/Register";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import AddFood from "../pages/AddFood";
import Profile from "../pages/Profile";
import FoodDetails from "../pages/FoodDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "foods",
        element: <AllFoods />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "add-food",
        element: <AddFood />,
      },
      {
        path: "food-details/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
