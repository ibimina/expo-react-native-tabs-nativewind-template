import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Platform, Image, TouchableOpacity } from 'react-native';

import { ImageAssets } from '@/assets/images';

export default function TransactionLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Transaction',
          headerShown: true,
          headerTintColor: '#000',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'id',
          headerTitle: '',
          headerShown: true,
          headerShadowVisible: false,

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              className=" flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF1F5]">
              <Image source={ImageAssets.arrowLeft} className="h-4 w-4 rounded-xl " />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
