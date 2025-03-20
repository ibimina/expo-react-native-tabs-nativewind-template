import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

import { ImageAssets } from '@/assets/images';

export default function TransactionDetails() {
  const transactionStatus = false;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-10  p-6">
        <View>
          <View
            className={`mx-auto h-[60px] w-[60px] flex-row items-center justify-center rounded-full ${transactionStatus ? 'bg-[#D3F8DF]' : 'bg-[#F0E6E4]'} `}>
            {transactionStatus ? (
              <Image source={ImageAssets.received} className="mx-auto h-[30px] w-[30px]" />
            ) : (
              <Image source={ImageAssets.pending} className="mx-auto h-[30px] w-[30px]" />
            )}
          </View>

          <Text className="mt-2 text-center text-base font-semibold text-[#111322]">
            {transactionStatus ? 'Received' : 'Sent'}
          </Text>
          <Text className="text-center text-2xl font-bold text-[#030319]">₦ 1,532.00</Text>
        </View>
        <View className="mt-6">
          <View className="mb-6">
            <Text className="text-xs font-normal text-[#4A5578] ">Sent by</Text>
            <Text className="mt text-base font-semibold text-[#111322] ">Adebola Balogun - @abbeymoney</Text>
          </View>
          <View className="mb-6">
            <Text className="text-xs font-normal text-[#4A5578] ">Date</Text>
            <Text className="mt text-base font-semibold text-[#111322] ">
              12 Jan, 2025 at 11:34 PM
            </Text>
          </View>
          <View className="mb-6">
            <Text className="text-xs font-normal text-[#4A5578] ">Narration </Text>
            <Text className="mt  text-base font-semibold text-[#111322] ">
              This is for testing the account
            </Text>
          </View>
          <View className="mb-6">
            <Text className="text-xs font-normal text-[#4A5578] ">Transaction ID</Text>
            <Text className="mt text-base font-semibold text-[#111322] ">
              139LKJ34R24NJFKL3432JLI4LJL
            </Text>
          </View>
          <View className="mb-8">
            <Text className="text-xs font-normal text-[#4A5578] ">Status</Text>
            <View className="w-[88px]">
              <Text className="mt-2 rounded-[100px] bg-[#D3F8DF]  p-0.5 text-center text-base font-semibold text-[#099250] ">
                Success
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
