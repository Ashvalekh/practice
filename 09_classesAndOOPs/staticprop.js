class User {
    constructor(username){
        this.username = username
    }
    // logMe ek method h vo method kya karta h hum isme daalenge
    logMe(){
       console.log(`Username: ${this.username}`); 
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())