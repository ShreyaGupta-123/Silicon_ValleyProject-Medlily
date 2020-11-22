class SelfTREATMENT{
    constructor(){
        this.back=createButton("BACK");
        this.column=createElement("h1");
        this.set1=createElement("h1");
        this.set2=createButton("********** Meditate *********");
        this.set3=createButton("Learn to cultivate Patience");
        this.set4=createButton("**** Work Management ***");
        this.set5=createButton("******* Being happy *******");
        this.set6=createButton("**** Change Life Style ****");

        this.med1=createElement("h1");
        this.med2=createElement("h4");
        this.med3=createElement("h4");
        this.med4=createElement("h4");
        this.med5=createElement("h4");

        this.ltcp1=createElement("h1");
        this.ltcp2=createElement("h4");
        this.ltcp3=createElement("h4");
        this.ltcp4=createElement("h4");
        this.ltcp5=createElement("h4");

        this.wm1=createElement("h1");
        this.wm2=createElement("h4");
        this.wm3=createElement("h4");
        this.wm4=createElement("h4");
        this.wm5=createElement("h4");

        this.bh1=createElement("h1");
        this.bh2=createElement("h4");
        this.bh3=createElement("h4");

        this.cls1=createElement("h1");
        this.cls2=createElement("h4");
        this.cls3=createElement("h4");
        this.cls4=createElement("h4");
        this.cls5=createElement("h4");

        this.ca1=createElement("h1")
    }
    hide(){
     this.back.hide();
     this.column.hide();
     this.set1.hide();
     this.set2.hide();
     this.set3.hide();
     this.set4.hide();
     this.set5.hide();
     this.set6.hide();
     this.med1.hide();
     this.med2.hide();
     this.med3.hide();
     this.med4.hide();
     this.med5.hide();

     this.ltcp1.hide();
     this.ltcp2.hide();
     this.ltcp3.hide();
     this.ltcp4.hide();
     this.ltcp5.hide();

     this.wm1.hide();
     this.wm2.hide();
     this.wm3.hide();
     this.wm4.hide();
     this.wm5.hide();

     this.bh1.hide();
     this.bh2.hide();
     this.bh3.hide();

     this.cls1.hide();
     this.cls2.hide();
     this.cls3.hide();
     this.cls4.hide();
     this.cls5.hide();

    }
    show(){
     this.back.show();
     this.column.show();
     this.set1.show();
     this.set2.show();
     this.set3.show();
     this.set4.show();
     this.set5.show();
     this.set6.show();
     this.med1.show();
     this.med2.show();
     this.med3.show();
     this.med4.show();
     this.med5.show();

     this.ltcp1.show();
     this.ltcp2.show();
     this.ltcp3.show();
     this.ltcp4.show();
     this.ltcp5.show();

     this.wm1.show();
     this.wm2.show();
     this.wm3.show();
     this.wm4.show();
     this.wm5.show();

     this.bh1.show();
     this.bh2.show();
     this.bh3.show();

     this.cls1.show();
     this.cls2.show();
     this.cls3.show();
     this.cls4.show();
     this.cls5.show();
    }
    display(){
        this.back.position(displayWidth-100,displayHeight/100);
        this.back.mousePressed(()=>{
            state=1;
            sts=0;
        });
        this.column.html("COLUMN");
        this.column.position(displayWidth/100,displayHeight/100+50);
        this.set1.html("WELCOME TO SELF TREATMENT SECTION");
        this.set1.position(displayWidth/2-100,displayHeight/2-100);
        this.set2.position(displayWidth/100,displayHeight/100+170);
        this.set3.position(displayWidth/100,displayHeight/100+200);
        this.set4.position(displayWidth/100,displayHeight/100+230);
        this.set5.position(displayWidth/100,displayHeight/100+260);
        this.set6.position(displayWidth/100,displayHeight/100+290);

        this.med1.html("Meditate");
        this.med1.position(displayWidth/2-150,displayHeight/100+50);

        this.med2.html("1. Find a peaceful and comfortable place.");
        this.med2.position(displayWidth/2-150,displayHeight/100+100);

        this.med3.html("2. Sit in a comfortable position and back upright. ");
        this.med3.position(displayWidth/2-150,displayHeight/100+130);

        this.med4.html("3. Close your eyes and focus at your breathing.");
        this.med4.position(displayWidth/2-150,displayHeight/100+160);

        this.med5.html("Meditation distracts your mind from jumbled thoughts which create stress. It also regulates blood pressure, and relaxe the mind as well as body.");
        this.med5.position(displayWidth/2-150,displayHeight/100+190);

        this.set2.mousePressed(()=>{
            sts=1;
        })

        
        this.ltcp1.html("Learn to cultivate Patience");
        this.ltcp1.position(displayWidth/2-150,displayHeight/100+50);

        this.ltcp2.html("1. Close eyes and Count till 10 when you get angry.");
        this.ltcp2.position(displayWidth/2-150,displayHeight/100+100);

        this.ltcp3.html("2. Take deep Breaths 4-5 times. ");
        this.ltcp3.position(displayWidth/2-150,displayHeight/100+130);

        this.ltcp4.html("3. Try to find all the common causes which make you angry");
        this.ltcp4.position(displayWidth/2-150,displayHeight/100+160);

        this.ltcp5.html("Cultivating patience keeps you calm all the time. This helps you to be stress-free");
        this.ltcp5.position(displayWidth/2-150,displayHeight/100+190);


        this.set3.mousePressed(()=>{
            sts=2;
        })

        this.wm1.html("Work Management");
        this.wm1.position(displayWidth/2-150,displayHeight/100+50);

        this.wm2.html("1. Make a list of your to-do work, and sort them according to deadlines and importance");
        this.wm2.position(displayWidth/2-150,displayHeight/100+100);

        this.wm3.html("2. Complete your important work with shorter deadlines before others. ");
        this.wm3.position(displayWidth/2-150,displayHeight/100+130);

        this.wm4.html("3. Plan what to do the next day, a night before");
        this.wm4.position(displayWidth/2-150,displayHeight/100+160);

        this.wm5.html("When work is properly managed, less work gets piled up, this help you to stay stress-free.");
        this.wm5.position(displayWidth/2-150,displayHeight/100+190);

        this.set4.mousePressed(()=>{
            sts=3;
        })

        this.bh1.html("Being Happy");
        this.bh1.position(displayWidth/2-150,displayHeight/100+50);

        this.bh2.html("1. Every night you sleep, think that next day would be happier.");
        this.bh2.position(displayWidth/2-150,displayHeight/100+100);

        this.bh3.html("2. Spend more time with your friends and family ");
        this.bh3.position(displayWidth/2-150,displayHeight/100+130);

        this.set5.mousePressed(()=>{
            sts=4;
        })

        this.cls1.html("Change Lifestyle");
        this.cls1.position(displayWidth/2-150,displayHeight/100+50);

        this.cls2.html("1. Specify your sleeping time and waking time");
        this.cls2.position(displayWidth/2-150,displayHeight/100+100);

        this.cls3.html("2. Exercise Regularly");
        this.cls3.position(displayWidth/2-150,displayHeight/100+130);

        this.cls4.html("3. Brush and Bath daily ");
        this.cls4.position(displayWidth/2-150,displayHeight/100+160);

        this.cls5.html("Living a healthy life keeps mind well.");
        this.cls5.position(displayWidth/2-150,displayHeight/100+190);

        this.set6.mousePressed(()=>{
            sts=5;
        })
    }
}