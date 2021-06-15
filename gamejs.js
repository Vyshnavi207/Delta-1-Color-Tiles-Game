let number_mvs=0;
let empty_box_position='a25';
let timesec=0;
let timemin=0;
let timehrs=0;
let displaysec=0;
let displaymin=0;
let displayhrs=0

function start_game(){
    number_mvs=0;
    empty_box_position='a25';
    var tab_position= new Array();
    var color_array = new Array("#fcba03", "#fc0320","turquoise","#6532a8","#73a832","#a8328d","#fcba03", "#fc0320","turquoise","#6532a8","#73a832","#a8328d","#fcba03", "#fc0320","turquoise","#6532a8","#73a832","#a8328d","#fcba03", "#fc0320","turquoise","#6532a8","#73a832","#a8328d","#fcba03")
    while(tab_position.length<25){
        var numero=Math.round(Math.random()*100);
        if((numero==1)||(numero==2)||(numero==3)||(numero==4)||(numero==5)||(numero==6)||(numero==7)||(numero==8)||(numero==9)||(numero==10)||(numero==11)||(numero==12)||(numero==13)||(numero==14)||(numero==15)||(numero==16)||(numero==17)||(numero==18)||(numero==19)||(numero==20)||(numero==21)||(numero==22)||(numero==23)||(numero==24)||(numero==25) ){
          if(!tab_position.includes(numero)){
              tab_position[tab_position.length]=numero;      
             }  

         }
    }

   
   document.getElementById('a1').textContent=tab_position[0];
   document.getElementById('a1').style.backgroundColor=color_array[tab_position[0]];

   document.getElementById('a2').textContent=tab_position[1];
   document.getElementById('a2').style.backgroundColor=color_array[tab_position[1]];

   document.getElementById('a3').textContent=tab_position[2];
   document.getElementById('a3').style.backgroundColor=color_array[tab_position[2]];

   document.getElementById('a4').textContent=tab_position[3];
   document.getElementById('a4').style.backgroundColor=color_array[tab_position[3]];

   document.getElementById('a5').textContent=tab_position[4];
   document.getElementById('a5').style.backgroundColor=color_array[tab_position[4]];

   document.getElementById('a6').textContent=tab_position[5];
   document.getElementById('a6').style.backgroundColor=color_array[tab_position[5]];

   document.getElementById('a7').textContent=tab_position[6];
   document.getElementById('a7').style.backgroundColor=color_array[tab_position[6]];

   document.getElementById('a8').textContent=tab_position[7];
   document.getElementById('a8').style.backgroundColor=color_array[tab_position[7]];

   document.getElementById('a9').textContent=tab_position[8];
   document.getElementById('a9').style.backgroundColor=color_array[tab_position[8]];

   document.getElementById('a10').textContent=tab_position[9];
   document.getElementById('a10').style.backgroundColor=color_array[tab_position[9]];

   document.getElementById('a11').textContent=tab_position[10];
   document.getElementById('a11').style.backgroundColor=color_array[tab_position[10]];

   document.getElementById('a12').textContent=tab_position[11];
   document.getElementById('a12').style.backgroundColor=color_array[tab_position[11]];

   document.getElementById('a13').textContent=tab_position[12];
   document.getElementById('a13').style.backgroundColor=color_array[tab_position[12]];

   document.getElementById('a14').textContent=tab_position[13];
   document.getElementById('a14').style.backgroundColor=color_array[tab_position[13]];

   document.getElementById('a15').textContent=tab_position[14];
   document.getElementById('a15').style.backgroundColor=color_array[tab_position[14]];

   document.getElementById('a16').textContent=tab_position[15];
   document.getElementById('a16').style.backgroundColor=color_array[tab_position[15]];

   document.getElementById('a17').textContent=tab_position[16];
   document.getElementById('a17').style.backgroundColor=color_array[tab_position[16]];

   document.getElementById('a18').textContent=tab_position[17];
   document.getElementById('a18').style.backgroundColor=color_array[tab_position[17]];

   document.getElementById('a19').textContent=tab_position[18];
   document.getElementById('a19').style.backgroundColor=color_array[tab_position[18]];

   document.getElementById('a20').textContent=tab_position[19];
   document.getElementById('a20').style.backgroundColor=color_array[tab_position[19]];

   document.getElementById('a21').textContent=tab_position[20];
   document.getElementById('a21').style.backgroundColor=color_array[tab_position[20]];

   document.getElementById('a22').textContent=tab_position[21];
   document.getElementById('a22').style.backgroundColor =color_array[tab_position[21]];

   document.getElementById('a23').textContent=tab_position[22];
   document.getElementById('a23').style.backgroundColor=color_array[tab_position[22]];

   document.getElementById('a24').textContent=tab_position[23];
   document.getElementById('a24').style.backgroundColor=color_array[tab_position[23]];
   
   document.getElementById('a25').style.backgroundColor='#000';

    var box_position= new Array();
    var color_array_source= new Array("#fcba03", "#fc0320","turquoise","#6532a8","#73a832","#a8328d","#fcba03", "#fc0320","turquoise")
    while(box_position.length<9){
        var numero=Math.round(Math.random()*100);
        if((numero==1)||(numero==2)||(numero==9)||(numero==3)||(numero==4)||(numero==5)||(numero==6)||(numero==7)||(numero==8)){
            if(!box_position.includes(numero)){
                box_position[box_position.length]=numero;      
               }     

         }

    }
    document.getElementById('b1').textContent=box_position[0];
    document.getElementById('b1').style.backgroundColor=color_array_source[box_position[0]];

    document.getElementById('b2').textContent=box_position[1];
    document.getElementById('b2').style.backgroundColor=color_array_source[box_position[1]];
   
    document.getElementById('b3').textContent=box_position[2];
    document.getElementById('b3').style.backgroundColor=color_array_source[box_position[2]];
   
    document.getElementById('b4').textContent=box_position[3];
    document.getElementById('b4').style.backgroundColor=color_array_source[box_position[3]];
   
    document.getElementById('b5').textContent=box_position[4];
    document.getElementById('b5').style.backgroundColor=color_array_source[box_position[4]];
   
    document.getElementById('b6').textContent=box_position[5];
    document.getElementById('b6').style.backgroundColor=color_array_source[box_position[5]];
   
    document.getElementById('b7').textContent=box_position[6];
    document.getElementById('b7').style.backgroundColor=color_array_source[box_position[6]];
   
    document.getElementById('b8').textContent=box_position[7];
    document.getElementById('b8').style.backgroundColor=color_array_source[box_position[7]];
   
    document.getElementById('b9').textContent=box_position[8];
    document.getElementById('b9').style.backgroundColor=color_array_source[box_position[8]];
   
}
function switching(cell){

    var emptyStr = empty_box_position.substr(1,2);
    var cellStr = cell.substr(1,2);
    var sub=emptyStr - cellStr;
    

    if((sub==5)|| (sub==1)|| (sub==-1) ||(sub==-5)) {
        var temp_val=document.getElementById(empty_box_position).textContent;
                        document.getElementById(empty_box_position).textcontent=document.getElementById(cell).textContent;
                        document.getElementById(cell).textContent=temp_val;

        var swap=document.getElementById(empty_box_position).style.backgroundColor;    
                        document.getElementById(empty_box_position).style.backgroundColor=document.getElementById(cell).style.backgroundColor;
                        document.getElementById(cell).style.backgroundColor=swap;

                        empty_box_position = cell;
                        number_mvs=number_mvs+1;
                        document.getElementById("myText").innerHTML = number_mvs;
                        setInterval(() => {
                            timesec++;
                            document.getElementById("clock").innerHTML=displayhrs +":"+displaymin +":"+displaysec;  
                            if(timesec/60==1){
                                timesec=0;
                                timemin++;
                                if(timemin/60==1){
                                    timemin=0;
                                    timehrs++;
                        
                                }
                            }
                            if(timesec<10){
                                displaysec="0"+timesec.toString();
                            }
                            else{
                                displaysec=timesec;
                            }
                             if(timemin<10){
                                 displaymin="0"+timemin.toString();
                             }
                             else{
                                 displaymin=timemin;
                             }
                             if(timehrs<10){
                                 displayhrs="0"+timehrs.toString();
                             }
                             else{
                                 displayhrs=timehrs;
                             }
                             
                         }, 3000);
                    

    } else {
        alert("wrong move!");
    }

}

