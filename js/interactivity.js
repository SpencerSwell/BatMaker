// Setting the state of the page for bat details
$( document ).ready(function() {
    console.log( "ready!" );


//need to select parent element to be able to remove child elements in vanilla js


const optionsParent=document.getElementById('choices');

//children elements that need to be added or removed depending on the stage of bat building

const optionOne=document.getElementsByClassName('OptionOne');

const optionTwo=document.getElementsByClassName('OptionTwo');

const optionThree=document.getElementsByClassName('OptionThree');

const optionFour=document.getElementsByClassName('OptionFour');

const optionFive=document.getElementsByClassName('OptionFive');

const optionSix=document.getElementsByClassName('OptionSix');

const optionSeven=document.getElementsByClassName('OptionSeven');

const optionEight=document.getElementsByClassName('OptionEight');

const optionNine=document.getElementsByClassName('OptionNine');






var batState = {

type:undefined,

material:undefined,

handleColor:undefined,

barrelColor:undefined,

logoColor:undefined,

length:undefined,

engraving1:undefined,

engraving2:undefined


};


var batBarrelPreview = 'placeholder';

var batHandlePreview = 'placeholder';

var batLogoPreview = 'placeholder';



// Changing the state of the page 


function defineType(type) {

batState.type = type;
console.log("THE BATSTATE IS:", batState.type);
changeBatPreview(batState.type);

}



function defineMaterial(material) {
console.log("The material is" + material);

batState.material = material;



}


function setColors(handleColor, barrelColor, logoColor) {


}


function defineLength(dimensions) {

batState.length = dimensions;

}



function addEngraving(message) {

} 


function changePicture(handle,barrel) {
	
}

function switchState (stage) {

if(stage==='Material') {

$(".battype").text('Type:' + batState.type);

// remove options which are uneeded
$(".OptionOne").remove();

$(".OptionTwo").remove();

$(".OptionThree").remove();

$(".OptionFour").remove();

$('.OptionFive').remove();

$('.OptionSix').remove();

$('.OptionSeven').remove();

$('.OptionEight').remove();

$('.OptionNine').remove();

//change  picture

$(".Options").append("<div class='Birch'> <img src='./img/material-birch.jpg'> </img> <p> Birch </p> </div> ");

$(".Options").append('<div class="Maple"> <img src="./img/material-promaple.jpg"> </img> <p> Pro Maple </p> </div> ');


$(".batbuilderdescription").text("What Material would you like the Bat to be made out of?");

//remove old classes and add new ones

 	

$( ".OptionOne" ).removeClass( "OptionOne" ).addClass( "MaterialOne" );

$(".OptionTwo").removeClass("OptionTwo").addClass("MaterialTwo");



}



if(stage==='Length') {

$(".batmaterial").text('Material:' + batState.material);

$(".Birch").remove();

$(".Maple").remove();

$(".batbuilderdescription").text("What length would you like it to be?");


if(batState.type === 'Adult Bat') {

$('.Options').append('<div class="thirtyone"> <p> 31.0 IN </p> </div> ');

$('.Options').append('<div class="thirtytwo"> <p> 32.0 IN </p> </div> ');

$('.Options').append('<div class="thirtytwopointfive"> <p> 32.5 IN </p> </div> ');

$('.Options').append('<div class="thirtythree"> <p> 33.0 IN </p> </div> ');

$('.Options').append('<div class="thirtythreepointfive"> <p> 33.5 IN </p> </div> ');

$('.Options').append('<div class="thirtyfour"> <p> 34.0 IN </p> </div> ');

}

if(batState.type === 'Youth Bat') {

$('.Options').append('<div class="twentyeight"> <p> 28.0 IN </p> </div> ');

$('.Options').append('<div class="twentynine"> <p> 29.0 IN </p> </div> ');

$('.Options').append('<div class="thirty"> <p> 30.0 IN </p> </div> ');


}


if(batState.type === 'Fungo Bat') {

$('.Options').append('<div class="thirtyfour"> <p> 34.0 IN </p> </div> ');

$('.Options').append('<div class="thirtyfive"> <p> 35.0 IN </p> </div> ');

$('.Options').append('<div class="thirtysix"> <p> 36.0 IN </p> </div> ');


}



if(batState.type === 'One Hand Trainer Bat') {

$('.Options').append('<div class="twentytwo"> <p> 22.0 IN </p> </div> ');


}



if(batState.type === 'Display Bat') {

$('.Options').append('<div class="thirtyfour"> <p> 34.0 IN </p> </div> ');

}

if(batState.type === '3D Engraved Bat') {

$('.Options').append('<div class="thirtyfour"> <p> 34.0 IN </p> </div> ');



}





}

if(stage==='Color') {

$(".batlength").text('Length:' + batState.length);




$(".twentytwo").remove();

$(".twentyeight").remove();

$(".twentynine").remove();

$(".thirty").remove();

$(".thirtyone").remove();

$(".thirtytwopointfive").remove();

$(".thirtythree").remove();

$(".thirtythreepointfive").remove();

$(".thirtyfour").remove();

$(".thirtyfive").remove();

$(".thirtysix").remove();

$(".thirtytwo").remove();

$(".batbuilderdescription").text("What colors?");

$(".Options").append("<h1> Handle Colors </h1>");




$(".Options").append("<div class='BlackHandle'> <img src='./img/color-handle-black.jpg'> </img> <p> Black </p> </div> ");

$(".Options").append('<div class="RoyalBlueHandle"> <img src="./img/color-handle-blue.jpg"> </img> <p> Royal Blue </p> </div> ');

$(".Options").append('<div class="BabyBlueHandle"> <img src="./img/color-handle-babyblue.jpg"> </img> <p> Baby Blue </p> </div> ');

$(".Options").append("<div class='RedHandle'> <img src='./img/color-handle-red.jpg'> </img> <p> Red </p> </div> ");

$(".Options").append("<div class='OrangeHandle'> <img src='./img/orangehandle.jpg'> </img> <p> Orange </p> </div> ");

$(".Options").append("<div class='YellowHandle'> <img src='./img/yellowhandle.jpg'> </img> <p> Yellow </p> </div> ");

$(".Options").append("<div class='PinkHandle'> <img src='./img/pinkhandle.jpg'> </img> <p> Pink </p> </div> ");

$(".Options").append("<div class='PurpleHandle'> <img src='./img/purplehandle.jpg'> </img> <p> Purple </p> </div> ");

$(".Options").append("<div class='BrownHandle'> <img src='./img/brownhandle.jpg'> </img> <p> Brown </p> </div> ");

$(".Options").append('<div class="ClearHandle"> <img src="./img/color-handle-clear.jpg"> </img> <p> Natural </p> </div> ');

$(".Options").append("<div class='SilverHandle'> <img src='./img/silverhandle.jpg'> </img> <p> Silver </p> </div> ");


$(".Options").append("<br>");

$(".Options").append("<h1> Barrel Colors </h1>");

$(".Options").append("<div class='BlackBarrel'> <img src='./img/color-black.jpg'> </img> <p> Black </p> </div> ");

$(".Options").append('<div class="RoyalBlueBarrel"> <img src="./img/royalbluebarrel.jpg"> </img> <p> Royal Blue </p> </div> ');

$(".Options").append('<div class="BabyBlueBarrel"> <img src="./img/babybluebarrel.jpg"> </img> <p> Baby Blue </p> </div> ');

$(".Options").append("<div class='RedBarrel'> <img src='./img/color-red.jpg'> </img> <p> Red </p> </div> ");

$(".Options").append("<div class='OrangeBarrel'> <img src='./img/orangebarrel.jpg'> </img> <p> Orange </p> </div> ");

$(".Options").append("<div class='YellowBarrel'> <img src='./img/yellowbarrel.jpg'> </img> <p> Yellow </p> </div> ");

$(".Options").append("<div class='PinkBarrel'> <img src='./img/pinkbarrel.jpg'> </img> <p> Pink </p> </div> ");

$(".Options").append("<div class='PurpleBarrel'> <img src='./img/purplebarrel.jpg'> </img> <p> Purple </p> </div> ");

$(".Options").append("<div class='BrownBarrel'> <img src='./img/brownbarrel.jpg'> </img> <p> Brown </p> </div> ");

$(".Options").append('<div class="ClearBarrel"> <img src="./img/color-clear.jpg"> </img> <p> Clear </p> </div> ');

$(".Options").append("<div class='SilverBarrel'> <img src='./img/silverbarrel.jpg'> </img> <p> Silver </p> </div> ");

$(".Options").append(" <br> ");

$(".Options").append("<p> Add engraving below for $5 per line with a limit of 30 characters per line. </p> ");

$(".Options").append("<label style='color:white;'>Line 1: </label> <input type='text' id='engraving1' maxlength='30'> </input> ");

$(".Options").append("<button class='submitengraving' style='background-color:#FF9200; padding:4px; border:0px;'> Submit </button> ");

$(".Options").append("<label style='color:white;'>Line 2: </label> <input type='text' id='engraving2' maxlength='30'> </input> ");

$(".Options").append("<button class='submitengraving2' style='background-color:#FF9200; padding:4px; border:0px;'  > Submit </button> ");


}


}


function changeBatPreview() {




if(batState.type==="Adult Bat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}

if(batState.type==="Adult Bat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="Adult Bat"&& batState.handleColor==='Purple') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-purple.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Purple') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-purple.png');

}



if(batState.type==="Adult Bat"&& batState.handleColor==='RoyalBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-royalblue.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='RoyalBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-royalblue.png');

}


if(batState.type==="Adult Bat"&& batState.handleColor==='BabyBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-babyblue.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='BabyBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-babyblue.png');

}


if(batState.type==="Adult Bat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}


if(batState.type==="Adult Bat"&& batState.handleColor==='Orange') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-orange.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Orange') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-orange.png');

}



if(batState.type==="Adult Bat"&& batState.handleColor==='Yellow') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-yellow.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Yellow') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-yellow.png');

}




if(batState.type==="Adult Bat"&& batState.handleColor==='Brown') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-brown.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Brown') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-brown.png');

}

