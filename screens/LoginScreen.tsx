import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";

export default function LoginScreen( {navigation}: any) {

    const [correo, setcorreo] = useState("")
    const [contrasena, setcontrasena] = useState("")

    function login() {
        signInWithEmailAndPassword(auth, correo, contrasena)
  .then((userCredential) => {
    const user = userCredential.user;
        navigation.navigate("Drawer")
        //console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    }

    return (
        <View>
            <Text>LoginScreen</Text>
        <TextInput
            placeholder='Ingresar correo'
            onChangeText={setcorreo}
            />    
    

        <TextInput
            placeholder='Ingresar correo'
            onChangeText={setcontrasena}
            />

            <Button title='login' onPress={login} />

            <Button title="Registrarse" onPress={()=> navigation.navigate("Registro")}/>

        </View>

    );
}

const styles = StyleSheet.create({});