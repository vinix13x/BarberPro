import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';    
import { CardHorizontalFood } from './barber/barber';

export interface BarberPros{
    id: string;
    name: string;
    descricao: string;
    price: number;
    image: string;
    rating: number;
    time: number;
    barbeariaId: string;
}

export default function Trending() {
    const [barber, setBarber] = useState <BarberPros[]>([]);

    useEffect(() => {
         async function getBarber() {
            const response = await fetch('http://192.168.0.201:3000/servicos');
            const data = await response.json();
            setBarber(data);
         }

       getBarber();
    }, [])


 return (
   <FlatList
   data={barber}
   renderItem={ ({ item }) => <CardHorizontalFood barber={item} /> }
   horizontal={true}
   contentContainerStyle={{ gap:16, paddingLeft:16, paddingRight:16}}
   showsHorizontalScrollIndicator={false}
   />
  );
}