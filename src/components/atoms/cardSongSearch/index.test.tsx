import React from 'react';
import renderer from 'react-test-renderer';
import CardSongSearch from './index';
import Track from '../../../models/track.interface';

const mockTracksData: Track[] = [
  {
    id: '1',
    name: 'Song 1',
    artist: 'Artist 1',
    imageUrl: 'https://example.com/image1.jpg',
  },
];

describe('CardSongSearch Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <CardSongSearch tracksData={mockTracksData} onClickSong={() => {}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not contain empty values', () => {
    const firstTrack = mockTracksData[0];
    const { id, name, artist, imageUrl } = firstTrack;

    expect(id).toBeTruthy(); 
    expect(name).toBeTruthy(); 
    expect(artist).toBeTruthy(); 
    expect(imageUrl).toBeTruthy(); 
  });
});
