var sum = 0;

for (var i=1; i<=10; i++) {
	sum = add(sum, i);
}

document.write(sum);

function add(x, y) {
	return x + y;
}