import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegister = async () => {
    try {
      if (!email || !password) {
        throw new Error("Email and passwor are required");
      }

      const userCredential = createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredentail) => {
        const user = userCredentail._tokenResponse.email;

        const myUserUid = auth.currentUser.uid;

        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification sent");
        });

        setDoc(doc(db, "user"), `${myUserUid}`, {
          email: email,
          password: password,
        });
      });

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ height: 200, backgroundColor: "#FEBE10", width: "100%" }}>
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 200, height: 50, resizeMode: "cover" }}
            source={{
              uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Wash Wizard
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 25,
              color: "#febe10",
            }}
          >
            Register to your account
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FEBE10",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="white"
            />
            <TextInput
              style={{
                color: "white",
                width: 300,
                marginVertical: 10,
                fontSize: email ? 17 : 17,
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your Email"
              placeholderTextColor={"white"}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FEBE10",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="white"
            />
            <TextInput
              secureTextEntry={true}
              style={{
                color: "white",
                width: 300,
                marginVertical: 10,
                fontSize: password ? 17 : 17,
              }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
              placeholderTextColor={"white"}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <Text>keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot password
          </Text> */}
        </View>

        <View style={{ marginTop: 60 }} />
        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/login")}
          style={{ marginTop: 13 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Already have an account? SignIn
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
