const dt=new Date("2025-01-03")
const dt1=new Date("2025")
const dt2=new Date("2025-01-03T12:00:00Z")
const dt3=new Date("Jul 18 2256")
const dt4=new Date("8 Aug 4625")
const dt5=Date.parse("March 5 2012")
document.write('milliseconds:',dt5)

document.write(dt)
document.write('<br>')
document.write(dt1)
document.write('<br>')
document.write(dt2)
document.write('<br>')
document.write(dt3)
document.write('<br>')
document.write(dt4)
document.write('<br>')

const dt6=new Date("2025-01-03")
document.write(dt6.getFullYear());
document.write('<br>');
document.write(dt6.getMonth());
document.write('<br>')

const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
let month=months[dt.getMonth()];
document.write(month)
document.write('<br>')

let date=dt.getDate();
document.write(date)
