import React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'

class UsuarioGithub extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dados: {},
            usuario: "octocat"
        }

        this.fetchDados = this.fetchDados.bind(this)
    }

    fetchDados() {
        fetch(`https://api.github.com/user/${this.state.usuario}`)
            .then(response => response.json())
            .then(json => this.setState({dados: json}))
            .then(err => this.setState({dados: {err}}))
    }

    componentDidMount() {
        this.fetchDados();
    }


    render() {
        return (
            <View style={estilos.container}>
                <Text>{JSON.stringify(this.state.dados)}</Text>
                <View>
                    <TextInput />
                </View>
                <View>
                    <Button
                        onPress={this.fetchDados}
                        title='Buscar Dados'
                        accessibilityLabel='Busque os dados dos usuarios no GitHub'
                    />
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }
});

export default UsuarioGithub