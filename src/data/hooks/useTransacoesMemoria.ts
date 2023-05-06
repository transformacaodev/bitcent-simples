import Id from "@/logic/core/comum/Id"
import Transacao from "@/logic/core/financas/Transacao"
import { useEffect, useState } from "react"
import transacoesFalsas from "../constants/transacoesFalsas"

export default function useTransacoes() {
    const [transacoes, setTransacoes] = useState<Transacao[]>([])
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    useEffect(buscarTransacoes, [])

    function buscarTransacoes() {
        setTransacoes(transacoesFalsas)
    }

    function salvar(transacao: Transacao) { 
        const outras = transacoes.filter((t) => t.id != transacao.id)
        setTransacoes([
            ...outras,
            { ...transacao, id: transacao.id ?? Id.novo() },
        ])
        setTransacao(null)
    }

    function excluir(transacao: Transacao) {
        const outras = transacoes.filter((t) => t.id != transacao.id)
        setTransacoes(outras)
        setTransacao(null)
    }

    function selecionar(transacao: Transacao) {
        setTransacao(transacao)
    }
    
    function cancelar() {
        setTransacao(null)
    }

    return {
        transacoes,
        transacao,
        salvar,
        excluir,
        selecionar,
        cancelar,
    }
}