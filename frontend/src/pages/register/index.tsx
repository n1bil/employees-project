import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input/input";
import { CustomButton } from "../../components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { Layout } from "../../components/layout";
import { useState } from "react";
import { useRegisterMutation } from "../../app/services/auth";
import { User } from "../../types";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

type RegisterData = Omit<User, 'id'> & {confirmPassword: string};

export const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [registerUser] = useRegisterMutation();

    const register = async (data: RegisterData) => {
        try {
            await registerUser(data).unwrap();

            navigate('/');
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError('Unknown error');
            }
        }
    };

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title='Sign Up' style={{ width: '30rem' }}>
                    <Form onFinish={register}>
                        <CustomInput type="text" name="name" placeholder="Name" />
                        <CustomInput type="email" name="email" placeholder="Email" />
                        <PasswordInput name="password" placeholder="password" />
                        <PasswordInput name="confirmPassword" placeholder="repeat password" />
                        <CustomButton type="default" htmlType="submit">
                            Register
                        </CustomButton> 
                    </Form>
                    <Space direction="vertical" size='large'>
                        <Typography.Text>
                            Already registered ?
                            <Link to={Paths.login}> Sign In</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};
