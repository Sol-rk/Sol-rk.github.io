let Machine=document.getElementById("Mac");
let Machine4=document.getElementById("Mac4");
let Machine5=document.getElementById("Mac5");

let Etotal4=document.getElementById("Et4");
let Etotal5=document.getElementById("Et5");
let Eunit4=document.getElementById("Eu4");
let Eunit5=document.getElementById("Eu5");

let Dplate = document.getElementById("Dp");
let Dpunit = document.getElementById("Dpu");
let Dplate4 = document.getElementById("Dp4");
let Dpunit4 = document.getElementById("Dpu4");
let Dplate5 = document.getElementById("Dp5");
let Dpunit5 = document.getElementById("Dpu5");


let Dvial= document.getElementById("Dv");
let Dvunit = document.getElementById("Dvu");
let Dvial1= document.getElementById("Dv1");
let Dvunit1 = document.getElementById("Dvu1");
let Dvial4= document.getElementById("Dv4");
let Dvunit4 = document.getElementById("Dvu4");
let Dvial5= document.getElementById("Dv5");
let Dvunit5 = document.getElementById("Dvu5");

let Dball= document.getElementById("Db");
let Dbunit = document.getElementById("Dbu");
let Dball1= document.getElementById("Db1");
let Dbunit1 = document.getElementById("Dbu1");
let Dball4= document.getElementById("Db4");
let Dbunit4 = document.getElementById("Dbu4");
let Dball5= document.getElementById("Db5");
let Dbunit5 = document.getElementById("Dbu5");


let Mball= document.getElementById("Mb");
let Mbunit = document.getElementById("Mbu");
let Mball4= document.getElementById("Mb4");
let Mbunit4 = document.getElementById("Mbu4");
let Mball5= document.getElementById("Mb5");
let Mbunit5 = document.getElementById("Mbu5");


let RPerM= document.getElementById("RPM");
let RPerM5= document.getElementById("RPM5");

let time = document.getElementById("t");
let time4 = document.getElementById("t4");
let time5 = document.getElementById("t5");

let tunit=document.getElementById("tu");
let tunit4=document.getElementById("tu4");

let Tratio=document.getElementById("i");
let Tratio4=document.getElementById("i4");
let Tratio5=document.getElementById("i5");

let Ttype=document.getElementById("Tt");
let Ttype4=document.getElementById("Tt4");
let Ttype5=document.getElementById("Tt5");

let buttonEi= document.getElementById("buttonEi");
let buttonRPM= document.getElementById("buttonRPM");
let button= document.getElementById("buttonT");

let Hvial=document.getElementById("Hv")
let Hvial4=document.getElementById("Hv4")
let Hvial5=document.getElementById("Hv5")
let Hvunit=document.getElementById("Hvu")
let Hvunit4=document.getElementById("Hvu4")
let Hvunit5=document.getElementById("Hvu5")

let Nball=document.getElementById("Nb")
let Nball4=document.getElementById("Nb4")
let Nball5=document.getElementById("Nb5")


let Dv,Db,wp,wv,Ei,Q,fb,t,Nb,Rp,Rv,CDv;
let wp4,wv4,Ei4,fb4,t4,RPM4,wp5,wv5,Ei5,fb5,t5,RPM5;
let K=1;
let MinDb, MaxDb, MinRPM, MaxRPM;
let Mac= Machine.value;
let Dp, DPu;
let Ir,i;

/*synchronization of Db and Dv*/
Dball.addEventListener('input', function() {
  Dball1.value = Dball.value;
  Dball4.value = Dball.value;
  Dball5.value = Dball.value;
});
Dball1.addEventListener('input', function() {
  Dball.value = Dball1.value;
  Dball4.value = Dball.value;
  Dball5.value = Dball.value;
});
Dball4.addEventListener('input', function() {
  Dball1.value = Dball4.value;
  Dball.value = Dball4.value;
  Dball5.value = Dball4.value;
});
Dball5.addEventListener('input', function() {
  Dball1.value = Dball5.value;
  Dball4.value = Dball5.value;
  Dball.value = Dball5.value;
});

Dbunit.addEventListener('change', function() {
  Dbunit1.value = Dbunit.value;
  Dbunit4.value = Dbunit.value;
  Dbunit5.value = Dbunit.value; 
});
Dbunit1.addEventListener('change', function() {
  Dbunit.value = Dbunit1.value;
  Dbunit4.value = Dbunit.value;
  Dbunit5.value = Dbunit.value;   
});
Dbunit4.addEventListener('change', function() {
  Dbunit1.value = Dbunit4.value;
  Dbunit.value = Dbunit4.value;
  Dbunit5.value = Dbunit4.value; 
});
Dbunit5.addEventListener('change', function() {
  Dbunit1.value = Dbunit5.value;
  Dbunit4.value = Dbunit5.value;
  Dbunit.value = Dbunit5.value; 
});

