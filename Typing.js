let inputLetter = '';
let lastposition = 0;
let focusWord = 0;
let indexText = 0;
let wordCount = 0;
let correctWords = 0;
let charCount = 0;
let correctChar;
let totalWords = 0;
let remainingTime;
let timerValue;
let keys = {};

let textBox = document.querySelector(".textBox p");
let typeBox = document.getElementById('typeBox');
let letterSpan = document.querySelectorAll('.textBox p span');
let timeSec = document.getElementById('timeSec');
let WPM = document.getElementById('WPM');
let CPM = document.getElementById('CPM');
let accuracy = document.getElementById('accuracy');
let textWords;


function SelectText() {
  let timer = document.getElementById('timeSelect').value;
  let levelText = document.getElementById('levelSelect').value;
  localStorage.setItem('levelText',levelText);
  localStorage.setItem('timer', timer); 
  
}


function getText(){
  if((localStorage.getItem('timer') === '1' || localStorage.getItem('timer') === '3') && localStorage.getItem('levelText') === 'easy'){
    textWords = ['The conversation in the veranda chiefly related to the curious traditions existing amongst the Karens. Mark Lawrence had made them his study, and they had beguiled many an hour that might otherwise have been sad and lonely. ',
    'The young chaplain had hitherto met with no kindred spirit in the limited society of Moulmein. Full of earnest devotion himself, and a warm sympathizer in the missionary cause, Mark had been discouraged by the difficulty of imbuing others with his own zeal; ', 
    'it was like dragging a heavy load up a hill. The easy-going worldliness of the doctor, the carelessness of Pogson, the stolidity of Cottle, the vulgar loquacity of his wife, made Mark often sadly contrast his position in Moulmein with the happy life which he had led in England ',
    'in a rural parish where he had almost as many friends as hearers, and where he was a member of a large family circle. Now and then the chaplain had met with missionaries whose names are still honoured and whose work still flourishes. Those days had been red-letter days to Mark Lawrence; ',
    'but they had been “few and far between”—little oases in a dull, sandy plain. Now, in the accomplished, highly-educated young merchant who had come to reside in Moulmein, the chaplain thought that he had found a real friend—one who would join with him in every labour of love. '];
  }else if (localStorage.getItem('timer') === '5' && localStorage.getItem('levelText') === 'easy'){
    textWords = ['Once upon a time, in a small village nestled amidst rolling hills and lush green fields, lived a young girl named Lily. She was known for her cheerful nature and her love for exploration. Every day, she would embark on adventures, eager to discover the wonders of the world around her. ',
    'Lily"s days were filled with simple pleasures.She would chase butterflies in the meadow,climb trees to get a better view,and splash in the sparkling brook that ran through the village.Her imagination knew no bounds,and she could turn any ordinary object into a magical artifact ',
    'One sunny morning,as Lily was wandering near the edge of the village,she stumbled upon an old treasure map hidden beneath a pile of leaves.Excitement filled her heart as she realized that an adventure awaited her.With the map in hand,she gathered her courage and set off on a quest to find the buried treasure. ',
    'Her journey took her through dense forests, across bubbling streams,and up winding paths.Along the way,she encountered friendly woodland creatures who offered guidance and support. Together,they overcame obstacles and ventured deeper into the unknown.Finally,after hours of searching and following the clues,Lily arrived at the designated spot marked on the map. ',
    'With trembling hands,she dug into the soft earth and uncovered a chest filled with glittering jewels and precious artifacts.It was a moment of pure joy and triumph.But as Lily gazed at the treasure before her,she realized that the real treasure was not the shiny trinkets but the memories she had created, ',
    'the friendships she had forged, and the lessons she had learned along the way.The adventure had taught her the value of curiosity, perseverance, and the beauty of the world waiting to be explored.'];
  }else if((localStorage.getItem('timer') === '3' || localStorage.getItem('timer') === '5') && localStorage.getItem('levelText') === 'medium'){
       textWords = ['In the bustling city of Metropolis, amidst towering skyscrapers and bustling streets, lived a young artist named Sophia. She possessed an extraordinary talent for capturing the essence of life on her canvas, and her paintings seemed to come alive with vibrant colors and intricate details. ',
        'Sophia"s art spoke to the hearts of those who beheld it, evoking emotions and awakening a sense of wonder.As she walked through the city, Sophia found inspiration in the vibrant diversity that surrounded her. The streets were a tapestry of cultures, with people from all walks of life weaving their stories into the fabric of the metropolis. ',
        'Each interaction, each shared moment, fueled Sophia"s creativity and ignited her passion.Every day, Sophia would set up her easel in a park, immersing herself in the symphony of sounds and sights. She would paint with an intensity that transported her into another world, where time stood still, and only the canvas and her brushes existed. ',
        'Her art became a medium through which she could convey her deepest thoughts and emotions.People began to take notice of Sophia"s talent. Galleries showcased her work, and art enthusiasts clamored to acquire her masterpieces. Yet, amidst the recognition and success, Sophia remained humble and true to her art. ',
        'She believed that the purpose of her talent was not only to create beauty but also to inspire and bring about positive change.Sophia started organizing art workshops for underprivileged children, using her skills to encourage self-expression and unlock their creativity. She believed that art had the power to heal, to bridge divides, and to ignite hope. ',
        'Through her workshops, she witnessed the transformative effect of art, empowering young minds and giving them a voice they never knew they had.As the years passed, Sophia"s influence expanded beyond the boundaries of Metropolis. Her art traveled far and wide, touching the souls of people across the globe. ',
        'She became a beacon of creativity and a symbol of unity, reminding the world of the beauty that lies within the human spirit.And so, Sophia"s artistic journey continued, fueled by her unwavering passion and her unwavering belief in the power of art to illuminate, inspire, and change lives. ']
  }else if(localStorage.getItem('timer') === '1' && localStorage.getItem('levelText') === 'medium'){
    textWords = ['The world is a tapestry woven with threads of diverse cultures, captivating landscapes, and untold stories. From the majestic peaks of snow-capped mountains to the vastness of the open sea, nature"s grandeur never fails to leave us in awe.As I traverse the rugged terrains and traverse the unexplored paths. ',
    'I am filled with a sense of adventure and curiosity. The vibrant tapestry of humanity unfolds before me, each person carrying their unique experiences, dreams, and aspirations. It is through embracing these differences that we can truly appreciate the beauty of our shared existence. ']
  }else if (localStorage.getItem('timer') === '5' && localStorage.getItem('levelText') === 'hard'){
     textWords = ['As I venture deeper into the wilderness, I am greeted by a tapestry of vibrant colors and diverse flora. Wildflowers of every hue paint the landscape, their delicate petals swaying gently in the breeze. Bees and butterflies flit from blossom to blossom, diligently collecting nectar. ',
     'The forest is a treasure trove of biodiversity, with countless species of plants and animals coexisting in perfect harmony.Walking along a winding trail, I come across a clearing bathed in dappled sunlight. It is a haven for a multitude of woodland creatures. Squirrels scurry up trees, their fluffy tails serving as balancing tools as they gather acorns for the upcoming winter. ', 
     'In the distance, I catch a glimpse of a fox gracefully leaping through the tall grass, its fiery coat blending seamlessly with the surroundings. Nature"s orchestra plays on, with the chirping of crickets and the croaking of frogs adding their melodic notes to the symphony.As the day progresses, I reach the banks of a tranquil river. ',
     'Its crystal-clear waters meander through the heart of the forest, teeming with life. Fish dart beneath the surface, their silvery scales glinting in the sunlight. I dip my hand into the cool water, feeling the gentle flow against my skin. Nearby, a family of ducks paddles gracefully, their webbed feet propelling them effortlessly. ',
     'The river serves as a lifeline for the entire ecosystem, providing nourishment and sustenance to its inhabitants.Moving deeper into the wilderness, I am awe-struck by the grandeur of ancient trees that have witnessed centuries pass by. Their gnarled trunks tell tales of resilience and endurance. ',
     'Some are adorned with intricate mosses and ferns, creating miniature gardens in the midst of the forest. It is a true testament to the power of nature, as these majestic giants stand tall against the test of time. '];
  }else if ((localStorage.getItem('timer') === '1' || localStorage.getItem('timer') === '3') && localStorage.getItem('levelText') === 'hard'){
     textWords = ['Deep in the heart of the wilderness, a symphony of life unfolds. Towering ancient trees stand tall, their branches reaching for the heavens. Sunlight filters through the dense foliage, casting intricate patterns on the forest floor. The air is thick with the earthy scent of moss, ', 
     'and the sound of leaves rustling underfoot is accompanied by the occasional call of a distant bird or the gentle gushing of a nearby stream. The wilderness is a sanctuary for countless creatures, each playing a vital role in the intricate web of life. ',
     'Here, one can witness the circle of life unfold — from the delicate dance of butterflies to the majestic stride of a wild stag. It"s a world untouched by human hands, where nature reigns supreme and reminds us of the awe-inspiring beauty of our planet. ']
  }
  createSpans();
}
getText();

