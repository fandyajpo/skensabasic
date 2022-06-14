import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import DailyAct from "../modal/Sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useRef, useMemo, useCallback } from "react";
import { Portal } from "@gorhom/portal";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

const Aktivitas = () => {
  //BOTTOM SHEET
  // ref
  const bottomSheetRef = useRef(null);
  const [openSheet, setOpenSheet] = useState(false);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const Close = () => {
    bottomSheetRef?.current?.close();
  };
  const Open = () => {
    bottomSheetRef?.current?.snapToIndex(1);
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={true}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        pressBehavior={"close"}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    // <SafeAreaView edges={["top", "left", "right", "bottom"]}>
    <View style={tw`w-full h-full bg-white`}>
      <View>
        <ScrollView>
          <View style={tw`h-full w-full bg-white p-2`}>
            <View
              style={tw`bg-white shadow-sm rounded-md w-full h-auto py-4 px-2 border border-gray-200 mb-2`}
            >
              <View
                style={tw`flex flex-col items-center w-full justify-between shadow`}
              >
                <View style={tw`flex flex-row items-center w-full `}>
                  <TouchableOpacity
                    onPress={() => setOpenSheet(true)}
                    style={tw`bg-black w-10 h-10 rounded-full mr-4`}
                  ></TouchableOpacity>
                  <View>
                    <View>
                      <Text style={tw`font-semibold text-xs text-blue-500`}>
                        Presensi Masuk
                      </Text>
                      <Text style={tw`text-xs  text-green-500`}>
                        Tepat waktu
                      </Text>
                    </View>
                    <Text
                      style={tw`font-semibold text-xs underline text-[#2E4F74]`}
                    >
                      Lokasi :
                    </Text>
                    <Text
                      style={tw`font-semibold text-xs text-[#2E4F74] w-auto`}
                    >
                      Jln Rumah Fandy Ahmad Januar Pratama{" "}
                    </Text>
                  </View>
                </View>
                <View style={tw`mt-2`}>
                  <View
                    style={tw`text-xs text-blue-500 shadow bg-green-500 py-1 px-2 rounded-xl `}
                  >
                    <Text style={tw`text-white font-bold text-xs`}>07.34</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* <View style={tw`w-full h-auto bg-white`}> */}

      {/* </View> */}

      <DailyAct openSheet={openSheet} setOpenSheet={setOpenSheet} />
    </View>
    // </SafeAreaView>
  );
};

export default Aktivitas;
