import { FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import { BarbeariasItem } from "./Horizontal";

export interface BarbeariasPros{
    id: string;
    name: string;
    image: string;
    km: number;
    status: string;
}


export function Barbearias() {
  const [barbearias, setBarbearias] = useState<BarbeariasPros[]>([]);


    useEffect(() => {
        async function getBarber() {
           const response = await fetch('http://192.168.185.230:3000/barbearias');
           const data = await response.json();
           setBarbearias(data);
        }

      getBarber();
   }, [])



 return (
   <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
    {barbearias.map( item => (
      <BarbeariasItem item={item} key={item.id}/>
    ))}
   </View>
  );
}