function cetakDeretAritmatika(nim: string , jumlahSuku: number = 10): void {
    const cleanNim = nim.trim();

    if (cleanNim.length < 3) {
        console.log("NIM tidak valid ( minimal 3 digit).")
        return;
    }
    const digitAwalStr = cleanNim.slice(-2);
    const start = parseInt(digitAwalStr,10);
    const digitKe3Str = cleanNim.slice(-3, -2);
    const digitke3 = parseInt(digitKe3Str, 10);

    if (isNaN(start) || isNaN(digitke3)) {
        console.log("NIM mengandung karakter yang bukan angka.");
        return;
    }
    const beda = digitke3 + 1;
    const deret : number[] = [];
    for (let i = 0 ; i < jumlahSuku; i++){
            deret.push(start + (i* beda));
    }
    console.log(`NIM                     : ${cleanNim}`);
    console.log(`2 Digit Terakhir (Start): ${start}`);
    console.log(`Digit ke-3 dari belakang: ${digitke3}`);
    console.log(`Beda / Step(digit + 1)  : ${beda}`);
    console.log(`Output Deret Aritmatika : ${deret.join(",")}`);
}
const NIM = "052473464" 
console.log("=== Output untuk NIM "+ NIM + " ===");
cetakDeretAritmatika(NIM)  