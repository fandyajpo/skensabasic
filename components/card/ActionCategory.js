import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import tw from "twrnc";
import { Notification, Chart, Schedule, Class } from "../../lib/listSvg";
const ActionCategory = ({ sheetKehadiran, setSheetKehadiran }) => {
  return (
    <View style={tw`w-full px-2 pb-2`}>
      <View style={tw`my-2`}>
        <Text style={tw`font-semibold text-gray-500`}>Menu apa ya</Text>
      </View>
      <View
        style={tw`w-full bg-white shadow-sm rounded-md py-4 px-3 flex flex-row items-center justify-between`}
      >
        <View style={tw`p-4 flex flex-row justify-between w-full h-auto`}>
          {/* <View style={tw`flex items-center`}>
            <View
              style={tw`bg-white w-14 h-14 rounded-2xl shadow-sm mb-1 flex items-center justify-center`}
            >
              <Class col={"text-blue-500 h-8 w-8"} />
            </View>
            <Text style={tw`text-xs font-bold text-gray-500`}>Kelas</Text>
          </View> */}
          <View style={tw`flex items-center`}>
            <View
              style={tw`bg-green-500 w-14 h-14 rounded-2xl shadow-sm mb-1 flex items-center justify-center`}
            >
              <Schedule col={"text-white w-8 h-8"} />
            </View>
            <Text style={tw`text-xs font-bold text-gray-500`}>Jadwal</Text>
          </View>
          <View style={tw`flex items-center`}>
            <TouchableOpacity
              onPress={() => setSheetKehadiran(true)}
              style={tw`bg-orange-500 w-14 h-14 rounded-2xl shadow-sm mb-1 flex items-center justify-center`}
            >
              <Chart col={"text-white w-8 h-8"} />
            </TouchableOpacity>
            <Text style={tw`text-xs font-bold text-gray-500`}>Kehadiran</Text>
          </View>
          <View style={tw`flex items-center`}>
            <View
              style={tw`bg-blue-500 w-14 h-14 rounded-2xl shadow-sm mb-1 flex items-center justify-center shadow-sm`}
            >
              <Notification col={`text-white w-8 h-8`} />
            </View>
            <Text style={tw`text-xs font-bold text-gray-500`}>Inbox</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCategory;
