'use client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'

const GoogleOneTapProvider = ({children}:{children: React.ReactNode}) => {
  return (
    <GoogleOAuthProvider clientId="227644805927-h9626jbspjsjd6ddr1oo2ofegq5k94k2.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}

export default GoogleOneTapProvider