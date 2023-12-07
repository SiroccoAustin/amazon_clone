const Delivery = document.getElementById('loc');
const locationImage = document.createElement('img');
// locationImage.setAttribute('src', '/amazon-icons/images (28).jpeg');
locationImage.style.width = '20px';
Delivery.style.backgroundColor = 'grey';
Delivery.style.display = 'flex';
Delivery.style.height = '40px';
// Delivery.appendChild(locationImage);

const button = document.createElement('button');
const ButtonText = document.createElement('div');
ButtonText.innerText = 'Deliver to South Africa';
ButtonText.classList.add('textStyle');
button.classList.add('locationButton');
button.onclick = popUpEnvoke;
button.appendChild(locationImage);
button.appendChild(ButtonText);
Delivery.appendChild(button);


const showingMore = document.getElementById('show');
const Display = document.createElement('img');

Display.classList.add('switch-images');
showingMore.appendChild(Display);

const DisplayingImages = [
    {
        name: 'img2',
        img: 'amazon-display/download.jpg'
    },
    {
        name: 'img3',
        img: 'amazon-display/interior.jpg'
    },
    {
        name: 'img4',
        img: 'amazon-pic/makeup.jpg'
    }
];


let NextPic = 0;
let nect = 0;

function NextButton(){
    if (NextPic < DisplayingImages.length){
        NextPic++;
        const Next = DisplayingImages[NextPic].img;
        
        btn2.disabled = false;
        
        if (NextPic === 2){
            const btn1  = document.getElementById('btn1');
            btn1.disabled = true; 
        }
        // console.log(Next);
        // console.log(NextPic); 
    }
    
    
};

function PreviousButton(){
    NextPic --;
    const Previous = DisplayingImages[NextPic].img;
    if (NextPic === 0){
        const btn2 = document.getElementById('btn2');
        btn2.disabled = true;
        
    }
    btn1.disabled = false;
    console.log(Previous);
}


function popUpEnvoke(){
    const popUpMotherDiv = document.createElement('div');
    popUpMotherDiv.classList.add('pop-up')
    const popUpContent = document.createElement('div');
    const popUptext = document.createElement('p');
    const Details = document.createElement('p');
    const box = document.createElement('div');
    const bottom = document.createElement('div');
    const button = document.createElement('button');
    const locationTextDiv = document.createElement('div');
    const zipCode = document.createElement('p');
    const shipOut = document.createElement('p');
    button.innerText = 'DONE';
    button.addEventListener('click', () =>{
        popUpMotherDiv.style.display = 'none';
    })
    popUptext.innerText = 'Choose your location';
    Details.innerText = 'Delivery options and delivery speeds may vary for different locations';
    box.innerText = 'Manage address book';
    box.classList.add('box');
    zipCode.innerText = 'Enter a US zip code';
    shipOut.innerText = 'ship outside the US';
    popUptext.classList.add('text');
    bottom.classList.add('bottom');
    button.classList.add('button');
    Details.classList.add('details');
    zipCode.classList.add('details');
    shipOut.classList.add('details')
    popUpContent.classList.add('popUpStyle');
    
    locationTextDiv.appendChild(zipCode);
    locationTextDiv.appendChild(shipOut);
    bottom.appendChild(locationTextDiv);
    popUpContent.appendChild(popUptext);
    popUpContent.appendChild(Details);
    popUpContent.appendChild(box);
    popUpContent.appendChild(bottom);
    popUpMotherDiv.appendChild(button);
    popUpMotherDiv.appendChild(popUpContent);
    document.body.appendChild(popUpMotherDiv);
}

function printing(){
    console.log('hello world!');
}