if(batState.type==="Adult Bat"&& batState.handleColor==='Pink') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-pink.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Pink') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-pink.png');

}

if(batState.type==="Adult Bat"&& batState.handleColor==='Silver') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-silver.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Silver') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-silver.png');

}

if(batState.type==="Adult Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="Adult Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}






if(batState.type==="Youth Bat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}





if(batState.type==="Youth Bat"&& batState.handleColor==='Red') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Red') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}



if(batState.type==="Youth Bat"&& batState.handleColor==='Purple') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-purple.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Purple') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-purple.png');

}

if(batState.type==="Youth Bat"&& batState.handleColor==='RoyalBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-royalblue.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='RoyalBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-royalblue.png');

}


if(batState.type==="Youth Bat"&& batState.handleColor==='BabyBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-babyblue.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='BabyBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-babyblue.png');

}

if(batState.type==="Youth Bat"&& batState.handleColor==='Orange') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-orange.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Orange') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-orange.png');

}


if(batState.type==="Youth Bat"&& batState.handleColor==='Yellow') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-yellow.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Yellow') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-yellow.png');

}

if(batState.type==="Youth Bat"&& batState.handleColor==='Pink') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-pink.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Pink') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-pink.png');

}


if(batState.type==="Youth Bat"&& batState.handleColor==='Brown') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-brown.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Brown') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-brown.png');

}



