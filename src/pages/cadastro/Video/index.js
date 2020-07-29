import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <div style={{ marginTop: "130px" }}>
                <h1>cadastro Vídeo</h1>
            </div>
            <Link to="/cadastro/Categoria">
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;