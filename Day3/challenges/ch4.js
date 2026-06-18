const markssey = [
  { name: "Laya", mark: 99, subject: "Electronics" },
  { name: "Ponnu", mark: 699, subject: "Electronics" },
  { name: "Shira", mark: 25, subject: "Apparel" },
  { name: "Shoyei", mark: 80, subject: "Apparel" }
];
const marks = markssey.map(p => p.mark);

const maxmark = Math.max(...marks);
const minmark = Math.min(...marks);
const avgmark = marks.reduce((sum, p) => sum + p, 0) / marks.length;
console.log(`Maximum mark: ${maxmark}`);
console.log(`Minimum mark: ${minmark}`);
console.log(`Average mark: ${avgmark}`);
