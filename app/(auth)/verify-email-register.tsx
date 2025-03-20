import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';

export default function VerifyEmailRegister() {
  const router = useRouter();
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [resendActive, setResendActive] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-between bg-white">
      <View className="flex-1 px-4">
        <TouchableOpacity
          className="mb-6 mt-6 h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
          onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111322" />
        </TouchableOpacity>

        <View>
          <Text className="text-[22px] font-bold text-[#111322]">Confirm your email address</Text>
          <Text className="mb-4 mt-2 text-base font-light text-[#4A5578]">
            We sent a verification code to your email
            <Text className="font-semibold text-[#111322]"> henryninth@gmail.com </Text>
            to confirm it's yours
          </Text>
        </View>
        <View className="mt-3">
          <View className="flex-row">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <TextInput
                key={index}
                maxLength={1}
                keyboardType="number-pad"
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
                className={`h-14 w-14 flex-1 items-center justify-center rounded-md border text-center text-2xl font-bold 
                  ${isInvalid ? 'border-red-500' : focusedIndex === index ? 'border-[#099250]' : 'border-[#DCDFE3]'}
                  ${index !== 5 ? 'mr-2' : ''}`}
              />
            ))}
          </View>
        </View>
        {isInvalid && (
          <View className="mt-4 items-center">
            <Text className="text-base font-semibold text-red-500">
              Invalid verification code. Please try again.
            </Text>
          </View>
        )}
        <View className="mt-10 items-center">
          {resendActive ? (
            <TouchableOpacity onPress={() => {}}>
              <Text className="text-base font-light text-[#4A5578]">
                Didn't receive the code?{' '}
                <Text className="font-bold text-[#095C37]">Resend now</Text>
              </Text>
            </TouchableOpacity>
          ) : (
            <Text className="text-base font-light text-[#4A5578]">
              Didn't receive the code? <Text>Resend in 01:59</Text>
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() =>
          router.push({
            pathname: '/success',
            params: {
              title: 'Welcome to CecurePay',
              subtitle: 'Your account has been created successfully  and you are ready to go',
              buttonText: 'Proceed to sign in',
              buttonRoute: '/(auth)/create-passcode',
              imageSrc: "registeration"
            },
          })
        }
        className="mt-10 h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
          <Text className="text-base font-semibold text-[#FFFCDC]">Verify account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mb-16 h-14 w-full items-center justify-center rounded-full">
        <Text className="text-center text-sm font-light text-[#111322] px-4">
          By clicking on “create my account” you are agreeing to our{' '}
          <Text className="font-normal text-[#087443]">Terms & Conditions</Text> and{' '}
          <Text className="font-normal text-[#087443]">Privacy Policy</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
