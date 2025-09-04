const slide1 = require('./slide-1.jpg');
const slide2 = require('./slide-2.jpg');
const slide3 = require('./slide-3.jpg');
const slide4 = require('./slide-4.jpg');
const slide5 = require('./slide-5.jpg');
const slide6 = require('./slide-6.jpg');
const slideArray = [{id: '1', name:'Mc Donalds', image:require('./slide-1.jpg')},
                    {id: '2', name:'KFC', image:require('./slide-2.jpg')},
                    {id: '3', name:'Jollibee', image:require('./slide-3.jpg')},
                    {id: '4', name:'Inasal', image:require('./slide-4.jpg')},
                    {id: '5', name:'ChoksToGo', image:require('./slide-5.jpg')},
                    {id: '6', name:'Popeyes', image:require('./slide-6.jpg')}
                ];
const foodArray = [{
                    restaurantName: 'Mc Donalds',
                    farAway: '21,2',
                    businessAddress:'22 Bessie street, China Town',
                    image:require('./slide-1.jpg'),
                    averageReview:4.9,
                    numberOfReview:272,
                    coordinates: {
                        lat:-26.2376587,lng:28.4978657
                    },
                    discount:10,
                    deliveryTime:15,
                    collectTime:5,
                    foodType:'Burger, Wraps, Mikshake...',
                    productData:[{name:'Hand cut chips',price:29.30,image:require('./slide-1.jpg')},
                                 {name:'Big Mac', price:50.80,image:require('./slide-1.jpg')},
                                 {name:'Chicken Burger',price:70,image:require('./slide-1.jpg')}],
                    id:1
                    },{
                    restaurantName: 'KFC',
                    farAway: '21,2',
                    businessAddress:'22 Shibuya street, Japan Town',
                    image:require('./slide-2.jpg'),
                    averageReview:4.9,
                    numberOfReview:272,
                    coordinates: {
                        lat:-26.2376587,lng:28.4978657
                    },
                    discount:10,
                    deliveryTime:15,
                    collectTime:5,
                    foodType:'Burger, Wraps, Mikshake...',
                    productData:[{name:'Milk Shake',price:29.30,image:require('./slide-2.jpg')},
                                 {name:'Zinger', price:50.80,image:require('./slide-2.jpg')},
                                 {name:'Curly Fries',price:70,image:require('./slide-2.jpg')}],
                    id:2
                    },{
                    restaurantName: 'Jollibee',
                    farAway: '21,2',
                    businessAddress:'22 Villongco street, QC Town',
                    image:require('./slide-3.jpg'),
                    averageReview:4.9,
                    numberOfReview:272,
                    coordinates: {
                        lat:-26.2376587,lng:28.4978657
                    },
                    discount:10,
                    deliveryTime:15,
                    collectTime:5,
                    foodType:'Burger, Wraps, Mikshake...',
                    productData:[{name:'Soft Drinks Shake',price:29.30,image:require('./slide-3.jpg')},
                                {name:'Donut', price:50.80,image:require('./slide-3.jpg')},
                                {name:'Chicken Fries',price:70,image:require('./slide-3.jpg')}],
                    id:3
                    },{
                    restaurantName: 'Inasal',
                    farAway: '21,2',
                    businessAddress:'22 Puregold street, Happy Town',
                    image:require('./slide-4.jpg'),
                    averageReview:4.9,
                    numberOfReview:272,
                    coordinates: {
                        lat:-26.2376587,lng:28.4978657
                    },
                    discount:10,
                    deliveryTime:15,
                    collectTime:5,
                    foodType:'Burger, Wraps, Mikshake...',
                    productData:[{name:'Soft Drinks Shake',price:29.30,image:require('./slide-4.jpg')},
                                {name:'Donut', price:50.80,image:require('./slide-4.jpg')},
                                {name:'Chicken Fries',price:70,image:require('./slide-4.jpg')}],
                    id:4
                    },{
                    restaurantName: 'ChoksToGo',
                    farAway: '21,2',
                    businessAddress:'22 Payatas street, Happy Town',
                    image:require('./slide-5.jpg'),
                    averageReview:4.9,
                    numberOfReview:272,
                    coordinates: {
                        lat:-26.2376587,lng:28.4978657
                    },
                    discount:10,
                    deliveryTime:15,
                    collectTime:5,
                    foodType:'Burger, Wraps, Mikshake...',
                    productData:[{name:'Soft Drinks Shake',price:29.30,image:require('./slide-5.jpg')},
                                {name:'Donut', price:50.80,image:require('./slide-5.jpg')},
                                {name:'Chicken Fries',price:70,image:require('./slide-5.jpg')}],
                    id:5
                    },{
                    restaurantName: 'Popeyes',
                    farAway: '21,2',
                    businessAddress:'22 SM street, Happy Town',
                    image:require('./slide-6.jpg'),
                    averageReview:4.9,
                    numberOfReview:272,
                    coordinates: {
                        lat:-26.2376587,lng:28.4978657
                    },
                    discount:10,
                    deliveryTime:15,
                    collectTime:5,
                    foodType:'Burger, Wraps, Mikshake...',
                    productData:[{name:'Soft Drinks Shake',price:29.30,image:require('./slide-6.jpg')},
                                {name:'Donut', price:50.80,image:require('./slide-6.jpg')},
                                {name:'Chicken Fries',price:70,image:require('./slide-6.jpg')}],
                    id:6
                    }]
