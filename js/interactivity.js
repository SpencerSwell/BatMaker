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

engraving:false


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

$('.Options').append('<div class="length1"> <p> 28.5 IN </p> </div> ');

$('.Options').append('<div class="length2"> <p> 29.0 IN </p> </div> ');

$('.Options').append('<div class="length3"> <p> 29.5 IN </p> </div> ');

$('.Options').append('<div class="length4"> <p> 30.0 IN </p> </div> ');

$('.Options').append('<div class="length5"> <p> 30.5 IN </p> </div> ');

}

if(stage==='Color') {

$(".batlength").text('Length:' + batState.length);

$(".length1").remove();

$(".length2").remove();

$(".length3").remove();

$(".length4").remove();

$(".length5").remove();

$(".length6").remove();

$(".batbuilderdescription").text("What colors?");

$(".Options").append("<h1> Handle Colors </h1>");



$(".Options").append("<div class='RedHandle'> <img src='./img/color-handle-red.jpg'> </img> <p> Red </p> </div> ");

$(".Options").append('<div class="BlueHandle"> <img src="./img/color-handle-blue.jpg"> </img> <p> Blue </p> </div> ');

$(".Options").append("<div class='BlackHandle'> <img src='./img/color-handle-black.jpg'> </img> <p> Black </p> </div> ");

$(".Options").append('<div class="ClearHandle"> <img src="./img/color-handle-clear.jpg"> </img> <p> Clear </p> </div> ');


$(".Options").append("<br>");

$(".Options").append("<h1> Barrel Colors </h1>");


$(".Options").append("<div class='RedBarrel'> <img src='./img/color-red.jpg'> </img> <p> Red </p> </div> ");

$(".Options").append('<div class="BlueBarrel"> <img src="./img/color-blue.jpg"> </img> <p> Blue </p> </div> ');

$(".Options").append("<div class='BlackBarrel'> <img src='./img/color-black.jpg'> </img> <p> Black </p> </div> ");

$(".Options").append('<div class="ClearBarrel"> <img src="./img/color-clear.jpg"> </img> <p> Clear </p> </div> ');


}


}


function changeBatPreview() {




if(batState.type==="AdultBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="AdultBat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="AdultBat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="AdultBat"&& batState.handleColor==='Blue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-blue.png');

}


if(batState.type==="AdultBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-blue.png');

}


if(batState.type==="AdultBat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="AdultBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="AdultBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="AdultBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}



console.log("change bat preview called");






if(batState.type==="FungoBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-fungo-clear.png');

$("#barrel").attr('src', './img/preview-barrel-fungo-black.png');

}

if(batState.type==="FungoBat"&& batState.handleColor==='Black') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-black.png');

}


if(batState.type==="FungoBat"&& batState.barrelColor==='Black') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-black.png');

}

if(batState.type==="FungoBat"&& batState.handleColor==='Blue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-blue.png');

}


if(batState.type==="FungoBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-blue.png');

}


if(batState.type==="FungoBat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-red.png');

}


if(batState.type==="FungoBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-red.png');

}

if(batState.type==="FungoBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-fungo-clear.png');

}


if(batState.type==="FungoBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-fungo-clear.png');

}



if(batState.type==="LightningBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-lightning-clear.png');

$("#barrel").attr('src', './img/preview-barrel-lightning-black.png');

}

if(batState.type==="LightningBat"&& batState.handleColor==='Black') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-lightning-black.png');

}


if(batState.type==="LightningBat"&& batState.barrelColor==='Black') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-lightning-black.png');

}

if(batState.type==="LightningBat"&& batState.handleColor==='Blue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-lightning-blue.png');

}


if(batState.type==="LightningBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-lightning-blue.png');

}


if(batState.type==="LightningBat"&& batState.handleColor==='Red') {
	
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-lightning-red.png');

}


if(batState.type==="LightningBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-lightning-red.png');

}

if(batState.type==="LightningBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-lightning-clear.png');

}


if(batState.type==="LightningBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-lightning-clear.png');

}






if(batState.type==="TrainingBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="TrainingBat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="TrainingBat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="TrainingBat"&& batState.handleColor==='Blue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-blue.png');

}


if(batState.type==="TrainingBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-blue.png');

}


if(batState.type==="TrainingBat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="TrainingBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="TrainingBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="TrainingBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}







if(batState.type==="ThunderBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="ThunderBat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="ThunderBat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="ThunderBat"&& batState.handleColor==='Blue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-blue.png');

}


if(batState.type==="ThunderBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-blue.png');

}


if(batState.type==="ThunderBat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="ThunderBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="ThunderBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="ThunderBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}




if(batState.type==="ThunderstormBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-248-clear.png');

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="ThunderstormBat"&& batState.handleColor==='Black') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-black.png');

}


if(batState.type==="ThunderstormBat"&& batState.barrelColor==='Black') {
$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-black.png');

}

if(batState.type==="ThunderstormBat"&& batState.handleColor==='Blue') {
$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-blue.png');

}


if(batState.type==="ThunderstormBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-blue.png');

}


if(batState.type==="ThunderstormBat"&& batState.handleColor==='Red') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-red.png');

}


if(batState.type==="ThunderstormBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-red.png');

}

if(batState.type==="ThunderstormBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-248-clear.png');

}


