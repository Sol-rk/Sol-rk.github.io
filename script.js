let Target1 = document.getElementById("Target1");
let Target2 = document.getElementById("Target2");
let targetLabel1 = document.getElementById('targetLabel1');
let targetLabel2 = document.getElementById('targetLabel2');
let Machine1 = document.getElementById("Mac1");
let Dplate1 = document.getElementById("Dp1");
let Dpunit1 = document.getElementById("Dpu1");
let Dvial1 = document.getElementById("Dv1");
let Dvunit1 = document.getElementById("Dvu1");
let Dvial2 = document.getElementById("Dv2");
let Dvunit2 = document.getElementById("Dvu2");
let Tratio1 = document.getElementById("i");
let Ttype1 = document.getElementById("Tt1");
let Hvial1 = document.getElementById("Hv1")
let Hvunit1 = document.getElementById("Hvu1")
let Hvial2 = document.getElementById("Hv2")
let Hvunit2 = document.getElementById("Hvu2")

let Dball1 = document.getElementById("Db1");
let Dbunit1 = document.getElementById("Dbu1");
let Dball2 = document.getElementById("Db2");
let Dbunit2 = document.getElementById("Dbu2");

let Mball1 = document.getElementById("Mb1");
let Mbunit1 = document.getElementById("Mbu1");
let Mball2 = document.getElementById("Mb2");
let Mbunit2 = document.getElementById("Mbu2");

let RPerM1 = document.getElementById("RPM1");
let f2 = document.getElementById("f2");
let fu2 = document.getElementById("fu2");

let time1 = document.getElementById("t1");
let tunit1 = document.getElementById("tu1");
let time2 = document.getElementById("t2");
let tunit2 = document.getElementById("tu2");
let Etotal1 = document.getElementById("Et1");
let Etunit1 = document.getElementById("Etu1");
let Etotal2 = document.getElementById("Et2");
let Etunit2 = document.getElementById("Etu2");

let Nball1 = document.getElementById("Nb1");
let Nball2 = document.getElementById("Nb2");

let R1 = document.getElementById("R1");
let Ru1=document.getElementById("Ru1");
let R2 = document.getElementById("R2");
let Ru2=document.getElementById("Ru2");

let Eimpact1 = document.getElementById("Eimpact1");
let Eiu1=document.getElementById("Eiu1");
let Eimpact2 = document.getElementById("Eimpact2");
let Eiu2=document.getElementById("Eiu2");
let Qfactor1 = document.getElementById("Qfactor1");
let Qfactor2 = document.getElementById("Qfactor2");

Ru2.disabled = true;
Ru1.disabled = true;
R2.disabled = true;
R1.disabled = true;

Eimpact1.disabled = true;
Eimpact2.disabled = true;
Qfactor1.disabled = true;
Qfactor2.disabled = true;




let K = 1;
let Kc = 10;
let MinDb, MaxDb, MinRPM, MaxRPM,RPM;
let Mac1 = Machine1.value;
let Ir, i;
let Et1,t1,Et2,t2,Q1,Q2,CDb, Ei1, Ei2;

/*synchronization of Db and Dv*/


Target1.addEventListener("change", function() {
  Qfactor1.value = "";
  Eimpact1.value = "";
  if (Target1.value === 'RPM') {
    Ru1.value='';
    R1.value='';
    
    for (let option of Ru1.options) {
      if (option.value !== '') {
        option.style.display = 'none';
      }
    }
    document.getElementById("RPM1G").style.display = "none"
    document.getElementById("t1G").style.display = "block";
    document.getElementById("Et1G").style.display = "block";

  }
    
  else if (Target1.value === 'Time') {
    Ru1.value='s';
    R1.value='';
    for (let option of Ru1.options) {
      if (option.value !== 's' && option.value !== 'm') {
        option.style.display = 'none';
      }
      else { option.style.display = 'block'; }
    }
    document.getElementById("RPM1G").style.display = "block";
    document.getElementById("t1G").style.display = "none";
    document.getElementById("Et1G").style.display = "block";
    
  }

  else if (Target1.value === '--Select a parameter--') {
      Ru1.value='';
      R1.value='';
      for (let option of Ru1.options) {
   option.style.display = 'none';
        }
    document.getElementById("RPM1G").style.display = "block";
    document.getElementById("t1G").style.display = "block";
    document.getElementById("Et1G").style.display = "block";
    
    }
  else {
    Ru1.value='J';
    R1.value='';
    for (let option of Ru1.options) {
      if (option.value !== 'J' && option.value !== 'KJ') {
        option.style.display = 'none';
      }
      else { option.style.display = 'block'; }
    }
     document.getElementById("RPM1G").style.display = "block";
    document.getElementById("t1G").style.display = "block";
    document.getElementById("Et1G").style.display = "none";
  }
});

