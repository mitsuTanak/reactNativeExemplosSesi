import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Estilos from '../estilos/Estilos'

class Evento extends React.Component{
    state = {
        input: 'Onde está?'
    }

    render() {
        return(
            <View style={Estilos.container}>
                <TextInput 
                    style={Estilos.input} 
                    value={this.state.input}
                    onChangeText={text=>this.setState({input: text})}
                />
            </View>
        )
    }
}


export default Evento