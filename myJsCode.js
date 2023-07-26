
const List1=["Arjun", 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
const List2=[ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"];

let uniqueElList1=List1.filter((el)=>List2.includes(el)===false);
console.log(uniqueElList1);

let uniqueElList2=List2.filter((el)=>List1.includes(el)===false);
console.log(uniqueElList2);

let commonEl = List2.filter((el)=>List1.includes(el));
console.log(commonEl);