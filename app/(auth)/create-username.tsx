'use client';

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {ArrowLeft } from 'lucide-react-native';

export default function CreateUsername() {
  const router = useRouter();
  const [userName, setUserName] = useState('@');
  const [error, setError] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-4"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 40 }}>
        <TouchableOpacity
          className="mb-6 mt-6 h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
          onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111322" />
        </TouchableOpacity>

        <View>
          <Text className="text-[22px] font-bold text-[#111322]">Create username</Text>
          <Text className="mb-4 mt-2 text-base font-light text-[#4A5578]">
            This username will be used to receive money from other app users
          </Text>
        </View>

        <Text className="mb-1 text-base font-semibold text-[#111322]">Username</Text>
        <View className="mb-12 flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
          <TextInput
            placeholder="username"
            placeholderTextColor="#758195"
            value={userName}
            onChangeText={(text) => {
              if (text.length === 0) {
                setUserName('@');
              } else if (!text.startsWith('@')) {
                setUserName(`@${text}`);
              } else {
                setUserName(text);
              }
            }}
            className="ml-1 flex-1 text-base text-[#111322]"
            style={{ height: 24, paddingVertical: 0, textAlignVertical: 'center' }}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/success',
              params: {
                title: 'Username created',
                subtitle: 'Continue to the app tp enjoy exciting financial service',
                buttonText: 'Continue',
                buttonRoute: '/(tabs)',
                imageSrc: 'mark',
              },
            })
          }
          className="h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
          <Text className="text-base font-semibold text-[#FFFCDC]">Create username</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
