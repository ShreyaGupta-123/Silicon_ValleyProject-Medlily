class Takeatest{
    constructor(){
     this.yes=createButton('yes');
     this.no=createButton('no');
     this.backs=createButton('BACK');
     this.exb=createButton('extremely bad');
     this.bad=createButton('Bad');
     this.fine=createButton('fine');
     this.good=createButton('good');
     this.exg=createButton('extremely good');

     this.quest1=createElement('h2');
     this.quest2=createElement('h2');
     this.quest3=createElement('h2');
     this.quest4=createElement('h2');
     this.quest5=createElement('h2');

     this.result1=createElement('h1');
     this.result2=createElement('h1');
     this.result3=createElement('h1');
     this.result4=createElement('h1');
     this.result5=createElement('h1');
    
    }
    
    hide(){
     this.yes.hide();
     this.no.hide();
     this.backs.hide();
     this.exb.hide();
     this.bad.hide();
     this.fine.hide();
     this.good.hide();
     this.exg.hide();

     this.quest1.hide();
     this.quest2.hide();
     this.quest3.hide();
     this.quest4.hide();
     this.quest5.hide();

     this.result1.hide();
     this.result2.hide();
     this.result3.hide();
     this.result4.hide();
     this.result5.hide();

    }

    show(){
     this.yes.show();
     this.no.show();
     this.backs.show();
     this.exb.show();
     this.bad.show();
     this.fine.show();
     this.good.show();
     this.exg.show();

     this.quest1.show();
     this.quest2.show();
     this.quest3.show();
     this.quest4.show();
     this.quest5.show();

     this.result1.show();
     this.result2.show();
     this.result3.show();
     this.result4.show();
     this.result5.show();
    }

    display(){
     this.yes.position(displayWidth/2-40,displayHeight/2);
     this.no.position(displayWidth/2+40,displayHeight/2);
     this.backs.position(displayWidth-100,displayHeight/100);
     this.exb.position(displayWidth/2-200,displayHeight/2);
     this.bad.position(displayWidth/2-90,displayHeight/2);
     this.fine.position(displayWidth/2-40,displayHeight/2);
     this.good.position(displayWidth/2+10,displayHeight/2);
     this.exg.position(displayWidth/2+70,displayHeight/2);

     this.quest1.html("How was your mood for the past 3 weeks?");
     this.quest1.position(displayWidth/2-200,displayHeight/2-200);

     this.quest2.html("How was your sleeping pattern for the last 3 weeks?");
     this.quest2.position(displayWidth/2-200,displayHeight/2-200);

     this.quest3.html("Do you feel helpless at times?");
     this.quest3.position(displayWidth/2-200,displayHeight/2-200);

     this.quest4.html("How much have you been liking your profession/hobby for past few months?");
     this.quest4.position(displayWidth/2-200,displayHeight/2-200);

     this.quest5.html("Do you think you have common mental disorders?");
     this.quest5.position(displayWidth/2-200,displayHeight/2-200);

     this.result1.html("CHEERS!!! You're totally alright! ");
     this.result1.position(displayWidth/2-200,displayHeight/2-200);

     this.result2.html("You're lively, happy, but you can be happier, Try staying more calm!");
     this.result2.position(displayWidth/2-200,displayHeight/2-200);

     this.result3.html("You're sincere, but serious, this can slowly affect your work, Try to be happier!");
     this.result3.position(displayWidth/2-200,displayHeight/2-200);

     this.result4.html("You work stressfully, take a break and relax a little bit.");
     this.result4.position(displayWidth/2-200,displayHeight/2-200);

     this.result5.html("NO NEED TO BE SAD! You're totally alright, keep a smile, relax and be happy");
     this.result5.position(displayWidth/2-200,displayHeight/2-200);
     if(quest===1){
         this.quest1.show();
         this.quest2.hide();
         this.quest3.hide();
         this.quest4.hide();
         this.quest5.hide();
         this.yes.hide();
         this.no.hide();
          this.exb.mousePressed(()=>{
            quest=2
          });
          this.bad.mousePressed(()=>{
            quest=2
          });
          this.fine.mousePressed(()=>{
            quest=2
          });
          this.good.mousePressed(()=>{
            quest=2
          });
          this.exg.mousePressed(()=>{
            quest=2
          });

     }
          if(quest===2){
            this.quest1.hide();
            this.quest2.show();
            this.quest3.hide();
            this.quest4.hide();
            this.quest5.hide();
            this.yes.hide();
            this.no.hide();
             this.exb.mousePressed(()=>{
               quest=3
             });
             this.bad.mousePressed(()=>{
               quest=3
             });
             this.fine.mousePressed(()=>{
               quest=3
             });
             this.good.mousePressed(()=>{
               quest=3
             });
             this.exg.mousePressed(()=>{
               quest=3
             });
        }

        if(quest===3){
            this.quest1.hide();
            this.quest2.hide();
            this.quest3.show();
            this.quest4.hide();
            this.quest5.hide();

            this.exb.hide();
            this.bad.hide();
            this.fine.hide();
            this.good.hide();
            this.exg.hide();
            
             this.yes.mousePressed(()=>{
               quest=4
             });
             this.yes.mousePressed(()=>{
               quest=4
             });
             
        }

        if(quest===4){
            this.quest1.hide();
            this.quest2.hide();
            this.quest3.hide();
            this.quest4.show();
            this.quest5.hide();
            this.yes.hide();
            this.no.hide();
             this.exb.mousePressed(()=>{
               quest=5
             });
             this.bad.mousePressed(()=>{
               quest=5
             });
             this.fine.mousePressed(()=>{
               quest=5
             });
             this.good.mousePressed(()=>{
               quest=5
             });
             this.exg.mousePressed(()=>{
               quest=5
             });
        }

        if(quest===5){
            this.quest1.hide();
            this.quest2.hide();
            this.quest3.show();
            this.quest4.hide();
            this.quest5.hide();

            this.exb.hide();
            this.bad.hide();
            this.fine.hide();
            this.good.hide();
            this.exg.hide();
            
             this.yes.mousePressed(()=>{
                 quest=6
               score=score+5
             });
             this.no.mousePressed(()=>{
                 quest=6
               score=score+0
             });
             
        }

        if(quest===6){
            this.yes.hide();
            this.no.hide();
            this.exb.hide();
            this.bad.hide();
            this.fine.hide();
            this.good.hide();
            this.exg.hide();
       
            this.quest1.hide();
            this.quest2.hide();
            this.quest3.hide();
            this.quest4.hide();
            this.quest5.hide();   

            if(score>=0 && score<=5){
                this.result1.show();
                this.result2.hide();
                this.result3.hide();
                this.result4.hide();
                this.result5.hide();
                emo1.visible=true;
            }else if(score>=5 && score<=10){
                this.result1.hide();
                this.result2.show();
                this.result3.hide();
                this.result4.hide();
                this.result5.hide();
                emo2.visible=true;
            }else if(score>=10 && score<=15){
                this.result1.hide();
                this.result2.hide();
                this.result3.show();
                this.result4.hide();
                this.result5.hide();
                emo3.visible=true;
            }else if(score>=15 && score<=20){
                this.result1.hide();
                this.result2.hide();
                this.result3.hide();
                this.result4.show();
                this.result5.hide();
                options.doc.show();
                options.st.show();
                emo4.visible=true;
            }else if(score>=20){
                this.result1.hide();
                this.result2.hide();
                this.result3.hide();
                this.result4.hide();
                this.result5.show();
                options.doc.show();
                options.st.show();
                emo4.visible=true;
            }
            options.doc.mousePressed(()=>{
              quest=1
              state=4
              score=0
            })

            options.st.mousePressed(()=>{
              quest=1
              state=5
              score=0
            })
         this.backs.mousePressed(()=>{
           state=1
           quest=1
           score=0
        });
    }

}

}