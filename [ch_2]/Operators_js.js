
/* Operators.html 파일과 연동되어있음 */

var num1 = 10;
        var num2 = 20;
        var num3 = 3;
        var num4 = "10";
        var result;

        result1 = num1 == num4;  // result1 = true. data type은 무시한다.
        result2 = num1 === num4;  // result2 = false
        result3 = true && false || true && false;   // &&끼리 먼저 연산 하고 마지막에 || 한다.
                                                    // 즉, false || false 여서 result3 = false
        result4 = num1 < num2 && num1 == num4 || true && false;  // true && true || false 여서 result4 = true       
        document.write(result1, "<br>");
        document.write(result2, "<br>");
        document.write(result3, "<br>");
        document.write(result4, "<br>");
        
        var num = prompt("숫자를 입력하세요.", "0");  // 입력창의 기본 값을 0으로 설정
        num_result = num % 2 == 0 ? "짝수" : "홀수";
        document.write(num_result, "<br>");