function createSpans() {
  textBox.textContent = '';
  inputLetter = '';
  textWords[indexText].split('').forEach(element => {
    let wordSpan = document.createElement('span');
    wordSpan.textContent = element;
    textBox.appendChild(wordSpan);
  });

  letterSpan = document.querySelectorAll('span'); 
}

function handleKeyboard() {
  window.addEventListener('keydown', event => {
    keys[event.keyCode] = true;
  });
  window.addEventListener('keyup', event => {
    keys[event.keyCode] = false;
  });

  let userInput = typeBox.value;
  letterSpan[focusWord].classList.remove('focused');
  
  if (keys[8]) { //Backspace

    if (lastposition > 0) {
       --lastposition;
       --focusWord;
       --charCount;
       inputLetter = inputLetter.slice(0, -1);
    } if(letterSpan[focusWord].textContent === ' '){
       --wordCount;
    }
  } else {
    inputLetter += userInput[lastposition];
    lastposition++;
    focusWord++;

      if (letterSpan[focusWord - 1].textContent === ' ') {

        if(keys[32]) { //space
          let targetWords = textWords[indexText].trim().split(' ');
          if (userInput.trim() === targetWords[wordCount]) {
            ++correctWords;
           }
          typeBox.value = '';
          lastposition = 0;
          --charCount;
        }
          ++wordCount;
          ++totalWords;
      }     
     
  }

  if (focusWord < letterSpan.length) {
    letterSpan[focusWord].classList.add('focused');
  }
}

