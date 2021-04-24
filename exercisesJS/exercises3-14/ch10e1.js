let e = document.getElementsByClassName('exercise')[0];

e.innerHTML += 'ready to code';

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