Mball.addEventListener('input', function() {
  Mball4.value = Mball.value;
  Mball5.value = Mball.value;
});
Mball4.addEventListener('input', function() {
  Mball.value = Mball4.value;
  Mball5.value = Mball4.value;
});
Mball5.addEventListener('input', function() {
  Mball4.value = Mball5.value;
  Mball.value = Mball5.value;
});
Mbunit.addEventListener('change', function() {
  Mbunit4.value = Mbunit.value;
  Mbunit5.value = Mbunit.value;
});
Mbunit4.addEventListener('change', function() {
  Mbunit.value = Mbunit4.value;
  Mbunit5.value = Mbunit4.value;
});
Mbunit5.addEventListener('change', function() {
  Mbunit.value = Mbunit5.value;
  Mbunit4.value = Mbunit5.value;
});

Nball.addEventListener('input', function() {
  Nball4.value = Nball.value;
  Nball5.value = Nball.value;

});
Nball4.addEventListener('input', function() {
  Nball.value = Nball4.value;
  Nball5.value = Nball4.value;
});
Nball5.addEventListener('input', function() {
  Nball4.value = Nball5.value;
  Nball.value = Nball5.value;
});

Machine.addEventListener("change", function() {
  Machine4.value = Machine.value;
  Machine5.value = Machine.value;
  updateDp();
  updateI();
  if (Machine.value==="Others"){
    Dpunit.disabled=false;
    Dplate.disabled=false;
    Dpunit4.disabled=false;
    Dplate4.disabled=false;
    Dpunit5.disabled=false;
    Dplate5.disabled=false;
  }
  else {
    Dpunit.disabled=true;
    Dplate.disabled=true;
    Dpunit4.disabled=true;
    Dplate4.disabled=true;
    Dpunit5.disabled=true;
    Dplate5.disabled=true;
  }
});

Machine4.addEventListener("change", function() {
  Machine.value = Machine4.value;
  Machine5.value = Machine4.value;
  if (Machine.value==="Others"){
    Dpunit.disabled=false;
    Dplate.disabled=false;
    Dpunit4.disabled=false;
    Dplate4.disabled=false;
    Dpunit5.disabled=false;
    Dplate5.disabled=false;
  }
  else {
    Dpunit.disabled=true;
    Dplate.disabled=true;
    Dpunit4.disabled=true;
    Dplate4.disabled=true;
    Dpunit5.disabled=true;
    Dplate5.disabled=true;
  }
  updateDp();
  updateI();
});

Machine5.addEventListener("change", function() {
  Machine.value = Machine5.value;
  Machine4.value = Machine5.value;
  if (Machine.value==="Others"){
    Dpunit.disabled=false;
    Dplate.disabled=false;
    Dpunit4.disabled=false;
    Dplate4.disabled=false;
    Dpunit5.disabled=false;
    Dplate5.disabled=false;
  }
  else {
    Dpunit.disabled=true;
    Dplate.disabled=true;
    Dpunit4.disabled=true;
    Dplate4.disabled=true;
    Dpunit5.disabled=true;
    Dplate5.disabled=true;
  }
  updateDp();
  updateI();
});

Etotal4.addEventListener('input', function() {
  Etotal5.value = Etotal4.value;
  });
Etotal5.addEventListener('input', function() {
Etotal4.value = Etotal5.value;
});

Eu4.addEventListener('change', function() {
  Eunit5.value = Eunit4.value;
});

Eu5.addEventListener('change', function() {
  Eunit4.value = Eunit5.value;
});

Dplate.addEventListener("input", function() {
  Dplate4.value = Dplate.value;
  Dplate5.value = Dplate.value;
  updateI();
});

Dplate4.addEventListener("input", function() {
  Dplate.value = Dplate4.value;
  Dplate5.value = Dplate4.value;
  updateI();
});

Dplate5.addEventListener("input", function() {
  Dplate.value = Dplate5.value;
  Dplate4.value = Dplate5.value;
  updateI();
});

Dpunit.addEventListener("change", function() {
  Dpunit4.value = Dpunit.value;
  Dpunit5.value = Dpunit.value;
  updateDp();
});

Dpunit4.addEventListener("change", function() {
  Dpunit.value = Dpunit4.value;
  Dpunit5.value = Dpunit4.value;
  updateDp();
});

Dpunit5.addEventListener("change", function() {
  Dpunit.value = Dpunit5.value;
  Dpunit4.value = Dpunit5.value;
  updateDp();
});

