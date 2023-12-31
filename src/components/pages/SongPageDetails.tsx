import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetSearchTrackQuery } from "../../services/api";
import Song from "../../models/song.interface";
import { getSong } from "../../services/requestToEnPointSong";
import CardSongDetails from "../molecules/cardSongDetails";

const SongPageDetails = ({ route }: { route: any }) => {
  const { id } = route.params;

  const dataSong = useGetSearchTrackQuery(id);
  const [song, setSong] = useState<Song | null>();

  useEffect(() => {
    const fetchSongData = () => {
      const dataSongDetail = getSong(dataSong);
      setSong(dataSongDetail);
    };
    if (dataSong) {
      fetchSongData();
    }
  }, [dataSong]);
  return <View>{song && <CardSongDetails songDetail={song} />}</View>;
};

export default SongPageDetails;