function WON(){
    var B1_color=document.getElementById('b1').style.backgroundColor;
    var A1_color=document.getElementById('a7').style.backgroundColor;
    var B2_color=document.getElementById('b2').style.backgroundColor;
    var A2_color=document.getElementById('a8').style.backgroundColor;
    var B3_color=document.getElementById('b3').style.backgroundColor;
    var A3_color=document.getElementById('a9').style.backgroundColor;
    var B4_color=document.getElementById('b4').style.backgroundColor;
    var A4_color=document.getElementById('a12').style.backgroundColor;
    var B5_color=document.getElementById('b5').style.backgroundColor;
    var A5_color=document.getElementById('a13').style.backgroundColor;
    var B6_color=document.getElementById('b6').style.backgroundColor;
    var A6_color=document.getElementById('a14').style.backgroundColor;
    var B7_color=document.getElementById('b7').style.backgroundColor;
    var A7_color=document.getElementById('a17').style.backgroundColor;
    var B8_color=document.getElementById('b8').style.backgroundColor;
    var A8_color=document.getElementById('a18').style.backgroundColor;
    var B9_color=document.getElementById('b9').style.backgroundColor;
    var A9_color=document.getElementById('a19').style.backgroundColor;
    
    if((A1_color==B1_color)&&(A2_color==B2_color)&&(A3_color==B3_color)&&(A4_color==B4_color)&&(A5_color==B5_color)&&(A6_color==B6_color)&&(A7_color==B7_color)&&(A8_color==B8_color)&&(A9_color==B9_color)){
        alert("*YOU WON*") ;
        }
        else{
            alert("lost:(");
        }

    
}
