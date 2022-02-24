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
function Toggle(clicker, toggel){
    $(clicker).click(function(){
        $(toggel).toggle();
    })
}
function HEX_TO_RGB( HEX ) {

    //  HEX     =>   #fff    Or    #ffffff

    var matched = HEX.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (matched){
        let Colors = matched.slice(1).map(e => parseInt(e, 16));
        return `rgb(${Colors[0]}, ${Colors[1]}, ${Colors[2]})`;
    }
    

    var short_matched = HEX.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (short_matched){
        let Colors = short_matched.slice(1).map(e => 0x11 * parseInt(e, 16));
        return `rgb(${Colors[0]}, ${Colors[1]}, ${Colors[2]})`;
    }

    return null;
}
function RGB_TO_HEX( RGB ){

    //  RGB     =>   rgb ( 255, 255, 255 )
    
    var matched = RGB.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);

    let Red = matched[1];
    let Green = matched[2];
    let Blue = matched[3];

    const rgb = (Red << 16) | (Green << 8) | (Blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);

}
function File_Information(Input_Field, attribute){

    File_Input = document.querySelector(Input_Field);
    var File = File_Input.files[0];
    let Size = File['size'];
    let Name = File['name'];
    let Type = File['type'].split("/")[0];
    let Ext = File['type'].split("/")[1];
    let LastModifiedDate = File['lastModifiedDate']

    if (Size < 1000) Size = `${Size} Byte`
    else if (Size >= 1000 && Size < 1000000)  Size = `${(Size / 1000).toFixed(2)} KB`;
    else if (Size >= 1000000 && Size < 1000000000)  Size = `${(Size / 1000000).toFixed(2)} MB`;
    else if (Size >= 1000000000 && Size < 1000000000000)  Size = `${(Size / 1000000000).toFixed(2)} GB`;
    else  Size = `${(Size / 1000000000000).toFixed(2)} TB`;

    if (attribute.toLowerCase() == "size")
        return Size;
    else if (attribute.toLowerCase() == "name")
        return Name;
    else if (attribute.toLowerCase() == "type")
        return Type;
    else if (attribute.toLowerCase() == "ext" || attribute.toLowerCase() == "extention")
        return Ext;
    else if (attribute.toLowerCase() == "modified_date")
        return LastModifiedDate;
}
function File_To_String(Input_Field, Image_Field){

    // Create Function   =>   Restul(e){ e.target.result }
    // Enjoy ...

    File_Input = document.querySelector(Input_Field);
    var File = File_Input.files[0];

    var reader = new FileReader();
    reader.onload = Result;
    reader.readAsDataURL(File);

    function Result(e){ 
        data = e.target.result;
        $(Image_Field).attr("src", data)
    }

}
function Sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
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
$(document).on("click change", function(event){

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

    if($(".right .right_user .options").css('display') == 'none'){
        if(event.target !== $(".nav_user #icon_options")[0]) {
            $(".right .right_user .options").css({"display":"none"});
        }
    }else{
        if(event.target !== $(".nav_user #icon_options")[0]) {
            $(".right .right_user .options").css({"display":"none"});
        }
    }

    if($(".selected").css('display') != 'none'){
        if(event.target != $("#select-icon")[0]){
            $(".selected").css({"display":"none"})
        }
    }

    if ($(".input-message .message").val() != ""){
        $(".input-message .message").focus();
        $("#start").css("display","none")
        $("#send-message").css("display","flex")
    }
    else{
        if ($(".show-file").css('display') !== 'none'){
            $(".footer_user #start").css("display","none");
            $("#send-message").css("display","flex");
            $(".input-message .message").focus()
        }
        else{
            $("#start").css("display","flex")
            $("#send-message").css("display","none");
        }
    }

    $(".input-message .message").keyup(function(){
        if ($(this).val() != ""){
            $("#start").css("display","none")
            $("#send-message").css("display","flex")
        }
        else{
            $("#start").css("display","flex")
            $("#send-message").css("display","none")
        }
    })
    
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
    check_scroll_files();
})


