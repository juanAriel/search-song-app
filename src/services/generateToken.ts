import AsyncStorage from "@react-native-async-storage/async-storage";

const generateToken = async () => {
  try {
    const urlencoded = `grant_type=client_credentials&client_id=${
      process.env.REACT_APP_SPOTIFY_CLIENT_ID || ""
    }&client_secret=${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || ""}`;

    console.log("client ID:", process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    console.log("client Secret:", process.env.REACT_APP_SPOTIFY_CLIENT_SECRET);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencoded,
    };

    const data = await fetch(
      "https://accounts.spotify.com/api/token",
      requestOptions
    );
    if (!data.ok) {
      throw new Error(
        `Error en la request: ${data.status} - ${data.statusText}`
      );
    }
    const responseData = await data.json();

    return responseData;
  } catch (error) {
    console.error("Error al generate el token:", error);
    return null;
  }
};

const getToken = async () => {
  const localStorageToken = await AsyncStorage.getItem("token");
  
  if (localStorageToken) {
    const newObjectToken = JSON.parse(localStorageToken);
    if (Date.now() < newObjectToken.tokenExpiryDate) {
      return newObjectToken.access_token;
    }
  }
  
  const token = await generateToken();
  const tokenExpiryDate = Date.now() + token.expires_in * 60;
  
  const newToken = {
    access_token: token.access_token,
    tokenExpiryDate: tokenExpiryDate,
  };

  await AsyncStorage.setItem("token", JSON.stringify(newToken));
  return newToken.access_token;
};

export { getToken };
