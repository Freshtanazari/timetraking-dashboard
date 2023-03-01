function weekly(){
    var a = document.querySelectorAll('#weekly');
    a.forEach((element) =>
    element.style.display="contents")
    var b = document.querySelectorAll('#daily');
    var c = document.querySelectorAll('#monthly');
    b.forEach((element) => {
        element.style.display="none";
    });
    c.forEach((element) => {
        element.style.display="none";
    });
};

function daily(){
    var a = document.querySelectorAll('#daily');
    a.forEach((element) =>
    element.style.display="contents")
    var b = document.querySelectorAll('#weekly');
    var c = document.querySelectorAll('#monthly');
    c.forEach((element) => {
        element.style.display="none";
    });
    b.forEach((element) => {
         element.style.display="none";
});
};

function monthly(){
    var a = document.querySelectorAll('#monthly');
    a.forEach((element) =>
    element.style.display="contents");
    var b = document.querySelectorAll('#weekly');
    var c = document.querySelectorAll('#daily');
    c.forEach((element) => {
        element.style.display="none";})
    b.forEach((element) => {
    element.style.display="none";})
};