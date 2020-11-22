var database;
var medlilyImage;
var loginPage;
var medlily;
var buffering, bufferingImage;
var user;
var options;
var state=0;
var test,testIMG;
var consult,consultImg;
var selftreat,selftreatImg;
var knowmore,knowmoreImg;
var concepts;
var selftreatment;
var tatest;
var specialist;
var score=0;
var quest=1;
var selection=0;
var hospital=0;
var sts=0;
var emo1,emo1img;
var emo2,emo2img;
var emo3,emo3img;
var emo4,emo4img;
var map1,map1img;
var map2,map2img;
var map3,map3img;
var map4,map4img;
var map5,map5img;


function preload(){
  medlilyImage=loadImage("medlily.png");
  bufferingImage=loadImage("buffering.png");
  testIMG=loadImage("test.png");
  consultImg=loadImage("consult.png");
  selftreatImg=loadImage("selftreat.png");
  knowmoreImg=loadImage("knowmore.png");
  emo1img=loadImage("emo1.png");
  emo2img=loadImage("emo2.png");
  emo3img=loadImage("emo3.png");
  emo4img=loadImage("emo4.png");

  map1img=loadImage("map1.png");
  map2img=loadImage("map2.png");
  map3img=loadImage("map3.png");
  map4img=loadImage("map4.png");
  map5img=loadImage("map5.png");

}


function setup() {
  createCanvas(displayWidth-20,displayHeight-140);
  database=firebase.database();

 medlily=createSprite(displayWidth/2-10,displayHeight/2-120,20,20);
 medlily.addImage(medlilyImage);
 medlily.scale=0.5

 buffering=createSprite(displayWidth/2-10,displayHeight/2-120,20,20);
 buffering.addImage(bufferingImage);
 buffering.scale=0.2
 buffering.visible=false;

 test=createSprite(displayWidth/4,displayHeight/2-120,20,20);
 test.addImage(testIMG);
 test.visible=false;

 consult=createSprite(displayWidth/4+250,displayHeight/2-120,20,20);
 consult.addImage(consultImg);
 consult.visible=false;
 
 selftreat=createSprite(displayWidth/4+500,displayHeight/2-120,20,20);
 selftreat.addImage(selftreatImg);
 selftreat.visible=false;

 knowmore=createSprite(displayWidth/4+750,displayHeight/2-120,20,20);
 knowmore.addImage(knowmoreImg);
 knowmore.visible=false;
 
emo1=createSprite(displayWidth/2,displayHeight/2);
emo1.addImage(emo1img);
emo1.visible=false;

emo2=createSprite(displayWidth/2,displayHeight/2);
emo2.addImage(emo2img);
emo2.visible=false;

emo3=createSprite(displayWidth/2,displayHeight/2);
emo3.addImage(emo3img);
emo3.visible=false;

emo4=createSprite(displayWidth/2+70,displayHeight/2);
emo4.addImage(emo4img);
emo4.visible=false;

map1=createSprite(displayWidth/2+250,displayHeight/2);
map1.addImage(map1img);
map1.visible=false;
map1.scale=0.7

map2=createSprite(displayWidth/2+250,displayHeight/2);
map2.addImage(map2img);
map2.visible=false;
map2.scale=0.7


map3=createSprite(displayWidth/2+250,displayHeight/2);
map3.addImage(map3img);
map3.visible=false;
map3.scale=0.7


map4=createSprite(displayWidth/2+300,displayHeight/2);
map4.addImage(map4img);
map4.visible=false;
map4.scale=0.7


map5=createSprite(displayWidth/2+250,displayHeight/2);
map5.addImage(map5img);
map5.visible=false;
map5.scale=0.7


 concepts=new Knowmore();
 options=new Options();
 tatest=new Takeatest();
loginPage=new Welcome();
specialist=new ConaDoc();
selftreatment=new SelfTREATMENT();
}

