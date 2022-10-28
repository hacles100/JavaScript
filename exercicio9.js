    // list = ["Hello", "world", "in", "a", "frame"]

function dmeu(myList) {

    // myList.length = 0

    for(i in myList) {
        myList[i] = myList.length;
    }

    return myList.length;
}

