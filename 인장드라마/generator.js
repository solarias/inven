
//각종 수치
let titleInfo = titlelist[0];
let audioObj = {};
let imageObj = {};
let result = {};//출력 틀 묶음
let textarea = $("#textarea");


//==================================
//※ 리소스 관련
//==================================
function setResource() {
    //오디오 세팅
    audiolist.forEach(function(x) {
        audioObj[x.name] = {};
        audioObj[x.name].url = x.url;
        if (x.start) audioObj[x.name].start = x.start;
    });
    //이미지 세팅
    imagelist.forEach(function(x) {
        imageObj[x.name] = x.url;
    });
}

function setAudio(elm, name) {
    if (audioObj[name]) {
        elm.target = "youtube";
        let tempHref = audioObj[name].url + "?rel=0&controls=0&autoplay=1&loop=1";

        if (audioObj[name].start)
            tempHref += "&start=" + audioObj[name].start;
        else
            tempHref += "&start=0";

        elm.href = tempHref;
    }
}

function getImage(name) {
    return imageObj[name];
}

function setImage(target, name) {
    if (imageObj[name]) target.style.backgroundImage = "url(" + imageObj[name] + ")";
}


//==================================
//※ 틀 제작
//==================================
function generate_wrapper() {
    //전체 틀, 스크린영역 틀
    result.wrapper = document.createElement("div");
        result.wrapper.id = "wrapper";
        result.wrapper.dataset["invenId"] = "wrapper";
        Object.assign(result.wrapper.style,jsstyle.wrapper)

    result.screenarea = document.createElement("div");
        result.screenarea.id = "screenarea";
        result.screenarea.dataset["invenId"] = "screenarea";
        Object.assign(result.screenarea.style,jsstyle.screenarea)

    result.wrapper.appendChild(result.screenarea);

    //공지스크린 틀
    result.noticescreen = document.createElement("div");
        result.noticescreen.id = "noticescreen";
        result.noticescreen.dataset["invenId"] = "noticescreen";
        Object.assign(result.noticescreen.style,jsstyle.noticescreen)

    result.noticebox = document.createElement("div");
        result.noticebox.id = "noticebox";
        result.noticebox.dataset["invenId"] = "noticebox";
        Object.assign(result.noticebox.style,jsstyle.noticebox);

    result.noticetext = document.createElement("div");
        result.noticetext.id = "noticetext";
        result.noticetext.dataset["invenId"] = "noticetext";
        Object.assign(result.noticetext.style,jsstyle.noticetext);
        result.noticetext.innerHTML = "해당 인장은 모바일에서 작동하지 않습니다. PC모드를 이용해주세요.";

    result.noticebutton = document.createElement("a");
        result.noticebutton.id = "noticebutton";
        result.noticebutton.dataset["invenId"] = "noticebutton";
        Object.assign(result.noticebutton.style,jsstyle.noticebutton);
        result.noticebutton.href = "#";
        result.noticebutton.innerHTML = "게임 가동";

    result.screenarea.appendChild(result.noticescreen);
        result.noticescreen.appendChild(result.noticebox);
            result.noticebox.appendChild(result.noticetext);
            result.noticebox.appendChild(result.noticebutton);

    //타이틀스크린 틀
    result.titlescreen = document.createElement("div");
        result.titlescreen.id = "titlescreen";
        result.titlescreen.dataset["invenId"] = "titlescreen";
        Object.assign(result.titlescreen.style,jsstyle.titlescreen)

        if (titleInfo.color) result.titlescreen.style.backgroundColor = titleInfo.color;
        setImage(result.titlescreen,titleInfo.background);

    result.title = document.createElement("div");
        result.title.id = "title";
        result.title.dataset["invenId"] = "title";
        Object.assign(result.title.style,jsstyle.title)

        if (titleInfo.title) result.title.innerHTML = titleInfo.title;
    result.start = document.createElement("a");
        result.start.id = "start";
        result.start.dataset["invenId"] = "start";
        Object.assign(result.start.style,jsstyle.start)
        result.start.innerHTML = "시작하기"

    result.screenarea.appendChild(result.titlescreen);
        result.titlescreen.appendChild(result.title);
        result.titlescreen.appendChild(result.start);

    //메인스크린, 캐릭터 틀
    result.mainscreen = document.createElement("div");
        result.mainscreen.id = "mainscreen";
        result.mainscreen.dataset["invenId"] = "mainscreen";
        Object.assign(result.mainscreen.style,jsstyle.mainscreen)
    result.cha1 = document.createElement("div");
        result.cha1.id = "cha1";
        result.cha1.dataset["invenId"] = "cha1";
        Object.assign(result.cha1.style,jsstyle.cha1)
    result.cha2 = document.createElement("div");
        result.cha2.id = "cha2";
        result.cha2.dataset["invenId"] = "cha2";
        Object.assign(result.cha2.style,jsstyle.cha2);
    result.cha3 = document.createElement("div");
        result.cha3.id = "cha3";
        result.cha3.dataset["invenId"] = "cha3";
        Object.assign(result.cha3.style,jsstyle.cha3);

    result.screenarea.appendChild(result.mainscreen);
        result.mainscreen.appendChild(result.cha1);
            result.cha1.appendChild(result.cha2);
            result.cha2.appendChild(result.cha3);

    //선택지 틀
    result.selectframe = document.createElement("div");
        result.selectframe.id = "selectframe";
        result.selectframe.dataset["invenId"] = "selectframe";
        Object.assign(result.selectframe.style,jsstyle.selectframe);

    result.selecthead = document.createElement("div");
        result.selecthead.id = "selecthead";
        result.selecthead.dataset["invenId"] = "selecthead";
        Object.assign(result.selecthead.style,jsstyle.selecthead);

        result.selecthead.innerHTML = "선택하세요";

    result.cha3.appendChild(result.selectframe);
    result.selectframe.appendChild(result.selecthead);

    //대사 틀
    result.dialog_nameframe = document.createElement("div");
        result.dialog_nameframe.id = "dialog_nameframe";
        result.dialog_nameframe.dataset["invenId"] = "dialog_nameframe";
        Object.assign(result.dialog_nameframe.style,jsstyle.dialog_nameframe);
    result.dialog_textframe = document.createElement("div");
        result.dialog_textframe.id = "dialog_textframe";
        result.dialog_textframe.dataset["invenId"] = "dialog_textframe";
        Object.assign(result.dialog_textframe.style,jsstyle.dialog_textframe);

    result.cha3.appendChild(result.dialog_nameframe);
    result.cha3.appendChild(result.dialog_textframe);

    //유튜브 틀, 버튼 틀
    result.youtube = document.createElement("iframe");
        result.youtube.id = "youtube";
        result.youtube.name = "youtube";
        result.youtube.dataset["invenId"] = "youtube";
        result.youtube.src = "https://www.youtube.com/embed/vhqnIWyNV6c?rel=0&amp;controls=0&amp;autoplay=1";
        Object.assign(result.youtube.style,jsstyle.youtube);
    result.buttonframe = document.createElement("div");
        result.buttonframe.id = "buttonframe";
        result.buttonframe.dataset["invenId"] = "buttonframe";
        Object.assign(result.buttonframe.style,jsstyle.buttonframe);
        result.buttonframe.innerHTML = "";

    result.wrapper.appendChild(result.youtube);
    result.wrapper.appendChild(result.buttonframe);
}

