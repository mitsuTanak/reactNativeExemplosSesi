import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilos from '../estilos/Estilos'

export default props => {
    return (

        <View style={Estilos.container}>
            {
                props.numero % 2 == 0
                ? <Text>O Numero é Par!</Text>
                : <Text>O Numero é Impar!</Text>
            }
        </View>
    )
}