Target2.addEventListener("change", function() {
  Qfactor2.value = "";
  Eimpact2.value = "";
  if (Target2.value === 'Frequency') {
    Ru2.value='Hz';
    R2.value='';
    for (let option of Ru2.options) {
      if (option.value !== 'Hz') {
        option.style.display = 'none';
      }
      else { option.style.display = 'block'; }
    }
    document.getElementById("f2G").style.display = "none";
    document.getElementById("t2G").style.display = "block";
    document.getElementById("Et2G").style.display = "block";
  }
  else if (Target2.value === 'Time') {
    Ru2.value='s';
    R2.value='';
    for (let option of Ru2.options) {
      if (option.value !== 's' && option.value !== 'm') {
        option.style.display = 'none';
      }
      else { option.style.display = 'block'; }
    }
    document.getElementById("f2G").style.display = "block";
    document.getElementById("t2G").style.display = "none";
    document.getElementById("Et2G").style.display = "block";
  }
    else if (Target2.value === '--Select a parameter--') {
      Ru2.value='';
      R2.value='';
      for (let option of Ru2.options) {
    option.style.display = 'none';
        }
      document.getElementById("f2G").style.display = "block";
      document.getElementById("t2G").style.display = "block";
      document.getElementById("Et2G").style.display = "block";
    }
  else {
    Ru2.value='J';
    R2.value='';
    for (let option of Ru2.options) {
      if (option.value !== 'J' && option.value !== 'KJ') {
        option.style.display = 'none';
      }
      else { option.style.display = 'block'; }
    }
    document.getElementById("f2G").style.display = "block";
    document.getElementById("t2G").style.display = "block";
    document.getElementById("Et2G").style.display = "none";
  }
});


Machine1.addEventListener("change", function() {
  updateDp();
  updateI();
  if (Machine1.value === "Others") {
    Dpu1.disabled = false;
    Dp1.disabled = false;
  }
  else {
    Dpu1.disabled = true;
    Dp1.disabled = true;
  }
});

Dplate1.addEventListener("input", function() {
  updateI();
});
Dpunit1.addEventListener("change", function() {
  updateI();
  updateDp();
});
Dvial1.addEventListener('input', function() {
  updateI();
});
Dvunit1.addEventListener('input', function() {
  updateI();
});
Ttype1.addEventListener("change", updateI);
/*machine dependent Dp update*/
function updateDp() {
  
  let Mac1=Machine1.value; 
  let Dpu1 = Dpunit1.value;
  let Dp1 = parseFloat(Dplate1.value);

  if (Mac1 === "PULVERISETTE 7 premium line") {
    Rp = 0.07;
    Dp1 = Rp * 2000;
    Dpu1 = "mm";
  }
  else if (Mac1 === "PULVERISETTE 7 classic line") {
    Rp = 0.07;
    Dp1 = Rp * 2000;
    Dpu1 = "mm";
  }
  else if (Mac1 === "PULVERISETTE 5/2 classic line") {
    Rp = 0.125;
    Dp1 = Rp * 2000;
    Dpu1 = "mm";
  }
  else {
    Dp1 = parseFloat(Dplate1.value);
    Dpu1 = Dpunit1.value;
  }
  Dplate1.value = Dp1;
  Dpunit1.value = Dpu1;


}
function updateI() {
  let i;
  let Mac1=Machine1.value; 


  let Dv1 = parseFloat(Dvial1.value);
  let Dvu1 = Dvunit1.value;
  if (Dvu1 === "mm") { Dv1 = Dv1 / 1000; }
  else if (Dvu1 === "cm") { Dv1 = Dv1 / 100; }
  else { Dv1 = Dv1; }
  let Rv1 = Dv1 / 2;

  let Dp1 = parseFloat(Dplate1.value);
  let Dpu1 = Dpunit1.value;
  if (Dpu1 === "mm") { Dp1 = Dp1 / 1000; }
  else if (Dpu1 === "cm") { Dp1 = Dp1 / 100; }
  else { Dp1 = Dp1; }
  let Rp1 = Dp1 / 2;

  if (Mac1 === "PULVERISETTE 7 premium line") {
    Ir = 2;

  } else if (Mac1 === "PULVERISETTE 7 classic line") {
    Ir = 2;
  } else if (Mac1 === "PULVERISETTE 5/2 classic line") {
    Ir = 2.19;
  }
  else if (Mac1 === "Others") {
    Ir = parseFloat(Tratio1.value);
  }
  if (Ttype1.value === "I_critical") {
    i = 1 + Math.sqrt(Rp1 / Rv1);
  }
  else if (Ttype1.value === "I_relative") {
    i = Ir;
  }
  else if (Ttype1.value === "Others") {
    i = parseFloat(Tratio1.value);
  }
  Tratio1.value = i;

  if (Ttype1.value === "Others") {
    Tratio1.disabled = false;
  }
  else {
    Tratio1.disabled = true;
    if (Mac1 === "Others") {
      Tratio1.disabled = false;
      if (Ttype1.value === "I_critical") {
        Tratio1.disabled = true;
      }
    }
  }
}


