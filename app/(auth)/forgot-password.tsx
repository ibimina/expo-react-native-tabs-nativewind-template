'use client';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4">
        <TouchableOpacity
          className="mb-6 mt-6 h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
          onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111322" />
        </TouchableOpacity>

        <View>
          <Text className="text-[22px] font-bold text-[#111322]">Reset your password</Text>
          <Text className="mt-2 mb-4 text-base font-light text-[#4A5578]">
            Please enter your email so we can send you password reset code
          </Text>
        </View>

        <Text className="mb-1 text-base font-semibold text-[#111322]">Email address</Text>
        <View className="mb-12 rounded-lg border border-[#DCDFE3] px-3 py-2.5">
          <TextInput
            placeholder="example@mail.com"
            placeholderTextColor="#758195"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="text-base text-[#111322]"
            style={{ height: 24, paddingVertical: 0, textAlignVertical: 'center' }}
          />
        </View>

        <TouchableOpacity
          onPress={() => router.push('/verify-email')}
          className="mb-7 h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
          <Text className="text-base font-semibold text-[#FFFCDC]">
            Reset password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-center text-base font-medium text-[#084C2E]">
            Go back to log in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
