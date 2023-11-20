import renderer from "react-test-renderer";
import SongPageDetails from "./SongPageDetails";
import { getSong } from '../../services/requestToEnPointSong';

jest.mock("../../services/api");
    
describe("unit test on SongPageDetails", () => {
  test(' get the song correct of getSong'),()=>{
    const mockData = {
      currentData: {
          album: {
            album_type: "",
            artists: [],
            available_markets: [],
            external_urls: {},
            href: "",
            id: "",
            images: [],
            name: "",
            release_date: "",
            release_date_precision: "",
            total_tracks: 0,
            type: "",
            uri: "",
          },
          artists: [],
          available_markets: [],
          disc_number: 0,
          duration_ms: 0,
          explicit: false,
          external_ids: {
            isrc: "",
          },
          external_urls: {},
          href: "",
          id: "",
          is_local: false,
          name: "",
          popularity: 0,
          preview_url: null,
          track_number: 0,
          type: "",
          uri: "",
        },
        data: {
          album: {
            album_type: "",
            artists: [],
            available_markets: [],
            external_urls: {},
            href: "",
            id: "",
            images: [],
            name: "",
            release_date: "",
            release_date_precision: "",
            total_tracks: 0,
            type: "",
            uri: "",
          },
          artists: [],
          available_markets: [],
          disc_number: 0,
          duration_ms: 0,
          explicit: false,
          external_ids: {
            isrc: "",
          },
          external_urls: {},
          href: "",
          id: "",
          is_local: false,
          name: "",
          popularity: 0,
          preview_url: null,
          track_number: 0,
          type: "",
          uri: "",
        },
        endpointName: "",
        fulfilledTimeStamp: 0,
        isError: false,
        isFetching: false,
        isLoading: false,
        isSuccess: false,
        isUninitialized: false,
        originalArgs: "",
        refetch: null,
        requestId: "",
        startedTimeStamp: 0,
        status: "",
    };
    const dataResult ={
      album: "",
      artist: "",
      name: "",
      imageUrl: "",
      duration: 0,
      songUrl: "",
    }
    const result = getSong(mockData);
    expect(result).toEqual(dataResult);
  },
  test('renders the component with song details', () => {
    const mockRoute = {
      params: {
        id: "",
      },
    };
    const component = renderer.create(<SongPageDetails route={mockRoute} />);
    const componentSongPageDetails = component.toJSON();
    expect(componentSongPageDetails).toMatchSnapshot();
  });
});
