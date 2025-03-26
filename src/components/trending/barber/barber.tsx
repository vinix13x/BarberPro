import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarberPros } from '../trending';

export function CardHorizontalFood({ barber }: { barber: BarberPros }) {
 return (
   <Pressable className='flex flex-col rounded-lg bg-zinc-50/10 '>
    <Image
     source={{uri: barber.image}}
     className='w-44 h-36 rounded-lg m-2'
    />
    <View className='flex flex-row  bg-zinc-700/50 gap-1 rounded-lg absolute top-3 right-3 px-2 py-2 justify-center items-center'>
        <Ionicons name='star' size={16} color='#FEBA43'/>
        <Text className='text-white text-sm'>{barber.rating}</Text>
    </View>

    <View className='flex flex-col p-2 justify-start'>
    <Text className='text-white'>
      {barber.name.length > 13 ? `${barber.name.slice(0, 13)}...` : barber.name}
    </Text>
    <View className='flex flex-row items-center gap-2'>
    <Text className='text-amber-400 font-medium text-base '> {barber.price}</Text>
    <Text className='text-zinc-300 font-normal text-sm'>{barber.time}</Text>
    </View>
    </View>
   </Pressable>
  );
}