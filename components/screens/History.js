import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "twrnc";
import DailyAct from "../modal/SheetHistory";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useRef, useMemo, useCallback } from "react";

import { HistoryInfo, AbsenSVG } from "../../lib/listSvg";
const Aktivitas = () => {
  //BOTTOM SHEET
  // ref
  const bottomSheetRef = useRef(null);
  const [sheetHistory, setSheetHistory] = useState(false);

  return (
    <View style={tw`w-full h-full bg-white`}>
      <View>
        <ScrollView>
          <View style={tw`h-full w-full bg-white p-2`}>
            <View
              style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-red-500`}
            >
              <View
                style={tw`flex flex-col items-center w-full justify-between shadow`}
              >
                <View
                  style={tw`flex flex-row items-center w-full justify-around `}
                >
                  <AbsenSVG col={"absolute w-16 h-16 -left-8 text-red-500"} />
                  {/* <Image
                    source={require("../../assets/naruto.png")}
                    style={tw`w-12 h-12 rounded-2xl`}
                  /> */}
                  <View>
                    <View>
                      <Text style={tw`font-semibold text-xs text-red-500`}>
                        Presensi Pulang
                      </Text>
                      {/* <Text style={tw`text-xs  text-green-500`}>
                        Tepat waktu
                      </Text> */}
                    </View>
                    <Text style={tw`font-semibold text-xs text-[#2E4F74]`}>
                      Lokasi :
                    </Text>
                    <View style={tw`bg-gray-100 p-2 rounded-md mt-2`}>
                      <Text
                        style={tw`font-semibold text-xs text-[#2E4F74] w-auto`}
                      >
                        Jln Rumah Fandy Ahmad Januar Pratama{" "}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={tw`text-xs text-blue-500 shadow bg-blue-500 py-1 px-2 rounded-xl `}
                    >
                      <Text style={tw`text-white font-bold text-xs`}>
                        07.34
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-green-500`}
            >
              <View
                style={tw`flex flex-col items-center w-full justify-between shadow`}
              >
                <View
                  style={tw`flex flex-row items-center w-full justify-around `}
                >
                  <AbsenSVG col={"absolute w-16 h-16 -left-8 text-green-500"} />
                  {/* <Image
                    source={require("../../assets/naruto.png")}
                    style={tw`w-12 h-12 rounded-2xl`}
                  /> */}
                  <View>
                    <View>
                      <Text style={tw`font-semibold text-xs text-blue-500`}>
                        Presensi Masuk
                      </Text>
                      <Text style={tw`text-xs  text-green-500`}>
                        Tepat waktu
                      </Text>
                    </View>
                    <Text style={tw`font-semibold text-xs text-[#2E4F74]`}>
                      Lokasi :
                    </Text>
                    <View style={tw`bg-gray-100 p-2 rounded-md mt-2`}>
                      <Text
                        style={tw`font-semibold text-xs text-[#2E4F74] w-auto`}
                      >
                        Jln Rumah Fandy Ahmad Januar Pratama{" "}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={tw`text-xs text-blue-500 shadow bg-blue-500 py-1 px-2 rounded-xl `}
                    >
                      <Text style={tw`text-white font-bold text-xs`}>
                        07.34
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Aktivitas;
