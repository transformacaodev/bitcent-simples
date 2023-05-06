export default class Data {

    static yymmdd = {
        formatar(dt: Date, separador: string = "-"): string {
            const dia = dt.getDate().toString().padStart(2, "0")
            const mes = (dt.getMonth() + 1).toString().padStart(2, "0")
            return `${dt.getFullYear()}${separador}${mes}${separador}${dia}`
        }
    }

    static ddmmyy = {
        formatar(dt: Date, separador: string = "/"): string {
            const dia = dt.getDate().toString().padStart(2, "0")
            const mes = (dt.getMonth() + 1).toString().padStart(2, "0")
            return `${dia}${separador}${mes}${separador}${dt.getFullYear()}`
        }
    }
}