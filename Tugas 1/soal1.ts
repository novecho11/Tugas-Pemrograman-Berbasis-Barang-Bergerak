function cetakSegitigaNIM(nim:string):void {
    const lastChar = nim.trim().slice(-1);
    const tinggi = parseInt(lastChar,10);

if (isNaN(tinggi) || tinggi <= 0) {
    console.log("Digit terakhir NIM tidak valid ( harus angka > 0),");
    return;
}

    console.log(`NIM: ${nim}`);
    console.log(`Digit Terakhir: ${tinggi}`);
    console.log(`Tinggi Segitiga: ${tinggi}\n`);
    console.log("Hasil Pola Segitiga:");

for (let i =1; i <= tinggi ; i++) {
    const baris : number [] = [];
    for (let j = 1; j <= i; j++) {
        baris.push(j);
    }
    console.log(baris.join(" "));
    }
}
const nim = "052473464"
cetakSegitigaNIM(nim);