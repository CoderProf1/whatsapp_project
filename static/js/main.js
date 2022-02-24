//             JavaScript Template ..... 


function Date_Time(required_name){
        
    var date = new Date();
    let Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Mon_name = Months[date.getMonth()]
    let Day_name = Days[date.getDay()];
    let Weak_day = date.getDay();

    let years = date.getFullYear();
    let months = date.getMonth() + 1;
    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = "";
    if (hours > 12) {hours -= 12; am_pm = "PM"}
    else am_pm = "AM";
    if (hours == 0) hours = 12;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;


    if (required_name.toLowerCase() == "year") return years;
    else if (required_name.toLowerCase() == "month") return months;
    else if (required_name.toLowerCase() == "day")  return days;
    else if (required_name.toLowerCase() == "hour") return hours;
    else if (required_name.toLowerCase() == "minute") return minutes;
    else if (required_name.toLowerCase() == "second") return seconds;
    else if (required_name.toLowerCase() == "dayname") return Day_name;
    else if (required_name.toLowerCase() == "monthname") return Mon_name;
    else if (required_name.toLowerCase() == "weakday") return Weak_day;
    else if (required_name.toLowerCase() == "am_pm") return am_pm;

}

function Get_Send(url, dictionary_data, request_name="result"){

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
          const cookies = document.cookie.split(";");
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
    }
    
    var result = $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: JSON.stringify(dictionary_data),
        headers: {
          "request": request_name,
          "X-CSRFToken": getCookie("csrftoken"),
        },
        success: ( data ) => {
            return_result(data);
        }
    });

    
}
function return_result( data ) {
 
    console.log(data);
    
}

function Toggle(clicker, toggel){
    $(clicker).click(function(){
        $(toggel).toggle();
    })
}


////////////////////////////////////////////////////////////////////////


function LightMode()
{
    var mode = `
    <style>
        :root{

            --body:#fff;
            --nav: rgb(13, 53, 43);
            --footer:var(--nav);
            --hover:rgb(4, 75, 59);
            --color:rgb(2, 32, 26);
            --i:rgb(6, 180, 143);
            --scroll:rgb(1, 83, 70);
            --colorHover:rgb(12, 248, 228);
            --backform:rgb(255, 255, 255);
            --colorinput:var(--nav);
            --warn:red;
            --orig:#ddd;
            --label:var(--nav);
            --borderinput:var(--nav);
            --submitback:var(--nav);
        
        
            --leftbackwhats:rgb(248, 245, 245);
            --leftinputwhats: var(--leftbackwhats);
            --leftcolorwhats: rgb(3, 69, 71);
            --leftorigwhats: rgb(110, 107, 107);
            --lefthoverwhats: #ebebeb;
            --leftborderwhats:rgb(156, 152, 152);
            --licolorwhats:var(--leftcolorwhats);
            --countwhats:rgb(83, 204, 83);
            --leftscroll:rgb(1, 97, 84);
            --icolorwhatshover:#fff;
            --ibackground: rgb(182, 182, 182);
        
        
            --righthoverwhats: var(--hover);
            --righthovercolor:#fff;
            --rightdefaultback:rgb(248, 245, 245);
            --rightdefaultcolor:rgb(3, 70, 50);
            --rightnavwhats:var(--rightheaderwhats);
            --rightfooterwhats:rgb(3, 78, 59);
            --rightinputwhats:rgb(233, 227, 227);
            --rightscroll:var(--leftscroll);
            --rightcolorwhats:var(--leftcolorwhats);
            --rightborderwhats:rgb(168, 164, 164);
            --rightorigwhats:#777;
            --rightheaderwhats:rgb(255, 255, 255);
            --rightcolorinput:rgb(2, 39, 33);
            --footercolor:rgb(187, 186, 186);
            --online:#000;
            --image:url("");
            --secondback:rgb(9, 136, 119);
            --secondcolor:rgb(255, 255, 255);
            --currentcolor:#fff;
            --currentback:rgb(9, 129, 93);
            --dayback:rgb(3, 100, 63);
            --daycolor:#fff;
            --rightshadow:#000;
            --rightsearch:var(--rightdefaultback);
            --rightoptions:rgb(2, 46, 44);
            --rightli:rgba(255, 255, 255, 0.836);
            --rightliback: rgb(19, 78, 68);
            --messagetimecolor: rgb(226, 226, 226);
        
        }
    </style>
    `;
    $("html").append(mode);
}
function DarkMode()
{
    var mode = `
    <style>
        :root{

            --body:#111;
            --nav: #333;
            --footer:var(--nav);
            --hover:#555;
            --color:#999;
            --i:#999;
            --scroll:#555;
            --colorHover:rgb(149, 229, 229);
            --backform:#333;
            --colorinput:#fff;
            --warn:rgb(250, 135, 135);
            --orig:#999;
            --label:rgb(194, 189, 189);
            --borderinput: #888;
            --submitback:rgb(70, 67, 67);
        
        
            --leftbackwhats:#222;
            --leftinputwhats: var(--leftbackwhats);
            --leftcolorwhats: #999;
            --leftorigwhats: #ddd;
            --lefthoverwhats: #333;
            --leftborderwhats: #555;
            --licolorwhats:var(--leftcolorwhats);
            --countwhats:rgb(83, 204, 83);
            --leftscroll:#555;
            --icolorwhatshover:#555;
            --ibackground: #444;
        
        
            --righthoverwhats: var(--hover);
            --righthovercolor:#fff;
            --rightdefaultback:#222;
            --rightdefaultcolor:#999;
            --rightnavwhats:var(--rightheaderwhats);
            --rightfooterwhats:#333;
            --rightinputwhats:#444;
            --rightscroll:var(--leftscroll);
            --rightcolorwhats:#999;
            --rightborderwhats:#777;
            --rightorigwhats:#777;
            --rightheaderwhats:#333;
            --rightcolorinput:#ebebeb;
            --footercolor:#ddd;
            --online:#ddd;
            --image:url("");
            --secondback:#555;
            --secondcolor:#ddd;
            --currentcolor:#ddd;
            --currentback:#333;
            --dayback:#333;
            --daycolor:#fff;
            --rightshadow:#111;
            --rightsearch:#333;
            --rightoptions:#333;
            --rightli:#ddd;
            --rightliback: #444;
            --messagetimecolor: rgb(179, 175, 175);

        }
    
    </style>
    `;
    $("html").append(mode);
}
$("#dark").click(function(){
    $("#dark").css("display","none");
    $("#light").css("display","flex");
    DarkMode();
});
$("#light").click(function(){
    $("#dark").css("display","flex");
    $("#light").css("display","none");
    LightMode();
});