/* from here we need to calculate something..*/
let buttonCal1 = document.getElementById("Cal1");

buttonCal1.addEventListener("click", function() {

  let Mac1=Machine1.value; 
  RPM=parseFloat(RPerM1.value);
  let Db1 = parseFloat(Dball1.value);
  let Dbu1 = Dbunit1.value;
  if (Dbu1 === "mm") { CDb = Db1 / 1000; }
  else if (Dbu1 === "cm") { CDb = Db1 / 100; }
  else { CDb = Db1; }
  let Rb1 = CDb / 2;

  Dv1 = parseFloat(Dvial1.value);
  let Dvu1 = Dvunit1.value;
  if (Dvu1 === "mm") { Dv1 = Dv1 / 1000; }
  else if (Dvu1 === "cm") { Dv1 = Dv1 / 100; }
  else { Dv1 = Dv1; }
  let Rv1 = Dv1 / 2;
  /* fixed values by machine*/
  if (Mac1 === "PULVERISETTE 7 premium line") {
    MinDb = 0.0001;
    MaxDb = 0.02;
    MinRPM = 150;
    MaxRPM = 1100;

  } else if (Mac1 === "PULVERISETTE 7 classic line") {
    MinDb = 0.0001;
    MaxDb = 0.015;
    MinRPM = 100;
    MaxRPM = 800;

  } else if (Mac1 === "PULVERISETTE 5/2 classic line") {
    MinDb = 0.0001;
    MaxDb = 0.04;
    MinRPM = 50;
    MaxRPM = 400;

  } else {
    MinDb = 0;
    MaxDb = 100000;
    MinRPM = 0;
    MaxRPM = 1000000;
  }
  /* value warning*/


  let Dp1 = parseFloat(Dplate1.value);
  let Dpu1 = Dpunit1.value;
  if (Dpu1 === "mm") { Dp1 = Dp1 / 1000; }
  else if (Dpu1 === "cm") { Dp1 = Dp1 / 100; }
  else { Dp1 = Dp1; }
  let Rp1 = Dp1 / 2;

  let Mb1 = parseFloat(Mball1.value);
  let Mbu1 = Mbunit1.value;
  if (Mbu1 === "mg") { Mb1 = Mb1 / 1000000; }
  else if (Mbu1 === "g") { Mb1 = Mb1 / 1000; }
  else { Mb1 = Mb1; }

  let i = Tratio1.value;


  let Hv1 = parseFloat(Hvial1.value);
  let Hvu1 = Hvunit1.value;
  if (Hvu1 === "mm") { Hv1 = Hv1 / 1000; }
  else if (Hvu1 === "cm") { H1 = Hv1 / 100; }
  else { Hv1 = Hv1; }

  let Nb1 = parseFloat(Nball1.value);
  let t1 = parseFloat(time1.value);
  let tu1 = tunit1.value;
  if (tu1 === "m") { t1 = t1 * 60; }
  else { t1 = t1; }
  Et1 = parseFloat(Etotal1.value);
  let Etu1 = Etunit1.value;
  if (Etu1 === "KJ") { Et1 = Et1 * 1000; }
  else { Et1 = Et1; }



  if (Target1.value === "Time") {

    let wp1 = 2 * Math.PI * RPM / 60;
    let wv1 = -i * wp1;
    let Vb = Math.sqrt((wp1 * Rp1) ** 2 + wv1 ** 2 * (Rv1 - Rb1) ** 2 * (1 - 2 * wv1 / wp1));
    let Vs = Math.sqrt((wp1 * Rp1) ** 2 + wv1 ** 2 * (Rv1 - Rb1) ** 2 + 2 * wp1 * wv1 * Rp1 * (Rv1 - Rb1));
     Ei1 = 0.5 * Mb1 * (Vb ** 2 - Vs ** 2);

    let Nbv1 = Math.PI * Dv1 ** 2 * Hv1 / 4 * CDb ** (-3);
    let Nv1 = Nb1 / Nbv1;
    let Nbs1 = Math.PI * (Dv1 - CDb) * Hv1 / 3 * CDb ** (-2);
    let Ns1 = Nb1 / Nbs1;

    let e1 = Math.log(1 - 0.95) / Math.log(Nbs1 / Nbv1);
    Q1 = 1 - Math.pow(Nv1, e1);



    let fb1 = K * (wp1 - wv1) / (2 * Math.PI);
    t1 = Et1 / (Q1 * Ei1 * Nb1 * fb1);
    if (Ru1.value==="m"){
      R1.value=t1/60;
    time1.value=t1/60;}
    else {R1.value = t1;
          time1.value=R1.value;}
    tunit1.value=Ru1.value;
    
    if (RPM < MinRPM || RPM > MaxRPM) {
      alert(`Please enter RPM between ${MinRPM} and ${MaxRPM}.`)
      return;}
  
  }
  else if (Target1.value === "RPM") {

    let wp1 = 2 * Math.PI / 60;
    let wv1 = -i * wp1;
    let Vb = Math.sqrt((wp1 * Rp1) ** 2 + wv1 ** 2 * (Rv1 - Rb1) ** 2 * (1 - 2 * wv1 / wp1));
    let Vs = Math.sqrt((wp1 * Rp1) ** 2 + wv1 ** 2 * (Rv1 - Rb1) ** 2 + 2 * wp1 * wv1 * Rp1 * (Rv1 - Rb1));
    Ei1 = 0.5 * Mb1 * (Vb ** 2 - Vs ** 2);

    let Nbv1 = Math.PI * Dv1 ** 2 * Hv1 / 4 * CDb ** (-3);
    let Nv1 = Nb1 / Nbv1;
    let Nbs1 = Math.PI * (Dv1 - CDb) * Hv1 / 3 * CDb ** (-2);
    let Ns1 = Nb1 / Nbs1;

    let e1 = Math.log(1 - 0.95) / Math.log(Nbs1 / Nbv1);
    Q1 = 1 - Math.pow(Nv1, e1);

    let fb1 = K * (wp1 - wv1) / (2 * Math.PI);

    RPM = Math.pow(Et1 / (Q1 * Ei1 * Nb1 * fb1 * t1), 1 / 3);
    R1.value = RPM;
    RPerM1.value = RPM;
    
    
    
    if (RPM < MinRPM || RPM > MaxRPM) {
      alert(`Calculated RPM(${RPM.toFixed(2)}) is not within the acceptable range of ${MinRPM} and ${MaxRPM}. Please adjust the parameters accordingly.`)
      return;}


  } else {
    let wp1 = 2 * Math.PI * RPM / 60;
    let wv1 = -i * wp1;
    let Vb = Math.sqrt((wp1 * Rp1) ** 2 + wv1 ** 2 * (Rv1 - Rb1) ** 2 * (1 - 2 * wv1 / wp1));
    let Vs = Math.sqrt((wp1 * Rp1) ** 2 + wv1 ** 2 * (Rv1 - Rb1) ** 2 + 2 * wp1 * wv1 * Rp1 * (Rv1 - Rb1));
    Ei1 = 0.5 * Mb1 * (Vb ** 2 - Vs ** 2);

    let Nbv1 = Math.PI * Dv1 ** 2 * Hv1 / 4 * CDb ** (-3);
    let Nv1 = Nb1 / Nbv1;
    let Nbs1 = Math.PI * (Dv1 - CDb) * Hv1 / 3 * CDb ** (-2);
    let Ns1 = Nb1 / Nbs1;

    let e1 = Math.log(1 - 0.95) / Math.log(Nbs1 / Nbv1);
    Q1 = 1 - Math.pow(Nv1, e1);

    let fb1 = K * (wp1 - wv1) / (2 * Math.PI);
    
    Et1 = Q1 * Ei1 * Nb1 * fb1 * t1;

    if (Ru1.value==="KJ"){
      R1.value=Et1/1000;
    Etotal1.value=Et1/1000;}
    else {
      Etotal1.value=Et1;
      R1.value = Et1;}
    Etunit1.value=Ru1.value;

    
    
    if (RPM < MinRPM || RPM > MaxRPM) {
      alert(`Please enter RPM between ${MinRPM} and ${MaxRPM}.`)
      return;}
  }
  Qfactor1.value=Q1;
  if (Eiu1.value==="KJ"){Eimpact1.value=Ei1/1000;}
  else {Eimpact1.value = Ei1;}
  if (Q1 <= 0 || Q1 >= 1) {
    alert(`Calculated Q is not within the acceptable range of 0 to 1. Please adjust the parameters accordingly.`)
    return;
  }
  if (CDb < MinDb || CDb > MaxDb) {
    alert(`Please enter a ball diameter between ${MinDb * 1000} and ${MaxDb * 1000} mm.`)
    return;
  }


});

