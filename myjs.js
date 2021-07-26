    window.onload = function(){
        showDate();
        getCurrentTime();
        showTips("username","请输入以下信息!!");
        imgrun();
        setTimeout(function(){alert0();},300);

    }
// 注册界面
    var timeId=null;
    function setStyle(x){
        document.getElementById(x).style.background="#bebebe";
    }
    function showTips(id,info){
        document.getElementById(id+"span").innerHTML=info;
    }
    
    function check(id){
        cleartimeid();
        timeId = window.setInterval(function(){checkuser(id,'←该位置不能为空')},100);
    }
    function compare(){
        var pw=document.getElementById("password").value;
        var pw2=document.getElementById("password2").value;
        cleartimeid();
        if(pw == 0){
            document.getElementById("password2span").innerHTML="请先输入密码";
            timeId = setTimeout("compare()",100);
            cleartimeid();
        }else if(pw==pw2){
            document.getElementById("password2span").innerHTML="";
            cleartimeid();
        }
        else{
            document.getElementById("password2span").innerHTML="两次输入的密码不一致";
            timeId = setTimeout("compare()",100);
        }
    }
    function checkuser(id,info){
        var uValue=document.getElementById(id).value;
        if(uValue==""){
            document.getElementById(id+"span").innerHTML=info;
        }else{
            document.getElementById(id+"span").innerHTML="";
        }
    }
    function cleartimeid(){
        if(timeId!=null){
            clearInterval(timeId);
            timeId=null;
        }
    }
// 简易播放器  
    var music = document.getElementById("myaudio");
    var title = document.getElementById("title");
    var setloop = document.getElementById("setloop");
    var list = new Array("music/歌曲1.mp3","music/歌曲2.mp3","music/歌曲3.mp3");
    var titlelist = new Array("隔岸观火","心安理得","庸人自扰");
    var i=0;
    var j=0;
    function toggleMusic(){
        if(music.paused){
            music.play();
        }else{
            music.pause();
        }
    }
    function nextMusic(){
        if(i ==list.length - 1){
            i = 0;
        }
        else{
          i++;
        }
        music.pause();
        music.src = list[i];
        title.innerHTML = titlelist[i];
        music.play();
    }
    function lastMusic(){
        if(i == 0){
            i =list.length - 1;
        }
        else{
          i--;
        }
        music.pause();
        music.src = list[i];
        title.innerHTML = titlelist[i];
        music.play();
    }
    function loop(){
        if(music.loop==true){
            music.loop=false;
            setloop.innerHTML="开启循环播放";
        }else{
            music.loop=true;
            setloop.innerHTML="关闭循环播放";
        }
    }
    music.addEventListener('ended', function () {   //自动切换歌曲
        if(j ==list.length - 1){
            j = 0;
        }
        else{
          j++;
        }
        music.src = list[j];
        title.innerHTML = titlelist[j];
        music.play();
    });
    
// 电子时钟
        var hour = document.getElementById("h");
        var minute = document.getElementById("m");
        var second = document.getElementById("s");
    function getCurrentTime(){
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if(h<10) h = "0"+h;
        if(m<10) m = "0"+m;
        if(s<10) s = "0"+s;
        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s;
    }
    setInterval("getCurrentTime()",1000);
    
//日历
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var month0 = today.getMonth() + 1;
        var day = today.getDate();
        var allday = 0;

        function count(){
            if(month !=2){
                if((month == 4)||(month == 6)||(month == 9)||(month == 11)){
                allday = 30;
                }else{
                    allday = 31;
                }
            }else{
                if(((year%4) == 0 && (year % 100) != 0) || (year % 400) == 0){
                    allday = 29;
                }else{
                    allday = 28;
                }
            }
        }

        function showMonth(){
            var year_Month = year + "年" + month + "月" ;
            document.getElementById("month").innerHTML = year_Month;
        }

        function showDate(){
            showMonth();
            count();
            var firstdate = new Date(year,month - 1,1);
            var xiqi = firstdate.getDay();
            var daterow = document.getElementById("day");
            daterow.innerHTML = "";
            if(xiqi != 0){
                for(var i =0;i < xiqi; i++){
                    var text = document.createTextNode("\u00A0");
                    var dayElement = document.createElement("div");
                    dayElement.appendChild(text);
                    dayElement.className = "everyday";
                    daterow.appendChild(dayElement);
                }
            }

            for(var j = 1;j <= allday;j++){
                var dayElement = document.createElement("div");
                dayElement.className = "everyday";
                dayElement.innerHTML = j + "";
                if(j == day &&month == month0){
                    dayElement.style.color = "white";
                    dayElement.style.backgroundColor = "gray";
                }
                daterow.appendChild(dayElement);
            }
        }

        function lastMonth(){
            if(month > 1){
                month -= 1;
            }else{
                month = 12;
                year -= 1;
            }
            showDate();
        }

        function nextMonth(){
            if(month < 12){
                month += 1;
            }else{
                month = 1;
                year += 1;
            }
            showDate();
        }
