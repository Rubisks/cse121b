function getGrades(){

    const grades = document.querySelector("#grades").value;

    const gradesArray = grades.split(',');

    const goodGrades =gradesArray.map((grade)=>grade.trim().toUpperCase());

    return goodGrades;
}
function getGradePoint(grade){
    if (grade === 'A'){
        return 4;
    }
    else if (grade === 'B'){
        return 3;
    }
    else if (grade === 'C'){
        return 2;
    }
    else if (grade === 'D'){
        return 1;
    }
    else {
        return 0;
    }

}

function calculateGpa(grades){
    const points = grades.map((grade)=> getGradePoint(grade));
    const gpa = points.reduce((total,num)=> total +num)/points.length;
    return gpa;
}

function outputGpa(gpa){
    document.querySelector('#output').innerText =gpa
}


function clickHandler(){
    const grades = getGrades();
    console.log(grades);
    const gpa = calculateGpa(grades);
    console.log(gpa)
    outputGpa(gpa)
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);