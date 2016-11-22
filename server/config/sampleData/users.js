const sampleUsers = [{
    'address': '368 Quay Street, Kenvil, Louisiana, 2184',
    'phone': ' (878) 578-2984',
    'username': 'terry.drake@comfirm.info',
    'createdAt': 'Saturday, April 26, 2014 6:47 PM',
    'company': 'Comfirm',
    'lastName': 'Drake',
    'firstName': 'Terry',
    'userType': 0
}, {
    'address': '612 Wyckoff Avenue, Hayden, New York, 9979',
    'phone': ' (833) 569-2227',
    'username': 'bird.gonzales@flumbo.name',
    'createdAt': 'Tuesday, April 1, 2014 10:04 AM',
    'company': 'Flumbo',
    'lastName': 'Gonzales',
    'firstName': 'Bird',
    'userType': 1
}, {
    'address': '760 Chester Avenue, Barronett, Wisconsin, 4556',
    'phone': ' (818) 424-3818',
    'username': 'robin.sellers@qiao.io',
    'createdAt': 'Saturday, May 16, 2015 1:53 PM',
    'company': 'Qiao',
    'lastName': 'Sellers',
    'firstName': 'Robin',
    'userType': 0
}, {
    'address': '187 Ditmars Street, Laurelton, Minnesota, 354',
    'phone': ' (896) 563-3757',
    'username': 'anastasia.bass@namegen.biz',
    'createdAt': 'Wednesday, October 19, 2016 8:05 AM',
    'company': 'Namegen',
    'lastName': 'Bass',
    'firstName': 'Anastasia',
    'userType': 1
}, {
    'address': '870 Seton Place, Brooktrails, Michigan, 7138',
    'phone': ' (981) 484-2699',
    'username': 'marietta.guzman@orbean.com',
    'createdAt': 'Friday, December 25, 2015 8:22 PM',
    'company': 'Orbean',
    'lastName': 'Guzman',
    'firstName': 'Marietta',
    'userType': 0
}, {
    'address': '776 Thornton Street, Axis, Utah, 6063',
    'phone': ' (868) 468-2958',
    'username': 'spencer.levy@idetica.us',
    'createdAt': 'Sunday, June 7, 2015 5:18 PM',
    'company': 'Idetica',
    'lastName': 'Levy',
    'firstName': 'Spencer',
    'userType': 0
}, {
    'address': '929 Java Street, Machias, Ohio, 4411',
    'phone': ' (817) 478-3059',
    'username': 'mercado.hyde@gushkool.me',
    'createdAt': 'Thursday, June 5, 2014 11:30 AM',
    'company': 'Gushkool',
    'lastName': 'Hyde',
    'firstName': 'Mercado',
    'userType': 1
}, {
    'address': '525 Hazel Court, Cataract, Missouri, 6756',
    'phone': ' (887) 587-3223',
    'username': 'valentine.allen@klugger.org',
    'createdAt': 'Sunday, August 2, 2015 8:06 PM',
    'company': 'Klugger',
    'lastName': 'Allen',
    'firstName': 'Valentine',
    'userType': 1
}, {
    'address': '640 Sutter Avenue, Ellerslie, American Samoa, 3406',
    'phone': ' (826) 540-3722',
    'username': 'nita.mclaughlin@fleetmix.co.uk',
    'createdAt': 'Monday, December 14, 2015 12:57 AM',
    'company': 'Fleetmix',
    'lastName': 'Mclaughlin',
    'firstName': 'Nita',
    'userType': 0
}, {
    'address': '342 Bancroft Place, Catharine, Illinois, 4391',
    'phone': ' (810) 475-2418',
    'username': 'william.calhoun@geologix.biz',
    'createdAt': 'Monday, September 29, 2014 3:14 AM',
    'company': 'Geologix',
    'lastName': 'Calhoun',
    'firstName': 'William',
    'userType': 1
}, {
    'address': '451 Wyckoff Street, Glenville, North Dakota, 4258',
    'phone': ' (885) 462-3662',
    'username': 'shelia.strickland@snacktion.ca',
    'createdAt': 'Monday, June 8, 2015 3:31 AM',
    'company': 'Snacktion',
    'lastName': 'Strickland',
    'firstName': 'Shelia',
    'userType': 1
}, {
    'address': '727 Lynch Street, Chase, New Jersey, 730',
    'phone': ' (857) 579-2663',
    'username': 'carson.hayes@quilm.net',
    'createdAt': 'Thursday, May 1, 2014 6:47 PM',
    'company': 'Quilm',
    'lastName': 'Hayes',
    'firstName': 'Carson',
    'userType': 0
}, {
    'address': '414 Revere Place, Flintville, Iowa, 459',
    'phone': ' (986) 550-2401',
    'username': 'beck.valdez@nipaz.info',
    'createdAt': 'Tuesday, April 5, 2016 9:50 PM',
    'company': 'Nipaz',
    'lastName': 'Valdez',
    'firstName': 'Beck',
    'userType': 0
}, {
    'address': '362 Oriental Court, Ventress, Nebraska, 5188',
    'phone': ' (818) 584-2266',
    'username': 'sara.wynn@ontality.name',
    'createdAt': 'Tuesday, July 21, 2015 3:53 PM',
    'company': 'Ontality',
    'lastName': 'Wynn',
    'firstName': 'Sara',
    'userType': 1
}, {
    'address': '144 Irvington Place, Townsend, New Hampshire, 9469',
    'phone': ' (997) 405-3034',
    'username': 'beach.lowe@zentility.io',
    'createdAt': 'Monday, August 24, 2015 9:43 PM',
    'company': 'Zentility',
    'lastName': 'Lowe',
    'firstName': 'Beach',
    'userType': 1
}, {
    'address': '190 Noll Street, Darlington, Palau, 6727',
    'phone': ' (813) 423-3368',
    'username': 'richards.stephens@comtext.biz',
    'createdAt': 'Thursday, February 25, 2016 3:21 PM',
    'company': 'Comtext',
    'lastName': 'Stephens',
    'firstName': 'Richards',
    'userType': 0
}, {
    'address': '996 Summit Street, Fulford, Wyoming, 9982',
    'phone': ' (802) 596-2839',
    'username': 'trevino.kirby@emoltra.com',
    'createdAt': 'Tuesday, January 27, 2015 10:33 AM',
    'company': 'Emoltra',
    'lastName': 'Kirby',
    'firstName': 'Trevino',
    'userType': 1
}, {
    'address': '790 Commercial Street, Spelter, Kansas, 1156',
    'phone': ' (820) 548-2877',
    'username': 'shauna.velasquez@cujo.us',
    'createdAt': 'Monday, March 30, 2015 9:10 PM',
    'company': 'Cujo',
    'lastName': 'Velasquez',
    'firstName': 'Shauna',
    'userType': 1
}, {
    'address': '675 Folsom Place, Calverton, Hawaii, 932',
    'phone': ' (882) 472-4000',
    'username': 'christensen.pittman@isotronic.me',
    'createdAt': 'Thursday, June 19, 2014 6:37 PM',
    'company': 'Isotronic',
    'lastName': 'Pittman',
    'firstName': 'Christensen',
    'userType': 1
}, {
    'address': '839 Cropsey Avenue, Cliff, Florida, 353',
    'phone': ' (929) 593-3071',
    'username': 'chambers.figueroa@gynk.org',
    'createdAt': 'Sunday, January 31, 2016 10:33 AM',
    'company': 'Gynk',
    'lastName': 'Figueroa',
    'firstName': 'Chambers',
    'userType': 0
}, {
    'address': '984 Ide Court, Churchill, Puerto Rico, 9293',
    'phone': ' (837) 425-2613',
    'username': 'margarita.whitley@zensus.co.uk',
    'createdAt': 'Monday, September 26, 2016 4:52 AM',
    'company': 'Zensus',
    'lastName': 'Whitley',
    'firstName': 'Margarita',
    'userType': 0
}, {
    'address': '962 Schweikerts Walk, Dana, Virginia, 395',
    'phone': ' (962) 536-2262',
    'username': 'judith.delaney@ezentia.biz',
    'createdAt': 'Saturday, January 24, 2015 5:34 AM',
    'company': 'Ezentia',
    'lastName': 'Delaney',
    'firstName': 'Judith',
    'userType': 1
}, {
    'address': '877 Stuyvesant Avenue, Chilton, California, 7529',
    'phone': ' (832) 502-2643',
    'username': 'duffy.jordan@senmei.ca',
    'createdAt': 'Sunday, December 7, 2014 10:45 AM',
    'company': 'Senmei',
    'lastName': 'Jordan',
    'firstName': 'Duffy',
    'userType': 1
}, {
    'address': '465 Metrotech Courtr, Brutus, District Of Columbia, 9367',
    'phone': ' (970) 423-3108',
    'username': 'felecia.gilliam@buzzworks.net',
    'createdAt': 'Thursday, October 9, 2014 9:52 PM',
    'company': 'Buzzworks',
    'lastName': 'Gilliam',
    'firstName': 'Felecia',
    'userType': 0
}, {
    'address': '854 Arlington Place, Dunlo, Northern Mariana Islands, 7501',
    'phone': ' (818) 462-3050',
    'username': 'watkins.barron@decratex.info',
    'createdAt': 'Friday, March 4, 2016 11:06 PM',
    'company': 'Decratex',
    'lastName': 'Barron',
    'firstName': 'Watkins',
    'userType': 0
}, {
    'address': '914 Sumner Place, Drummond, Guam, 2730',
    'phone': ' (977) 581-2080',
    'username': 'hoover.english@zaya.name',
    'createdAt': 'Saturday, August 29, 2015 9:27 PM',
    'company': 'Zaya',
    'lastName': 'English',
    'firstName': 'Hoover',
    'userType': 1
}, {
    'address': '804 Johnson Avenue, Tampico, Colorado, 8613',
    'phone': ' (820) 434-3889',
    'username': 'kay.woodward@limozen.io',
    'createdAt': 'Thursday, January 16, 2014 3:54 AM',
    'company': 'Limozen',
    'lastName': 'Woodward',
    'firstName': 'Kay',
    'userType': 0
}, {
    'address': '707 Forbell Street, Westboro, Massachusetts, 458',
    'phone': ' (933) 434-3195',
    'username': 'parker.hines@quarx.biz',
    'createdAt': 'Wednesday, May 28, 2014 11:34 AM',
    'company': 'Quarx',
    'lastName': 'Hines',
    'firstName': 'Parker',
    'userType': 0
}, {
    'address': '764 Seabring Street, Dupuyer, Tennessee, 2802',
    'phone': ' (917) 536-2867',
    'username': 'rhoda.higgins@xplor.com',
    'createdAt': 'Tuesday, January 28, 2014 8:12 AM',
    'company': 'Xplor',
    'lastName': 'Higgins',
    'firstName': 'Rhoda',
    'userType': 0
}, {
    'address': '527 Bushwick Court, Homeworth, Pennsylvania, 7557',
    'phone': ' (919) 550-3280',
    'username': 'yates.daniels@insurity.us',
    'createdAt': 'Friday, December 11, 2015 11:31 AM',
    'company': 'Insurity',
    'lastName': 'Daniels',
    'firstName': 'Yates',
    'userType': 1
}, {
    'address': '298 Pine Street, Curtice, Nevada, 1154',
    'phone': ' (819) 600-2460',
    'username': 'parsons.horton@songbird.me',
    'createdAt': 'Wednesday, March 25, 2015 8:42 AM',
    'company': 'Songbird',
    'lastName': 'Horton',
    'firstName': 'Parsons',
    'userType': 1
}, {
    'address': '779 Harbor Lane, Starks, North Carolina, 8531',
    'phone': ' (942) 458-2643',
    'username': 'bonita.king@geeketron.org',
    'createdAt': 'Tuesday, May 20, 2014 4:41 PM',
    'company': 'Geeketron',
    'lastName': 'King',
    'firstName': 'Bonita',
    'userType': 1
}, {
    'address': '592 Bragg Street, Roberts, Rhode Island, 6148',
    'phone': ' (820) 420-2738',
    'username': 'joni.hardy@manglo.co.uk',
    'createdAt': 'Monday, June 16, 2014 4:19 PM',
    'company': 'Manglo',
    'lastName': 'Hardy',
    'firstName': 'Joni',
    'userType': 0
}, {
    'address': '413 Applegate Court, Cornfields, Alaska, 1144',
    'phone': ' (981) 408-3303',
    'username': 'rose.carter@accufarm.biz',
    'createdAt': 'Tuesday, February 17, 2015 5:06 PM',
    'company': 'Accufarm',
    'lastName': 'Carter',
    'firstName': 'Rose',
    'userType': 1
}, {
    'address': '382 Calder Place, Brogan, Texas, 2945',
    'phone': ' (958) 595-3626',
    'username': 'clarissa.bradford@digial.ca',
    'createdAt': 'Saturday, April 4, 2015 1:44 PM',
    'company': 'Digial',
    'lastName': 'Bradford',
    'firstName': 'Clarissa',
    'userType': 0
}, {
    'address': '320 Stockton Street, Holtville, Oklahoma, 719',
    'phone': ' (886) 582-3222',
    'username': 'cooper.castaneda@quilch.net',
    'createdAt': 'Thursday, June 18, 2015 1:48 PM',
    'company': 'Quilch',
    'lastName': 'Castaneda',
    'firstName': 'Cooper',
    'userType': 1
}, {
    'address': '229 Berry Street, Chumuckla, Maine, 6643',
    'phone': ' (822) 417-3968',
    'username': 'jacqueline.forbes@coriander.info',
    'createdAt': 'Thursday, January 2, 2014 5:49 PM',
    'company': 'Coriander',
    'lastName': 'Forbes',
    'firstName': 'Jacqueline',
    'userType': 1
}, {
    'address': '431 Danforth Street, Craig, Idaho, 3702',
    'phone': ' (837) 503-3508',
    'username': 'little.cunningham@comvex.name',
    'createdAt': 'Friday, March 6, 2015 10:35 AM',
    'company': 'Comvex',
    'lastName': 'Cunningham',
    'firstName': 'Little',
    'userType': 1
}, {
    'address': '711 Mill Avenue, Westerville, South Dakota, 7464',
    'phone': ' (970) 439-3975',
    'username': 'cote.walsh@talkalot.io',
    'createdAt': 'Monday, August 31, 2015 9:23 PM',
    'company': 'Talkalot',
    'lastName': 'Walsh',
    'firstName': 'Cote',
    'userType': 0
}, {
    'address': '809 Foster Avenue, Cleary, Delaware, 2950',
    'phone': ' (909) 462-2738',
    'username': 'webb.myers@blurrybus.biz',
    'createdAt': 'Sunday, September 4, 2016 5:30 AM',
    'company': 'Blurrybus',
    'lastName': 'Myers',
    'firstName': 'Webb',
    'userType': 1
}, {
    'address': '336 Guider Avenue, Day, Federated States Of Micronesia, 6109',
    'phone': ' (997) 548-2212',
    'username': 'lolita.welch@opticom.com',
    'createdAt': 'Sunday, March 16, 2014 7:17 AM',
    'company': 'Opticom',
    'lastName': 'Welch',
    'firstName': 'Lolita',
    'userType': 0
}, {
    'address': '967 Vanderveer Street, Summerset, Kentucky, 4558',
    'phone': ' (853) 519-2501',
    'username': 'sophie.larson@zinca.us',
    'createdAt': 'Wednesday, August 26, 2015 7:37 PM',
    'company': 'Zinca',
    'lastName': 'Larson',
    'firstName': 'Sophie',
    'userType': 1
}, {
    'address': '459 Kane Street, Greenwich, Mississippi, 9161',
    'phone': ' (904) 412-2411',
    'username': 'rocha.langley@zaggle.me',
    'createdAt': 'Monday, April 11, 2016 11:23 PM',
    'company': 'Zaggle',
    'lastName': 'Langley',
    'firstName': 'Rocha',
    'userType': 0
}, {
    'address': '302 Frank Court, Cetronia, Alabama, 7639',
    'phone': ' (980) 551-3479',
    'username': 'foreman.saunders@mantrix.org',
    'createdAt': 'Sunday, February 15, 2015 3:50 PM',
    'company': 'Mantrix',
    'lastName': 'Saunders',
    'firstName': 'Foreman',
    'userType': 0
}, {
    'address': '417 Vandervoort Avenue, Robinette, Arizona, 6121',
    'phone': ' (878) 596-3575',
    'username': 'allison.pruitt@pulze.co.uk',
    'createdAt': 'Thursday, November 20, 2014 12:58 PM',
    'company': 'Pulze',
    'lastName': 'Pruitt',
    'firstName': 'Allison',
    'userType': 1
}, {
    'address': '571 Poplar Street, Corriganville, Georgia, 8318',
    'phone': ' (869) 463-3233',
    'username': 'carroll.terrell@krag.biz',
    'createdAt': 'Tuesday, May 13, 2014 10:20 AM',
    'company': 'Krag',
    'lastName': 'Terrell',
    'firstName': 'Carroll',
    'userType': 1
}, {
    'address': '836 Kensington Walk, Mooresburg, Maryland, 9287',
    'phone': ' (949) 496-3511',
    'username': 'miranda.tillman@andershun.ca',
    'createdAt': 'Sunday, November 15, 2015 5:36 PM',
    'company': 'Andershun',
    'lastName': 'Tillman',
    'firstName': 'Miranda',
    'userType': 1
}, {
    'address': '154 National Drive, Oretta, New Mexico, 7462',
    'phone': ' (917) 408-2658',
    'username': 'allie.lloyd@coash.net',
    'createdAt': 'Saturday, March 1, 2014 12:20 AM',
    'company': 'Coash',
    'lastName': 'Lloyd',
    'firstName': 'Allie',
    'userType': 0
}, {
    'address': '402 Newport Street, Durham, Washington, 5460',
    'phone': ' (837) 454-2854',
    'username': 'silvia.russell@undertap.info',
    'createdAt': 'Thursday, January 9, 2014 6:36 AM',
    'company': 'Undertap',
    'lastName': 'Russell',
    'firstName': 'Silvia',
    'userType': 0
}, {
    'address': '331 Holt Court, Orason, Connecticut, 6105',
    'phone': ' (902) 408-3046',
    'username': 'hart.cole@bullzone.name',
    'createdAt': 'Thursday, August 18, 2016 12:49 PM',
    'company': 'Bullzone',
    'lastName': 'Cole',
    'firstName': 'Hart',
    'userType': 0
}, {
    'address': '786 Suydam Place, Dorneyville, Indiana, 2883',
    'phone': ' (896) 499-2289',
    'username': 'sheri.hopper@acusage.io',
    'createdAt': 'Wednesday, September 14, 2016 4:19 PM',
    'company': 'Acusage',
    'lastName': 'Hopper',
    'firstName': 'Sheri',
    'userType': 1
}, {
    'address': '201 Trucklemans Lane, Dunbar, Oregon, 5757',
    'phone': ' (801) 564-3897',
    'username': 'jeannine.burgess@quinex.biz',
    'createdAt': 'Tuesday, January 20, 2015 1:25 PM',
    'company': 'Quinex',
    'lastName': 'Burgess',
    'firstName': 'Jeannine',
    'userType': 0
}, {
    'address': '509 Vanderbilt Street, Devon, South Carolina, 7349',
    'phone': ' (838) 577-3951',
    'username': 'angelique.snider@steelfab.com',
    'createdAt': 'Tuesday, July 29, 2014 4:58 PM',
    'company': 'Steelfab',
    'lastName': 'Snider',
    'firstName': 'Angelique',
    'userType': 1
}, {
    'address': '709 Dewitt Avenue, Berwind, Vermont, 6832',
    'phone': ' (984) 596-3078',
    'username': 'york.bush@rugstars.us',
    'createdAt': 'Monday, October 12, 2015 2:39 PM',
    'company': 'Rugstars',
    'lastName': 'Bush',
    'firstName': 'York',
    'userType': 1
}, {
    'address': '862 Rutherford Place, Nash, West Virginia, 9434',
    'phone': ' (891) 506-2609',
    'username': 'evangeline.berry@anacho.me',
    'createdAt': 'Monday, September 29, 2014 2:58 PM',
    'company': 'Anacho',
    'lastName': 'Berry',
    'firstName': 'Evangeline',
    'userType': 1
}, {
    'address': '495 Garden Place, Bakersville, Marshall Islands, 3727',
    'phone': ' (888) 503-3583',
    'username': 'bobbi.douglas@combogene.org',
    'createdAt': 'Saturday, August 6, 2016 6:30 PM',
    'company': 'Combogene',
    'lastName': 'Douglas',
    'firstName': 'Bobbi',
    'userType': 1
}, {
    'address': '579 Roosevelt Place, Bennett, Montana, 3583',
    'phone': ' (802) 469-3903',
    'username': 'mayra.stein@zogak.co.uk',
    'createdAt': 'Tuesday, May 27, 2014 10:34 PM',
    'company': 'Zogak',
    'lastName': 'Stein',
    'firstName': 'Mayra',
    'userType': 1
}, {
    'address': '363 Truxton Street, Cuylerville, Virgin Islands, 4428',
    'phone': ' (945) 409-3446',
    'username': 'bernadette.wong@pyramia.biz',
    'createdAt': 'Thursday, February 19, 2015 1:34 PM',
    'company': 'Pyramia',
    'lastName': 'Wong',
    'firstName': 'Bernadette',
    'userType': 1
}, {
    'address': '692 Terrace Place, Leeper, Louisiana, 7640',
    'phone': ' (912) 406-3810',
    'username': 'frances.cline@equicom.ca',
    'createdAt': 'Thursday, May 26, 2016 7:58 AM',
    'company': 'Equicom',
    'lastName': 'Cline',
    'firstName': 'Frances',
    'userType': 0
}, {
    'address': '234 Colby Court, Leola, New York, 8761',
    'phone': ' (854) 462-3704',
    'username': 'wiley.davis@toyletry.net',
    'createdAt': 'Friday, May 6, 2016 7:53 AM',
    'company': 'Toyletry',
    'lastName': 'Davis',
    'firstName': 'Wiley',
    'userType': 1
}, {
    'address': '441 Hegeman Avenue, Cedarville, Wisconsin, 5062',
    'phone': ' (911) 401-2880',
    'username': 'dionne.buckner@kraggle.info',
    'createdAt': 'Monday, April 20, 2015 11:59 AM',
    'company': 'Kraggle',
    'lastName': 'Buckner',
    'firstName': 'Dionne',
    'userType': 0
}, {
    'address': '268 Woodside Avenue, Coinjock, Minnesota, 4948',
    'phone': ' (838) 403-3265',
    'username': 'ashley.mcneil@cyclonica.name',
    'createdAt': 'Monday, November 2, 2015 4:11 PM',
    'company': 'Cyclonica',
    'lastName': 'Mcneil',
    'firstName': 'Ashley',
    'userType': 0
}, {
    'address': '395 Boardwalk , Aberdeen, Michigan, 5490',
    'phone': ' (882) 478-3003',
    'username': 'owen.camacho@evidends.io',
    'createdAt': 'Monday, July 6, 2015 11:21 AM',
    'company': 'Evidends',
    'lastName': 'Camacho',
    'firstName': 'Owen',
    'userType': 1
}, {
    'address': '399 Downing Street, Trucksville, Utah, 8614',
    'phone': ' (801) 478-3722',
    'username': 'cherry.huber@genmy.biz',
    'createdAt': 'Wednesday, December 16, 2015 7:04 PM',
    'company': 'Genmy',
    'lastName': 'Huber',
    'firstName': 'Cherry',
    'userType': 1
}, {
    'address': '616 Debevoise Street, Ernstville, Ohio, 2716',
    'phone': ' (894) 587-3150',
    'username': 'gail.hopkins@venoflex.com',
    'createdAt': 'Wednesday, November 19, 2014 10:05 PM',
    'company': 'Venoflex',
    'lastName': 'Hopkins',
    'firstName': 'Gail',
    'userType': 1
}, {
    'address': '725 Bond Street, Eastmont, Missouri, 7947',
    'phone': ' (875) 490-3800',
    'username': 'berger.hinton@exospace.us',
    'createdAt': 'Monday, February 17, 2014 7:07 AM',
    'company': 'Exospace',
    'lastName': 'Hinton',
    'firstName': 'Berger',
    'userType': 1
}, {
    'address': '560 Indiana Place, Sims, American Samoa, 6331',
    'phone': ' (809) 429-3948',
    'username': 'santiago.mclean@icology.me',
    'createdAt': 'Wednesday, October 22, 2014 9:10 PM',
    'company': 'Icology',
    'lastName': 'Mclean',
    'firstName': 'Santiago',
    'userType': 1
}, {
    'address': '689 Vermont Street, Idledale, Illinois, 1724',
    'phone': ' (933) 505-2107',
    'username': 'louisa.wiley@ultrasure.org',
    'createdAt': 'Tuesday, May 17, 2016 9:27 AM',
    'company': 'Ultrasure',
    'lastName': 'Wiley',
    'firstName': 'Louisa',
    'userType': 1
}, {
    'address': '212 Prescott Place, Hobucken, North Dakota, 5033',
    'phone': ' (914) 569-2677',
    'username': 'heather.huffman@zenthall.co.uk',
    'createdAt': 'Monday, December 21, 2015 6:02 AM',
    'company': 'Zenthall',
    'lastName': 'Huffman',
    'firstName': 'Heather',
    'userType': 1
}, {
    'address': '251 Hunterfly Place, Nile, New Jersey, 8955',
    'phone': ' (992) 568-2314',
    'username': 'angela.gomez@digiprint.biz',
    'createdAt': 'Monday, August 31, 2015 5:06 AM',
    'company': 'Digiprint',
    'lastName': 'Gomez',
    'firstName': 'Angela',
    'userType': 0
}, {
    'address': '172 Hopkins Street, Elfrida, Iowa, 2476',
    'phone': ' (930) 424-2975',
    'username': 'madeline.morse@emtrac.ca',
    'createdAt': 'Friday, October 30, 2015 10:50 AM',
    'company': 'Emtrac',
    'lastName': 'Morse',
    'firstName': 'Madeline',
    'userType': 1
}];

export default sampleUsers;
