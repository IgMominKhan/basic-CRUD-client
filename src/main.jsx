import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateUser from "./UpdateUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("https://9wcw9z-8080.csb.app/users"),
  },
  {
    path: "/update/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`https://9wcw9z-8080.csb.app/user/${params.id}`)
    ,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
