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
});

Machine4.addEventListener("change", function() {
  Machine.value = Machine4.value;
  Machine5.value = Machine4.value;
  updateDp();
  updateI();
});

Machine5.addEventListener("change", function() {
  Machine.value = Machine5.value;
  Machine4.value = Machine5.value;
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
});

Dplate4.addEventListener("input", function() {
  Dplate.value = Dplate4.value;
  Dplate5.value = Dplate4.value;
});

Dplate5.addEventListener("input", function() {
  Dplate.value = Dplate5.value;
  Dplate4.value = Dplate5.value;
});

Dpunit.addEventListener("change", function() {
  Dpunit4.value = Dpunit.value;
  Dpunit5.value = Dpunit.value;
});

Dpunit4.addEventListener("change", function() {
  Dpunit.value = Dpunit4.value;
  Dpunit5.value = Dpunit4.value;
});

Dpunit5.addEventListener("change", function() {
  Dpunit.value = Dpunit5.value;
  Dpunit4.value = Dpunit5.value;
});

Dvial.addEventListener('input', function() {
  Dvial1.value = Dvial.value;
  Dvial4.value = Dvial.value;
  Dvial5.value = Dvial.value;
});
Dvial1.addEventListener('input', function() {
  Dvial.value = Dvial1.value;
  Dvial4.value = Dvial1.value;
  Dvial5.value = Dvial1.value;
});
Dvial4.addEventListener('input', function() {
  Dvial.value = Dvial4.value;
  Dvial1.value = Dvial4.value;
  Dvial5.value = Dvial4.value;
});
Dvial5.addEventListener('input', function() {
  Dvial.value = Dvial5.value;
  Dvial4.value = Dvial5.value;
  Dvial1.value = Dvial5.value;
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
Machine.addEventListener("change", updateI);


function updateI() {
  let i;
  let Mac=Machine.value;

  Dv=parseFloat(Dvial.value);
  let Dvu=Dvunit.value;
  if (Dvu==="mm"){Dv=Dv/1000;}
  else if (Dvu==="cm"){Dv=Dv/100;}
  else {Dv=Dv;}
  Rv=Dv / 2;

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