import tw from "twrnc";
import { Text, View, Button, Pressable, Image } from "react-native";
import Modal from "react-native-modal";
import { GlobalContext } from "../../context/global";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const LogoutModal = ({ toggleModal, isModalVisible, setModalVisible }) => {
  const { act, ctx } = useContext(GlobalContext);
  return (
    <Modal
      onSwipeThreshold={200}
      onSwipeComplete={({ swipingDirection }) => {
        if (swipingDirection === "up") {
          setModalVisible(true);
        } else if (swipingDirection === "down") {
          setModalVisible(false);
        }
      }}
      useNativeDriverForBackdrop={true}
      presentationStyle='overFullScreen'
      swipeDirection={["down"]}
      propagateSwipe={true}
      isVisible={isModalVisible}
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      backdropColor={"black"}
      coverScreen={true}
    >
      <View
        style={tw`bg-white shadow-xl rounded-2xl overflow-hidden w-full h-32 absolute bottom-0`}
      >
        <TouchableOpacity style={tw`flex flex-row justify-center`}>
          <View style={tw`bg-gray-500 w-24 h-1 mt-1 rounded-full`} />
        </TouchableOpacity>
        <View style={tw`  p-4`}>
          <View>
            <Text style={tw`text-red-500 font-bold text-xl`}>Logout</Text>
          </View>
          <View style={tw`h-4`} />
          <View style={tw` flex flex-row w-full justify-around`}>
            <Pressable
              onPress={toggleModal}
              style={tw`w-2/4 bg-blue-500 shadow rounded-md`}
            >
              <Text style={tw` text-white font-bold py-2 px-4 `}>Back</Text>
            </Pressable>
            <View style={tw`w-4`} />
            <Pressable
              onPress={(e) => {
                act.setIsLogin(false);
                toggleModal(e);
              }}
              style={tw`w-2/4 bg-red-500 shadow rounded-md`}
            >
              <Text style={tw` text-white font-bold py-2 px-4 `}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
