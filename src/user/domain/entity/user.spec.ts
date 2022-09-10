import User from "./user";

describe("User unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const user = new User("", "User 1", "email@domain.qq", "OmieCode");
    }).toThrowError("id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const user = new User("1", "", "email@domain.qq", "OmieCode");
    }).toThrowError("name is required");
  });

  it("should change name", () => {
    const user = new User("1", "User 1", "email@domain.qq", "OmieCode");
    user.changeName("User 2");
    expect(user.name).toBe("User 2");
  });

  it("should throw error when email is empty", () => {
    expect(() => {
      const user = new User("1", "User 1", "", "OmieCode");
    }).toThrowError("email is required");
  });

  it("should throw error when omie user is empty", () => {
    expect(() => {
      const user = new User("1", "User 1", "email", "");
    }).toThrowError("omie code is required");
  });

  it("should be valid", () => {
    const user = new User("1", "User 1", "email", "OmieCode");
    expect(user.valid).toBe(true);
  });
});
