news = 'some text some text text some long text with newlines and another text another text';
    setInterval('alertElem()', 100);
    i=0;
        function alertElem() {
            document.getElementsByClassName('input')[0].innerHTML=news.substring(0, i);
            i++;
        }
