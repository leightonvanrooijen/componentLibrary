import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';
import { DropdownInput } from './componenets/dropdownInput/DropdownInput';
import { Sizes } from './componenets/common/types/Sizes';
import { baseTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <View style={styles.container}>
        <DropdownInput size={Sizes.Medium} />
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
