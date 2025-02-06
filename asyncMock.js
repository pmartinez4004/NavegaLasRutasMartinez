const products = [
  /*
    id: 1,
    title: 'Remera',
    price: '1000',
    category: 'deportes',
    description: 'talles: XL, L, M, S, XS',
    image:
    './img/interruptor1.jpg'
     // 'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
  },
  {
    id: 2,
    title: 'Short',
    price: '2000',
    category: 'deportes',
    description: 'talles: 38, 40, 42, 44, 50, 52',
    image:
      'https://modadeportiva.com.ar/wp-content/uploads/2015/10/Keywhoss-Shorts-deportivos-rustico-negro-para-mujer-2016-150x150.jpg',
  },
  {
    id: 30,
    title: 'Buzo',
    price: '3000',
    category: 'urbana',
    description: 'Colores: rojo, azul y verde',
    image:
      'https://winprom.com.ar/wp-content/uploads/2020/06/buzo-1-150x150.jpg',
  },*/
  {
  id: 1,
      title: 'Monitor',
      price: '1000',
      category: 'electricidad',
      description: 'Monitor y protector de tension trifasico',
      image:
        //'./img/monitor1.jpg',
        '/img/protector1.jpg',
    },
    {
      id: 2,
      title: 'Interruptor',
      price: '500',
      category: 'electricidad',
      description: 'Interruptor On-Off industrial',
      image:
        '/img/interruptor1.jpg',
    },
    {
      id: 3,
      title: 'Velador',
      price: '750',
      category: 'iluminacion',
      description: 'Velador neo simetrico',
      image:
        '/img/velador1.jpg',
    },
    {
      id: 4,
      title: 'Multimetro',
      price: '850',
      category: 'accesorios',
      description: 'Multimetro digital 2000 puntos',
      
      image:  '/img/multimetro1.jpg',
    },
    {
    id: 5,
      title: 'Cinta aisladora',
      price: '100',
      category: 'accesorios',
      description: 'Cinta aisladora 18mm x 20 metros',
      image: 
        '/img/cinta1.jpg',
    },
    {
      id: 6,
      title: 'Contactor',
      price: '2500',
      category: 'electricidad',
      description: 'Contactor tetrapolar 63A',
      image:
        '/img/contactor1.jpg',
    },
    {
      id: 7,
      title: 'Lampara',
      price: '1900',
      category: 'iluminacion',
      description: 'lampara colgante ultraliviana',
      image:
        '/img/lampara1.jpg',
    },
    {
      id: 8,
      title: 'Lampara RGB',
      price: '1400',
      category: 'iluminacion',
      description: 'Rampara RBG con contro por WiFi',
      image:
        '/img/lamparaRGB1.jpg',
    },
    {
  id: 9,
  title: 'Modulo llave',
  price: '100',
  category: 'electricidad',
  description: 'Modulo para interruptor 220V 10A',
  image:
    //'./img/moni.jpg',
    '/img/llave1.jpg',
},
{
  id: 10,
  title: 'Ojo de Buey',
  price: '450',
  category: 'accesorios',
  description: 'Ojo de Buey indicador de tensión',
  image:
    '/img/ojoBuey1.jpg',
},
{
  id: 11,
  title: 'Plafon 4 lamparas',
  price: '2750',
  category: 'iluminacion',
  description: 'Plafon para 4 lamparas led AR111',
  image:
    '/img/plafon1.jpg',
},
{
  id: 12,
  title: 'Pulsador Salida',
  price: '1650',
  category: 'accesorios',
  description: 'Pulsador sin contacto para apertura de puertas',
  image:
    '/img/pulsador1.jpg',
},
{
id: 13,
  title: 'Puntas de tester',
  price: '990',
  category: 'accesorios',
  description: 'Juegode puntas de tester aisladas 380V',
  image:
    //'./img/monitor1.jpg',
    '/img/puntasDeTester1.jpg',
},
{
  id: 14,
  title: 'Relevo térmico',
  price: '1400',
  category: 'electricidad',
  description: 'Relevo termico para guardamotor 25A',
  image:
    '/img/relevo1.jpg',
},
{
  id: 15,
  title: 'Tira Led RGB',
  price: '1200',
  category: 'iluminacion',
  description: 'Tira Led RGB 5 metros con conteol remoto',
  image:
    '/img/tiraLed1.jpg',
}
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
      //va a retornar un array de prods que cumplan con esa condicion
    }, 2000);
  });
};
