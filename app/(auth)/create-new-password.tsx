import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';

export default function CreateNewPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4">
        <TouchableOpacity
          className="mb-6 mt-6 h-10 w-10 items-center justify-center rounded-full bg-[#EFF1F5]"
          onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111322" />
        </TouchableOpacity>

        <View>
          <Text className="text-[22px] font-bold text-[#111322]">Create new password</Text>
          <Text className="mt-2mb-4 text-base font-light text-[#4A5578]">
            Please ensure your new password is different from any old password you have used on
            CecurePay
          </Text>
        </View>

        <View className="mt-6">
          <View>
            <Text className="mb-1 text-base font-semibold text-[#111322]">Password</Text>
            <View className="flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
              <TextInput
                className="flex-1 text-base text-[#111322] tracking-widest"
                placeholderTextColor="#758195"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                placeholder="••••••••"
                style={{ height: 24, paddingVertical: 0, textAlignVertical: 'center' }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={24} color="#666" /> : <Eye size={24} color="#666" />}
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-6">
            <Text className="mb-1 text-base font-semibold text-[#111322]">Confirm password</Text>
            <View className="flex-row items-center rounded-lg border border-[#DCDFE3] px-3 py-2.5">
              <TextInput
                className="flex-1 text-base text-[#111322] tracking-widest"
                placeholderTextColor="#758195"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="••••••••"
                autoCapitalize="none"
                style={{ height: 24, paddingVertical: 0, textAlignVertical: 'center' }}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <EyeOff size={24} color="#666" />
                ) : (
                  <Eye size={24} color="#666" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/success',
              params: {
                title: 'Password Reset',
                subtitle:
                  'Your password has been reset and you can now log in with your new password.',
                buttonText: 'Proceed to sign in',
                buttonRoute: '/login',
                imageSrc:"mark",
              },
            })
          }
          className="mt-12 h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
          <Text className="text-base font-semibold text-[#FFFCDC]">Reset password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
