const addbtn2 = document.getElementById('add2');
// const couserCode = document.getElementById('course-code');
const courseUnit2 = document.getElementById('course-unit2');
// const grade = document.getElementById('grade');
const tbody2 = document.getElementById("tbody2");
const table2 = document.getElementById("table2");
const tfoot2 = document.getElementById("tfoot2");
// const calculateGp = document.getElementById('calc-gp');
const clear2 = document.getElementById('clear2')
var num = 0
let GpArray2 = [];

addbtn2.addEventListener('click',()=>{
  console.log(num)
    if(courseUnit2.value <= 0) {
        alert("Wrong Input Check And Try Again")
        // num = 0
    }else if(num>=10){
         alert('not more than 10 semesters')
    } else {
  num ++
        const tr = document.createElement('tr');
  //  const tdCourseCode = document.createElement('td');
   const tdunitLoad2 = document.createElement('td');
  //  const tdGrade = document.createElement('td');
// tdCourseCode.innerHTML = couserCode.value;
tdunitLoad2.innerHTML = courseUnit2.value;
// tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
// tr.appendChild(tdCourseCode); 
tr.appendChild(tdunitLoad2);
// tr.appendChild(tdGrade);
tbody2.appendChild(tr)
table2.classList.remove("display-none")
GpArray2.push({'unitLoad': courseUnit2.value})//getting user data
// clea up
// couserCode.value=''
courseUnit2.value=''
// grade.selectedIndex='0'
clear2.classList.remove("display-none");
let unitLoads2 = 0, productOfUnitLoadsAndGrades2 = 0, sumOfUnitsLoadsAndGrades2 = 0;

//calculating result
GpArray2.forEach(result => {
  arrL = GpArray2.length
    unitLoads2 += parseFloat(result.unitLoad);
    // productOfUnitLoadsAndGrades = parseInt(result.unitLoad) * parseInt(result.grade);
    // sumOfUnitsLoadsAndGrades += productOfUnitLoadsAndGrades;
});

// adding table foot data
const tr2 = document.createElement('tr');

tdTUL2 = document.createElement("td");
tdTUL2.innerHTML = ` GPA : ${(unitLoads2 / arrL).toFixed(2)}`;
// tdGpa= document.createElement("td");
// tdGpa.setAttribute('colspan', 1);
// tdGpa.innerHTML = ` GPA : ${(unitLoads / arrL).toFixed(2)}`;
tr2.appendChild(tdTUL2);
// tr2.appendChild(tdGpa);
tfoot2.innerHTML = ''
tfoot2.appendChild(tr2);
}
})

// clearBtn
clear2.addEventListener('click',()=>{
   GpArray2=[];
   num=0
   tbody2.querySelectorAll('*').forEach(child=> child.remove());
   if(tfoot2.querySelector('tr') !== null ) {
    tfoot2.querySelector('tr').remove();
   }
   table2.classList.add('display-none');
   clear2.classList.add('display-none');
   

})

