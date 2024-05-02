import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const initialLoggedIn = localStorage.getItem('@user:loggedIn');
const initialUser = localStorage.getItem('@user');
const initalUsername = localStorage.getItem('@user:username');
const initalFirstName = localStorage.getItem('@user:first_name');

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);
    const [usernameLogged, setUsernameLogged] = useState(initalUsername);
    const [firstNameLogged, setFirstNameLogged] = useState(initalFirstName);
    const [user, setUser] = useState(initialUser);

    const login = (userData) => {
        setIsLoggedData();
        setUserData(userData);
    }

    const setIsLoggedData = () => {
        setIsLoggedIn(true);
        localStorage.setItem('@user:loggedIn', true);
    }

    const setUserData = (user) => {
        setUser(user);
        setUsernameLoggedData(user.user.username);
        setFirstNameLoggedData(user.user.first_name);

        localStorage.setItem('@user', JSON.stringify(user));
    }

    const setUsernameLoggedData = (username) => {
        setUsernameLogged(username);
        localStorage.setItem('@user:username', username);
    }

    const setFirstNameLoggedData = (first_name) => {
        setFirstNameLogged(first_name);
        localStorage.setItem('@user:first_name', first_name);
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUser({});

        localStorage.removeItem('@user:loggedIn');
        localStorage.removeItem('@user');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, usernameLogged, firstNameLogged, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;