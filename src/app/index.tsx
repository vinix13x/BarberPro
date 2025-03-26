import { ScrollView, Text, View } from "react-native";
import {Header} from "../components/header";
import { Banner } from "../components/banner/banner";
import { Search } from "../components/search/search";
import { Section } from "../components/section/section";
import Constants from 'expo-constants';
import Trending from "../components/trending/trending";
import { Barbearias } from "../components/barbearias/barbearias";


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
   <ScrollView 
    style={{ flex: 1}} 
    className="bg-zinc-800" 
    showsVerticalScrollIndicator={false} 
  >
    <View className="w-full px-4" style={{marginTop: statusBarHeight+8}}>
      <Header/>      
      <Banner/>
      <Search/>
    </View>
     <Section 
     name="Barbearias em Alta" 
     label="Ver mais" 
     action={() => console.log("Clicou no veja mais")}
     size="text-xl"
     />

    <Trending/>

      <Section 
     name="Barbarias próximas" 
     label="Ver todas" 
     action={() => console.log("Clicou no veja mais")}
     size="text-xl"
     />

     <Barbearias/>


  </ScrollView>
  );
}
