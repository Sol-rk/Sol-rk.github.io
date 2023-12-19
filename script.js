let Machine=document.getElementById("Mac")
let Dvial= document.getElementById("Dv");
let Dvunit = document.getElementById("Dvu");
let Dball= document.getElementById("Db");
let Dbunit = document.getElementById("Dbu");
let Mball= document.getElementById("Mb");
let Mbunit = document.getElementById("Mbu");
let RPerM= document.getElementById("RPM");
let time = document.getElementById("t")
let tunit=document.getElementById("tu")
let buttonEi= document.getElementById("buttonEi");
let Dv,Db,wp,wv,Ei,Q,fb,t,Nb;
let K=1;
buttonEi.addEventListener("click", function(){
  Dv=parseFloat(Dvial.value);
  let Dvu=Dvunit.value;
  if (Dvu==="mm"){Dv=Dv/1000;}
  else if (Dvu==="cm"){Dv=Dv/100;}
  else {Dv=Dv;}
  let Rv=Dv / 2;
  
  Db=parseFloat(Dball.value);
  let Dbu=Dbunit.value;
  if (Dbu==="mm"){Db=Db/1000;}
  else if (Dbu==="cm"){Db=Db/100;}
  else {Db=Db;}
  let Rb=Db / 2;
  
  let Mb=parseFloat(Mball.value);
  let Mbu=Mbunit.value;
  if (Mbu==="mg"){Mb=Mb/1000000;}
  else if (Mbu==="g"){Mb=Mb/1000;}
  else {Mb=Mb;}
  
  let RPM=parseFloat(RPerM.value);
  wp=2 * Math.PI * RPM / 60;
  let Mac= Machine.value;
  let Rp;
  if(Mac === "premium line"){
    Rp=0.09-Rv;
  } else {Rp=0.13-Rv;}
  let i=1 + Math.sqrt(Rp/Rv);
  wv=-i * wp;
  let Vb=Math.sqrt((wp * Rp)**2+ wv**2 * (Rv - Rb)**2 * (1-2 * wv / wp)) ;          
  let Vs=Math.sqrt((wp * Rp)**2+ wv**2 * (Rv - Rb)**2 + 2 * wp * wv * Rp * (Rv-Rb));
  Ei=0.5 * Mb * (Vb**2 - Vs**2);
  document.getElementById("Ei").value=Ei;


});

let buttonQ= document.getElementById("buttonQ");
let Hvial=document.getElementById("Hv")
let Hvunit=document.getElementById("Hvu")
let Nball=document.getElementById("Nb")

buttonQ.addEventListener("click", function(){
  buttonEi.click();
  let Hv=parseFloat(Hvial.value);
  let Hvu=Hvunit.value;
  if (Hvu==="mm"){Hv=Hv/1000;}
  else if (Hvu==="cm"){Hv=Hv/100;}
  else {Hv=Hv;}

  Nb=parseFloat(Nball.value);
  
  let Nbv=Math.PI * Dv**2 * Hv / 4 * Db**(-3);   
  let Nv=Nb/Nbv;                    
  let Nbs=Math.PI * (Dv-Db) * Hv / 3 * Db**(-2);
  let Ns=Nb/Nbs;

  let e=Math.log(1-0.95)/Math.log(Nbs/Nbv);
     
  Q=1-Math.pow(Nv, e);
  
  document.getElementById("Q").value=Q;

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