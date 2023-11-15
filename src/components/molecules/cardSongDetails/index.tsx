import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

import CardSongDetailsProps from "./interface";
import React from "react";
import convertTime from "../../../utils/convertTime";
import { useTranslation } from "react-i18next";

const CardSongDetails = ({ songDetail }: CardSongDetailsProps) => {
  const { t } = useTranslation();
  if (!songDetail) {
    return null;
  }
  const openExternalLink = async (url: any) => {
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
          source={{
            uri: songDetail.imageUrl !== "" ? songDetail.imageUrl : undefined,
          }}
        />
        <View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {t("album")}: {songDetail.album}
            </Text>
            <Text style={styles.text}>
              {t("artist")}: {songDetail.artist}
            </Text>
            <Text style={styles.text}>
              {t("title")}: {songDetail.name}
            </Text>
            <Text style={styles.text}>
              {t("duration")}: {convertTime(songDetail.duration)}
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
              onPress={() => {
                openExternalLink(songDetail.songUrl);
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {t("listen")}
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
    marginTop: 100,
    backgroundColor: "#0003a3b9",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffffffda",
  },
});
