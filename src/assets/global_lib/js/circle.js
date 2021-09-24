var horizontals = document.querySelectorAll('#identify-circles path');//get all pathes from svg

for (var i = 1; i < horizontals.length; i++ ) {//get second path inside svg
   var path = horizontals[i],
   length = path.getTotalLength();
   per = 8;//percentage -- 460 = 8% from 500(100%)
   count = (length/100)*per;
   path.style.strokeDasharray = length;
   path.style.strokeDashoffset = count;
}
