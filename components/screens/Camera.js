import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  useRef,
} from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { FlipCameraSVG, TakePhotoSVG, Minus, Plus } from "../../lib/listSvg";
import { Camera, CameraType } from "expo-camera";
import * as SplashScreen from "expo-splash-screen";

export default function Cam({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [review, setReview] = useState("");
  const [appIsReady, setAppIsReady] = useState(false);
  const ref = useRef(null);
  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync().then((data) => {
      setReview(data.uri);
    });
    console.debug(photo);
  };

  useEffect(() => {
    console.log("preview", review);
  }, [review]);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise((resolve, reject) =>
          setTimeout(() => {
            resolve("success");
          }, 2000)
        );
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
    // .then((res) => {
    //   if (res === "success") {
    //     setAppIsReady(true);
    //   } else {
    //     setAppIsReady(false);
    //   }
    // });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === "granted");
        })();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={tw`w-full bg-black h-full flex items-center justify-center`}>
        <View
          style={tw`w-full absolute h-32 bg-white/20 bottom-0 flex items-center justify-around flex-row`}
        >
          <TouchableOpacity disabled>
            <View
              style={tw`bg-white w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <TakePhotoSVG col='text-gray-400 w-8 h-8' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={tw`w-full h-full bg-black`} onLayout={onLayoutRootView}>
      <View>
        {/* {review === "" ? ( */}
        <Camera
          style={tw`w-full h-full`}
          type={type}
          zoom={0}
          ref={ref}
          ratio='16:9'
        >
          <View></View>
        </Camera>
        {/* ) : (
          <Image source={require(review)} />
        )} */}

        <View
          style={tw`w-full absolute h-32 bg-white/20 bottom-0 flex items-center justify-around flex-row`}
        >
          <TouchableOpacity onPress={_takePhoto}>
            <View
              style={tw`bg-white w-20 h-20 rounded-full flex items-center justify-center`}
            >
              <TakePhotoSVG col='text-gray-400 w-8 h-8' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// import React, { useEffect, useRef, useState } from "react";

// import { WebView } from "react-native-webview";

// import {
//   Alert,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Dimensions,
//   BackHandler,
//   ScrollView,
//   RefreshControl,
//   PermissionsAndroid,
//   ToastAndroid,
// } from "react-native";

// const STYLES = ["default", "dark-content", "light-content"];
// const TRANSITIONS = ["fade", "slide", "none"];

// const App = ({ navigation }) => {
//   const [isRefresh, setIsRefresh] = useState(false);
//   const webViewRef = useRef(null);
//   const [hidden, setHidden] = useState(false);
//   const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
//   const [statusBarTransition, setStatusBarTransition] = useState(
//     TRANSITIONS[0]
//   );
//   const changeStatusBarVisibility = () => setHidden(!hidden);
//   const changeStatusBarStyle = (styleId) => {
//     if (styleId === STYLES.length) {
//       setStatusBarStyle(STYLES[1]);
//     } else {
//       setStatusBarStyle(STYLES[styleId]);
//     }
//   };
//   const changeStatusBarTransition = () => {
//     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
//     if (transition === TRANSITIONS.length) {
//       setStatusBarTransition(TRANSITIONS[0]);
//     } else {
//       setStatusBarTransition(TRANSITIONS[transition]);
//     }
//   };

//   const [methods, setMethods] = useState("BACK");
//   const sendToWeb = (file) => {
//     console.log(file);
//     webViewRef.current.postMessage(JSON.stringify(file));
//   };

//   BackHandler.addEventListener("hardwareBackPress", function () {
//     sendToWeb({
//       success: true,
//       method: methods,
//       msg: "",
//       state: "",
//     });
//     return true;
//   });
//   const onMessage = async (event) => {
//     const data = event.nativeEvent.data;
//     console.log(
//       "From WEB : ",
//       JSON.stringify(JSON.parse(event.nativeEvent.data), null, 2)
//     );
//     const { mode, state } = JSON.parse(data);
//     setMethods(JSON.parse(data));
//     console.log("METHOD_STATE_VALUE : ", methods);
//     switch (mode) {
//       case "EXITAPP":
//         BackHandler.exitApp();
//         break;
//       case "checkGps":
//         const result = await RequestPermission();
//         if (result === "granted") {
//           sendToWeb({ success: true, mode: "", state: false, msg: "" });
//         }
//         if (result === "denied") {
//           sendToWeb({ success: false, mode: "errorGps", msg: "error gps" });
//         }
//         if (result === "disabled") {
//           sendToWeb({ success: false, mode: "errorGps", msg: "error gpssss" });
//         }
//         break;
//       case "goToSetting":
//         await OpenSetting();
//         break;
//       default:
//         break;
//     }
//   };

//   const refresh = () => {
//     setIsRefresh(true);
//     setTimeout(() => {
//       setIsRefresh(false);
//     }, 2000);
//   };
//   return (
//     <>
//       <SafeAreaView style={styles.safeBottom}>
//         <WebView
//           geolocationEnabled={true}
//           mediaPlaybackRequiresUserAction={false}
//           ref={webViewRef}
//           source={{
//             uri: "http://192.168.0.186:3000/home",
//           }}
//           // originWhitelist={['https://*', 'http://*', 'git://*']}
//           originWhitelist={["*"]}
//           showsHorizontalScrollIndicator={false}
//           showsVerticalScrollIndicator={false}
//           javaScriptEnabled={true}
//           onMessage={onMessage}
//           allowsAirPlayForMediaPlayback
//           // geolocationEnabled={true}
//           // scalesPageToFit={Platform.OS === 'android'}
//           // onLoadEnd={finish}
//           // onError={console.error.bind(console, 'error')}
//           // bounces={false}
//           pullToRefreshEnabled
//           // onShouldStartLoadWithRequest={() => true}
//           javaScriptEnabledAndroid={true}
//           startInLoadingState={true}
//           style={{
//             width: Dimensions.get("window").width,
//             height: Dimensions.get("window").height,
//           }}
//           onLoadProgress={({ nativeEvent }) => {
//             console.log("onLoadProgress", nativeEvent);
//           }}
//           onNavigationStateChange={(state) => {
//             console.log("onNavigationStateChange", state);
//           }}
//         />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#ECF0F1",
//   },
//   buttonsContainer: {
//     padding: 10,
//   },
//   textStyle: {
//     textAlign: "center",
//     marginBottom: 8,
//   },
//   safeTop: { flex: 0, backgroundColor: "#dc2626" },
//   safeBottom: { flex: 1, backgroundColor: "white" },
// });

// export default App;
