import { View, Text } from "react-native";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "react-native";

const RecentActivity = () => {
  return (
    <View style={tw`w-full p-2`}>
      <View style={tw`mb-2 flex w-full items-center flex-row justify-between`}>
        <Text style={tw`text-gray-400 font-bold text-base`}>
          Aktivitasmu hari ini
        </Text>
        <View style={tw`mr-4`}>
          <Pressable>
            <Text style={tw`text-blue-500 font-bold text-xs `}>See detail</Text>
          </Pressable>
        </View>
      </View>
      <View style={tw`w-full h-auto rounded-md `}>
        <View
          style={tw`bg-white p-4 rounded-md flex flex-row items-center shadow-md mb-4 border border-gray-200`}
        >
          <View style={tw`flex flex-row w-full items-end justify-between`}>
            <View style={tw`flex flex-row items-center`}>
              <View style={tw`bg-blue-500/30 mr-3 rounded-full`}>
                <Svg
                  xmlns='http://www.w3.org/2000/svg'
                  style={tw`text-blue-500 h-4 w-4`}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <Path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </Svg>
              </View>
              <View>
                <Text>Melakukan Presensi</Text>
                <Text>Melakukan Presensi</Text>
              </View>
            </View>
            <View style={tw``}>
              <Text style={tw`text-gray-500 text-xs`}>07.33</Text>
            </View>
          </View>
        </View>
        <View
          style={tw`bg-white p-4 rounded-md flex flex-row items-center shadow-md mb-2 border border-gray-200`}
        >
          <View style={tw`flex flex-row w-full items-end justify-between`}>
            <View style={tw`flex flex-row items-center`}>
              <View style={tw`bg-blue-500/30 mr-3 rounded-full`}>
                <Svg
                  xmlns='http://www.w3.org/2000/svg'
                  style={tw`text-blue-500 h-4 w-4`}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <Path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </Svg>
              </View>
              <View>
                <Text>Melakukan Presensi</Text>
                <Text>Melakukan Presensi</Text>
              </View>
            </View>
            <View style={tw``}>
              <Text style={tw`text-gray-500 text-xs`}>07.33</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentActivity;
