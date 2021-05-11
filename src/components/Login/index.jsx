import * as React from 'react';
import axios from '../../request';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Register from '../Register';
import rootStore from '../../store/rootStore';
import './index.scss';
import {Link} from "react-router-dom";

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
        this.setState(prev => {
            return {prev: prev.visible = true}
        });
    }

    onFinish(values) {
        // mrs-storage
        const {username, password} = values;
        const auth = {username, password};
        axios.post('/tokens', {}, {auth})
            .then(res => {
                message.success('Login success.');
                const {token} = res.data;
                // save token
                window.localStorage.setItem('mrs-storage', token);
                let {user_id, user_name} = JSON.parse(atob(window.localStorage.getItem('mrs-storage').split('.')[1]));
                user_id > 5 && (user_id = 10);
                rootStore.userId = user_id;
                rootStore.username = user_name;
                this.props.history.replace('/');
            })
            .catch(e => {
                console.log(e);
                message.error(e);
            });
    }

    cancelRegister() {
        this.setState({visible: false});
    }

    render() {
        return (
            <div className={'page login'}>
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
                        <Button ghost htmlType={'submit'} className={'login-form-button'}>Log in</Button>
                         Or <a className={'login-form-link'} onClick={this.onClickRegister.bind(this)}>register now!</a>
                        <Register visible={this.state.visible} cancelregister={this.cancelRegister.bind(this)} />
                    </Form.Item>
                </Form>
            </div>
        );
    };
};

export default Login;
