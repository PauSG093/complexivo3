import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FlatList, Switch } from 'react-native-gesture-handler';

export default function Tarjeta({datos}: any) {

    const[ocultar, setocultar] =useState(false)
    const [positivo, setpositivo] = useState(false)
    //console.log(datos.titulo);

    return (
        <TouchableOpacity 
            style= {styles.container}
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

                <Text>Comentarios {"/n/n/n/n"}</Text>

                <View style={{flexDirection:'row'}}>
                    <Text>Positivos</Text>
                    <Switch 
                        value={positivo} 
                        onChange={()=> setpositivo(!positivo)}
                    />
                
                    <Text>Negativos</Text>
                </View>
                {
                    positivo == true
                    ?<Text>Comentarios positivo</Text>
                    : <FlatList
                        data={datos.opiniones.opiniones_negativas.detalles}
                        renderItem={({item})=>   
                            <Text>{item.opinion}</Text>
                        }
                    />                     
                }

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
})
    
