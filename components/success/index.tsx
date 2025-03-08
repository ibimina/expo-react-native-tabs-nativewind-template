import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, Pressable } from 'react-native';

import { ImageAssets } from '@/assets/images';
export default function SuccessIndex() {
  return (
    <SafeAreaView className="flex-1 bg-[#14281D]">
      <View className="mb-10  p-6">
        <Image
          source={ImageAssets.ribbons}
          className="relative -bottom-8 z-50 mx-auto h-[117px] w-screen"
        />
        <ImageBackground source={ImageAssets.successCard} className="z-40 h-[597px] pt-5">
          <View className="h-[42%] px-7">
            <Image source={ImageAssets.success} className="mx-auto h-[86px] w-[86px]" />
            <Text className="mt-6 text-center text-2xl font-bold text-[#111322]">
              Transfer success
            </Text>
            <Text className="mt-3 text-center text-base font-semibold text-[#758195]">
              Total Sent
            </Text>
            <Text className="mt-3 text-center text-3xl font-bold text-[#111322]">₦10,000</Text>
          </View>

          <View className=" mx-3 mt-6 border-t-2 border-t-[#758195]" />

          <View className="mt-6 px-7">
            <Text className="text-base font-medium text-[#8F92A1]">Sent to:</Text>
            <View className="mt-2 rounded-lg bg-[#F2F2F2] p-4">
              <Text className=" text-lg font-bold text-[#030319]">Henry Doe</Text>
              <Text
                className="textsm font-normal text-[#8F92A1]
              ">
                Dec 2, 2020 3:02 PM
              </Text>
            </View>
            <Pressable
              onPress={() => router.push('/')}
              className="mt-16 items-center justify-center rounded-[31px] bg-[#14281D] px-[32ppx] py-[20px] text-[#FFFCDC]">
              <Text className="text-bold font-medium text-white">Go to home</Text>
            </Pressable>
            <Pressable className="items-center justify-center rounded-[31px] px-[32ppx] py-[20px] text-[#14281D] ">
              <Text className="text-base font-semibold text-[#105D38] ">View Details</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