if(batState.type==="Youth Bat"&& batState.handleColor==='Brown') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-brown.png');

}

if(batState.type==="Youth Bat"&& batState.handleColor==='Silver') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-silver.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Silver') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-silver.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="Youth Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="Youth Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}


console.log("change bat preview called");






if(batState.type==="Fungo Bat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-fungo-clear.png');

$("#barrel").attr('src', './img/preview-barrel-fungo-black.png');

}

if(batState.type==="Fungo Bat"&& batState.handleColor==='Black') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-black.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Black') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-black.png');

}


if(batState.type==="Fungo Bat"&& batState.handleColor==='Purple') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-purple.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Purple') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-purple.png');

}



if(batState.type==="Fungo Bat"&& batState.handleColor==='RoyalBlue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-royalblue.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='RoyalBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-royalblue.png');

}


if(batState.type==="Fungo Bat"&& batState.handleColor==='BabyBlue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-babyblue.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='BabyBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-babyblue.png');

}


if(batState.type==="Fungo Bat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-red.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-red.png');

}

if(batState.type==="Fungo Bat"&& batState.handleColor==='Orange') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-orange.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Orange') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-orange.png');

}

if(batState.type==="Fungo Bat"&& batState.handleColor==='Yellow') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-yellow.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Yellow') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-yellow.png');

}

if(batState.type==="Fungo Bat"&& batState.handleColor==='Brown') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-brown.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Brown') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-brown.png');

}

if(batState.type==="Fungo Bat"&& batState.handleColor==='Pink') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-pink.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Pink') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-pink.png');

}

if(batState.type==="Fungo Bat"&& batState.handleColor==='Silver') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-silver.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Silver') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-silver.png');

}



if(batState.type==="Fungo Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-clear.png');

}


if(batState.type==="Fungo Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-clear.png');

}










if(batState.type==="One Hand Trainer Bat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-training-clear.png');

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-black.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}



if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Yellow') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-yellow.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Yellow') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-yellow.png');

}



if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Purple') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-purple.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Purple') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-purple.png');

}

if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Blue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-blue.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-blue.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-red.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-red.png');

}

