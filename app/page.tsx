'use client'
import React, { useState } from "react"; ''
export default function Home() {
  // Declarar as variaveis
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [cnh, setCNH] = useState(false)
  const [altura, setAltura] = useState("")

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
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>
        <h3>{nome}</h3>
      </main>
    </div>
  );
}
