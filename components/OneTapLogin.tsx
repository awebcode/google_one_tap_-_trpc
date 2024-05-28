"use client";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
const OneTaplogin = () => {
  let isLoggedIn = false;
  useGoogleOneTapLogin({
    googleAccountConfigs: {
      client_id:
        "227644805927-h9626jbspjsjd6ddr1oo2ofegq5k94k2.apps.googleusercontent.com",
      auto_select: true,
    },
    disabled: isLoggedIn ? true : false,
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: (err) => {
      console.log("Login Failed",err);
    },
  });
  return (
    <>
      <h1>Google One tap</h1>
    </>
  );
};

export default OneTaplogin;
