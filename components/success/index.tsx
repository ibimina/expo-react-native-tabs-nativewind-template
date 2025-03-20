import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, Pressable } from 'react-native';
import { MotiView } from 'moti';

import { ImageAssets } from '@/assets/images';

export default function SuccessIndex() {
  return (
    <SafeAreaView className="flex-1 bg-[#14281D]">
      <View className="flex-1 p-6">
       <MotiView
          from={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <Image
            source={ImageAssets.ribbons}
            className="h-[117px] w-full"
            resizeMode="contain"
          />
        </MotiView>
        <ImageBackground
          source={ImageAssets.successCard}
          className="flex-1 justify-center pt-5"
          resizeMode="cover"
        >
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

          <View className="mx-3 mt-6 border-t-2 border-t-[#758195]" />

          <View className="mt-6 px-7">
            <Text className="text-base font-medium text-[#8F92A1]">Sent to:</Text>
            <View className="mt-2 rounded-lg bg-[#F2F2F2] p-4">
              <Text className="text-lg font-bold text-[#030319]">My account</Text>
              <Text className="text-sm font-normal text-[#8F92A1]">
                Dec 2, 2020 3:02 PM
              </Text>
            </View>
            <Pressable
              onPress={() => router.push('/(tabs)')}
              className="mt-16 items-center justify-center rounded-full bg-[#14281D]  h-14"
            >
              <Text className="font-medium text-[#FFFCDC]">Go to home</Text>
            </Pressable>
            <Pressable className="mt-4 items-center justify-center rounded-[31px] px-[32px] py-[20px] text-[#14281D]">
              <Text className="text-base font-semibold text-[#105D38]">View Details</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}