import { View, Text, Image, TouchableOpacity,StyleSheet ,Linking } from "react-native";

import CardSongDetailsProps from "./interface";
import React from "react";
import convertTime from "../../../utils/convertTime";

const CardSongDetails = ({ songDetail }: CardSongDetailsProps) => {
  if (!songDetail) {
    return null;
  }
  const openExternalLink = async (url:any) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn("it could not open the url:", url);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: songDetail.imageUrl }}
        />
        <View >

          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {"album"}: {songDetail.album}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#8f1930" }}>
              {"artist"}: {songDetail.artist}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#8f1930" }}>
              {"title"}: {songDetail.name}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#8f1930" }}>
              {"duration"}: {convertTime(songDetail.duration)}
            </Text>
          </View>

          <View>
            <TouchableOpacity 
              style={{
                borderRadius: 25,
                height: 50,
                marginBottom: 20,
                backgroundColor: "#3498db",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {openExternalLink(songDetail.songUrl)
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {"listen music"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSongDetails;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#41e3ff4a",
    alignItems: "center",
  },
});