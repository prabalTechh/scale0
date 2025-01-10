import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
       <Navbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
 
})
