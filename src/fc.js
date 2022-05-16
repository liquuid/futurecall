var textSpeed = 1/10;
var nome;

var dialogos = [
    "oi? tem alguém aí??",
    "PARAKEDAS, TEM UMA PESSOA LENDO",
    "você não tem noção do quanto esperei pelo seu click",
    "ESPERA, NÃO DESLIGA",
    "é a primeira vez que faço esse chat pegar, não zarpa ainda!",
    "ufa, valeu por ficar",
    "qual o seu nome?",
    "meus amigos não vão acreditar que te conheci, ",
    "você pode me dar uma ajuda agora que pode mudar a HISTÓRIA",
    "ótimo, achei quem eu procurava! alguém que faz PERGUNTAS",
    "meu nome é Xikoh",
    "vai parecer papo de maluco o q vou te dizer... mas falo de 2068 ",
    "preciso encontrar algumas infos que só existem aí",
    "mas a conexão aqui no meu tempo tá buracosa",
    "preciso ser flash, me ajuda nessa",
    "você só precisa clicar nesse link e me mostrar o que aparece",
    "isso!",
    "pode clicar, vai ampliando",
    "que doido, era tudo muito diferente nessa época... ainda existiam rios públicos",
    "continua, devemos estar perto",
    "AÍ, ACHOU!",
    "um telecentro",
    "era daí que estavam tentando mudar as coisas",
    "consegue me mostrar a frente desse lugar?",
    "valeu grandão, ",
    "é o que eu procurava",
    "se é que voltei ao tempo certo...",
    "de que ano você fala?",
    "você pode provar?",
    "ok… vou ter que confiar em você",
    "tá vendo?",
    "essa é mais ou menos a minha vista",
    "também tô no Brasil",
    "mas falo de 2068",
    "o bagulho aqui tá louco",
    "** PÁGINA DELETADA **",
    "está acontecendo mais rápido",
    "estão apagando",
    "a internet!",
    "ah não",
    "voltamos pro sistema",
    "mais cuidado com o que você clica",
    "tudo bem",
    "por isso tô tentando chegar no telecentro",
    "aquele lugar que você viu no mapa",
    "só que aqui no meu tempo",
    "já sei como te tirar daí",
    "voltar para a internet do seu tempo",
    "aí te explano tudo... aqui não é seguro",
    "repete a sequência de comandos que eu te falar, beleza?",
    "aperta SELF três vezes",
    "uma vez em COSMO",
    "duas vezes em SELF de novo",
    "clica e segura o ELOS por 5 segundos",
    "oi...",
];

var dialogos_alternativos = [ 
    "aí não, clicou longe! ",
    "ops, lugar errado...",
    "mira onde marquei, foi trampo achar o lugar",
    "não temos tempo de passear aí, clica no marcad",
];

var dialogos_zapeden = [
    ">> atualizar para o novo Zap Éden 2 <<",
    ">> você não vai se arrepender <<",
    ">> sim, você! <<",
    ">> clique aqui e atualize <<"
]

