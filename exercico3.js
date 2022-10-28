function myConcat(myList, concatNumber) {

    for(i in myList) {
        myList[i] = myList[i] + concatNumber;
    }

    return myList;
}

