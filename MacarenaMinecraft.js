const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("minecraftcanvas");

block_image_width = 50;
block_image_height = 50;

player_x = 10;
player_y = 10;

var player_object= "";
var block_image_object= "";

function player_update()
{ 
    fabric.Image.fromURL("GAFI.png", function(Img)
    
    { player_object = Img;
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});

}



function new_image(get_image)
{ 
    fabric.Image.fromURL(get_image, function(Img) 
    

    
    { block_image_object = Img;
    
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keycode;
console.log(keyPressed);
if (keyPressed == '89')
{
console.log ("y pressed");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if (keyPressed == '90')
{
console.log ("z pressed");
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed == '38')                                                                      
{
    up();
    console.log("up arrow pressed");
}

if(keyPressed == '40')
{
    down();
    console.log("down arrow pressed");
}

if(keyPressed == '37')
{
    left();
    console.log("left arrow pressed");
}

if(keyPressed == '39')
{
    right();
    console.log("right arrow pressed");
}


function up()
{
if(player_y >=0)
{
    player_y = player_y - block_image_height;
    canvas.remove(player_object);
    player_update();
}

}

function down()
{
if(player_y <=550)
{
    player_y = player_y + block_image_height;
    canvas.remove(player_object);
    player_update();
}

}

function left()
{
if(player_x >0)
{
    player_x = player_x - block_image_width;
    canvas.remove(player_object);
    player_update();
}

}

function right()
{
if(player_x <=800)
{
    player_x = player_x + block_image_width;
    canvas.remove(player_object);
    player_update();
}

}
























if(keyPressed == '65')
{
    new_image("prismarine.png");
    console.log("a pressed");
}

if(keyPressed == '66')
{
    new_image("quartz.png");
    console.log("b pressed");
}
}