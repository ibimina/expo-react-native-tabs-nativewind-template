import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

export default function WithdrawalTransactionDetails() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-10  p-4">
        <Text className="mb-3 text-xl font-extrabold text-[#111322]">Transaction details</Text>

        <View className="mt-2">
          <View className="mb-2">
            <Text className="text-base font-semibold text-[#111322]">Receiver Account</Text>
            <View className="flex-row items-center justify-between gap-3 py-4">
              <View className="flex-row items-center gap-3">
                <View className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9FB]">
                  <Text className="text-base font-semibold text-[#5421AB]">K</Text>
                </View>
                <View>
                  <Text className="text-base font-semibold text-[#11132]">John Doe</Text>
                  <Text className="text-sm font-light text-[#4A5578]">Kuda MFB . 2002732013</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mb-1">
            <Text className="text-base font-semibold text-[#111322]">Amount</Text>
            <TextInput
              placeholder="₦ 0.00"
              className="mt-2  h-12   flex-grow rounded-lg border border-[#DCDFE3] px-3 text-sm  text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Text className="text-right text-[#23A36D]">Balance: ₦15,000,666.12</Text>
          <View className="mt-6">
            <Text className="text-base font-semibold text-[#111322]">Narration</Text>
            <TextInput
              placeholder="Enter transaction description"
              className="mt-2 h-12  flex-grow rounded-lg border border-[#DCDFE3]  px-3 text-sm  text-[#758195]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Pressable
            onPress={() => router.push('./withdraw-passcode')}
            className="mt-12 h-14 w-full items-center justify-center rounded-full bg-[#14281D]">
            <Text className="text-bold font-medium text-[#FFFCDC]">Withdraw money</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