if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-clear.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-clear.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='RoyalBlue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-royalblue.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='RoyalBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-royalblue.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='BabyBlue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-babyblue.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='BabyBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-babyblue.png');

}

if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-clear.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-clear.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Orange') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-orange.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Orange') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-orange.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Brown') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-brown.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Brown') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-brown.png');

}

if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Pink') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-pink.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Pink') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-pink.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.handleColor==='Silver') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-silver.png');

}


if(batState.type==="One Hand Trainer Bat"&& batState.barrelColor==='Silver') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-silver.png');

}




if(batState.type==="Display Bat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="Display Bat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="Display Bat"&& batState.handleColor==='Yellow') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-yellow.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Yellow') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-yellow.png');

}


if(batState.type==="Display Bat"&& batState.handleColor==='Purple') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-purple.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Purple') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-purple.png');

}



if(batState.type==="Display Bat"&& batState.handleColor==='BabyBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-babyblue.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='BabyBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-babyblue.png');

}


if(batState.type==="Display Bat"&& batState.handleColor==='RoyalBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-royalblue.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='RoyalBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-royalblue.png');

}


if(batState.type==="Display Bat"&& batState.handleColor==='Orange') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-orange.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Orange') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-orange.png');

}

if(batState.type==="Display Bat"&& batState.handleColor==='Pink') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-pink.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Pink') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-pink.png');

}


if(batState.type==="Display Bat"&& batState.handleColor==='Brown') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-brown.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Brown') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-brown.png');

}




if(batState.type==="Display Bat"&& batState.handleColor==='Silver') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-silver.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Silver') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-silver.png');

}



if(batState.type==="Display Bat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="Display Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="Display Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}


if(batState.type==="3D Engraved Bat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Yellow') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-yellow.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Yellow') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-yellow.png');

}


if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Purple') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-purple.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Purple') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-purple.png');

}



if(batState.type==="3D Engraved Bat"&& batState.handleColor==='BabyBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-babyblue.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='BabyBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-babyblue.png');

}


if(batState.type==="3D Engraved Bat"&& batState.handleColor==='RoyalBlue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-royalblue.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='RoyalBlue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-royalblue.png');

}


if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Orange') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-orange.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Orange') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-orange.png');

}

if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Pink') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-pink.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Pink') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-pink.png');

}


if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Brown') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-brown.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Brown') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-brown.png');

}




if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Silver') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-silver.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Silver') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-silver.png');

}



if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="3D Engraved Bat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="3D Engraved Bat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}



}






// Event handlers

// 1. Types of bats responses


$('.OptionOne').click(function() {
	defineType("Adult Bat"); switchState('Material');
})

$('.OptionTwo').click(function() {
	defineType("Youth Bat"); switchState('Material');
})

$('.OptionThree').click(function() {
	defineType("Fungo Bat"); switchState('Material');

})
$('.OptionFour').click(function() {
	defineType("One Hand Trainer Bat"); switchState('Material');
})

$('.OptionFive').click(function() {
	defineType("Display Bat"); switchState('Material');
})

$('.OptionSix').click(function() {
	defineType("3D Engraved Bat"); switchState('Material');
})






$(".Options").on("click", ".Birch" , function() {

	console.log('birch clicked');
	defineMaterial("Birch"); switchState('Length');
})





$(".Options").on("click", ".Maple" , function() {

	console.log('Maple clicked');
	defineMaterial("Maple"); switchState('Length');
})










$(".Options").on("click", ".twentytwo" , function() {

	console.log('Length');
	defineLength('22.0 IN'); switchState('Color');
})

$(".Options").on("click", ".twentyeight" , function() {

	console.log('Length');
	defineLength('28.0 IN'); switchState('Color');
})

$(".Options").on("click", ".twentynine" , function() {

	console.log('Length');
	defineLength('29.0 IN'); switchState('Color');
})

$(".Options").on("click", ".thirty" , function() {

	console.log('Length');
	defineLength('30.0 IN'); switchState('Color');
})


$(".Options").on("click", ".thirtyone" , function() {

	console.log('Length');
	defineLength('31.0 IN'); switchState('Color');
})

$(".Options").on("click", ".thirtytwo" , function() {

	console.log('Length');
	defineLength('32.0 IN'); switchState('Color');
})




$(".Options").on("click", ".thirtytwopointfive" , function() {

	console.log('Length');
	defineLength('32.5 IN'); switchState('Color');
})


$(".Options").on("click", ".thirtythree" , function() {

	console.log('Length');
	defineLength('33.0 IN'); switchState('Color');
})


$(".Options").on("click", ".thirtythreepointfive" , function() {

	console.log('Length');
	defineLength('33.5 IN'); switchState('Color');
})


