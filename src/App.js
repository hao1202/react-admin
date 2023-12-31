import Primary from "./Layout/Primary";
import {
  Home,
  Login,
  Product,
  Products,
  User,
  Users,
} from "./Pages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Styles/global.scss";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Primary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/user/:id",
          element: <User />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
