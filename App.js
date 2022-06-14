// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./components/screens/Home";
// import { GlobalContext, GlobalProvider } from "./context/global";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import PhotoProfile from "./components/modal/PhotoProfile";
// import Profile from "./components/screens/Profile";
// import Tugas from "./components/screens/Tugas";
// import Aktivitas from "./components/screens/History";
// import Camera from "./components/screens/Camera";
// import Login from "./components/screens/Login";

// import { StatusBar, BackHandler } from "react-native";
// import { HomeSVG, TugasSVG, ActivitySVG, ProfileSVG } from "./lib/listSvg";
// import { useEffect, useState } from "react";

// import { PortalProvider } from "@gorhom/portal";
// import { View, Text } from "react-native";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function TabNav() {
//   return (
//     <Tab.Navigator
//       initialRouteName='Home'
//       barStyle={{
//         backgroundColor: "rgb(59, 130, 246)",
//       }}
//       activeBackgroundColor='white'
//       screenOptions={{ presentation: "modal" }}
//       backBehavior='initialRoute'
//     >
//       <Tab.Group screenOptions={{ presentation: "modal", animation: "none" }}>
//         <Tab.Screen
//           name='Home'
//           component={Home}
//           options={{
//             headerShown: false,
//             tabBarLabel: "Home",
//             tabBarActiveTintColor: "rgb(59, 130, 246)",
//             tabBarIcon: () => <HomeSVG col={`w-6 h-6 text-blue-500`} />,
//           }}
//         />
//         <Tab.Screen
//           name='Tugas'
//           component={Tugas}
//           options={{
//             headerRight: () => {
//               return (
//                 <View>
//                   <Text>Test</Text>
//                 </View>
//               );
//             },
//             headerStyle: {
//               backgroundColor: "rgb(59, 130, 246)",
//             },

//             headerTintColor: "#fff",

//             tabBarLabel: "Tugas",
//             tabBarIcon: () => <TugasSVG col={`w-6 h-6 text-blue-500`} />,
//           }}
//         />
//         <Tab.Screen
//           name='History'
//           component={Aktivitas}
//           options={{
//             headerStyle: {
//               backgroundColor: "rgb(59, 130, 246)",
//             },
//             headerTintColor: "#fff",
//             tabBarLabel: "History",
//             tabBarActiveTintColor: "rgb(59, 130, 246)",
//             tabBarIcon: () => <ActivitySVG col={`w-6 h-6 text-blue-500`} />,
//           }}
//         />
//         <Tab.Screen
//           name='Profile'
//           component={Profile}
//           options={{
//             headerShown: false,
//             tabBarLabel: "Profile",
//             tabBarActiveTintColor: "rgb(59, 130, 246)",

//             tabBarIcon: () => <ProfileSVG col={`w-6 h-6 text-blue-500`} />,
//           }}
//         />
//       </Tab.Group>
//     </Tab.Navigator>
//   );
// }

// function StackNav() {
//   return (
//     <Stack.Navigator initialRouteName='Login'>
//       <Stack.Screen name='Login' component={Login} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   const backAction = () => {
//     return false;
//   };

//   useEffect(() => {
//     BackHandler.addEventListener("hardwareBackPress", backAction);
//     return () =>
//       BackHandler.removeEventListener("hardwareBackPress", backAction);
//   }, []);

//   const [isLogin, setIsLogin] = useState(false);

//   const ctxValue = {
//     act: {
//       setIsLogin,
//     },
//     ctx: {
//       isLogin,
//     },
//   };

//   return (
//     <>
//       <SafeAreaProvider>
//         <PortalProvider>
//           <StatusBar backgroundColor='rgb(59, 130, 246)' />
//           <GlobalContext.Provider value={ctxValue}>
//             <NavigationContainer>
//               {isLogin ? (
//                 <Stack.Navigator initialRouteName='Logged'>
//                   <Stack.Group>
//                     <Stack.Screen
//                       name='Logged'
//                       component={TabNav}
//                       options={{ headerShown: false }}
//                     />
//                   </Stack.Group>
//                   <Stack.Group
//                     screenOptions={{
//                       headerShown: false,
//                       animation: "fade_from_bottom",
//                     }}
//                   >
//                     <Tab.Screen name='Modal' component={PhotoProfile} />
//                   </Stack.Group>
//                   <Stack.Group
//                     screenOptions={{
//                       headerShown: true,
//                       animation: "slide_from_right",
//                     }}
//                   >
//                     <Stack.Screen name='Camera' component={Camera} />
//                   </Stack.Group>
//                 </Stack.Navigator>
//               ) : (
//                 <Stack.Navigator initialRouteName='Start'>
//                   <Stack.Group>
//                     <Stack.Screen
//                       name='Start'
//                       component={StackNav}
//                       options={{ headerShown: false }}
//                     />
//                   </Stack.Group>
//                 </Stack.Navigator>
//               )}
//             </NavigationContainer>
//           </GlobalContext.Provider>
//         </PortalProvider>
//       </SafeAreaProvider>
//     </>
//   );
// }

// // import { Text, StyleSheet, TouchableOpacity } from "react-native";
// // import { BottomSheet } from "react-native-btr";

// // export default function BottomSheetDemo() {
// //   const [visible, setVisible] = useState(false);

// //   function toggle() {
// //     setVisible((visible) => !visible);
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={toggle}>
// //         <View style={styles.button}>
// //           <Text>Toggle BottomSheet</Text>
// //         </View>
// //       </TouchableOpacity>
// //       <BottomSheet
// //         visible={visible}
// //         onBackButtonPress={toggle}
// //         onBackdropPress={toggle}
// //       >
// //         <View style={styles.card}>
// //           <Text>Place your custom view inside BottomSheet</Text>
// //         </View>
// //       </BottomSheet>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   button: {
// //     backgroundColor: "#fff",
// //     borderWidth: 2,
// //     borderRadius: 50,
// //     padding: 16,
// //   },
// //   card: {
// //     backgroundColor: "black",
// //     height: 250,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// // });

// // history
// // jurursan
// // kelas
// // absen
// // role
// In index.js of a new project
import { Navigation } from "react-native-navigation";
import { StyleSheet, View, Text, Button } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title='Login'
        color='#710ce3'
        onPress={() => Navigation.setRoot("Login")}
      />
    </View>
  );
};

export default function HomeScreen(props) {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() =>
          Navigation.push("Settings", {
            component: {
              name: "Settings",
            },
          })
        }
      />
    </View>
  );
}
HomeScreen.options = {
  topBar: {
    title: {
      text: "Home",
    },
  },
  bottomTab: {
    text: "Home",
  },
};

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};
SettingsScreen.options = {
  topBar: {
    title: {
      text: "Settings",
    },
  },
  bottomTab: {
    text: "Settings",
  },
};

Navigation.registerComponent("Login", () => LoginScreen);
Navigation.registerComponent("Home", () => HomeScreen);
Navigation.registerComponent("Settings", () => SettingsScreen);

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: "Home",
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: "Settings",
                },
              },
            ],
          },
        },
      ],
    },
  },
};
const loginRoot = {
  root: {
    component: {
      name: "Login",
    },
  },
};

// Navigation.setDefaultOptions({
//   statusBar: {
//     backgroundColor: "#4d089a",
//   },
//   topBar: {
//     title: {
//       color: "white",
//     },
//     backButton: {
//       color: "white",
//     },
//     background: {
//       color: "#4d089a",
//     },
//   },
//   bottomTab: {
//     fontSize: 14,
//     selectedFontSize: 14,
//   },
// });
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
