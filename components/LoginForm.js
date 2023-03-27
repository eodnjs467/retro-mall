import React, {useCallback, useState} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {useRouter} from "next/router";

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(' DB 로그인 ㄱ ㄱ ')
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onClickRegister = useCallback(() => {
        router.push("/signup");
    }, []);

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, [email]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, [password]);

    const onToggleRemember = useCallback((e) => {
        setChecked(e.target.checked);
    }, [checked]);

    console.log(checked);
    return(
        <Form
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
                label="email"
                name="email"
            >
                <Input value={email} onChange={onChangeEmail} style={{width: 300}} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
            >
                <Input.Password value={password} onChange={onChangePassword} style={{width: 300}} />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox onClick={onToggleRemember}><span style={{color: "darkgrey"}}>아이디 저장</span></Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" >
                    로그인
                </Button>
                <Button htmlType="button" style={{marginLeft: 10}} onClick={onClickRegister}>
                    회원가입
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;
