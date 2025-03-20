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

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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

        <View className="mb-6 mt-4">
          <Text className="text-[22px] font-bold text-[#111322]">
           Let’s get you started 🪄
          </Text>
        </View>

        <Text className="mb-1 text-base font-semibold text-[#111322]">
         Name
        </Text>
        <View className="mb-6 rounded-lg border border-[#DCDFE3] px-3 py-2.5">
          <TextInput
            placeholder="Henry Ninth"
            placeholderTextColor="#758195"
            value={name}
            onChangeText={setName}
            // keyboardType="text"
            // autoCapitalize="none"
            className="text-base text-[#111322]"
          />
        </View>

        <Text className="mb-1 text-base font-semibold text-[#111322]">
          Email address
        </Text>
        <View className="mb-6 rounded-lg border border-[#DCDFE3] px-3 py-2.5">
          <TextInput
            placeholder="example@mail.com"
            placeholderTextColor="#758195"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="text-base text-[#111322]"
          />
        </View>

        <Text className="mb-1 text-base font-semibold text-[#111322]">
          Password
        </Text>
        <View className="mb-6 flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#758195"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            className="flex-1 text-base text-[#111322] tracking-widest"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={20} color="#1E1E1E" />
            ) : (
              <Eye size={20} color="#1E1E1E" />
            )}
          </TouchableOpacity>
        </View>
         <Text className="mb-1 text-base font-semibold text-[#111322]">
          Confirm password
         </Text>
          <View className="flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#758195"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              className="flex-1 text-base text-[#111322] tracking-widest"
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? (
                <EyeOff size={20} color="#1E1E1E" />
              ) : (
                <Eye size={20} color="#1E1E1E" />
              )}
            </TouchableOpacity>
          </View>
        <TouchableOpacity
          onPress={() => router.push('/verify-email-register')}
          className="mt-10 mb-6 h-14 w-full items-center justify-center rounded-full bg-[#14281D]"
        >
          <Text className="text-base font-semibold text-[#FFFCDC]">
           Create my account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-center text-sm font-light text-[#111322]">
           By clicking on “create my account” you are agreeing to our <Text className="text-[#087443] font-normal">Terms & Conditions</Text> and <Text className="text-[#087443] font-normal">Privacy Policy</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
