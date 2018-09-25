var characters = [{
    name: "BB-8",
    health: 50,
    attack: 10,
    counterAttack: 20,
    imagesrc: "./assets/images/bb8.jpg",
    description: "The new tiny robot bad ass"
},
{
    name: "Darth Vader",
    health: 100,
    attack: 25,
    counterAttack: 50,
    imagesrc: "./assets/images/darth.jfif",
    description: "The old bad guy"
},
{
    name: "Po",
    health: 90,
    attack: 50,
    counterAttack: 25,
    imagesrc: "./assets/images/newdude.jfif",
    description: "The new good guy"
},
{
    name: "Kylo Ren",
    health: 120,
    attack: 30,
    counterAttack: 25,
    imagesrc: "./assets/images/newvillian.jfif",
    description: "The newbad guy"
}];

var character = null;
var opponent = null;
var characterSelected = false;
var opponentSelected = false;

 //onclick of a card
$(".card-block").on("click", function () {
    var imagesrc = $(this).find("img").attr("src");
    if (imagesrc.substring("bb8")) {
        character = BB8;
    }
    else if (imagesrc.substring("Darth")) {
        character = Darth;
    }
    else if (imagesrc.substring("dude")) {
        character = Po;
    }
    else (imagesrc.substring("villian"))
    {
        character = Kylo;
    }

    if (!characterSelected) {
        var attackerImage = $("<img>");
        attackerImage.attr("src", imagesrc);

        $(".character").append(attackerImage);
        characterSelected = true;
        $(this).remove();
    }
    else if (!opponentSelected) {
        var opponentImage = $("<img>");
        opponentImage.attr("src", "");
        opponentImage.attr("src", imagesrc);
        $(".opponent").append(opponentImage);
        opponentSelected = true;
        $(this).remove();
    }


    if (characterSelected && opponentSelected) {
        while (!gameover) {
            fight();
            resetOpponent();
        }

    }


});

//on mouse enters an image
$("img").on("mouseenter", function () {
    $(this).css('cursor', 'pointer');
})

function loadPlayers() {
    characters.forEach(function (character) {
        var $column = $('<div>', {class: 'col-3'});
        var $divCardBlock = $('<div>', { class: 'card-block' });
        var $divCardImage = $('<img>', {
            src: character.imagesrc,
            height: '250px',
            width: '250px'
        });
        var $row = $('.characterRow');
        var $divCardTitle = $('<h4>', { class: 'card-title' }).append(character.name);
        var $divCardText = $('<p>', { class: 'card-text' }).append(character.description);
        var $divNewCardComplete = $divCardBlock
            .append($divCardImage)
            .append($divCardTitle, $divCardText);
        

        $column.append($divNewCardComplete);
        $column.appendTo($row);
    })
}

$(document).ready(function () {

    loadPlayers();




   



});
