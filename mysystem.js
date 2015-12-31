var os = require('os');

var message = 'Here is some info about system';

var sysarray = new Array( 'Type: '+os.type(),
                          'Node Version: '+process.version,
                          'Platform: '+os.platform(),
                          'Host Name: '+os.hostname(),
                          'Free Mem: '+os.freemem(),
                          'Uptime: '+os.uptime()
                        );

console.log(message);

var arraylen = sysarray.length;

i=0;

while(i<arraylen) {
  console.log(sysarray[i]);
  i++;
}
