
export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
 }

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): USER_ROLES {
    return this.role;
  }
}

export interface signupInputDTO {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}