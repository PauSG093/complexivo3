import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Tarjeta({datos}: any) {

    console.log(datos);

    return (
        <TouchableOpacity style= {styles.container}>
            <Text>Pelicula: {datos.titulo}</Text>
            <Image 
            source={{uri: datos.imagen}}
            style={styles.img}
            />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        margin:5,
        backgroundColor: '#5d8fa4',
    },
    img: {
        width: 150,
        height: 250,
        resizeMode: 'contain'
    }
});
    
