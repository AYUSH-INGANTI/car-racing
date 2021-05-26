canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 60;
background_image = "racing2.jpg";
car_image = "car1.png";
car2_image = "car1.png";
car_x = 10;
car_y = 10;
car2_x = 10;
car2_y = 70;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadCar;
    car_imgTag.src = car_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}
function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car_up();
        console.log("up")
    }
    if (my_keydown == "40") {
        car_down();
        console.log("down");
    }
    if (my_keydown == "37") {
        car_left();
        console.log("left");
    }
    if (my_keydown == "39") {
        car_right();
        console.log("right");
    }
    if(my_keydown == "87"){
      car2_up();  
      console.log("key w");
    }
    if(my_keydown == "65"){
        car2_left();  
        console.log("key a");
      }
      if(my_keydown == "83"){
        car2_down();  
        console.log("key s");
      }
      if(my_keydown == "68"){
        car2_right();  
        console.log("key d");
      }
}