//==================================
//※ 대사 & 버튼 & 선택지 제작
//==================================
function generate_script() {
    let nameArr = [];//이름 중복제작 방지
    script.forEach(function(data, num) {
        //이름 제작
        if (data.name.length > 0 && nameArr.indexOf(data.name) < 0) {
            nameArr.push(data.name);

            result["name_" + data.name] = document.createElement("span");
            nameElm = result["name_" + data.name];
            nameElm.id = "name_" + data.name;
            nameElm.dataset["invenId"] = "name_" + data.name;
            Object.assign(nameElm.style,jsstyle.dialog_name);
            nameElm.innerHTML = data.name;

            result.dialog_nameframe.appendChild(nameElm);
        }

        //대사 제작
        if (num === 0) {
            result.dialog_firsttextframe = document.createElement("div");
            result.dialog_firsttextframe.id = "dialog_firsttextframe";
            result.dialog_firsttextframe.dataset["invenId"] = "dialog_firsttextframe";
            Object.assign(result.dialog_firsttextframe.style,jsstyle.dialog_firsttextframe);

            result.dialog_textframe.appendChild(result.dialog_firsttextframe);
        }
        result["text_" + data.id] = document.createElement("div");
        textElm = result["text_" + data.id];
        textElm.id = "text_" + data.id;
        textElm.dataset["invenId"] = "text_" + data.id;
        Object.assign(textElm.style,jsstyle.dialog_text);
        textElm.innerHTML = data.text;
            //첫 대사는 길이 100%
            if (num === 0)
                textElm.style.width = "100%";
                textElm.style.height = "100%";

        if (num === 0) {
            result.dialog_firsttextframe.appendChild(textElm);
        } else {
            result.dialog_textframe.appendChild(textElm);
        }

        //버튼 제작
        result["button_" + data.id] = document.createElement("a");
        buttonElm = result["button_" + data.id];
        buttonElm.id = "button_" + data.id;
        buttonElm.dataset["invenId"] = "button_" + data.id;
        Object.assign(buttonElm.style,jsstyle.progress);
            //첫 버튼: 숨기기
            if (num === 0) {
                buttonElm.style.display = "block";
                buttonElm.style.overflow = "hidden";
                buttonElm.style.height = "0";
                buttonElm.style.transition = "height 0s linear 2s";
            }

        buttonElm.href = "#";
        buttonElm.innerHTML = "다음 >>";

        result.buttonframe.appendChild(buttonElm);

        //선택지 제작

    })
}

