import americanDryfruits from "./product-images/americanDryfruits.jpg";
import anjir from "./product-images/anjir.png";
import badamshake1 from "./product-images/badamshake1.jpg";
import badamshake2 from "./product-images/badamshake2.jpg";
import blackCurrant1 from "./product-images/blackCurrant1.jpg";
import blackCurrant2 from "./product-images/blackCurrant2.jpg";
import blackCurrant3 from "./product-images/blackCurrant3.png";
import blackCurrentShake1 from "./product-images/blackcurrentShake1.jpg";
import blackCurrentShake2 from "./product-images/blackcurrentShake2.jpg";
import bluBerry1 from "./product-images/bluBerry1.jpg";
import bluBerry2 from "./product-images/bluBerry2.jpg";
import bluBerry3 from "./product-images/bluBerry3.jpg";
import bluBerry4 from "./product-images/bluBerry4.jpg";
import brownie1 from "./product-images/brownie1.jpg";
import brownie2 from "./product-images/brownie2.jpg";
import brownie3 from "./product-images/brownie3.jpg";
import casata from "./product-images/casata.jpg";
import cherryChocolate from "./product-images/cherryChocolate.png";
import chocochip1 from "./product-images/chocoChip1.jpg";
import chocochip2 from "./product-images/chocoChip2.jpg";
import chocochip3 from "./product-images/chocoChip3.jpg";
import chocolateShake1 from "./product-images/chocolateShake1.jpg";
import chocolateShake2 from "./product-images/chocolateShake2.jpg";
import chocolateShake3 from "./product-images/chocolateShake3.jpg";
import chocolateShake4 from "./product-images/chocolateShake4.jpg";
import coffee1 from "./product-images/coffee1.jpg";
import coffee2 from "./product-images/coffee2.jpg";
import coffee3 from "./product-images/coffee3.png";
import coffee4 from "./product-images/coffee4.jpg";
import coldCoffee1 from "./product-images/coldCoffee1.jpg";
import coldCoffee2 from "./product-images/coldCoffee2.jpg";
import dragon from "./product-images/dragon.png";
import fabBurbon from "./product-images/fabBurbon.jpg";
import faluda1 from "./product-images/faluda1.jpg";
import faluda2 from "./product-images/faluda2.jpg";
import faluda3 from "./product-images/faluda3.jpg";
import faluda4 from "./product-images/faluda4.jpg";
import guava1 from "./product-images/guava1.jpg";
import guava2 from "./product-images/guava2.png";
import gulkand1 from "./product-images/gulkand1.jpg";
import gulkand2 from "./product-images/gulkand2.png";
import honeyDates from "./product-images/honeyDates.png";
import hotCoffee1 from "./product-images/hotCoffee1.jpg";
import hotCoffee2 from "./product-images/hotCoffee2.jpg";
import hotCoffee3 from "./product-images/hotCoffee3.jpg";
import kajuMawa from "./product-images/kajuMawa.png";
import kesarAlmond from "./product-images/kesarAlmond.jpg";
import kiwi1 from "./product-images/kiwi1.jpg";
import kiwi2 from "./product-images/kiwi2.jpg";
import kiwi3 from "./product-images/kiwi3.jpg";
import kiwi4 from "./product-images/kiwi4.jpg";
import kulfi1 from "./product-images/kulfi2.jpg";
import kulfi2 from "./product-images/kulfi1.jpg";
import kulfi3 from "./product-images/kulfi3.jpg";
import kulfi4 from "./product-images/kulfi4.jpg";
import lichi from "./product-images/lichi.jpg";
import mango from "./product-images/mango1.png";
import mangoShake1 from "./product-images/mangoShake1.jpg";
import mangoShake2 from "./product-images/mangoShake2.jpg";
import mangoShake3 from "./product-images/mangoShake3.jpg";
import mangoShake4 from "./product-images/mangoShake4.jpg";
import mawaMalai from "./product-images/mawaMalai.jpg";
import mocktail1 from "./product-images/mocktail1.jpg";
import mocktail2 from "./product-images/mocktail2.jpg";
import mocktail3 from "./product-images/mocktail3.jpg";
import oreo from "./product-images/oreo.jpg";
import oreoShake1 from "./product-images/oreoShake1.jpg";
import oreoShake2 from "./product-images/oreoShake2.jpg";
import oreoShake3 from "./product-images/oreoShake3.jpg";
import oreoShake4 from "./product-images/oreoShake4.jpg";
import pineapple1 from "./product-images/pineapple1.jpg";
import pineapple2 from "./product-images/pineapple2.jpg";
import pineapple3 from "./product-images/pineapple3.jpg";
import pistachio1 from "./product-images/pistachio1.jpg";
import pistachio2 from "./product-images/pistachio2.jpg";
import pistachio3 from "./product-images/pistachio3.jpg";
import pistachio4 from "./product-images/pistachio4.jpg";
import rajbhog from "./product-images/rajbhog.png";
import sitafhal from "./product-images/sitafhal.jpg";
import sitafhalShake1 from "./product-images/sitafhalShake1.jpg";
import sitafhalShake2 from "./product-images/sitafhalShake2.jpg";
import sitafhalShake3 from "./product-images/sitafhalShake3.jpg";
import strawberry1 from "./product-images/strawberry1.jpg";
import strawberry2 from "./product-images/strawberry2.jpg";
import strawberry3 from "./product-images/strawberry3.jpg";
import strawberry4 from "./product-images/strawberry4.png";
import strawberryShake1 from "./product-images/strawberryShake1.jpg";
import strawberryShake2 from "./product-images/strawberryShake2.jpg";
import strongpan from "./product-images/strongpan.png";
import tenderCoconut from "./product-images/tenderCoconut.jpg";
import vanila from "./product-images/vanila.jpg";

