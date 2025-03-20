import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ImageAssets } from '@/assets/images';

type SuccessProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonRoute: string;
  imageSrc: string;
};

export default function Success() {
  const router = useRouter();
  const { title, subtitle, buttonText, buttonRoute, imageSrc } = useLocalSearchParams<SuccessProps>();
  const imageSource = ImageAssets[imageSrc as keyof typeof ImageAssets];
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Full size
      friction: 3, // Adjust bounce intensity
      tension: 100, // Adjust speed
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <View className="flex-1 bg-[#14281D] items-center justify-between px-4">
      <View></View>
      <View className="items-center">
        <Animated.Image
          source={imageSource}
          className="w-[400px] h-[250px] rounded-full mb-6"
          resizeMode="contain"
          style={{ transform: [{ scale: scaleAnim }] }}
        />
        <Text className="text-2xl font-bold text-[#FFFCDC] text-center">
          {title}
        </Text>
        <Text className="mt-2 text-[#FFFCDC] text-center px-14">
          {subtitle}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push(buttonRoute)}
        className="h-14 w-full items-center justify-center rounded-full bg-[#087443] mb-16"
      >
        <Text className="text-[#FFFCDC] font-semibold">{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}