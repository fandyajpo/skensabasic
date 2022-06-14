import tw from "twrnc";
import { Text, View, Button, Pressable, Image } from "react-native";
import Modal from "react-native-modal";
const ProfileModal = ({ toggleModal, isModalVisible, setModalVisible }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={toggleModal}
      onSwipeThreshold={200}
      onSwipeComplete={({ swipingDirection }) => {
        if (swipingDirection === "up") {
          setModalVisible(true);
        } else if (swipingDirection === "down") {
          setModalVisible(false);
        }
      }}
      useNativeDriverForBackdrop={true}
      swipeDirection={["down"]}
      propagateSwipe={true}
      onBackdropPress={toggleModal}
      backdropColor={"black"}
    >
      <View style={tw`bg-black  rounded-2xl overflow-hidden w-full h-96  p-4`}>
        <Image
          source={require("../../assets/naruto.png")}
          style={tw`w-full h-full`}
        />
      </View>
    </Modal>
  );
};

export default ProfileModal;