function checkInput() {
  handleKeyboard();

  letterSpan.forEach((element, index) => {
    let charInput = inputLetter[index];
  
    
    if (charInput === undefined) {
      element.classList.remove('wrong');
      element.classList.remove('correct');
      
    } else if (charInput === element.textContent) {
      correctChar = true;
      element.classList.remove('wrong');
      element.classList.add('correct');
    } else {
      correctChar = false;
      element.classList.remove('correct');
      element.classList.add('wrong');
    }
    
  });
  
  if(correctChar){
    ++charCount;
  }
 Score();
// change index qoute
  if(inputLetter.length === textWords[indexText].length){
    ++indexText;
    typeBox.value = '';
    lastposition = 0;
    focusWord = 0;
    wordCount = 0;
    createSpans();
  }
}

function Timer() {
  if (localStorage.getItem('timer') === '1') {
    timeSec.innerHTML = '60';
  } else if (localStorage.getItem('timer') === '3') {
    timeSec.innerHTML = '180';
  } else if (localStorage.getItem('timer') === '5') {
    timeSec.innerHTML = '300';
  }
  timerValue = parseInt(localStorage.getItem('timer'));
  remainingTime = timerValue * 60;
}
Timer();

function Score() {

    WPM.innerHTML = Math.floor(correctWords/timerValue)
    CPM.innerHTML = Math.floor(charCount/timerValue);
  
   if (correctWords > 0) {accuracy.innerHTML = Math.floor((correctWords * 100)/totalWords)};
}
function updateTimer() {
   --remainingTime;
   timeSec.innerHTML = remainingTime;

  if (remainingTime > 0) {
    setTimeout(updateTimer,1000);
  } else {
    startAgain();
  }
  
}

function startAgain(){
  let yourSpeed;  
  let imageCard = document.createElement('img');

  if (WPM.innerHTML < 10){
    yourSpeed = 'a Snail'
    imageCard.src = 'https://easydrawingguides.com/wp-content/uploads/2018/09/how-to-draw-a-snail-featured-image-1200.png';
  }else if (WPM.innerHTML < 30){
    yourSpeed = 'a Turtle'
    imageCard.src = 'https://easydrawingguides.com/wp-content/uploads/2017/12/how-to-draw-a-sea-turtle-featured-image-1200.png';
  }
  else if (WPM.innerHTML < 45){
    yourSpeed = 'a T-Rex'
    imageCard.src = 'https://www.papo-france.com/669/t-rex.jpg';
  }
  else if (WPM.innerHTML < 60){
    yourSpeed = 'an Octopus'
    imageCard.src = 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-an-octopus.jpg';
  }else{
    yourSpeed = 'a Rabbit'
    imageCard.src = 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-care-sheet';
  }
  let buttonReset = document.createElement('button');
  buttonReset.className = 'btn btn-primary'; 
  buttonReset.textContent = "Restart";

  let textElement = document.createElement('p');
  textElement.innerHTML = `<b>Nice! You are a ${yourSpeed}</b><br><br>You type with the speed of ${WPM.innerHTML} WPM (${charCount} CPM). Your accuracy was ${accuracy.textContent}%. Keep practicing!<br><br>`;
  textElement.appendChild(buttonReset)

  textElement.classList.add('text-card');
  imageCard.classList.add('img-card');
 

  let card = document.createElement('div');
  card.classList.add('cardDisplay');
  card.appendChild(imageCard);
  card.appendChild(textElement);


  let continer = document.createElement('div');
  continer.classList.add('continer-card');
  continer.appendChild(card);
  document.body.appendChild(continer);
  document.body.classList.add('changeBack');
  buttonReset.addEventListener('click', ()=>{
  location.reload();
  })
}

typeBox.addEventListener('input', function () {
  checkInput();
  
});