function longestArray(elem){

    var max_str = elem[0].length;
    var ans = elem[0];

    for (var i = 1; i < elem.length; i++) {
        var maxi = elem[i].length;
        if (maxi > max_str) {
            ans = elem[i];
            max_str = maxi;
        }
    }
    return ans;
}
