// spotifyApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./generateToken";


export const spotifyApi = createApi({
    reducerPath: "spotifyApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spotify.com/v1/",
        prepareHeaders: async (headers) => {
            const token = await getToken();
            console.log("hello");
            console.log("token",token);
            headers.set('Authorization', `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSearchTrack: builder.query({
            query: (index) => `tracks/${index}`,
        }),
        searchTracks: builder.query({
            query: (searchTerm) =>
                `search?type=track&q=${searchTerm}&limit=10`,
        }),
    }),
});

export const { useGetSearchTrackQuery, useLazySearchTracksQuery } = spotifyApi;
