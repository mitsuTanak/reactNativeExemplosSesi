import React from "react";
import { View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from "react-native";
import { db } from '../config/config';


class AdicionarItens extends React.Component {
    state = {
        item: ''
    };

    salvaItem = () => {
        db.ref('/itens').push({
            item: this.state.item
        });
        Alert.alert('Item Salvo!');
    }
};
export default AdicionarItens;

// ----------------------------

render() {
    return(
        <View style={estilos}>
            <Text style={estilos.titulo}>
                Adicionar Item
            </Text>
            <TextInput 
                style={estilos.itemInput}
                onChange={this.setState({item})}
            />
            <TouchableHighlight 
                style={estilos.btn}
                underlayColor="white"
                onPress={this.salvaItem}
            >
                <Text style={estilos.textoBtn}>
                    Adicionar
                </Text>
            </TouchableHighlight>
        </View>
    )
};

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titulo: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white',
    },
    textoBtn: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    btn: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#2196F3',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});