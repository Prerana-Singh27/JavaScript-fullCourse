const user = {
    username: "shruti",//properties
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username, loginCount, isLoggedIn){
      this.username = username;
      this.loginCount = loginCount;
      this.isLoggedIn = isLoggedIn;

      //return this
}

const userOne = new  User("sh",12,true)
const userTwo =  new User("shr",11,false)
console.log(userOne)