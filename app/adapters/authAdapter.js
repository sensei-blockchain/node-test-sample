class AuthAdapter {

  constructor() {
    if(new.target === AuthAdapter) {
      throw new TypeError("Base Class can't create object");
    }
  }
}

export default AuthAdapter;