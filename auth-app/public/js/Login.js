class Login extends Api {
    constructor() {
        super();
    }
    
    static url = 'http://localhost:3000'

    static auth() {
        return super.get(this.url + `/auth`);
    }
}