Dvial.addEventListener('input', function() {
  Dvial1.value = Dvial.value;
  Dvial4.value = Dvial.value;
  Dvial5.value = Dvial.value;
  updateI();
});
Dvial1.addEventListener('input', function() {
  Dvial.value = Dvial1.value;
  Dvial4.value = Dvial1.value;
  Dvial5.value = Dvial1.value;
  updateI();
});
Dvial4.addEventListener('input', function() {
  Dvial.value = Dvial4.value;
  Dvial1.value = Dvial4.value;
  Dvial5.value = Dvial4.value;
  updateI();
});
Dvial5.addEventListener('input', function() {
  Dvial.value = Dvial5.value;
  Dvial4.value = Dvial5.value;
  Dvial1.value = Dvial5.value;
  updateI();
});

Dvunit.addEventListener('change', function() {
  Dvunit1.value = Dvunit.value;
  Dvunit4.value = Dvunit.value;
  Dvunit5.value = Dvunit.value;
});
Dvunit1.addEventListener('change', function() {
  Dvunit.value = Dvunit1.value;
  Dvunit4.value = Dvunit1.value;
  Dvunit5.value = Dvunit1.value;
});
Dvunit4.addEventListener('change', function() {
  Dvunit.value = Dvunit4.value;
  Dvunit1.value = Dvunit4.value;
  Dvunit5.value = Dvunit4.value;
});
Dvunit5.addEventListener('change', function() {
  Dvunit.value = Dvunit5.value;
  Dvunit1.value = Dvunit5.value;
  Dvunit4.value = Dvunit5.value;
});

Hvial.addEventListener('input', function() {
  Hvial4.value = Hvial.value;
  Hvial5.value = Hvial.value;
});
Hvial4.addEventListener('input', function() {
  Hvial.value = Hvial4.value;
  Hvial5.value = Hvial4.value;
});
Hvial5.addEventListener('input', function() {
  Hvial4.value = Hvial5.value;
  Hvial.value = Hvial5.value;
});
Hvunit.addEventListener('change', function() {
  Hvunit4.value = Hvunit.value;
  Hvunit5.value = Hvunit.value;
});
Hvunit4.addEventListener('change', function() {
  Hvunit.value = Hvunit4.value;
  Hvunit5.value = Hvunit4.value;
});
Hvunit5.addEventListener('change', function() {
  Hvunit4.value = Hvunit5.value;
  Hvunit1.value = Hvunit5.value;
});

Ttype.addEventListener('change', function() {
  Ttype4.value = Ttype.value;
  Ttype5.value = Ttype.value;
});
Ttype4.addEventListener('change', function() {
  Ttype.value = Ttype4.value;
  Ttype5.value = Ttype4.value;
});
  Ttype5.addEventListener('change', function() {
  Ttype4.value = Ttype5.value;
  Ttype.value = Ttype5.value;
});

Tratio.addEventListener('input', function() {
  Tratio4.value = Tratio.value;
  Tratio5.value = Tratio.value;
});
Tratio4.addEventListener('input', function() {
  Tratio.value = Tratio4.value;
  Tratio5.value = Tratio4.value;
});
Tratio5.addEventListener('input', function() {
  Tratio4.value = Tratio5.value;
  Tratio.value = Tratio5.value;
});

Ttype4.addEventListener('input', function() {
  Tratio.value = Tratio4.value;
  Tratio5.value = Tratio4.value;
});
  Tratio5.addEventListener('input', function() {
  Tratio4.value = Tratio5.value;
  Tratio.value = Tratio5.value;
});


/*synchronization of Db and Dv*/



function updateDp() {
  
  let Mac = Machine.value;
  let Dpu = Dpunit.value;
  let Dp = parseFloat(Dplate.value);
  
  if (Mac === "PULVERISETTE 7 premium line"){
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";
  }
  else if (Mac==="PULVERISETTE 7 classic line"){
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";
  }
  else if (Mac==="PULVERISETTE 5/2 classic line"){
    Rp=0.125;
    Dp=Rp*2000;
    Dpu = "mm";
  }
  else {
    Dp=parseFloat(Dplate.value);
    Dpu=Dpunit.value;
  }
  Dplate.value = Dp;
  Dplate4.value = Dp;
  Dplate5.value = Dp;
  Dpunit.value = Dpu;
  Dpunit4.value = Dpu;
  Dpunit5.value = Dpu;
}


if (Dpu==="mm"){Dp=Dp/1000;}
else if (Dpu==="cm"){Dp=Dp/100;}
else {Dp=Dp;}
Rp=Dp / 2;

Dv=parseFloat(Dvial.value);
let Dvu=Dvunit.value;
if (Dvu==="mm"){Dv=Dv/1000;}
else if (Dvu==="cm"){Dv=Dv/100;}
else {Dv=Dv;}
Rv=Dv / 2;

Db=parseFloat(Dball.value);
let Dbu=Dbunit.value;
if (Dbu==="mm"){CDb=Db/1000;}
else if (Dbu==="cm"){CDb=Db/100;}
else {CDb=Db;}
Rb=CDb / 2;




