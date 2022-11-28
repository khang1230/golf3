var canvas = new fabric.Canvas("myCanvas")

ball_Y = 0
ball_X = 0
hole_Y = 400
hole_X = 800

block_image_width = 5;
block_image_height = 5;

var hole_object, ball_object

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(img){
		hole_object = img
		hole_object.scaleToWidth(50)
		hole_object.scaleToHeight(50)
		hole_object.set({
			top:hole_Y,
			left:hole_X
		})
		canvas.add(hole_object)
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(img){
		ball_object = img
		ball_object.scaleToWidth(50)
		ball_object.scaleToHeight(50)
		ball_object.set({
			top:ball_Y,
			left:ball_X
		})
		canvas.add(ball_object)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_X == hole_X) && (ball_Y == hole_Y)){
		canvas.remove(ball_object)
		document.getElementById("hd3").innerHTML="You have hit the goal"
		document.getElementById("myCanvas").style.borderColor="red"
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		console.log(ball_Y)
		if(ball_Y >= 0){
			ball_Y = ball_Y - block_image_height
			canvas.remove(ball_object)
			new_image()
		}
	}

	function down()
	{
		console.log(ball_Y)
		if(ball_Y <= 555){
			ball_Y = ball_Y + block_image_height
			canvas.remove(ball_object)
			new_image()
		}
	}

	function left()
	{
		console.log(ball_X)
		if(ball_X >5)
		{
			ball_X = ball_X - block_image_width
			canvas.remove(ball_object)
			new_image()
		}
		}
	}

	function right()
	{
		console.log(ball_X)
		if(ball_X <=795)
		{
			ball_X = ball_X + block_image_width
			canvas.remove(ball_object)
			new_image()
		}
	}
	