//DOM节点的添加与删除
        function run(){
            var li = document.createElement("li");
            var text = document.createTextNode("深圳");
            li.appendChild(text);
            li.setAttribute("id","sz");   //设置标签，否则删除时会出错
            var ul = document.getElementById("demo");
            ul.appendChild(li);

            // alert(ul.hasAttributes());
            // var num = document.getElementById("demo").getElementsByTagName('li').length;
            // alert(num);                                         //弹出li标签个数

            // var uls = document.getElementsByTagName("ul");	
            // var ul = uls[0];	
            // ul.appendChild(li);                              //有多个ul，不易区分
        }

        function add(){
            var li = document.createElement("li");
            var text = document.createTextNode("重庆");
            li.appendChild(text);
            li.setAttribute("id","cq");   //设置标签，否则删除时会出错
            var sh = document.getElementById("shId");
            if(sh == null){
                alert("上海标签已被删除，无法在上海标签前插入重庆标签");
            }else{
            var ul = sh.parentNode;
            ul.insertBefore(li,sh);
            }
        }

        //删除节点
        document.getElementById("demo").ondblclick = function(a) {
            var idd = document.getElementById(a.target.id);
            idd.parentNode.removeChild(idd);
        };

//弹窗案例
    function tan(){
        window.open("http://www.baidu.com","baidu","width=800px,height=400px");
    }

//图片随机移动
    var timeId2 = null;
    function imgrun(){
        var img = document.getElementById("imgId");
        // img.style.top = Math.random()*10 + "px";
        img.style.left = Math.random()*550 + 540 +"px";
        timeId2 = window.setTimeout("imgrun()",2000);
    }
    function stoprun(){
        var stoprun = document.getElementById("stoprun");
        if(timeId2!=null){
            window.clearTimeout(timeId2);
            timeId2 = null;
            stoprun.innerHTML = "开启图片移动";
        }else{
            stoprun.innerHTML = "暂停图片移动";
            imgrun();
        }
    }

//全选、全不选的前台案例
    //全选
    function selAll(){
        var inputs = document.getElementsByName("love");
        for(var i = 0; i < inputs.length;i++){
            var input = inputs[i];
            input.checked = true;	// 对象的属性
            input.setAttribute("checked","checked");	// 特性
        }
    }

    // 全不选
    function selNo(){
        var inputs = document.getElementsByName("love");
        for(var i = 0;i < inputs.length; i++){
            var input = inputs[i];
            input.checked = false;
            input.removeAttribute("checked");
        }
    }

    // 反选
    function selOth(){
        var inputs = document.getElementsByName("love");
        for(var i = 0; i < inputs.length;i++){
            var input = inputs[i];
            if(input.checked == true){
                input.checked = false;
            }else{
                input.checked = true;
            }
            // input.checked = !input.checked;
        }
    }
    //全选/全不选
    function selOrNo(){
        // 
        var input = document.getElementById("boxId");

        // 进行判断。如果input.checked == true,调用全选的方法
        if(input.checked == true){
            // 调用全选方法
            selAll();
        }else{
            selNo();
        }
    }

