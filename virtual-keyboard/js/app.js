document.write('<h1 class="title">RSS Virtual Keyboard</h1>');
document.write('<textarea class="text"></textarea>');
document.write('<div class="keyboard"><div class="board">');
document.write('<div class="board__row"></div><div class="board__row"></div><div class="board__row"></div><div class="board__row"></div><div class="board__row"></div>');
document.write('</div></div>');
document.write('<h2>OS: Windows</h2>');
document.write('<h2>Change language (en/ru):<button class="change-btn">Alt+Shift</button></h2>');


window.onload = function() {

    const pBoard = document.querySelector('.board');
    const pText = document.querySelector('.text');
   // const pChangeBtn=document.querySelector('.change-btn');

    let keyMode=2;
    if( 'keyMode' in localStorage)
         keyMode=localStorage.getItem('keyMode');
    else
       localStorage.setItem('keyMode', keyMode);

    console.log('keyMode',keyMode);


    const aKeys=[

        [0,0,'`','~','ё','Ё',1,'Backquote'],
        [0,0,'1','!','1','!',1,'Digit1'],
        [0,0,'2','@','2','"',1,'Digit2'],
        [0,0,'3','#','3','№',1,'Digit3'],
        [0,0,'4','$','4',';',1,'Digit4'],
        [0,0,'5','%','5','%',1,'Digit5'],
        [0,0,'6','^','6',':',1,'Digit6'],
        [0,0,'7','&','7','?',1,'Digit7'],
        [0,0,'8','*','8','*',1,'Digit8'],
        [0,0,'9','(','9','(',1,'Digit9'],
        [0,0,'0',')','0',')',1,'Digit0'],
        [0,0,'-','_','-','_',1,'Minus'],
        [0,0,'=','+','=','+',1,'Equal'],
        [0,1,'Backspace','','','',2,'Backspace'],

        [1,1,'Tab','','','',1,'Tab'],
        [1,0,'q','Q','й','Й',1,'KeyQ'],
        [1,0,'w','W','ц','Ц',1,'KeyW'],
        [1,0,'e','E','у','У',1,'KeyE'],
        [1,0,'r','R','к','К',1,'KeyR'],
        [1,0,'t','T','е','Е',1,'KeyT'],
        [1,0,'y','Y','н','Н',1,'KeyY'],
        [1,0,'u','U','г','Г',1,'KeyU'],
        [1,0,'i','I','ш','Ш',1,'KeyI'],
        [1,0,'o','O','щ','Щ',1,'KeyO'],
        [1,0,'p','P','з','З',1,'KeyP'],
        [1,0,'[','{','х','Х',1,'BracketLeft'],
        [1,0,']','}','ъ','Ъ',1,'BracketRight'],
        [1,0,'\\','|','\\','/',1,'Backslash'],
        [1,1,'Del','','','',1,'Delete'],

        [2,1,'CapsLock','','','',2,'CapsLock'],
        [2,0,'a','A','ф','Ф',1,'KeyA'],
        [2,0,'s','S','ы','Ы',1,'KeyS'],
        [2,0,'d','D','в','В',1,'KeyD'],
        [2,0,'f','F','а','А',1,'KeyF'],
        [2,0,'g','G','п','П',1,'KeyG'],
        [2,0,'h','H','р','Р',1,'KeyH'],
        [2,0,'j','J','о','О',1,'KeyJ'],
        [2,0,'k','K','л','Л',1,'KeyK'],
        [2,0,'l','L','д','Д',1,'KeyL'],
        [2,0,';',':','ж','Ж',1,'Semicolon'],
        [2,0,'\'','"','э','Э',1,'Quote'],
        [2,1,'Enter','','','',2,'Enter'],


        [3,1,'Shift','','','',2,'ShiftLeft'],
        [3,0,'z','Z','я','Я',1,'KeyZ'],
        [3,0,'x','X','ч','Ч',1,'KeyX'],
        [3,0,'c','C','с','С',1,'KeyC'],
        [3,0,'v','V','м','М',1,'KeyV'],
        [3,0,'b','B','и','М',1,'KeyB'],
        [3,0,'n','N','т','Т',1,'KeyN'],
        [3,0,'m','M','ь','Ь',1,'KeyM'],
        [3,0,',','<','б','Б',1,'Comma'],
        [3,0,'.','>','ю','Ю',1,'Period'],
        [3,0,'/','?','.',',',1,'Slash'],
        [3,1,'↑','','','',1,'ArrowUp'],
        [3,1,'Shift','','','',2,'ShiftRight'],


        [4,1,'Ctrl','','','',1,'ControlLeft'],
        [4,1,'Win','','','',1,'MetaLeft'],
        [4,1,'Alt','','','',1,'AltLeft'],
        [4,1,' ','','','',3,'Space',],
        [4,1,'Alt','','','',1,'AltRight'],
        [4,1,'←','','','',1,'ArrowLeft'],
        [4,1,'↓','','','',1,'ArrowDown'],
        [4,1,'→','','','',1,'ArrowRight'],
        [4,1,'Ctrl','','','',1,'ControlRight']


    ];

    let pKey=0;

    for (let i in aKeys)
    {
      pKey=document.createElement("div");
      pKey.classList.add("key");

      if (aKeys[i][1]===0) pKey.textContent=aKeys[i][keyMode];
      if (aKeys[i][1]===1) {
        pKey.textContent=aKeys[i][2];
        pKey.classList.add("key-control");
      }

      if (aKeys[i][6]===2) pKey.style.width='95px'
      else if (aKeys[i][6]===3)  pKey.style.width='350px';

      pKey.addEventListener('click',function(e) {
        this.classList.add('pressed');
        const timerPress=setTimeout(endPress,300);
        if (aKeys[i][1]===0)  pText.value=pText.value+getChar(i);
        if (aKeys[i][7]==='CapsLock') toggleCapsLock();

        });

      pBoard.childNodes[aKeys[i][0]].appendChild(pKey);
    }

    let apKey=document.querySelectorAll('.key');

    function endPress () {
        for ( i=0; i< apKey.length; i++){
            if (apKey[i].classList.contains('pressed')){
            apKey[i].classList.remove('pressed');
          }
        }
    }

    function getChar(iKey){
      return aKeys[iKey][keyMode];
    }

    function showKeys(){

      console.log('showkeys++++++++');
      for (i=0; i< apKey.length; i++){
        if (aKeys[i][1]===0) apKey[i].textContent=aKeys[i][keyMode];
       }
    }

    function toggleCapsLock(){
      console.log ('toggleCapsLock----',keyMode);
     /* switch (keyMode){
        case 2: keyMode=3; break;
        case 3: keyMode=2; break;
        case 4: keyMode=5; break;
        case 5: keyMode=4;
      }*/
      keyMode=(keyMode===2)? 3 : (keyMode===3)? 2 : (keyMode===4)? 5 : 4;

      localStorage.setItem('keyMode', keyMode);
      console.log('keyMode',keyMode);
      showKeys();
    }

    document.querySelector('.change-btn').addEventListener('click',toggleLanguage);

    function toggleLanguage(){
   /*   switch (keyMode){
        case '2': keyMode=4; break;
        case '3': keyMode=5; break;
        case '4': keyMode=2; break;
        case '5': keyMode=3;
      }*/
      keyMode=(keyMode===2)? 4 : (keyMode===3)? 5 : (keyMode===4)? 2 : 3;
      localStorage.setItem('keyMode', keyMode);
      showKeys();
    }

    document.body.addEventListener('keydown', e=>{
       console.log('***',e.key,e.code);
       for (i=0; i< apKey.length; i++){
        if (e.code===aKeys[i][7] ){
        //(e.key===aKeys[i][2]  || e.key===aKeys[i][3] || e.key===aKeys[i][4] || e.key===aKeys[i][5] ){
          apKey[i].classList.add('pressed');
          const timerPhPress=setTimeout(endPress,300);
          if (aKeys[i][1]===0) pText.value=pText.value+getChar(i);
        }
        if (e.code==='CapsLock') toggleCapsLock();
       }

    });


}