Ttype.addEventListener("change", updateI);
Ttype4.addEventListener("change", updateI);
Ttype5.addEventListener("change", updateI);
/*Machine.addEventListener("change",function(){
  if (Machine.value==="Others"){
    Dpunit.disabled=false;
    Dplate.disabled=false;
    Dpunit4.disabled=false;
    Dplate4.disabled=false;
    Dpunit5.disabled=false;
    Dplate5.disabled=false;
  }
  else {
    Dpunit.disabled=true;
    Dplate.disabled=true;
    Dpunit4.disabled=true;
    Dplate4.disabled=true;
    Dpunit5.disabled=true;
    Dplate5.disabled=true;
  }
});*/



function updateI() {
  let i;
  let Mac=Machine.value;

  Dv=parseFloat(Dvial.value);
  let Dvu=Dvunit.value;
  if (Dvu==="mm"){Dv=Dv/1000;}
  else if (Dvu==="cm"){Dv=Dv/100;}
  else {Dv=Dv;}
  Rv=Dv / 2;

  Dp=parseFloat(Dplate.value);
  let Dpu=Dpunit.value;
  if (Dpu==="mm"){Dp=Dp/1000;}
  else if (Dpu==="cm"){Dv=Dp/100;}
  else {Dp=Dp;}
  Rp=Dp / 2;

  if (Mac==="PULVERISETTE 7 premium line"){
    Ir=2;

  } else if (Mac==="PULVERISETTE 7 classic line"){
    Ir=2;
  } else if (Mac==="PULVERISETTE 5/2 classic line"){
    Ir=2.19;
  }
    else if (Mac==="Others"){
    Ir=parseFloat(Tratio.value); 
  }
  if (Ttype.value === "I_critical" ) {
    i=1 + Math.sqrt(Rp/Rv);
  }
  else if(Ttype.value === "I_relative" ){
    i=Ir;
  }
  else if(Ttype.value === "Others"){
    i=parseFloat(Tratio.value);  
  }
  Tratio.value = i;
  Tratio4.value = i;
  Tratio5.value = i;  

  if (Ttype.value ==="Others"){
    Tratio.disabled=false;
    Tratio4.disabled=false;
    Tratio5.disabled=false;
    
  }
  else {
    Tratio.disabled=true;
    Tratio4.disabled=true;
    Tratio5.disabled=true;
    if(Mac==="Others"){
      Tratio.disabled=false;                            
      Tratio4.disabled=false;
      Tratio5.disabled=false;
    if (Ttype.value==="I_critical") {
      Tratio.disabled=true;
      Tratio4.disabled=true;
      Tratio5.disabled=true;
    }
      }
  }
  
}



buttonEi.addEventListener("click", function(){
  
  let RPM=parseFloat(RPerM.value);
  let Mac = Machine.value;
  wp=2 * Math.PI * RPM / 60;
  let MinDb, MaxDb, MinRPM, MaxRPM;
  let Db=parseFloat(Dball.value);
  let Dbu=Dbunit.value;

  
  if (Dbu==="mm"){CDb=Db/1000;}
  else if (Dbu==="cm"){CDb=Db/100;}
  else {CDb=Db;}
  Rb=CDb / 2;

  Dv=parseFloat(Dvial.value);
  let Dvu=Dvunit.value;
  if (Dvu==="mm"){Dv=Dv/1000;}
  else if (Dvu==="cm"){Dv=Dv/100;}
  else {Dv=Dv;}
  Rv=Dv / 2;

  if (Mac==="PULVERISETTE 7 premium line"){
    MinDb=0.0001;
    MaxDb= 0.02;
    MinRPM= 150;
    MaxRPM= 1100;
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";

  } else if (Mac==="PULVERISETTE 7 classic line"){
    MinDb=0.0001;
    MaxDb= 0.015;
    MinRPM= 100;
    MaxRPM= 800;
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";

  } else if (Mac==="PULVERISETTE 5/2 classic line"){
    MinDb=0.0001;
    MaxDb= 0.04;
    MinRPM= 50;
    MaxRPM= 400;
    Rp=0.125;
    Dp=Rp*2000;
    Dpu = "mm";

  } else {
    MinDb=0;
    MaxDb= 100000;
    MinRPM= 0;
    MaxRPM= 1000000; 
  }

  if (CDb < MinDb || CDb > MaxDb){
    alert(`Please enter a ball diameter between ${MinDb*1000} and ${MaxDb*1000} mm.`)
    return;
  }
    else if(RPM < MinRPM || RPM > MaxRPM){
    alert(`Please enter RPM between ${MinRPM} and ${MaxRPM}.`)
    return;
  }

  let Mb=parseFloat(Mball.value);
  let Mbu=Mbunit.value;
  
  if (Mbu==="mg"){Mb=Mb/1000000;}
  else if (Mbu==="g"){Mb=Mb/1000;}
  else {Mb=Mb;}
  
  let i = Tratio.value;
  wv=-i * wp;
  let Vb=Math.sqrt((wp * Rp)**2+ wv**2 * (Rv - Rb)**2 * (1-2 * wv / wp)) ;          
  let Vs=Math.sqrt((wp * Rp)**2+ wv**2 * (Rv - Rb)**2 + 2 * wp * wv * Rp * (Rv-Rb));
  Ei=0.5 * Mb * (Vb**2 - Vs**2);
  document.getElementById("Ei").value=Ei;

});

