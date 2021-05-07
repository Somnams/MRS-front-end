import * as React from 'react';
import axios from '../../request';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Register from '../Register';
import './index.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            }
        };
        this.tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16
            }
        };
    }

    onClickRegister() {
        console.log('register');
        this.setState(prev => {
            return {prev: prev.visible = true}
        });
        const path = '/users';
        const payload = {};
    }

    onFinish(values) {
        const {username, password} = values;
        const payload = {username, password};
        console.log('click finish');
        // axios.post('/users', payload)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
    }

    cancelRegister() {
        this.setState({visible: false});
    }

    render() {
        return (
            <Form
                className={'login-form'}
                initialValues={{remember: true}}
                onFinish={this.onFinish.bind(this)}
            >
                <Form.Item
                    name={'username'}
                    rules={[
                        {required: true, message: 'Please input your Username!'}
                    ]}
                >
                    <Input
                        prefix={<UserOutlined
                            className={'site-form-item-icon'}/>}
                        placeholder={'Username'}/>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {required: true, message: 'Please input your Password'}
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className={'site-form-item-icon'} />}
                        type={'password'}
                        placeholder={'Password'}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name={'remember'} valuePropName={'checked'} noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className={'login-form-forgot'}>Forgot password</a>
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} htmlType={'submit'} className={'login-form-button'}>Log in</Button>
                    Or <a onClick={this.onClickRegister.bind(this)}>register now!</a>
                    <Register visible={this.state.visible} cancelregister={this.cancelRegister.bind(this)} />
                </Form.Item>
            </Form>
        );
    };
};

export default Login;
