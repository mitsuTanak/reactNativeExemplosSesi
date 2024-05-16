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

export default OlaMundo;