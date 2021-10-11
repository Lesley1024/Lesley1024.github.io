var app = new Vue({
    el: '#wrapper',
    data: {
        lesson: getLesson()
    }
});

/**
 * get single lesson by queryParam "seq". 
 * if failed, navigate back to home page.
 * @returns {object} lesson
 */
function getLesson() {
    var lessons = window._global.lessons;
    try {
        var queryParams = new URLSearchParams(window.location.href.split('?')[1]);
        var seq = queryParams.get('seq');
        var lesson = lessons[lessons.findIndex(x => x.seq == seq)];
        return lesson;
    } catch (error) {
        window.location.href = '/';
        throw error;
    }
}