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
// console.log(longestArray(["ab", "a", "abcd"]));
// console.log(longestArray(["ab", "ab", "ab"]));


// function longest_str_in_array(arra)
//   {
//     let max_str = arra[0].length;
//     let ans = arra[0];
//     for (let i = 1; i < arra.length; i++) {
//         const maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));
// console.log(longest_str_in_array(["ab", "ab", "ab"]));
