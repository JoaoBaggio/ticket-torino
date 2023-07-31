import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme, PaperProvider, Button, Text,

} from 'react-native-paper';
import Home from './components/Home';
import MyTicket from './components/MyTicket';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyTicket" component={MyTicket} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    blue: '#1e4497',
    yellow: '#fbdf00',
    lightBlue: '#d1d8ea',
    lightGrey: '#ebecf1',
  },
};