//列表的左右选择案例
    //选中添加到右边
    document.getElementById("add").onclick = function(){	
        var select2 = document.getElementById("select2");
        var select1 = document.getElementById("select1");
        var options = select1.getElementsByTagName("option");
        for(var i = 0;i < options.length;i++){
            var option = options[i];
            if(option.selected == true){
                select2.appendChild(option);
                i--;
            }
        }
    };

    // 全部添加到右边
    document.getElementById("add_all").onclick = function(){
        var select2 = document.getElementById("select2");
        var select1 = document.getElementById("select1");
        var options = select1.getElementsByTagName("option");
        for(var i = 0; i < options.length;i++){
            var option = options[i];
            select2.appendChild(option);
            i--;
        }
    };
    //选中添加到左边
    document.getElementById("remove").onclick = function(){
        var select2 = document.getElementById("select2");
        var select1 = document.getElementById("select1");
        var options = select2.getElementsByTagName("option");
        for(var i = 0;i < options.length;i++){
            var option = options[i];
            if(option.selected == true){
                select1.appendChild(option);
                i--;
            }
        }
    };
    //全部添加到左边
    document.getElementById("remove_all").onclick = function(){
        var select2 = document.getElementById("select2");
        var select1 = document.getElementById("select1");
        var options = select2.getElementsByTagName("option");

        for(var i = 0; i < options.length;i++){
            var option = options[i];
            select1.appendChild(option);
            i--;
        }
    };
    //双击从左边移到右边
    document.getElementById("select1").ondblclick = function(){
        var select2 = document.getElementById("select2");
        var select1 = document.getElementById("select1");
        var options = select1.getElementsByTagName("option");
        for(var i = 0;i < options.length;i++){
            var option = options[i];
            if(option.selected == true){
                select2.appendChild(option);
                i--;
            }
        }
    };
    //双击从右边移到左边
    document.getElementById("select2").ondblclick = function(){
        var select2 = document.getElementById("select2");
        var select1 = document.getElementById("select1");
        var options = select2.getElementsByTagName("option");
        for(var i = 0;i < options.length;i++){
            var option = options[i];
            if(option.selected == true){
                select1.appendChild(option);
                i--;
            }
        }
    };

//省市联动案例
    var arr = [];
    arr[0] = new Array("北京","海淀区","昌平区","朝阳区","东城区","西城区","丰台区","通州区","怀柔区");
    arr[1] = new Array("河北","石家庄","秦皇岛","衡水","邯郸","邢台","保定","廊坊","唐山");
    arr[2] = new Array("河南","郑州","南阳","安阳","焦作","洛阳","濮阳","新乡");
    arr[3] = new Array("山东","济南","青岛","烟台","威海","日照","泰安","菏泽","济宁");

    function show(val){
        var select3 = document.getElementById("select3");
        var options = select3.getElementsByTagName("option");
        for(var x = 0;x < options.length; x++){
            var op = options[x];
            select3.removeChild(op);
            x--;   //随着循环移动，option.length也在减少
        }

        for(var i = 0;i < arr.length; i++){
            var inarr = arr[i];
            var inStr = inarr[0];

            if(val == inStr){
                for(var j = 1; j < inarr.length;j++){
                    var value = inarr[j];
                    var option = document.createElement("option");
                    var text = document.createTextNode(value);
                    option.appendChild(text);
                    select3.appendChild(option);
                }
            }
        }
    }

// onload案例
    function alert0(){
        alert("计科1805班 孙奥欣 && 计科1805班 高晨龙");
    }

    function displaynone(z){
        if(z=="text1"){
            var text = document.getElementById(z).style.display;
            if(text=='block'){
                document.getElementById(z).style.display='none';
                document.getElementById("text").innerText="文本内容点击出现";
            }else{
                document.getElementById(z).style.display='block';
                document.getElementById("text").innerText="再次点击消失";
            }
        }else{
        document.getElementById('videomain').style.display='none';
        document.getElementById('questionnaire').style.display='none';
        document.getElementById('dom').style.display='none';
        document.getElementById('allselect').style.display='none';
        document.getElementById('listmove').style.display='none';
        document.getElementById('shengshild').style.display='none';
        document.getElementById(z).style.display='block';
    }
}

    function fengjing(){
        document.getElementById('videomain').style.display='none';
        document.getElementById('questionnaire').style.display='none';
        document.getElementById('dom').style.display='none';
        document.getElementById('allselect').style.display='none';
        document.getElementById('listmove').style.display='none';
        document.getElementById('shengshild').style.display='none';
        document.getElementById(z).style.display='block';
    }