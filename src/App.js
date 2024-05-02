import React from 'react';
import RoutesMap from './routes';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
          <RoutesMap />
      </div>
    </AuthProvider>
  );
}
