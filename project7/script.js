// Get DOM Elements
const wordElement = document.getElementById('word');
const incorrectLettersElement = document.getElementById('incorrect-letters');
const notificationElement = document.getElementById('notification-container');
const gameoverElement = document.getElementById('gameover-container');
const gameoverMessage = document.getElementById('gameover-message');
const playBtn = document.getElementById('play-btn');

// Get DOM Elements for Hangman Parts
const hangmanParts = document.querySelectorAll('.hangman-part');

// List of 1000 words for game
const words = [
    'a','ability','able','about','above','accept','according','account','across','act','action','activity','actually','add','address','administration','admit','adult','affect','after','again','against','age','agency','agent','ago','agree','agreement','ahead','air','all','allow','almost','alone','along','already','also','although','always','American','among','amount','analysis','and','animal','another','answer','any','anyone','anything','appear','apply','approach','area','argue','arm','around','arrive','art','article','artist','as','ask','assume','at','attack','attention','attorney','audience','author','authority','available','avoid','away','baby','back','bad','bag','ball','bank','bar','base','be','beat','beautiful','because','become','bed','before','begin','behavior','behind','believe','benefit','best','better','between','beyond','big','bill','billion','bit','black','blood','blue','board','body','book','born','both','box','boy','break','bring','brother','budget','build','building','business','but','buy','by','call','camera','campaign','can','cancer','candidate','capital','car','card','care','career','carry','case','catch','cause','cell','center','central','century','certain','certainly','chair','challenge','chance','change','character','charge','check','child','choice','choose','church','citizen','city','civil','claim','class','clear','clearly','close','coach','cold','collection','college','color','come','commercial','common','community','company','compare','computer','concern','condition','conference','Congress','consider','consumer','contain','continue','control','cost','could','country','couple','course','court','cover','create','crime','cultural','culture','cup','current','customer','cut','dark','data','daughter','day','dead','deal','death','debate','decade','decide','decision','deep','defense','degree','Democrat','democratic','describe','design','despite','detail','determine','develop','development','die','difference','different','difficult','dinner','direction','director','discover','discuss','discussion','disease','do','doctor','dog','door','down','draw','dream','drive','drop','drug','during','each','early','east','easy','eat','economic','economy','edge','education','effect','effort','eight','either','election','else','employee','end','energy','enjoy','enough','enter','entire','environment','environmental','especially','establish','even','evening','event','ever','every','everybody','everyone','everything','evidence','exactly','example','executive','exist','expect','experience','expert','explain','eye','face','fact','factor','fail','fall','family','far','fast','father','fear','federal','feel','feeling','few','field','fight','figure','fill','film','final','finally','financial','find','fine','finger','finish','fire','firm','first','fish','five','floor','fly','focus','follow','food','foot','for','force','foreign','forget','form','former','forward','four','free','friend','from','front','full','fund','future','game','garden','gas','general','generation','get','girl','give','glass','go','goal','good','government','great','green','ground','group','grow','growth','guess','gun','guy','hair','half','hand','hang','happen','happy','hard','have','he','head','health','hear','heart','heat','heavy','help','her','here','herself','high','him','himself','his','history','hit','hold','home','hope','hospital','hot','hotel','hour','house','how','however','huge','human','hundred','husband','I','idea','identify','if','image','imagine','impact','important','improve','in','include','including','increase','indeed','indicate','individual','industry','information','inside','instead','institution','interest','interesting','international','interview','into','investment','involve','issue','it','item','its','itself','job','join','just','keep','key','kid','kill','kind','kitchen','know','knowledge','land','language','large','last','late','later','laugh','law','lawyer','lay','lead','leader','learn','least','leave','left','leg','legal','less','let','letter','level','lie','life','light','like','likely','line','list','listen','little','live','local','long','look','lose','loss','lot','love','low','machine','magazine','main','maintain','major','majority','make','man','manage','management','manager','many','market','marriage','material','matter','may','maybe','me','mean','measure','media','medical','meet','meeting','member','memory','mention','message','method','middle','might','military','million','mind','minute','miss','mission','model','modern','moment','money','month','more','morning','most','mother','mouth','move','movement','movie','Mr','Mrs','much','music','must','my','myself','name','nation','national','natural','nature','near','nearly','necessary','need','network','never','new','news','newspaper','next','nice','night','no','none','nor','north','not','note','nothing','notice','now','number','occur','of','off','offer','office','officer','official','often','oh','oil','ok','old','on','once','one','only','onto','open','operation','opportunity','option','or','order','organization','other','others','our','out','outside','over','own','owner','page','pain','painting','paper','parent','part','participant','particular','particularly','partner','party','pass','past','patient','pattern','pay','peace','people','per','perform','performance','perhaps','period','person','personal','phone','physical','pick','picture','piece','place','plan','plant','play','player','PM','point','police','policy','political','politics','poor','popular','population','position','positive','possible','power','practice','prepare','present','president','pressure','pretty','prevent','price','private','probably','problem','process','produce','product','production','professional','professor','program','project','property','protect','prove','provide','public','pull','purpose','push','put','quality','question','quickly','quite','race','radio','raise','range','rate','rather','reach','read','ready','real','reality','realize','really','reason','receive','recent','recently','recognize','record','red','reduce','reflect','region','relate','relationship','religious','remain','remember','remove','report','represent','Republican','require','research','resource','respond','response','responsibility','rest','result','return','reveal','rich','right','rise','risk','road','rock','role','room','rule','run','safe','same','save','say','scene','school','science','scientist','score','sea','season','seat','second','section','security','see','seek','seem','sell','send','senior','sense','series','serious','serve','service','set','seven','several','sex','sexual','shake','share','she','shoot','short','shot','should','shoulder','show','side','sign','significant','similar','simple','simply','since','sing','single','sister','sit','site','situation','six','size','skill','skin','small','smile','so','social','society','soldier','some','somebody','someone','something','sometimes','son','song','soon','sort','sound','source','south','southern','space','speak','special','specific','speech','spend','sport','spring','staff','stage','stand','standard','star','start','state','statement','station','stay','step','still','stock','stop','store','story','strategy','street','strong','structure','student','study','stuff','style','subject','success','successful','such','suddenly','suffer','suggest','summer','support','sure','surface','system','table','take','talk','task','tax','teach','teacher','team','technology','television','tell','ten','tend','term','test','than','thank','that','the','their','them','themselves','then','theory','there','these','they','thing','think','third','this','those','though','thought','thousand','threat','three','through','throughout','throw','thus','time','to','today','together','tonight','too','top','total','tough','toward','town','trade','traditional','training','travel','treat','treatment','tree','trial','trip','trouble','TRUE','truth','try','turn','TV','two','type','under','understand','unit','until','up','upon','us','use','usually','value','various','very','victim','view','violence','visit','voice','vote','wait','walk','wall','want','war','watch','water','way','we','weapon','wear','week','weight','well','west','western','what','whatever','when','where','whether','which','while','white','who','whole','whom','whose','why','wide','wife','will','win','wind','window','wish','with','within','without','woman','wonder','word','work','worker','world','worry','would','write','writer','wrong','yard','yeah','year','yes','yet','you','young','your','yourself'
];

