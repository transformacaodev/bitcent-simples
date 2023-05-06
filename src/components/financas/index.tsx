import useTransacoes from '@/data/hooks/useTransacoes'
import { transacaoVazia } from '@/logic/core/financas/Transacao'
import { IconPlus } from '@tabler/icons-react'
import Cabecalho from '../template/Cabecalho'
import Conteudo from '../template/Conteudo'
import NaoEncontrado from '../template/NaoEncontrado'
import Pagina from '../template/Pagina'
import Formulario from './Formulario'
import Lista from './Lista'
import Sumario from './Sumario'

export default function Financas() {
    const {
        transacoes, transacao, selecionar, salvar, excluir, cancelar
    } = useTransacoes()

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Sumario transacoes={transacoes} />
                <div>
                    <button
                        className='btn bg-blue-500'
                        onClick={() => selecionar(transacaoVazia)}
                    >
                        <IconPlus />
                        <span>Nova Transação</span>
                    </button>
                </div>

                {transacao ? (
                    <Formulario
                        transacao={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={cancelar}
                    />
                ) : transacoes.length ? (
                    <Lista
                        transacoes={transacoes}
                        selecionarTransacao={selecionar}
                    />
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada.
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
    )
}
