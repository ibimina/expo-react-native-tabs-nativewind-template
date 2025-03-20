import { useRouter } from 'expo-router';
import { Pressable, Image, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';

import { ImageAssets } from '@/assets/images';

export default function AddWithdrawalBankIndex() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView className="mb-6 p-4 ">
        <Text className="text-xl font-extrabold text-[#111322]">Add withdrawal bank</Text>
        <Text className="text-sm font-light text-[#4A5578] mt-2">Enter your bank details below</Text>
        <View className="mt-6">
          <Text className="text-base font-semibold text-[#111322]">Bank name</Text>
          <TextInput
            placeholder="select bank name"
            className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  px-3 text-sm  text-[#758195]"
            placeholderTextColor="#A1A1A1"
          />
        </View>
        <View className="mt-6">
          <Text className="text-base font-semibold text-[#111322]">Account number</Text>
          <TextInput
            placeholder=""
            className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  px-3 text-sm font-semibold text-[#758195]"
            placeholderTextColor="#A1A1A1"
          />
        </View>
        <View className="mt-6">
          <Text className="text-base font-semibold text-[#111322]">Account holder's name</Text>
          <TextInput
            placeholder=""
            className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
            placeholderTextColor="#A1A1A1"
          />
        </View>
        <Pressable
          onPress={() => router.push('/withdraw/add-bank-passcode')}
          className="mt-12 h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
          <Text className="text-semibold font-medium text-[#FFFCDC]">Add bank</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
