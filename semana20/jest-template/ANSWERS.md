# EXERCÍCIO 01


a) Resposta:
````
export interface User {
    name: string
    balance: number
}
````


b) Resposta:
````
export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
````