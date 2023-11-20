import renderer from 'react-test-renderer'
import CardSongDetails from './index'
import Song from '../../../models/song.interface';

const mockTracksData: Song[] = [
    {
        album: 'new',
        artist: 'Artist 1',
        name: 'song one',
        imageUrl: 'https://image.com/image-1',
        duration: 0,
        songUrl: 'https://mogs.com/song-1',
    },
];

describe("CardSongDetails component ",()=>{
    it("render component", () => {
        const componentSong = renderer.create(<CardSongDetails songDetail={mockTracksData} />).toJSON();
        expect(componentSong).toMatchSnapshot();
    })
})