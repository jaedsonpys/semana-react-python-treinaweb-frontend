import { ListaStyled, Descricao, Nome, Valor, ItemLista, ListaVazia, Foto, Informacoes } from './Lista.style';
import { Button } from '@mui/material';

import type { Professor } from '../../@types/professor';

interface ListaProps {
    professores: Professor[]
}

const Lista = (props: ListaProps) => {
    return (
        <>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>R$ {professor.valor_hora} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%' }}>Marcar aula</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado.</ListaVazia>
            )}
        </>
    )
}

export default Lista;