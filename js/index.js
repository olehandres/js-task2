const n = +prompt('Enter num');
while(n < 1) {
    alert('enter > 0');
    n = +prompt('Enter num');
}

function fibonacci(n) {

	if (n < 1)
		return 0;

	if (n <= 2)
		return 1;

   return fibonacci(n - 1) + fibonacci(n - 2);
}
alert(fibonacci(n));