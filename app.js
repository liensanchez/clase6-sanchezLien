//array se marca con los corchetes ][
  const mixto=[1,"Lien",3,4," Sanchez"];
  let suma= mixto [0] + mixto[2];
  let nombre= mixto[1]+mixto[4]
  console.log (suma);
  console.log(nombre);
  
  //RECORRIDO DEL ARRAY
  for (let index=0;index<5;index++){
      alert(mixto[index]);
  }
  
  //CONVERTIRLA A STRING
  console.log(mixto.toString());
  
  
  //====================================//
  const listaempleados=[];
  let cantidad = 4;
  do{
      let entrada=prompt("ingresar nombre");
      listaempleados.push(entrada.toUpperCase());
      console.log(listaempleados.length);
  }while(listaempleados.length!=cantidad)
  const nuevalista=listaempleados.concat(["lien","agustin"]);
  alert(nuevalista.join("\n"));
  
  //==============array de objetos======================//
  const obj1={id:1, producto:"perfume"};
  const arrayobj = [obj2, {id:2, producto:"crema"}];
  arrayobj.push({id:3, producto:"bolsa de regalo"});