import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Product } from "./components/view/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <>Homepage</>,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "*",
          element: <>404</>,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <div className="root-container">
          <NavBar />
          <div className="outlet">
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