if(batState.type==="ThunderstormBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-248-clear.png');

}












if(batState.type==="OneHandedBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-training-clear.png');

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="OneHandedBat"&& batState.handleColor==='Black') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-black.png');

}


if(batState.type==="OneHandedBat"&& batState.barrelColor==='Black') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="OneHandedBat"&& batState.handleColor==='Blue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-blue.png');

}


if(batState.type==="OneHandedBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-blue.png');

}


if(batState.type==="OneHandedBat"&& batState.handleColor==='Red') {


$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-red.png');

}


if(batState.type==="OneHandedBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-red.png');

}

if(batState.type==="OneHandedBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-clear.png');

}


if(batState.type==="OneHandedBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-clear.png');

}






if(batState.type==="ShortBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-training-clear.png');

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="ShortBat"&& batState.handleColor==='Black') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-black.png');

}


if(batState.type==="ShortBat"&& batState.barrelColor==='Black') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="ShortBat"&& batState.handleColor==='Blue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-blue.png');

}


if(batState.type==="ShortBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-blue.png');

}


if(batState.type==="ShortBat"&& batState.handleColor==='Red') {


$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-red.png');

}


if(batState.type==="ShortBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-red.png');

}

if(batState.type==="ShortBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-clear.png');

}


if(batState.type==="ShortBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-clear.png');

}



if(batState.type==="YouthBat" && batState.handleColor === undefined && batState.barrelColor === undefined) {

$("#handle").attr('src', './img/preview-handle-training-clear.png');

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="YouthBat"&& batState.handleColor==='Black') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-black.png');

}


if(batState.type==="YouthBat"&& batState.barrelColor==='Black') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-black.png');

}

if(batState.type==="YouthBat"&& batState.handleColor==='Blue') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-blue.png');

}


if(batState.type==="YouthBat"&& batState.barrelColor==='Blue') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-blue.png');

}


if(batState.type==="YouthBat"&& batState.handleColor==='Red') {


$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-red.png');

}


if(batState.type==="YouthBat"&& batState.barrelColor==='Red') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-red.png');

}

if(batState.type==="YouthBat"&& batState.handleColor==='Clear') {

$(".handlecolor").text('Handle Color:' + batState.handleColor);

$("#handle").attr('src', './img/preview-handle-training-clear.png');

}


if(batState.type==="YouthBat"&& batState.barrelColor==='Clear') {

$(".barrelcolor").text('Barrel Color:' + batState.barrelColor);

$("#barrel").attr('src', './img/preview-barrel-training-clear.png');

}



}






// Event handlers

// 1. Types of bats responses


$('.OptionOne').click(function() {
	defineType("AdultBat"); switchState('Material');
})

$('.OptionTwo').click(function() {
	defineType("FungoBat"); switchState('Material');
})

$('.OptionThree').click(function() {
	defineType("LightningBat"); switchState('Material');

})
$('.OptionFour').click(function() {
	defineType("TrainingBat"); switchState('Material');
})

$('.OptionFive').click(function() {
	defineType("OneHandedBat"); switchState('Material');
})

$('.OptionSix').click(function() {
	defineType("ThunderBat"); switchState('Material');
})

$('.OptionSeven').click(function() {
defineType("ThunderstormBat"); switchState('Material');

})

$('.OptionEight').click(function() {
	defineType("ShortBat"); switchState('Material');
})

$('.OptionNine').click(function() {
	defineType("YouthBat"); switchState('Material');
})







$(".Options").on("click", ".Birch" , function() {

	console.log('birch clicked');
	defineMaterial("Birch"); switchState('Length');
})





$(".Options").on("click", ".Maple" , function() {

	console.log('Maple clicked');
	defineMaterial("Maple"); switchState('Length');
})










$(".Options").on("click", ".length1" , function() {

	console.log('Length');
	defineLength('28.5'); switchState('Color');
})

$(".Options").on("click", ".length2" , function() {

	console.log('Length');
	defineLength('29.0'); switchState('Color');
})

$(".Options").on("click", ".length3" , function() {

	console.log('Length');
	defineLength('29.5'); switchState('Color');
})

$(".Options").on("click", ".length4" , function() {

	console.log('Length');
	defineLength('30.0'); switchState('Color');
})


$(".Options").on("click", ".length5" , function() {

	console.log('Length');
	defineLength('30.5'); switchState('Color');
})

$(".Options").on("click", ".length6" , function() {

	console.log('Length');
	defineLength('31.0'); switchState('Color');
})


$(".Options").on("click", ".RedHandle" , function() {

	batState.handleColor = 'Red';

	changeBatPreview();

	console.log(batState.handleColor);



})


$(".Options").on("click", ".BlueHandle" , function() {

	batState.handleColor = 'Blue';

	changeBatPreview();

	console.log(batState.handleColor);



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


$(".Options").on("click", ".BlueBarrel" , function() {

	batState.barrelColor = 'Blue';

	changeBatPreview();


	console.log(batState.barrelColor);



})

$(".Options").on("click", ".BlackBarrel" , function() {

	batState.barrelColor = 'Black';

	changeBatPreview();

	console.log(batState.barrelColor);



})

$(".Options").on("click", ".ClearBarrel" , function() {

	batState.barrelColor = 'Clear';

	changeBatPreview();

	console.log(batState.barrelColor);



})






});





