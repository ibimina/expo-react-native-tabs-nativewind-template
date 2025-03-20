

import { SafeAreaView, View, Text, TextInput, TouchableOpacity,KeyboardAvoidingView,Platform,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState, useRef } from 'react';

export default function VerifyEmail() {
  const router = useRouter();
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [resendActive, setResendActive] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill(""));

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = text;
    setVerificationCode(newVerificationCode);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus(); 
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === "Backspace") {
      if (verificationCode[index] !== "" && index > 0) {
        const newVerificationCode = [...verificationCode];
        newVerificationCode[index] = "";
        setVerificationCode(newVerificationCode);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
         <View className="flex-1 px-6">
        <TouchableOpacity
          className="mb-6 mt-6 h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
          onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111322" />
        </TouchableOpacity>

        <View>
          <Text className="text-[22px] font-bold text-[#111322]">
            Confirm your email address
          </Text>
          <Text className="mb-4 mt-2 text-base font-light text-[#4A5578]">
            We sent a password reset code to your email
            <Text className="font-semibold text-[#111322]"> henryninth@gmail.com </Text>
          </Text>
        </View>

        {/* Verification code inputs */}
        <View className="mt-4">
          <View className="flex-row">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
                keyboardType="number-pad"
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                value={verificationCode[index]}
                className={`h-14 w-14 rounded-md text-center items-center justify-center flex-1 text-2xl font-bold border 
                ${focusedIndex === index ? 'border-[#099250]' : 'border-[#DCDFE3]'}
                ${index !== 5 ? 'mr-2' : ''}`}
              />
            ))}
          </View>
        </View>

        {isInvalid && (
          <View className="mt-4 items-center">
            <Text className="text-red-500 text-base font-semibold">
              Invalid verification code. Please try again.
            </Text>
          </View>
        )}

        <View className="items-center mt-10">
          {resendActive ? (
            <TouchableOpacity onPress={() => {
            }}>
            <Text className="text-[#4A5578] font-light text-base">
              Didn't receive the code? <Text className='font-bold text-[#095C37]'>Resend now</Text>
              </Text>
            </TouchableOpacity>
          ) : (
            <Text className="text-[#4A5578] font-light text-base">
              Didn't receive the code? <Text>Resend in 01:59</Text>
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => router.push('/create-new-password')}
          className="mt-10 h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
          <Text className="text-base font-semibold text-[#FFFCDC]">Continue</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>

      </KeyboardAvoidingView>
     
    </SafeAreaView>
  );
}

