import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import { LogoutSVG, EditPhoto } from "../../lib/listSvg";
import { useMemo, useState } from "react";
import LogoutModal from "../modal/Logout";
const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //   <Image
  //   source={require("../../assets/blueblue.webp")}
  //   style={tw`w-24 h-24 absolute rounded-full opacity-60 -right-8 -top-4`}
  // />

  return (
    <SafeAreaView>
      <View style={tw`bg-white w-full h-full`}>
        {useMemo(() => {
          console.log("Render Modal Logout");
          return (
            <LogoutModal
              setModalVisible={setModalVisible}
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
            />
          );
        }, [isModalVisible])}
        <View
          style={tw`bg-blue-600 w-full h-auto flex items-center justify-center py-4 overflow-hidden`}
        >
          <Image
            source={require("../../assets/blueblue.webp")}
            style={tw`w-24 h-24 absolute rounded-full opacity-60 -left-10 bottom-4 `}
          />
          <Image
            source={require("../../assets/blueblue.webp")}
            style={tw`w-20 h-20 absolute rounded-full opacity-60 -top-6 right-6 `}
          />
          <Image
            source={require("../../assets/blueblue.webp")}
            style={tw`w-10 h-10 absolute rounded-full opacity-60 right-0 bottom-4 `}
          />

          <Pressable
            onPress={toggleModal}
            style={tw`bg-white w-10 h-10 absolute rounded-xl right-4 top-4 shadow-sm z-50 flex items-center justify-center`}
          >
            <LogoutSVG col='text-red-500 w-6 h-6 ' />
          </Pressable>

          <View style={tw`flex flex-col items-center`}>
            <View
              style={tw`bg-white w-24 h-24 rounded-full shadow mb-2`}
            ></View>
            <Text style={tw`text-xs font-bold text-white mb-1`}>
              Edit Photo
            </Text>
            <Pressable
              onPress={() => {
                alert("Edit Profile");
              }}
              style={tw`bg-white/30 p-1 rounded-md`}
            >
              <EditPhoto col={"text-white w-6 h-6"} />
            </Pressable>
          </View>
        </View>
        <Text style={tw`p-2 text-gray-400 font-bold text-base`}>
          User Profile
        </Text>

        {useMemo(() => {
          console.log("Render User Profile Card");
          return (
            <View style={tw`px-2`}>
              <View style={tw`rounded-md flex flex-col`}>
                <ImageBackground
                  source={require("../../assets/blueblue.webp")}
                  style={tw`p-2 rounded-md overflow-hidden`}
                >
                  <View
                    style={tw`w-full shadow-md bg-white p-2 rounded-md border border-gray-200`}
                  >
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Nama Depan
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"Fandy"}
                        editable={false}
                      ></TextInput>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Nama Belakang
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"Ahmad Januar Pratama"}
                        editable={false}
                      ></TextInput>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Tempat Lahir
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"Pantai"}
                        editable={false}
                      ></TextInput>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Tanggal Lahir
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"29"}
                        editable={false}
                      ></TextInput>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Agama
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"Islam"}
                        editable={false}
                      ></TextInput>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        NIS
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"3428432748782374239"}
                        editable={false}
                      ></TextInput>
                    </View>
                  </View>
                </ImageBackground>
                <View style={tw`h-4`} />
                <ImageBackground
                  source={require("../../assets/blueblue.webp")}
                  style={tw`p-2 rounded-md overflow-hidden`}
                >
                  <View
                    style={tw`w-full shadow-md bg-white p-2 rounded-md border border-gray-200`}
                  >
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Nomor Telepon / Hp
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"9048948203194"}
                        editable={false}
                      />
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Nomor Orang Tua
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"9048948203194"}
                        editable={false}
                      />
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Alamat
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"Alam sutra"}
                        editable={false}
                      />
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Username
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"Fandy"}
                        editable={false}
                      />
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                      <Text style={tw`text-[#2E4F74] font-bold text-sm w-2/4`}>
                        Email
                      </Text>
                      <TextInput
                        style={tw`text-gray-500 font-bold text-sm `}
                        value={"fanvercel.co..id"}
                        editable={false}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          );
        }, [])}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
