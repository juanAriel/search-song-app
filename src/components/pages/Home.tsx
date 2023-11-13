import { View, Text, ScrollView,StyleSheet } from 'react-native'
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
      setSongsData(dataSong);
    }
  }, [searchTerm, data]);

  const goUrlSongSpotify = (id: string) => {
    navigation.navigate('Details' , {id});
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
    <View style={styles.container}>
      <SearchInput onSearch={handleSearch}/>
      <ScrollView>
        <CardSongSearch tracksData={songsData} onClickSong={goUrlSongSpotify}/>
      </ScrollView>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});