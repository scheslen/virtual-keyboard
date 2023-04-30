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

    const aKeys=[

        [0,0,'`','~','Ё','ё'],
        [0,0,'1','q','Й','й'],
        [0,0,'2','w','',''],
        [0,0,'3','e','',''],
        [0,0,'4','r','',''],
        [0,0,'5','t','',''],
        [0,0,'6','y','',''],
        [0,0,'7','u','',''],
        [0,0,'8','i','',''],
        [0,0,'9','o','',''],
        [0,0,'0','p','',''],
        [0,0,'-','p','',''],
        [0,0,'=','p','',''],
        [0,1,'Backspace','p','',''],

        [1,1,'Tab','Tab','Tab','Tab'],
        [1,0,'q','q','Й','й'],
        [1,0,'w','w','',''],
        [1,0,'e','e','',''],
        [1,0,'r','r','',''],
        [1,0,'t','t','',''],
        [1,0,'y','y','',''],
        [1,0,'u','u','',''],
        [1,0,'i','i','',''],
        [1,0,'o','o','',''],
        [1,0,'p','p','',''],
        [1,0,'[','i','',''],
        [1,0,']','o','',''],
        [1,0,'\\','p','',''],
        [1,1,'Del','p','',''],

        [2,1,'CapsLock','','',''],
        [2,0,'a','','',''],
        [2,0,'s','','',''],
        [2,0,'d','','',''],
        [2,0,'f','','',''],
        [2,0,'g','','',''],
        [2,0,'h','','',''],
        [2,0,'j','','',''],
        [2,0,'k','','',''],
        [2,0,'l','','',''],
        [2,0,';','','',''],
        [2,0,'\'','','',''],
        [2,1,'Enter','','',''],


        [3,1,'Shift','','',''],
        [3,0,'z','','',''],
        [3,0,'x','','',''],
        [3,0,'c','','',''],
        [3,0,'v','','',''],
        [3,0,'b','','',''],
        [3,0,'n','','',''],
        [3,0,'m','','',''],
        [3,0,',','','',''],
        [3,0,'.','','',''],
        [3,0,'/','','',''],
        [3,0,'','','',''],
        [3,1,'Shift','','',''],


        [4,1,'Ctrl','','',''],
        [4,1,'Win','','',''],
        [4,1,'Alt','','',''],
        [4,1,'','','',''],
        [4,1,'Alt','','',''],
        [4,0,'','','',''],
        [4,0,'','','',''],
        [4,0,'','','',''],
        [4,1,'Ctrl','','',''],


    ];


    let pKey=0;

    for (let i in aKeys)
    {
      pKey=document.createElement("div");
      pKey.textContent=aKeys[i][2];
      pKey.classList.add("key");
      if (aKeys[i][1]===1)
          pKey.classList.add("key-control");
      pKey.addEventListener('click',function(e) {  });

      pBoard.childNodes[aKeys[i][0]].appendChild(pKey);
    }











}
