import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { useEffect } from "react";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