function InputClick(input){

    $(input).click(function(){
        $(this).attr("placeholder", "");
    })

    var placeholder = $(input).attr("placeholder");
    $(document).click(function(event){
        if(event.target !== $(input)[0]) {
            $(input).attr("placeholder", placeholder)
        }
    });
}
function SetInputClick(){
    InputClick(".left .search input");
    InputClick("form input[name='email']");
    InputClick("form input[name='phone']");
    InputClick("form input[name='name']");
    InputClick("form input[name='password']");
    InputClick("form input[name='password1']");
    InputClick("form input[name='password2']");
    InputClick("form input[name='new_user']");
    InputClick("form input[name='new_group']");
    InputClick(".right .search input");
    InputClick(".right .right_user .footer_user input");
}
SetInputClick();
function show_search(){
    $(".nav_user .search").css({"display":"flex"});
    $(".nav_user .search input").focus() 
    $(".nav_user #icon_search").css({"display":"none"});
}
$(document).click(function(event){
    if($(".nav_user .search").css('width') != 'none'){
        if ($(".search_message").css('display') == 'none'){
            if(event.target !== $(".nav_user .search")[0] && event.target !== $(".nav_user .search input")[0]
            && event.target !== $(".nav_user #icon_search")[0] && event.target !== $(".nav_user .search i")[0]) {
                $(".nav_user .search").css({"display":"none"});
                $(".nav_user #icon_search").css({"display":"flex"});
                $(".nav_user .user_info").css({"display":"flex"});
            }
        }
    }
});
$(document).click(function(event){
    if($(".right .right_user .options").css('display') == 'none'){
        if(event.target !== $(".nav_user #icon_options")[0]) {
            $(".right .right_user .options").css({"display":"none"});
        }
    }else{
        if(event.target !== $(".nav_user #icon_options")[0]) {
            $(".right .right_user .options").css({"display":"none"});
        }
    }
});
List = [".default", ".edit", ".add", ".right_user", ".config", ".search_message"]
function Show(Elements=List, show, type){
    for (let ch = 0; ch < Elements.length; ch++){
        $(show).css("display", `${type}`);
        if (Elements[ch] != show)
            $(Elements[ch]).css("display", "none");
    }
}

function isBottom(element){
    e = document.querySelector(element);
    height = ($(this).height() * 10) / 100;
    return e.offsetHeight + e.scrollTop >= e.scrollHeight - height;
}
function go_bottom(element){

    var element  = document.querySelector(element);
    let to_bottom = element.scrollHeight - (element.offsetHeight + element.scrollTop);
    
    if ( to_bottom < 2000)
        $(".header_user").css({"scroll-behavior": "smooth"});
    else
        $(".header_user").css({"scroll-behavior": "auto"});

    element.scrollTop = element.scrollHeight - element.clientHeight;
}

