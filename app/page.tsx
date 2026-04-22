'use client'
import { setGlobal } from "next/dist/trace";
import React, { ChangeEvent, useState } from "react"; ''
export default function Home() {
  // Declarar as variaveis
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [cnh, setCNH] = useState(false)
  const [altura, setAltura] = useState("")
  const [cidade, setCidade] = useState("")
  const [observacao,setObservacao] = useState("")
  const [arquivo, setArquivo] = useState<File | null>(null)

  function handlerArquivo(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0] || null
    setArquivo(file)
  }

  // Funções
  function enviarFormulario(e: React.FormEvent) {
    // React.FormEvent
    e.preventDefault()
    console.log(e)
    alert('Formulario Enviado')
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <form action="" method="" onSubmit={enviarFormulario}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text"
              placeholder="Digite o seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              name="nome"
              id="nome"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email"
              placeholder="Digite o seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="idade">Idade</label>
            <input type="number"
              placeholder="Digite o seu Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              name="idade"
              id="idade"
            />
          </div>
          <div>
            <label htmlFor="nascimento">Data de Nascimento</label>
            <input type="date"
              placeholder="Digite a sua data de Nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
              name="nascimento"
              id="nascimento"
            />
          </div>
          <div>
            <label htmlFor="cnh">Voce possui CNH?</label>
            <input type="checkbox"
              checked={cnh}
              onChange={(e) => setCNH(e.target.checked)}
              name="cnh"
              id="cnh"
            />
          </div>
          <div>
            <label htmlFor="altura">Altura</label>
            <input type="number"
              placeholder="Digite o seu Altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              name="altura"
              id="altura"
              step="0.01"
              min="1.3"
              max="2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <select name="cidade" id="cidade" value={cidade}
            onChange={(e) => setCidade(e.target.value)}>
              <option value="">Selecione uma cidade</option>
              <option value="castro">castro</option>
              <option value="pirai">Pirai</option>
              <option value="tibagi">Tibagi</option>
            </select>
          </div>
          <div>
            <label htmlFor="observacao">Observações</label>
            <textarea 
            name="observacao" 
            id="observacao"
            onChange={(e) => setObservacao(e.target.value) }
            value={observacao}
            >
            </textarea>
          </div>
          <div>
            <label htmlFor="arquivo">Arquivo</label>
            <input type="file" onChange={handlerArquivo} />
          </div>
          <div>
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>
        <h3>{nome}</h3>
      </main>
    </div>
  );
}
