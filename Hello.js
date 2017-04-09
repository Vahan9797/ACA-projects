var sum = 18;

for (var i=1; i<=10; i++) {
	sum = summary(sum, i);
}

document.write(sum);

function summary(x, y) {
	return x + y;
}