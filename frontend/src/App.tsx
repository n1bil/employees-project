import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth } from "./features/auth/auth";

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
                <Auth>
                    <RouterProvider router={router} />
                </Auth>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
