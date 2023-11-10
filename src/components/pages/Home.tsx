import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchInput from '../atoms/searchInput'
import CardSongSearch from '../atoms/cardSongSearch'
import Track from '../../models/track.interface'
import { useLazySearchTracksQuery } from '../../services/api'
import { getListSong } from '../../services/requestGetListSongs'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [songsData, setSongsData] = useState<Track[]>([]);
  const [trigger, { data }] = useLazySearchTracksQuery();
  
  const navigation = useNavigation();

  useEffect(() => {
    if (data) {
      const dataSong = getListSong(data);
      console.log("data", data);
      setSongsData(dataSong);
    }
  }, [searchTerm, data]);

  const goUrlSongSpotify = (id: string) => {
    console.log(id);
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
    <View>
      <SearchInput onSearch={handleSearch}/>
      <CardSongSearch tracksData={songsData} onClickSong={goUrlSongSpotify}/>
    </View>
  )
}

export default Home