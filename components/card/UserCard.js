import { View, Text } from "react-native";
import { memo, useMemo } from "react";
import tw from "twrnc";
import { Pressable, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../lib/listSvg";
import Svg, { G, Rect } from "react-native-svg";

const UserCard = ({ toggleModal }) => {
  const navigation = useNavigation();
  return (
    <View style={tw`w-full pb-2`}>
      <View
        style={tw`w-full bg-blue-600 h-52 flex flex-col justify-between shadow-md`}
      >
        <View style={tw`flex items-center justify-center pt-11`}>
          {/* 3 BULETAN */}
          {useMemo(() => {
            return (
              <>
                <Image
                  source={require("../../assets/blueblue.webp")}
                  style={tw`w-24 h-24 absolute rounded-full opacity-60 -right-8 -top-4`}
                />
                <Image
                  source={require("../../assets/blueblue.webp")}
                  style={tw`w-32 h-32 absolute rounded-full opacity-60 -left-20 -bottom-14`}
                />
                <Image
                  source={require("../../assets/blueblue.webp")}
                  style={tw`w-24 h-24 absolute rounded-full opacity-60 right-24 -bottom-27`}
                />
              </>
            );
          }, [])}
          <Text style={tw`text-3xl text-white `}>19:02 AM</Text>
          <Text style={tw`text-xs text-white`}>Fri, 12 Mar 2022</Text>
        </View>
        <View style={tw`flex flex-row p-4 items-center`}>
          <Pressable onPress={toggleModal}>
            <View style={tw`bg-white w-18 h-18 rounded-3xl shadow`} />
          </Pressable>
          <View style={tw`ml-3`}>
            <View>
              <Text style={tw`text-lg font-bold text-white`}>
                Fandy Ahmad Januar Pratama
              </Text>
              <Text style={tw`text-xs font-bold text-white`}>
                XII Tekhnik Elektronika Industri
              </Text>
            </View>
            {useMemo(() => {
              console.log("Render User Card");
              return (
                <>
                  <View style={tw`flex flex-row pt-2`}>
                    <View
                      style={tw`bg-white py-2 px-4 rounded-md shadow-sm mr-2`}
                    >
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Camera")}
                      >
                        <Text style={tw`font-bold text-gray-600`}>
                          Clock in
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={tw`bg-white py-2 px-4 rounded-md shadow-sm`}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Camera")}
                      >
                        <Text style={tw`font-bold text-gray-600`}>
                          Clock out
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              );
            }, [])}
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(UserCard);
