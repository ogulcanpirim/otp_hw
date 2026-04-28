/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

jest.mock('../src/navigation/RootNavigator', () => {
  const React = require('react');
  const { Text, View } = require('react-native');
  return {
    RootNavigator: () =>
      React.createElement(View, null, React.createElement(Text, null, 'Navigation mock')),
  };
});

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
