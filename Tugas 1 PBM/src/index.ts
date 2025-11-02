console.log("Soal 1");
let nim1: string = "050138221";
let tinggi: number = parseInt(nim1[nim1.length - 1]);

console.log("Pola segitiga dengan tinggi", tinggi, "tingkat");
for (let i = 1; i <= tinggi; i++){
    let baris = "";
    for (let j = 1; j<=i; j++){
        baris += j + " ";
    }
    console.log(baris.trim());
}

console.log(" ");
console.log("Soal 2");
let nim2: string = "050138221";
let mulai: number = parseInt(nim2.slice(-2));
let step: number = parseInt(nim2[nim2.length - 3]) + 1;

console.log("Deret aritmatika yang dimulai dari ", mulai, ", dengan beda step", step);
let deret : number [] = [];
for (let i = 0; i< 10; i++){
    deret.push(mulai + i*step);
}
console.log(deret.join(", "));

console.log(" ");
console.log("Soal 3");
let nim3: string = "050138221";
let batasAkhir: number = parseInt(nim3.slice(-2)) + 10;

function iniPrima(n: number): boolean{
    if (n<2) return false;
    for (let i = 2; i<Math.sqrt(n); i++){
        if (n % i === 0) return false;
    }
    return true;
}

let prima:number[] = [];
for(let i = 1; i <= batasAkhir; i++){
    if (iniPrima(i)) prima.push(i);
}

console.log(prima.join(", "))
