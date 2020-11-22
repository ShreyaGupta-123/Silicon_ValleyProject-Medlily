class Welcome{
    constructor(){
        this.username=createInput("username");
        this.password=createInput("password");
        this.login=createButton("signup");
       
        
    }

    hide(){
    this.username.hide();
    this.password.hide();
    this.login.hide();
    
    }

    display(){
        this.username.position(displayWidth/2-100, displayHeight/2-60);
        this.password.position(displayWidth/2-100, displayHeight/2-30);
        this.login.position(displayWidth/2-100, displayHeight/2+30);
        this.login.mousePressed(()=>{
            this.login.hide();
            this.username.hide();
            this.password.hide();
            user=new User();
            user.name=this.username.value();
            user.password=this.password.value();
            user.update(name,this.password);
            medlily.visible=false;
            buffering.visible=true;
            state=1;
        });
    }
}