function draw() {
 background(60,0,60);
 loginPage.display();

  drawSprites();

if(state===0){
  options.greeting.hide();
  options.info.hide();
  options.takeatest.hide();
  options.doc.hide();
  options.st.hide();
  options.km.hide();

  concepts.title1.hide();
  concepts.information1.hide();
  concepts.title2.hide();
  concepts.information2.hide();
  concepts.title3.hide();
  concepts.information3.hide();
  concepts.back.hide();

  tatest.yes.hide();
  tatest.no.hide();
  tatest.backs.hide();
  tatest.exb.hide();
  tatest.bad.hide();
  tatest.fine.hide();
  tatest.good.hide();
   tatest.exg.hide();

   tatest.quest1.hide();
   tatest.quest2.hide();
   tatest.quest3.hide();
   tatest.quest4.hide();
   tatest.quest5.hide();

   tatest.result1.hide();
   tatest.result2.hide();
   tatest.result3.hide();
   tatest.result4.hide();
   tatest.result5.hide();

   specialist.disclaimer.hide();
   specialist.backbutton.hide();
   specialist.region.hide();
   specialist.place1.hide();
   specialist.hos1.hide(); 

    specialist.hos2.hide();  
    specialist.hos3.hide();  
    specialist.hos4.hide();  
    specialist.hos5.hide();  

    specialist.hos1data1.hide();
    specialist.hos1data2.hide();
    specialist.hos1data3.hide();
    specialist.hos1data4.hide();
    specialist.hos1data5.hide();
    specialist.hos1data6.hide();

    specialist.hos2data1.hide();
    specialist.hos2data2.hide();
    specialist.hos2data3.hide();
    specialist.hos2data4.hide();
    specialist.hos2data5.hide();
    specialist.hos2data6.hide();

    specialist.hos3data1.hide();
    specialist.hos3data2.hide();
    specialist.hos3data3.hide();
    specialist.hos3data4.hide();
    specialist.hos3data5.hide();
    specialist.hos3data6.hide();

    specialist.hos4data1.hide();
    specialist.hos4data2.hide();
    specialist.hos4data3.hide();
    specialist.hos4data4.hide();
    specialist.hos4data5.hide();
    specialist.hos4data6.hide();
    
    specialist.hos5data1.hide();
    specialist.hos5data2.hide();
    specialist.hos5data3.hide();
    specialist.hos5data4.hide();
    specialist.hos5data5.hide();
    specialist.hos5data6.hide();

    selftreatment.back.hide();
    selftreatment.column.hide();
    selftreatment.set1.hide();
    selftreatment.set2.hide();
    selftreatment.set3.hide();
    selftreatment.set4.hide();
    selftreatment.set5.hide();
    selftreatment.set6.hide();

    selftreatment.med1.hide();
    selftreatment.med2.hide();
    selftreatment.med3.hide();
    selftreatment.med4.hide();
    selftreatment.med5.hide();

    selftreatment.ltcp1.hide();
    selftreatment.ltcp2.hide();
    selftreatment.ltcp3.hide();
    selftreatment.ltcp4.hide();
    selftreatment.ltcp5.hide();

    selftreatment.wm1.hide();
    selftreatment.wm2.hide();
    selftreatment.wm3.hide();
    selftreatment.wm4.hide();
    selftreatment.wm5.hide();

    selftreatment.bh1.hide();
    selftreatment.bh2.hide();
    selftreatment.bh3.hide();

    selftreatment.cls1.hide();
    selftreatment.cls2.hide();
    selftreatment.cls3.hide();
    selftreatment.cls4.hide();
    selftreatment.cls5.hide();

    emo1.visible=false;
    emo2.visible=false;
    emo3.visible=false;
    emo4.visible=false;

     map1.visible=false;
     map2.visible=false;
     map3.visible=false;
     map4.visible=false;
     map5.visible=false;

}



  
  if(state===1){
    buffering.visible=false;
    options.display();
    options.greeting.show();
    options.info.show();
    options.takeatest.show();
    options.doc.show();
    options.st.show();
    options.km.show();

    concepts.title1.hide();
    concepts.information1.hide();
    concepts.title2.hide();
    concepts.information2.hide();
    concepts.title3.hide();
    concepts.information3.hide();
    concepts.back.hide();

    tatest.yes.hide();
    tatest.no.hide();
    tatest.backs.hide();
    tatest.exb.hide();
    tatest.bad.hide();
    tatest.fine.hide();
    tatest.good.hide();
     tatest.exg.hide();

     tatest.quest1.hide();
     tatest.quest2.hide();
     tatest.quest3.hide();
     tatest.quest4.hide();
     tatest.quest5.hide();

     tatest.result1.hide();
     tatest.result2.hide();
     tatest.result3.hide();
     tatest.result4.hide();
     tatest.result5.hide();

     specialist.disclaimer.hide();
     specialist.backbutton.hide();
     specialist.region.hide();
     specialist.place1.hide();

     specialist.hos1.hide();  
      specialist.hos2.hide();  
      specialist.hos3.hide();  
      specialist.hos4.hide();  
      specialist.hos5.hide();  

      specialist.hos1data1.hide();
      specialist.hos1data2.hide();
      specialist.hos1data3.hide();
      specialist.hos1data4.hide();
      specialist.hos1data5.hide();
      specialist.hos1data6.hide();

      specialist.hos2data1.hide();
      specialist.hos2data2.hide();
      specialist.hos2data3.hide();
      specialist.hos2data4.hide();
      specialist.hos2data5.hide();
      specialist.hos2data6.hide();

      specialist.hos3data1.hide();
      specialist.hos3data2.hide();
      specialist.hos3data3.hide();
      specialist.hos3data4.hide();
      specialist.hos3data5.hide();
      specialist.hos3data6.hide();

      specialist.hos4data1.hide();
      specialist.hos4data2.hide();
      specialist.hos4data3.hide();
      specialist.hos4data4.hide();
      specialist.hos4data5.hide();
      specialist.hos4data6.hide();
      
      specialist.hos5data1.hide();
      specialist.hos5data2.hide();
      specialist.hos5data3.hide();
      specialist.hos5data4.hide();
      specialist.hos5data5.hide();
      specialist.hos5data6.hide();

      selftreatment.back.hide();
      selftreatment.column.hide();
      selftreatment.set1.hide();
      selftreatment.set2.hide();
    selftreatment.set3.hide();
    selftreatment.set4.hide();
    selftreatment.set5.hide();
    selftreatment.set6.hide();

    selftreatment.med1.hide();
    selftreatment.med2.hide();
    selftreatment.med3.hide();
    selftreatment.med4.hide();
    selftreatment.med5.hide();

    selftreatment.ltcp1.hide();
    selftreatment.ltcp2.hide();
    selftreatment.ltcp3.hide();
    selftreatment.ltcp4.hide();
    selftreatment.ltcp5.hide();

    selftreatment.wm1.hide();
    selftreatment.wm2.hide();
    selftreatment.wm3.hide();
    selftreatment.wm4.hide();
    selftreatment.wm5.hide();

    selftreatment.bh1.hide();
    selftreatment.bh2.hide();
    selftreatment.bh3.hide();

    selftreatment.cls1.hide();
    selftreatment.cls2.hide();
    selftreatment.cls3.hide();
    selftreatment.cls4.hide();
    selftreatment.cls5.hide();

    emo1.visible=false;
    emo2.visible=false;
    emo3.visible=false;
    emo4.visible=false;

    map1.visible=false;
    map2.visible=false;
    map3.visible=false;
    map4.visible=false;
    map5.visible=false;
  }

if(state===2){
concepts.display();
test.visible=false;
consult.visible=false;
selftreat.visible=false;
knowmore.visible=false;
concepts.title1.show();
concepts.information1.show();
concepts.title2.show();
concepts.information2.show();
concepts.title3.show();
concepts.information3.show();
concepts.back.show();  
}

if(state===3){
  test.visible=false;
  consult.visible=false;
  selftreat.visible=false;
  knowmore.visible=false;
  console.log(score) ;
  tatest.display();
  tatest.yes.show();
     tatest.no.show();
     tatest.backs.show();
     tatest.exb.show();
     tatest.bad.show();
     tatest.fine.show();
     tatest.good.show();
     tatest.exg.show();
     tatest.quest1.show();
     tatest.quest2.show();
     tatest.quest3.show();
     tatest.quest4.show();
     tatest.quest5.show();
     tatest.result1.show();
     tatest.result2.show();
     tatest.result3.show();
     tatest.result4.show();
     tatest.result5.show();
     tatest.backs.mousePressed(()=>{
      state=1
      quest=1
      score=0
   });
     if(quest===1){
      tatest.quest1.show();
      tatest.quest2.hide();
      tatest.quest3.hide();
      tatest.quest4.hide();
      tatest.quest5.hide();
      tatest.result1.hide();
      tatest.result2.hide();
      tatest.result3.hide();
      tatest.result4.hide();
      tatest.result5.hide();
      tatest.yes.hide();
      tatest.no.hide();
      tatest.exb.mousePressed(()=>{
        quest=2
        score=score+5
       });
       tatest.bad.mousePressed(()=>{
        quest=2
        score=score+4
       });
       tatest.fine.mousePressed(()=>{
        quest=2
        score=score+3
       });
       tatest.good.mousePressed(()=>{
        quest=2
        score=score+2
       });
       tatest.exg.mousePressed(()=>{
         quest=2
         score=score+1
       });
  }

  if(quest===2){
    tatest.quest1.hide();
    tatest.quest2.show();
    tatest.quest3.hide();
    tatest.quest4.hide();
    tatest.quest5.hide();
    tatest.yes.hide();
    tatest.no.hide();
    tatest.result1.hide();
    tatest.result2.hide();
    tatest.result3.hide();
    tatest.result4.hide();
    tatest.result5.hide();
    tatest.exb.mousePressed(()=>{
       quest=3
       score=score+5
     });
     tatest.bad.mousePressed(()=>{
       quest=3
       score=score+4
     });
     tatest.fine.mousePressed(()=>{
       quest=3
       score=score+3
     });
     tatest.good.mousePressed(()=>{
       quest=3
       score=score+2
     });
     tatest.exg.mousePressed(()=>{
       quest=3
       score=score+1
     });
}
if(quest===3){
  tatest.quest1.hide();
  tatest.quest2.hide();
  tatest.quest3.show();
  tatest.quest4.hide();
  tatest.quest5.hide();
  tatest.result1.hide();
  tatest.result2.hide();
  tatest.result3.hide();
  tatest.result4.hide();
  tatest.result5.hide();
  tatest.exb.hide();
  tatest.bad.hide();
  tatest.fine.hide();
  tatest.good.hide();
  tatest.exg.hide();
  
  tatest.no.mousePressed(()=>{
     quest=4
     score=score+0
   });
   tatest.yes.mousePressed(()=>{
     quest=4
     score=score+5
   });
 
}

if(quest===4){
  tatest.quest1.hide();
  tatest.quest2.hide();
  tatest.quest3.hide();
  tatest.quest4.show();
  tatest.quest5.hide();
  tatest.result1.hide();
  tatest.result2.hide();
  tatest.result3.hide();
  tatest.result4.hide();
  tatest.result5.hide();
  tatest.yes.hide();
  tatest.no.hide();
   tatest.exb.mousePressed(()=>{
     quest=5
     score=score+5
   });
   tatest.bad.mousePressed(()=>{
     quest=5
     score=score+4
   });
   tatest.fine.mousePressed(()=>{
     quest=5
     score=score+3
   });
   tatest.good.mousePressed(()=>{
     quest=5
     score=score+2
   });
   tatest.exg.mousePressed(()=>{
     quest=5
     score=score+1
   });
  }

  if(quest===5){
    tatest.quest1.hide();
    tatest.quest2.hide();
    tatest.quest3.hide();
    tatest.quest4.hide();
    tatest.quest5.show();
    tatest.result1.hide();
    tatest.result2.hide();
    tatest.result3.hide();
    tatest.result4.hide();
    tatest.result5.hide();
    tatest.exb.hide();
    tatest.bad.hide();
    tatest.fine.hide();
    tatest.good.hide();
    tatest.exg.hide();
    
     tatest.yes.mousePressed(()=>{
       quest=6
       score=score+5
     });
     tatest.no.mousePressed(()=>{
       quest=6
       score=score+0
     });
     
}
if(quest===6){
  tatest.yes.hide();
  tatest.no.hide();
  tatest.exb.hide();
  tatest.bad.hide();
  tatest.fine.hide();
  tatest.good.hide();
  tatest.exg.hide();

  tatest.quest1.hide();
  tatest.quest2.hide();
  tatest.quest3.hide();
  tatest.quest4.hide();
  tatest.quest5.hide();   

  if(score>=0 && score<=5){
      tatest.result1.show();
      tatest.result2.hide();
      tatest.result3.hide();
      tatest.result4.hide();
      tatest.result5.hide();
  }else if(score>=5 && score<=10){
      tatest.result1.hide();
      tatest.result2.show();
      tatest.result3.hide();
      tatest.result4.hide();
      tatest.result5.hide();
  }else if(score>=10 && score<=15){
      tatest.result1.hide();
      tatest.result2.hide();
      tatest.result3.show();
      tatest.result4.hide();
      tatest.result5.hide();
  }else if(score>=15 && score<=20){
      tatest.result1.hide();
      tatest.result2.hide();
      tatest.result3.hide();
      tatest.result4.show();
      tatest.result5.hide();
  }else if(score>=20 && score<=25){
      tatest.result1.hide();
      tatest.result2.hide();
      tatest.result3.hide();
      tatest.result4.hide();
      tatest.result5.show();
  }
}

}
if(state===4){
  test.visible=false;
    consult.visible=false;
    selftreat.visible=false;
    knowmore.visible=false;
    specialist.display();
    specialist.disclaimer.show();
    specialist.backbutton.show();
    specialist.region.show();
    specialist.place1.hide();

      specialist.hos1data1.hide();
      specialist.hos1data2.hide();
      specialist.hos1data3.hide();
      specialist.hos1data4.hide();
      specialist.hos1data5.hide();
      specialist.hos1data6.hide();

      specialist.hos2data1.hide();
      specialist.hos2data2.hide();
      specialist.hos2data3.hide();
      specialist.hos2data4.hide();
      specialist.hos2data5.hide();
      specialist.hos2data6.hide();

      specialist.hos3data1.hide();
      specialist.hos3data2.hide();
      specialist.hos3data3.hide();
      specialist.hos3data4.hide();
      specialist.hos3data5.hide();
      specialist.hos3data6.hide();

      specialist.hos4data1.hide();
      specialist.hos4data2.hide();
      specialist.hos4data3.hide();
      specialist.hos4data4.hide();
      specialist.hos4data5.hide();
      specialist.hos4data6.hide();

      specialist.hos5data1.hide();
      specialist.hos5data2.hide();
      specialist.hos5data3.hide();
      specialist.hos5data4.hide();
      specialist.hos5data5.hide();
      specialist.hos5data6.hide();

      emo1.visible=false;
      emo2.visible=false;
      emo3.visible=false;
      emo4.visible=false;

      tatest.yes.hide();
      tatest.no.hide();
      tatest.backs.hide();
      tatest.exb.hide();
      tatest.bad.hide();
      tatest.fine.hide();
      tatest.good.hide();
      tatest.exg.hide();
 
      tatest.quest1.hide();
      tatest.quest2.hide();
      tatest.quest3.hide();
      tatest.quest4.hide();
      tatest.quest5.hide();
 
      tatest.result1.hide();
      tatest.result2.hide();
      tatest.result3.hide();
      tatest.result4.hide();
      tatest.result5.hide();
 
      options.doc.hide();
      options.st.hide();

    if(selection===1){
      specialist.place1.show();
     
    }
     
    if(selection===2){
      specialist.place1.show();
      specialist.hos1.show();  
      specialist.hos2.show();  
      specialist.hos3.show();  
      specialist.hos4.show();  
      specialist.hos5.show(); 

    }
    if(selection===3){
      if(hospital===1){
      specialist.hos1data1.show();
      specialist.hos1data2.show();
      specialist.hos1data3.show();
      specialist.hos1data4.show();
      specialist.hos1data5.show();
      specialist.hos1data6.show();

      specialist.place1.show();

      specialist.hos1.show();  
      specialist.hos2.show();  
      specialist.hos3.show();  
      specialist.hos4.show();  
      specialist.hos5.show();

      specialist.hos2data1.hide();
      specialist.hos2data2.hide();
      specialist.hos2data3.hide();
      specialist.hos2data4.hide();
      specialist.hos2data5.hide();
      specialist.hos2data6.hide();
     
      specialist.hos3data1.hide();
      specialist.hos3data2.hide();
      specialist.hos3data3.hide();
      specialist.hos3data4.hide();
      specialist.hos3data5.hide();
      specialist.hos3data6.hide(); 

      specialist.hos4data1.hide();
      specialist.hos4data2.hide();
      specialist.hos4data3.hide();
      specialist.hos4data4.hide();
      specialist.hos4data5.hide();
      specialist.hos4data6.hide();

      specialist.hos5data1.hide();
      specialist.hos5data2.hide();
      specialist.hos5data3.hide();
      specialist.hos5data4.hide();
      specialist.hos5data5.hide();
      specialist.hos5data6.hide();

      map1.visible=true;
      map2.visible=false;
      map3.visible=false;
      map4.visible=false;
      map5.visible=false;
      }
      if(hospital===2){
        specialist.hos2data1.show();
        specialist.hos2data2.show();
        specialist.hos2data3.show();
        specialist.hos2data4.show();
        specialist.hos2data5.show();
        specialist.hos2data6.show();

        specialist.place1.show();

        specialist.hos1.show();  
        specialist.hos2.show();  
        specialist.hos3.show();  
        specialist.hos4.show();  
        specialist.hos5.show(); 
        
      specialist.hos1data1.hide();
      specialist.hos1data2.hide();
      specialist.hos1data3.hide();
      specialist.hos1data4.hide();
      specialist.hos1data5.hide();
      specialist.hos1data6.hide();

      specialist.hos3data1.hide();
      specialist.hos3data2.hide();
      specialist.hos3data3.hide();
      specialist.hos3data4.hide();
      specialist.hos3data5.hide();
      specialist.hos3data6.hide();

      specialist.hos4data1.hide();
      specialist.hos4data2.hide();
      specialist.hos4data3.hide();
      specialist.hos4data4.hide();
      specialist.hos4data5.hide();
      specialist.hos4data6.hide();
      
      specialist.hos5data1.hide();
      specialist.hos5data2.hide();
      specialist.hos5data3.hide();
      specialist.hos5data4.hide();
      specialist.hos5data5.hide();
      specialist.hos5data6.hide();

      map1.visible=false;
      map2.visible=true;
      map3.visible=false;
      map4.visible=false;
      map5.visible=false;
        }
        if(hospital===3){
          specialist.hos3data1.show();
          specialist.hos3data2.show();
          specialist.hos3data3.show();
          specialist.hos3data4.show();
          specialist.hos3data5.show();
          specialist.hos3data6.show();

          specialist.place1.show();

          specialist.hos1.show();  
          specialist.hos2.show();  
          specialist.hos3.show();  
          specialist.hos4.show();  
          specialist.hos5.show(); 
          
        specialist.hos1data1.hide();
        specialist.hos1data2.hide();
        specialist.hos1data3.hide();
        specialist.hos1data4.hide();
        specialist.hos1data5.hide();
        specialist.hos1data6.hide();

        specialist.hos2data1.hide();
      specialist.hos2data2.hide();
      specialist.hos2data3.hide();
      specialist.hos2data4.hide();
      specialist.hos2data5.hide();
      specialist.hos2data6.hide();

      specialist.hos4data1.hide();
      specialist.hos4data2.hide();
      specialist.hos4data3.hide();
      specialist.hos4data4.hide();
      specialist.hos4data5.hide();
      specialist.hos4data6.hide();

      specialist.hos5data1.hide();
      specialist.hos5data2.hide();
      specialist.hos5data3.hide();
      specialist.hos5data4.hide();
      specialist.hos5data5.hide();
      specialist.hos5data6.hide();

      map1.visible=false;
      map2.visible=false;
      map3.visible=true;
      map4.visible=false;
      map5.visible=false;
          }

          if(hospital===4){
            specialist.hos4data1.show();
            specialist.hos4data2.show();
            specialist.hos4data3.show();
            specialist.hos4data4.show();
            specialist.hos4data5.show();
            specialist.hos4data6.show();
            specialist.place1.show();
            specialist.hos1.show();  
            specialist.hos2.show();  
            specialist.hos3.show();  
            specialist.hos4.show();  
            specialist.hos5.show(); 
            
          specialist.hos1data1.hide();
          specialist.hos1data2.hide();
          specialist.hos1data3.hide();
          specialist.hos1data4.hide();
          specialist.hos1data5.hide();
          specialist.hos1data6.hide();
  
          specialist.hos2data1.hide();
        specialist.hos2data2.hide();
        specialist.hos2data3.hide();
        specialist.hos2data4.hide();
        specialist.hos2data5.hide();
        specialist.hos2data6.hide();

        specialist.hos3data1.hide();
      specialist.hos3data2.hide();
      specialist.hos3data3.hide();
      specialist.hos3data4.hide();
      specialist.hos3data5.hide();
      specialist.hos3data6.hide();

      specialist.hos5data1.hide();
      specialist.hos5data2.hide();
      specialist.hos5data3.hide();
      specialist.hos5data4.hide();
      specialist.hos5data5.hide();
      specialist.hos5data6.hide();

      map1.visible=false;
      map2.visible=false;
      map3.visible=false;
      map4.visible=true;
      map5.visible=false;
            }
      
            if(hospital===5){
              specialist.hos5data1.show();
              specialist.hos5data2.show();
              specialist.hos5data3.show();
              specialist.hos5data4.show();
              specialist.hos5data5.show();
              specialist.hos5data6.show();

              specialist.place1.show();
              specialist.hos1.show();  
              specialist.hos2.show();  
              specialist.hos3.show();  
              specialist.hos4.show();  
              specialist.hos5.show(); 
              
            specialist.hos1data1.hide();
            specialist.hos1data2.hide();
            specialist.hos1data3.hide();
            specialist.hos1data4.hide();
            specialist.hos1data5.hide();
            specialist.hos1data6.hide();
    
            specialist.hos2data1.hide();
          specialist.hos2data2.hide();
          specialist.hos2data3.hide();
          specialist.hos2data4.hide();
          specialist.hos2data5.hide();
          specialist.hos2data6.hide();
  
          specialist.hos3data1.hide();
        specialist.hos3data2.hide();
        specialist.hos3data3.hide();
        specialist.hos3data4.hide();
        specialist.hos3data5.hide();
        specialist.hos3data6.hide();
  
        specialist.hos4data1.hide();
        specialist.hos4data2.hide();
        specialist.hos4data3.hide();
        specialist.hos4data4.hide();
        specialist.hos4data5.hide();
        specialist.hos4data6.hide();
  

        map1.visible=false;
        map2.visible=false;
        map3.visible=false;
        map4.visible=false;
        map5.visible=true;
              }
    }
  }

  if(state===5){
    test.visible=false;
    consult.visible=false;
    selftreat.visible=false;
    knowmore.visible=false;

    selftreatment.display();

    selftreatment.back.show();
    selftreatment.column.show();

    selftreatment.set1.show();
    selftreatment.set2.show();
    selftreatment.set3.show();
    selftreatment.set4.show();
    selftreatment.set5.show();
    selftreatment.set6.show();

    selftreatment.med1.hide();
    selftreatment.med2.hide();
    selftreatment.med3.hide();
    selftreatment.med4.hide();
    selftreatment.med5.hide();

    emo1.visible=false;
    emo2.visible=false;
    emo3.visible=false;
    emo4.visible=false;

    selftreatment.ltcp1.hide();
    selftreatment.ltcp2.hide();
    selftreatment.ltcp3.hide();
    selftreatment.ltcp4.hide();
    selftreatment.ltcp5.hide();

    selftreatment.wm1.hide();
    selftreatment.wm2.hide();
    selftreatment.wm3.hide();
    selftreatment.wm4.hide();
    selftreatment.wm5.hide();

    selftreatment.bh1.hide();
    selftreatment.bh2.hide();
    selftreatment.bh3.hide();

    selftreatment.cls1.hide();
    selftreatment.cls2.hide();
    selftreatment.cls3.hide();
    selftreatment.cls4.hide();
    selftreatment.cls5.hide();

    tatest.yes.hide();
    tatest.no.hide();
    tatest.backs.hide();
    tatest.exb.hide();
    tatest.bad.hide();
    tatest.fine.hide();
    tatest.good.hide();
    tatest.exg.hide();

    tatest.quest1.hide();
    tatest.quest2.hide();
    tatest.quest3.hide();
    tatest.quest4.hide();
    tatest.quest5.hide();

    tatest.result1.hide();
    tatest.result2.hide();
    tatest.result3.hide();
    tatest.result4.hide();
    tatest.result5.hide();

    options.doc.hide();
    options.st.hide();

    if(sts===1){
      selftreatment.med1.show();
      selftreatment.med2.show();
      selftreatment.med3.show();
      selftreatment.med4.show();
      selftreatment.med5.show();
      selftreatment.set1.hide();
    }

    if(sts===2){
      selftreatment.ltcp1.show();
      selftreatment.ltcp2.show();
      selftreatment.ltcp3.show();
      selftreatment.ltcp4.show();
      selftreatment.ltcp5.show();
      selftreatment.set1.hide();
    }

    if(sts===3){
    selftreatment.wm1.show();
    selftreatment.wm2.show();
    selftreatment.wm3.show();
    selftreatment.wm4.show();
    selftreatment.wm5.show();
    selftreatment.set1.hide();
    }

    if(sts===4){
      selftreatment.bh1.show();
    selftreatment.bh2.show();
    selftreatment.bh3.show();
    selftreatment.set1.hide();
    }

    if(sts===5){
      selftreatment.cls1.show();
      selftreatment.cls2.show();
      selftreatment.cls3.show();
      selftreatment.cls4.show();
      selftreatment.cls5.show();
      selftreatment.set1.hide();
    }
  }
}