$( ".header_user" ).scroll(function() {
    
    if (isBottom(".header_user")){
        $(".down").css("display", "none");
    }else{
        $(".down").css("display", "flex");
    }
});
Toggle("nav #show", ".hide-nav");
$(window).on("resize", function(){
    $(".hide-nav").css("display","none");
})
Toggle("#icon_options", ".options");

//  Add Message in Header ....
function add_message(msg){   

    let element = `<div class="current_user">
                        <p> ${msg}
                            <span> <sub> ${Date_Time("hour")}:${Date_Time("minute")} ${Date_Time("am_pm")}  </sub></span>
                        </p>
                    </div>`;
    $(".header_user").append(element);
    
}
function replace_char(str, from, to){
        var find = from;
        var re = new RegExp(find, 'g');
        str = str.replace(re, to);
        return str;
}
$(".footer_user .message").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        event.preventDefault();
        var msg = $(".footer_user  .message").val();
        if (replace_char(msg, '\n', '') !== "" && replace_char(msg, ' ', '') !== ""){
            msg = replace_char(msg, '\n', '<br>');
            //msg = replace_char(msg, ' ', '&nbsp;')
            add_message(msg);
            let time = `${Date_Time("hour")}:${Date_Time("minute")} ${Date_Time("am_pm")}`;
            $(".footer_user .message").val("");
            go_bottom(".header_user");
            
            data = {
                message:msg,
                time:time,
            };
            send_data_to_python("account", data);
        }
    }
});


//  search messages actions .....
function Search_Actions(){
    let value = $(".nav_user .search input").val();
    if (value !== "" && value.length != 1){
        $(".search_message").css("display","block");
        $(".footer_user").css("display","none");
        $(".header_user").css("display","none");
        $("#back_search").css("display","flex");
        $("#icon_options").css("display","none")
    }
    
}
$(".nav_user .search input").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        Search_Actions();
    }
    
});
$("#start_search").click(function() {
    Search_Actions();
})

//  Record Message actions ..

function record_actions(){

    function send_audio(audio){
        console.log(audio)
        let voice = `<audio class="record_message" controls src="${audio}"></audio>`;
        add_message(voice);
    }

    function Audio_Record(player, voice, stop, clean, send){

        player = document.querySelector(player);
        voice = document.querySelector(voice);
        var flag = "0";

        const handleSuccess = function(stream) {
            
            player.srcObject = stream;
            const options = {mimeType: `video/webm`};
            const recordedChunks = [];
            const mediaRecorder = new MediaRecorder(stream, options);
    
            mediaRecorder.addEventListener('dataavailable', function(e) {
            if (e.data.size > 0) recordedChunks.push(e.data);
            });
    
            //  Result of Record   ( Your record )
            
    
            // Stop Function  ( stop record )
            document.querySelector(stop).onclick = function() {
                try{
                    mediaRecorder.stop();
                    player.srcObject.getTracks().forEach(track => track.stop());
                }catch(e) {}
                mediaRecorder.addEventListener('stop', function() {
                    Result = URL.createObjectURL(new Blob(recordedChunks));
                    player.srcObject = stream;
                    voice.src = Result;
                });
                voice.style.display = 'block';
                player.style.display = 'none';
                flag = "1";
            }

            // remove and clean all ...
            document.querySelector(clean).onclick = function() {
                try{
                    mediaRecorder.stop();
                    player.srcObject.getTracks().forEach(track => track.stop());
                }catch(e){}
                mediaRecorder.addEventListener('stop', function() {
                    //Result = URL.createObjectURL(new Blob(recordedChunks));
                    player.srcObject = stream;
                });
                voice.style.display = 'none';
                player.style.display = 'block';
                voice.src = "";
            }

            // Send Message ...
            document.querySelector(send).onclick = function() {
                try{
                    mediaRecorder.stop();
                    player.srcObject.getTracks().forEach(track => track.stop());
                }catch(e){}
                mediaRecorder.addEventListener('stop', function() {
                    Result = URL.createObjectURL(new Blob(recordedChunks));
                    player.srcObject = stream;
                    send_audio(Result);
                });
                if (flag !== "0")
                    send_audio(voice.src)
                voice.style.display = 'none';
                player.style.display = 'block';
                voice.src = "";
                
            }
    
            // Start Automatically  ( if function (Audio_Record)  Called )
            mediaRecorder.start();
        };
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
    
    }

    $("#start").click(function(){
        $(".content .record").css("display","flex");
        $(".content .write").css("display","none");
       
        Audio_Record(".record .player", ".record .voice", ".record #stop", "#clean", "#send");
       
        $("#clean, #send").click(function(){
            $(".record").css("display","none");
            $(".write").css("display","flex");
        })
    })
}




/*
            Today ......
    

    3]  options [ delete - remove - notifications ]
    4]  mode [ dark - lieght ]  onclick (send database)
    7]  get users and messages from database 
    8]  login 
    9]  register
    10] edit
    11] add user   

*/