import { View, Text, Image, TouchableOpacity } from "react-native";

import CardSongDetailsProps from "./interface";
import React from "react";
import convertTime from "../../../utils/convertTime";

const CardSongDetails = ({ songDetail }: CardSongDetailsProps) => {
  if (!songDetail) {
    return null;
  }
  return (
    <View>
      <View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View
            style={{
              flex: 1,
              alignContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {"album"}: {songDetail.album}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "gray" }}>
              {"artist"}: {songDetail.artist}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "gray" }}>
              {"title"}: {songDetail.name}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "gray" }}>
              {"duration"}: {convertTime(songDetail.duration)}
            </Text>
          </View>
          <View style={{ display: "flex", margin: "auto" }}>
            <TouchableOpacity
              style={{
                borderRadius: 25,
                height: 50,
                marginBottom: 20,
                backgroundColor: "#3498db",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                console.log("Abrir URL de la canción:", songDetail.songUrl);
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {"listen"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: songDetail.imageUrl }}
        />
      </View>
    </View>
  );
};

export default CardSongDetails;
