const bags = ['/amazon-accesso/Laptop-Backpack-2.jpg', '/amazon-accesso/Laptop-Backpack-3.jpg', '/amazon-accesso/Laptop-Backpack-4.jpg'];
const USBs = ['/amazon-accesso/Syntech-2.png', '/amazon-accesso/Syntech-3.jpg', '/amazon-accesso/Syntech-4.webp'];
function HelloWorld(){
    // This is the Mother Page

    const MainPage = document.createElement('div');
    MainPage.classList.add('Merchandise');

    // Children
    const Options = document.createElement('div');
    const exitButton = document.createElement('button');
    exitButton.innerText = 'X';
    exitButton.classList.add('cancel');

    exitButton.onclick = ()=>{MainPage.addEventListener('click', ()=>{MainPage.style.display = 'none'})}
    Options.appendChild(exitButton);
    const AvailableProducts = document.createElement('div');


    // Children INNER Elements 

    Options.classList.add('some-opts');
    AvailableProducts.classList.add('some-results')

    // Options Children
    const message = document.createElement('h2');
    message.classList.add('first-head');
    message.innerText = 'Climate Pledge Friendly';
    
    Options.appendChild(message);

    //First Child
    const checkDiv = document.createElement('div')
    const checkBoxLabel = document.createElement('label');
    checkBoxLabel.classList.add('label-style');
    const checkBox = document.createElement('input');
    checkBox.classList.add('check-box');
    checkBox.type = 'checkbox';
    checkDiv.innerText = 'Climate Pledge Friendly';
    checkDiv.classList.add('smallDivs2');

    checkBoxLabel.appendChild(checkBox);
    checkBoxLabel.appendChild(checkDiv);
    Options.appendChild(checkBoxLabel);


     // options Children 2
     const message2 = document.createElement('h2');
     message2.innerText = 'Department';
     message2.classList.add('moreHeader');
     Options.appendChild(message2)

    const names = ['Computer Accessories & Peripherals',
                        'Computer Components',
                        'Computers & Tablets',
                        'Data Storage',
                        'Laptop Accessories',
                        'Monitors',
                        'Networking Products',
                        'Power Strips & Surge Protectors',
                        'Printers',
                        'Scanners',
                        'Servers',
                        'Tablet Accessories',
                        'Tablet Replacement Parts',
                        'Warranties & Services'
                    ];
    
     // more OPtions 
     const MoreOptionsDiv = document.createElement('div');
     const MoreOptionsHeader = document.createElement('h3');
     MoreOptionsHeader.innerText = 'Computers';
     MoreOptionsHeader.classList.add('moreOptionsHeader');
     MoreOptionsDiv.appendChild(MoreOptionsHeader);
     Options.appendChild(MoreOptionsDiv);

    for (let i = 0; i < names.length; i++){
        const smallDivs = document.createElement('div');
        smallDivs.classList.add('smallDivs');
        smallDivs.innerText = names[i];

        MoreOptionsDiv.appendChild(smallDivs);
        Options.appendChild(MoreOptionsDiv);
    }

    const ratings = document.createElement('div');
    const ratingHead = document.createElement('h3');
    ratingHead.innerText = 'Avg. Customer Review';
    ratingHead.classList.add('moreHeader');
    ratings.appendChild(ratingHead);
    Options.appendChild(ratings);
    for (let i = 0; i < 4; i++){
        const btns = document.createElement('div');
        btns.classList.add('buttons');
        const bu1 = document.createElement('div');
        const bu2 = document.createElement('div');
        const bu3 = document.createElement('div');
        const bu4 = document.createElement('div');
        const bu5 = document.createElement('div');
        

        btns.innerText = '1';
        bu1.innerText = hello('&#9733;');
        bu1.classList.add('stars');
        bu2.innerText = hello('&#9733;');
        bu2.classList.add('stars');

        bu3.innerText = hello('&#9734;');
        bu3.classList.add('stars');
        bu4.innerText = hello('&#9734;');
        bu4.classList.add('stars');

        bu5.innerText = hello('&#9734;');
        bu5.classList.add('stars');

        
        btns.appendChild(bu1);
        btns.appendChild(bu2);
        btns.appendChild(bu3);
        btns.appendChild(bu4);
        btns.appendChild(bu5);

        Options.appendChild(btns);

    }
    const BrandNames = ['Apple', 'Roku', 'Syntech', 'MATEIN', 'SanDisk', 'MAXU', 'HP'];
    const moreBrands = document.createElement('div');
    const brandHead = document.createElement('h3');
    brandHead.innerText = 'Featured Brands';
    brandHead.classList.add('moreHeader');
    moreBrands.appendChild(brandHead);

    for(let i = 0; i < BrandNames.length; i++){
        const Brands = document.createElement('div')
        const BrandsLabel = document.createElement('label');
        BrandsLabel.classList.add('label-style');
        const checkBox2 = document.createElement('input');
        checkBox2.classList.add('check-box');
        Brands.classList.add('smallDivs2');
        checkBox2.type = 'checkbox';
        Brands.innerText = BrandNames[i];
        
        BrandsLabel.appendChild(checkBox2);
        BrandsLabel.appendChild(Brands)
        moreBrands.appendChild(BrandsLabel);
    }

    Options.appendChild(moreBrands);
    const money = ['ZAR MIN', 'ZAR MAX', 'Go!'];
    // LEFT PRICES
    const LeftPrices = document.createElement('div');
    const LeftPricesHead = document.createElement('h3');
    LeftPricesHead.innerText = 'Prices';
    LeftPricesHead.classList.add('moreHeader');
    LeftPrices.appendChild(LeftPricesHead);
    const moneyButtonsDiv = document.createElement('div');
    moneyButtonsDiv.style.columnGap = '5px';
    moneyButtonsDiv.style.marginLeft = '10px';
    for (let i = 0; i < money.length; i++){
        const moneyButtons = document.createElement('button');
        moneyButtons.classList.add('btns-style');
        moneyButtons.innerText = money[i];
        moneyButtonsDiv.appendChild(moneyButtons);
        LeftPrices.appendChild(moneyButtonsDiv)
    }
    
    Options.appendChild(LeftPrices);
    const certi = ['Auto Replenishment', 'Works with Alexa']
    const amazonCetified = document.createElement('div');
    const amazonCertifiedHead = document.createElement('h3');
    amazonCertifiedHead.innerText = 'Amazon Certified';
    amazonCertifiedHead.classList.add('moreHeader');
    amazonCetified.appendChild(amazonCertifiedHead);

    for (let i = 0; i < certi.length; i++){
        const certificates = document.createElement('div');
        const certiLabel = document.createElement('label');
        certiLabel.classList.add('label-style');
        const checkBox3 = document.createElement('input');
        checkBox3.classList.add('check-box');
        checkBox3.type = 'checkbox';
        certificates.innerText = certi[i];
        certificates.classList.add('smallDivs2');

        certiLabel.appendChild(checkBox3);
        certiLabel.appendChild(certificates);
        amazonCetified.appendChild(certiLabel);


    }

    Options.appendChild(amazonCetified);

    const ourBrands = document.createElement('div');
    const ourBrandHead = document.createElement('h3');
    ourBrandHead.innerText = 'From Our Brands';
    ourBrandHead.classList.add('moreHeader');
    ourBrands.appendChild(ourBrandHead);
    const branddiv = document.createElement('div');
    const brandLabel = document.createElement('label');
    brandLabel.classList.add('label-style');
    const checkBox4 = document.createElement('input');
    checkBox4.classList.add('check-box');
    checkBox4.type = 'checkbox';
    branddiv.innerText = 'Our Brands';

    brandLabel.appendChild(checkBox4);
    brandLabel.appendChild(branddiv);
    ourBrands.appendChild(brandLabel);
    Options.appendChild(ourBrands);

    const Packaging = document.createElement('div');
    const PackagingHead = document.createElement('h3');
    PackagingHead.innerText = 'Packaging Option';
    PackagingHead.classList.add('moreHeader');
    Packaging.appendChild(PackagingHead);
    const Packingdiv = document.createElement('div');
    const PackingLabel = document.createElement('label');
    PackingLabel.classList.add('label-style');
    const checkBox5 = document.createElement('input');
    checkBox5.classList.add('check-box');
    checkBox5.type = 'checkbox';
    Packingdiv.innerText = 'Frustration-Free Packaging';

    PackingLabel.appendChild(checkBox5);
    PackingLabel.appendChild(Packingdiv);
    Packaging.appendChild(PackingLabel);
    Options.appendChild(Packaging);

    const news = document.createElement('div');
    const newsHead = document.createElement('h3');
    newsHead.innerText = 'New & Upcoming';
    newsHead.classList.add('moreHeader');
    const newArrivals = document.createElement('div');
    newArrivals.classList.add('moreHeader');

    const coming = document.createElement('div');
    coming.classList.add('moreHeader');
    newArrivals.innerText = 'New Arrivals';
    coming.innerText = 'Coming Soon';
    news.appendChild(newsHead);
    news.appendChild(newArrivals);
    news.appendChild(coming);
    Options.appendChild(news);

    const Energy = document.createElement('div');
    const EnergyHead = document.createElement('h3');
    EnergyHead.innerText = 'Certifications';
    EnergyHead.classList.add('moreHeader');
    Energy.appendChild(EnergyHead);
    const Energydiv = document.createElement('div');
    const EnergyLabel = document.createElement('label');
    EnergyLabel.classList.add('label-style');
    const checkBox6 = document.createElement('input');
    checkBox6.classList.add('check-box');
    checkBox6.type = 'checkbox';
    Energydiv.innerText = 'Energy Star';
    Energydiv.classList.add('moreHeader');

    EnergyLabel.appendChild(checkBox6);
    EnergyLabel.appendChild(Energydiv);
    Energy.appendChild(EnergyLabel);
    Options.appendChild(Energy);

    const Global = document.createElement('div');
    const GlobalHead = document.createElement('h3');
    GlobalHead.innerText = 'Amazon Global Store';
    GlobalHead.classList.add('moreHeader');
    Global.appendChild(GlobalHead);
    const Globaldiv = document.createElement('div');
    const GlobalLabel = document.createElement('label');
    GlobalLabel.classList.add('label-style');
    const checkBox7 = document.createElement('input');
    checkBox7.classList.add('check-box');
    checkBox7.type = 'checkbox';
    Globaldiv.innerText = 'Amazon Global Store';

    GlobalLabel.appendChild(checkBox6);
    GlobalLabel.appendChild(Globaldiv);
    Global.appendChild(GlobalLabel);
    Options.appendChild(Global);


    const Condition = document.createElement('div');
    const opt = document.createElement('h3');
    const opt1 = document.createElement('div');
    const opt2 = document.createElement('div');
    const opt3 = document.createElement('div');

    opt.innerText = 'Condition';
    opt.classList.add('moreHeader');
    opt1.classList.add('moreHeader');
    opt2.classList.add('moreHeader');
    opt3.classList.add('moreHeader');

    opt1.innerText = 'New';
    opt2.innerText = 'Used';
    opt3.innerText = 'Renewed';
    
    Condition.appendChild(opt);
    Condition.appendChild(opt1);
    Condition.appendChild(opt2);
    Condition.appendChild(opt3);

    Options.appendChild(Condition);

    const seller = ['Amazon.com', 'Mosiso', 'Fintie', 'Cable Matters', 'Tech Vendor', 'CWP Online', '888Lots', 'iPearl-Inc', 'STC Distributors (Serial # Recorded)', '❤️️⁡⁢ ⁡⁢OnlinEmart⁡⁢ ⁡⁢ (We record SN)'];

    const selling = document.createElement('div');
    const SellHead = document.createElement('h3');
    SellHead.innerText = 'Seller';
    SellHead.classList.add('moreHeader');
    selling.appendChild(SellHead);

    for(let i = 0; i < seller.length; i++){
        const Sellingdiv = document.createElement('div');
        const SellingLabel = document.createElement('label');
        SellingLabel.classList.add('label-style');
        const checkBox8 = document.createElement('input');
        checkBox8.classList.add('check-box');
        checkBox8.type = 'checkbox';
        Sellingdiv.innerText = seller[i];
        Sellingdiv.classList.add('smallDivs2');

        SellingLabel.appendChild(checkBox8);
        SellingLabel.appendChild(Sellingdiv);
        selling.appendChild(SellingLabel);
        Options.appendChild(selling);
    }

    const Availability = document.createElement('div');
    const availHead = document.createElement('h3');
    availHead.innerText = 'Availability';
    availHead.classList.add('moreHeader');
    Availability.appendChild(availHead);
    const availdiv = document.createElement('div');
    const availLabel = document.createElement('label');
    availLabel.classList.add('label-style');
    const checkBox9 = document.createElement('input');
    checkBox9.classList.add('check-box');
    checkBox9.type = 'checkbox';
    availdiv.innerText = 'Include Out of Stock';
    availdiv.classList.add('smallDivs2');

    availLabel.appendChild(checkBox9);
    availLabel.appendChild(availdiv);
    Availability.appendChild(availLabel);
    Options.appendChild(Availability);




    // Nest GrandChildren
    // First GrandChild
    const firstProduct = document.createElement('div');
    firstProduct.classList.add('first-fiv');
    const firstProductImage = document.createElement('img');
    firstProductImage.classList.add('apple-pen');
    firstProductImage.setAttribute('src', '/amazon-accesso/apple-pen.jpg');
    firstProduct.appendChild(firstProductImage);
    AvailableProducts.appendChild(firstProduct);

    // Second GrandChild
    const SecondProduct = document.createElement('div');
    SecondProduct.classList.add('remote');
    const SecondProductImage = document.createElement('img');
    SecondProductImage.setAttribute('src', '/amazon-accesso/Roku-Streaming.jpg');
    SecondProductImage.classList.add('remote-image');
    SecondProduct.appendChild(SecondProductImage);
    AvailableProducts.appendChild(SecondProduct);

    // Third GrandChild
    const thirdProduct = document.createElement('div')
    thirdProduct.classList.add('tv');
    const thirdProductImage = document.createElement('img');
    thirdProductImage.setAttribute('src', 'amazon-accesso/Spectre-Tv.jpg');
    thirdProductImage.classList.add('remote-image');
    thirdProduct.appendChild(thirdProductImage);
    AvailableProducts.appendChild(thirdProduct);

     // Fourth GrandChild
     const FourthProduct = document.createElement('div');
     FourthProduct.classList.add('anotherVideo');
     const FourthProductImage = document.createElement('img');
     FourthProductImage.setAttribute('src', 'amazon-accesso/roku-express-hd.webp')
     FourthProductImage.classList.add('remote-image');
     FourthProduct.appendChild(FourthProductImage);
     AvailableProducts.appendChild(FourthProduct);

     // Firth GrandChild
     const FirthProduct = document.createElement('div');
     FirthProduct.classList.add('touch');
     const FirthProductImage = document.createElement('img');
     FirthProductImage.setAttribute('src', 'amazon-accesso/USB-Lamp.jpg');
     FirthProductImage.classList.add('remote-image');
     FirthProduct.appendChild(FirthProductImage);
     AvailableProducts.appendChild(FirthProduct);

    // SIXTH GRANDCHILD
    const SixthProduct = document.createElement('div');
    SixthProduct.classList.add('store');
    const SixthProductImage = document.createElement('img');
    SixthProductImage.setAttribute('src', 'amazon-accesso/Seagate-Portable.png');
    SixthProductImage.classList.add('remote-image');
    SixthProduct.appendChild(SixthProductImage);
    AvailableProducts.appendChild(SixthProduct);

    const SeventhProduct = document.createElement('div');
    SeventhProduct.classList.add('Roku-4k');
    const SeventhProductImage = document.createElement('img');
    SeventhProductImage.setAttribute('src', '/amazon-accesso/Roku-Streaming.jpg')
    SeventhProductImage.classList.add('remote-image');
    SeventhProduct.appendChild(SeventhProductImage);
    AvailableProducts.appendChild(SeventhProduct);


    // EIGHTH GRANDCHILD
    const EightProduct = document.createElement('div');
    EightProduct.classList.add('Bag');
    const EightProductImage = document.createElement('img');
    EightProductImage.setAttribute('src', 'amazon-accesso/Laptop-Backpack-1.jpg');
    EightProductImage.classList.add('remote-image');
    EightProduct.appendChild(EightProductImage);
    AvailableProducts.appendChild(EightProduct);


    // NiNTH GRANDCHHILD
    const NinthProduct = document.createElement('div');
    NinthProduct.classList.add('samsung');
    const NinthProductImage = document.createElement('img');
    NinthProductImage.setAttribute('src', 'amazon-accesso/Samsung-970.jpg');
    NinthProductImage.classList.add('remote-image');
    NinthProduct.appendChild(NinthProductImage);
    AvailableProducts.appendChild(NinthProduct);

    // TENTH GRANDCHILD

    const TenthProduct = document.createElement('div');
    TenthProduct.classList.add('ink');
    const TenthProductImage = document.createElement('img');
    TenthProductImage.setAttribute('src', 'amazon-accesso/HP-63XL.webp');
    TenthProductImage.classList.add('remote-image');
    TenthProduct.appendChild(TenthProductImage);
    AvailableProducts.appendChild(TenthProduct);

    // ELEVENTH GRANDCHILD
    const EleventhProduct = document.createElement('div');
    EleventhProduct.classList.add('sanDisk');
    const EleventhProductImage = document.createElement('img');
    EleventhProductImage.classList.add('remote-image');
    EleventhProductImage.setAttribute('src', 'amazon-accesso/SanDisk.webp');
    EleventhProduct.appendChild(EleventhProductImage);
    AvailableProducts.appendChild(EleventhProduct);

    // TWELVETH GRANDCHILD
    const TwelvethProduct = document.createElement('div');
    TwelvethProduct.classList.add('Moniter');
    const TwelvethProductImage = document.createElement('img');
    TwelvethProductImage.setAttribute('src', 'amazon-accesso/HP-monitor.jpg');
    TwelvethProductImage.classList.add('remote-image');
    TwelvethProduct.appendChild(TwelvethProductImage);
    AvailableProducts.appendChild(TwelvethProduct); 

    // THIRDTEEN GRANDCHILD
    const ThirdteenProduct = document.createElement('div');
    ThirdteenProduct.classList.add('SD-card');
    const ThirdteenProductImage = document.createElement('img');
    ThirdteenProductImage.classList.add('remote-image');
    ThirdteenProductImage.setAttribute('src', 'amazon-accesso/Sandisk-Extreme-PRO.jpeg');
    ThirdteenProduct.appendChild(ThirdteenProductImage);
    AvailableProducts.appendChild(ThirdteenProduct);

    // FOURTEEN GRANDCHILD
    const FourteenProduct = document.createElement('div');
    FourteenProduct.classList.add('Synth-USB');
    const FourteenProductImage = document.createElement('img');
    FourteenProductImage.classList.add('remote-image');
    FourteenProductImage.setAttribute('src', 'amazon-accesso/Syntech-USB.jpg');
    FourteenProduct.appendChild(FourteenProductImage);
    AvailableProducts.appendChild(FourteenProduct);

    // FIFTEEN GRANDCHILD
    const FifteenProduct = document.createElement('div');
    FifteenProduct.classList.add('Steaming');
    const FifteenProductImage = document.createElement('img');
    FifteenProductImage.classList.add('remote-image');
    FifteenProductImage.setAttribute('src', 'amazon-accesso/Chromecast.jpg');
    FifteenProduct.appendChild(FifteenProductImage);
    AvailableProducts.appendChild(FifteenProduct);

    // SIXTEEN GRANDCHILD
    const SixteenProduct = document.createElement('div');
    SixteenProduct.classList.add('Headphones');
    const SixteenProductImage = document.createElement('img');
    SixteenProductImage.classList.add('remote-image');
    SixteenProductImage.setAttribute('src', 'amazon-accesso/Logitech-headset.png');
    SixteenProduct.appendChild(SixteenProductImage);
    AvailableProducts.appendChild(SixteenProduct);

    // SEVENTEEN GRANDCHILD
    const SeventeenProduct = document.createElement('div');
    SeventeenProduct.classList.add('Ink-2');
    const SeventeenProductImage = document.createElement('img');
    SeventeenProductImage.classList.add('remote-image');
    SeventeenProductImage.setAttribute('src', 'amazon-accesso/Original-HP-Black.jpg');
    SeventeenProduct.appendChild(SeventeenProductImage);
    AvailableProducts.appendChild(SeventeenProduct);

    // EIGHTEEN GRANDCHILD
    const EighteenProduct = document.createElement('div');
    EighteenProduct.classList.add('Mouse');
    const EighteenProductImage = document.createElement('img');
    EighteenProductImage.setAttribute('src', 'amazon-accesso/wireless-Mouse.jpg');
    EighteenProductImage.classList.add('remote-image');
    EighteenProduct.appendChild(EighteenProductImage);
    AvailableProducts.appendChild(EighteenProduct);

    // NINTEEN GRANDCHILD
    const NinteenProduct = document.createElement('div');
    NinteenProduct.classList.add('Lapton-1');
    const NinteenProductImage = document.createElement('img');
    NinteenProductImage.classList.add('remote-image');
    NinteenProductImage.setAttribute('src', 'amazon-accesso/Asus-TUF-DASH.jpg');
    NinteenProduct.appendChild(NinteenProductImage);
    AvailableProducts.appendChild(NinteenProduct);

    // KEYBOARD GRANDCHILD
    const TwentyProduct = document.createElement('div');
    TwentyProduct.classList.add('keyboard');
    const TwentyProductImage = document.createElement('img');
    TwentyProductImage.classList.add('remote-image');
    TwentyProductImage.setAttribute('src', 'amazon-accesso/Logitech-wireless-keyboard.jpg');
    TwentyProduct.appendChild(TwentyProductImage); 
    AvailableProducts.appendChild(TwentyProduct);

    // TWENTY ONE GRANDCHILD
    const TwentyOneProduct = document.createElement('div');
    TwentyOneProduct.classList.add('NewLaptop');
    const TwentyOneProductImage = document.createElement('img');
    TwentyOneProductImage.classList.add('remote-image');
    TwentyOneProductImage.setAttribute('src', 'amazon-accesso/Newest Levono.jpg');
    TwentyOneProduct.appendChild(TwentyOneProductImage);
    AvailableProducts.appendChild(TwentyOneProduct);

    // TWENTY TWO GRANDCHILD
    const TwentyTwoProduct = document.createElement('div');
    TwentyTwoProduct.classList.add('Webcam');
    const TwentyTwoProductImage = document.createElement('img');
    TwentyTwoProductImage.classList.add('remote-image');
    TwentyTwoProductImage.setAttribute('src', 'amazon-accesso/Logitech-webcam.jpg');
    TwentyTwoProduct.appendChild(TwentyTwoProductImage);
    AvailableProducts.appendChild(TwentyTwoProduct);

    // TWENTY THREE GRANDCHILD
    const TwentyThreeProduct = document.createElement('div');
    TwentyThreeProduct.classList.add('double-moniter');
    const TwentyThreeProductImage = document.createElement('img');
    TwentyThreeProductImage.classList.add('remote-image');
    TwentyThreeProductImage.setAttribute('src', 'amazon-accesso/Dual-Monitor.jpg');
    TwentyThreeProduct.appendChild(TwentyThreeProductImage);
    AvailableProducts.appendChild(TwentyThreeProduct);

    // TWENTY FOUR GRANDCHILD
    const TwentyFourProduct = document.createElement('div');
    TwentyFourProduct.classList.add('ink-again');
    const TwentyFourProductImage = document.createElement('img');
    TwentyFourProductImage.classList.add('remote-image');
    TwentyFourProductImage.setAttribute('src', 'amazon-accesso/HP-63XL.webp');
    TwentyFourProduct.appendChild(TwentyFourProductImage);
    AvailableProducts.appendChild(TwentyFourProduct);

    // add text 
    // First Image Text
    const addText = document.createElement('div');
    addText.classList.add('brand-name-2');
    addText.innerText = 'Apple Pencil (2nd Generation), White';
    firstProduct.appendChild(addText);

    // SECOND IMAGE TEXT
    const NumberTwoText = document.createElement('div');
    NumberTwoText.classList.add('brand-name-2');
    NumberTwoText.innerText = 'Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV....'
    SecondProduct.appendChild(NumberTwoText);

    // THIRD IMAGE TEXT
    const NumberThree = document.createElement('div');
    NumberThree.classList.add('brand-name-2');
    NumberThree.innerText = 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-....'
    thirdProduct.appendChild(NumberThree);

    // FOURTH IMAGE TEXT 
    const NumberFourth = document.createElement('div');
    NumberFourth.classList.add('brand-name-2');
    NumberFourth.innerText = 'Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote';
    FourthProduct.appendChild(NumberFourth);

    // FIRTH IMAGE TEXT
    const NumberFive = document.createElement('div');
    NumberFive.classList.add('brand-name-2');
    NumberFive.innerText = 'Sunset Lamp Projector,NANIWAN 10 Adjustable Brightness, 180 Degree Rotation Sun Lamp, USB LED';
    FirthProduct.appendChild(NumberFive);

    // SIXTH IMAGE TEXT
    const NumberSix = document.createElement('div');
    NumberSix.classList.add('brand-name-2');
    NumberSix.innerText = 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year';
    SixthProduct.appendChild(NumberSix);

    // SEVENTH IMAGE TEXT 
    const NumberSeven = document.createElement('div');
    NumberSeven.classList.add('brand-name-2');
    NumberSeven.innerText = 'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku....';
    SeventhProduct.appendChild(NumberSeven);

    // EIGHT IMAGE TEXT
    const NumberEight = document.createElement('div');
    NumberEight.classList.add('brand-name-2');
    NumberEight.innerText = 'Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging....';
    EightProduct.appendChild(NumberEight);

    // NINTH IMAGE TEXT
    const NumberNinth = document.createElement('div');
    NumberNinth.classList.add('brand-name-2');
    NumberNinth.innerText = 'SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-.....';
    NinthProduct.appendChild(NumberNinth);

    // TENTH IMAGE TEXT
    const NumberTen = document.createElement('div');
    NumberTen.classList.add('brand-name-2');
    NumberTen.innerText = 'Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510,.....';
    TenthProduct.appendChild(NumberTen);

    // ELEVENTH IMAGE TEXT
    const NumberEleven = document.createElement('div');
    NumberEleven.classList.add('brand-name-2');
    NumberEleven.innerText = 'SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro...';
    EleventhProduct.appendChild(NumberEleven);

    // TWELVETH IMAGE TEXT
    const NumberTwelve = document.createElement('div');
    NumberTwelve.classList.add('brand-name-2');
    NumberTwelve.innerText = 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA...';
    TwelvethProduct.appendChild(NumberTwelve);

    // THIRDTEEN IMAGE TEXT
    const NumberTHIRDTEEN = document.createElement('div');
    NumberTHIRDTEEN.classList.add('brand-name-2');
    NumberTHIRDTEEN.innerText = 'SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN';
    ThirdteenProduct.appendChild(NumberTHIRDTEEN);

    // FOURTEEN IMAGE TEXT 
    const NumberFourteen = document.createElement('div');
    NumberFourteen.classList.add('brand-name-2');
    NumberFourteen.innerText = 'Syntech USB C to USB Adapter Pack of 2 USB C Male to USB3 Female Adapter Compatible with MacBook...';
    FourteenProduct.appendChild(NumberFourteen);


    // FIFTEEN IMAGE TEXT 
    const NumberFifteen = document.createElement('div');
    NumberFifteen.classList.add('brand-name-2');
    NumberFifteen.innerText = 'Chromecast with Google TV - Streaming Entertainment with Voice Search - Watch Movies, Shows, and Live TV in...';
    FifteenProduct.appendChild(NumberFifteen);

    // SIXTEEN IMAGE TEXT
    const NumberSixteen = document.createElement('div');
    NumberSixteen.classList.add('brand-name-2');
    NumberSixteen.innerText = 'Logitech H390 Wired Headset, Stereo Headphones with Noise-Cancelling Microphone, USB, In-Line....';
    SixteenProduct.appendChild(NumberSixteen);

    // SEVENTEEN IMAGE TEXT 
    const NumberSeventeen = document.createElement('div');
    NumberSeventeen.classList.add('brand-name-2');
    NumberSeventeen.innerText = 'Original HP 65 Black Ink Cartridge | Works with HP AMP 100 Series, HP DeskJet 2600, 3700 Series, HP ENVY 5000 Series | Eligible for Instant Ink...';
    SeventeenProduct.appendChild(NumberSeventeen);

    // EIGHTEEN IMAGE TEXT
    const NumberEighteen = document.createElement('div');
    NumberEighteen.classList.add('brand-name-2');
    NumberEighteen.innerText = 'HP Wireless Mouse X3000 G2 (28Y30AA, Black) up to 15-Month Battery,Scroll Wheel, Side Grips for Control, Travel-Friendly, Blue LED...';
    EighteenProduct.appendChild(NumberEighteen);

    // NINTEEN IMAGE TEXT 
    const NumberNinteen = document.createElement('div');
    NumberNinteen.classList.add('brand-name-2');
    NumberNinteen.innerText = 'ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD...';
    NinteenProduct.appendChild(NumberNinteen);

    // TWENTY IMAGE TEXT
    const NumberTwenty = document.createElement('div');
    NumberTwenty.classList.add('brand-name-2');
    NumberTwenty.innerText = 'Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For...';
    TwentyProduct.appendChild(NumberTwenty);

    // TWENTY ONE IMAGE TEXT
    const NumberTwentyOne = document.createElement('div');
    NumberTwentyOne.classList.add('brand-name-2');
    NumberTwentyOne.innerText = '2022 Newest Lenovo Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe...';
    TwentyOneProduct.appendChild(NumberTwentyOne);

    // TWENTY TWO IMAGE TEXT
    const NumberTwentyTwo = document.createElement('div');
    NumberTwentyTwo.classList.add('brand-name-2');
    NumberTwentyTwo.innerText = 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime...';
    TwentyTwoProduct.appendChild(NumberTwentyTwo);

    // TWENTY THREE IMAGE TEXT
    const NumberTwentyThree = document.createElement('div');
    NumberTwentyThree.classList.add('brand-name-2');
    NumberTwentyThree.innerText = 'HUANUO Dual Monitor Stand, Adjustable Spring Monitor Desk Mount Swivel Vesa Bracket with C Clamp/Grommet Mounting Base for...';
    TwentyThreeProduct.appendChild(NumberTwentyThree);

    // TWENTY FOUR IMAGE TEXT
    const NumberTwentyFour = document.createElement('div');
    NumberTwentyFour.classList.add('brand-name-2');
    NumberTwentyFour.innerText = 'Original HP 64XL Black High-yield Ink Cartridge | Works with HP ENVY Inspire 7950e; ENVY Photo 6200, 7100, 7800; Tango Series | Eligible...';
    TwentyFourProduct.appendChild(NumberTwentyFour);

    // First Great GrandChild
    CreateRatings(firstProduct, '63,475');
    CreateRatings(SecondProduct, '28,049');
    CreateRatings(thirdProduct, '21,616');
    CreateRatings(FourthProduct, '161,340');
    CreateRatings(SixthProduct, '214,376');
    CreateRatings(SeventhProduct, '34,131');
    CreateRatings(EightProduct, '67,261');
    CreateRatings(NinthProduct, '40,012');
    CreateRatings(TenthProduct, '44,281');
    CreateRatings(EleventhProduct, ' 237,187');
    CreateRatings(TwelvethProduct, ' 22,356');
    CreateRatings(ThirdteenProduct, '157,294');
    CreateRatings(FourteenProduct, '113,939');
    CreateRatings(FifteenProduct, '1,595');
    CreateRatings(SixteenProduct, '42,275');
    CreateRatings(SeventeenProduct, '80,453');
    CreateRatings(EighteenProduct, '12,369');
    CreateRatings(NinteenProduct, '110');
    CreateRatings(TwentyProduct, '71,828');
    CreateRatings(TwentyOneProduct, '257');
    CreateRatings(TwentyTwoProduct, '12,577');
    CreateRatings(TwentyThreeProduct, '13,250');
    CreateRatings(TwentyFourProduct, '17,227');
    


    // PRICES
    Discount(SecondProduct, '-7%', '19px', '15px');
    MoneyDiv(SecondProduct, '773.91', '91', '198px', '80px');
    StrikeThrough(SecondProduct, 'ZAR832.18', '-35px', '218px');

    Discount(thirdProduct, '-20%', '4px', '15px');
    MoneyDiv(thirdProduct, '1,725', '62', '185px', '83px');
    StrikeThrough(thirdProduct, 'ZAR2,163.60', '-35px', '200px');

    Discount(FourthProduct, '-17%', '4px', '15px');
    MoneyDiv(FourthProduct, '416', '01', '160px', '80px');
    StrikeThrough(FourthProduct, 'ZAR499.24', '-30px', '180px');

    
    MoneyDiv2(FirthProduct, '1,664', '52', '185px', '80px');
    MoneyDiv2(SixthProduct, '1,048', '59', '185px', '80px');
    MoneyDiv2(SeventhProduct, '659', '88', '161px', '80px');
    
    Discount(EightProduct, '-29%', '4px', '48px');
    MoneyDiv2(EightProduct, '499','24', '161px', '80px');
    StrikeThrough(EightProduct, 'ZAR699', '-30px', '180px');

    Discount(NinthProduct, '-62%', '4px', '48px');
    MoneyDiv2(NinthProduct, '3,162', '74', '186px', '80px');
    StrikeThrough(NinthProduct, 'ZAR8,323.28', '-35px', '210px');


    MoneyDiv2(TenthProduct, '697', '34', '162px', '80px');

    Discount(EleventhProduct, '-31%', '4px', '48px');
    MoneyDiv2(EleventhProduct, '287', '82', '161px', '80px');
    StrikeThrough(EleventhProduct, 'ZAR416.01', '-35px', '180px');

    MoneyDiv2(TwelvethProduct, '3,129', '61', '187px', '80px');

    Discount(ThirdteenProduct, '-49%', '4px', '46px');
    MoneyDiv2(ThirdteenProduct, '382', '71', '161px', '80px');
    StrikeThrough(ThirdteenProduct, 'ZAR748.94', '-35px', '180px');

    Discount(FourteenProduct, '-47%', '4px', '46px');
    MoneyDiv2(FourteenProduct, '166', '30', '161px', '80px');
    StrikeThrough(FourteenProduct, 'ZAR316.12', '-35px', '180px');

    MoneyDiv2(FifteenProduct, '825', '52', '161px', '80px');

    Discount(SixteenProduct, '-40%', '3px', '45px');
    MoneyDiv2(SixteenProduct, '399', '36', '161px', '80px');
    StrikeThrough(SixteenProduct, 'ZAR665.71', '-35px', '180px');

    MoneyDiv2(SeventeenProduct, '281', '17', '158px', '80px');

    Discount(EighteenProduct, '-10%', '4px', '45px');
    MoneyDiv2(EighteenProduct, '232', '89', '161px', '80px');
    StrikeThrough(EighteenProduct, 'ZAR258.86', '-35px', '180px');

    Discount(NinteenProduct, '-19%', '4px', '45px');
    MoneyDiv2(NinteenProduct, '17,812', '00', '201px', '80px');
    StrikeThrough(NinteenProduct, 'ZAR21,640.78', '-35px', '207px');

    Discount(TwentyOneProduct, '-57%', '4px', '45px');
    MoneyDiv2(TwentyOneProduct, '6,808', '58', '185px', '80px');
    StrikeThrough(TwentyOneProduct, 'ZAR15,964.36', '-35px', '200px');

    MoneyDiv2(TwentyTwoProduct, '1,131', '99', '185px', '80px');

    Discount(TwentyThreeProduct, '-40%', '4px', '45px');
    MoneyDiv2(TwentyThreeProduct, '998', '65', '160px', '80px');
    StrikeThrough(TwentyThreeProduct, 'ZAR1,664.52', '-35px', '190px');

    MoneyDiv2(TwentyFourProduct, '697', '34', '160px', '80px');

    const CouponButton = document.createElement('button');
    CouponButton.innerText = 'Save 5%';
    CouponButton.classList.add('coupon');
    FirthProduct.appendChild(CouponButton);
    
    const CouponButton2 = document.createElement('div');
    CouponButton2.innerText = 'Save 5%';
    CouponButton2.classList.add('coupon2');
    SixthProduct.appendChild(CouponButton2);

    const CouponButton3 = document.createElement('button');
    CouponButton3.innerText = 'Save 5%';
    CouponButton3.classList.add('coupon3');
    SeventeenProduct.appendChild(CouponButton3);

    const CouponButton4 = document.createElement('button');
    CouponButton4.innerText = 'Save 5%';
    CouponButton4.classList.add('coupon4');
    TwentyFourProduct.appendChild(CouponButton4);

    // Country To Ship
    shipTo(SecondProduct);
    shipTo(thirdProduct);
    shipTo(FourthProduct);
    shipTo(FirthProduct);
    shipTo(SixthProduct);
    shipTo(SeventhProduct);
    shipTo(EightProduct);
    shipTo(NinthProduct);
    shipTo(TenthProduct);
    shipTo(EleventhProduct);
    shipTo(TwelvethProduct);
    shipTo(FourteenProduct);
    shipTo(FifteenProduct);
    shipTo(SixteenProduct);
    shipTo(SeventeenProduct);
    shipTo(EighteenProduct);
    shipTo(TwentyOneProduct);
    shipTo(TwentyTwoProduct);
    shipTo(TwentyThreeProduct);
    shipTo(TwentyFourProduct);

    // works With alexa
    WorksWithAlexa(SecondProduct);
    WorksWithAlexa(FourthProduct);
    WorksWithAlexa(SeventhProduct);

    // Buying Quantity
    // BuyingChoice(SecondProduct);

    // more offers 
    BuyingChoice(SecondProduct, 'ZAR 715.65', '41');
    BuyingChoice(thirdProduct, 'ZAR 1,664.36', '89');
    BuyingChoice(SeventhProduct, 'ZAR 582.47', '29');
    BuyingChoice(NinthProduct, 'ZAR 3,146.26', '18');
    BuyingChoice(EleventhProduct, 'ZAR 276.17', '22');
    BuyingChoice(TwelvethProduct, 'ZAR 2,939.17', '54');
    BuyingChoice(ThirdteenProduct, 'ZAR 330.94', '25');
    BuyingChoice(EighteenProduct, 'ZAR 174.63', '22');
    BuyingChoice(TwentyOneProduct, 'ZAR 5,976.23', '59');
    BuyingChoice(TwentyTwoProduct, 'ZAR 1,081.22', '77');
    BuyingChoice(TwentyThreeProduct, 'ZAR 913.25', '9');

    // Bag Text
    const colorOfBags = document.createElement('div');
    colorOfBags.innerText = 'Price may vary by color';
    colorOfBags.classList.add('bagColor');
    EightProduct.appendChild(colorOfBags);

    // ADD BAGS
    const motherBag = document.createElement('div');
    for (let i = 0; i < bags.length; i++){
        
        const bagButtons = document.createElement('button');
        const buttonImage = document.createElement('img');
        buttonImage.classList.add('bagsImage');
        bagButtons.classList.add('bagButtons');
        motherBag.classList.add('optionBags');
        
        buttonImage.setAttribute('src', bags[i]);
        bagButtons.appendChild(buttonImage);
        motherBag.appendChild(bagButtons);
        EightProduct.appendChild(motherBag);
    }
    // ADD USBs
    const USBdiv = document.createElement('div');
    for (let i = 0; i < USBs.length; i++){
        const usbButtons = document.createElement('button');
        const usbButtonsImage = document.createElement('img');
        
        usbButtonsImage.classList.add('Usb-image');
        usbButtons.classList.add('usb-but');

        usbButtonsImage.setAttribute('src', USBs[i]);
        usbButtons.appendChild(usbButtonsImage);
        USBdiv.appendChild(usbButtons);
        FourteenProduct.appendChild(USBdiv);

    }
    
    // Append Children
    MainPage.appendChild(Options);
    MainPage.appendChild(AvailableProducts)
    document.body.appendChild(MainPage);
}

