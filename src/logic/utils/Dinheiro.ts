export default class Dinheiro {
    private static _lingua = "pt-BR"
    private static _moeda = "BRL"

    static formatar(num: number): string {
        return (num ?? 0).toLocaleString(Dinheiro._lingua, {
            style: "currency", currency: Dinheiro._moeda
        })
    }
}