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
];

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
        }
    } )



}
