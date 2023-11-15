import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CardSongSearchProps from "./interface";
import Track from "../../../models/track.interface";

const CardSongSearch = ({ tracksData, onClickSong }: CardSongSearchProps) => {
  const renderSongItem = ({ item }: { item: Track }) => (
    <View style={styles.containerCard}>
      <TouchableOpacity onPress={() => onClickSong(item.id)}>
        {item.imageUrl && (
          <Image style={styles.logo} source={{ uri: item.imageUrl }} />
        )}
        <View>
          <Text style={styles.textTitleAlbum}>{item.name}</Text>
          <Text style={styles.textTitleSong}>{item.artist}</Text>
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
  logo: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
  },
  textTitleAlbum: {
    color: "white",
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  textTitleSong: {
    color: "white",
    fontSize: 16,
    paddingBottom: 10,
    textAlign: "center",
  },
});
