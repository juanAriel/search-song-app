import { View, Image, TouchableOpacity, Linking } from "react-native";

import CardSongDetailsProps from "./interface";
import React from "react";
import convertTime from "../../../utils/convertTime";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native/";

const TextInfoSong = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #ffffffda;
  margin: 3px;
`;
const ViewMainContainer = styled.View`
  margin-top: 100px;
  background-color: #0661b6;
  align-items: center;
`;

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
    <ViewMainContainer>
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: songDetail.imageUrl !== "" ? songDetail.imageUrl : undefined,
        }}
      />
      <View>
        <View>
          <TextInfoSong>
            {t("album")}: {songDetail.album}
          </TextInfoSong>
          <TextInfoSong>
            {t("artist")}: {songDetail.artist}
          </TextInfoSong>
          <TextInfoSong>
            {t("title")}: {songDetail.name}
          </TextInfoSong>
          <TextInfoSong>
            {t("duration")}: {convertTime(songDetail.duration)}
          </TextInfoSong>
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
            <TextInfoSong>{t("listen")}</TextInfoSong>
          </TouchableOpacity>
        </View>
      </View>
    </ViewMainContainer>
  );
};

export default CardSongDetails;
