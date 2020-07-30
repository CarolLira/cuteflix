import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <div style={{ marginTop: "70px" }}>
                <h1>Cadastro da Categoria</h1>

                <form>
                    <label>
                        Nome da Categoria
                        <input type="text"
                        />
                    </label>
                    <button>
                        Cadastrar
                    </button>
                </form>
            </div>
            <Link to="/">
                <p>Ir pra Home</p>
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;