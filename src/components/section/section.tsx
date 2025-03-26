import { View, Text, Pressable  } from "react-native";

interface Props {
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl" 
  label: string;
  action: () => void;
}

export function Section({name, size, label, action}: Props) {
 return (
   <View className="w-full flex flex-row items-center justify-between px-4">
  <Text className={`${size} font-semiblod my-4 self-start text-white`}>
        {name}
    </Text>

      <Pressable> 
      <Text className="text-amber-400">{label}</Text>
      </Pressable>
   </View>
 );
}