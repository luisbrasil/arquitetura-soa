import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import FilmesService from '../services/FilmesService';

function BuscaFilmes({ navigation }) {
    const [filmes, setFilmes] = useState([]);
    const [ator, setAtor] = useState("");
    var filmesService = new FilmesService();

    const buscarFilmes = async () => {
        const novosFilmes = await filmesService.buscarFilmes(ator);
        console.log(novosFilmes)
        setFilmes(novosFilmes);
    };

    return (
        <View>
            <TextInput
                placeholder="Digite o nome de um ator"
                onChangeText={(texto) => setAtor(texto)}
            />
            <Button title="Buscar Filmes" onPress={buscarFilmes} />
            <FlatList
                data={filmes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Button
                        title={item.titulo + ` (${item.anoLancamento})`}
                        onPress={() => navigation.navigate('DetalhesFilme', { filme: item })}
                    />
                )}
            />
        </View>
    );
}

export default BuscaFilmes;