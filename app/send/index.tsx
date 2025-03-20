import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
export default function SendScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState('@');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 mt-4">
        <View className="mb-4">
          <Text className="text-[22px] font-bold text-[#111322]">Send money</Text>
          <Text className="mb-4 mt-2 text-base font-light text-[#4A5578]">
            Enter the recipient's username you want to send money to
          </Text>
        </View>

        <Text className="mb-1 text-base font-semibold text-[#111322]">Username</Text>
        <View className="mb-14 flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
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
            autoCapitalize="none"
          />
        </View>

        <Pressable
          onPress={() => router.push('/send/transaction-details')}
          className="h-14 items-center justify-center rounded-[31px] bg-[#14281D]  text-[#FFFCDC]">
          <Text className="text-bold font-medium text-[#FFFCDC]">Search</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
