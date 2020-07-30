import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <div style={{ marginTop: "70px" }}>
                <h1>Cadastro de Vídeo</h1>
            </div>
            <Link to="/cadastro/Categoria">
                <p>Cadastrar Categoria</p>
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;