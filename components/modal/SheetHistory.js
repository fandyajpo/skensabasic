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

const SheetHistory = () => {
  const { act, ctx } = useContext(GlobalContext);

  return (
    <Modal
      scrollHorizontal={true}
      style={tw`m-0`}
      coverScreen={true}
      //   onSwipeThreshold={0}
      onSwipeComplete={async ({ swipingDirection }) => {
        if (swipingDirection === "up") {
          act.setSheet("sheetHistory");
        } else if (swipingDirection === "down") {
          act.setSheet("");
        }
      }}
      useNativeDriverForBackdrop={true}
      swipeDirection={["down"]}
      propagateSwipe={true}
      isVisible={ctx.sheet === "sheetHistory" ? true : false}
      onBackButtonPress={() => act.setSheet("")}
      onBackdropPress={() => act.setSheet("")}
      backdropColor={"black"}
    >
      <View
        style={tw`bg-white w-full h-80 absolute bottom-0 rounded-t-xl overflow-hidden`}
      >
        <View
          style={tw`w-full bg-gray-200 h-8 flex items-center justify-center`}
        >
          <View
            style={tw`bg-gray-500 h-1 w-44 rounded-full items-center justify-center`}
          ></View>
        </View>
        <ScrollView>
          <Pressable>
            <TouchableOpacity style={tw`bg-white  overflow-hidden w-full p-4`}>
              <Text>Absensi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-white  overflow-hidden w-full p-4`}>
              <Text>Pembayaran</Text>
            </TouchableOpacity>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SheetHistory;
