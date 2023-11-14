import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CardSongSearchProps from "./interface";

const CardSongSearch = ({ tracksData, onClickSong }: CardSongSearchProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {tracksData.length > 0 &&
          tracksData.map((track, index) => (
            <View key={index} style={styles.containerCard}>
              <TouchableOpacity onPress={() => onClickSong(track.id)}>
                {track.imageUrl && (
                  <Image style={styles.logo} source={{ uri: track.imageUrl }} />
                )}
                <View>
                  <Text style={styles.textTitleAlbum}>{track.name}</Text>
                  <Text style={styles.textTitleSong}>{track.artist}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
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
    margin: 10,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 25,
    alignItems: "center",
  },
  scrollView: {
    width: "auto",
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