const menuData = [
    {title:"BEEF",special:false,key:0, },
    {title:"CHICKEN", special:false,key:1},
    {title:"VEGGIE BURGER",special:false ,key:2},
    {title:"FRIES& CORN",special:false ,key:3},
    {title:"SALADS",special:false,key:4},
    {title:"HAPPY MEALS",special:false,key:5},
    {title:"SAHRE BOX",special:false,key:6},
    {title:"MILKSHAKES",special:false,key:7},
    {title:"COLD DRINKS",special:false,key:8},
    {title:"DESSERTS",special:false,key:9},
    {title:"HOT DRINKS",special:false,key:10},
    ];
                      
const specialData =[
    {title:"LIMITED OFFER",key:0},
    {title:"GO CHILLI",key:1},
    {title:"GO CHEESE",key:2},
    {title:"MCCHICKEN DELUXE PROMO",key:3},
    ]; 
const menu = [
    {key: 1, title: 'BEEF'},
    {key: 2, title: 'CHICKEN'},
    {key: 3, title: 'VEGGIE BURGER'},
    {key: 4, title: 'SHARE BOX'},
    {key: 5, title: 'Happy Meals'},
    {key: 6, title: 'Fries'},
    {key: 7, title: 'Sides'},
    {key: 8, title: 'Milkshakes'},
];

const productData = [{name:"Hand cut chips", price:29.30,image:slide1,
              details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
                {name:"Big Mac", price:50.80,image:slide2,
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:1},
                {name:"Chicken Burger", price:70,image:slide3,details:"",id:2},
                
                {name:"Hand cut chips", price:29.30,image:slide4,
                details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
                {name:"Big Mac", price:70.20,image:slide5,
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
                {name:"Chicken Burger", price:70,image:slide6,details:"",id:5},
              
                  ];   
const menuDetailedData =[
                    { 
                      meal:"Big Mac",
                      price:70.20,
                      image:slide1,
                      details:"McFeast features two 100% fresh beef burger patties that are hot",
                      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                      preferenceData: [
                
                                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                                      ],
                
                                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                                      ],
                
                                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                        ],
                                          
                                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                                      ],
                
                                      [
                                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                                      ],
                                      ],
                      minimum_quatity:[2,1,1,null,null],
                      counter:[0,0,0,0,0],
                      required: [true,true,true,false,false],              
                      id:0
                    },
                  
                    { 
                      meal:"Hand cut chips", 
                      price:29.30,
                      image:slide2,
                      details:"Two 100% fresh beef burger patties that are hot,deliciously",
                      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                      preferenceData: [
                
                        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                        ],
                
                        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                        ],
                
                        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                          ],
                            
                        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                        ],
                
                        [
                        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                        ],
                        ],
                        minimum_quatity:[2,1,2,null,null],
                        counter:[0,0,0,0,0],
                        required: [true,true,true,false,false], 
                        id:1
                    },
                  
                    {
                      meal:"Chicken Burger",
                      price:45.70,
                      image:slide3,
                      details:"",
                      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                      preferenceData: [
                
                        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                        ],
                
                        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                        ],
                
                        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                          ],
                            
                        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                        ],
                
                        [
                        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                        ],
                        ],
                
                        minimum_quatity:[2,1,1,null,null],
                        counter:[0,0,0,0,0],
                        required: [true,true,true,false,false],   
                      id:2
                    },
                  
                    {
                      meal:"Big Mac",
                      price:50.80,
                      image:slide4,
                      details:"McFeast features two 100% fresh beef burger patties that are hot",
                      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                      preferenceData: [
                
                        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                        ],
                
                        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                        ],
                
                        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                          ],
                            
                        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                        ],
                
                        [
                        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                        ],
                        ],
                      
                        minimum_quatity:[2,1,1,null,null],
                        counter:[0,0,0,0,0],
                        required: [true,true,true,false,false],    
                      id:3
                    },
                  
                    
                    { 
                      
                      meal:"Hand cut chips", 
                      price:29.30,
                      image:slide5,
                      details:"Two 100% fresh beef burger patties that are hot,deliciously",
                      
                      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                      
                      preferenceData: [
                
                        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                        ],
                
                        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                        ],
                
                        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                          ],
                            
                        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                        ],
                
                        [
                        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                        ],
                        ],
                
                      minimum_quatity:[2,1,1,null,null],
                      counter:[0,0,0,0,0],
                      required: [true,true,true,false,false],     
                      id:4
                    },
                
                    { 
                      meal:"Big Mac",
                      price:70.20,
                      image:slide6,
                      details:"McFeast features two 100% fresh beef burger patties that are hot",
                      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
                      preferenceData: [
                
                                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                                      ],
                
                                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                                      ],
                
                                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                        ],
                                          
                                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                                      ],
                
                                      [
                                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                                      ],
                                      ],
                      minimum_quatity:[2,1,1,null,null],
                      counter:[0,0,0,0,0],
                      required: [true,true,true,false,false],              
                      id:5
                    },
                  
                  ];   



export {
menuDetailedData,
productData,
menu,
menuData,
specialData,
foodArray,
slideArray,
slide1,
slide2,
slide3,
slide4,
slide5,
slide6
}