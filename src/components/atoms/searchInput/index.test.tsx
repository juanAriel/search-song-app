import React from 'react';
import renderer from 'react-test-renderer'
import SearchInput from './index';

describe('test component searchInput', () => {
  test('renders correctly', () => {
    const  getByPlaceholderText  = renderer.create(<SearchInput onSearch={() => {}} />).toJSON();
    expect(getByPlaceholderText).toMatchSnapshot();
  });
  test('has the correct initial state', () => {
    const componentValue = renderer.create(<SearchInput onSearch={() => {}} />).toJSON();

    expect(componentValue.children[1].props.value).toBe(''); 
  });
});
