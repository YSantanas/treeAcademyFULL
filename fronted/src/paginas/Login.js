import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Login1 from '../assets/login1.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const inicio = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div
      className="container pt-3 border alert alert-light text-center"
      style={{ minHeight: 'auto', paddingTop: '2vh', marginTop: '5vh' }}
    >
      <h1 className="text-dark text-center mb-3">Iniciar Sesión</h1>

      <Row>
        <Col>
          <img src={Login1} className="justify-content-center" alt="logo" />
        </Col>

        <Col>
          <Form
            className="mb-3"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Nombre"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Por favor, introduce tu nombre!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Por favor, introduce tu contraseña!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Recuerdame</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default inicio;
