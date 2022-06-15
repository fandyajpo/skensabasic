import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import SheetTugas from "../modal/SheetTugas";
import { DownloadSVG, LinkSVG, PuzzleSVG } from "../../lib/listSvg";

export default function Tugas() {
  return (
    <SafeAreaView>
      <View style={tw`w-full h-full bg-white`}>
        <View>
          <ScrollView>
            <View style={tw`h-full w-full bg-white p-2 `}>
              <View
                style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-blue-600`}
              >
                <View>
                  <View>
                    <Text style={tw`font-semibold text-sm text-gray-800`}>
                      Tugas
                    </Text>
                    <View style={tw`flex flex-row w-full overflow-hidden`}>
                      <View style={tw` p-2`}>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Mata Pelajaran
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Materi Tentang
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Nama Tugas
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Batas Pengumpulan
                        </Text>
                      </View>
                      <View style={tw`p-2`}>
                        <Text
                          style={tw`text-xs  text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                      </View>
                      <View style={tw`w-3/4`}>
                        <View
                          style={tw`w-10/12 bg-gray-100 rounded-md p-2 shadow-sm`}
                        >
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Elektronika Industri
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Alat Pengukur Arus Listrik
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 underline py-0.5 font-bold`}
                          >
                            Apa ni namanya
                          </Text>
                          <Text
                            style={tw`text-xs text-blue-800 py-0.5 font-bold`}
                          >
                            Senin, 5 Juni 2022
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex items-end justify-end pt-4 `}>
                      <TouchableOpacity
                        style={tw`flex flex-row items-center bg-blue-600 rounded-full px-5 py-2`}
                      >
                        <Text style={tw`text-white font-bold text-xs pr-1`}>
                          Link
                        </Text>
                        <LinkSVG col={"text-blue-200 h-4 w-4"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-blue-600`}
              >
                <View>
                  <View>
                    <Text style={tw`font-semibold text-sm text-gray-800`}>
                      Tugas
                    </Text>
                    <View style={tw`flex flex-row w-full overflow-hidden`}>
                      <View style={tw` p-2`}>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Mata Pelajaran
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Materi Tentang
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Nama Tugas
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Batas Pengumpulan
                        </Text>
                      </View>
                      <View style={tw`p-2`}>
                        <Text
                          style={tw`text-xs  text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                      </View>
                      <View style={tw`w-3/4`}>
                        <View
                          style={tw`w-10/12 bg-gray-100 rounded-md p-2 shadow-sm`}
                        >
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Elektronika Industri
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Alat Pengukur Arus Listrik
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 underline py-0.5 font-bold`}
                          >
                            Apa ni namanya
                          </Text>
                          <Text
                            style={tw`text-xs text-blue-800 py-0.5 font-bold`}
                          >
                            Senin, 5 Juni 2022
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex items-end justify-end pt-4 `}>
                      <TouchableOpacity
                        style={tw`flex flex-row items-center bg-blue-600 rounded-full px-5 py-2`}
                      >
                        <Text style={tw`text-white font-bold text-xs pr-1`}>
                          Link
                        </Text>
                        <LinkSVG col={"text-blue-200 h-4 w-4"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-blue-600`}
              >
                <View>
                  <View>
                    <Text style={tw`font-semibold text-sm text-gray-800`}>
                      Tugas
                    </Text>
                    <View style={tw`flex flex-row w-full overflow-hidden`}>
                      <View style={tw` p-2`}>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Mata Pelajaran
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Materi Tentang
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Nama Tugas
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Batas Pengumpulan
                        </Text>
                      </View>
                      <View style={tw`p-2`}>
                        <Text
                          style={tw`text-xs  text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                      </View>
                      <View style={tw`w-3/4`}>
                        <View
                          style={tw`w-10/12 bg-gray-100 rounded-md p-2 shadow-sm`}
                        >
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Elektronika Industri
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Alat Pengukur Arus Listrik
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 underline py-0.5 font-bold`}
                          >
                            Apa ni namanya
                          </Text>
                          <Text
                            style={tw`text-xs text-blue-800 py-0.5 font-bold`}
                          >
                            Senin, 5 Juni 2022
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex items-end justify-end pt-4 `}>
                      <TouchableOpacity
                        style={tw`flex flex-row items-center bg-blue-600 rounded-full px-5 py-2`}
                      >
                        <Text style={tw`text-white font-bold text-xs pr-1`}>
                          Link
                        </Text>
                        <LinkSVG col={"text-blue-200 h-4 w-4"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-blue-600`}
              >
                <View>
                  <View>
                    <Text style={tw`font-semibold text-sm text-gray-800`}>
                      Tugas
                    </Text>
                    <View style={tw`flex flex-row w-full overflow-hidden`}>
                      <View style={tw` p-2`}>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Mata Pelajaran
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Materi Tentang
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Nama Tugas
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Batas Pengumpulan
                        </Text>
                      </View>
                      <View style={tw`p-2`}>
                        <Text
                          style={tw`text-xs  text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                      </View>
                      <View style={tw`w-3/4`}>
                        <View
                          style={tw`w-10/12 bg-gray-100 rounded-md p-2 shadow-sm`}
                        >
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Elektronika Industri
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Alat Pengukur Arus Listrik
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 underline py-0.5 font-bold`}
                          >
                            Apa ni namanya
                          </Text>
                          <Text
                            style={tw`text-xs text-blue-800 py-0.5 font-bold`}
                          >
                            Senin, 5 Juni 2022
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex items-end justify-end pt-4 `}>
                      <TouchableOpacity
                        style={tw`flex flex-row items-center bg-blue-600 rounded-full px-5 py-2`}
                      >
                        <Text style={tw`text-white font-bold text-xs pr-1`}>
                          Link
                        </Text>
                        <LinkSVG col={"text-blue-200 h-4 w-4"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={tw`bg-white shadow-md rounded-md w-full h-auto py-4 px-2 mb-2 overflow-hidden border-l-2 border-blue-600`}
              >
                <View>
                  <View>
                    <Text style={tw`font-semibold text-sm text-gray-800`}>
                      Tugas
                    </Text>
                    <View style={tw`flex flex-row w-full overflow-hidden`}>
                      <View style={tw` p-2`}>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Mata Pelajaran
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Materi Tentang
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Nama Tugas
                        </Text>
                        <Text
                          style={tw`text-xs  text-blue-800 py-0.5 font-bold`}
                        >
                          Batas Pengumpulan
                        </Text>
                      </View>
                      <View style={tw`p-2`}>
                        <Text
                          style={tw`text-xs  text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                        <Text
                          style={tw`text-xs text-gray-500 py-0.5 font-bold`}
                        >
                          :
                        </Text>
                      </View>
                      <View style={tw`w-3/4`}>
                        <View
                          style={tw`w-10/12 bg-gray-100 rounded-md p-2 shadow-sm`}
                        >
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Elektronika Industri
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 py-0.5 font-bold`}
                          >
                            Alat Pengukur Arus Listrik
                          </Text>
                          <Text
                            style={tw`text-xs text-green-500 underline py-0.5 font-bold`}
                          >
                            Apa ni namanya
                          </Text>
                          <Text
                            style={tw`text-xs text-blue-800 py-0.5 font-bold`}
                          >
                            Senin, 5 Juni 2022
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={tw`flex items-end justify-end pt-4 `}>
                      <TouchableOpacity
                        style={tw`flex flex-row items-center bg-blue-600 rounded-full px-5 py-2`}
                      >
                        <Text style={tw`text-white font-bold text-xs pr-1`}>
                          Link
                        </Text>
                        <LinkSVG col={"text-blue-200 h-4 w-4"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <SheetTugas />
    </SafeAreaView>
  );
}
