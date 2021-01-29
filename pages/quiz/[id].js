import React from 'react';
import QuizScreen from '../../src/components/screens/Quiz'

export default function QuizDaGaleraPage({dbExterno}) {
  // Situação normal do React. Roda no browser
  // const[db,setDb] = React.useState({})
  // React.useEffect(() => { fetch ...});
  console.log("QuizDaGaleraPAge:", dbExterno);
  return (
    
      <QuizScreen externalQuestions={dbExterno}/>

    
  );
}

export async function getServerSideProps(context) {
  // console.log(context.query);

  const dbExterno = await fetch('https://churrasquiz.reginokaa.vercel.app/api/db')
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

  //console.log(dbExterno);

  return {
    props: {
        dbExterno,
    },
  };
}
