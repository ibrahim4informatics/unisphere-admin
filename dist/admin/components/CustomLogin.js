import React, { useState } from 'react';
import { Box, Button, Input, Label, Icon } from '@adminjs/design-system';
const CustomLogin = (props) => {
    const { action } = props;
    const [showPassword, setShowPassword] = useState(false);
    return (React.createElement(Box, { style: styles.wrapper },
        React.createElement(Box, { style: styles.card },
            React.createElement(Box, { style: styles.logoContainer },
                React.createElement("img", { src: props.branding?.logo || '/public/unisphere-logo.png', alt: "Platform Logo", style: styles.logo })),
            React.createElement("h2", { style: styles.title }, "Unisphere Plateform"),
            React.createElement("p", { style: styles.subtitle }, "Sign in to access your dashboard"),
            React.createElement("form", { method: "post", action: action, style: { width: '100%' } },
                React.createElement(Label, null, "Email"),
                React.createElement(Input, { name: "email", type: "email", required: true, style: styles.input }),
                React.createElement(Label, { mt: "lg" }, "Password"),
                React.createElement(Box, { style: styles.passwordWrapper },
                    React.createElement(Input, { name: "password", type: showPassword ? 'text' : 'password', required: true, style: styles.input }),
                    React.createElement(Box, { style: styles.eyeIcon, onClick: () => setShowPassword(!showPassword) }, showPassword ? React.createElement(Icon, { icon: "EyeOff", size: 18 }) : React.createElement(Icon, { icon: "Eye", size: 18 }))),
                React.createElement(Button, { type: "submit", mt: "xl", style: styles.button }, "Login")))));
};
const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f0f4ff, #e6f0ff)',
        animation: 'fadeIn 0.8s ease',
    },
    card: {
        width: '420px',
        padding: '40px',
        borderRadius: '16px',
        background: '#ffffff',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: '20px',
    },
    logo: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
    },
    title: {
        marginBottom: '5px',
        fontWeight: 600,
        color: '#1a237e',
    },
    subtitle: {
        marginBottom: '30px',
        fontSize: '14px',
        color: '#5c6bc0',
    },
    input: {
        width: '100%',
    },
    passwordWrapper: {
        position: 'relative',
        width: '100%',
    },
    eyeIcon: {
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#5c6bc0',
    },
    button: {
        width: '100%',
        backgroundColor: '#3949ab',
        color: 'white',
        borderColor: '#3949ab',
    },
};
export default CustomLogin;
