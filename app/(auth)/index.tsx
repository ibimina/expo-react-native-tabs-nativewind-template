import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { ImageAssets } from '@/assets/images';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const { width } = Dimensions.get('window');
  const router = useRouter();
  const halfScreenHeight = Dimensions.get('window').height / 2;

  const slideAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: slideAnim }] }} className="bg-[#14281D] px-6 justify-center">
      <View  className="items-center">
        <Text className="text-[24px] font-bold text-[#FFFCDC]">CecurePay</Text>
        <View
          className="relative mt-4"
          style={{ width: '100%', height: halfScreenHeight * 0.8 }}
        >
          <Image
            source={ImageAssets.hero}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
          <View className="absolute inset-0 justify-center items-center">
            <Image
              source={ImageAssets.user}
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            />
          </View>
        </View>
      </View>

      <View className="justify-center mt-6"
        // style={{ height: halfScreenHeight }}
      >
        <Text className="text-[32px] text-[#FFFCDC] mb-4">
          Get access to your finances from your
          <Text className="font-bold"> mobile device.</Text>
        </Text>
        <Text className="text-base text-[#FFFCDC] mb-4">
          Experience secure financial services with us.
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/register')}
          className="mb-4 h-14 w-full items-center justify-center rounded-full bg-[#087443]">
          <Text className="text-base font-semibold text-[#FFFCDC]">Open a new account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/login')}
          className="h-14 w-full items-center justify-center rounded-full border border-[#FFFCDC]">
          <Text className="text-base font-semibold text-[#FFFCDC]">I already have an account</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}