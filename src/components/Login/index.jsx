import React, {Component, useState} from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './index.scss';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
            >
                <Form
                    name="normal_login"
                    className={'login-form'}
                >
                    <Form.Item
                        name={'username'}
                        rules={[{required: true, message: 'Please input your Username'}]}>
                        <Input prefix={<UserOutlined className={'site-form-item-icon'}/>} placeholder={'Username'}/>
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className={'site-form-item-icon'}/>}
                            type={'password'}
                            placeholder={'Password'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
