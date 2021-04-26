let e = document.getElementsByClassName('exercise')[0];


var myLib = {
	math: {
		real: {
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
		},
		complex: {
            Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
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
/*
var answer = myLib.math.real.sub(
	myLib.math.real.add (20, 22), 
	myLib.math.real.mul(2,5));
var ans = myLib.math.matrix.times(
	myLib.math.matrix.eye (4), 
	myLib.math.complex.sub (
			new myLib.math.complex.Num (
				   myLib.math.real.add(5,2),
				   -3), 
			new myLib.math.complex.Num (3,4)
	)
);*/
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
let comp =myLib.math

answer = comp.real.sub(comp.real.add(20,22), comp.real.mul(2,5));
ans = comp.matrix.times(comp.matrix.eye(4), comp.complex.sub(new comp.complex.Num(comp.real.add(5,2), -3),
						new comp.complex.Num(3,4) ));


e.innerHTML += "<br/> <br/>";
e.innerHTML += "<p class = 'subtitle' > Without the with statement <p/>";
e.innerHTML += "var answer; <br/>";
e.innerHTML += "var ans; <br/>";
e.innerHTML += "let comp =myLib.math <br/>";

e.innerHTML += "answer = comp.real.sub(comp.real.add(20,22), comp.real.mul(2,5)); <br/>";
e.innerHTML += "ans = comp.matrix.times(comp.matrix.eye(4), comp.complex.sub(new comp.complex.Num(comp.real.add(5,2), -3), new comp.complex.Num(3,4) ));";
