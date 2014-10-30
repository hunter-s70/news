    var news = ['some text some text text ', 'some long text with newlines and another text ', 'another text '];
        i = 0;
        partOfArr = news[i];

        function alertArr() {
            i++;
            partOfArr = partOfArr + news[i];
            id = setInterval('alertElem()', 100);
        }

        id = setInterval('alertElem()', 100);
        j = 0;
        function alertElem() {
                part = partOfArr.substring(0, j);
                document.getElementsByClassName('input')[0].innerHTML = part;
                j++;
            if (part.length == partOfArr.length) {
                clearInterval(id);
                setTimeout('alertArr()', 5000);
            }
            if (j == partOfArr.length) {
                clearInterval(id);
            }
        }
    function quick () {
        clearInterval(id);
        id = setInterval('alertElem()', 20);
    }
