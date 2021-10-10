var videos = [
    "https://www.youtube.com/embed/wnCDhf6Ahw8",
    "https://www.youtube.com/embed/6kTi7cVwXZ0",
    "https://www.youtube.com/embed/18DhaHf5fIE",
    "https://www.youtube.com/embed/5Fl711QMBuI"
];

(function ($) {
    var wrap = document.getElementById("video-wrap");
    videos.forEach(url => {
        var el = createVideoElement(url);
        wrap.appendChild(el);
    });
})(jQuery);

/**
 * generate youtube iframe node with div.video-container
 * @param {string} url youtube embed link
 * @returns {HTMLDivElement} video container
 */
function createVideoElement(url) {
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    var container = document.createElement("div");
    container.classList=["video-container"];
    container.appendChild(iframe);

    return container;
}