Ru1.addEventListener("change",function(){
    if (Ru1.value ==="m") {
      R1.value=t1/60;
      time1.value=R1.value;
      tunit1.value=Ru1.value;
    }
    else if (Ru1.value ==="s") {
      R1.value=t1;
    time1.value=R1.value;
    tunit1.value=Ru1.value;}
    else if (Ru1.value==="KJ"){
      R1.value= Et1/1000;
    Etotal1.value=R1.value;
    Etunit1.value=Ru1.value;}
    else if(
      Ru1.value==="J"){
      R1.value=Et1;
      Etotal1.value=R1.value;
      Etunit1.value=Ru1.value;}
  });
  
document.getElementById('Target1').addEventListener('change', function() {
const selectedOption = this.value;

Ru1.disabled = false;
// Update label text based on selected option
switch (selectedOption) {
  case 'Cumulative Energy(Et)':
    targetLabel1.innerHTML = 'E<sub>t</sub> = ';
    break;
  case 'RPM':
    targetLabel1.innerHTML = 'RPM = ';
    break;
  case 'Time':
    targetLabel1.innerHTML = 'Time = ';
    break;
  default:
    targetLabel1.innerHTML = 'Result = ';
    Ru1.disabled = true;
    break;
}
});

let buttonCl1 = document.getElementById("Clear1");

