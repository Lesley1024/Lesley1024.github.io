/** initialize global variables */
(function () {
    if (window._global && window._global.lessons) return;

    window._global = {};
    window._global.lessons = [
        {
            seq: 1,
            title: "大標題敘述1",
            subTitle: "簡述內容區簡述內容區1",
            url:{
                video:"https://www.youtube.com/embed/wnCDhf6Ahw8",
                detail:`/detail.html?seq=1`
            },
            imgList: [],
            content: ""
        },
        {
            seq: 2,
            title: "大標題敘述2",
            subTitle: "簡述內容區簡述內容區2",
            url:{
                video:"https://www.youtube.com/embed/18DhaHf5fIE",
                detail:`/detail.html?seq=2`
            },
            imgList: [],
            content: ""
        },
        {
            seq: 3,
            title: "大標題敘述3",
            subTitle: "簡述內容區簡述內容區3",
            url:{
                video:"https://www.youtube.com/embed/5Fl711QMBuI",
                detail:`/detail.html?seq=3`
            },
            imgList: [],
            content: ""
        }
    ];
})();
