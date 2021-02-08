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


# EXERCÍCIO 02

a) Resposta: 
````
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 50
	})
})
````


b) Resposta:
````
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
````

c) Resposta:
````
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual(undefined)
})
````


# EXERCÍCIO 03


c) Resposta:
- Pensar em todos os casos posíveis para analisar.



# EXERCÍCIO 04


a) Resposta:
````
test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  })
````


b) Resposta:
````
test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"])
  })
````


c) Resposta: 
````
test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ])
  })
````

d) Resposta:
````
test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  })
````


# EXERCÍCIO 05


a) Resposta:
````
test("1 brazilian allowed", () => {

    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian])
    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    expect(result.brazilians.allowed.length).toBeLessThan(2)
  })
````


b) Resposta:
````
test("1 american allowed", () => {

    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    }

    const result = verifyAge(casino, [brazilian])
    expect(result.americans.unallowed.length).toBe(0)
  })
````

c) Resposta:
````
test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])

    expect(result.brazilians.unallowed).toContain("Astrodev BR")
    expect(result.americans.unallowed).toContain("Astrodev EUA")
  })
````

d) Resposta:
````
test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    }

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    }

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    }

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ])

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
    expect(result.americans.unallowed.length).toBeLessThan(1)
    expect(result.americans.allowed.length).toBe(2)
  })
````
