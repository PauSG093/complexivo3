import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native/types_generated/index';

export default function Tarjeta({datos}: any) {

    const[ocultar, setocultar] =useState(second)
    //console.log(datos.titulo);

    return (
        <TouchableOpacity style= {styles.container}
            onPress={()=> setocultar(true)}
            >
            <Text>Pelicula: {datos.tittulo}</Text>
            <Image 
            source={{uri: datos.imagen}}
            style={styles.img}
            /> 


            <Modal visible={ocultar}>
                <Text>Pelicula: {datos.tittulo}</Text>
                <Image 
                source={{uri: datos.imagen}}
                style={styles.img}
                /> 
                


                 <Button title='cerrar' onPress={()=> setocultar(false)}/>
            </Modal>
        </TouchableOpacity>


    )
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
    
