import { Button, Result, Row } from "antd";
import { Link, useParams } from "react-router-dom"

const StatusInfo: Record<string, string> = {
    created: 'User successfully created',
    updated: 'User successfully updated',
    deleted: 'User successfully deleted'
}

export const Status = () => {
    const { status } = useParams();

  return (
    <Row align='middle' justify='center' style={{ width: '100%' }}>
        <Result
            status={status ? 'success' : 404}
            title={status ? StatusInfo[status] : 'Not found'}
            extra={
                <Button key='dashboard'>
                    <Link to='/'>Home page</Link>
                </Button>
            }
        />
    </Row>
  )
};