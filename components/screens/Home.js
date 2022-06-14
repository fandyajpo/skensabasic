import { View, ScrollView, SafeAreaView } from "react-native";
import SheetKehadiran from "../modal/SheetKehadiran";
import RecentActivity from "../card/RecentActivity";
import { GlobalContext } from "../../context/global";
import UserCard from "../card/UserCard";
import tw from "twrnc";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import PresensiCard from "../card/PresensiCard";
import Chart from "../chart/chart";
import ProfileModal from "../modal/PhotoProfile";
import ActionCategory from "../card/ActionCategory";

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [sheetKehadiran, setSheetKehadiran] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View style={tw`bg-white w-full h-full`}>
        {useMemo(() => {
          console.log("Render Modal Photo");
          return (
            <ProfileModal
              setModalVisible={setModalVisible}
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
            />
          );
        }, [isModalVisible])}
        <UserCard toggleModal={toggleModal} />
        <View
          showsVerticalScrollIndicator={false}
          onScrollBeginDrag={() => alert("aa")}
        >
          {/* {useMemo(() => {
            console.log("render presensi card");
            return (
              <> */}
          <PresensiCard />
          <ActionCategory
            sheetKehadiran={sheetKehadiran}
            setSheetKehadiran={setSheetKehadiran}
          />
          {/* <Chart /> */}
          {/* </>
            );
          }, [])} */}
        </View>
      </View>
      <SheetKehadiran
        sheetKehadiran={sheetKehadiran}
        setSheetKehadiran={setSheetKehadiran}
      />
    </SafeAreaView>
  );
};

export default Home;
