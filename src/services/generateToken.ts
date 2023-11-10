import AsyncStorage from '@react-native-async-storage/async-storage';
//import { AsyncStorage } from 'react-native';

const generateToken = async () => {
  try {
    const urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'client_credentials');
    urlencoded.append('client_id', process.env.REACT_APP_SPOTIFY_CLIENT_ID || '');
    urlencoded.append('client_secret', process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || '');
    console.log("Client", process.env.REACT_APP_SPOTIFY_CLIENT_ID );
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlencoded,
    };
    const data = await fetch('https://accounts.spotify.com/api/token', requestOptions);
    const responseData = await data.json();
    
    return responseData;
  } catch (error) {
    console.error('Error al generar el token:', error);
    return null;
  }
};

const getToken = async () => {
  try {
    const AsyncStorageToken = await AsyncStorage.getItem('token');
    
    if (AsyncStorageToken) {
      const newObjectToken = JSON.parse(AsyncStorageToken);
      if (Date.now() < newObjectToken.tokenExpiryDate) {
        return newObjectToken.access_token;
      }
    }

    const token = await generateToken();
    const tokenExpiryDate = Date.now() + token.expires_in * 1000;

    const newToken = {
      access_token: token.access_token,
      tokenExpiryDate: tokenExpiryDate,
    };

    await AsyncStorage.setItem('token', JSON.stringify(newToken));

    return newToken.access_token;
  } catch (error) {
    console.error('Error to get token:', error);
    return null;
  }
};

export { getToken };
