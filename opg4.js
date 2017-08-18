function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        multi: function (x) {
            result *= x;
        }, 
        div: function (x) {
            result /= x;
        },
        pi: function (x) {
            result = Math.PI;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.pi()
console.log(calc.result());