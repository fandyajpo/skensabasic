import tw from "twrnc";
import {
  Text,
  View,
  Button,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { GlobalContext } from "../../context/global";
import { useContext } from "react";
import { LogoutSVG } from "../../lib/listSvg";

const LogoutModal = ({ toggleModal, isModalVisible, setModalVisible }) => {
  const { act, ctx } = useContext(GlobalContext);
  return (
    <Modal
      scrollHorizontal={true}
      style={tw`m-0`}
      coverScreen={true}
      onSwipeThreshold={200}
      onSwipeComplete={async ({ swipingDirection }) => {
        if (swipingDirection === "up") {
          await setModalVisible(true);
        } else if (swipingDirection === "down") {
          await setModalVisible(false);
        }
      }}
      useNativeDriverForBackdrop={true}
      // presentationStyle='overFullScreen'
      swipeDirection={["down"]}
      propagateSwipe={true}
      isVisible={isModalVisible}
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      backdropColor={"black"}
    >
      <View style={tw`bg-white w-full h-auto absolute bottom-0`}>
        <View
          style={tw`w-full bg-gray-200 h-8 flex items-center justify-center`}
        >
          <View style={tw`flex flex-row justify-center items-center`}>
            <View style={tw`bg-gray-500 w-24 h-1 mt-1 rounded-full`} />
          </View>
        </View>
        <ScrollView style={tw``}>
          <Pressable>
            <View
              style={tw`bg-white shadow-xl rounded-2xl overflow-hidden w-full bottom-0`}
            >
              <View style={tw`p-4`}>
                <View style={tw`flex flex-row items-center`}>
                  <LogoutSVG col={"text-red-500 w-6 h-6"} />
                  <Text style={tw`text-red-500 font-bold text-xl ml-2`}>
                    Logout
                  </Text>
                </View>
                <View style={tw`h-8`} />
                <View style={tw` flex flex-row w-full justify-around`}>
                  <Pressable
                    onPress={toggleModal}
                    style={tw`w-2/4 bg-blue-500 shadow rounded-md`}
                  >
                    <Text style={tw` text-white font-bold py-2 px-4 `}>
                      Back
                    </Text>
                  </Pressable>
                  <View style={tw`w-4`} />
                  <Pressable
                    onPress={(e) => {
                      act.setIsLogin(false);
                      toggleModal(e);
                    }}
                    style={tw`w-2/4 bg-red-500 shadow rounded-md`}
                  >
                    <Text style={tw` text-white font-bold py-2 px-4 `}>
                      Logout
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default LogoutModal;
