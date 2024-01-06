import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input/input";
import { CustomButton } from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";
import { Layout } from "../../components/layout";

export const Register = () => {
    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title='Sign Up' style={{ width: '30rem' }}>
                    <Form onFinish={() => null}>
                        <CustomInput type="text" name="name" placeholder="Name" />
                        <CustomInput type="email" name="email" placeholder="Email" />
                        <PasswordInput name="password" placeholder="password" />
                        <PasswordInput name="confirmPassword" placeholder="repeat password" />
                        <CustomButton type="primary" htmlType="submit">
                            Register
                        </CustomButton> 
                    </Form>
                    <Space direction="vertical" size='large'>
                        <Typography.Text>
                            Already registered ?
                            <Link to={Paths.login}> Sign In</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};
