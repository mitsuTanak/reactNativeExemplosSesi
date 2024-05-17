import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class Evento extends React.Component{
    state = {
        input: "Erro"
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

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 5
    }
});

export default Evento