var textSpeed = 1/100;
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
    "valeu grandão, [pessoa]",
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

window.onload = function(){
    magraluz = new Magraluz(); 

    $('#inputText').prop( "disabled", true );
    $('#enviar').prop( "disabled", true );

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


        $(".chat__inner").append(frase("<div id=\"RQuem\">Quem é você?</div> <br><div id=\"RQuet\">Que tipo de ajuda?</div>", 35, "player"));
        
        var origQuem = $( "#RQuem" ).html();
        $( "#RQuem" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origQuem);
            }
        );

        var origQuet = $( "#RQuet" ).html();
        $( "#RQuet" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origQuet);
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
            $(".chat__inner").append(frase("<div id=\"PinBut\">[ PIN ]</div>", 145, "NPC"));
            $( "#PinBut" ).click(function () { console.log("tela2"); tela2() });
           
        }
    } );

    function tela2(){
            $(".chat__inner").append(frase(dialogos[16], 5, "NPC"));
            $(".chat__inner").append(frase(dialogos[17], 25, "NPC"));
            $(".chat__inner").append(frase(dialogos[18], 45, "NPC"));
            $(".chat__inner").append(frase(dialogos[19], 55, "NPC"));
            $(".chat__inner").append(frase(dialogos[20], 85, "NPC"));
            $(".chat__inner").append(frase(dialogos[21], 105, "NPC"));
            $(".chat__inner").append(frase(dialogos[22], 125, "NPC"));
            $(".chat__inner").append(frase(dialogos[23], 145, "NPC"));
            $(".chat__inner").append(frase("<div id=\"ImagemCli\">[ IMAGEM ]</div>", 145, "NPC"));
            $( "#ImagemCli" ).click(function () { console.log("tela3"); tela3() });

    };

    function tela3(){
        $(".chat__inner").append(frase("* Print *", 5, "NPC"));
        $(".chat__inner").append(frase("* Figurinha *", 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[24], 45, "NPC"));
        $(".chat__inner").append(frase(dialogos[25], 55, "NPC"));
        $(".chat__inner").append(frase(dialogos[26], 85, "NPC"));
        $(".chat__inner").append(frase(dialogos[27], 105, "NPC"));
        $(".chat__inner").append(frase("<div id=\"R2022\">2022</div> <br><div id=\"R2023\">2023</div><br><div id=\"R2024\">2024</div><br>", 115, "player"));
        
        var orig2022 = $( "#R2022" ).html();
        $( "#R2022" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(orig2022);
            }
        );

        var orig2023 = $( "#R2023" ).html();
        $( "#R2023" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(orig2023);
            }
        );

        var orig2024 = $( "#R2024" ).html();
        $( "#R2024" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(orig2024);
            }
        );

        $( "#R2022" ).click(function () { tela3_1() });
        $( "#R2023" ).click(function () { tela3_1() });
        $( "#R2024" ).click(function () { tela3_1() });


};
    function tela3_1(){
        $(".chat__inner").append(frase(dialogos[28], 5, "NPC"));
        $(".chat__inner").append(frase("<div id=\"RMeme\">[ meme atual ]</div> <br><div id=\"RNaoP\">Não posso</div>", 10, "player"));
        var origMeme = $( "#RMeme" ).html();
        
        $( "#RMeme" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origMeme);
            }
        );

        var origNaoP = $( "#RNaoP" ).html();
        $( "#RNaoP" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origNaoP);
            }
        );

        $( "#RMeme" ).click(function () { tela3_2() });
        $( "#RNaoP" ).click(function () { tela3_2() });

    }

    function tela3_2(){
        $(".chat__inner").append(frase(dialogos[29], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[30], 15, "NPC"));
        $(".chat__inner").append(frase(dialogos[31], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[32], 35, "NPC"));
        $(".chat__inner").append(frase(dialogos[33], 45, "NPC"));
        $(".chat__inner").append(frase(dialogos[34], 55, "NPC"));
        $(".chat__inner").append(frase(dialogos[35], 65, "NPC"));
        $(".chat__inner").append(frase(dialogos[36], 75, "NPC"));
        $(".chat__inner").append(frase(dialogos[37], 85, "NPC"));
        $(".chat__inner").append(frase(dialogos[38], 95, "NPC"));
        $(".chat__inner").append(frase(dialogos[39], 105, "NPC"));
        $(".chat__inner").append(frase(dialogos[40], 115, "NPC"));
        $(".chat__inner").append(frase(dialogos[41], 125, "NPC"));
 
        $(".chat__inner").append(frase("<div id=\"RFoiM\">😅 foi mal</div> <br><div id=\"RComoE\">😤 como eu ia saber??</div>", 135, "player"));

        var origMeme = $( "#RFoiM" ).html();
        $( "#RFoiM" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origMeme);
            }
        );

        var origComoE = $( "#RComoE" ).html();
        $( "#RComoE" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origComoE);
            }
        );

        $( "#RFoiM" ).click(function () { tela3_3() });
        $( "#RComoE" ).click(function () { tela3_3() });
    }
    function tela3_3(){
        $(".chat__inner").append(frase(dialogos[41], 5, "NPC"));
        $(".chat__inner").append(frase(dialogos[42], 15, "NPC"));
        $(".chat__inner").append(frase(dialogos[43], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[44], 35, "NPC"));
        $(".chat__inner").append(frase(dialogos[45], 5, "NPC"));
 
        $(".chat__inner").append(frase("<div id=\"RComoPosso\">como posso te ajudar?</div> <br><div id=\"RMeExpli\">me explica logo o que tá acontecendo!</div>", 40, "player"));

        var origComoPosso = $( "#RComoPosso" ).html();
        $( "#RComoPosso" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origComoPosso);
            }
        );

        var origMeExpli = $( "#RMeExpli" ).html();
        $( "#RMeExpli" ).hover(
            
            function() {
              $( this ).html( "> " + $( this ).html() );
            }, function() {
              $( this ).html(origMeExpli);
            }
        );

        $( "#RComoPosso" ).click(function () { tela4() });
        $( "#RMeExpli" ).click(function () { tela4() });
        
    }
    function tela4(){
        
        $(".chat__inner").append(frase(dialogos[46], 15, "NPC"));
        $(".chat__inner").append(frase(dialogos[47], 25, "NPC"));
        $(".chat__inner").append(frase(dialogos[48], 35, "NPC"));
    };




    

}
