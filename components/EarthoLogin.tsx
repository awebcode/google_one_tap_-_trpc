"use client";
// src/App.js
import React from "react";
import { useEarthoOne } from "@eartho/one-client-react";
import Cookies from "js-cookie";

function EarthoLoginPage() {
  const { isLoading, isConnected, error, user, connectWithPopup, logout, getIdToken } =
    useEarthoOne();

  const loginpopup = async () => {
    await connectWithPopup({
      accessId: process.env.NEXT_PUBLIC_EARTHO_ACCESS_ID!,
    });
    const token = await getIdToken();
    document.cookie = `id_token=${token}; path=/;`;
  };
  const onlogout = async () => {
    logout({
      logoutParams: { redirectUri: "/" },
      clientId: process.env.NEXT_PUBLIC_EARTHO_CLIENT_ID!,
    });
    Cookies.remove("id_token");
  };
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isConnected && user) {
    return (
      <div className="prose md:prose-xl">
        <h1> Hello {user.displayName} </h1>
        <p> Hello {user.email} </p>
        <p>
          {" "}
          verified{" "}
          {user.emailVerified ? (
            <span className="text-emerald-500">true</span>
          ) : (
            <span className="text-rose-500">false</span>
          )}{" "}
        </p>
        <button onClick={onlogout}>Log out</button>
      </div>
    );
  } else {
    return (
      <button className="btn btn-outline-success" id="login" onClick={loginpopup}>
        Log in
      </button>
    );
  }
}

export default EarthoLoginPage;
