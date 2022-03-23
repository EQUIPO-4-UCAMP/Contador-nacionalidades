const arr = ["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]
const resultado = arr.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
console.log(resultado)