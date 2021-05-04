let e = document.getElementsByClassName('exercise')[0];


var myLib = {
	math: {
		real: {
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/
								console.log('executing real sub');},
			mul: function (a, b){ /*code goes here*/}
		},
		complex: {
            Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/
									console.log('executing complex sub');},
			mul: function (a, b){ /*code goes here*/}
              },
        matrix: {
	        add: function (a, b){ /*matrix addition*/},
	        sub: function (a, b){ /*matrix subtraction*/},
	        mul: function (a, b){ /*matrix multiplication*/},
	        eye: function (size){ /*identity matrix*/},
	        dot: function (m, a){ /*dot product*/},
	        times:function(a, b){ /*element-wise multiplication*/}
	       }
	}
};

// with "with" 
var answer;
var ans;
with (myLib.math) {
	answer = real.sub(real.add(20,22), real.mul(2,5));
	ans = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5,2), -3),
						new complex.Num(3,4) ));
  }

e.innerHTML += '<p class="subtitle" >With the with statement: <p/> ';
e.innerHTML += 'var answer; <br/>';
e.innerHTML += "var ans; <br/>";
e.innerHTML += "with (myLib.math) { <br/>";
e.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; answer = real.sub(real.add(20,22), real.mul(2,5)); <br/>";
e.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; ans = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5,2), -3), <br/>";
e.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; new complex.Num(3,4) )); <br/>";
e.innerHTML += "};";

// without with
var answer;
var ans;

var { add, sub, mul} = myLib.math.real;
answer = sub(add(20,22), mul(2,5))

var { matrix: {times, eye}, complex:{Num, sub}} = myLib.math;
ans = times(eye(4), sub(new Num(add(5,2), -3),
						new Num(3,4) ));

						e.innerHTML += "<br/> <br/>";
e.innerHTML += "<p class = 'subtitle' > Without the with statement <p/>";
e.innerHTML += "var answer; <br/>";
e.innerHTML += "var ans; <br/>";
e.innerHTML += "var { add, sub, mul} = myLib.math.real;<br/>";
e.innerHTML += "answer = sub(add(20,22), mul(2,5))<br/>";
e.innerHTML += "var { matrix: {times, eye}, complex:{Num, sub}} = myLib.math;<br/>";
e.innerHTML += "ans = times(eye(4), sub(new Num(add(5,2), -3), new Num(3,4) ));<br/>";
