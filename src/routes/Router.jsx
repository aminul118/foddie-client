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
import FoodPurchases from "../pages/FoodPurchases";
import MyOrders from "../pages/MyOrders";
import MyFoods from "../pages/MyFoods";
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../pages/UpdateFood";
import ContactUs from "../pages/ContactUs";

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
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "food-details/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/food/${params.id}`),
      },
      {
        path: "purchases/:id",
        element: (
          <PrivateRoute>
            <FoodPurchases />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "update-food/:id",
        element: <UpdateFood />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/food/${params.id}`),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
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
