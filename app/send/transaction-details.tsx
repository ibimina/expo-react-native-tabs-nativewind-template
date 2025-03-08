import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

export default function TransactionDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-10  p-6">
        <Text className="mb-3 text-xl font-extrabold text-[#111322]">Transaction details</Text>

        <View className="mt-6">
          <View className="mb-8">
            <Text className="text-base font-semibold text-[#111322]">Receiver</Text>
            <TextInput
              placeholder="Henry Doe"
              className="mt-2  h-12  flex-grow rounded-lg border border-[#DCDFE3] bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <View className="mb-1">
            <Text className="text-base font-semibold text-[#111322]">Amount</Text>
            <TextInput
              placeholder="₦ 0.00"
              className="mt-2  h-12   flex-grow rounded-lg border border-[#DCDFE3]  bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Text className="text-right text-[#23A36D]">Balance: ₦15,000,666.12</Text>
          <View className="mt-6">
            <Text className="text-base font-semibold text-[#111322]">Narration</Text>
            <TextInput
              placeholder="Enter transaction description"
              className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  bg-[#F2F2F2] px-3 text-sm font-semibold text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Pressable
            onPress={() => router.push('/send/passcode')}
            className="mt-16 items-center justify-center rounded-[31px] bg-[#14281D] px-[32ppx] py-[20px] text-[#FFFCDC]">
            <Text className="text-bold font-medium text-white">Send money</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