const hello = function HTMLENT(entity){
    const parser = new DOMParser().parseFromString(entity, 'text/html');
    return parser.documentElement.textContent;
}



function CreateRatings(motherDiv, numberOfReviews){
    const rating = document.createElement('div');
    for(let i = 0; i < 5; i++){
        rating.classList.add('rating-div');
        const Buttons = document.createElement('button');
        Buttons.classList.add('checked');
        Buttons.innerText = hello('&#9733;');
        rating.appendChild(Buttons);
        motherDiv.appendChild(rating);
    }
    const reviewers = document.createElement('div');
    reviewers.classList.add('review');
    reviewers.innerText = numberOfReviews;
    rating.appendChild(reviewers);

}

function MoneyDiv(motheDiv, price, pip, pip_left, curr_left){
    const Prices = document.createElement('div');
    const currency = document.createElement('div');
    const pippette = document.createElement('div')
    currency.innerText = 'ZAR';
    Prices.innerText = price;
    pippette.innerText = pip;
    // pippette style
    pippette.style.position = 'absolute';
    pippette.style.top = '1px';
    pippette.style.left = pip_left;
    pippette.style.fontSize = '14px';
    pippette.style.fontFamily = 'Arial, Helvetica, sans-serif';

    // currency style
    currency.style.position = 'absolute';
    currency.style.top = '3px';
    currency.style.left = curr_left;
    currency.style.fontSize = '15px';
    currency.style.fontFamily = 'Arial, Helvetica, sans-serif';
    // Prices style
    Prices.classList.add('price');
    Prices.appendChild(currency);
    Prices.appendChild(pippette);
    motheDiv.appendChild(Prices);
}

