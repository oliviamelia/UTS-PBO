class Cuti {
    constructor(jenisCuti, maxKuota) {
        this.jenisCuti = jenisCuti;
        this.maxKuota = maxKuota;
        this.namaKaryawan = "";
    }

ajukanCuti(jumlahHari) {
     if (jumlahHari <= this.maxKuota) {
      return `Cuti ${this.jenis} selama ${jumlahHari} hari untuk ${this.namaKaryawan} disetujui.`;
    } else {
      return   `Kuota ${this.namaKaryawan} tidak cukup untuk mengajukan cuti ini.`;
    }
  }
}

class CutiTahunan extends Cuti {
  constructor() {
    super("Tahunan", 12);
  }
}

class CutiSakit extends Cuti {
  constructor() {
    super("Sakit", 2);
  }
}

class CutiMelahirkan extends Cuti {
  constructor() {
    super("Melahirkan", 90);
  }
}

class Karyawan {
  constructor(nama, peran) {
    this.nama = nama;
    this.peran = peran;
  }

ajukan(cuti, jumlahHari) {
    cuti.namaKaryawan = this.nama;

    console.log(`\n${this.nama} (${this.peran}) mengajukan cuti ${cuti.jenis}`);
    console.log(cuti.ajukanCuti(jumlahHari));
  }
}

const kinci = new Karyawan("Kinci", "Staff");
const sinci = new Karyawan("Sinci", "Manajer");

const cutiTahunan = new CutiTahunan();
const cutiSakit = new CutiSakit();
const cutiMelahirkan = new CutiMelahirkan();

kinci.ajukan(cutiTahunan, 10);
kinci.ajukan(cutiSakit, 5);
sinci.ajukan(cutiMelahirkan, 90);