let buttonQ= document.getElementById("buttonQ");

buttonQ.addEventListener("click", function(){
  
  buttonEi.click();
  let Hv=parseFloat(Hvial.value);
  let Hvu=Hvunit.value;
  if (Hvu==="mm"){Hv=Hv/1000;}
  else if (Hvu==="cm"){Hv=Hv/100;}
  else {Hv=Hv;}

  Nb=parseFloat(Nball.value);
  
  let Nbv=Math.PI * Dv**2 * Hv / 4 * CDb**(-3);   
  let Nv=Nb/Nbv;                    
  let Nbs=Math.PI * (Dv-CDb) * Hv / 3 * CDb**(-2);
  let Ns=Nb/Nbs;

  let e=Math.log(1-0.95)/Math.log(Nbs/Nbv);
     
  Q=1-Math.pow(Nv, e);
  
  document.getElementById("Q").value=Q;
  
  if (Q <= 0 || Q >= 1){
    alert(`Calculated Q is not within the acceptable range of 0 to 1. Please adjust the parameters accordingly.`)
    return;
  }

  });
  
let buttonEt= document.getElementById("buttonEt");

buttonEt.addEventListener("click", function(){
  buttonQ.click();
  fb=K*(wp-wv)/(2*Math.PI);
  t=parseFloat(time.value);
  let tu=tunit.value;
  if (tu==="m"){t=t*60;}
  else {t=t;}
  let Et=Q*Ei*Nb*fb*t;
  document.getElementById("Et").value=Et;
  
  
});

buttonRPM.addEventListener("click", function(){

  let Et4 = parseFloat(Etotal4.value);
  
  if (Eunit4.value ==="KJ") {
    Et4=Et4*1000;
  }
  let Mac = Machine.value;
  let wp4=2 * Math.PI / 60;
  let MinDb, MaxDb, MinRPM, MaxRPM, Rp;
  let Db=parseFloat(Dball.value);
  let Dbu=Dbunit.value;
  

  if (Dbu==="mm"){
    CDb=Db/1000;
  }
  else if (Dbu==="cm"){
    CDb=Db/100;
  }
  else {
    CDb=Db;
  }
  Rb=CDb / 2;

  Dv=parseFloat(Dvial.value);
  let Dvu=Dvunit.value;
  if (Dvu==="mm"){
    Dv=Dv/1000;
  }
  else if (Dvu==="cm"){
    Dv=Dv/100;
  }
  else {
    Dv=Dv;
  }
  Rv=Dv / 2;

  if (Mac==="PULVERISETTE 7 premium line"){
    MinDb=0.0001;
    MaxDb= 0.02;
    MinRPM= 150;
    MaxRPM= 1100;
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";

  } else if (Mac==="PULVERISETTE 7 classic line"){
    MinDb=0.0001;
    MaxDb= 0.015;
    MinRPM= 100;
    MaxRPM= 800;
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";

  } else if (Mac4==="PULVERISETTE 5/2 classic line"){
    MinDb=0.0001;
    MaxDb= 0.04;
    MinRPM= 50;
    MaxRPM= 400;
    Rp=0.125;
    Dp=Rp*2000;
    Dpu = "mm";

  } else {
    MinDb=0;
    MaxDb= 100000;
    MinRPM= 0;
    MaxRPM= 1000000;
    Dp=parseFloat(Dplate.value);
    Dpu=Dpunit.value; 
  }

  if (CDb < MinDb || CDb > MaxDb){
    alert(`Please enter a ball diameter between ${MinDb*1000} and ${MaxDb*1000} mm.`)
    return;
  }

  let Mb=parseFloat(Mball.value);
  let Mbu=Mbunit.value;

  if (Mbu==="mg"){Mb=Mb/1000000;}
  else if (Mbu==="g"){Mb=Mb/1000;}
  else {Mb=Mb;}

  let i = Tratio.value;
  let wv4=-i * wp4;
   Vb4=Math.sqrt((wp4 * Rp)**2+ wv4**2 * (Rv - Rb)**2 * (1-2 * wv4 / wp4)) ;          
   Vs4=Math.sqrt((wp4 * Rp)**2+ wv4**2 * (Rv - Rb)**2 + 2 * wp4 * wv4 * Rp * (Rv-Rb));
  let Ei4=0.5 * Mb * (Vb4**2 - Vs4**2);

  let fb4=K*(wp4-wv4)/(2*Math.PI);
  let t4=parseFloat(time4.value);
  let tu4=tunit4.value;
  if (tu4==="m"){t4=t4*60;}
  else {t4=t4;}

  let Hv=parseFloat(Hvial.value);
  let Hvu=Hvunit.value;
  if (Hvu==="mm"){Hv=Hv/1000;}
  else if (Hvu==="cm"){Hv=Hv/100;}
  else {Hv=Hv;}
  let Nb=parseFloat(Nball.value);

  let Nbv=Math.PI * Dv**2 * Hv / 4 * CDb**(-3);   
  let Nv=Nb/Nbv;                    
  let Nbs=Math.PI * (Dv-CDb) * Hv / 3 * CDb**(-2);
  let Ns=Nb/Nbs;

  let e=Math.log(1-0.95)/Math.log(Nbs/Nbv);

  let Q=1-Math.pow(Nv, e);

  if (Q <= 0 || Q >= 1){
    alert(`Calculated Q is not within the acceptable range of 0 to 1. Please adjust the parameters accordingly.`)
    return;
  }
  
  RPM4=Math.pow(Et4/(Q*Ei4*Nb*fb4*t4),1/3);

  document.getElementById("RPM4").value=RPM4;
  
  if(RPM4 < MinRPM || RPM4 > MaxRPM){
  alert(`RPM is too high. Please change the parameters`)
  return;
  }                        

});

