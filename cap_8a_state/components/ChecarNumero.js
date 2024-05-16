import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilos from '../estilos/Estilos'

export default props => {
    return (

        <View style={Estilos.container}>
            {validaParOuImpar(props.numero)}
        </View>
    )
}
function validaParOuImpar(numero) {
    return numero % 2 == 0
    ? <Text style={Estilos.texto}>O Numero é Par!</Text>
    : <Text style={Estilos.texto}>O Numero é Impar!</Text>
}