//==================================
//※ 상호작용
//==================================
function generate_interact() {
    //가동 버튼 상호작용
        //화면 전환
        result.noticebutton.dataset["invenClickCss"] = "{" +
            "'_SELF_':{'display':'none'}," +
            "'noticescreen':{'height':'0'}," +
            "'titlescreen':{'opacity':'1'}," +
            "'start':{'height':'50px'}" +
        "}";
        //음악 출력
        setAudio(result.noticebutton,titleInfo.audio);

    //시작 버튼 상호작용
        let line = script[0];//첫 줄 세팅
        //화면 전환 & 첫 화면 구성
        let tempText = "{" +
            "'_SELF_':{'display':'none'}," +
            "'titlescreen':{'height':'0','opacity':'0'}," +
            "'dialog_firsttextframe':{'width':'100%','height':'auto'}";
        //배경화면
        if (line.background === "none")
            tempText += "," + "'mainscreen':{'height':'100%','backgroundImage':''}";
        else if (line.background !== "")
            tempText += "," + "'mainscreen':{'height':'100%','backgroundImage':'url(" + getImage(line.background) + ")'}";
        else
            tempText += "," + "'mainscreen':{'height':'100%'}";
        //이미지
        if (line.image1 === "none")
            tempText += "," + "'cha1':{'backgroundImage':''}";
        else if (line.image1 !== "")
            tempText += "," + "'cha1':{'backgroundImage':'url(" + getImage(line.image1) + ")'}";
        if (line.image2 === "none")
            tempText += "," + "'cha2':{'backgroundImage':''}";
        else if (line.image2 !== "")
            tempText += "," + "'cha2':{'backgroundImage':'url(" + getImage(line.image2) + ")'}";
        if (line.image3 === "none")
            tempText += "," + "'cha3':{'backgroundImage':''}";
        else if (line.image3 !== "")
            tempText += "," + "'cha3':{'backgroundImage':'url(" + getImage(line.image3) + ")'}";
        //이름
        if (line.name !== "")
            tempText += "," + "'name_" + line.name + "':{'display':'block'}";
        //다음 버튼
        tempText += "," + "'button_" + line.id + "':{'height':'100%'}";

        result.start.dataset["invenClickCss"] =  tempText + "}";
        //음악 출력
        setAudio(result.start, line.bgm);

    //버튼 상호작용
    script.forEach(function(data, num) {
        //공통: 버튼 닫기
        let tempText = "{" +
            "'_SELF_':{'display':'none'}," +
            "'text_" + data.id + "':{'width':'0','height':'0'}";

        let line;
        //다음 대사 정하지 않음
        if (data.next === "") {
            line = script[num+1];
        //실행 종료 키워드
        } else if (data.next === "end") {
            //종료시키고 패스
            result["button_" + data.id].dataset["invenClickCss"] =  tempText + "}";

            return;
        //다음 대사 정하지 않음
        } else {
            line = indexArrKey(script,"id",data.next);
        }
        //배경화면
        if (line.background === "none")
            tempText += "," + "'mainscreen':{'height':'100%','backgroundImage':''}";
        else if (line.background !== "")
            tempText += "," + "'mainscreen':{'height':'100%','backgroundImage':'url(" + getImage(line.background) + ")'}";
        else
            tempText += "," + "'mainscreen':{'height':'100%'}";
        //이미지
        if (line.image1 === "none")
            tempText += "," + "'cha1':{'backgroundImage':''}";
        else if (line.image1 !== "")
            tempText += "," + "'cha1':{'backgroundImage':'url(" + getImage(line.image1) + ")'}";
        if (line.image2 === "none")
            tempText += "," + "'cha2':{'backgroundImage':''}";
        else if (line.image2 !== "")
            tempText += "," + "'cha2':{'backgroundImage':'url(" + getImage(line.image2) + ")'}";
        if (line.image3 === "none")
            tempText += "," + "'cha3':{'backgroundImage':''}";
        else if (line.image3 !== "")
            tempText += "," + "'cha3':{'backgroundImage':'url(" + getImage(line.image3) + ")'}";
        //이름
        if (line.name !== "") {
            tempText += "," + "'name_" + data.name + "':{'display':'none'}";
            tempText += "," + "'name_" + line.name + "':{'display':'block'}";
        } else {
            tempText += "," + "'name_" + data.name + "':{'display':'none'}";
        }

        //다음 대사
        tempText += "," + "'text_" + line.id + "':{'width':'100%','height':'100%'}";
        //다음 버튼
        tempText += "," + "'button_" + line.id + "':{'display':'block'}";

        //음악 출력
        setAudio(result["button_" + data.id], line.bgm);

        result["button_" + data.id].dataset["invenClickCss"] =  tempText + "}";
    });

    //선택지 상호작용
}


//==================================
//※ 출력
//==================================
function output() {
    textarea.value = result.wrapper.outerHTML;
    textarea.select();
    $("#notice").innerHTML = "작업 완료 (" + thousand(textarea.value.length) + "글자)";
}


//==================================
//※ 실행
//==================================
window.onload = function() {
    //리소스 세팅
    setResource();
    //틀 제작
    generate_wrapper();
    //대화 제작
    generate_script();
    //상호작용 제작
    generate_interact();

    //출력
    output();
}