//  Add Message in Header ....
function add_message(msg, space){   

    if (space) msg = `&nbsp;${msg}`
    let element = `<div class="current_user">
                    <div class="content">
                        ${msg}
                        <span> <sub> ${Date_Time("hour")}:${Date_Time("minute")} ${Date_Time("am_pm")}  </sub></span>
                    </div>
                    <i class="fa fa-chevron-down" id="show-msg-options"></i>
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
        Send_Message()
    }
});
$(".footer_user #send-message").click(function(){
    Send_Message();
})
// Send Message to Database ...
function Send_Message(){
    
    var msg = $(".footer_user  .message").val();
    if (replace_char(msg, '\n', '') !== "" && replace_char(msg, ' ', '') !== "" && $(".show-file").css('display') == "none"){
        $(".emotions").css("display","none");
        $("#close-emo").css("display","none");
        $("#select-icon").css("display","flex");
        msg = replace_char(msg, '\n', '<br>');
        add_message(msg, true);
        let time = `${Date_Time("hour")}:${Date_Time("minute")} ${Date_Time("am_pm")}`;
        $(".footer_user .message").val("");
        go_bottom(".header_user");
        
        data = {
            message:msg,
            time:time,
        };
        //send_data_to_python("account", data);
    } 
}

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
        let voice = `<audio controls src="${audio}"></audio>`;
        add_message(voice, false);
        go_bottom(".header_user");
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
        $(".content .selected").css("display","none");
       
        Audio_Record(".record .player", ".record .voice", ".record #stop", "#clean", "#send");
       
        $("#clean, #send").click(function(){
            $(".record").css("display","none");
            $(".write").css("display","flex");
        })
    })
}


//  Emotions .... 

function Selected_Emotions_Actions(){

    Toggle("#icon_options", ".options");
    Toggle("#select-icon", ".selected");
    Toggle("nav #show", ".hide-nav");

    $("#emotion").click(function(){
        $(".emotions").css("display","block");
        $("#close-emo").css("display","flex");
        $("#select-icon").css("display","none");
    })

    $("#close-emo").click(function(){
        $('.emotions').css("display","none");
        $(this).css("display","none");
        $("#select-icon").css("display","flex");
    })

    $(".emotions .hash #smile").css("border-bottom", "4px solid var(--footercolor)")
    
    $(".emotions .hash i").click(function(){
        $(".emotions .hash i").css("border-bottom", "0");
        $(this).css("border-bottom", "4px solid var(--footercolor)")
    })
    
    $(".emotions .emo").click(function(){
        $(".input-message .message").val(`${$(".input-message .message").val()}${$(this).text()}`);
    })

}

// Optinos of Message (()) ...

function message_options(){
    

    $(window).on("load resize scroll",function(e){
        $(".msg-options").css({"display":"none"});
    });
    
    $(".header_user").on("scroll",function(e){
        $(".msg-options").css({"display":"none"});
    })

    $(".current_user #show-msg-options").click(function(){

        //msg_options_height = $(".msg-options").width();

        if ($(".msg-options").css("display") == "none"){

            var rect = this.getBoundingClientRect();
            let left = rect.left + window.scrollX;
            let top = rect.top + window.scrollY;
            // check height of header ...
            let height = $(window).height();
            let options_height = 232;
            if (height - top < options_height + 50)
                top -= (options_height + 15);
            else
                top += 25;
            // check Left of header ...
            let width = $(window).width();
            let options_width = 181;
            if (width - left < options_width + 22)
                left -= 160;
            else
                left += 10;

            $(".msg-options").css({
                "top": `${top}px`,
                "left": `${left}px`,
                'display':'flex'
            });
        }
        else 
            $(".msg-options").css({"display":"none"});
    });
    
    $(".second_user #show-msg-options").click(function(){

        //msg_options_height = $(".msg-options").height();
        
        if ($(".msg-options").css("display") == "none"){

            var rect = this.getBoundingClientRect();
            let left = rect.left + window.scrollX;
            let top = rect.top + window.scrollY;
            // check height of header ...
            let height = $(window).height();
            let options_height = 232;
            if (height - top < options_height + 50)
                top -= (options_height + 15);
            else
                top += 25;
            // check Left of header ...
            let width = $(window).width();
            let options_width = 181;
            if (left < options_width)
                left += 10;
            else
                left -= 160;
            
            $(".msg-options").css({
                
                "top": `${top}px`,
                "left": `${left}px`,
                'display':'flex'
            });
        }
        else 
            $(".msg-options").css({"display":"none"});
    });

    $(".msg-options").on("click",function(e){
        if ($(".msg-options").css("display") != "none"){
            $(".msg-options").css({"display":"none"});
        }
    })
    
    

}

record_actions();
Selected_Emotions_Actions();
message_options();

// Open PC window to Choice ( Files - Images - Videos ) ..


$(".selected #user").click(function(){

})
$(".selected #camera").click(function(){
    
})


function check_scroll_files(){
    var el = document.querySelector(".all");
    let is_scrollLeft = el.clientWidth < el.scrollWidth;
 
    if (is_scrollLeft){
        $(".next-button").css("display", "flex");
        $(".prev-button").css("display", "flex");
    }
    else{
        $(".next-button").css("display", "none");
        $(".prev-button").css("display", "none");
    }
}

function Read_Data(file){

    if (file) {

        $(".selected-file .file").html(`<div class="loader"></div>`)

        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.error = function(){
            console.log("Error !")
        }
        reader.readAsDataURL(file);
    }

    function imageIsLoaded(e) {
        
        let Source = e.target.result;
        let ext = file['type'].split("/")[1];
        var exts = ['DOC', 'DOCX', 'HTM', 'HTML', 'ODT', 'PDF', 'XLSX',
                        'XLS', 'ODS', 'PPTX', 'PPT', 'TXT']
        var Type = file['type'].split("/")[0];
        var Size = file['size'];
        var Name = file['name'];
        
        if (Size == 0) Size = `Empty !`
        else if (Size > 0 && Size < 1000) Size = `${Size} Byte`
        else if (Size >= 1000 && Size < 1000000)  Size = `${(Size / 1000).toFixed(2)} KB`;
        else if (Size >= 1000000 && Size < 1000000000)  Size = `${(Size / 1000000).toFixed(2)} MB`;
        else if (Size >= 1000000000 && Size < 1000000000000)  Size = `${(Size / 1000000000).toFixed(2)} GB`;
        else  Size = `${(Size / 1000000000000).toFixed(2)} TB`;
        
        $.get(Source)
            .done(function() { 
                
            }).fail(function() { 
                $(".close-file").click();
            })

        let data = "", video = false;

        if (Type == 'image')
            data = `<img src="${Source}" id="${Type}-${Size}-${Name}">`;
        
        else if (Type == 'video'){
            video = true;
            data = `<i class="fas fa-video"  id="${Type}-${Size}-${Name}" name="${Source}"></i>`;
        }

        else if (Type == 'audio')
            data = `<i class="fas fa-microphone" id="${Type}-${Size}-${Name}"></i>`;
        
        else if (Type == "application" && !exts.includes(ext.toUpperCase()) )
            data = `<i class="fa fa-cogs" id="${Type}-${Size}-${Name}"></i>`

        else{
            Type = "file"
            data = `<i class="fa fa-file" id="${Type}-${Size}-${Name}"></i>`;
        }
        

        if (video)
            $(".selected-file .file").html(`<video controls src='${$(data).attr("name")}'></video>`);
        else
            $(".selected-file .file").html(data);

        $(".all").append(`<div class="icon-file"> <span>&#x2715;</span> <div class="file"> ${data} </div> </div>`);
        $(".selected-file h2").html(`${Type} / ${Size}`)

        check_scroll_files();

        $(".all .icon-file .file").click(function(){
            
            $(".selected-file .file").html(`<div class="loader"></div>`)

            if ($(`${$(this).html()}`).attr("name")){
                
                if ( $(`${$(".selected-file .file").html()}`).attr("src") !== $(`${$(this).html()}`).attr("name") ){

                    $(".selected-file .file").html(`<video controls src='${$(`${$(this).html()}`).attr("name")}'></video>`);
                }
            }
            else
                $(".selected-file .file").html(`${$(this).html()}`);

            let Info = $(this).children().attr("id").split("-");
            let type = Info[0];
            let size = Info[1];
            $(".selected-file h2").text(`${type} / ${size}`);
        })

        $(".all .icon-file span").click(function() {

            check_scroll_files();
            $(".selected-file .file").html(`<div class="loader"></div>`)

            $( this ).parent().remove();

            if (!$(".all .icon-file").length){
                $(".selected-file .file").html("");
                $(".close-file").click();
            }
        
            if ($(".all .icon-file").length){

                let Length = $(".all .icon-file").length;
                Length = Math.floor(Math.random() * Length)

                let FILE = $( ".all .icon-file .file" ).get( Length );
                
                FILE = $(FILE).html();
                
                if ($(FILE).attr("name")){
                
                    if ( $(`${$(".selected-file .file").html()}`).attr("src") !== $(FILE).attr("name") ){

                        $(".selected-file .file").html(`<video controls src='${$(FILE).attr("name")}'></video>`);
                    }
                }
                else
                    $(".selected-file .file").html(FILE);

                let Info = $(FILE).attr("id").split("-");
                let type = Info[0];
                let size = Info[1];
                $(".selected-file h2").text(`${type} / ${size}`);
            }
        
        });


        //  Start Send Messages  ....

        function Send_Data() {

            $(".selected-file .file").html(`<div class="loader"></div>`)

            let All = $(".all").children();

            for (let i = 0; i < All.length; i++) {

                let File = $(All[i]).children().children();
                
                let Info = $(File).attr("id").split("-");
                let source = $(File).attr("src");

                my_type = Info[0]
                my_size = Info[1]
                my_name = Info[2]
                my_source = source;
                
                // Check Message ...

                var msg = $(".footer_user  .message").val();
              
                $(".emotions").css("display","none");
                $("#close-emo").css("display","none");
                $("#select-icon").css("display","flex");
                $(".close-file").click()
                msg = replace_char(msg, '\n', '<br>');

                let p = msg;
                let time = `${Date_Time("hour")}:${Date_Time("minute")} ${Date_Time("am_pm")}`;
                let icon = ""

                if (my_type == 'image')
                    icon = `<img src="${my_source}">`
                else if (my_type == 'video')
                    icon = `<video controls src="${my_source}"></video>`
                else if (my_type == 'audio')
                    icon = `<audio controls src="${my_source}"></audio>`
                else if (my_type == 'file')
                    icon = `<h4  id="icon-file">
                            <i class="fa fa-file"></i>
                            ${my_name}
                        </h4>`
                else
                    icon = `<h4  id="icon-file">
                                <i class="fa fa-cogs"></i>
                                ${my_name}
                            </h4>`

                
                
                data = {
                    message: p,
                    time: time,
                    source: my_source,
                    type: my_type,
                    size: my_size,
                    name: my_name
                };

                // Send Here ... 

                        //python 

                // 

                let element = `<div class="current_user">
                                    <div class="content">
                                        ${icon}
                                        &nbsp;${p}
                                        <span> 
                                            <sub> 
                                                ${Date_Time("hour")}:${Date_Time("minute")} ${Date_Time("am_pm")}
                                            </sub>
                                        </span>
                                    </div>
                                    <i class="fa fa-chevron-down" id="show-msg-options"></i>
                                </div>`;
                $(".header_user").append(element);
                
                
            }

        }


        $("#send-message").click(function(){
            Send_Data();
            $(".footer_user .message").val("");
            go_bottom(".header_user");
        })

        $(".footer_user .message").keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13'){
                event.preventDefault();
                Send_Data();
                $(".footer_user .message").val("");
                go_bottom(".header_user");
            }
        });
        

    }

}

