
wx.ready(function () {

    //wx.checkJsApi({
    //    jsApiList: [
    //      'onMenuShareTimeline',
    //      'onMenuShareAppMessage'
    //    ],
    //    success: function (res) {
    //         //alert(JSON.stringify(res));
    //    }
    //});

    function getShareData(shareType) {
        return shareData = {
            title: 'Apple Watch 天天免费送',
            desc: '试试摇一摇,Apple Watch 离你更进一步，让惊喜升级！',
            link: 'http://event.anruichina.com/zzbh5/test/',
            //link: 'http://wechat.anruichina.com/AppleWatch/',
            imgUrl: 'http://wechat.anruichina.com/apple-watch/images/weixin.jpg',
            complete: function (res) {
                //alert(JSON.stringify(res));
            },
            success: function (res) {
                shareConfirm(shareType);
            },
            cancel: function (res) {
                shareCancel(shareType);
            },
            fail: function (res) {
                shareFail(shareType);
            }
        };
    }


    function shareCancel(type) {

    }

    function shareFail(type) {

    }

    function shareConfirm(type) {
        $.ajax({
            url: "home/share",
            type: 'post',
            datatype: 'json',
            data: { type: type },
            success: function (data) {

                config.leftCount = data.Status;
                if (data.Status > 0) {
                    location.reload();
                }
                //else {
                //    alert("分享失败。")
                //}
            }
        });
    }


    wx.onMenuShareAppMessage(getShareData(1));
    wx.onMenuShareTimeline(getShareData(2));
    wx.onMenuShareQQ(getShareData(3));
});

wx.error(function (res) {
    // alert(res.errMsg);
});