buttonT.addEventListener("click", function(){

  let Et5 = parseFloat(Etotal5.value);
  let RPM5=parseFloat(RPerM5.value);

  if (Eunit5.value ==="KJ") {
    Et5=Et5*1000;
  }
  let Mac = Machine.value;
  let wp5=2 * Math.PI *RPM5/ 60;
  let MinDb, MaxDb, MinRPM, MaxRPM, Rp;
  let Db=parseFloat(Dball.value);
  let Dbu=Dbunit.value;


  if (Dbu==="mm"){
    CDb=Db/1000;
  }
  else if (Dbu==="cm"){
    CDb=Db/100;
  }
  else {
    CDb=Db;
  }
  Rb=CDb / 2;

  Dv=parseFloat(Dvial.value);
  let Dvu=Dvunit.value;
  if (Dvu==="mm"){
    Dv=Dv/1000;
  }
  else if (Dvu==="cm"){
    Dv=Dv/100;
  }
  else {
    Dv=Dv;
  }
  Rv=Dv / 2;

  if (Mac==="PULVERISETTE 7 premium line"){
    MinDb=0.0001;
    MaxDb= 0.02;
    MinRPM= 150;
    MaxRPM= 1100;
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";

  } else if (Mac==="PULVERISETTE 7 classic line"){
    MinDb=0.0001;
    MaxDb= 0.015;
    MinRPM= 100;
    MaxRPM= 800;
    Rp=0.07;
    Dp=Rp*2000;
    Dpu = "mm";

  } else if (Mac4==="PULVERISETTE 5/2 classic line"){
    MinDb=0.0001;
    MaxDb= 0.04;
    MinRPM= 50;
    MaxRPM= 400;
    Rp=0.125;
    Dp=Rp*2000;
    Dpu = "mm";

  } else {
    MinDb=0;
    MaxDb= 100000;
    MinRPM= 0;
    MaxRPM= 1000000;
    Dp=parseFloat(Dplate.value);
    Dpu=Dpunit.value; 
  }

  if (CDb < MinDb || CDb > MaxDb){
    alert(`Please enter a ball diameter between ${MinDb*1000} and ${MaxDb*1000} mm.`)
    return;}
  
  else if(RPM5 < MinRPM || RPM5 > MaxRPM){
  alert(`Please enter RPM between ${MinRPM} and ${MaxRPM}.`)
  return;}

  let Mb=parseFloat(Mball.value);
  let Mbu=Mbunit.value;

  if (Mbu==="mg"){Mb=Mb/1000000;}
  else if (Mbu==="g"){Mb=Mb/1000;}
  else {Mb=Mb;}

  let i = Tratio.value;
  let wv5=-i * wp5;
   Vb5=Math.sqrt((wp5 * Rp)**2+ wv5**2 * (Rv - Rb)**2 * (1-2 * wv5 / wp5)) ;          
   Vs5=Math.sqrt((wp5 * Rp)**2+ wv5**2 * (Rv - Rb)**2 + 2 * wp5 * wv5 * Rp * (Rv-Rb));
  let Ei5=0.5 * Mb * (Vb5**2 - Vs5**2);

  let fb5=K*(wp5-wv5)/(2*Math.PI);
  /*let t4=parseFloat(time4.value);
  let tu4=tunit4.value;
  if (tu4==="m"){t4=t4*60;}
  else {t4=t4;}*/

  let Hv=parseFloat(Hvial.value);
  let Hvu=Hvunit.value;
  if (Hvu==="mm"){Hv=Hv/1000;}
  else if (Hvu==="cm"){Hv=Hv/100;}
  else {Hv=Hv;}
  let Nb=parseFloat(Nball.value);

  let Nbv=Math.PI * Dv**2 * Hv / 4 * CDb**(-3);   
  let Nv=Nb/Nbv;                    
  let Nbs=Math.PI * (Dv-CDb) * Hv / 3 * CDb**(-2);
  let Ns=Nb/Nbs;

  let e=Math.log(1-0.95)/Math.log(Nbs/Nbv);

  let Q=1-Math.pow(Nv, e);

  if (Q <= 0 || Q >= 1){
    alert(`Calculated Q is not within the acceptable range of 0 to 1. Please adjust the parameters accordingly.`)
    return;
  }

  t5=Et5/(Q*Ei5*Nb*fb5);
  
  document.getElementById("t5").value=t5;
  });



  /*R_MM400 */

  let buttonEi6=document.getElementById("buttonEi6");
  let buttonQ6=document.getElementById("buttonQ6");
  let buttonEt6=document.getElementById("buttonEt6");
  let buttonCal=document.getElementById("buttonCal");

  let f6=document.getElementById("f6");
  let f7=document.getElementById("f7");



  
  let Dvial6=document.getElementById("Dv6");
  let Dvial7=document.getElementById("Dv7");
  let Dvunit6=document.getElementById("Dvu6");
  let Dvunit7=document.getElementById("Dvu7");

  Dvial6.addEventListener('input', function() {
    Dvial7.value = Dvial6.value;
  });

  Dvial7.addEventListener('input', function() {
    Dvial6.value = Dvial7.value;
  });

  Dvunit6.addEventListener('change', function() {
    Dvunit7.value = Dvunit6.value;
  });
  Dvunit7.addEventListener('change', function() {
    Dvunit6.value = Dvunit7.value;
  });

    
  let Mball6=document.getElementById("Mb6");
  let Mball7=document.getElementById("Mb7");
  let Mbunit6=document.getElementById("Mbu6");
  let Mbunit7=document.getElementById("Mbu7");

  Mball6.addEventListener('input', function() {
    Mball7.value = Mball6.value;
  });
  Mball7.addEventListener('input', function() {
    Mball6.value = Mball7.value;
  });
  Mbunit6.addEventListener('change', function() {
    Mbunit7.value = Mbunit6.value;
  });
  Mbunit7.addEventListener('change', function() {
    Mbunit6.value = Mbunit7.value;
  });  
  
  let Dball6=document.getElementById("Db6");
  let Dball7=document.getElementById("Db7");
  let Dbunit6=document.getElementById("Dbu6");
  let Dbunit7=document.getElementById("Dbu7");

  Dball6.addEventListener('input', function() {
    Dball7.value = Dball6.value;
  });
  Dball7.addEventListener('input', function() {
    Dball6.value = Dball7.value;
  });
  Dbunit6.addEventListener('change', function() {
    Dbunit7.value = Dbunit6.value;
  });
  Dbunit7.addEventListener('change', function() {
    Dbunit6.value = Dbunit7.value;
  });
  
  let Hvial6=document.getElementById("Hv6");
  let Hvial7=document.getElementById("Hv7");
  let Hvunit6=document.getElementById("Hvu6");
  let Hvunit7=document.getElementById("Hvu7");

  Hvial6.addEventListener('input', function() {
    Hvial7.value = Hvial6.value;
  });
  Hvial7.addEventListener('input', function() {
    Hvial6.value = Hvial7.value;
  });
  Hvunit6.addEventListener('change', function() {
    Hvunit7.value = Hvunit6.value;
  });
  Dbunit7.addEventListener('change', function() {
    Hvunit6.value = Hvunit7.value;
  });

  let Nball6=document.getElementById("Nb6");
  let Nball7=document.getElementById("Nb7");

