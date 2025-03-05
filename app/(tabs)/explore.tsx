import { StyleSheet, Image, Platform , View, Text} from 'react-native';



export default function TabTwoScreen() {
  return (
       <View className='flex-1 bg-blue-500'>
    <Text className="text-white">hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
