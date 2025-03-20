"use client";

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Eye, EyeOff, ArrowLeft } from "lucide-react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login pressed. Email:", email, "Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-4"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="mt-6 mb-4 flex-row items-center">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
            onPress={() => router.back()}
          >
            <ArrowLeft size={20} color="#111322" />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-[22px] font-bold text-[#084C2E]">
            CecurePay
          </Text>
        </View>

        <View className="mb-8 mt-8">
          <Text className="text-[22px] font-bold text-[#111322]">
            Welcome back👋🏾
          </Text>
        </View>
        <Text className="mb-1 text-base font-semibold text-[#111322]">
          Email address
        </Text>
        <View className="mb-5 rounded-lg border border-[#DCDFE3] px-3 py-2.5">
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

        <Text className="mb-1 text-base font-semibold text-[#111322]">
          Password
        </Text>
        <View className="mb-12 flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#758195"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            className="flex-1 text-base text-[#111322] tracking-widest"
            style={{ height: 24, paddingVertical: 0, textAlignVertical: 'center' }}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {showPassword ? (
              <EyeOff size={20} color="#1E1E1E" />
            ) : (
              <Eye size={20} color="#1E1E1E" />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/(tabs)")}
          className="mb-7 h-14 w-full items-center justify-center rounded-full bg-[#14281D]"
        >
          <Text className="text-base font-semibold text-[#FFFCDC]">
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text className="text-center text-base font-medium text-[#084C2E]">
            Forgot my password
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
