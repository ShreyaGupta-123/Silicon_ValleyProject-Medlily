class Knowmore{
    constructor(){
        this.title1=createElement('h1')
        this.information1=createElement('h4');
        this.title2=createElement('h1');
        this.information2=createElement('h4');
        this.title3=createElement('h1');
        this.information3=createElement('h4');
        this.back=createButton('BACK');
    }

    hide(){
       this.title1.hide();
       this.information1.hide();
       this.title2.hide();
       this.information2.hide();
       this.title3.hide();
       this.information3.hide();
       this.back.hide();
    }

    show(){
        this.title1.show();
        this.information1.show();
        this.title2.show();
        this.information2.show();
        this.title3.show();
        this.information3.show();
        this.back.show();   
    }

    display(){
        this.title1.html('About App');
        this.title1.position(displayWidth/100,displayHeight/100);

        this.information1.html('Sometimes life becomes quite stressful. In certain conditions this stress ends in a few days or weeks, But most of them last for longer period of time. This app is to help people to get them out of the anxiety and depression for their good mental health.')
        this.information1.position(displayWidth/100,displayHeight/100+50);

        this.title2.html("Why is Mental Health essential?");
        this.title2.position(displayWidth/100,displayHeight/100+100);

        this.information2.html('During this pandemic, people have suffered from a very high level stress. With the physical well-being, mental well-being is also important. According to WHO, approximately 1 in every 20 people suffer from common mental disorders, such as depression and anxiety. This has become a common problem in the youth. Among adults, the highest chances of depression occurs between 18-25 years. The median of people suffering from such common mental disorders is 32.5 years. Though being highly curable, only a few percent of people diagonised with these disorders receive treatments. For the better functioning of the body, mental health is as essential as physical health. The better the people would work, the quality of work would automatically increase for a better future.');
        this.information2.position(displayWidth/100,displayHeight/100+150);

        this.title3.html("How to use this app?");
        this.title3.position(displayWidth/100,displayHeight/100+300);

        this.information3.html("This app has 4 facilities-    take a test: Take a quick informal test to know about your mental health.     Consult a specialist: Select continent, country, state and city and find doctors and specialists to consult if you have any complications.   Self treatment: Practice some common mental well-being exercises.");

        this.information3.position(displayWidth/100,displayHeight/100+350);

        this.back.position(displayWidth-100,displayHeight/100);
        this.back.mousePressed(()=>{
           
            state=1;

        });

        
    }

    }
