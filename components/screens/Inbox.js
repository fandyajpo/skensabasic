import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FlipCameraSVG, TakePhotoSVG } from "../../lib/listSvg";

export default function Inbox({ navigation }) {
  return (
    <View style={tw`w-full h-full bg-white`}>
      <View
        style={tw`w-full h-32 flex items-center justify-around flex-col p-2`}
      >
        <View style={tw`bg-black w-full h-24 shadow-sm rounded-md`}></View>
      </View>
    </View>
  );
}
