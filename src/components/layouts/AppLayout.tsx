import React from 'react';
import { Layout, Row, Col } from 'antd';
const {Content} = Layout;

const AppLayout:React.FunctionComponent = ({ children }) => {
    return (
        <Layout style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <Content style={{
                backgroundColor: '#fff',  width: '50%', justifyContent: 'center',
                alignItems: 'center', padding: '5%', borderStyle: 'dashed', borderWidth: 2,
                height: '100vh'
            }}>
                <Row>
                    <Col span={24}>
                        {children}
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default AppLayout;
