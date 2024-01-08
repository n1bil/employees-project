import { Card, Form, Space } from "antd";
import { Employee } from "../../types";
import { CustomInput } from "../custom-input";
import { ErrorMessage } from "../error-message";
import { CustomButton } from "../custom-button";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
};

export const EmployeeForm = (props: Props<Employee>) => {
  return (
    <Card title={props.title} style={{ width: '30rem' }}>
        <Form name="employee-form" onFinish={props.onFinish} initialValues={props.employee}>
            <CustomInput type='text' name="firstName" placeholder="Name" />
            <CustomInput type='text' name="lastName" placeholder="Surname" />
            <CustomInput type='number' name="age" placeholder="Age" />
            <CustomInput type='text' name="address" placeholder="Address" />
            <Space>
                <ErrorMessage message={props.error}></ErrorMessage>
                <CustomButton htmlType="submit">
                    {props.btnText}
                </CustomButton>
            </Space>
        </Form>
    </Card>
  )
}