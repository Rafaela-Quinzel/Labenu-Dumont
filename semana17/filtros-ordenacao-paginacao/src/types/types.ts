export type user = {
    id: string,
    name: string,
    email: string,
    type: string
 }


 export type recipe = {
    id: string,
    title: string,
    description: string,
    userId: string,
    createdAt: Date,
 }


 export type searchRecipeInput = {
    title: string,
    orderBy: string,
    orderType: string,
    page: string
 }
 
 