"use client";
import React, { useCallback } from "react";
import { EarthoOneProvider } from "@eartho/one-client-react";
const EarthoProvider = ({ children }: { children: React.ReactNode }) => {
  const onRedirectCallback = useCallback(() => {
    console.log("onRedirectCallback called");
  }, []);

  return (
    <EarthoOneProvider
      domain={process.env.NEXT_PUBLIC_EARTHO_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_EARTHO_CLIENT_ID!}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: typeof window !== "undefined" ? window.location.origin : undefined,
      }}
    >
      {children}
    </EarthoOneProvider>
  );
};

export default EarthoProvider;
