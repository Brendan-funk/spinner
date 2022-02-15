const frames = ['|','/','-','\\','|','/','-','\\','|'];
let delay = 100;
for(const frame of frames) {
  setTimeout(() => {
    process.stdout.write('\r'+frame+'   ');
  }, delay);
  delay += 200;
};
//note i had changed it to this before subbmitting spinner1 to make it cleaner