import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import { store } from "./app/store";

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
        <Provider store={store}>
            <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
                <RouterProvider router={router} />
            </ConfigProvider>
        </Provider>
    );
}

export default App;
