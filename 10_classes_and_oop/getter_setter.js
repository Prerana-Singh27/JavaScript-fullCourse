class User {
    constructor(email,password){
        this.email =  email;
        this.password = password
    }

    get email (){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value

    }

    get password(){
        return `${this._password}shruti`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@itgmail.com","ghj")
console.log(hitesh.email);