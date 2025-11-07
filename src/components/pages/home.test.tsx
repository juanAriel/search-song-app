import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import { store } from '../../store';

describe('Home Component', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </Provider>
    );
    const componentHome = component.toJSON();
    expect(componentHome).toMatchSnapshot();
  });
});