buttonCl1.addEventListener("click", function() {
  Target1.value = "--Select a parameter--"
  Machine1.value = "--Select a machine--"; // Replace with default value if available
  Dplate1.value = "";
  Dpunit1.value = "mm"; // Replace with default value if available
  Dvial1.value = "";
  Dvunit1.value = "mm"; // Replace with default value if available
  Tratio1.value = "";
  Ttype1.value = ""; // Replace with default value if available
  Hvial1.value = "";
  Hvunit1.value = "mm"; // Replace with default value if available
  Dball1.value = "";
  Dbunit1.value = "mm"; // Replace with default value if available
  Mball1.value = "";
  Mbunit1.value = "mg"; // Replace with default value if available
  Nball1.value = "";
  targetLabel1.innerHTML="Result = ";
  R1.value = "";
  Ru1.value = "";
  t1="";
  Et1="";
  Ru1.disabled = true;
  Qfactor1.value = "";
  Eimpact1.value = "";
  Eiu1.value = "J";

  

  // Reset the display of elements if needed
  document.getElementById("RPM1G").style.display = "block";
  document.getElementById("t1G").style.display = "block";
  document.getElementById("Et1G").style.display = "block";
  RPerM1.value = "";
  time1.value = ""; 
  tunit1.value = "s";
  Etotal1.value = "";
  Etunit1.value = "J"
});