// Select a word from the list at random
let randomWord = words[Math.floor(Math.random() * words.length)];

// Array to hold the letters from correct guesses
// const correctLetters = ['a','e','i','o','u','b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const correctLetters = [];
// Array to hold the letters from incorrect guesses
const incorrectLetters = [];

// Function to render the random word in the UI
function renderWord() {
    // split the random word into individual letters as an array, map over the array,
    // for each letter, create a span element and only display the letter if it's present
    // in the correctLetters array
    wordElement.innerHTML = `
        ${randomWord.split('').map( letter => `
            <span class="letter">
                ${ correctLetters.includes(letter) ? letter : '' }
            </span>
        `).join('')}
    `;
    console.log(wordElement.innerText);
    // Remove the new line characters from the word
    const word = wordElement.innerText.replace(/\n/g, '');
    console.log(word);
    // Check to see if the word (only the correct letters) matches the randomWord
    if ( word === randomWord ) {
        // If the word matches the random word, set the gameover message to congratulate player for win
        gameoverMessage.innerText = 'You won!';
        // Display the gameover container
        gameoverElement.style.display = 'flex';
    }
};

// Function to display the notification container
function displayNotification() {
    // Display the notification in the window
    notificationElement.classList.add('show');
    // Remove the notification after 1 second
    setTimeout( () => {
        notificationElement.classList.remove('show');
    }, 1000 );
};

// Function to update UI based on incorrect letter guess
function renderIncorrectLetters() {
    // Display the incorrect letters section and show each letter from the incorrectLetters array
    incorrectLettersElement.innerHTML = `
        <p>Incorrect Letters</p>
        ${incorrectLetters.map( letter => `<span>${letter}</span>` )}
    `;
    // Display the hangman part for everytime user inputs an incorrect letter
    hangmanParts.forEach( (part, index) => {
        // Determine the number of incorrect guesses by counting number of incorrect letters
        const numIncorrect = incorrectLetters.length;
        // Check if the index value of the hangman part is less than the number of incorrect letters
        if ( index < numIncorrect ) {
            // If true, then display this part
            part.style.display = 'block';
        } else {
            // if false, then don't display
            part.style.display = 'none';
        }
    });
    // Check if the game is over
    if ( incorrectLetters.length === hangmanParts.length ) {
        // If true, set the gameover message
        gameoverMessage.innerText = 'You lost!';
        // Display the gameover container
        gameoverElement.style.display = 'flex';
    }
};

// Event Listeners
// Listen for keyboard keydown event
window.addEventListener('keydown', e => {
    // Check if the keyboard key pressed is a letter
    if ( e.keyCode >= 65 && e.keyCode <= 90 ) {
        // if the keyCode is between 65 and 90, save the letter
        const letter = e.key;
        // Check to see if the letter is in the randomWord
        if ( randomWord.includes(letter) ) {
            // If the randomWord has the letter, check to see if letter is already in correctLetters array
            if ( !correctLetters.includes(letter) ) {
                // If the letter is not already in the correctLetters array, add it there
                correctLetters.push(letter);
                // Render the word in the UI again
                renderWord();
            } else {
                // If the letter is already in the correctLetters array, show the notification
                displayNotification();
            }
        } else {
            // If the randomWord does not have the letter, check to see if letter is already in the incorrectLetters array
            if ( !incorrectLetters.includes(letter) ) {
                // If the letter is not already in the incorrectLetters array, add it there
                incorrectLetters.push(letter);
                // Render the incorrect letters section
                renderIncorrectLetters();
            } else {
                // If the letter is already in the incorrectLetters array, show the notification
                displayNotification();
            }
        }
    }
})

// Listen for a click on the playBtn
playBtn.addEventListener('click', () => {
    // Empty the incorrect and correct letter arrays
    correctLetters.splice(0);
    incorrectLetters.splice(0);
    // Generate a new randomWord
    randomWord = words[Math.floor(Math.random() * words.length)];
    // Render the new randomWord
    renderWord();
    // Update the Incorrect Letters section
    renderIncorrectLetters();
    // Hide the gameover container
    gameoverElement.style.display = 'none';
})

renderWord();