Nball6.addEventListener('input', function() {
  Nball7.value = Nball6.value;
});
Nball7.addEventListener('input', function() {
  Nball6.value = Nball7.value;
});

let time6=document.getElementById("t6");
let tunit6=document.getElementById("tu6");
let t7=document.getElementById("t7");

let Ei6=document.getElementById("Ei6");

buttonEi6.addEventListener("click", function(){

  let Dv6=parseFloat(Dvial6.value);
  let Dvu6=Dvunit6.value;
  let Mb6=parseFloat(Mball6.value);
  let Mbu6=Mbunit6.value;

  if (Dvu6==="mm"){
    Dv6=Dv6/1000;
  }
  else if (Dvu6==="cm"){
    Dv6=Dv6/100;
  }
  else {Dv6=Dv6;}

  if (Mbu6==="mg"){
    Mb6=Mb6/1000000;
  }
  else if (Mbu6==="g"){
    Mb6=Mb6/1000;
  }
  else {Mb6=Mb6;}

Ei6.value= 0.5*Mb6*(2*Math.PI*f6.value*0.5*Dv6)**2;

});

let Q6=document.getElementById("Q6")
buttonQ6.addEventListener("click", function(){

  buttonEi6.click();

  let Db6=parseFloat(Dball6.value);
  let Dbu6=Dbunit6.value;
  let Dv6=parseFloat(Dvial6.value);
  let Dvu6=Dvunit6.value;
  let Hv6=parseFloat(Hvial6.value);
  let Hvu6=Hvunit6.value;
  let Nb6=parseFloat(Nball6.value);
  

  if (Dbu6==="mm"){
    Db6=Db6/1000;
  }
  else if (Dbu6==="cm"){
    Db6=Db6/100;
  }
  else {Db6=Db6;}

  if (Dvu6==="mm"){
    Dv6=Dv6/1000;
  }
  else if (Dvu6==="cm"){
    Dv6=Dv6/100;
  }
  else {Dv6=Dv6;}

  if (Hvu6==="mm"){
    Hv6=Hv6/1000
  }
  else if (Hvu6==="cm"){
    Hv6=Hv6/100;
  }
  else {Hv6=Hv6;}

  let Nbv=Math.PI*Dv6**2*Hv6/4*Db6**(-3);
  let Nv=Nb6/Nbv;
  let Nbs=Math.PI*(Dv6-Db6)*Hv6/3*Db6**(-2)
  let e=Math.log(1-0.95)/Math.log(Nbs/Nbv);

Q6.value=1-Math.pow(Nv,e);

});

