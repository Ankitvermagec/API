/* jquery.inputfilter */
/* textfixer.com */


/* 

function validate() {
    var val = document.getElementById('textarea').value;
    if (/^\s*$/g.test(val)) {
        alert('Wrong content!');
    }
}


*/




// require("https://code.jquery.com/jquery-3.7.1.min.js")


{/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="../temp.js"></script> */}




// $('document').ready(function()
// {
//     $('textarea').each(function(){
//             $(this).val($(this).val().trim());
//         }
//     );
// });






var a="     8303000          394940    040304984   "
var b=["84985","938577","948775"]

/* b.forEach((value,index)=>{
    console.log(value ,b[index])
})
 */

// var result = a.replace(/^\s+|\s+$/, '');


var result = a.replace(/(\s\s\s*)/g, ' ')
// var result = a.replace(/^\s+|\s+$/gm,'')
// var result= a.strip()
console.log(result)

// console.log(a.trim())

// console.log(Array.isArray(a))

var input = "      hello world \t \n    hieoeni  kisnei \t \n  hieoeni";

var input=input.trim()
var  clean = input.trimEnd();
var  clean = clean.trimEnd();

// console.log(clean)


var str = "    hello world  ";

// prints "hello world" 
// console.log(str.replaceAll("^(\\s+)|(\\s+)$", ""));                           




