import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './SRC/HomeScreen';
import AddBook from './SRC/AddBook';
import bookInfo from './SRC/bookInfo';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Add Book') {
            iconName = focused ? 'ios-add-circle' : 'ios-add';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Book" component={AddBook} />
        {/* <Tab.Screen name="Root" component={Root} /> */}
      </Tab.Navigator>
    </NavigationContainer>


  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name="Home" component={HomeScreen}  />
  //     <Stack.Screen name="Add Book" component={AddBook} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  );
}

// function Root() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Book Info"
//           component={bookInfo}
//           options={{ headerShown: false }}
//         />
//         {/* <Stack.Screen name="Feed" component={Settings} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
