import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

export default function TransactionDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        <Text className="mb-3 text-[22px] font-extrabold text-[#111322]">Transaction details</Text>

        <View className="mt-6">
          <View className="mb-8">
            <Text className="mb-1 text-base font-semibold text-[#111322]">Receiver</Text>
            <TextInput
              placeholder="Henry Doe"
              className="h-12  flex-grow rounded-lg border border-[#DCDFE3] bg-[#F2F2F2] px-3 text-base font-normal text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <View className="mb-1">
            <Text className="mb-1 text-base font-semibold text-[#111322]">Amount</Text>
            <TextInput
              placeholder="₦ 0.00"
              className="h-12   flex-grow rounded-lg border border-[#DCDFE3] px-3 text-base font-normal text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Text className="text-right text-sm text-[#23A36D]">Balance: ₦15,000,666.12</Text>
          <View className="mt-6">
            <Text className="mb-1 text-base font-semibold text-[#111322]">Narration</Text>
            <TextInput
              placeholder="Enter transaction description"
              className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3] px-3 text-base  text-[#111322]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Pressable
            onPress={() => router.push('/send/passcode')}
            className="mt-16 items-center justify-center rounded-[31px] bg-[#14281D] h-14 text-[#FFFCDC]">
            <Text className="text-bold font-medium text-[#FFFCDC]">Send money</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
