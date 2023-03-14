import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-purple-800 text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className=" text-black text-4xl">Enjoy the trip with</Text>
        <Text className=" text-[#4DABB7] text-4xl font-bold">Good Moments</Text>
        <Text className="text-base">
          Life is a long journey with small trips which are provided by us
        </Text>
      </View>
      <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[350px] h-[350px] bg-orange-500 rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20 "
        ></Animatable.Image>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="absolute self-center bottom-20 w-24 h-24 border-2 border-cyan-300 rounded-full items-center justify-center"
      >
        <Animatable.View
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          className=" w-20 h-20 bg-cyan-300 rounded-full items-center justify-center"
        >
          <Text className="text-gray-100 text-[35px] font-semibold">Go</Text>
        </Animatable.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
