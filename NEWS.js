news = 'Hello Sergey';
    setInterval('alertElem()', 100);
    i=0;
        function alertElem() {
            document.getElementsByClassName('input')[0].innerHTML=news.substring(0, i);
            i++;
        }