let buttonCal2 = document.getElementById("Cal2");
buttonCal2.addEventListener("click", function() {

  let Dv2 = parseFloat(Dvial2.value);
  let Dvu2 = Dvunit2.value;
  let Mb2 = parseFloat(Mball2.value);
  let Mbu2 = Mbunit2.value;

  if (Dvu2 === "mm") {
    Dv2 = Dv2 / 1000;
  } else if (Dvu2 === "cm") {
    Dv2 = Dv2 / 100;
  } else { Dv2 = Dv2; }
  if (Mbu2 === "mg") {
    Mb2 = Mb2 / 1000000;
  } else if (Mbu2 === "g") {
    Mb2 = Mb2 / 1000;
  } else { Mb2 = Mb2; }

  let Db2 = parseFloat(Dball2.value);
  let Dbu2 = Dbunit2.value;
  let Hv2 = parseFloat(Hvial2.value);
  let Hvu2 = Hvunit2.value;
  let Nb2 = parseFloat(Nball2.value);
  if (Dbu2 === "mm") {
    Db2 = Db2 / 1000;
  } else if (Dbu2 === "cm") {
    Db2 = Db2 / 100;
  } else { Db2 = Db2; }
  if (Hvu2 === "mm") {
    Hv2 = Hv2 / 1000
  } else if (Hvu2 === "cm") {
    Hv2 = Hv2 / 100;
  } else { Hv2 = Hv2; }
   t2 = parseFloat(time2.value);
  let tu2 = tunit2.value;
  if (tu2 === "m") { t2 = t2 * 60; }
  else { t2 = t2; }
  Et2 = parseFloat(Etotal2.value);
  if (Etunit2.value === "KJ") {
    Et2 = Et2 * 1000;
  }

  if (Target2.value === "Frequency") {

    let Nbv = Math.PI * Dv2 ** 2 * Hv2 / 4 * Db2 ** (-3);
    let Nv = Nb2 / Nbv;
    let Nbs = Math.PI * (Dv2 - Db2) * Hv2 / 3 * Db2 ** (-2)
    let e = Math.log(1 - 0.95) / Math.log(Nbs / Nbv);

    Q2 = 1 - Math.pow(Nv, e);

    
    R2.value = Math.pow((Et2 * 2 / (Q2 * Mb2 * Nb2 * t2 * Kc * Math.PI ** 2 * Dv2 ** 2)), 1 / 3);
    f2.value=R2.value;
    Ei2 = 0.5 * Mb2 * (2 * Math.PI * R2.value * 0.5 * Dv2) ** 2;

  }
  else if (Target2.value === "Time") {

    Ei2 = 0.5 * Mb2 * (2 * Math.PI * f2.value * 0.5 * Dv2) ** 2;

    let Nbv = Math.PI * Dv2 ** 2 * Hv2 / 4 * Db2 ** (-3);
    let Nv = Nb2 / Nbv;
    let Nbs = Math.PI * (Dv2 - Db2) * Hv2 / 3 * Db2 ** (-2)
    let e = Math.log(1 - 0.95) / Math.log(Nbs / Nbv);

    Q2 = 1 - Math.pow(Nv, e);

    

    t2 = Et2 / (Q2 * Ei2 * Nb2 * K * f2.value * Kc);
    if (Ru2.value==="m"){
      R2.value=t2/60;
    time2.value=t2/60;
    }
    else {
      R2.value = t2;
      time2.value = t2;
    }
    tunit2.value="Ru2.value";

  }
  else {
    Ei2 = 0.5 * Mb2 * (2 * Math.PI * f2.value * 0.5 * Dv2) ** 2;

    let Nbv = Math.PI * Dv2 ** 2 * Hv2 / 4 * Db2 ** (-3);
    let Nv = Nb2 / Nbv;
    let Nbs = Math.PI * (Dv2 - Db2) * Hv2 / 3 * Db2 ** (-2)
    let e = Math.log(1 - 0.95) / Math.log(Nbs / Nbv);

    Q2 = 1 - Math.pow(Nv, e);

    

    Et2 = Q2 * Ei2 * Nb2 * K * f2.value * t2 * Kc;
    if (Ru2.value==="KJ"){
      R2.value=Et2/1000;
    Etotal2.value=Et2/1000;
    }
    else {R2.value = Et2;
         Etotal2.value = Et2;}
    Etunit2.value=Ru2.value
  }
  
  Qfactor2.value=Q2;
  
  if (Eiu2.value==="KJ"){Eimpact2.value=Ei2/1000;}
  else {Eimpact2.value = Ei2;}
  
  if (Q2 <= 0 || Q2 >= 1) {
    alert(`Calculated Q is not within the acceptable range of 0 to 1. Please adjust the parameters accordingly.`)
    return;}
});

