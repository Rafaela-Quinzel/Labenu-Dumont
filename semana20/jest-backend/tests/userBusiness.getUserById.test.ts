import { UserBusiness } from "../src/business/UserBusiness"
import { stringToUserRole, User, USER_ROLES } from "../src/model/User"
import { HashGenerator } from "../src/services/hashGenerator"
import { IdGenerator } from "../src/services/idGenerator"
import { TokenGenerator } from "../src/services/tokenGenerator"

describe("Testing UserBusiness.getUserById", () => {

    let idGenerator = { generate: jest.fn(() => "id") } as IdGenerator
    let hashGenerator = {hash: jest.fn(), compareHash: jest.fn()} as HashGenerator
    let userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any
    let tokenGenerator = { generate: jest.fn(() => "token"), verify: jest.fn() } 
    

    const userBusiness: UserBusiness = new UserBusiness(
        idGenerator as any,
        hashGenerator as any, 
        userDatabase as any, 
        tokenGenerator as any  
    )

    test("Should return 'User not found' when user does not exist", async () => {

    
        expect.assertions(2)

        try {

            await userBusiness.getUserById("id")

            await userBusiness.getUserById("invalid-id")

        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })



    test("Should return User", async () => {

        const userMock = new User(
            "mockId",
            "Mock User",
            "mockuser@gmail.com",
            "mockpassword",
            stringToUserRole("ADMIN")
        )

        userDatabase = { getUserById: jest.fn(async (id: string) => userMock) } as any

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        )

        const output = await userBusiness.getUserById("mockId")

        expect(userDatabase.getUserById).toHaveBeenCalledWith("mockId")
        expect(output).toEqual({
            id: "mockId",
            name: "Mock User",
            email:"mockuser@gmail.com",
            role:"ADMIN"
        })
    })
})