buttonEt6.addEventListener("click", function(){
let Kc=10;
  let t6=parseFloat(time6.value);
  let tu6=tunit6.value;
  if (tu6==="m"){t6=t6*60;}
  else {t6=t6;}
  let Et6=Q6.value*Ei6.value*Nball6.value*K*f6.value*t6*Kc;
  document.getElementById("Et6").value=Et6;
});

let target7=document.getElementById("target7");
let targetn7=document.getElementById("targetn7");
let targetu7=document.getElementById("targetu7");
let Rtype=document.getElementById("Rtype");
let R7=document.getElementById("R7");
let Ru7=document.getElementById("Ru7")

/*target7.addEventListener("change", function() {
  if (target7.value==="Frequency"){
    targetu7.value="Hz";
    Rtype.value="Time";
    Ru7.value="s";
        
  }
  else if (target7.value==="Time"){
    targetu7.value="s";
    Rtype.value="Frequency";
    Ru7.value="Hz";
  }
  else {}
  updateF6Value();
});*/

target7.addEventListener("change", function() {
  if (target7.value==="Frequency"){
    targetu7.value="Hz";
    Rtype.value="Time";
    Ru7.value="s";
    targetu7.disabled= true;
    Rtype.disabled= true;
    Ru7.disabled= true;
  }
  else if (target7.value==="Time"){
    targetu7.value="s";
    Rtype.value="Frequency";
    Ru7.value="Hz";
    targetu7.disabled= true;
    Rtype.disabled= true;
    Ru7.disabled= true;
  }
  updateF6Value();
  });




let Et7=document.getElementById("Et7")
let buttonCal7=document.getElementById("buttonCal7");

function updateF6Value() {
    if (target7.value === "Frequency"){
    f6.value = targetn7.value;}
    else {f6.value = ""}
}

targetn7.addEventListener('input', updateF6Value);
f6.addEventListener('input', function(){
  if (target7.value === "Frequency"){
  targetn7.value=f6.value;}
});

buttonCal7.addEventListener("click", function(){
  buttonQ6.click();
  let Kc=10;

  let Dv6=parseFloat(Dvial6.value);
  let Dvu6=Dvunit6.value;
  let Mb6=parseFloat(Mball6.value);
  let Mbu6=Mbunit6.value;

  if (Dvu6==="mm"){
    Dv6=Dv6/1000;
  }
  else if (Dvu6==="cm"){
    Dv6=Dv6/100;
  }
  else {Dv6=Dv6;}

  if (Mbu6==="mg"){
    Mb6=Mb6/1000000;
  }
  else if (Mbu6==="g"){
    Mb6=Mb6/1000;
  }
  else {Mb6=Mb6;}
  
  if (target7.value==="Frequency"){
    R7.value=Et7.value/(Q6.value*Ei6.value*Nball6.value*targetn7.value*Kc); 
  }
  else if(target7.value==="Time"){
      R7.value=Math.pow((Et7.value*2/(Q6.value*Mb6*Nball6.value*targetn7.value*Kc*Math.PI**2*Dv6**2)),1/3); 
  }
  else {alert(`Please select parameter first.`);}
});
