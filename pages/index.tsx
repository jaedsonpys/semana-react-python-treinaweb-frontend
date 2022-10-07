import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Professor } from '../src/@types/professor';
import Lista from '../src/components/Lista/Lista';

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Jaedson Silva',
      descricao: 'Aprenda Python',
      foto: 'https://github.com/jaedsonpys.png',
      valor_hora: 100
    },
    {
      id: 2,
      nome: 'Joanderson Silva',
      descricao: 'Aprenda C#',
      foto: 'https://github.com/joandersonsilva.png',
      valor_hora: 100
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}/>
    </Box> 
  )
}

export default Home
