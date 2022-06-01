// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (listDataBelanja) => {
  const result = [];
  for (let i = 0; i < listDataBelanja.length; i++) {
    jumlahBelanjaan = '- '+ listDataBelanja[i].nama +' x '+listDataBelanja[i].kuantitas
    // console.log(jumlahBelanjaan)
    result.push(jumlahBelanjaan)
  }
  return result;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (listDataBelanja) => {
  let result = 0;
  for (let i = 0; i < listDataBelanja.length; i++) {
    totalHarga = listDataBelanja[i].harga * listDataBelanja[i].kuantitas
    result += totalHarga;
  }
  return result;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
