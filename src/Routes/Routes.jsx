import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import SingleData from "../pages/SingleData/SingleData";
import MyToy from "../pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'allToys',
        element: <AllToy></AllToy>
      },
      {
        path: 'singleData/:id',
        element: <PrivateRoute><SingleData></SingleData></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-iota-one.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;