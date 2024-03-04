import React, { useState } from 'react';

const LoginForm = ({ onLogin, onForgotPassword, passwordResetShown, newPassword, onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }
        if (username === 'priya' && password === '12345' || password === newPassword) {
            onLogin(username, password);
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9', }}>
            <h2 style={{ marginBottom: '20px' }}>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '10px', padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} disabled={passwordResetShown} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px', padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} disabled={passwordResetShown} />
            <button onClick={handleLogin} style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }} disabled={passwordResetShown}>Login</button>
            <button onClick={onForgotPassword} style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }}>Forgot Password?</button>
            <button onClick={onSignup} style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }}>Sign Up</button>
        </div>
    );
};

const SuccessfulLogin = ({ username }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <h2 style={{ fontSize: '70px' }}>Welcome, {username}!</h2>
            <p style={{ fontSize: '30px' }}>You have successfully logged in.</p>
        </div>
    );
};

const ResetPasswordForm = ({ onResetPassword, onCancel }) => {
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = () => {
        onResetPassword(newPassword);
        setNewPassword('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9', }}>
            <h2 style={{ marginBottom: '20px' }}>Reset Password</h2>
            <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ marginBottom: '10px', padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
            <button onClick={handleResetPassword} style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }}>Reset Password</button>
            <button onClick={onCancel} style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }}>Cancel</button>
        </div>
    );
};

const SignupForm = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }
        onSignup(username, password);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9', }}>
            <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '10px', padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px', padding: '8px', width: '100%', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
            <button onClick={handleSignup} style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }}>Sign Up</button>
        </div>
    );
};

const SignupConfirmation = ({ username }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <h2 style={{ fontSize: '70px' }}>Registration Successful! {username}!</h2>
            <p style={{ fontSize: '30px' }}>Welcome, {username}!</p>
        </div>
    );
};

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const [showSignupConfirmation, setShowSignupConfirmation] = useState(false);

    const handleLogin = (username, password) => {
        console.log('Logging in with:', username, password);
        setLoggedIn(true);
        setLoggedInUsername(username);
        setShowSignupConfirmation(false); 
    };

    const handleResetPassword = (newPassword) => {
        console.log('Password reset with new password:', newPassword);
        setNewPassword(newPassword);
        setShowResetPassword(false);
    };

    const toggleSignupForm = () => {
        setShowSignup(!showSignup);
    };

    const handleSignup = (username, password) => {
        setLoggedIn(true);
        setLoggedInUsername(username);
        setShowSignupConfirmation(true);
        setShowLogin(false); 
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {showLogin && !loggedIn && <LoginForm onLogin={handleLogin} onForgotPassword={() => setShowResetPassword(true)} passwordResetShown={showResetPassword} newPassword={newPassword} onSignup={toggleSignupForm} />}
            {loggedIn && !showSignupConfirmation && <SuccessfulLogin username={loggedInUsername} />}
            {showResetPassword && <ResetPasswordForm onResetPassword={handleResetPassword} onCancel={() => setShowResetPassword(false)} />}
            {showSignup && <SignupForm onSignup={handleSignup} />}
            {showSignupConfirmation && <SignupConfirmation username={loggedInUsername} />}
        </div>
    );
};

export default AuthPage;
