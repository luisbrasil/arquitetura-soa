import React, { useState, useEffect } from 'react';
import FilmeData from '../model/FilmeData';

class FilmesService {
    async buscarFilmes(ator) {
        try {
            const response = await fetch("https://api.jsonbin.io/v3/qs/656552130574da7622cd16a7");
            const filmesJson = await response.json();

            const filmes = filmesJson.record.map(filme => new FilmeData(
                filme.id,
                filme.titulo,
                filme.diretor,
                filme.classificacaoEtaria,
                filme.anoLancamento,
                filme.duracao,
                filme.atores
            ));

            return filmes.filter(filme =>
                filme.atores.some(atorNome => atorNome.toLowerCase().includes(ator.toLowerCase()))
            );
        } catch (erro) {
            console.error('Erro ao buscar filmes:', erro);
            return [];
        }
    }
}

export default FilmesService;