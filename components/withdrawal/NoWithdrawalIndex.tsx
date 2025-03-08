import { useRouter } from 'expo-router';
import { Pressable, Image, View, Text, SafeAreaView } from 'react-native';

import { ImageAssets } from '@/assets/images';

export default function NoWithdrawalBankIndex() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="h-4/6 flex-row items-center justify-center px-6">
        <View>
          <View className="mx-auto mt-8 h-[124px] w-[124px]  flex-row items-center justify-center rounded-full bg-[#EDFCF2] ">
            <Image source={ImageAssets.building} className="h-[65px] w-[65px]" />
          </View>
          <Text className="my-3 text-center text-xl font-extrabold  text-[#111322]">
            No withdrawal bank added
          </Text>
          <Text className="mb-6 text-center text-sm font-normal text-[#4A5578]">
            Add withdrawal banks to withdraw money directly to your local bank
          </Text>
          <Pressable
            onPress={() => router.push('/withdraw/add-bank')}
            className=" rounded-[31px] bg-[#14281D] px-[32ppx] py-[20px] text-[#FFFCDC]">
            <Text className="text-bold text-center font-medium text-white">Add Bank</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
