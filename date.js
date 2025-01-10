// const dt=new Date("2025-01-03")
// const dt1=new Date("2025")
// const dt2=new Date("2025-01-03T12:00:00Z")
// const dt3=new Date("Jul 18 2256")
// const dt4=new Date("8 Aug 4625")
// const dt5=Date.parse("March 5 2012")
// document.write('milliseconds:',dt5)

// document.write(dt)
// document.write('<br>')
// document.write(dt1)
// document.write('<br>')
// document.write(dt2)
// document.write('<br>')
// document.write(dt3)
// document.write('<br>')
// document.write(dt4)
// document.write('<br>')

// const dt6=new Date("2025-01-03")
// document.write(dt6.getFullYear());
// document.write('<br>');
// document.write(dt6.getMonth());
// document.write('<br>')

// const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// let month=months[dt.getMonth()];
// document.write(month)
// document.write('<br>')

// let date=dt.getDate();
// document.write(date)


// const d=new Date("2025-03-25")
// document.write(d.getHours())


const t=new Date;
// t.setFullYear(2026)
// t.setMonth(6)
// t.setDate(18)
t.setDate(t.getDate());
document.write(t)

let text=""
const today=new Date();
const someday=new Date();
someday.setFullYear(2100,0,14)
if(someday>today){
    text="Today is before January 14 2100"
}else{
    text="Today is after January 14 2100"
}document.write(text)