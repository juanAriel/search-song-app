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
import SelectLanguage from "../selectLanguage";

const CardSongDetails = ({ songDetail }: CardSongDetailsProps) => {
  const { t, i18n } = useTranslation();
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
  const changeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <View>
      <View>
        <SelectLanguage
          language={i18n.language}
          changeLanguage={changeLanguage}
        />
      </View>
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: songDetail.imageUrl }}
        />
        <View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {t("album")}: {songDetail.album}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#8f1930" }}
            >
              {t("artist")}: {songDetail.artist}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#8f1930" }}
            >
              {t("title")}: {songDetail.name}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#8f1930" }}
            >
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
    backgroundColor: "#41e3ff4a",
    alignItems: "center",
  },
});
