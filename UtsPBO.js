class Cuti {
  constructor(jenisCuti, maxKuota) {
    this.jenisCuti = jenisCuti;
    this.maxKuota = maxKuota;
    this.namaKaryawan = "";
  }

  ajukanCuti(jumlahHari) {
    if (jumlahHari > this.maxKuota) {
      return `Maaf ${this.namaKaryawan}, kuota cuti ${this.jenisCuti} kamu tidak mencukupi (maksimal ${this.maxKuota} hari).`;
    } else {
      return `Pengajuan cuti ${this.jenisCuti} selama ${jumlahHari} hari untuk ${this.namaKaryawan} berhasil disetujui.`;
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
    super("Sakit", 3);
  }
}

class CutiMelahirkan extends Cuti {
  constructor() {
    super("Melahirkan", 90);
  }
}

class Karyawan {
  constructor(nama, jabatan) {
    this.nama = nama;
    this.jabatan = jabatan;
  }

  ajukan(cuti, jumlahHari) {
    cuti.namaKaryawan = this.nama;

    console.log(`\n ${this.nama} (${this.jabatan}) mengajukan cuti ${cuti.jenisCuti}.`);
    console.log(cuti.ajukanCuti(jumlahHari));
  }
}

// ==== Contoh Penggunaan ====
const olivia = new Karyawan("olivia", "Staf HRD");
const lani = new Karyawan("Lani", "Kepala Divisi");

const tahunan = new CutiTahunan();
const sakit = new CutiSakit();
const melahirkan = new CutiMelahirkan();

olivia.ajukan(tahunan, 7);
olivia.ajukan(sakit, 5);
lani.ajukan(melahirkan, 90);
