import { ImageAssets } from '@/assets/images';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, SafeAreaView, Image } from 'react-native';

interface PasscodeIndexProps {
  amount: string;
  handleNumberPress: (number: number) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
  buttonText: string;
}

const AmountIndex: React.FC<PasscodeIndexProps> = ({
  amount,
  handleNumberPress,
  handleDelete,
  handleSubmit,
  buttonText,
}) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-10  p-6">
        <Text className="mb-3 text-xl font-extrabold text-[#111322]">Enter amount</Text>

        <View className="item-end flex-row justify-center gap-2">
          <Text className="text-sm font-medium">₦</Text>
          <Text className="text-[40px] font-bold">{Number(amount).toLocaleString()}</Text>
        </View>
        <Pressable
          onPress={handleSubmit}
          className="mt-16 items-center justify-center rounded-[31px] bg-[#14281D] px-[32ppx] py-[20px] text-[#FFFCDC]">
          <Text className="text-bold font-medium text-white">{buttonText}</Text>
        </Pressable>
        <View style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0].map((number: number | string) => (
            <TouchableOpacity
              key={number}
              style={styles.key}
              {...(number === ''
                ? { disabled: true }
                : { onPress: () => handleNumberPress(number as number) })}>
              <Text style={styles.keyText}>{number}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            className="m-3 w-[0%] items-center justify-center p-2 "
            style={styles.key}
            onPress={handleDelete}>
            <Image source={ImageAssets.back} className="h-[20px] w-[26px]" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  passcodeDisplay: {
    fontSize: 30,
    marginBottom: 20,
    letterSpacing: 10,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // width: '80%',
    justifyContent: 'center',
  },
  key: {
    width: '30%',
    padding: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ddd',
    // borderRadius: 10,
  },
  keyText: {
    fontSize: 20,
  },
  submitButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AmountIndex;
