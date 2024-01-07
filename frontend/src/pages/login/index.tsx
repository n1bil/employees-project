import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input/input";
import { CustomButton } from "../../components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { RequestUserData, useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { useState } from "react";
import { ErrorMessage } from "../../components/error-message";

export const Login = () => {
    const navigate = useNavigate();
    const [loginUser, loginUserResult] = useLoginMutation();
    const [error, setError] = useState('');

    const login = async (data: RequestUserData) => {
        try {
            await loginUser(data).unwrap();

            navigate('/');
        } catch (err) {
            const maybeError = isErrorWithMessage(err);

            if (maybeError) {
                setError(err.data.message);
            } else {
                setError('Unknown error');
            }
        }
    }


    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title='Sign In' style={{ width: '30rem' }}>
                    <Form onFinish={login}>
                        <CustomInput type="email" name="email" placeholder="Email" />
                        <PasswordInput name="password" placeholder="password" />
                        <CustomButton type="primary" htmlType="submit">
                            Log In
                        </CustomButton> 
                    </Form>
                    <Space direction="vertical" size='large'>
                        <Typography.Text>
                            No account ?
                            <Link to={Paths.register}> Sign up</Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
};