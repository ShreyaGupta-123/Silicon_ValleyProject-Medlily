class ConaDoc{
    constructor(){
      this.disclaimer=createElement("h1");
      this.backbutton=createButton("BACK");
      this.region=createButton("REGION");
      this.place1=createButton("Rajasthan"); 
      this.hos1=createButton("Mental Health Care Centre");  
      this.hos2=createButton("Stuti Pardhe's Mental Health and Naturopathy Clinic");
      this.hos3=createButton("Best Psychiatrist, Psychologists & counselor in Jaipur: Manomaya Holistic mental health centre");
      this.hos4=createButton("Gautam Hospital & Research Centre");
      this.hos5=createButton("Mindlisten Neuropsychiatric Clinic");   

      this.hos1data1=createElement("h2");
      this.hos1data2=createElement("h4");
      this.hos1data3=createElement("h4");
      this.hos1data4=createElement("h4");
      this.hos1data5=createElement("h4");
      this.hos1data6=createElement("h4");

      this.hos2data1=createElement("h2");
      this.hos2data2=createElement("h4");
      this.hos2data3=createElement("h4");
      this.hos2data4=createElement("h4");
      this.hos2data5=createElement("h4");
      this.hos2data6=createElement("h4");

      this.hos3data1=createElement("h2");
      this.hos3data2=createElement("h4");
      this.hos3data3=createElement("h4");
      this.hos3data4=createElement("h4");
      this.hos3data5=createElement("h4");
      this.hos3data6=createElement("h4");

      this.hos4data1=createElement("h2");
      this.hos4data2=createElement("h4");
      this.hos4data3=createElement("h4");
      this.hos4data4=createElement("h4");
      this.hos4data5=createElement("h4");
      this.hos4data6=createElement("h4");

      this.hos5data1=createElement("h2");
      this.hos5data2=createElement("h4");
      this.hos5data3=createElement("h4");
      this.hos5data4=createElement("h4");
      this.hos5data5=createElement("h4");
      this.hos5data6=createElement("h4");
    }
    hide(){
      this.disclaimer.hide();
      this.backbutton.hide();
      this.region.hide();
      this.place1.hide();
      this.hos1.hide();  
      this.hos2.hide();  
      this.hos3.hide();  
      this.hos4.hide();  
      this.hos5.hide(); 
      this.hos1data1.hide(); 
      this.hos1data2.hide(); 
      this.hos1data3.hide(); 
      this.hos1data4.hide(); 
      this.hos1data5.hide();
      this.hos1data6.hide(); 

      this.hos2data1.hide(); 
      this.hos2data2.hide(); 
      this.hos2data3.hide(); 
      this.hos2data4.hide(); 
      this.hos2data5.hide();
      this.hos2data6.hide(); 

      this.hos3data1.hide(); 
      this.hos3data2.hide(); 
      this.hos3data3.hide(); 
      this.hos3data4.hide(); 
      this.hos3data5.hide();
      this.hos3data6.hide(); 
      
      this.hos4data1.hide(); 
      this.hos4data2.hide(); 
      this.hos4data3.hide(); 
      this.hos4data4.hide(); 
      this.hos4data5.hide();
      this.hos4data6.hide(); 

      this.hos5data1.hide(); 
      this.hos5data2.hide(); 
      this.hos5data3.hide(); 
      this.hos5data4.hide(); 
      this.hos5data5.hide();
      this.hos5data6.hide(); 


    }
    show(){
     this.disclaimer.show();
     this.backbutton.show();
     this.region.show();
     this.place1.show();
     this.hos1.show();  
     this.hos2.show();  
     this.hos3.show();  
     this.hos4.show();  
     this.hos5.show(); 
     this.hos1data1.show(); 
     this.hos1data2.show(); 
     this.hos1data3.show(); 
     this.hos1data4.show(); 
     this.hos1data5.show(); 
     this.hos1data6.show();

     this.hos2data1.show(); 
     this.hos2data2.show(); 
     this.hos2data3.show(); 
     this.hos2data4.show(); 
     this.hos2data5.show(); 
     this.hos2data6.show();

     this.hos3data1.show(); 
     this.hos3data2.show(); 
     this.hos3data3.show(); 
     this.hos3data4.show(); 
     this.hos3data5.show(); 
     this.hos3data6.show();

     this.hos4data1.show(); 
     this.hos4data2.show(); 
     this.hos4data3.show(); 
     this.hos4data4.show(); 
     this.hos4data5.show(); 
     this.hos4data6.show();
     
     this.hos5data1.show(); 
     this.hos5data2.show(); 
     this.hos5data3.show(); 
     this.hos5data4.show(); 
     this.hos5data5.show(); 
     this.hos5data6.show();
    }
    display(){
      this.disclaimer.html("**Disclaimer**-It is a prototype, only one place is shown.")
      this.disclaimer.position(displayWidth/100, displayHeight/100);
      this.backbutton.position(displayWidth-100,displayHeight/100);
      this.region.position(displayWidth/100,displayHeight/100+70);
      this.place1.position(displayWidth/100+100,displayHeight/100+70);
      this.hos1.position(displayWidth/100+200,displayHeight/100+70);
      this.hos2.position(displayWidth/100+200,displayHeight/100+90);
      this.hos3.position(displayWidth/100+200,displayHeight/100+110);
      this.hos4.position(displayWidth/100+200,displayHeight/100+130);
      this.hos5.position(displayWidth/100+200,displayHeight/100+150);
      this.hos1data1.position(displayWidth/100,displayHeight/100+170);
      this.hos1data1.html("Mental Health Care Centre");
      this.hos1data2.position(displayWidth/100,displayHeight/100+250);
      this.hos1data2.html("Address: 4-M--47 jaipur, jawahar nagar, Jaipur, Rajasthan 302004");
      this.hos1data3.position(displayWidth/100,displayHeight/100+290);
      this.hos1data3.html("Monday-Tuesday --- Closed");
      this.hos1data4.position(displayWidth/100,displayHeight/100+320);
      this.hos1data4.html("Wednesday-Saturday --- 5-8am,9am-1am");
      this.hos1data5.position(displayWidth/100,displayHeight/100+350);
      this.hos1data5.html("Sunday --- 9am-1am");
      this.hos1data6.position(displayWidth/100,displayHeight/100+390);
      this.hos1data6.html("Phone: 091666 53767");

      this.hos2data1.position(displayWidth/100,displayHeight/100+170);
      this.hos2data1.html("Stuti Pardhe's Mental Health and Naturopathy Clinic");
      this.hos2data2.position(displayWidth/100,displayHeight/100+250);
      this.hos2data2.html("Address: Jagatpura Flyover, Railway Colony, Jagatpura, Jaipur, Rajasthan 302017");
      this.hos2data3.position(displayWidth/100,displayHeight/100+290);
      this.hos2data3.html("Monday-Saturday --- 10am-7:30pm");
      this.hos2data4.position(displayWidth/100,displayHeight/100+320);
      this.hos2data4.html("Sunday --- Closed");
      this.hos2data5.position(displayWidth/100,displayHeight/100+350);
      this.hos2data5.html("Website: http://drstutipardheclinic.com/");
      this.hos2data6.position(displayWidth/100,displayHeight/100+390);
      this.hos2data6.html("Phone: 096101 70046");

      this.hos3data1.position(displayWidth/100,displayHeight/100+170);
      this.hos3data1.html("Best Psychiatrist, Psychologists & counselor in Jaipur: Manomaya Holistic mental health centre");
      this.hos3data2.position(displayWidth/100,displayHeight/100+250);
      this.hos3data2.html("Address: 79, panchsheel Enclave, JLN Marg, Jawahar Circle, Jaipur, Rajasthan 302018");
      this.hos3data3.position(displayWidth/100,displayHeight/100+290);
      this.hos3data3.html("Monday-Sunday --- 9am-8pm");
      this.hos3data4.position(displayWidth/100,displayHeight/100+320);
      this.hos3data4.html("Products and Services: manomaya.in");
      this.hos3data5.position(displayWidth/100,displayHeight/100+350);
      this.hos3data5.html("Appointments: manomaya.in");
      this.hos3data6.position(displayWidth/100,displayHeight/100+390);
      this.hos3data6.html("Phone: 096948 52227");

      this.hos4data1.position(displayWidth/100,displayHeight/100+170);
      this.hos4data1.html("Gautam Hospital & Research Centre");
      this.hos4data2.position(displayWidth/100,displayHeight/100+250);
      this.hos4data2.html("Address: 1, Jacob Rd, Near Shiv Mandir, Madrampur, Civil Lines, Jaipur, Rajasthan 302006");
      this.hos4data3.position(displayWidth/100,displayHeight/100+290);
      this.hos4data3.html("Monday-Saturday --- 9am-9pm");
      this.hos4data4.position(displayWidth/100,displayHeight/100+320);
      this.hos4data4.html("Sunday --- Closed");
      this.hos4data5.position(displayWidth/100,displayHeight/100+350);
      this.hos4data5.html("Phone: 079470 59719");
      this.hos4data6.position(displayWidth/100,displayHeight/100+390);
      this.hos4data6.html("Phone: 098290 53050");

      this.hos5data1.position(displayWidth/100,displayHeight/100+170);
      this.hos5data1.html("Mindlisten Neuropsychiatric Clinic");
      this.hos5data2.position(displayWidth/100,displayHeight/100+250);
      this.hos5data2.html("33-A , Vidhyut Nagar B, Purani Chungi, Ajmer Road., Jaipur, Rajasthan 302021");
      this.hos5data3.position(displayWidth/100,displayHeight/100+290);
      this.hos5data3.html("Monday-Saturday --- 10am-1pm,4-7pm");
      this.hos5data4.position(displayWidth/100,displayHeight/100+320);
      this.hos5data4.html("Sunday --- 10am-1pm");
      this.hos5data5.position(displayWidth/100,displayHeight/100+350);
      this.hos5data5.html("Website: https://mindlisten.com/");
      this.hos5data6.position(displayWidth/100,displayHeight/100+390);
      this.hos5data6.html("Phone: 095713 46147");

      this.place1.hide();
      this.hos1.hide();  
      this.hos2.hide();  
      this.hos3.hide();  
      this.hos4.hide();  
      this.hos5.hide();  
      this.hos1data1.hide();
      this.hos1data2.hide();
      this.hos1data3.hide();
      this.hos1data4.hide();
      this.hos1data5.hide();
      this.hos1data6.hide();

      
      this.hos2data1.hide(); 
      this.hos2data2.hide(); 
      this.hos2data3.hide(); 
      this.hos2data4.hide(); 
      this.hos2data5.hide();
      this.hos2data6.hide(); 


      this.region.mousePressed(()=>{
       selection=1;
      });
      
      this.place1.mousePressed(()=>{
        selection=2;
       });
     
      this.hos1.mousePressed(()=>{
        selection=3;
        hospital=1
       });

      this.hos2.mousePressed(()=>{
        selection=3;
        hospital=2;
      }) ;

      this.hos3.mousePressed(()=>{
        selection=3;
        hospital=3;
      }) ;

      this.hos4.mousePressed(()=>{
        selection=3;
        hospital=4;
      }) ;

      this.hos5.mousePressed(()=>{
        selection=3;
        hospital=5;
      }) ;

      this.backbutton.mousePressed(()=>{
        state=1
        selection=0;
     });
    }
}