import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  Notification,
  Chart,
  Schedule,
  Class,
  MenuSVG,
  MenusSVG,
} from "../../lib/listSvg";
import { GlobalContext } from "../../context/global";
import { useContext } from "react";
const ActionCategory = ({ sheetKehadiran, setSheetKehadiran }) => {
  const { act, ctx } = useContext(GlobalContext);
  const navigation = useNavigation();
  return (
    <View style={tw`w-full px-2 pb-2`}>
      <View style={tw`my-2`}>
        <Text style={tw`font-semibold text-gray-500`}>Menu apa ya</Text>
      </View>
      <ImageBackground
        source={require("../../assets/blueblue.webp")}
        style={tw`w-full  shadow-md rounded-md py-4  flex flex-row items-center justify-between overflow-hidden`}
      >
        <View style={tw`p-4 flex flex-row justify-around w-full h-auto`}>
          <View style={tw`flex items-center`}>
            <TouchableOpacity
              onPress={() => act.setSheet("sheetKehadiran")}
              style={tw`bg-white w-14 h-14 rounded-2xl shadow-sm mb-1 flex items-center justify-center`}
            >
              <Chart col={"text-blue-500 w-8 h-8"} />
            </TouchableOpacity>
            <Text style={tw`text-xs font-bold text-white`}>Kehadiran</Text>
          </View>
          <View style={tw`flex items-center`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Inbox")}
              style={tw`bg-white w-14 h-14 rounded-2xl shadow-sm mb-1 flex items-center justify-center shadow-sm`}
            >
              <Notification col={`text-blue-700 w-8 h-8`} />
            </TouchableOpacity>
            <Text style={tw`text-xs font-bold text-white`}>Inbox</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ActionCategory;
