import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/components/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  // Situação normal do React. Roda no browser
  // const[db,setDb] = React.useState({})
  // React.useEffect(() => { fetch ...});
  console.log('QuizDaGaleraPAge:', dbExterno);
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen externalQuestions={dbExterno} />
    </ThemeProvider>

  );
}

export async function getServerSideProps(context) {
  // console.log(context.query);
  const [projectName,githubUser] = context.query.id.split('___')
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha ao obter os dados');
    })
    .then((respostaConvertidaEmObjecto) => respostaConvertidaEmObjecto)
    .catch((err) => {
      console.error(err);
    });

  // console.log(dbExterno);

  return {
    props: {
      dbExterno,
    },
  };
}
