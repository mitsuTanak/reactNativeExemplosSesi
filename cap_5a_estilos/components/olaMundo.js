import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet} from 'react-native'

import Estilos from '../estilos/Estilos'

class OlaMundo extends React.Component {
    render() {
        return(
            <View>
                <Text>Olá,</Text>
                <Text style={Estilos.texto}>{this.props.nome}!</Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
    }
})

export default OlaMundo;