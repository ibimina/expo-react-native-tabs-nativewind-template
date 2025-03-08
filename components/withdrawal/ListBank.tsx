import { useRouter } from 'expo-router';
import {
  Pressable,
  Image,
  TextInput,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { ImageAssets } from '@/assets/images';

export default function ListWithdrawalBankIndex() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView className="mb-6 p-6 ">
        <Text className="text-xl font-extrabold text-[#111322]">Withdrawal money</Text>
        <Text className="text-sm font-normal text-[#4A5578]">
          Select the account you was to withdraw to or you can add a new one
        </Text>
        <View className="mt-6">
          <TouchableOpacity
            onPress={() => router.push('/withdraw/1')}
            className="flex-row items-center justify-between gap-3 py-4">
            <View className="flex-row items-center gap-3">
              <View className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE9FB]">
                <Text className="text-base font-semibold text-[#5421AB]">K</Text>
              </View>
              <View>
                <Text className="text-sm font-semibold text-[#11132]">John Doe</Text>
                <Text className="text-sm font-light text-[#4A5578]">Kuda MFB . 2002732013</Text>
              </View>
            </View>
            <Image source={ImageAssets.arrowright} className="h-[10.61px] w-[6.48px]" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
