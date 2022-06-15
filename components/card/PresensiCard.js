import { View, Text, ImageBackground } from "react-native";
import tw from "twrnc";
import { StudySVG, RightArrowSVG } from "../../lib/listSvg";

const PresensiCard = () => {
  return (
    <View style={tw`w-full px-2 pb-2`}>
      <View style={tw`my-2`}>
        <Text style={tw`font-semibold text-gray-500`}>Presensi</Text>
      </View>
      <ImageBackground
        source={require("../../assets/blueblue.webp")}
        style={tw`rounded-md overflow-hidden shadow-md`}
      >
        <StudySVG col={"absolute w-36 h-36 text-blue-500/40 right-0"} />
        <View
          style={tw`w-full rounded-md p-4 flex flex-row items-center justify-between`}
        >
          <View
            style={tw`bg-gray-100/50 border border-blue-200 p-2 w-2/4 rounded-md`}
          >
            <Text style={tw`text-white font-bold text-lg`}>Presensi</Text>
            <View>
              <View style={tw`flex flex-row items-center py-1`}>
                <RightArrowSVG col={"text-green-200 w-4 h-4"} />
                <Text style={tw`text-white font-bold underline`}>
                  SMKN 1 Denpasar
                </Text>
              </View>
              <Text style={tw`text-green-200 text-sm font-semibold`}>
                Datang : 03.33
              </Text>
              <Text style={tw`text-green-200 text-sm font-bold`}>
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
