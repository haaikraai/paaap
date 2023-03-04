export class User {

  constructor(public userId: string,
              public name: string,
              public role: 'worker' | 'manager',
              public costRate: number,
              public billingRate: number,
              public projects: string[],
              public loggedIn?: boolean) {}


  public static noUser() {
    return new User(
      '0000',
      'nobody',
      'worker',
      0,
      0,
      []
    )
  }
}
