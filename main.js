var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('https://s3-whjr-v2-prod-bucket.whjr.online/93ada58a-7bd7-467c-a2ad-4652a33461d8.jpg', function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(1000);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}
