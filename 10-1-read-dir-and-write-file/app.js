/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');
const path = require('path');

function readDirAndWriteFile() {
  // Tulis jawaban di bawah ini
  const directoryPath = __dirname;

  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if(err) {
      return console.log('Unable to scan directory: ' + err);
    }

    const directories = files
      .filter(file => file.isDirectory())
      .map(dir => dir.name)

    directories.sort((a, b) => a.localeCompare(b));

    const outputPath = path.join(__dirname, 'out.txt');
    const outputData = directories.join(',');

    fs.writeFile(outputPath, outputData, (err) => {
      if(err) {
        return console.log('Unable to write file: ' + err);
      }
      console.log('Directory names have been written to out.txt');
    })
  });
}

readDirAndWriteFile();
