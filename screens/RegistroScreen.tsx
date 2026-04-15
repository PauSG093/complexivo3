import { Button, StyleSheet, Text, View } from "react-native";
import React, { useId, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/Config";
import { ref, set } from "firebase/database";
import { log } from "firebase/firestore/pipelines";

export default function RegistroScreen( {navigation}: any) {

    const [correo, setcorreo] = useState("")
    const [nick, setnick] = useState("")
    const [edad, setedad] = useState("0")
    const [contrasena, setcontrasena] = useState("")

      function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasena)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    //console.log(user.uid);
    guardarUsuario(user.uid);

    navigation.navigate("Login")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    }


    function guardarUsuario(uid: string) {
    set(ref(db, 'usuarios/' + uid), {
        correo: correo,
        avatar: nick,
        edad : edad
    });
    }



    return (
        <View>
            <Text>RegistroScreen</Text>
            
            <TextInput
            placeholder='Ingresar correo'
            onChangeText={setcorreo}
            />

            <TextInput
            placeholder='Ingresar nick'
            onChangeText={setnick}
            />

            <TextInput
            placeholder='Ingresar edad'
            onChangeText={( texto ) =>setedad( texto)}
            keyboardType='numeric'
            />

            <TextInput
            placeholder='Ingresar contrasena'
            onChangeText={setcontrasena}
            secureTextEntry
            />

            <Button title='Registrar' onPress={registro} />



        </View>
    );
}

const styles = StyleSheet.create({});