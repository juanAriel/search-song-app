import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CardSongSearchProps from "./interface";
import Track from "../../../models/track.interface";
import styled from 'styled-components/native/'


const InputText = styled.Text`
  color: #BF4F74;
`
const StyledTextAlbum = styled.Text`
  padding: 20px;
  background-color: blue;
  font-size: 32px;
  color: red;
  text-align: center;
`
const ImageSong = styled.Image`
  width: 300px;
    height: 300px;
    border-radius: 150px;
    border-width: 1px;
`
const CardSongSearch  = ({ tracksData, onClickSong }: CardSongSearchProps) => {  
  
  const renderSongItem = ({ item }: { item: Track }) => (
    <View style={styles.containerCard}>
      <TouchableOpacity onPress={() => onClickSong(item.id)}>
        {item.imageUrl && (
          <ImageSong  source={{ uri: item.imageUrl }} />
        )}
        <View>
          <StyledTextAlbum>{item.name}</StyledTextAlbum>
          
          <InputText>{item.artist}</InputText>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tracksData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
      
    </SafeAreaView>
  );
};

export default CardSongSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    backgroundColor: "rgba(1, 7, 66, 0.64)",
    marginVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
});
