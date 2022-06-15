import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import tw from "twrnc";
import { Portal } from "@gorhom/portal";
import { useEffect } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
export default function Sheet({ sheetHistory, setSheetHistory }) {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // const Close = () => {
  //   bottomSheetRef?.current?.close();
  // };
  // const Open = () => {
  //   bottomSheetRef?.current?.snapToIndex(1);
  // };

  useEffect(() => {
    sheetHistory
      ? bottomSheetRef?.current?.snapToIndex(1)
      : bottomSheetRef?.current?.close();
  }, [sheetHistory]);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={true}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.5}
      />
    ),
    []
  );

  // renders
  return (
    <>
      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          backdropComponent={renderBackdrop}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text onPress={() => setSheetHistory(false)}>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </Portal>
    </>
  );
}