$(".selected #image, .selected #file").click(function(){

    $(".selector").click();

    $(".selector").on('change', function() {
        
        var fileInput = document.querySelector(".selector");

        var file = fileInput.files;

        for(let i = 0; i < file.length; i++){
            
            let File = file[i];
            let Size = File['size'];
            
            if ( Size <= 1000000000 ) {

                $(".header_user").css("display","none");
                $(".nav_user").css("display","none");
                $(".show-file").css("display","block");

                Read_Data(File)
            }
            else{

                $(".note").css("display","flex");
                $(".note .message p").html(`
                            <i class='fa fa-exclamation-triangle'></i>
                            Cannot Open ( ${File['type']} ) , 
                            Size Must Be Less Than ( 100 MB ) <br> Can Be Modified Later .`)
            }
            
        }
      
        $(".selector").val("");

        $(".small-icon #right").click(function(){
            document.querySelector(".small-icon .all").scrollLeft -= 300;
        })
        $(".small-icon #left").click(function(){
            document.querySelector(".small-icon .all").scrollLeft += 300;
        })
        
    });
    
})



// data = {"image": e.target.result};
// $.ajax({
//     url: "account",
//     type: "POST",
//     dataType: "json",
//     data: JSON.stringify(data),
//     headers: {
//       "request": "result",
//       "X-CSRFToken": getCookie("csrftoken"),
//     },
//     success: ( data ) => {

        // data = data['result'].join("");
        // $(".selected-image img").attr("src", e.target.result);
        // $(".all").append(`<div class="icon-image">
        //                     <span>&#x2715;</span>
        //                     <img src="${e.target.result}" >
        //                   </div>`);
        
        
    // },
    // error: () => {
    //     console.log("System Error !")
    // }
// });
