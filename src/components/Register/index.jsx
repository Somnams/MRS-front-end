import * as React from 'react';
import {Modal, Form, Input, message} from 'antd';
import axios from '../../request';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    onCancel() {
        this.onReset();
        this.props.cancelregister();
    }

    onReset() {
        this.formRef.current.resetFields();
    }

    onOk() {
        this.formRef.current.validateFields()
            .then(values => {
                const {username, password} = values;
                const payload = {username, password};
                axios.post('/users', payload)
                    .then(() => {
                        message.success('Register Success');
                        this.onReset();
                        this.props.cancelregister();
                    })
                    .catch(e => {
                        message.error(e.message);
                    });
            })
            .catch(e => {
                console.error(e);
                message.error(e);
            });
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                title={'Register Form'}
                okText={'Submit'}
                cancelText={'Cancel'}
                onCancel={this.onCancel.bind(this)}
                onOk={this.onOk.bind(this)}
            >
                <Form ref={this.formRef}>
                    <Form.Item
                        name={'username'}
                        label={'Username'}
                        rules={[
                            {required: true, message: 'Please input username'}
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                        label={'Password'}
                        rules={[
                            {required: true, message: 'Please input your password'}
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
};

export default Register;
