import { View, TouchableOpacity, FlatList, Platform } from "react-native";
import CardSongSearchProps from "./interface";
import Track from "../../../models/track.interface";
import styled from "styled-components/native/";

const InputText = styled.Text`
  color: white;
  padding: 10px;
  font-size: 20px;
  text-align: center;
`;
const StyledTextAlbum = styled.Text`
  padding-top: 10px;
  font-size: 25px;
  color: white;
  text-align: center;
  font-weight: bold;
`;

const ImageSong = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border-width: 1px;
`;
const ViewContainerCard = styled.View`
  background-color: rgba(1, 7, 66, 0.64);
  margin: 10px;
  border-radius: 25px;
  align-items: center;
`;

const ViewSafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const CardSongSearch = ({ tracksData, onClickSong }: CardSongSearchProps) => {
  const renderSongItem = ({ item }: { item: Track }) => (
    <ViewContainerCard>
      <TouchableOpacity onPress={() => onClickSong(item.id)}>
        {Platform.OS !== "web" && (
          <View>
            {item.imageUrl && <ImageSong source={{ uri: item.imageUrl }} />}
            <View>
              <StyledTextAlbum>{item.name}</StyledTextAlbum>
              <InputText>{item.artist}</InputText>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </ViewContainerCard>
  );

  return (
    <ViewSafeAreaContainer>
      <FlatList
        data={tracksData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ViewSafeAreaContainer>
  );
};

export default CardSongSearch;
