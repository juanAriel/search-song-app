import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetSearchTrackQuery } from "../../services/api";
import Song from "../../models/song.interface";
import { getSong } from "../../services/requestToEnPointSong";
import { useRoute } from "@react-navigation/native";
import CardSongDetails from "../molecules/cardSongDetails";

const SongPageDetails = () => {
  const route = useRoute();
  const { id } = route.params;

  const dataSong = useGetSearchTrackQuery(id);
  const [song, setSong] = useState<Song>({
    album: "",
    artist: "",
    name: "",
    imageUrl: "",
    duration: 0,
    songUrl: "",
  });

  useEffect(() => {
    const fetchSongData = () => {
      const dataSongDetail = getSong(dataSong);
      setSong(dataSongDetail);
    };
    if (dataSong) {
      fetchSongData();
    }
  }, [dataSong]);
  return (
    <View>
      <CardSongDetails songDetail={song} />
    </View>
  );
};

export default SongPageDetails;
