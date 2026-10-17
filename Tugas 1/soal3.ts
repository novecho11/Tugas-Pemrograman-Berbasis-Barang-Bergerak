function isPrima(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n% i === 0) return false;
    }
    return true;
}
function cetakBilanganPrima(nim: string): void {
    const cleanNim = nim.trim();
    if(cleanNim.length < 2) {
        console.log("NIM tidak valid (minimal 2 digit).");
        return;
    }
    const digitAkhirStr =cleanNim.slice(-2);
    const digitAkhir =parseInt (digitAkhirStr,10);
    if(isNaN(digitAkhir)) {
        console.log("NIM Mengandung karakter yang bukan angka.");
        return;
    }
    const batas = digitAkhir + 10;
    const prima: number[] = [];
    for (let i = 2; i <= batas; i++) {
        if (isPrima(i)) {
            prima.push(i);
        }
    }
    console.log(`NIM                          : ${cleanNim}`);
    console.log(`2 Digit Terakhir             : ${digitAkhir}`);
    console.log(`Batas Akhir ( digit + 10)    : ${batas}`);
    console.log(`Bilangan prima  (1-${batas}) : ${prima}`);
}
const NIMgweh ="052473464";
console.log("=== Output untuk NIM" + NIMgweh + " ===");
cetakBilanganPrima(NIMgweh);