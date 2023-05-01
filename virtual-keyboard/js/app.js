document.write('<h1 class="title">RSS Virtual Keyboard</h1>');
document.write('<textarea class="text"></textarea>');
document.write('<div class="keyboard"><div class="board">');
document.write('<div class="board__row"></div><div class="board__row"></div><div class="board__row"></div><div class="board__row"></div><div class="board__row"></div>');
document.write('</div></div>');
document.write('<h2>OS: Windows</h2>');
document.write('<h2>Change language:<button class="change-btn">Ctrl+Shift</button></h2>');


window.onload = function() {

    const pBoard = document.querySelector('.board');
    const pText = document.querySelector('.text');

    const keyMode=2;

    const aKeys=[

        [0,0,'`','~','ё','Ё',1],
        [0,0,'1','!','1','!',1],
        [0,0,'2','@','2','"',1],
        [0,0,'3','#','3','№',1],
        [0,0,'4','$','4',';',1],
        [0,0,'5','%','5','%',1],
        [0,0,'6','^','6',':',1],
        [0,0,'7','&','7','?',1],
        [0,0,'8','*','8','*',1],
        [0,0,'9','(','9','(',1],
        [0,0,'0',')','0',')',1],
        [0,0,'-','_','-','_',1],
        [0,0,'=','+','=','+',1],
        [0,1,'Backspace','','','',2],

        [1,1,'Tab','','','',1],
        [1,0,'q','Q','й','Й',1],
        [1,0,'w','W','ц','Ц',1],
        [1,0,'e','E','у','У',1],
        [1,0,'r','R','к','К',1],
        [1,0,'t','T','е','Е',1],
        [1,0,'y','Y','н','Н',1],
        [1,0,'u','U','г','Г',1],
        [1,0,'i','I','ш','Ш',1],
        [1,0,'o','O','щ','Щ',1],
        [1,0,'p','P','з','З',1],
        [1,0,'[','{','х','Х',1],
        [1,0,']','}','ъ','Ъ',1],
        [1,0,'\\','|','\\','/',1],
        [1,1,'Del','','','',1],

        [2,1,'CapsLock','','','',2],
        [2,0,'a','A','ф','Ф',1],
        [2,0,'s','S','ы','Ы',1],
        [2,0,'d','D','в','В',1],
        [2,0,'f','F','а','А',1],
        [2,0,'g','G','п','П',1],
        [2,0,'h','H','р','Р',1],
        [2,0,'j','J','о','О',1],
        [2,0,'k','K','л','Л',1],
        [2,0,'l','L','д','Д',1],
        [2,0,';',':','ж','Ж',1],
        [2,0,'\'','"','э','Э',1],
        [2,1,'Enter','','','',2],


        [3,1,'Shift','','','',2],
        [3,0,'z','Z','я','Я',1],
        [3,0,'x','X','ч','Ч',1],
        [3,0,'c','C','с','С',1],
        [3,0,'v','V','м','М',1],
        [3,0,'b','B','и','М',1],
        [3,0,'n','N','т','Т',1],
        [3,0,'m','M','ь','Ь',1],
        [3,0,',','<','б','Б',1],
        [3,0,'.','>','ю','Ю',1],
        [3,0,'/','?','.',',',1],
        [3,1,'↑','','','',1],
        [3,1,'Shift','','','',2],


        [4,1,'Ctrl','','','',1],
        [4,1,'Win','','','',1],
        [4,1,'Alt','','','',1],
        [4,1,'','','','',3],
        [4,1,'Alt','','','',1],
        [4,1,'←','','','',1],
        [4,1,'↓','','','',1],
        [4,1,'→','','','',1],
        [4,1,'Ctrl','','','',1],


    ];

    let pKey=0;

    for (let i in aKeys)
    {
      pKey=document.createElement("div");
      pKey.textContent=aKeys[i][2];
      pKey.classList.add("key");
      if (aKeys[i][1]===1) pKey.classList.add("key-control");
      if (aKeys[i][6]===2) pKey.style.width='95px'
      else if (aKeys[i][6]===3)  pKey.style.width='350px';
      pKey.addEventListener('click',function(e) {
        this.classList.add("pressed");
        const timerPress=setTimeout(endPress,300);
        pText.value=pText.value+getChar(i);
        });
      pBoard.childNodes[aKeys[i][0]].appendChild(pKey);
    }


    let apKey=document.querySelectorAll('.key');

    //console.log(apKey);
    function endPress () {
        for ( i=0; i< apKey.length; i++){
            if (apKey[i].classList.contains('pressed')){
            apKey[i].classList.remove('pressed');
          }
        }
    }

    function getChar(iKey){
      return aKeys[iKey][3];
    }

    function showKeys(){

      for (i=0; i< apKey.length; i++){
        apKey[i].textContent=aKeys[i][keyMode];
       }

    }

    document.body.addEventListener('keydown', e=>{
       for (i=0; i< apKey.length; i++){
       // console.log('***',e,e.key);
        if (e.key===aKeys[i][2]  || e.key===aKeys[i][3] || e.key===aKeys[i][4] || e.key===aKeys[i][5] ){
          apKey[i].classList.add('pressed');
          const timerPhPress=setTimeout(endPress,300);
        }
       }

    });


}
