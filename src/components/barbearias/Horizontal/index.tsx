import { View, Pressable, Text, Image } from 'react-native';
import { BarbeariasPros } from '../barbearias';
import { Ionicons } from '@expo/vector-icons'

export function BarbeariasItem({ item }: {item: BarbeariasPros}) {
 return (
    <Pressable className='flex flex-row items-center justify-start gap-2'>
     <Image
      source={{ uri: item.image}}
      className='w-20 h-20 rounded-full'
     />

     <View className='flex gap-2'>
      <Text className='text-base text-white leading-4 font-bold' numberOfLines={2}>
        {item.name}
      </Text>

      <View className='flex-row items-center gap-1'>
        <Ionicons name='star' size={14} color="#ca8a04" />
        <Text className='text-sm text-zinc-300'>4.5</Text>
      </View>

     </View>
   </Pressable>
  );
}