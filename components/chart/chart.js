import { View, Dimensions } from "react-native";
import tw from "twrnc";
import { ProgressChart } from "react-native-chart-kit";
const Chart = () => {
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 120, 200, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["Masuk", "Tidak Masuk"],
    data: [0.4, 0.2],
  };

  return (
    <View style={tw`w-full h-full pb-2`}>
      <View style={tw`w-full rounded-sm shadow-md rounded-sm bg-white`}>
        <View style={tw`shadow-sm bg-white relative`}>
          <View>
            <ProgressChart
              data={data}
              width={screenWidth}
              height={200}
              strokeWidth={20}
              radius={20}
              chartConfig={chartConfig}
              hideLegend={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chart;
