const r = 4;
for (let i = 0; i <r; i++) {
  let line = " ";
  for (let j = 0; j <r; j++) {
    if (i + j > r && i - j >= 0) {
      line +=" * ";
    } else {
      line +=" ";
    }
  }
  console.log(line);
}
