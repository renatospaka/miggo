export default class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _omieUser: string;
  private _valid: boolean = false

  constructor(id: string, name: string, email: string, omieUser: string) {
    this._name = name;
    this._id = id;
    this._omieUser = omieUser;
    this._email = email;
    this.validate();
  }

  private validate(): void {
    this._valid = false;

    if (this._id.length === 0) {
      throw new Error("id is required");
    }

    if (this._name.length === 0) {
      throw new Error("name is required");
    }

    if (this._email.length === 0) {
      throw new Error("email is required");
    }

    if (this._omieUser.length === 0) {
      throw new Error("omie code is required");
    }

    this._valid = true;
  }

  get id(): string {
    return this._id;
  }

  get omieUser(): string {
    return this._omieUser;
  }

  changeOmieUser(omieUser: string): void {
    this._omieUser = omieUser;
    this.validate()
  }

  get name(): string {
    return this._name;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate()
  }

  get email(): string {
    return this._email;
  }

  changeEmail(email: string): void {
    this._email = email;
    this.validate()
  }

  get valid(): boolean {
    return this._valid;
  }
}
