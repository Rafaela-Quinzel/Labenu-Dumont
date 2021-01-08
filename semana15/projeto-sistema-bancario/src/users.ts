export type user = {
    name: string,
    cpf: string,
    birthDate: { day: number, month: number, year: number },
    balance: number, 
    transactions: extractAccount[]
}


export type extractAccount = {
    value: number,
    date: number, 
    description: string
}


