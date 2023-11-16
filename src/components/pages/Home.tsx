import React, { useEffect, useState } from "react";
import SearchInput from "../atoms/searchInput";
import CardSongSearch from "../atoms/cardSongSearch";
import Track from "../../models/track.interface";
import { useLazySearchTracksQuery } from "../../services/api";
import { getListSong } from "../../services/requestGetListSongs";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native/";

const ViewMainContainer = styled.View`
  flex: 1;
`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [songsData, setSongsData] = useState<Track[]>([]);
  const [trigger, { data }] = useLazySearchTracksQuery();

  const navigation = useNavigation() as {
    navigate: (screen: string, params?: { id: string }) => void;
  };

  useEffect(() => {
    if (data) {
      const dataSong = getListSong(data);
      setSongsData(dataSong);
    }
  }, [searchTerm, data]);

  const goUrlSongSpotify = (id: string) => {
    navigation.navigate("Details", { id });
  };

  const handleSearch = (nameSong: string) => {
    if (nameSong && nameSong.length > 3) {
      setSearchTerm(nameSong);
      trigger(nameSong);
    } else {
      setSearchTerm("");
      setSongsData([]);
    }
  };

  return (
    <ViewMainContainer>
      <SearchInput onSearch={handleSearch} />
      <CardSongSearch tracksData={songsData} onClickSong={goUrlSongSpotify} />
    </ViewMainContainer>
  );
};

export default Home;
