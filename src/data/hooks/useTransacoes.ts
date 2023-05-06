import servicos from '@/logic/core'
import Transacao from '@/logic/core/financas/Transacao'
import { useCallback, useContext, useEffect, useState } from 'react'
import AutenticacaoContext from '../contexts/AutenticacaoContext'

export default function useTransacoes() {
    const { usuario } = useContext(AutenticacaoContext)
    const [transacoes, setTransacoes] = useState<Transacao[]>([])
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    const buscarTransacoes = useCallback(async function () {
        if(!usuario) return
        const transacoes = await servicos.financas.consultar(usuario)
        setTransacoes(transacoes)
    }, [usuario])

    useEffect(() => {
        buscarTransacoes()
    }, [buscarTransacoes])

    async function salvar(transacao: Transacao) {
        if(!usuario) return 
        await servicos.financas.salvar(transacao, usuario)
        setTransacao(null)
        await buscarTransacoes()
    }

    async function excluir(transacao: Transacao) {
        if(!usuario) return 
        await servicos.financas.excluir(transacao, usuario)
        setTransacao(null)
        await buscarTransacoes()
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
