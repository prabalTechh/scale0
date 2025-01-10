import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blog Post</Text>
      <View>
        <View style={styles.button}>
          <Button onPress={() => {}} title="login/signUp" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        paddingLeft: 5,
        fontSize: 22,
        fontWeight: "600",
    },
    container: {
        height: 50,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FAFAFA",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    button: {
        // Add other styles if needed
       
    },
});

export default Navbar;
