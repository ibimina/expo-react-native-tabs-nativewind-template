import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
export default function SendScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-10  p-6">
        <Text className="mb-3 text-xl font-extrabold text-[#111322]">Send money</Text>
        <Text className="text-sm font-normal text-[#4A5578]">
          Enter the recipient's username you want to send money to
        </Text>
        <View className="mt-6">
          <Text className="text-base3 font-semibold text-[#111322]">Send to</Text>
          <View className="mt-2 flex-row items-center gap-3 rounded-lg border border-[#DCDFE3] px-3">
            <Text className="text-sm font-semibold text-[#111322]">@</Text>
            <TextInput
              placeholder="Enter username"
              className="h-12 flex-grow text-sm font-semibold text-[#111322]"
              placeholderTextColor="#A1A1A1"
            />
          </View>
          <Pressable
            onPress={() => router.push('/send/transaction-details')}
            className="mt-16 items-center justify-center rounded-[31px] bg-[#14281D] px-[32ppx] py-[20px] text-[#FFFCDC]">
            <Text className="text-bold font-medium text-white">Search</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
