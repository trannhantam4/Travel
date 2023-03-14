import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets";
import { Hotels } from "../assets";
import { Attractions } from "../assets";
import { Restaurants } from "../assets";
import { FontAwesome } from "@expo/vector-icons";
const DiscoverScreen = (imageSrc) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1  bg-white relative ">
      <View className=" flex-row items-center justify-between px-8 my-10">
        <View>
          <Text className="text-[40px] text-cyan-600 font-bold">Discover</Text>
          <Text className="text-cyan-800 text-[34px] ">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-600 rounded-md items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          ></Image>
        </View>
      </View>
      <View className="flex-row items-center bg-gray-200 mx-6 rounded-xl py-3 px-4 shadow-lg">
        <TextInput placeholder="something"></TextInput>
      </View>

      <ScrollView>
        <View className="flex-row items-center justify-center px-8 mt-8 space-x-4">
          <TouchableOpacity className="items-center justify-center space-y-2">
            <View className="w-24 h-24 shadow-sm rounded-full bg-gray-200">
              <Image
                source={Hotels}
                className="w-full h-full object-contain"
              ></Image>
            </View>
            <Text className=" text-blue-400 font-semibold text-xl">Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center space-y-2">
            <View className="w-24 h-24 shadow-sm rounded-full bg-gray-200">
              <Image
                source={Attractions}
                className="w-full h-full object-contain"
              ></Image>
            </View>
            <Text className=" text-blue-400 font-semibold text-xl">
              Attractions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center space-y-2">
            <View className="w-24 h-24 shadow-sm rounded-full bg-gray-200">
              <Image
                source={Restaurants}
                className="w-full h-full object-contain"
              ></Image>
            </View>
            <Text className=" text-blue-400 font-semibold text-xl">
              Restaurants
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View className="  flex-row justify-between px-4 mt-8">
            <Text className="text-blue-500 text-[20px] font-bold">
              Top Places
            </Text>
            <TouchableOpacity className="flex-row space-x-2">
              <Text className="text-gray-400 font-bold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
