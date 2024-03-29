import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth } from "./features/auth/auth";
import { Employees } from "./pages/employees";
import { AddEmployee } from "./pages/add-employee";
import { Status } from "./pages/status";
import { Employee } from "./pages/employee";
import { EditEmployee } from "./pages/edit-employee";

const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <Employees />,
    },
    {
        path: Paths.login,
        element: <Login />,
    },
    {
        path: Paths.register,
        element: <Register />,
    },
    {
        path: Paths.employeeAdd,
        element: <AddEmployee />,
    },
    {
        path: `${Paths.status}/:status`,
        element: <Status />,
    },
    {
        path: `${Paths.employee}/:id`,
        element: <Employee />,
    },
    {
        path: `${Paths.employeeEdit}/:id`,
        element: <EditEmployee />,
    },
]);

function App() {
    return (
        <Provider store={store}>
            <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
                <Auth>
                    <RouterProvider router={router} />
                </Auth>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