function Discount(motherDiv, percent, left, top){
    const discountDiv = document.createElement('div');
    discountDiv.innerText = percent;
    discountDiv.style.position = 'relative';
    discountDiv.style.width = '60px';
    discountDiv.style.left = left;
    discountDiv.style.top = top;
    discountDiv.style.fontFamily = 'Arial, Helvetica, sans-serif';
    discountDiv.style.zIndex = '10';
    discountDiv.style.color = 'red';
    discountDiv.style.fontSize = '33px';
    motherDiv.appendChild(discountDiv);


}

function StrikeThrough(motheDiv, price, top, left){
    const canceText = document.createElement('s');
    canceText.style.position = 'relative';
    canceText.style.color = 'gray';
    canceText.style.top = top;
    canceText.style.left = left;
    canceText.innerText = price;
    motheDiv.appendChild(canceText);
}



function shipTo(Mother){
    const Country = document.createElement('div');
    Country.classList.add('locationo');
    Country.innerText = 'ships to South Africa';
    Mother.appendChild(Country);
}

function WorksWithAlexa(motherDiv){
    const alexa = document.createElement('div');
    alexa.innerText = 'works with alexa';
    alexa.classList.add('work');
    motherDiv.appendChild(alexa);
}


function BuyingChoice(motherDiv, price, quantity){
    // const parent = document.appendChild('div');
    const choice = document.createElement('div');
    const offers = document.createElement('div');
    const cost = document.createElement('div');
    const more = document.createElement('div');
    
    choice.innerText = 'More Buying Choices';
    cost.innerText = price;
    more.innerText = '( ' + quantity + ' used & new offers' + ' )';

    offers.classList.add('offers');
    cost.classList.add('cost');
    more.classList.add('quantity');
    choice.classList.add('choices');

    offers.appendChild(cost);
    offers.appendChild(more);
    motherDiv.appendChild(choice);
    motherDiv.appendChild(offers);
    // motherDiv.appendChild(parent);
    
}

function MoneyDiv2(motheDiv, price, pip, pip_left, curr_left){
    const Prices = document.createElement('div');
    const currency = document.createElement('div');
    const pippette = document.createElement('div')
    currency.innerText = 'ZAR';
    Prices.innerText = price;
    pippette.innerText = pip;
    // pippette style
    pippette.style.position = 'absolute';
    pippette.style.top = '1px';
    pippette.style.left = pip_left;
    pippette.style.fontSize = '14px';
    pippette.style.fontFamily = 'Arial, Helvetica, sans-serif';

    // currency style
    currency.style.position = 'absolute';
    currency.style.top = '3px';
    currency.style.left = curr_left;
    currency.style.fontSize = '15px';
    currency.style.fontFamily = 'Arial, Helvetica, sans-serif';
    // Prices style
    Prices.classList.add('price2');
    Prices.appendChild(currency);
    Prices.appendChild(pippette);
    motheDiv.appendChild(Prices);
}

function func(){
    console.log('hello world!');
}