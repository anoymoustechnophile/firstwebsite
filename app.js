// Write Your Java Scrit here
// alert("Please click OK!");
var pics= [
"Pictures/1.jpg",    //0
"Pictures/2.jpg",    //1
"Pictures/3.jpg",    //2
"Pictures/4.jpg",    //3
"Pictures/5.jpg",    //4
"Pictures/6.jpg",    //5
"Pictures/7.jpg",    //6
"Pictures/8.jpg",    //7
"Pictures/9.jpg",    //8
"Pictures/10.jpg",   //9
"Pictures/11.jpg"    //10
                     //11
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;

btn.addEventListener("click", function () {
	if (counter === 11){
		counter = 0;
			}
	img.src = pics[counter]
	counter = counter + 1;
});
