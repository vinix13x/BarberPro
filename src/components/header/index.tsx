import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
export function Header() {
  return (
    <View className='flex w-full flex-row items-center justify-between'>
      <View className="flex flex-row items-center justify-start gap-4">
      <Image 
        source={require("../../assets/thorfinn.jpg")} 
        className= "size-16 rounded-full" 
         />    
        <View className='flex flex-col items-start justify-start'>
           <Text className='text-xl font-bold text-white '>Fala, Vinícius👋</Text>

          <View className="flex-row items-center justify-center gap-2 font-family: open-sans">
            <Feather name='map-pin' size={16} color='#FEBA43' />
            <Text className='text-base text-white'>Teresina-PI</Text>
           </View>
        </View>
    </View>

      <Pressable className="size-12 bg-zinc-700 rounded-full flex items-center justify-center border border-zinc-500">
        <Ionicons name="notifications-outline" size={24} color="#ffffff" />
      </Pressable>

    </View>
  );
}