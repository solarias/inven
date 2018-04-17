
//각종 수치
let titleInfo = titlelist[0];
let audios = {};
let images = {};
let result;
let textarea = $("#textarea");

//==================================
//※ 틀 제작
//==================================
function generate_wrapper() {
    //출력용 묶음
    let obj = {};

    //전체 틀
    obj.wrapper = document.createElement("div");
        obj.wrapper.id = "wrapper";
        obj.wrapper.dataset["invenId"] = "wrapper";
        Object.assign(obj.wrapper.style,jsstyle.wrapper)

    //스크린 틀, 캐릭터 틀
    obj.screen = document.createElement("div");
        obj.screen.id = "screen";
        obj.screen.dataset["invenId"] = "screen";
        Object.assign(obj.screen.style,jsstyle.screen)
    obj.cha1 = document.createElement("div");
        obj.cha1.id = "cha1";
        obj.cha1.dataset["invenId"] = "cha1";
        Object.assign(obj.cha1.style,jsstyle.cha1)
    obj.cha2 = document.createElement("div");
        obj.cha2.id = "cha2";
        obj.cha2.dataset["invenId"] = "cha2";
        Object.assign(obj.cha2.style,jsstyle.cha2)
    obj.cha3 = document.createElement("div");
        obj.cha3.id = "cha3";
        obj.cha3.dataset["invenId"] = "cha3";
        Object.assign(obj.cha3.style,jsstyle.cha3)

    obj.wrapper.appendChild(obj.screen);
        obj.screen.appendChild(obj.cha1);
            obj.cha1.appendChild(obj.cha2);
            obj.cha2.appendChild(obj.cha3);

    //선택지 틀
    obj.selectframe = document.createElement("div");
        obj.selectframe.id = "selectframe";
        obj.selectframe.dataset["invenId"] = "selectframe";
        Object.assign(obj.selectframe.style,jsstyle.selectframe);

    obj.selecthead = document.createElement("div");
        obj.selecthead.id = "selecthead";
        obj.selecthead.dataset["invenId"] = "selecthead";
        Object.assign(obj.selecthead.style,jsstyle.selecthead);

        obj.selecthead.innerHTML = "선택하세요";

    obj.cha3.appendChild(obj.selectframe);
    obj.selectframe.appendChild(obj.selecthead);

    //대사 틀
    obj.dialog_name = document.createElement("div");
        obj.dialog_name.id = "dialog_name";
        obj.dialog_name.dataset["invenId"] = "dialog_name";
        Object.assign(obj.dialog_name.style,jsstyle.dialog_name)
    obj.dialog_text = document.createElement("div");
        obj.dialog_text.id = "dialog_text";
        obj.dialog_text.dataset["invenId"] = "dialog_text";
        Object.assign(obj.dialog_text.style,jsstyle.dialog_text)

    obj.cha3.appendChild(obj.dialog_name);
    obj.cha3.appendChild(obj.dialog_text);

    //타이틀스크린 틀
    obj.titlescreen = document.createElement("div");
        obj.titlescreen.id = "titlescreen";
        obj.titlescreen.dataset["invenId"] = "titlescreen";
        Object.assign(obj.titlescreen.style,jsstyle.titlescreen)

        if (titleInfo.color) obj.titlescreen.style.backgroundColor = titleInfo.color;
        if (titleInfo.titlescreen) obj.titlescreen.style.backgroundImage = "url(" + titleInfo.titlescreen + ")";
    obj.title = document.createElement("div");
        obj.title.id = "title";
        obj.title.dataset["invenId"] = "title";
        Object.assign(obj.title.style,jsstyle.title)

        if (titleInfo.title) obj.title.innerHTML = titleInfo.title;
    obj.start = document.createElement("button");
        obj.start.id = "start";
        obj.start.dataset["invenId"] = "start";
        Object.assign(obj.start.style,jsstyle.start)
        obj.start.innerHTML = "시작하기"

    obj.cha3.appendChild(obj.titlescreen);
        obj.titlescreen.appendChild(obj.title);
        obj.titlescreen.appendChild(obj.start);

    //유튜브, 진행버튼 틀
    obj.youtube = document.createElement("iframe");
        obj.youtube.id = "youtube";
        obj.youtube.name = "youtube";
        obj.youtube.dataset["invenId"] = "youtube";
        obj.youtube.src = "https://www.youtube.com/embed/vhqnIWyNV6c?rel=0&amp;controls=0&amp;autoplay=1";
        Object.assign(obj.youtube.style,jsstyle.youtube)
    obj.buttons = document.createElement("button");
        obj.buttons.id = "buttons";
        obj.buttons.dataset["invenId"] = "buttons";
        Object.assign(obj.buttons.style,jsstyle.buttons),
        obj.buttons.innerHTML = "다음 >>";

    obj.wrapper.appendChild(obj.youtube);
    obj.wrapper.appendChild(obj.buttons);

    //wrapper 반환
    return obj;
}

//==================================
//※ 대사 & 선택지 제작
//==================================

//대사 제작


//선택지 제작

/*
let selectframe = document.createElement("div");
selectframe.id = "selectframe";
selectframe.dataset["invenId"] = "selectframe";
Object.assign(selectframe.style,jsstyle.selectframe);

let selecthead = document.createElement("div");
selecthead.id = "selecthead";
selecthead.dataset["invenId"] = "selecthead";
Object.assign(selecthead.style,jsstyle.selecthead);

selecthead.innerHTML = "선택하세요";

selectframe.appendChild(selecthead);

let select = document.createElement("div");
select.id = "select";
select.dataset["invenId"] = "select";
Object.assign(select.style,jsstyle.select);

select.innerHTML = "◎ 탐험가 연맹 뱃지"
select.dataset["invenOverCss"] = "{'_SELF_':" + JSON.stringify(jsstyle.select_over) + "}";
select.dataset["invenOutCss"] = "{'_SELF_':" + JSON.stringify(jsstyle.select_out) + "}";

selectframe.appendChild(select);
*/

//==================================
//※ 리소스 관련
//==================================
function setResource() {
    //오디오 세팅
    audiolist.forEach(function(x) {
        audios[x.name] = x.url;
    });
    //이미지 세팅
    imagelist.forEach(function(x) {
        images[x.name] = x.url;
    });
}

function playAudio(target, name) {
    target.target = "youtube";
    target.href = audio[name] + "?rel=0&amp;controls=0&amp;autoplay=1";
}

//==================================
//※ 버튼 제작
//==================================
//시작 버튼 상호작용


//버튼 제작


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
    //틀 제작
    result = generate_wrapper();
    //리소스 세팅
    setResource();

    //출력
    output();
}
