import { PlusCircleOutlined } from "@ant-design/icons";
import { CustomButton } from "../../components/custom-button";
import { Layout } from "../../components/layout";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../app/services/employee";
import { ColumnsType } from "antd/es/table";
import { Employee } from "../../types";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEffect } from "react";

const columns: ColumnsType<Employee> = [
    {
        title: 'Name',
        dataIndex: 'firstName',
        key: 'firstName'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
];

export const Employees = () => {
    const { data, isLoading } = useGetAllEmployeesQuery();
    const user = useSelector(selectUser)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [navigate, user]);

    const goToAddUser = () => navigate(Paths.employeeAdd);

    return (
        <Layout>
            <CustomButton
                type="default"
                onClick={goToAddUser}
                icon={<PlusCircleOutlined />}
            >
                Add
            </CustomButton>
            <Table
                className="custom-table"
                loading={isLoading}
                dataSource={data}
                pagination={false}
                columns={columns}
                rowKey={(employee) => employee.id}
                onRow={(employee) => { 
                    return {
                        onClick: () => navigate(`${Paths.employee}/${employee.id}`)
                    }
                }}
            />
        </Layout>
    );
};
