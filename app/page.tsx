'use client'
import React, { useState } from "react";

export default function Home() {
  // Declarar as variaveis
  const [nome, setNome] = useState("")
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
          <input type="text"
            placeholder="Digite o seu Nome"
            value={nome}
               onChange={(e) => setNome(e.target.value)}
          />
        </form>
      </main>
    </div>
  );
}
