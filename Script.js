$(function(){var alterne=!0,icone2=!0,icone1=1,appelVocal=!0,envoie=!1,msg=$("#message"),minutes=0,secondes=0,t,card=`<div id='appelManque'>

            <p><i class='material-icons'>call_missed</i>

            SoloLearn a manqué votre appel</p><span></span></div>`;$("#appelVocal").hide();$("input").focus(function(){$("#envoyer i").text("send");$("#envoyer i,#emoticon i").css("color","#00AEC5");envoie=!0});$("input").blur(function(){$("#envoyer i").text("mic");$("#envoyer i,#emoticon i").css("color","#526D7B");setTimeout(function(){envoie=!1},500)});function autoScroll(){msg.animate({scrollTop:msg[0].scrollHeight-msg.height()},1000)}

$("#envoyer").click(function(){envoyer()});$("input").keypress(function(){envoyer()});function envoyer(){var msg=$("input").val();if(envoie&&msg!=""){if(alterne){$("#message").append("<p class='moi'>"+msg+"</p>")}else{$("#message").append("<p class='lui'>"+msg+"</p>")}

$("input").val("");alterne=!alterne;autoScroll()}}

$("#plus").click(function(){appel();appelVocal=!appelVocal});$("#appelVocal").click(function(){minutes=0;secondes=0;$("#appel").show();$("audio")[0].play();dureeAppel()});function appel(){if(appelVocal==!0){$("#appelVocal").show().animate({width:"96%"},1000);$("#plus i").text("close").css("color","#DB4437")}else{$("#appelVocal").animate({width:'0'},1000,function(){$(this).hide()});$("#plus i").text("add").css("color","#00AEC5")}}

$("#icone3").click(function(){var tps=new Date();$("#appel").hide();$("audio")[0].pause();clearTimeout(t);appel();appelVocal=!appelVocal;$("#message").append(card);$("#appelManque span").last().text(((tps.getHours()<10)?"0":"")+tps.getHours()+":"+((tps.getMinutes()<10)?"0":"")+tps.getMinutes())});$("#icone1").click(function(){if(icone1==1){$("#icone1 i").text("volume_down");$("audio")[0].volume=0.4}else if(icone1==2){$("#icone1 i").text("volume_mute");$("audio")[0].volume=0}else{$("#icone1 i").text("volume_up")

$("audio")[0].volume=1}

if(icone1==3)

icone1=0;icone1++});$("#icone2").click(function(){if(icone2)

$("#icone2 i").text("mic");else $("#icone2 i").text("mic_off");icone2=!icone2});function dureeAppel(){if(secondes==59){secondes=0;minutes++}

$("#duree").text(((minutes<10)?"0":"")+minutes+":"+((secondes<10)?"0":"")+secondes);secondes++;t=setTimeout(dureeAppel,1000)}})
