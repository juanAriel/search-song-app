import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchInput from '../atoms/searchInput'
import CardSongSearch from '../atoms/cardSongSearch'
import Track from '../../models/track.interface'
import { useLazySearchTracksQuery } from '../../services/api'
import { getListSong } from '../../services/requestGetListSongs'
import { useNavigation } from '@react-navigation/native'
import SelectLanguage from '../molecules/selectLanguage'

import { useTranslation } from 'react-i18next'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [songsData, setSongsData] = useState<Track[]>([]);
  const [trigger, { data }] = useLazySearchTracksQuery();
  
  const navigation = useNavigation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (data) {
      const dataSong = getListSong(data);
      setSongsData(dataSong);
    }
  }, [searchTerm, data]);

  const goUrlSongSpotify = (id: string) => {
    navigation.navigate('Details' , {id});
  };

  const changeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
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
  <View >
    <SelectLanguage language={i18n.language} changeLanguage={changeLanguage}/>
  </View>
  
  <View  >
    <SearchInput onSearch={handleSearch}/>
    <ScrollView>
      <CardSongSearch tracksData={songsData} onClickSong={goUrlSongSpotify}/>
    </ScrollView>
  </View>
</View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#3498db88",
  }
});