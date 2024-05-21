function f(x) {
    if (x < 4) {
        return Math.sin(x);
    } else if (x === 4) {
        return x - 1;
    } else if (x > 4) {
        return Math.log10(x + 1); // Math.log10() обчислює логарифм за основою 10
    }
}

function calculate() {
    const start = parseFloat(document.getElementById('start').value);
    const end = parseFloat(document.getElementById('end').value);
    const step = parseFloat(document.getElementById('step').value);
    let results = '';

    for (let x = start; x <= end; x += step) {
        results += `f(${x}) = ${f(x).toFixed(4)}<br>`;
    }

    document.getElementById('results').innerHTML = results;
}