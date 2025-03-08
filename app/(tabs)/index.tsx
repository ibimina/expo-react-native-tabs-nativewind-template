import { Link, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

import { ImageAssets } from '@/assets/images';
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#14281D]">
      <View className=" mb-10 bg-[#14281D]">
        <View className="mb-4 flex-row items-center justify-between gap-3 p-6">
          <View className="flex-row items-center gap-3 ">
            <Image source={ImageAssets.avatar} className="h-12 w-12 rounded-full" />
            <View>
              <Text className=" text-sm font-semibold text-white">Good morning 🌤️</Text>
              <Text className="text-xs font-light text-white">How are you doing today?</Text>
            </View>
          </View>
          <TouchableOpacity className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#404968]">
            <Image source={ImageAssets.notification} className="h-6 w-6" />
          </TouchableOpacity>
        </View>
        <View className="mb-10 px-6">
          <Text className="text-xs font-light text-white">Total Balance</Text>
          <Text className="text-2xl font-bold text-white ">₦ 3,435,349.06</Text>
        </View>
        <View className="mb-6 flex-row gap-4 px-6">
          <TouchableOpacity
            onPress={() => router.push('../add')}
            className=" grow flex-row items-center justify-center gap-2 rounded border-[1px] border-[#404968] p-2">
            <Image source={ImageAssets.add} className="h-5 w-5 rounded-xl " />
            <Text className="text-sm font-semibold text-white">Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('../send')}
            className=" flex-grow flex-row items-center justify-center gap-2  rounded border-[1px] border-[#404968] p-2">
            {/* <Link href="./send"  className=" mx-auto flex-row items-center justify-center  gap-2 bg-black  p-2"> */}
            <Image source={ImageAssets.multiarrow} className="h-5 w-5 rounded-xl " />
            <Text className="text-sm font-semibold text-white">Send</Text>
            {/* </Link> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('../withdraw')}
            className=" flex-grow flex-row items-center justify-center gap-2 rounded border-[1px] border-[#404968] p-2">
            <Image source={ImageAssets.coin} className="h-5 w-5 rounded-xl " />
            <Text className="text-sm font-semibold text-white">Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="flex h-screen rounded-t-3xl  bg-white">
        <View className=" bg-white">
          <View className="flex-row items-center justify-between px-6 py-4  ">
            <Text className="text-base font-semibold text-[#111322]">Transactions</Text>
            <Text className="text-lg font-semibold text-[#087443] underline">See all</Text>
          </View>
          <View className="px-6">
            <Text className="mb-2 text-xs font-medium text-[#404968]">YESTERDAY</Text>

            <View className="flex-row items-center justify-between gap-3 py-4">
              <View className="flex-row items-center gap-3">
                <View className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9FB]">
                  <Text className="text-base font-semibold text-[#5421AB]">AD</Text>
                </View>
                <View>
                  <Text className="text-sm font-semibold text-[#11132]">John Doe</Text>
                  <Text className="text-xs font-light text-[#4A5578]">12:07 PM . 23 Feb</Text>
                </View>
              </View>
              <Text className="text-sm font-semibold text-[#099250]">+₦ 3,435</Text>
            </View>
            <View className="flex-row items-center justify-between gap-3 py-4">
              <View className="flex-row items-center gap-3">
                <View className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9FB]">
                  <Text className="text-base font-semibold text-[#5421AB]">AD</Text>
                </View>
                <View>
                  <Text className="text-sm font-semibold text-[#11132]">John Doe</Text>
                  <Text className="text-xs font-light text-[#4A5578]">12:07 PM . 23 Feb</Text>
                </View>
              </View>
              <Text className="text-sm font-semibold text-[#E34935]">-₦ 3,000.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
