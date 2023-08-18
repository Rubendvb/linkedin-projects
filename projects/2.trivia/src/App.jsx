import { useState } from 'react'

function App() {
  const [pontos, setPontos] = useState(0)
  const [respostaErrada, setRespostaErrada] = useState(0)
  const [resposta, setResposta] = useState(false)
  const [perguntaIndex, setPerguntaIndex] = useState(0)

  const perguntas = [
    {
      pergunta: 'Qual é a capital do Canadá?',
      opcoes: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
      resposta: 'Ottawa',
    },
    {
      pergunta: 'Qual é o maior mamífero da Terra?',
      opcoes: ['Elefante', 'Girafa', 'Crocodilo', 'Baleia'],
      resposta: 'Baleia',
    },
    {
      pergunta: 'Qual é o rio mais longo do mundo?',
      opcoes: ['Danúbio', 'Nilo', 'Amarelo', 'Amazonas'],
      resposta: 'Nilo',
    },
  ]

  const perguntaAtual = perguntas[perguntaIndex]

  const responder = (resposta) => {
    setResposta(true)
    atualizaPontos(resposta)
  }

  const atualizaPontos = (resposta) => {
    if (resposta === perguntaAtual.resposta) {
      setPontos(pontos + 1)
    } else {
      setRespostaErrada(respostaErrada + 1)
    }
  }

  const seguintePergunta = () => {
    setResposta(false)

    if (perguntaIndex < perguntas.length - 1) {
      setPerguntaIndex(perguntaIndex + 1)
    } else {
      setPerguntaIndex(0)
    }
  }

  return (
    <>
      <h1>Quiz</h1>

      <p>
        Pontos: <strong>{pontos}</strong>
      </p>
      <p>
        Resposta{`${respostaErrada > 1 ? 's' : ''}`} errada
        {`${respostaErrada > 1 ? 's' : ''}`}: <strong>{respostaErrada}</strong>
      </p>

      <div className="col-sm-8">
        <div className="card">
          <div className="card-header">{perguntaAtual.pergunta}</div>

          <div className="card-body">
            <div className="card-text">
              <p>
                <strong>Opções:</strong>
              </p>

              {perguntaAtual.opcoes.map((opcao) => (
                <p key={opcao}>
                  <button
                    className="btn btn-link"
                    onClick={() => responder(opcao)}
                  >
                    {opcao}
                  </button>
                </p>
              ))}
            </div>

            {resposta && (
              <div>
                <hr />
                <p>
                  A resposta é: <strong>{perguntaAtual.resposta}</strong>
                </p>
              </div>
            )}

            <hr />

            <button className="btn btn-dark" onClick={() => seguintePergunta()}>
              Seguinte pergunta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
