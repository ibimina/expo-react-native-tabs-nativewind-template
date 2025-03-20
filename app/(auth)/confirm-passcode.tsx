import { SafeAreaView, View, Text, TextInput, Platform, TouchableOpacity,KeyboardAvoidingView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState,useRef } from 'react';

export default function ConfirmPasscode() {
  const router = useRouter();
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [resendActive, setResendActive] = useState(false);
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
        <ScrollView>
          <View className='px-4'>
        <TouchableOpacity
          className="mb-6 mt-6 h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
          onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111322" />
        </TouchableOpacity>

        <View>
          <Text className="text-[22px] font-bold text-[#111322]">
           Confirm your passcode
          </Text>
          <Text className="mb-4 mt-2 text-base font-light text-[#4A5578]">
            This will be used for signing in to your account
          </Text>
        </View>

        {/* Verification code inputs */}
        <View className="mt-4">
          <View className="flex-row">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <TextInput
                key={index}
                maxLength={1}
                keyboardType="number-pad"
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
                className={`h-14 w-14 rounded-md text-center items-center justify-center flex-1 text-2xl font-bold border 
                  ${focusedIndex === index ? 'border-[#099250]' : 'border-[#DCDFE3]'}
                  ${index !== 5 ? 'mr-2' : ''}`}
              />
            ))}
          </View>
        </View>

          </View>
          <View className='px-4'>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: '/success',
                  params: {
                    title: 'Passcode created',
                    subtitle:
                      'You can now log into your account using the passcode created',
                    buttonText: 'Continue',
                    buttonRoute: '/create-username',
                    imageSrc:"mark",
                  },
                })
              }
              className="mt-12 h-14 w-full items-center justify-center rounded-full bg-[#14281D] mb-16">
              <Text className="text-base font-semibold text-[#FFFCDC]">Confirm passcode</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

