import React, { useState } from 'react'
import { Box, Button, Input, Label, Icon } from '@adminjs/design-system'
import { getBranding } from 'adminjs';
const CustomLogin = (props: any) => {
    const { action } = props

    const [showPassword, setShowPassword] = useState(false)

    return (
        <Box style={styles.wrapper}>
            <Box style={styles.card}>

                {/* Logo */}
                <Box style={styles.logoContainer}>
                    <img
                        src={props.branding?.logo || '/public/unisphere-logo.png'}
                        alt="Platform Logo"
                        style={styles.logo}
                    />
                </Box>

                <h2 style={styles.title}>Unisphere Plateform</h2>
                <p style={styles.subtitle}>Sign in to access your dashboard</p>

                <form method="post" action={action} style={{ width: '100%' }}>

                    <Label>Email</Label>
                    <Input
                        name="email"
                        type="email"
                        required
                        style={styles.input}
                    />

                    <Label mt="lg">Password</Label>

                    <Box style={styles.passwordWrapper}>
                        <Input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            style={styles.input}
                        />

                        <Box
                            style={styles.eyeIcon}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Icon icon="EyeOff" size={18} /> : <Icon icon="Eye" size={18} />}
                        </Box>
                    </Box>

                    <Button type="submit" mt="xl" style={styles.button}>
                        Login
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

const styles: any = {
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
}

export default CustomLogin