// INFORMACIÓN BASE

const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://www.shutterstock.com/image-photo/looking-through-grand-entrance-gates-600w-564889609.jpg",
    rooms: 5,
    m: 500,
  },
];

//onclick

const filtrarPropiedades = () => {
  //console.log("Filtrar propiedades");

  //todos los campos tienen valor
  //tomar valores de los inputs
  // si todos tienen valor, si no aparece alert!

  const cantidadDeCuartos = document.getElementById("cuartos").value;
  const metrosDesde = document.getElementById("desde").value;
  const metrosHasta = document.getElementById("hasta").value;

//imprimir
//console.log("cantidadDeCuartos, metrosDesde, metrosHasta");
 

  //evaluar si tienen valores

  if (cantidadDeCuartos && metrosDesde && metrosHasta) {
    mostrarPropiedades(cantidadDeCuartos, metrosDesde, metrosHasta);
  } else {
    alert("faltan campos por llenar");
  }
};

const mostrarPropiedades = (rooms, desde, hasta) => {
  // console.log(`Filtrar propiedades ${rooms} desde ${desde} hasta ${hasta}`);
  let galeria = document.querySelector('.propiedades');
  let propiedades = "";
  let cantidad = 0;

  //propiedadesJSON 

  for (const propiedad of propiedadesJSON) {
    if ((propiedad.rooms == rooms && propiedad.m >= desde && propiedad.m <= hasta) || (rooms == "*" && desde == "*" && hasta == "*"))
      



    {
      propiedades += `<div class="propiedad">
       <div class="img" style="background-image: url(${propiedad.src})"></div>    
      <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
              <p>${propiedad.rooms} Cuartos</p>   
              <p>${propiedad.m} Metros</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info">Ver más</button>
      </section>
      </div>`;
  cantidad++;
    }
  }


  galeria.innerHTML = propiedades;
  document.querySelector("#total").innerHTML = cantidad;
};

mostrarPropiedades('*', '*', '*'); 

