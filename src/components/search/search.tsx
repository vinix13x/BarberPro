import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
  return (
    <View className="w-full flex-row border border-zinc-500 bg-zinc-50/10 h-14 rounded-lg items-center gap-2 px-4">
        <Feather name="search" size={24} color="#A4ACB9"/>

        <TextInput 
        placeholder="Busque Barbearias...." 
        placeholderTextColor="#A4ACB9"
        className="w-full flex-1 h-full text-white"
        />
    </View>
  );
}