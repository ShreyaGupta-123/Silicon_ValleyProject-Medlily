class Options{
    constructor(){
        this.greeting=createElement('h1');
        this.info=createElement('h4');
        this.takeatest=createButton('take a test');
        this.doc=createButton('Consult a specialist');
        this.st=createButton('Self treatment');
        this.km=createButton('Know More')
    }

    hide(){
        this.greeting.hide();
        this.info.hide();
        this.takeatest.hide();
        this.doc.hide();
        this.st.hide();
        this.km.hide();
    }

    show(){
        this.greeting.show();
        this.info.show();
        this.takeatest.show();
        this.doc.show();
        this.st.show();
        this.km.show();
      
    }

    display(){
        this.greeting.html("Welcome "+user.name);
        this.greeting.position(80,50);
        this.info.position(80,90);
        this.info.html("Here you'll find some information about your mental health and cures");
        this.takeatest.position(displayWidth/4-40,displayHeight/2-30);
        this.doc.position(displayWidth/4+185,displayHeight/2-30);
        this.st.position(displayWidth/4+450,displayHeight/2-30);
        this.km.position(displayWidth/4+700,displayHeight/2-30)
        test.visible=true;
        consult.visible=true;
        selftreat.visible=true;
        knowmore.visible=true;
        this.km.mousePressed(()=>{
            this.greeting.hide();
            this.info.hide();
            this.takeatest.hide();
            this.doc.hide();
            this.st.hide();
            this.km.hide();
            state=2;
        });

        this.takeatest.mousePressed(()=>{
            this.greeting.hide();
            this.info.hide();
            this.takeatest.hide();
            this.doc.hide();
            this.st.hide();
            this.km.hide();
            state=3;
        });

        this.doc.mousePressed(()=>{
            this.greeting.hide();
            this.info.hide();
            this.takeatest.hide();
            this.doc.hide();
            this.st.hide();
            this.km.hide();
            state=4;
        });
       
        this.st.mousePressed(()=>{
            this.greeting.hide();
            this.info.hide();
            this.takeatest.hide();
            this.doc.hide();
            this.st.hide();
            this.km.hide();
            state=5;
        });
        
    }
    
}