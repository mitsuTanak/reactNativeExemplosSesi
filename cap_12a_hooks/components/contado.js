import React, {useState} from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const Contador = () => {
    const [contador, setContador] = useState(0)

    return (
        <View style={styles.conteudo}>
            <Text>Contagem</Text>
            <Text style={styles.contador}>{contador}</Text>
            <Button
                title="Incrementar"
                onPress={() => setContador(contador + 1)}
            />
            <Button
                title="Decrementar"
                onPress={() => setContador(contador - 1)}
            />
        </View>
    )
}

export default Contador;

const styles = StyleSheet.create({
    conteudo:{
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center'
    },
    contador: {
        fontSize: 32
    }
});