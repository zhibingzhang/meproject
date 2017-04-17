/**
 * Created by zhibin.zhang on 2016/7/14.
 */
/***************************************
*************微信摇一摇功能*************
 ***************************************/
var wx_shake = {
        shake: 5000,
        count: 0,
        last_update: 0,
        currTime: 0,
        diffTime: 0,
        speed: 0,
        acceleration:{},
        last_x: 0,
        last_y: 0,
        last_z: 0,
        x: 0,
        y: 0,
        z: 0,
        init: function(){
            window.DeviceMotionEvent?
                window.addEventListener("devicemotion",this.deviceMotionHandler,false):
                alert("本设备不支持devicemotion事件");
        },
        deviceMotionHandler: function(eventData){
            $(".mak").on("click",function(){
                //window.location.href = "follow.html";

                var probability = 0;
                if (probability) {
                    $(".apple-watch-page").hide();
                    $(".winning-page").show();
                    $(".notwinning").hide();
                    $(".activity-rule-page").hide();
                } else {
                    $(".apple-watch-page").hide();
                    $(".notwinning").show();
                    $(".winning-page").hide();
                }


            });
            //获取到手机x-y-z坐标值
            var me = this.wx_shake;
            me.acceleration = eventData.accelerationIncludingGravity;
            me.currTime = new Date().getTime();
            me.diffTime = me.currTime - me.last_update;
            if(me.diffTime > 100) {

                me.last_update = me.currTime;
                me.x = me.acceleration.x;
                me.y = me.acceleration.y;
                me.z = me.acceleration.z;

                me.speed = Math.abs(me.x + me.y + me.z - me.last_x - me.last_y - me.last_z) / me.diffTime * 10000;

                if (me.speed > me.shake) {
                    me.count++;
                    if (me.count === 1) {
                        var status = $(".apple-watch-page").parent().attr("class");
                        if (status == "swiper-slide prize-draw-page swiper-slide-active") {
                            var probability = 1;
                            if (probability) {
                                $(".apple-watch-page").hide();
                                $(".winning-page").show();
                                $(".notwinning").hide();
                                $(".activity-rule-page").hide();
                            } else {
                                $(".apple-watch-page").hide();
                                $(".notwinning").show();
                                $(".winning-page").hide();
                            }
                        }
                    } else if (me.count > 1) {
                        //alert("您今天的摇奖次数已用完，请明天再来！");
                    }
                }
                me.last_x = me.x;
                me.last_y = me.y;
                me.last_z = me.z;
            }
        },
        updatepage: function(){
        }
    };
/***************************************
 *************滚动列表的实现*************
 ***************************************/
var scroll_event = {
    speed: 60,
    init: function() {
        this.roll_event();
    },
    moveTop: function(){
        lists.offsetHeight-parseInt(lists.scrollTop)<=76? lists.scrollTop=0:lists.scrollTop++;
    },
    roll_event: function(){
        var me = this;
        var lists=document.getElementById("lists");
        var dlist_item=document.getElementById("list-item");
        var list_copy=document.getElementById("list-copy");
        list_copy.innerHTML=dlist_item.innerHTML;//复制节点
        var myFunction=setInterval(this.moveTop,this.speed);
        lists.onmouseover=function(){
            clearInterval(myFunction);
        };
        lists.onmouseout=function(){
            myFunction=setInterval(me.moveTop,me.speed);
        };
    }
};
/***************************************
 *************表单提交功能*************
 **************************************/
$("#userDataSubmit").on("click",function(event){
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue = false;
    }
        var regid = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,
            regids = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|[xX])$/,
        regPhone = /^1\d{10}$/,
        reguserName = /^[\u4E00-\u9FA5A-Za-z0-9_\s]+$/,
        regemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
        regaddress = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
        id = $(".cardId").val(),
        mobile = $(".mobile").val(),
        username = $(".username").val(),
        email = $(".mail").val(),
        address = $(".address").val(),
        error = "";
    if(id === ""){
        error +="身份证号不能为空\n";
    }else if((!regids.test(id))&&(!regid.test(id))){
        error +="身份证号格式不正确\n";
    }

    if(mobile === ""){
        error +="手机号不能为空\n";
    }else if(!regPhone.test(mobile)){
        error +="手机号格式不正确\n";
    }

    if(username === ""){
        error +="用户名不能为空\n";
    }else if(!reguserName.test(username)){
        error +="用户名由汉字，数字，26个英文字母，空格或下划线组成的字符串\n";
    }

    if(email === ""){
        error +="邮箱地址不能为空\n";
    }else if(!regemail.test(email)){
        error +="邮箱格式不正确\n";
    }

    if(address === ""){
        error +="家庭住址不能为空\n";
    }else if(!regaddress.test(address)){
        error +="家庭住址由汉字，数字组成的字符串\n";
    }

    if(error === ""){
        alert("提交成功");
        $(".fms").hide();
        $(".succeed").show();
    }else {
        alert(error);
    }

});
/***************************************
 *************表单更新功能*************
 **************************************/
$("#updage-Submit").on("click",function(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }

    var regPhone = /^1\d{10}$/,
        reguserName = /^[\u4E00-\u9FA5A-Za-z0-9_\s]+$/,
        regemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
        regaddress = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
        mobile = $(".mobile").val(),
        username = $(".username").val(),
        email = $(".mail").val(),
        address = $(".address").val(),
        error = "";

    if(mobile === ""){
        error +="手机号不能为空\n";
    }else if(!regPhone.test(mobile)){
        error +="手机号格式不正确\n";
    }

    if(username === ""){
        error +="用户名不能为空\n";
    }else if(!reguserName.test(username)){
        error +="用户名由汉字，数字，26个英文字母，空格或下划线组成的字符串\n";
    }

    if(email === ""){
        error +="邮箱地址不能为空\n";
    }else if(!regemail.test(email)){
        error +="邮箱格式不正确\n";
    }

    if(address === ""){
        error +="家庭住址不能为空\n";
    }else if(!regaddress.test(address)){
        error +="家庭住址由汉字，数字组成的字符串\n";
    }

    if(error === ""){
        $(".update-fms").hide();
        $(".update-succeed").show();
    }else {
        alert(error);
    }
});

/***************************************
 *************分享朋友圈*************
 **************************************/
$(document).ready(function(){

    $("#notwinning-share").on("click",function(){
        $("#mask-notwinning").show();
    });
    $("#succeed-btn").on("click",function(){
        $("#info-notwinning").show();
    });

    $(".masklayer").on("click",function(){
        $(".masklayer").hide();
    });

    /*************Updage分享朋友圈***********/
    $("#updage-share-btn").on("click",function(){
        $("#updage-mask").show();
    });

    $("#updage-notshare-btn").on("click",function(){

        $("#updage-notmask").show();
    });
    $(".rompt-btn").on("click",function(){
    $(".rompt-box").hide();
});
});
/***************************************
 *************格式处理*************
 **************************************/
$(document).ready(
    function(){
        var name = $("#list-item p .winning-info");
        for(var i = 0,arr=[]; i<name.length; i++){
            if(/^[\u4e00-\u9fa5]+$/i.test(name.eq(i).html())){

              arr.push(name.eq(i).html().substr(0,1));

            }else{

                arr.push(name.eq(i).html().split(" ")[0]);
            }
        }

    }
);





