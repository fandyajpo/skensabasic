import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalContext } from "./context/global";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/screens/Home";
import PhotoProfile from "./components/modal/PhotoProfile";
import Profile from "./components/screens/Profile";
import Tugas from "./components/screens/Tugas";
import Aktivitas from "./components/screens/History";
import Camera from "./components/screens/Camera";
import Login from "./components/screens/Login";
import Inbox from "./components/screens/Inbox";
import {
  View,
  Text,
  StatusBar,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { HomeSVG, TugasSVG, ActivitySVG, ProfileSVG } from "./lib/listSvg";
import { useEffect, useState, useContext } from "react";
import { PortalProvider } from "@gorhom/portal";
import tw from "twrnc";
import { DownArrowSVG } from "./lib/listSvg";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  const { act, ctx } = useContext(GlobalContext);
  return (
    <Tab.Navigator
      initialRouteName='Home'
      barStyle={{
        backgroundColor: "rgb(59, 130, 246)",
      }}
      activeBackgroundColor='white'
      screenOptions={{ presentation: "modal" }}
      backBehavior='initialRoute'
    >
      <Tab.Group screenOptions={{ presentation: "modal", animation: "none" }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarActiveTintColor: "rgb(59, 130, 246)",
            tabBarIcon: () => <HomeSVG col={`w-6 h-6 text-blue-500`} />,
          }}
        />
        <Tab.Screen
          name='Tugas'
          component={Tugas}
          options={{
            headerRight: () => {
              return (
                <View style={tw`w-full px-4 flex justify-end flex-row`}>
                  <TouchableOpacity
                    onPress={() => act.setSheet("sheetTugas")}
                    style={tw`bg-white w-24 h-7 rounded-full flex flex-row items-center justify-between px-4`}
                  >
                    <Text style={tw`font-bold text-blue-600`}>Filter</Text>
                    <DownArrowSVG col={"text-blue-600 w-5 h-5"} />
                  </TouchableOpacity>
                </View>
              );
            },
            headerStyle: {
              backgroundColor: "rgb(37, 99, 235)",
            },

            headerTintColor: "#fff",

            tabBarLabel: "Tugas",
            tabBarIcon: () => <TugasSVG col={`w-6 h-6 text-blue-500`} />,
          }}
        />
        <Tab.Screen
          name='History'
          component={Aktivitas}
          options={{
            headerStyle: {
              backgroundColor: "rgb(37, 99, 235)",
            },
            headerRight: () => {
              return (
                <View style={tw`w-full px-4 flex justify-end flex-row`}>
                  <TouchableOpacity
                    onPress={() => act.setSheet("sheetHistory")}
                    style={tw`bg-white w-24 h-7 rounded-full flex flex-row items-center justify-between px-4`}
                  >
                    <Text style={tw`font-bold text-blue-600`}>Filter</Text>
                    <DownArrowSVG col={"text-blue-600 w-5 h-5"} />
                  </TouchableOpacity>
                </View>
              );
            },
            headerTintColor: "#fff",
            tabBarLabel: "History",
            tabBarActiveTintColor: "rgb(59, 130, 246)",
            tabBarIcon: () => <ActivitySVG col={`w-6 h-6 text-blue-500`} />,
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarActiveTintColor: "rgb(59, 130, 246)",

            tabBarIcon: () => <ProfileSVG col={`w-6 h-6 text-blue-500`} />,
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

function StackNav() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "rgb(37, 99, 235)",
          },
          headerTintColor: "white",
        }}
        name='Login'
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const [sheet, setSheet] = useState("");

  const ctxValue = {
    act: {
      setIsLogin,
      setSheet,
    },
    ctx: {
      isLogin,
      sheet,
    },
  };

  const backAction = () => {
    if (sheet !== "") {
      return true;
    }
  };

  return (
    <>
      <SafeAreaProvider>
        <PortalProvider>
          <StatusBar backgroundColor='rgb(37, 99, 235)' />
          <GlobalContext.Provider value={ctxValue}>
            <NavigationContainer>
              {isLogin ? (
                <Stack.Navigator initialRouteName='Logged'>
                  <Stack.Screen
                    name='Logged'
                    component={TabNav}
                    options={{ headerShown: false }}
                  />

                  <Stack.Group
                    screenOptions={{
                      headerShown: false,
                      animation: "fade_from_bottom",
                    }}
                  >
                    <Tab.Screen name='Modal' component={PhotoProfile} />
                  </Stack.Group>
                  <Stack.Group
                    screenOptions={{
                      headerStyle: {
                        backgroundColor: "rgb(37, 99, 235)",
                      },
                      headerTintColor: "white",
                      headerShown: true,
                      animation: "slide_from_right",
                    }}
                  >
                    <Stack.Screen name='Camera' component={Camera} />
                  </Stack.Group>

                  <Stack.Group
                    screenOptions={{
                      headerTintColor: "#fff",
                      headerStyle: {
                        backgroundColor: "rgb(37, 99, 235)",
                      },
                    }}
                  >
                    <Stack.Screen name='Inbox' component={Inbox} />
                  </Stack.Group>
                </Stack.Navigator>
              ) : (
                <Stack.Navigator initialRouteName='Start'>
                  <Stack.Group>
                    <Stack.Screen
                      name='Start'
                      component={StackNav}
                      options={{ headerShown: false }}
                    />
                  </Stack.Group>
                </Stack.Navigator>
              )}
            </NavigationContainer>
          </GlobalContext.Provider>
        </PortalProvider>
      </SafeAreaProvider>
    </>
  );
}

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
