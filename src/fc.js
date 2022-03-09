var textSpeed = 1/3;

var dialogos = [
    "oi? tem alguém aí??",
    "PARAKEDAS, TEM UMA PESSOA LENDO",
    "você não tem noção do quanto esperei pelo seu click",
    "ESPERA, NÃO DESLIGA",
    "é a primeira vez que faço esse chat pegar, não zarpa ainda!",
    "ufa, valeu por ficar",
    "qual o seu nome?",
    "meus amigos não vão acreditar que te conheci, %nome%",
    "você pode me dar uma ajuda agora que pode mudar a HISTÓRIA",
    "ótimo, achei quem eu procurava! alguém que faz PERGUNTAS",
    "meu nome é Xikoh",
    "vai parecer papo de maluco o q vou te dizer... mas falo de 2068 ",
    "preciso encontrar algumas infos que só existem aí",
    "mas a conexão aqui no meu tempo tá buracosa",
    "preciso ser flash, me ajuda nessa",
    "você só precisa clicar nesse link e me mostrar o que aparece",
];

function frase(text, time, quemfala) {
    let speaker;
    if (quemfala == "player" ){
        speaker = "chat__message_B"
    } else {
        speaker = "chat__message_A"
    }
    if (!time  || time === 0) {
        time = 0;
    } 
    
    return ("      <div class=\"chat__message " +speaker+"\" style=\"--timeline: " + time*textSpeed + "s;\">\
                        <div class=\"chat__content\">\
                        <p>" + text + "</p>   \
                        </div>\
                    </div>");
}

window.onload = function(){



    const div = document.createElement('div');
    div.className = 'chat__inner';
    $("#chatWin").append(div);


    $(".chat__inner").append(frase(dialogos[0], 21, "NPC"));
    $(".chat__inner").append(frase(dialogos[1], 52, "NPC"));
    $(".chat__inner").append(frase(dialogos[2], 96, "NPC"));
    $(".chat__inner").append(frase(dialogos[3], 115, "NPC"));
    $(".chat__inner").append(frase(dialogos[4], 185, "NPC"));
    $(".chat__inner").append(frase(dialogos[5], 205, "NPC"));
    $(".chat__inner").append(frase(dialogos[6], 215, "NPC"));
    


}


class Controller {



    preload ()
    {
        this.load.image('bg', 'assets/phaser3/Fofocas da Manha.jpg');
        this.load.image('chatWindow', 'assets/phaser3/chatbox.jpg');
        this.load.image('popUp', 'assets/phaser3/notificacao.png');
        this.load.image('map', 'assets/phaser3/mapa brasil.jpg');
        this.load.image('botao', 'assets/phaser3/botao.png');
        this.load.video('title', 'assets/phaser3/title.mp4', 'loadeddata', false, true);

    }

