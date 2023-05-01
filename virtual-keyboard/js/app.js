document.write('<h1 class="title">RSS Virtual Keyboard</h1>');
document.write('<textarea class="text"></textarea>');
document.write('<div class="keyboard"><div class="board">');
document.write('<div class="board__row"></div><div class="board__row"></div><div class="board__row"></div><div class="board__row"></div><div class="board__row"></div>');
document.write('</div></div>');
document.write('<h2>OS: Windows</h2>');
document.write('<h2>Change language: Ctrl+Shift</h2>');


window.onload = function() {

    const pBoard = document.querySelector('.board');
    const pText = document.querySelector('.text');

    const keyMode=2;

    const aKeys=[

        [0,0,'`','~','Ё','ё',1],
        [0,0,'1','q','Й','й',1],
        [0,0,'2','w','','',1],
        [0,0,'3','e','','',1],
        [0,0,'4','r','','',1],
        [0,0,'5','t','','',1],
        [0,0,'6','y','','',1],
        [0,0,'7','u','','',1],
        [0,0,'8','i','','',1],
        [0,0,'9','o','','',1],
        [0,0,'0','p','','',1],
        [0,0,'-','p','','',1],
        [0,0,'=','p','','',1],
        [0,1,'Backspace','','','',2],

        [1,1,'Tab','','','',1],
        [1,0,'q','q','Й','й',1],
        [1,0,'w','w','','',1],
        [1,0,'e','e','','',1],
        [1,0,'r','r','','',1],
        [1,0,'t','t','','',1],
        [1,0,'y','y','','',1],
        [1,0,'u','u','','',1],
        [1,0,'i','i','','',1],
        [1,0,'o','o','','',1],
        [1,0,'p','p','','',1],
        [1,0,'[','i','','',1],
        [1,0,']','o','','',1],
        [1,0,'\\','p','','',1],
        [1,1,'Del','p','','',1],

        [2,1,'CapsLock','','','',2],
        [2,0,'a','','','',1],
        [2,0,'s','','','',1],
        [2,0,'d','','','',1],
        [2,0,'f','','','',1],
        [2,0,'g','','','',1],
        [2,0,'h','','','',1],
        [2,0,'j','','','',1],
        [2,0,'k','','','',1],
        [2,0,'l','','','',1],
        [2,0,';','','','',1],
        [2,0,'\'','','','',1],
        [2,1,'Enter','','','',2],


        [3,1,'Shift','','','',2],
        [3,0,'z','','','',1],
        [3,0,'x','','','',1],
        [3,0,'c','','','',1],
        [3,0,'v','','','',1],
        [3,0,'b','','','',1],
        [3,0,'n','','','',1],
        [3,0,'m','','','',1],
        [3,0,',','','','',1],
        [3,0,'.','','','',1],
        [3,0,'/','','','',1],
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
