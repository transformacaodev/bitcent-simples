import Colecao from "@/logic/firebase/db/Colecao";
import Usuario from "../usuario/Usuario";
import Transacao from "./Transacao";

export default class ServicosFinancas {
    private _colecao = new Colecao()

    async salvar(transacao: Transacao, usuario: Usuario) {
        return this._colecao.salvar(
            `financas/${usuario.email}/transacoes`,
            transacao
        )
    }
    
    async excluir(transacao: Transacao, usuario: Usuario) {
        return this._colecao.excluir(
            `financas/${usuario.email}/transacoes`,
            transacao.id
        )
    }

    async consultar(usuario: Usuario) {
        return this._colecao.consultar(
            `financas/${usuario.email}/transacoes`,
            'data', 'desc'
        )
    }
}