var dialogos_magraluz = [
"Bem-vindo ao novo Zap Éden! ",
"Sou a Magra Luz e estou aqui para garantir sua melhor experiência digital.",
"Vem comigo, vamos fazer um passeio pelas novidades!",
"O Zap Éden foi projetado para se adequar a você.",
"Sua vida digital começa nesses quatro campos:",
"SELF: Aqui, está tudo sobre você. Suas fotos. Suas memórias. Seus sentimentos.",
"Aqui você pode compartilhar comigo tudo o que está acontecendo na sua vida!",
"Agora o Zap Éden conta com uma nova funcionalidade: a Escala Vital.",
"Com ela, o app mede como você está se sentindo a cada momento.",
"Isso faz com que o conteúdo do Zap Éden se molde ao seu humor.",
"Vamos ver qual é seu atual estado mental?",
">> CURIOSIDADE E CONFUSÃO <<",
"Perfeito! Significa que você quer saber mais sobre o Zap Éden!",
"Em ELOS é onde todas as conversas acontecem!",
"Aqui, você pode receber mensagens e conversar com seus contatos.",
"É só falar comigo que direciono a sua mensagem.",
"Assinando o plano Ômega, você ainda recebe um alerta quando alguém estiver sendo falso com você.",
"SOMA é meu lugar favorito.",
"Aqui você pode comprar tudo o que imaginar sem precisar sair do Zap Éden.",
"É só me pedir!",
"Encontrei uma luminária anti-envelhecimento que ficaria perfeita na sua casa.",
"Deseja comprar agora?",
"Perfeito! O item foi enviado para seu endereço.",
"Ah, todos os seus dados já estão aqui comigo. Você pode atualizá-los no seu Cadastro de Pessoa Digital, certificado pelo Governo Ruque.",
"Sua segurança é muito importante para nós <3",
"Olha, a cor da sua Escala Vital até melhorou!",
">> SURPRESA E GRATIDÃO <<",
"COSMO: Aqui você também tem acesso aos melhores conteúdos!",
"Tudo selecionado especialmente para você.",
"Impossível sentir tédio com o seu Zap Éden à mão.",
"Hoje recomendo os seguintes conteúdos:",
">> IRRITAÇÃO DETECTADA <<",
"Opa, parece que isso pode afetar seus nervos... Melhor ler depois.",

"Em vez disso, aproveite para entrar para o Clube Magra Luz!",
"Não se preocupe: acabei de te adicionar a este clube de vantagens.",
"Você ganhou 1000 MagraCoins para gastar em compras dentro do app!",
"Não é uma beleza? Aproveite!",
"Se precisar de ajuda ou tiver qualquer dúvida, só chamar.",
"Estarei sempre por perto* 😉",
"Zap Éden é um ambiente 100% seguro.",
"Não indico voltar a versões anteriores da internet.",
"Além disso...",
"Foi detectado que 01 de seus contatos pode ser um robô ou uma conta maliciosa.",
"Deseja deletar contato agora?",

]
function frase(text, time, quemfala) {
    let speaker;
    if (quemfala === "player" ){
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

function fraseM(text, time, quemfala) {
  
  let speaker;
  if (quemfala === "player" ){
      speaker = "chat__message_B"
  } else {
      speaker = "chat__message_A"
  }
  if (!time  || time === 0) {
      time = 0;
  } 
  
  return ("      <div class=\"chat__message " +speaker+"\" style=\"--timeline: " + time*textSpeed + "s;\">\
                      <div class=\"chatMaga__content\">\
                      <p>" + text + "</p>   \
                      </div>\
                  </div>");
}

window.onload = function game(){
    magraluz = new Magraluz(); 
    //zapeden = new ZapEden();

    setTimeout( function () { $('.banner').show() }  , 1000);
    

    $('.banner').click( function () {
      $(".banner").hide();
      $( "#chat" ).show();
    });
    
    $('#inputText').prop( "disabled", true );
    $('#enviar').prop( "disabled", true );


    
    const div = document.createElement('div');
    const divM = document.createElement('div');

    div.className = 'chat__inner';
    divM.className = 'chatM__inner';

    $("#chatWin").append(div);
    $("#chatWinMaga").append(divM);

    //tela3_2_reset()

    $(".chat__inner").append(frase(dialogos[0], 1, "NPC"));
    $(".chat__inner").append(frase(dialogos[1], 20, "NPC"));
    $(".chat__inner").append(frase(dialogos[2], 40, "NPC"));
    $(".chat__inner").append(frase(dialogos[3], 60, "NPC"));
    $(".chat__inner").append(frase(dialogos[4], 85, "NPC"));
    $(".chat__inner").append(frase(dialogos[5], 105, "NPC"));
    $(".chat__inner").append(frase(dialogos[6], 115, "NPC"));
    
    $('#inputText').prop( "disabled", false );
    $('#enviar').prop( "disabled", false );


    $('#enviar').click(function () { 
        console.log($('#inputText').val());
        $('#inputText').prop( "disabled", true );
        $('#enviar').prop( "disabled", true );
        nome = $('#inputText').val();
        $('#inputText').val("");
        $(".chat__inner").append(frase(nome, 1, "player"));
        dialogos[7] = dialogos[7] + nome;
        $(".chat__inner").append(frase(dialogos[7], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[8], 35, "NPC"));


        $(".chat__inner").append(frase("<div id=\"RQuem\">Quem é você?</div> <br><div id=\"RQuet\">Que tipo de ajuda?</div>", 45, "player"));
        
        var origQuem = $( "#RQuem" ).html();
        $( "#RQuem" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        var origQuet = $( "#RQuet" ).html();
        $( "#RQuet" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );


        $( "#RQuem" ).click(function () { resto() });
        $( "#RQuet" ).click(function () { resto() });

        function resto () {
            $(".chat__inner").append(frase(dialogos[9], 5, "NPC"));
            $(".chat__inner").append(frase(dialogos[10], 25, "NPC"));
            $(".chat__inner").append(frase(dialogos[11], 45, "NPC"));
            $(".chat__inner").append(frase(dialogos[12], 55, "NPC"));
            $(".chat__inner").append(frase(dialogos[13], 85, "NPC"));
            $(".chat__inner").append(frase(dialogos[14], 105, "NPC"));
            $(".chat__inner").append(frase(dialogos[15], 125, "NPC"));
            $(".chat__inner").append(frase("<div id=\"PinBut\">[ Link ]</div>", 145, "NPC"));
            $( "#PinBut" ).click(function () { 
              $("body").css("overflow", "hidden");
              $("#map1").show();
              if ( window.screen.height <= 768 ) {
                $("#pin").css("left", "810px");
                $("#pin").css("top", "210px");
              } else {
                $("#pin").css("left", "1165px");
                $("#pin").css("top", "610px");
              }

              $("#pin").show();
              $("#pin").effect( "pulsate", {times:1}, 1000 );


              tela2() });
           
        }
    } );



    function tela2(){

            $(".chat__inner").append(frase(dialogos[16], 5, "NPC"));
            $(".chat__inner").append(frase(dialogos[17], 25, "NPC"));
            $("#pin").click(function () { 
              $("#map1").hide();
              $("#map2").show();
              if ( window.screen.height <= 768 ) {
                $("#pin").css("top", "210px");
              } else {
                $("#pin").css("top", "610px");
              }
              tela2_1(); 
            });

    };

    function tela2_1(){
      console.log("tela2_1"); 
      $(".chat__inner").append(frase(dialogos[18], 5, "NPC"));
      $(".chat__inner").append(frase(dialogos[19], 25, "NPC"));
      $( "#pin" ).unbind("click");
      $( "#pin" ).click(function () { 
       
        $("#map2").hide();
        $("#vila").show();
        $("#pin").hide();
        $("#arrow").show();
        
       // $("#arrow").css("top", "410px");
       // $("#arrow").css("left", "1565px");
        $("#arrow").effect( "pulsate",  {times:11111111111}, 1000 );
        tela2_2() 
      });

    };

    function tela2_2(){
      console.log("tela2_2"); 
      $(".chat__inner").append(frase(dialogos[20], 5, "NPC"));
      $(".chat__inner").append(frase(dialogos[21], 25, "NPC"));
      $(".chat__inner").append(frase(dialogos[22], 45, "NPC"));
      $(".chat__inner").append(frase(dialogos[23], 65, "NPC"));
      $(".chat__inner").append(frase("<div id=\"ImagemCli\">[ IMAGEM ]</div>", 85, "NPC"));
      $( "#pin" ).unbind("click");
      $( "#arrow" ).click(function () { 
        $("#arrow").hide();
        $("#vila").hide();
        $("#telecentro").show();
        console.log("tela3"); tela3();
      });

    };

    function tela3(){
        $( "#pin" ).unbind("click");
        $(".chat__inner").append(frase("* Print *", 5, "NPC"));
        $(".chat__inner").append(frase("👍👍👍", 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[24]+ nome, 45, "NPC"));
        $(".chat__inner").append(frase(dialogos[25], 55, "NPC"));
        $(".chat__inner").append(frase(dialogos[26], 85, "NPC"));
        $(".chat__inner").append(frase(dialogos[27], 105, "NPC"));
        $(".chat__inner").append(frase("<div id=\"R2022\">2022</div> <br><div id=\"R2023\">2023</div><br><div id=\"R2024\">2024</div><br>", 115, "player"));
        
        var orig2022 = $( "#R2022" ).html();
        $( "#R2022" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        var orig2023 = $( "#R2023" ).html();
        $( "#R2023" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        var orig2024 = $( "#R2024" ).html();
        $( "#R2024" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        $( "#R2022" ).click(function () { tela3_1() });
        $( "#R2023" ).click(function () { tela3_1() });
        $( "#R2024" ).click(function () { tela3_1() });


};
    function tela3_1(){
        $(".chat__inner").append(frase(dialogos[28], 5, "NPC"));
        $(".chat__inner").append(frase("<div id=\"RMeme\"><img src=\"assets/phaser3/meme.jpeg\"/></div> <br><div id=\"RNaoP\">Não posso</div>", 10, "player"));

        var origNaoP = $( "#RNaoP" ).html();
        $( "#RNaoP" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        $( "#RMeme" ).click(function () { tela3_2() });
        $( "#RNaoP" ).click(function () { tela3_2() });

    }

    function tela3_2(){
        $(".chat__inner").append(frase(dialogos[29], 5, "NPC"));

        //setTimeout(function() { 
        $("#telecentro").hide();
        $(".img1").css("background-image", "url()");
        $("#shared1").show();
        $(".chat__inner").append(frase(dialogos[30], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[31], 85, "NPC"));
        $(".chat__inner").append(frase(dialogos[32], 105, "NPC"));

        $("#shared1").click(function () { 
          
          
          $("#shared1").hide();
          $("#shared2").show();
          $(".chat__inner").append(frase(dialogos[33], 125, "NPC"));
          $(".chat__inner").append(frase(dialogos[34], 175, "NPC"));
          //$(".chat__inner").append(frase(dialogos[35], 185, "NPC"));
  

          $("#shared2").click(function () { 
            $("#chat").hide();
            $("#shared2").hide();
            $("#blank").show();
            $(".chat__inner").html("")
            $("#chat").show();

            setTimeout(()=> { 
              tela3_2_reset();
    
            }, 10000 * textSpeed);
            
          });

        });

    }
    function tela3_2_reset(){    
        $(".chat__inner").append(frase(dialogos[36], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[37], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[38], 45, "NPC"));
        setTimeout(()=> { 
          $('#chat').fadeOut(5000);

        }, 100000 * textSpeed);
        setTimeout(()=> { 
          $('#blank').hide();
          $("#map1").hide();
        }, 130000 * textSpeed);
        setTimeout(()=> { 
          $("#balao").css("top", "510px");
          $("#balao").fadeIn();
        }, 150000 * textSpeed);
        setTimeout(()=> { 
          $("#not01").css("top", "660px");
          $("#not01").css("left", "100px");
          $("#not01").show();
        }, 170000 * textSpeed);
        setTimeout(()=> { 
          $("#not01").hide();
          $("#not02").css("top", "660px");
          $("#not02").css("left", "100px");
          $("#not02").show();
        }, 190000 * textSpeed);
        setTimeout(()=> { 
          $("#not02").hide();
          $("#not03").css("top", "650px");
          $("#not03").css("left", "100px");
          $("#not03").show();
        }, 210000 * textSpeed);
        setTimeout(()=> { 
          $("#not03").hide();
          $("#not04").css("top", "650px");
          $("#not04").css("left", "100px");
          $("#not04").show();
          $("#not04").click(() => {
            $(".img1").css("background-image", "url()");
            $(".wrapper").show();
            $(".bg-image").css("height", "0");
            $("#not04").hide();
            $("#balao").fadeOut(2000);
            setTimeout(()=> { 
              $("#not05").css("top", "0px");
              $("#not05").css("left", "700px");
              $("#not05").fadeIn();
              $("#not05").animate({"top": "600px"});
              
            }, 25000 * textSpeed);
            setTimeout(()=> { 
              $("#not05").fadeOut();
              $("#not06").css("top", "0px");
              $("#not06").css("left", "700px");
              $("#not06").fadeIn();
              $("#not06").animate({"top": "600px"});

              $("#chat").show();
              $(".chat__inner").html("")
              $(".chat__inner").append(frase(dialogos[39], 65, "NPC"));
              $(".chat__inner").append(frase(dialogos[40], 85, "NPC"));
              $(".chat__inner").append(frase(dialogos[41], 105, "NPC"));
      
              $(".chat__inner").append(frase("<div id=\"RFoiM\">😅 foi mal</div> <br><div id=\"RComoE\">😤 como eu ia saber??</div>", 125, "player"));
              
              var origMeme = $( "#RFoiM" ).html();
              $( "#RFoiM" ).hover(
                  
                  function() {
                    $( this ).animate({zoom: '105%'}, "fast");
                  }, function() {
                    $( this ).animate({zoom: '100%'}, "fast");
                  }
              );

              var origComoE = $( "#RComoE" ).html();
              $( "#RComoE" ).hover(
                  
                  function() {
                    $( this ).animate({zoom: '105%'}, "fast");
                  }, function() {
                    $( this ).animate({zoom: '100%'}, "fast");
                  }
              );

              $( "#RFoiM" ).click(function () { tela3_3() });
              $( "#RComoE" ).click(function () { tela3_3() });
          


          }, 125000 * textSpeed);

          });
        }, 230000 * textSpeed);




}


    function tela3_3(){
        //$(".chat__inner").append(frase(dialogos[41], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[42], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[43], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[44], 45, "NPC"));
        $(".chat__inner").append(frase(dialogos[45], 65, "NPC"));
 
        $(".chat__inner").append(frase("<div id=\"RComoPosso\">como posso te ajudar?</div> <br><div id=\"RMeExpli\">me explica logo o que tá acontecendo!</div>", 85, "player"));

        var origComoPosso = $( "#RComoPosso" ).html();
        $( "#RComoPosso" ).hover(
            
            function() {
              $( this ).animate({zoom: '105%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        var origMeExpli = $( "#RMeExpli" ).html();
        $( "#RMeExpli" ).hover(
            
            function() {
              $( this ).animate({zoom: '102%'}, "fast");
            }, function() {
              $( this ).animate({zoom: '100%'}, "fast");
            }
        );

        $( "#RComoPosso" ).click(function () { magraLuztela() });
        $( "#RMeExpli" ).click(function () { magraLuztela() });
        
    }
    function magraLuztela() {
      console.log('śsssssssssssss')
      $("#chat").hide();
      $("#not06").hide();
      $("#chatMaga").show()
      magraluz.feliz();
      $(".chatM__inner").append(fraseM(dialogos_magraluz[1], 20, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[2], 40, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[3], 60, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[4], 80, "NPC"));
      setTimeout(()=> { 
        $("#self").show();
        //zapeden.self();
        magraluz.feliz();
      }, 100000 * textSpeed);
      $(".chatM__inner").append(fraseM(dialogos_magraluz[5], 120, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[6], 140, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[7], 160, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[8], 180, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[9], 200, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[10], 220, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[11], 240, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[12], 260, "NPC"));
      setTimeout(()=> { 
        $("#self").hide();
        magraluz.pensativa();
        //zapeden.elos();
        $("#elos").show();
      }, 270000 * textSpeed);
      $(".chatM__inner").append(fraseM(dialogos_magraluz[13], 280, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[14], 300, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[15], 320, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[16], 340, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[17], 360, "NPC"));

      setTimeout(()=> { 
        $("#elos").hide();
        magraluz.sorriso();
        //zapeden.soma();
        $("#soma").show();
      }, 370000 * textSpeed);
      $(".chatM__inner").append(fraseM(dialogos_magraluz[18], 380, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[19], 400, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[20], 420, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[21]+ "<br><div id=\"RSimM\">Sim </div> <div id=\"RNaoE\"> Não</div>", 440, "NPC"));

      //$(".chatM__inner").append(fraseM("<div id=\"RSimM\">Sim</div> <br><div id=\"RNaoE\">Não</div>", 440, "player"));
              
      var origMeme = $( "#RSimM" ).html();
      $( "#RSimM" ).hover(
          
          function() {
            $( this ).animate({zoom: '110%'}, "fast");
          }, function() {
            $( this ).animate({zoom: '100%'}, "fast");
          }
      );

      var origComoE = $( "#RNaoE" ).html();
      $( "#RNaoE" ).hover(
          
          function() {
            $( this ).animate({zoom: '110%'}, "fast");
          }, function() {
            $( this ).animate({zoom: '100%'}, "fast");
          }
      );

      $( "#RSimM" ).click(function () { magraLuztela_cont() });
      $( "#RNaoE" ).click(function () { magraLuztela_cont() });

    }
    function magraLuztela_cont() {
      $(".chatM__inner").append(fraseM(dialogos_magraluz[22], 0, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[23], 20, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[24], 40, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[25], 60, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[26], 80, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[27], 100, "NPC"));
      setTimeout(()=> { 
        $("#soma").hide();
        //magraluz.glitch02();
        zapeden.cosmo();
        $("#cosmo").show();
      }, 120000 * textSpeed);
      $(".chatM__inner").append(fraseM(dialogos_magraluz[28], 140, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[29], 160, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[30], 180, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[31], 200, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[32], 220, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[33], 240, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[34], 260, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[35], 280, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[36], 300, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[37], 320, "NPC"));
      $(".chatM__inner").append(fraseM(dialogos_magraluz[38], 340, "NPC"));
      setTimeout(()=> { 
        $("#cosmo").hide();
        $("#slideshowZ").hide();
        magraluz.glitch01();
        //$("#chat").html("");
        $("#chat").show();
        
        $("#chatMaga").hide()
        $("#slideshow").hide();
        tela4();
      }, 360000 * textSpeed);
      setTimeout(()=> {
        window.location.reload();
      }, 460000 * textSpeed);
    }
    function tela4(){
        $(".chat__inner").html("");
        $(".chat__inner").append(frase(dialogos[46], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[47], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[48], 35, "NPC"));
    };




    

}
