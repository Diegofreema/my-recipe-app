import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Search from './screens/Search';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme} style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => '',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
