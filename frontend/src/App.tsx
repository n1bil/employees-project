import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <h1>Employees</h1>,
    },
    {
        path: Paths.login,
        element: <Login />,
    },
    {
        path: Paths.register,
        element: <Register />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
}

export default App;
