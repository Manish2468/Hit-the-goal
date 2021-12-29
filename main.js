var canvas=new fabric.Canvas('my_canvas');
// Create canvas variable

//Set initial positions for ball and hole images.
hole_y=200;
hole_x=600;
ball_y=10;
ball_x=10;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(75);
		hole_obj.scaleToHeight(75);
		hole_obj.set({ top:hole_y,left:hole_x});
		canvas.add(hole_obj);
		});
	// write code to Upload golf image on the canvas
	new_image()
}
function new_image(){
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(75);
		ball_obj.scaleToHeight(75);
		ball_obj.set({ top:ball_y,left:ball_x});
		canvas.add(ball_obj);
		});
	// write code to Upload golf image on the canvas
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
	if(ball_obj!==null){
		if(keyPressed == '38')	{ up();	}
		if(keyPressed == '40')	{ down(); }
		if(keyPressed == '39')	{ left(); }
		if(keyPressed == '37')	{ right();	}
	}
	}
	function up()
	{	if(ball_y >0)
		{
			ball_y = ball_y - block_image_height;
			canvas.remove(ball_obj);
			new_image();
			console.log(ball_x);
		}
	}

	function down()
	{	if(ball_y <=600)
       {
            ball_y = ball_y + block_image_height;
            canvas.remove(ball_obj);
            new_image();
			console.log(ball_x);
       }
	}

	function left()
	{	if(ball_x >0)
		{
			ball_x = ball_x + block_image_width;
			canvas.remove(ball_obj);
            new_image();
			console.log(ball_x);
		}
	}

	function right()
	{	if(ball_x <=2050)
		{
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_obj);
            new_image();
			console.log(ball_x);
		}
	}
	
}

