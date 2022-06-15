import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { useContext, memo } from "react";
import { GlobalContext } from "../../context/global";
import { useMemo } from "react";
import tw from "twrnc";

const Login = ({ navigation }) => {
  const { act, ctx } = useContext(GlobalContext);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        // behavior='padding'
        style={tw`w-full h-full flex flex-col justify-center items-center`}
      >
        <View style={tw`w-full absolute `}>
          <Image source={require("../../assets/loginBackground.png")} />
        </View>
        <View style={tw`px-4 flex flex-col justify-center h-full w-full z-20`}>
          <Text style={tw`font-bold text-blue-500 text-sm mb-2`}>Username</Text>
          <TextInput
            placeholder='Username'
            style={tw`p-2 shadow bg-white rounded-md mb-2`}
          />
          <Text style={tw`font-bold text-blue-500 text-sm mb-2`}>Password</Text>
          <TextInput
            placeholder='Password'
            style={tw`p-2 shadow bg-white rounded-md mb-2 `}
          />
          <Pressable>
            <Text
              style={tw`font-bold text-orange-500 text-sm mb-2 flex flex-none my-4 underline`}
            >
              Forgot Password ?
            </Text>
          </Pressable>
          <View style={tw`flex flex-row justify-end w-full`}>
            <Pressable
              onPress={() => act.setIsLogin(true)}
              style={tw`bg-blue-500 p-3 rounded-md flex items-center justify-center w-full`}
            >
              <Text style={tw`text-white font-bold`}>Login</Text>
            </Pressable>
          </View>
        </View>
        <View style={tw`w-full absolute bottom-0`}>
          <Image
            source={require("../../assets/loginImage.png")}
            style={tw`w-full`}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(Login);
