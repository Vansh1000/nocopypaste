function setup(){
    canvas = createCanvas(350, 350);
    canvas.position(550, 300)
    background("white");

}

function updateCanvas(){
    background("white");
    random_number = Maths.floor((Math.random()*quick_draw_data_set.lenght)+1);
    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById("sketch_name").innerHTML = "Sketch to be drawn"+ sketch;
}



function draw(){
    check_sketch()
    if( draw_sketch == sketch){
      answer_holder = "set"
      score ++;
      document.getElementById("score").innerHTML = "score =" + score;
    }
}


function check_sketch(){
    timer_counter ++;
    document.getElementById("time").innerHTML = "Time = " + timer_counter;
    console.log(timer_counter);
    if(timer_counter > 400){
        timer_counter = 0;
        timer_check = "completed";

    }

    if(timer_check == "completed" && answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}