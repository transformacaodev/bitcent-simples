import { TipoTransacao } from "@/logic/core/financas/TipoTransacao"
import Transacao from "@/logic/core/financas/Transacao"
import Data from "@/logic/utils/Data"
import { IconCheck, IconTrash, IconX } from "@tabler/icons-react"
import { useState } from "react"

interface FormularioProps {
    transacao: Transacao
    salvar?: (transacao: Transacao) => void
    excluir?: (transacao: Transacao) => void
    cancelar?: () => void
}

export default function Formulario(props: FormularioProps) {
    const [transacao, setTransacao] = useState<Transacao>(props.transacao)
    return (
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <input
                    type="text"
                    placeholder="Descrição"
                    className="input"
                    value={transacao.descricao ?? ''}
                    onChange={e => {
                        setTransacao({
                            ...transacao,
                            descricao: e.target.value
                        })
                    }}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    className="input"
                    value={transacao.valor ?? 0}
                    onChange={e => {
                        setTransacao({
                            ...transacao,
                            valor: +e.target.value
                        })
                    }}
                />
                <input
                    type="date"
                    placeholder="Data"
                    className="input"
                    value={Data.yymmdd.formatar(transacao.data ?? new Date())}
                    onChange={e => {
                        setTransacao({
                            ...transacao,
                            data: new Date(`${e.target.value} `)
                        })
                    }}
                />
                <div className="flex gap-8">
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            name="tipo"
                            value="receita"
                            checked={transacao.tipo === 'receita'}
                            onChange={() => {
                                setTransacao({
                                    ...transacao,
                                    tipo: TipoTransacao.RECEITA
                                })
                            }}
                        />
                        <span>Receita</span>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            name="tipo"
                            value="despesa"
                            checked={transacao.tipo === 'despesa'}
                            onChange={() => {
                                setTransacao({
                                    ...transacao,
                                    tipo: TipoTransacao.DESPESA
                                })
                            }}
                        />
                        <span>Despesa</span>
                    </div>
                </div>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <button className="btn bg-green-500" onClick={() => props.salvar?.(transacao)}>
                    <IconCheck />
                    <span className="hidden sm:inline">Salvar</span> 
                </button>
                <button className="btn bg-zinc-500" onClick={() => props.cancelar?.()}>
                    <IconX />
                    <span className="hidden sm:inline">Cancelar</span>
                </button>
                <span className="flex-1"></span>
                {props.transacao.id && (
                    <button className="btn bg-red-500" onClick={() => props.excluir?.(transacao)}>
                        <IconTrash />
                        <span className="hidden sm:inline">Excluir</span>
                    </button>
                )}
            </div>
        </div>
    )
}