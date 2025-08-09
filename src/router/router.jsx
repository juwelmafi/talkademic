import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import FindTutors from "../pages/FindTutors/FindTutors";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import MyBookedTutors from "../pages/MyBookdedTutors/MyBookedTutors";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import TutorDetails from "../pages/TutotDetails/TutorDetails";
import TutorsByCat from "../pages/TutorsByCat/TutorsByCat";
import ErrorPage from "../pages/ErrrorPage/ErrorPage";
import Loading from "../pages/Loading/Loading";
import PrivateRoute from "../provider/PrivateRoute";
import NoContent from "../pages/NoContent/NoContent";
import DashBoard from "../layout/DashBoard";
import DashboardHome from "../pages/Dashboard/DashobardHome/DashboardHome";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "../provider/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/find-tutors",
        loader: () => fetch("https://talkademic-server.vercel.app/tutorials"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: FindTutors,
      },
      {
        path: "/find-tutors/:category",
        loader: ({ params }) =>
          fetch(
            `https://talkademic-server.vercel.app/find-tutors/${params.category}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        Component: TutorsByCat,
      },
      {
        path: "/tutor-details/:id",
        // loader: ({params})=> fetch(`https://talkademic-server.vercel.app/tutorials/${params.id}`),
        element: <TutorDetails></TutorDetails>,
      },

      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/no-content",
        Component: NoContent,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoute>
            <MyTutorials></MyTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoute>
            <AddTutorials></AddTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-booked-tutors",
        element: (
          <PrivateRoute>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-users",
        element: <AdminRoute>
          <ManageUsers></ManageUsers>
        </AdminRoute>
      }
    ],
  },
]);

export default router;
