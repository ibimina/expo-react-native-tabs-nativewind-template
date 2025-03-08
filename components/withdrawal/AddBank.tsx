import { useRouter } from 'expo-router';
import { Pressable, Image, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';

import { ImageAssets } from '@/assets/images';

export default function AddWithdrawalBankIndex() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView className="mb-6 p-6 ">
        <Text className="text-xl font-extrabold text-[#111322]">Add withdrawal bank</Text>
        <Text className="text-sm font-normal text-[#4A5578]">Enter your bank details below</Text>
        <View className="mt-6">
          <Text className="text-base font-semibold text-[#111322]">Bank name</Text>
          <TextInput
            placeholder="Enter transaction description"
            className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
            placeholderTextColor="#A1A1A1"
          />
        </View>
        <View className="mt-6">
          <Text className="text-base font-semibold text-[#111322]">Account number</Text>
          <TextInput
            placeholder="Enter transaction description"
            className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
            placeholderTextColor="#A1A1A1"
          />
        </View>{' '}
        <View className="mt-6">
          <Text className="text-base font-semibold text-[#111322]">Account holder's name</Text>
          <TextInput
            placeholder="Enter transaction description"
            className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
            placeholderTextColor="#A1A1A1"
          />
        </View>
        <Pressable
          onPress={() => router.push('/withdraw/add-bank-passcode')}
          className="mt-16 items-center justify-center rounded-[31px] bg-[#14281D] px-[32ppx] py-[20px] text-[#FFFCDC]">
          <Text className="text-bold font-medium text-white">Add bank</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