$(".Options").on("click", ".thirtyfour" , function() {

	console.log('Length');
	defineLength('34.0 IN'); switchState('Color');
})


$(".Options").on("click", ".thirtyfive" , function() {

	console.log('Length');
	defineLength('35.0 IN'); switchState('Color');
})


$(".Options").on("click", ".thirtysix" , function() {

	console.log('Length');
	defineLength('36.0 IN'); switchState('Color');
})




$(".Options").on("click", ".RedHandle" , function() {

	batState.handleColor = 'Red';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".RoyalBlueHandle" , function() {

	batState.handleColor = 'RoyalBlue';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".BabyBlueHandle" , function() {

	batState.handleColor = 'BabyBlue';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".OrangeHandle" , function() {
	console.log('orange handle clicked');

	batState.handleColor = 'Orange';

	changeBatPreview();

	console.log(batState.handleColor);



})



$(".Options").on("click", ".PinkHandle" , function() {
	console.log("pink handle clicked");

	batState.handleColor = 'Pink';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".YellowHandle" , function() {
	console.log("yellow handle clicked");

	batState.handleColor = 'Yellow';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".BrownHandle" , function() {
	console.log("brown handle clicked");
	batState.handleColor = 'Brown';

	changeBatPreview();

	console.log(batState.handleColor);



})

$(".Options").on("click", ".SilverHandle" , function() {
	console.log('Silver Handle Clicked');

	batState.handleColor = 'Silver';

	changeBatPreview();

	console.log(batState.handleColor);



})

$(".Options").on("click", ".PurpleHandle" , function() {

	batState.handleColor = 'Purple';

	changeBatPreview();

	console.log(batState.barrelColor);



})


$(".Options").on("click", ".BlackHandle" , function() {

	batState.handleColor = 'Black';

	changeBatPreview();


	console.log(batState.handleColor);



})


$(".Options").on("click", ".ClearHandle" , function() {

	batState.handleColor = 'Clear';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".RedBarrel" , function() {

	batState.barrelColor = 'Red';

	changeBatPreview();

	console.log(batState.barrelColor);



})

$(".Options").on("click", ".OrangeBarrel" , function() {

	batState.barrelColor = 'Orange';

	changeBatPreview();


	console.log(batState.barrelColor);



})



$(".Options").on("click", ".YellowBarrel" , function() {

	batState.barrelColor = 'Yellow';

	changeBatPreview();


	console.log(batState.barrelColor);



})


$(".Options").on("click", ".BrownBarrel" , function() {

	batState.barrelColor = 'Brown';

	changeBatPreview();


	console.log(batState.barrelColor);



})



$(".Options").on("click", ".PinkBarrel" , function() {

	batState.barrelColor = 'Pink';

	changeBatPreview();


	console.log(batState.barrelColor);



})




$(".Options").on("click", ".SilverBarrel" , function() {

	batState.barrelColor = 'Silver';

	changeBatPreview();


	console.log(batState.barrelColor);



})








$(".Options").on("click", ".RoyalBlueBarrel" , function() {

	batState.barrelColor = 'RoyalBlue';

	changeBatPreview();


	console.log(batState.barrelColor);



})










$(".Options").on("click", ".BabyBlueBarrel" , function() {

	batState.barrelColor = 'BabyBlue';

	changeBatPreview();


	console.log(batState.barrelColor);



})







$(".Options").on("click", ".BlackBarrel" , function() {

	batState.barrelColor = 'Black';

	changeBatPreview();

	console.log(batState.barrelColor);



})


$(".Options").on("click", ".PurpleBarrel" , function() {

	batState.barrelColor = 'Purple';

	changeBatPreview();

	console.log(batState.barrelColor);



})


$(".Options").on("click", ".ClearBarrel" , function() {

	batState.barrelColor = 'Clear';

	changeBatPreview();

	console.log(batState.barrelColor);



})



$(".Options").on("click", ".submitengraving" , function() {

console.log("Submitting value of", document.getElementById('engraving1').value);

var engraving1 = document.getElementById('engraving1').value;

batState.engraving1 = engraving1;

$(".engraving1").text('Engraving 1:' + batState.engraving1);

console.log(batState.engraving1);

})


$(".Options").on("click", ".submitengraving2" , function() {

	console.log("Submitting value of", document.getElementById('engraving2').value);

	var engraving2 = document.getElementById('engraving2').value;

	batState.engraving2 = engraving2;

$(".engraving2").text('Engraving 2:' + batState.engraving2);

	console.log(batState.engraving2);


})



});





