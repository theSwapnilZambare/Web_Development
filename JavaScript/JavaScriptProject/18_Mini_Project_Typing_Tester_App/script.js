// Get the HTML Elements
var originalTextElement = document.querySelector('.text-section-div p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorderElement = document.querySelector('#text-area');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButton = document.querySelector('#reset');
var greetMsg = document.querySelector('.cong-section');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis, dignissimos dolor enim ex fuga illo inventore ipsam nesciunt nostrum obcaecati placeat possimus, provident quis ratione reiciendis voluptate! Accusantium blanditiis',
    'At consequuntur dolores harum illo omnis perspiciatis quis sunt tempore tenetur, voluptatibus. Accusantium, asperiores aspernatur consectetur deserunt doloremque esse ex illo laborum maxime mollitia nesciunt officiis, quos sunt unde vel. Ab accusamus alias aperiam assumenda deserunt dolores ducimus',
    'Ipsa maxime officia omnis perspiciatis saepe sequi vero? Accusamus adipisci aliquam amet aperiam, asperiores aspernatur aut beatae consectetur debitis deleniti dicta dolore dolorem dolorum eligendi',
    'exercitationem, voluptas? A dicta eligendi est fuga maiores, modi nisi similique totam ullam! A adipisci aut cupiditate delectus dolorem ex id non, pariatur quia sed sint tenetur unde! Accusamus consequuntur',
    'deleniti dicta ipsam molestias officiis omnis quo sunt vel, voluptates? Ab accusamus accusantium aliquam amet aperiam autem commodi cupiditate distinctio dolor doloribus earum et eum hic iusto, minima modi mollitia nemo neque nihil omnis optio perspiciatis provident, recusandae',
    'deserunt doloremque ea eius ex, exercitationem incidunt maiores minima nam nobis nostrum perferendis rerum tempore temporibus voluptas voluptates. Amet culpa ea fuga neque quia ut? Animi at blanditiis',
    'doloremque facilis fuga iusto labore optio praesentium, provident quam quibusdam quidem quo, rerum! Debitis dolore fuga itaque laboriosam laborum possimus, quidem quo recusandae sit voluptatem! At blanditiis',
    'Adipisci alias aliquid aspernatur assumenda at dignissimos eius eos iure nulla officia sit, suscipit temporibus, unde velit voluptatem. Corporis eos esse fugiat hic illo ipsa iusto laboriosam magni nihil',
    ' nesciunt officiis quaerat quia quidem quo quos, sed, sint sunt tempore ullam velit voluptate? Architecto, beatae corporis dolores earum error eveniet, ex expedita fugit incidunt minima nisi officiis porro quam repudiandae rerum sed velit! Aliquid at aut commodi consequatur dolore, dolores',
    'possimus qui similique suscipit tempore vero vitae voluptate voluptates! Animi aperiam aspernatur at consectetur cumque delectus distinctio dolorum eligendi esse illo illum incidunt inventore',
    'A accusantium aspernatur at aut consectetur consequuntur cum cumque deleniti doloremque dolores ducimus eius est explicabo hic labore laudantium, libero minima mollitia neque nihil odit optio quas'];
var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning =false;
// Add Event Listener for textArea
textAreaElement.addEventListener('keypress',function () {
    var textEnteredLength = textAreaElement.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        // start the timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});
// Add Event Listener for TextArea
textAreaElement.addEventListener('keyup',function() {
    var textEntered = textAreaElement.value;
    var originalText = originalTextElement.textContent;
    var partialText = originalText.substr(0,textEntered.length);
    if(textEntered === ''){
        textAreaBorderElement.style.borderColor = 'gray';
    }
    else{
        if(textEntered === originalText){
            // green
            textAreaBorderElement.style.borderColor = 'forestgreen';
            // Stop the timer
            clearInterval(interval);
            // Display congrats Message
            greetMsg.style.display = 'block';
        }
        else{
            if(textEntered === partialText){
                // blue
                textAreaBorderElement.style.borderColor = 'lightblue';
            }
            else{
                // Red
                textAreaBorderElement.style.borderColor = 'orangered';
            }
        }
    }
});
// Reset Button Logic
resetButton.addEventListener('click',function() {
    //stop the timer
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning =false;
    textAreaBorderElement.style.borderColor = 'gray';
    textAreaElement.value = '';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    // Hide congrats Message
    greetMsg.style.display = 'none';
    // get Random Text
    getRandomString();
});
// start Timer
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
    timer++;
}
// Leading Zero function
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}
// get Random String
function getRandomString() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.textContent = randomString;
}