const productData = [
  {
    _id: "FRUIT001",
    name: "Mango",
    price: {
      "40ml": 30,
      "80ml": 60,
      "350gm": 140,
      "400gm": 170,
      "500gm": 220,
      "1000gm": 440,
    },
    description: "Mango is a sweet and juicy fruit that is rich in vitamins and minerals. Mango is a tropical fruit that is native to South Asia.",
    image: [mango],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT002",
    name: "Pineapple",
    price: {
      "40ml": 30,
      "80ml": 60,
      "350gm": 140,
      "400gm": 170,
      "500gm": 220,
      "1000gm": 440,
    },
    description: "Pineapple is a tropical fruit that is rich in vitamins and minerals. Pineapple is a tropical fruit that is native to South Asia.",
    image: [pineapple1, pineapple2, pineapple3],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT003",
    name: "Sitafal",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Sitafal is a tropical fruit that is rich in vitamins and minerals. Sitafal is a tropical fruit that is native to South Asia.",
    image: [sitafhal],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT004",
    name: "Strawberry",
    price: {
      "40ml": 30,
      "80ml": 60,
      "350gm": 140,
      "400gm": 170,
      "500gm": 220,
      "1000gm": 440,
    },
    description: "Strawberry is a type of fruit that grows on palm trees. They are a very sweet fruit that is often dried and sold as dried fruit.",
    image: [strawberry1, strawberry2, strawberry3, strawberry4],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT005",
    name: "Tender Coconut",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Tender Coconut is a tropical fruit that is rich in vitamins and minerals. Tender Coconut is a tropical fruit that is native to South Asia.",
    image: [tenderCoconut],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT006",
    name: "Kiwi",
    price: {
      "40ml": 30,
      "80ml": 60,
      "350gm": 140,
      "400gm": 170,
      "500gm": 220,
      "1000gm": 440,
    },
    description: "Kiwi is a tropical fruit that is rich in vitamins and minerals. Kiwi is a tropical fruit that is native to South Asia.",
    image: [kiwi1, kiwi2, kiwi3, kiwi4],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT007",
    name: "Guava / Peru",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Guava is a tropical fruit that is rich in vitamins and minerals. Guava is a tropical fruit that is native to South Asia.",
    image: [guava1, guava2],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT008",
    name: "Blueberry",
    price: {
      "40ml": 30,
      "80ml": 60,
      "350gm": 140,
      "400gm": 170,
      "500gm": 220,
      "1000gm": 440,
    },
    description: "Blueberries are a type of fruit that grows on shrubs. They are a very sweet fruit that is often dried and sold as dried fruit.",
    image: [bluBerry1, bluBerry2, bluBerry3, bluBerry4],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "CLASSIC001",
    name: "Black Current",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Black Current is a tropical fruit that is rich in vitamins and minerals. Black Current is a tropical fruit that is native to South Asia.",
    image: [blackCurrant1, blackCurrant2, blackCurrant3],
    category: "classic",
    bestseller: false,
  },
  {
    _id: "FRUIT009",
    name: "Dragon Fruit",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Dragon fruit is a tropical fruit that is rich in vitamins and minerals. Dragon fruit is a tropical fruit that is native to South Asia.",
    image: [dragon],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "FRUIT010",
    name: "Lichi",
    price: {
      "40ml": 30,
      "80ml": 60,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Lichi is a tropical fruit that is rich in vitamins and minerals. Lichi is a tropical fruit that is native to South Asia.",
    image: [lichi],
    category: "fruit",
    bestseller: false,
  },
  {
    _id: "DRYFRUIT001",
    name: "Kesar Badam",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Kesar Badam is the ice cream that is made from kesar and badam. It is a very sweet and delicious ice cream that is often eaten as a dessert.",
    image: [kesarAlmond],
    category: "dry-fruit",
    bestseller: false,
  },
  {
    _id: "DRYFRUIT002",
    name: "Amrican Dryfruits",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "American Dryfruits is the ice cream that is made from dryfruits. It is a very sweet and delicious ice cream that is often eaten as a dessert.",
    image: [americanDryfruits],
    category: "dry-fruit",
    bestseller: true,
  },
  {
    _id: "DRYFRUIT003",
    name: "Pistachio",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Pistachio is the ice cream that is made from pistachio. It is a very sweet and delicious ice cream that is often eaten as a dessert.",
    image: [pistachio1, pistachio2, pistachio3, pistachio4],
    category: "dry-fruit",
    bestseller: false,
  },
  {
    _id: "DRYFRUIT004",
    name: "Anjir",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Anjir is the ice cream that is made from anjir. It is a very sweet and delicious ice cream that is often eaten as a dessert.",
    image: [anjir],
    category: "dry-fruit",
    bestseller: false,
  },
  {
    _id: "DRYFRUIT005",
    name: "Rajbhog",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Rajbhog icecream made up of dryfruits. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [rajbhog],
    category: "dry-fruit",
    bestseller: true,
  },
  {
    _id: "DRYFRUIT006",
    name: "Mawa Kaju",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Mawa Kaju icecream made up from milk and sugar. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [kajuMawa],
    category: "dry-fruit",
    bestseller: false,
  },
  {
    _id: "DRYFRUIT007",
    name: "Honew Dates",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Honey Dates icecream made up from milk and sugar. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [honeyDates],
    category: "dry-fruit",
    bestseller: false,
  },
  {
    _id: "CHOCOLATE001",
    name: "Brownie Bites",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Brownie Bites icecream made up from milk and Brownie Cake. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [brownie1, brownie2, brownie3],
    category: "chocolate",
    bestseller: true,
  },
  {
    _id: "CHOCOLATE002",
    name: "Oreo",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Oreo icecream made up from milk and oreo biscuits. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [oreo, fabBurbon],
    category: "chocolate",
    bestseller: true,
  },
  {
    _id: "CHOCOLATE003",
    name: "Coffee And Cream",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Coffee and cream is a delicious combination of coffee and cream. It is a perfect blend of coffee and cream.",
    image: [coffee3, coffee1, coffee2, coffee4],
    category: "chocolate",
    bestseller: true,
  },
  {
    _id: "CHOCOLATE004",
    name: "Cherry Chocolate",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Cherry Chocolate icecream made up from milk, chocolate and cherry. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [cherryChocolate],
    category: "chocolate",
    bestseller: true,
  },
  {
    _id: "CHOCOLATE005",
    name: "Chocochips",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Chocochips icecream made up from milk and chocochips. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [chocochip1, chocochip2, chocochip3],
    category: "chocolate",
    bestseller: true,
  },
  {
    _id: "CLASSIC002",
    name: "Mawa Malai",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Mawa Malai icecream made up from milk and sugar. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [mawaMalai],
    category: "classic",
    bestseller: false,
  },
  {
    _id: "CLASSIC003",
    name: "Vanila",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Vanila icecream made up from milk and sugar. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [vanila],
    category: "classic",
    bestseller: true,
  },
  {
    _id: "CLASSIC004",
    name: "Butterscotch",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Butterscotch icecream made up from milk, sugar and scotch. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [tenderCoconut],
    category: "classic",
    bestseller: true,
  },
  {
    _id: "CLASSIC005",
    name: "Gulkand",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Gulkand icecream made up from milk, rose petals and gulkand. It is a very sweet and delicious icecream that is often eaten as a dessert.",
    image: [gulkand1, gulkand2],
    category: "classic",
    bestseller: true,
  },
  {
    _id: "CLASSIC006",
    name: "Strong Pan",
    price: {
      "40ml": 40,
      "80ml": 80,
      "350gm": 160,
      "400gm": 190,
      "500gm": 240,
      "1000gm": 480,
    },
    description: "Pan is a type of dish that is made from betel leaves. It is a very sweet and delicious dish that is often eaten as a dessert.",
    image: [strongpan],
    category: "classic",
    bestseller: true,
  },
  {
    _id: "CLASSIC007",
    name: "Rainbow Casata",
    price: {
      "40ml": 60,
      "80ml": 120,
      "350gm": 250,
      "400gm": 280,
      "500gm": 350,
      "1000gm": 700,
    },
    description: "Pan is a type of dish that is made from betel leaves. It is a very sweet and delicious dish that is often eaten as a dessert.",
    image: [casata],
    category: "classic",
    bestseller: true,
  },
  {
    _id: "SHAKE001",
    name: "Badam Shake",
    price: {
      "40ml": 60,
    },
    description: "Badam Shake is a type of shake that is made from almonds. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [badamshake1, badamshake2],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "SHAKE002",
    name: "Chocolate Shake",
    price: {
      "40ml": 90,
    },
    description: "Chocolate Shake is a type of shake that is made from chocolate and milk. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [chocolateShake1, chocolateShake2, chocolateShake3, chocolateShake4],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "SHAKE003",
    name: "Oreo Shake",
    price: {
      "40ml": 95,
    },
    description: "Oreo Shake is a type of shake that is made from oreo biscuits. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [oreoShake1, oreoShake2, oreoShake3, oreoShake4],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "SHAKE004",
    name: "Black Current Shake",
    price: {
      "40ml": 95,
    },
    description: "Black Current Shake is a type of shake that is made from black current. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [blackCurrentShake2, blackCurrentShake1],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "SHAKE005",
    name: "Strawberry Shake",
    price: {
      "40ml": 90,
    },
    description: "Strawberry Shake is a type of shake that is made from strawberry. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [strawberryShake1, strawberryShake2],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "SHAKE006",
    name: "Sitafal Shake",
    price: {
      "40ml": 95,
    },
    description: "Sitafal Custard Shake is a type of shake that is made from sitafal and custard. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [sitafhalShake1, sitafhalShake2, sitafhalShake3],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "SHAKE007",
    name: "Mango Shake",
    price: {
      "40ml": 95,
    },
    description: "Mango Shake is a type of shake that is made from mango. It is a very sweet and delicious shake that is often eaten as a dessert.",
    image: [mangoShake1, mangoShake2, mangoShake3, mangoShake4],
    category: "shake",
    bestseller: true,
  },
  {
    _id: "KULFI001",
    name: "Mawa Kulfi",
    price: {
      "40ml": 20,
    },
    image: [kulfi3, kulfi4],
    description: "Kulfi is a type of frozen dairy dessert from the Indian Subcontinent.",
    category: "kulfi",
    bestseller: true,
  },
  {
    _id: "KULFI002",
    name: "Kesar Mawa Kulfi",
    price: {
      "40ml": 30,
    },
    image: [kulfi1, kulfi2],
    description: "Kesar Kulfi is a type of frozen dairy dessert from the Indian Subcontinent.",
    category: "kulfi",
    bestseller: false,
  },
  {
    _id: "MOCKTAIL001",
    name: "Mocha Frappucchino",
    price: {
      "40ml": 90,
    },
    description: "Mocha Frappucchino is a type of mocktail that is made from coffee and chocolate. It is a very sweet and delicious mocktail that is often eaten as a dessert.",
    image: [mocktail1, mocktail2, mocktail3],
    category: "mocktail",
    bestseller: true,
  },
  {
    _id: "COFFEE001",
    name: "Cold Coffee",
    price: {
      "40ml": 180,
    },
    description: "Cold Coffee is a type of coffee that is made from coffee and milk. It is a very sweet and delicious coffee that is often eaten as a dessert.",
    image: [coldCoffee1, coldCoffee2],
    category: "coffee",
    bestseller: true,
  },
  {
    _id: "COFFEE002",
    name: "Hot Coffee",
    price: {
      "40ml": 20,
    },
    description: "Hot Coffee is a type of coffee that is made from coffee and milk. It is a very sweet and delicious coffee that is often eaten as a dessert.",
    image: [hotCoffee1, hotCoffee2, hotCoffee3],
    category: "coffee",
    bestseller: false,
  },
  {
    _id: "FALUDA001",
    name: "Rose Faluda",
    price: {
      "40ml": 95,
    },
    description: "Rose Faluda is a type of faluda that is made from rose syrup. It is a very sweet and delicious faluda that is often eaten as a dessert.",
    image: [faluda1, faluda2, faluda3, faluda4],
    category: "faluda",
    bestseller: true,
  },
];

export { productData };
