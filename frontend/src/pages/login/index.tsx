import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input/input";
import { CustomButton } from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title='Sign In' style={{ width: '30rem' }}>
                    <Form onFinish={() => null}>
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
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
};