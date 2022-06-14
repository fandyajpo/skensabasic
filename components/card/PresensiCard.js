import { View, Text, ImageBackground } from "react-native";
import tw from "twrnc";

const PresensiCard = () => {
  return (
    <View style={tw`w-full px-2 pb-2`}>
      <View style={tw`my-2`}>
        <Text style={tw`font-semibold text-gray-500`}>Presensi</Text>
      </View>
      <ImageBackground
        source={require("../../assets/fa.webp")}
        style={tw`rounded-md overflow-hidden shadow-sm`}
      >
        <View
          style={tw`w-full rounded-md py-4 px-3 flex flex-row items-center justify-between`}
        >
          <View
            style={tw`bg-gray-100/50 border border-blue-200 p-2 w-2/4 rounded-md`}
          >
            <Text style={tw`text-white font-bold text-lg`}>
              Presensi Datang
            </Text>
            <View>
              <Text style={tw`text-blue-500 text-base font-semibold`}>
                Datang : 03.33
              </Text>
              <Text style={tw`text-blue-500 text-base font-bold`}>
                Pulang : 06.43
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PresensiCard;
