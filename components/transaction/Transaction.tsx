import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function TransactionIndex() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="px-6 pt-6">
          <Text className="mb-2 text-xs font-medium text-[#404968]">YESTERDAY</Text>
          <TouchableOpacity
            onPress={() => router.push('/transaction/1')}
            className="flex-row items-center justify-between gap-3 py-4">
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
          </TouchableOpacity>
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
      </ScrollView>
    </SafeAreaView>
  );
}
