import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Splachscreen from './screens/Splachscreen';
import LoginScreen from './screens/LoginScreen';
import AuthNav from './navigations/AuthNav';
export default function App() {

  //localhost won't work cuz u running the code on your phne using expo so the phone won't know "localhost "
  //we have to use the ip adress " opn CMD and use command "ipconfig" and use the sans-fil IPV06 u will find ""
  global.path = 'http://192.168.1.100:5000';

  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
