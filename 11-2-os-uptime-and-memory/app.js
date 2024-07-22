const os = require('os');

setTimeout(() => {
  // @TODO cetak uptime dari process
  console.log(process.uptime());
  // @TODO cetak uptime dari sistem operasi
  console.log(os.uptime());
  // @TODO cetak total memori yang tersedia di sistem operasi
  console.log(os.totalmem()); 
  // @TODO cetak total heap memori
  console.log(process.memoryUsage().heapTotal); 
}, 1000);
