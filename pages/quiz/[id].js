import React from 'react';

export default function QuizDaGaleraPage(props) {
  // Situação normal do React. Roda no browser
  // const[db,setDb] = React.useState({})
  // React.useEffect(() => { fetch ...});

  return (
    <div>
      Desafio da próxima aula
      <pre style={{color: 'black'}}>
          {JSON.stringify(props,null,4)}
      </pre>
    </div>
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

  console.log(dbExterno);

  return {
    props: {
        dbExterno,
    },
  };
}
