let prom1 = new Promise( function ( resolve, reject){

    setTimeout( () => {
      console.log("promesa terminada");
      // Termina bien
      resolve();
      // Termina mal
      //reject();
    }, 1500);

 });

 console.log("paso 1");

 prom1.then(function(){console.log("ha terminado bien")}, function(){console.error("algo salió mal")});


console.log("paso 2");