Ru2.addEventListener("change",function(){
  if (Ru2.value ==="m") { 
    R2.value=t2/60; 
    time2.value=R2.value;
  tunit2.value=Ru2.value;}
  else if (Ru2.value ==="s") {
    R2.value=t2;
  time2.value=R2.value;
  tunit2.value=Ru2.value;}
  else if (Ru2.value==="KJ"){
    R2.value= Et2/1000;
    Etotal2.value=R2.value;
    Etunit2.value=Ru2.value;
  }
  else if(Ru2.value==="J"){
    R2.value=Et2;
  Etotal2.value=R2.value;
  Etunit2.value=Ru2.value;}
  
});

Eiu1.addEventListener("change",function(){
  if (Eiu1.value==="KJ"){Eimpact1.value= Ei1/1000;}
  else {Eimpact1.value=Ei1;}
});
Eiu2.addEventListener("change",function(){
  if (Eiu2.value==="KJ"){Eimpact2.value= Ei2/1000;}
  else {Eimpact2.value=Ei2;}
});


let buttonCl2 = document.getElementById("Clear2");

buttonCl2.addEventListener("click", function() {
  Target2.value = "--Select a parameter--"
  Dvial2.value = "";
  Dvunit2.value = "mm";
  Hvial2.value = "";
  Hvunit2.value = "mm";
  Dball2.value = "";
  Dbunit2.value = "mm";
  Mball2.value = "";
  Mbunit2.value = "mg";
  Nball2.value = "";
  R2.value = "";
  Ru2.value = "";
  t2="";
  Et2="";
  Ru2.disabled = true;
  
  targetLabel2.innerHTML="Result = ";
  document.getElementById("f2G").style.display = "block";
  document.getElementById("t2G").style.display = "block";
  document.getElementById("Et2G").style.display = "block";
  f2.value = "";
  time2.value = "";
  tunit2.value = "s";
  Etotal2.value = "";
  Etunit2.value = "J";
  Qfactor2.value = "";
  Eimpact2.value = "";
  Eiu2.value = "J";


  
});
  
document.getElementById('Target2').addEventListener('change', function() {
  const selectedOption = this.value;
  
  Ru2.disabled = false;
  // Update label text based on selected option
  switch (selectedOption) {
    case 'Cumulative Energy(Et)':
      targetLabel2.innerHTML = 'E<sub>t</sub> = ';
      break;
    case 'Frequency':
      targetLabel2.innerHTML = 'F = ';
      break;
    case 'Time':
      targetLabel2.innerHTML = 'Time = ';
      break;
    default:
      targetLabel2.innerHTML = 'Result = ';
      Ru2.disabled = true;
      break;
  }
});

const Save1 = document.getElementById('Save1'); // Replace 'saveButton' with your button's ID
Save1.addEventListener('click', saveToExcel1);
const Save2 = document.getElementById('Save2'); // Replace 'saveButton' with your button's ID
Save2.addEventListener('click', saveToExcel2);

function saveToExcel1() {
  // Data to be saved
  const data = [
    ['Machine', 'Effective diameter of main disk','unit','Diameter of vial','unit','Transmission ratio','Type','height of vial','unit', 'Diameter of a ball','unit','Mass of ball','unit','number of ball','RPM','time','unit','cumulative E','unit','impact E','unit','Q factor'],
    [Machine1.value,Dplate1.value,Dpunit1.value,Dvial1.value,Dvunit1.value, Tratio1.value,Ttype1.value, Hvial1.value,Hvunit1.value,Dball1.value,Dbunit1.value,Mball1.value,Mbunit1.value,Nball1.value,RPerM1.value,time1.value,tunit1.value,Etotal1.value,Etunit1.value,Eimpact1.value,Eiu1.value,Qfactor1.value]
  ];

  // Create a new workbook
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Convert the workbook to a binary XLSX file and save it
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  saveAs(
    new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
    'ball-milling-data.xlsx'
  );
}
function saveToExcel2() {
  // Data to be saved
  const data = [
    ['Diameter of vial','unit','height of vial','unit', 'Diameter of a ball','unit','Mass of ball','unit','number of ball','Frequency','unit','time','unit','cumulative E','unit','impact E','unit','Q factor'],
    [Dvial2.value,Dvunit2.value,Hvial2.value,Hvunit2.value,Dball2.value,Dbunit2.value,Mball2.value,Mbunit2.value,Nball2.value,f2.value,fu2.value,time2.value,tunit2.value,Etotal2.value,Etunit2.value,Eimpact2.value,Eiu2.value,Qfactor2.value]
  ];

  // Create a new workbook
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Convert the workbook to a binary XLSX file and save it
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  saveAs(
    new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
    'ball-milling-data.xlsx'
  );
}