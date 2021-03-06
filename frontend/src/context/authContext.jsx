import React, { createContext, useContext, useState, useEffect } from 'react';

import LoginWithGithub from '../services/login';
import { api } from '../services/api';

const AuthContext = createContext({ user: '', sessionId: '', signed: false, signIn: {}, signOut: {}, checkLocalStorage: {} });

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState('');
  const [sessionId, setSessionId] = useState('');

  const signIn = async (code) => {
    const res = await LoginWithGithub(code);

    if (res.status === 200) {
      let name = res.data['name'];
      let sessionId = res.data['sessionId'];

      if (sessionId && name) {
        api.defaults.headers.authorization = `Bearer ${sessionId}`;
        setUser(name);
        setSessionId(sessionId);

        localStorage.setItem('user', name);
        localStorage.setItem('sessionId', sessionId);
        
        return res.data['isPrivate'];
      } else return false;
    } else return false;
  }

  const signOut = () => {
    setUser('');
    setSessionId('');
    localStorage.clear();
    api.defaults.headers.authorization = '';
  };

  const checkLocalStorage = () => {

    const checkUser = localStorage.getItem('user');
    const checkSession = localStorage.getItem('sessionId');

    if (!checkUser) setUser('');
    if (!checkSession) return setSessionId('');
    
    setUser(checkUser);
    setSessionId(checkSession);

    api.defaults.headers.authorization = `Bearer ${checkSession}`;

    return Boolean(checkSession);
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, sessionId, signed: (user !== '' && sessionId !== ''), signIn, signOut, checkLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};