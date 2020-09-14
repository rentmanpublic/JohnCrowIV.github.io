let activeName = document.getElementById("name");
let activeRole = document.getElementById("role");
let activeImage = document.getElementById("active-image")
let activePhone = document.getElementById("phone");
let facebook = document.getElementById("facebook")
let signature = document.getElementById("signature")

// input fields
const userForm = document.querySelector('#user-form');
const nameInput = document.querySelector("#give-name");
const phoneInput = document.querySelector("#give-phone");
const roleInput = document.querySelector("#give-role");
const langInput = document.querySelector("#give-language");
const linkText = document.querySelector("#give-link-text")
const linkURL = document.querySelector("#give-link-url")
let givenName = ''

const newLink = document.createElement('a'); 

const colleagues = []

const locals = [{
  language  : "EnglishUS",
  phone     : "+1 929 202 2300",
  telPhone  : "+19292022300",
  facebook  : "https://www.facebook.com/Rentmanrentalsoftware/"
},
{ 
  language  : "EnglishEU",
  phone     : "+31 30 711 6844",
  telPhone  : "+31307116844",
  facebook  : "https://www.facebook.com/Rentmanrentalsoftware/"                
},
{
  language  : "Dutch",
  phone     : "030 - 711 68 44",
  telPhone  : "+31307116844",
  facebook  : "https://www.facebook.com/Rentmanverhuursoftware/"   
},
{
  language  : "German",
  phone     : "00 49 211 93671288",
  telPhone  : "+4921193671288",
  facebook  : "https://www.facebook.com/rentmanvermietungssoftware/"   
},
{ 
  language  : "French",
  phone     : "+33 5 33 52 02 16",
  telPhone  : "+33533520216",
  facebook  : "https://www.facebook.com/Rentmanrentalsoftware/"                
},
{ 
  language  : "Italian",
  phone     : "+39 0694500924",
  telPhone  : "+390694500924",
  facebook  : "https://www.facebook.com/Rentmanrentalsoftware/"                
},     
{ 
  language  : "Russian",
  phone     : "+39 0694500924",
  telPhone  : "+390694500924",
  facebook  : "https://www.facebook.com/Rentmanrentalsoftware/"                
},
{ 
  language  : "Spanish",
  phone     : "+39 0694500924",
  telPhone  : "+390694500924",
  facebook  : "https://www.facebook.com/Rentmanrentalsoftware/"                
}        
]

// COLLEAGUE INFO TO ARRAY OBJECT

// push colleague names into object of colleagues Array
let colleaguesNames = document.getElementsByClassName("c-colleagues__name");

for (i = 0; i < colleaguesNames.length; i++) {
  colleagues.push({name:colleaguesNames[i].innerText});
};

// push colleague functions into object of colleagues Array
let colleaguesFunction = document.getElementsByClassName("c-colleagues__function");

for (i = 0; i < colleaguesFunction.length; i++) {
  colleagues[i].department = colleaguesFunction[i].innerText;
};

let colleaguesImage = document.getElementsByClassName("c-colleagues__image");

const imageURLStyle = []

// Get CSS styling notation of image
for (i = 0; i < colleaguesImage.length; i++) {
  imageURLStyle.push(colleaguesImage[i].style.backgroundImage)
};

const imageURL = []

// Extract the URL of the image styling notation
for (i = 0; i < imageURLStyle.length; i++) {
  let x = imageURLStyle[i];
  let splitStart =  x.indexOf("uploads") - 1;
  let splitEnd = x.indexOf(")") - 1;
  let splitResult = x.slice(splitStart,splitEnd);
  imageURL.push(splitResult);
};

// push URL into colleagues object array 
for(i = 0; i < imageURL.length; i++) {
  colleagues[i].image = "https://rentman.io" + imageURL[i];
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// get name input from form to signature
nameInput.addEventListener('input', e => {
  signature.style.display = 'block';  
  
  let nameInput = capitalizeFirstLetter(e.target.value);
    
  // find colleague object from input
  const activeColleague = colleagues.find(m => m.name.includes(nameInput))

  // update displayed information in signature
  activeName.innerText = activeColleague.name;
  activeRole.innerText = activeColleague.department;
  activeImage.src = activeColleague.image;
});

// Update locals based on language choice
langInput.addEventListener('change', lang => {
  lang = langInput.value;
  
  // update phone number + link
  let selectedLang = locals.find(b => b.language === lang);
  activePhone.innerText = selectedLang.phone;
  activePhone.href = 'tel:' + selectedLang.telPhone;
  
  // update facebook
  facebook.href = selectedLang.facebook;
})


function makePhoneLink(num) {
  let s = num.replace(/\s/g,'');
  let n = s.replace(/\+/g,'');
  
  if (n.indexOf('00') === 0) {
    return n.substring(2);
  
  } else if (n.indexOf('0') === 0) {
    return n.substring(1);
  
  } else (n.indexOf('+') === 0) 
    return n;
}

// get phone input from form to signature
phoneInput.addEventListener('input', e => {
  let input = e.target.value
    activePhone.innerText = input
    activePhone.href = 'tel: +' + makePhoneLink(input)
});

// get role input from form to signature
roleInput.addEventListener('input', e => {
  let input = e.target.value;
  activeRole.innerText = input; 
});

// add personal text to bottom of table
linkText.addEventListener('input', e => {
  let input = e.target.value;
  console.log(input);
  signature.insertAdjacentElement('afterend', newLink);
  newLink.innerText = input
  newLink.style.textDecoration = 'none'
  newLink.style.fontSize = '16px'
  newLink.style.fontFamily = "Arial"
})

// add URL to personal text on bottom of table
linkURL.addEventListener('input', e => {
  let input = e.target.value;
  newLink.href = input;
})