function CreateAccount(){
    const OverLay = document.createElement('div');
    const Block = document.createElement('div');
    const RightSection = document.createElement('div');
    const LeftSection = document.createElement('div');

    // LEFT SECTION
    const LeftHead = document.createElement('h3');
    const CreateList = document.createElement('div');
    const FindList = document.createElement('div');
    const Charity = document.createElement('div');
    LeftHead.innerText = 'Your Lists';
    CreateList.innerText = 'Create a List';
    FindList.innerText = 'Find a List or Registry';
    Charity.innerText = 'AmazonSmile Charity Lists';
    CreateList.classList.add('check');
    FindList.classList.add('check');
    Charity.classList.add('check');



    // rightSECTION 
    const HeaderTag = document.createElement('h3');
    const Products = document.createElement('div');
    const Orders = document.createElement('div');
    const Recommendations = document.createElement('div');
    const browser = document.createElement('div');
    const watchList = document.createElement('div');
    const Videos = document.createElement('div');
    const Kindle = document.createElement('div');
    const Content = document.createElement('div');
    const Subscribe = document.createElement('div');
    const Membership = document.createElement('div');
    const Music = document.createElement('div');
    const SwitchAccounts = document.createElement('div');
    const SignOut = document.createElement('div');
    
    LeftSection.classList.add('leftSection');
    RightSection.classList.add('rightSection');
    HeaderTag.innerText = 'Your Account';
    Products.innerText = 'Account';
    Orders.innerText = 'Orders';
    Recommendations.innerText = 'Recommendations';
    browser.innerText = 'Browsing History';
    watchList.innerText = 'Watchlist';
    Videos.innerText = 'Video Purchases & Rentals';
    Kindle.innerText = 'Kindle Unlimited';
    Content.innerText = 'Content & Devices';
    Subscribe.innerText = 'Subscribe & Save Items';
    Membership.innerText = 'Memberships & Subscriptions';
    Music.innerText = 'Music Library';
    SwitchAccounts.innerText = 'Switch Accounts';
    SignOut.innerText = 'Sign Out';
    OverLay.classList.add('account');
    Block.classList.add('blocko');
    Products.classList.add('check');
    Orders.classList.add('check');
    Recommendations.classList.add('check');
    browser.classList.add('check');
    watchList.classList.add('check');
    Videos.classList.add('check');
    Kindle.classList.add('check');
    Content.classList.add('check');
    Subscribe.classList.add('check');
    Membership.classList.add('check');
    Music.classList.add('check');
    SwitchAccounts.classList.add('check');
    SignOut.classList.add('check');

    
    

    OverLay.addEventListener('click', () =>{
        OverLay.style.display = 'none';
    })

    // Left hand
    LeftSection.appendChild(LeftHead);
    LeftSection.appendChild(CreateList);
    LeftSection.appendChild(FindList);
    LeftSection.appendChild(Charity);

    // account entities
    RightSection.appendChild(HeaderTag);
    RightSection.appendChild(Products);
    RightSection.appendChild(Orders);
    RightSection.appendChild(Recommendations);
    RightSection.appendChild(browser);
    RightSection.appendChild(watchList);
    RightSection.appendChild(Videos);
    RightSection.appendChild(Kindle);
    RightSection.appendChild(Content);
    RightSection.appendChild(Subscribe);
    RightSection.appendChild(Membership);
    RightSection.appendChild(Music);
    RightSection.appendChild(SwitchAccounts);
    RightSection.appendChild(SignOut);

    // main divs
    Block.appendChild(LeftSection)
    Block.appendChild(RightSection);
    OverLay.appendChild(Block);
    document.body.appendChild(OverLay);
}
function Language(){
    const optionOfLang = document.getElementById('communite');

    const languages = ['español - ES', 'العربية - AR', 'Deutsch - DE', 'עברית - HE', '한국어 - KO', '中文 (简体) - ZH', '中文 (繁體) - ZH'];
    const modal = document.createElement('div');
    const Headmodal = document.createElement('div');
    const ChangeLang = document.createElement('div');
    const Learn = document.createElement('div');
    const lang = document.createElement('div');
    const Check = document.createElement('input')
    const englang = document.createElement('p')
    const otherLangs = document.createElement('div');
   
    modal.addEventListener("mouseleave", ()=>{
        modal.style.display = 'none';
    })

    ChangeLang.innerText = 'Change Language';
    Learn.innerText = 'Learn more';
    englang.innerText = 'English - EN';
    Check.type = 'checkbox';

    for(let i = 0; i < languages.length; i++){
        const langDiv = document.createElement('div');
        const checks = document.createElement('input');
        const optionslang = document.createElement('p');
        checks.type = 'checkbox';
        optionslang.innerText = languages[i];
        langDiv.classList.add('other');

        langDiv.appendChild(checks);
        langDiv.appendChild(optionslang);
        otherLangs.appendChild(langDiv);

    }

    
    modal.classList.add('modal');
    Headmodal.classList.add('head');
    ChangeLang.classList.add('change');
    Learn.classList.add('learn');
    lang.classList.add('englang');
    Check.classList.add('check');

     // currency change
     const ChangeCurrency = document.createElement('div');
     // inner children
     const ch1 = document.createElement('div');
     const ch2 = document.createElement('div');
     
     // GrandChilren
     const c1 = document.createElement('div');
     const c2 = document.createElement('div');
     const c3 = document.createElement('div');
     const c4 = document.createElement('div');
     // GrandChildren InnerText
     c1.innerText = 'Change currency';
     c2.innerText = 'learn more';
     c2.style.color = 'blue';
     c3.innerText = 'ZAR - South African Rand';
     c4.innerText = 'change';
     c4.style.color = 'blue';
 
 
     // append
     ch1.classList.add('ch1');
     ch2.classList.add('ch1');
     ChangeCurrency.classList.add('moneychange');

     const shippingDiv = document.createElement('div');
     shippingDiv.classList.add('shippingDiv');
     const temp = document.createElement('div');
     temp.classList.add('tempStyle');
     const icondiv = document.createElement('div');
     const shippingWhere = document.createElement('div');
     shippingWhere.innerText = 'You are shopping on Amazon.com';
     shippingWhere.classList.add('shippingWhere');
     const ChangeCountry = document.createElement('div');
     ChangeCountry.innerText = 'Change country/region.';
     ChangeCountry.classList.add('ChangeCountry');

     const IconImage = document.createElement('img');

     IconImage.setAttribute('src', 'amazon-icons/United_States.svg.webp');
     IconImage.classList.add('flag');
     icondiv.appendChild(IconImage);
     temp.appendChild(icondiv)
     temp.appendChild(shippingWhere);
     shippingDiv.appendChild(temp);


   Headmodal.appendChild(ChangeLang);
   Headmodal.appendChild(Learn);
   modal.appendChild(Headmodal);
   lang.appendChild(Check);
   lang.appendChild(englang);
   modal.appendChild(lang);
   modal.appendChild(otherLangs);
   ch1.appendChild(c1);
   ch1.appendChild(c2);
   ch2.appendChild(c3);
   ch2.appendChild(c4);
   ChangeCurrency.appendChild(ch1);
   ChangeCurrency.appendChild(ch2);
   modal.appendChild(ChangeCurrency);
   modal.appendChild(shippingDiv);
   modal.appendChild(ChangeCountry);
   document.body.appendChild(modal);

   

}

function slide(parentDiv, firstButton, secondButton){
    const test = document.querySelectorAll('.inspired-history');
    test.forEach((element)=>{
        let di = element.getBoundingClientRect();
        let length = di.width;
        console.log(length)
    })
    const slider = document.querySelectorAll(parentDiv);
    const prev = document.querySelectorAll(firstButton);
    const next = document.querySelectorAll(secondButton);
    slider.forEach((item, i) =>{
        let dimentions = item.getBoundingClientRect();
        let demensionWidth = dimentions.width;

        next[i].addEventListener('click', () =>{
            item.scrollLeft += demensionWidth;
        })
        prev[i].addEventListener('click', () =>{
            item.scrollLeft -= demensionWidth;
        })
})
}

slide('.inspired-history', '.first-btn', '.second-btn');
slide('.last-one', '.drug-btn1', '.drug-btn2');
slide('.more-divs', '.more-button', '.more-button1');
slide('.tired-divs', '.tired-button', '.tired-button2');
slide('.another-slider', '.another-button', '.another-button2');
slide('.low-slider', '.low-button','.low-button1');
slide('.slider', '.slider-button1', '.slider-button2');
slide('.low-low-div', '.low-button-low', '.low-button-low1');