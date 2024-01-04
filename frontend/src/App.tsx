import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ConfigProvider, theme } from "antd";

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
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
