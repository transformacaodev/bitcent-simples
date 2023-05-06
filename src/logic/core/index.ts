import Autenticacao from "../firebase/auth/Autenticacao";
import ServicosFinancas from "./financas/ServicosFinancas";

class Servicos {
    get financas() { return new ServicosFinancas() }
    get autenticacao() { return new Autenticacao() }
}

const servicos = new Servicos()
export default servicos