    create ()
    {
        console.log(this.count)
        gameInstance.instance = this;
        
        



        var keyBoardLocked = true; 
        content[0] = raw_content[0]
        content[1] = content[0] + '\n' + raw_content[1]
        content[2] = content[1] + '\n' + raw_content[2]
        content[3] = content[2] + '\n' + raw_content[3]
        content[4] = content[3] + '\n' + raw_content[4]
        content[5] = content[4] + '\n' + raw_content[5]
        content[6] = content[5] + '\n' + raw_content[6]

        this.cameras.main.setBounds(0, 0, 1920, 1080);

        var fundo = this.add.image(this.game.config.width/2 - 1920/2 , 0, 'bg').setOrigin(0).setInteractive();

        botao = this.add.image(this.game.config.width -125, config.height -80, 'botao').setOrigin(0).setInteractive();


        resp1 = this.add.text(this.game.config.width -540, config.height -205, '> que tipo de ajuda?', { font: '32px ModernDOS9x16',wordWrap: { width: 450 }, align: 'right', fill: '#00d100' }).setOrigin(0).setInteractive();;
        resp2 = this.add.text(this.game.config.width -540, config.height -145, '  quem é você?', { font: '32px ModernDOS9x16',wordWrap: { width: 450 }, align: 'right', fill: '#00d100' }).setOrigin(0).setInteractive();;

        textDiag = this.add.text(this.game.config.width -540, config.height -650, "..." ,{ font: '32px ModernDOS9x16',wordWrap: { width: 450 }, align: 'left', fill: '#00d100' });    
        textDiag.lineSpacing=15;

        var textEntry = this.add.text(this.game.config.width -540, config.height -75, '', { font: '32px ModernDOS9x16',wordWrap: { width: 450 }, align: 'right', fill: '#ffffff' });

        var chatWindow = this.add.image(this.game.config.width -550, config.height -750, 'chatWindow').setOrigin(0);

        prompt = this.add.text(this.game.config.width -540, config.height -75, '|', { font: '32px ModernDOS9x16',wordWrap: { width: 450 }, align: 'right', fill: '#ffffff' });

        link  = this.add.text(this.game.config.width -437, config.height -337, 'link', { font: '600 36px ModernDOS9x16', wordWrap: { width: 450 }, align: 'right', fill: '#77ff77' }).setOrigin(0).setInteractive();
        link.visible = false;

        var chatWindowContainer = this.add.container(0, 0, [ chatWindow , textDiag, textEntry, resp1, resp2, prompt, link, botao]);

        var zone = this.add.zone(config.width -315, config.height -390 , 470, 600).setOrigin(0).setInteractive();
        var popUp = this.add.image(config.width/2 -1350/2 , config.height -650, 'popUp').setOrigin(0).setInteractive();
        map = this.add.image(0,0, 'map').setOrigin(0).setInteractive();
        map.visible = false;
        map.scale = 1.8;
        vidTitle = this.add.video(0,0,  'title').setOrigin(0);
        vidTitle.visible = false;
        
        fundo.on('wheel', function (pointer, deltaX, deltaY, deltaZ) {

            

            if (this.y > 0 ) {
                this.y = 0 ;
                return;
            }

            if (this.y < -2267 ) {
                this.y = -2267;
                return;
            }
            this.y += deltaY;

    
        });
        
        gameInstance.instance.time.addEvent({ delay: 500,  callback: function (){ 
            if (!keyBoardLocked){
                if (textEntry.text.length < 1 ){ 
                    if (prompt_state) {
                        prompt_state = false;
                        prompt.visible = false;
                    } else {
                        prompt_state = true;
                        prompt.visible = true;
                    };
                } else {
                    prompt.visible = false;
                }
            }
        }, loop: true});

        resp1.visible = false;
        resp2.visible = false;


        resp1.on('pointermove', function(pointer, x,y, event){
            resp1.text='> que tipo de ajuda?';
            resp2.text='  quem é você?';


        });
        resp2.on('pointermove', function(pointer, x,y, event){
            resp2.text='> quem é você?';
            resp1.text='  que tipo de ajuda?';

        });


        popUp.visible = false;

        chatWindowContainer.visible = false;
        
        this.time.addEvent({ delay: 5000, callback: function (){ 
            popUp.visible = true;
        }});

        /*zone.on('pointermove', function (pointer) {

            if (pointer.isDown)
            {
                this.textDiag.y += (pointer.velocity.y / 10);
    
                this.textDiag.y = Phaser.Math.Clamp(this.textDiag.y, -400, 300);
            }
    
        });*/
        chatWindowContainer.setInteractive(new Phaser.Geom.Rectangle(this.game.config.width -550, config.height -850, chatWindow.width, chatWindow.height), Phaser.Geom.Rectangle.Contains);

        this.input.setDraggable(chatWindowContainer);
        this.input.setDraggable(fundo);

        chatWindowContainer.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;

        });
        
        
        //gameInstance.instance.events.on('resize', function () {console.log(game.resize(100, 100));}) 

     /*   fundo.on('drag', function (pointer, dragX, dragY) {

            if (dragY > 0 ) {
                this.y = 0 ;
                return;
            }

            if (dragY < -2267 ) {
                this.y = -2267;
                return;
            }
            this.y = dragY;

        })*/

        popUp.on('pointerdown', function(){
            popUp.visible = false;
            chatWindowContainer.visible = true;

            gameInstance.instance.time.addEvent({ delay: 21*textSpeed, callback: function (){ 
                textDiag.text = content[0] + '\n' + '...';
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay: 52*textSpeed, callback: function (){ 
                textDiag.text = content[1]  + '\n' + '...';
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay: 96*textSpeed, callback: function (){ 
                textDiag.text = content[2]  + '\n' + '...';
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay: 115*textSpeed, callback: function (){ 
                textDiag.text =content[3]  + '\n' + '...';
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay: 185*textSpeed, callback: function (){ 
                textDiag.text = content[4]  + '\n' + '...';
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay: 205*textSpeed, callback: function (){ 
                textDiag.text = content[5]  + '\n' + '...';
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay: 215*textSpeed, callback: function (){ 
                textDiag.text = content[6];
                keyBoardLocked = false;
                
                //popUp.visible = true;
            }});

            botao.on('pointerdown', function(pointer){

                if(textEntry.text.length > 0 && !keyBoardLocked ){
                    nome = textEntry.text;
                    textEntry.text = ""; 
                    content[7] = raw_content[7] + nome;
                    keyBoardLocked = true;
               
                                            
                    content[7] = raw_content[7] + nome;
                    content[8] = content[7] + '\n\n' + raw_content[8]
                    content[9] = content[8] + '\n' + raw_content[9]


                    gameInstance.instance.time.addEvent({ delay: textSpeed, callback: function (){ 
                        console.log(7, cena)
                        textDiag.text = "             > " + nome + "\n" + content[7] + '\n' + '...';
                    },loop: false});
                    
                    gameInstance.instance.time.addEvent({ delay: 42*textSpeed, callback: function (){ 
                        console.log(8, cena)
                        textDiag.text = "             > " + nome + "\n" +content[8]  + '\n';
                        resp1.visible = true;
                        resp2.visible = true;
                    },loop: false});

                }   
            });


        });
        this.input.keyboard.on('keydown', function (event) {
    
            if (event.keyCode === 8 && textEntry.text.length > 0 && !keyBoardLocked)
            {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90) && !keyBoardLocked)
            {
                textEntry.text += event.key;
            } else if (event.keyCode === 13 && textEntry.text.length > 0 && !keyBoardLocked ) {
                nome = textEntry.text;
                textEntry.text = ""; 
                content[7] = raw_content[7] + nome;
                keyBoardLocked = true;
           
                                    
            content[7] = raw_content[7] + nome;
            content[8] = content[7] + '\n\n' + raw_content[8]
            content[9] = content[8] + '\n' + raw_content[9]


            gameInstance.instance.time.addEvent({ delay: textSpeed, callback: function (){ 
                console.log(7, cena)
                textDiag.text = "             > " + nome + "\n" + content[7] + '\n' + '...';
            },loop: false});
            
            gameInstance.instance.time.addEvent({ delay: 42*textSpeed, callback: function (){ 
                console.log(8, cena)
                textDiag.text = "             > " + nome + "\n" +content[8]  + '\n';
                resp1.visible = true;
                resp2.visible = true;
            },loop: false});

            }
    
        });


        resp1.on('pointerdown', function(){
            console.log('que tipo de ajuda?')
            
            resp1.visible = false;
            resp2.visible = false;

            // pergunta sobre ajuda
            content[9] = raw_content[9]
            content[10] = content[9] + '\n' + raw_content[10]
            content[11] = content[10] + '\n' + raw_content[11]
            content[12] = content[11] + '\n' + raw_content[12]
            content[13] = raw_content[13]
            content[14] = content[13] + '\n\n' + raw_content[14]
            content[15] = content[14] + '\n\n' + raw_content[15]

           // gameInstance.instance.time.addEvent({ delay: 6*textSpeed, callback: function (){ 

          //      textDiag.text = content[10]  + '\n' + '...';
           // }});

            gameInstance.instance.time.addEvent({ delay: 6*textSpeed, callback: function (){ 
                console.log(9);
                 textDiag.text =content[9]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 58*textSpeed, callback: function (){ 
                console.log(10);
                 textDiag.text =content[10]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 110*textSpeed, callback: function (){ 
                 console.log(11);
                 textDiag.text = content[11]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 130*textSpeed, callback: function (){ 
                 console.log(12);
                 textDiag.text = content[12]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 160*textSpeed, callback: function (){ 
                 console.log(13);
                 textDiag.text = content[13]  + '\n' + '...';
                 cena = 3;
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 200*textSpeed, callback: function (){ 
                console.log(14);
                textDiag.text = content[14]  + '\n' + '...' ;
                cena = 3;
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay:  280*textSpeed, callback: function (){ 
                console.log(15);
                textDiag.text = content[15];
                cena = 3;
                //popUp.visible = true;
                link.visible = true;
            }});
        });
        resp2.on('pointerdown', function(){
            console.log('quem é você?')
            
            resp1.visible = false;
            resp2.visible = false;


            // pergunta sobre ajuda
            content[9] = raw_content[9]
            content[10] = content[9] + '\n' + raw_content[10]
            content[11] = content[10] + '\n' + raw_content[11]
            content[12] = content[11] + '\n' + raw_content[12]
            content[13] = raw_content[13]
            content[14] = content[13] + '\n\n' + raw_content[14]
            content[15] = content[14] + '\n\n' + raw_content[15]

           // gameInstance.instance.time.addEvent({ delay: 6*textSpeed, callback: function (){ 

          //      textDiag.text = content[10]  + '\n' + '...';
           // }});

            gameInstance.instance.time.addEvent({ delay: 6*textSpeed, callback: function (){ 
                console.log(9);
                 textDiag.text =content[9]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 58*textSpeed, callback: function (){ 
                console.log(10);
                 textDiag.text =content[10]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 110*textSpeed, callback: function (){ 
                 console.log(11);
                 textDiag.text = content[11]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 130*textSpeed, callback: function (){ 
                 console.log(12);
                 textDiag.text = content[12]  + '\n' + '...';
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 160*textSpeed, callback: function (){ 
                 console.log(13);
                 textDiag.text = content[13]  + '\n' + '...';
                 cena = 3;
                 //popUp.visible = true;
             }});
             gameInstance.instance.time.addEvent({ delay: 200*textSpeed, callback: function (){ 
                console.log(14);
                textDiag.text = content[14]  + '\n' + '...' ;
                cena = 3;
                //popUp.visible = true;
            }});
            gameInstance.instance.time.addEvent({ delay:  280*textSpeed, callback: function (){ 
                console.log(15);
                textDiag.text = content[15];
                cena = 3;
                //popUp.visible = true;
                link.visible = true;
            }});
        });
        link.on('pointerdown', function(){
            chatWindowContainer.visible = false;
            map.visible = true;
            //gameInstance.instance.cameras.main.pan(900, 800, 2000, 'Sine.easeInOut');
            gameInstance.instance.time.addEvent({ delay: 0, callback: function (){ 
                gameInstance.instance.cameras.main.zoomTo(0.5, 3000);
                 
                    gameInstance.instance.cameras.main.fadeOut(3000,0)
                    gameInstance.instance.time.addEvent({ delay: 4000, callback: function (){ 
                        gameInstance.instance.cameras.main.zoom = 1
                        gameInstance.instance.time.addEvent({ delay: 0, callback: function (){ 
                            gameInstance.instance.cameras.main.fadeIn(0,777)
                            vidTitle.visible = true;
                            vidTitle.play(true);
                        }});
                    }});
            }});
            
        });


    }
    update(func){
        
        (function() {
           
            const gameId = document.getElementById("game"); // Target div that wraps the phaser game
            gameId.style.width = '100%'; // set width to 100%
            gameId.style.height = '100%'; // set height to 100%
        })(); // run function
        if ( cena === 2 ){






        }
        if ( cena === 3 ){

        }
        
    }
    createWindow (func)
    {
        var x = Phaser.Math.Between(400, 600);
        var y = Phaser.Math.Between(64, 128);

        var handle = 'window' + this.count++;

        var win = this.add.zone(x, y, func.WIDTH, func.HEIGHT).setInteractive().setOrigin(0);

        var demo = new func(handle, win);

        this.input.setDraggable(win);

        win.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;

            demo.refresh()

        });

        this.scene.add(handle, demo, true);
    }

    resize (width, height)
    {
        if (width === undefined) { width = this.game.config.width; }
        if (height === undefined) { height = this.game.config.height; }

        this.cameras.resize(width, height);
    }

}
        
var config = {
    //type: Phaser.WEBGL,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#0055aa',
    parent: 'phaser-example',
    scene: Controller,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    plugins: {
        global: [{
          key: 'GameScalePlugin',
         // plugin: Phaser.Plugins.GameScalePlugin,
          mapping: 'gameScale',
          data: {
            minWidth: 400,
            minHeight: 300,
            maxWidth: 1600,
            maxHeight: 1200,
            snap: 0
          }
        }]
      }
};

//var game = new Phaser.Game(config);

window.addEventListener('resize', function (event) {
   
    //game.resize(window.innerWidth, window.innerHeight);

}, true);