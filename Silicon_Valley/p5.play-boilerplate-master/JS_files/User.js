class User{
    constructor(){
        this.name=null
        this.password=null
        
    }

    update(name,password){
        var userIndex="users/user"
        database.ref(userIndex).set({
            name:this.name,
            password:this.password
        })
        }

  
}