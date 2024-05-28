import { cookies } from "next/headers";

const { EarthoOne } = require("@eartho/one-server-node");
export const useServerUser = () => {
  const serverEarthoOneOptions = {
    clientId: process.env.NEXT_PUBLIC_EARTHO_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_EARTHO_CLIENT_SECRET,
  };
  const serverEarthoOne = new EarthoOne(serverEarthoOneOptions);
  const idToken = cookies().get("id_token")?.value;
  if (idToken) {
    const user = serverEarthoOne.getVerifiedUser(idToken);
    return user;
  } else {
    return null;
  }
};
