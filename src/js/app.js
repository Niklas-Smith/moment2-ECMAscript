
let courses = [];


window.onload = () => {
    getCourses();


    document.querySelector("#filter").addEventListener("input", filterInput);

    }


    async function getCourses() {
        try{
        const resp = await fetch ("https://webbutveckling.miun.se/files/ramschema_ht24.json")
        if(!resp.ok) {

            throw new error("Kan inte läsa in")
        }
        courses = await resp.json();
        loadCourses(courses)

     
        } catch(error) {

            console.error(error);
        }
        
    }




    function loadCourses(courses) {

        const codeEl = document.querySelector("#course");
    
        codeEl.innerHTML=""
    
        courses.forEach(course => {
    
            codeEl.innerHTML += `<tr> <td>${course.code}</td> <td>${course.coursename}</td> <td>${course.progression}</td> </tr>`;

});

let courseCodeEl = document.getElementById("courseCode")  
courseCodeEl.addEventListener("click", sortCourseCode )

let courseNameEl = document.getElementById("courseName")  
courseNameEl.addEventListener("click", sortCourseName )

let courseProgEl = document.getElementById("courseProg")  
courseProgEl.addEventListener("click", sortcourseProg )

 }

 function filterInput() {
    const filterValue = document.querySelector("#filter").value;

    const filterData = courses.filter(course => 
course.code.toLowerCase().includes(filterValue.toLowerCase()) ||
course.coursename.toLowerCase().includes(filterValue.toLowerCase()) ||
course.progression.toLowerCase().includes(filterValue.toLowerCase())

    );

loadCourses(filterData)
 }

function sortCourseCode() {

    
    const sortCode = courses
    
    sortCode.sort((a,b) => a.code > b.code ? 1 : -1)
    loadCourses(courses)

}


function sortCourseName() {

    
    const sortName = courses
    
    sortName.sort((a,b) => a.coursename > b.coursename ? 1 : -1)
    loadCourses(courses)

}



function sortcourseProg() {

    
    const sortProg = courses
    
    sortProg.sort((a,b) => a.progression > b.progression ? 1 : -1)
    loadCourses(courses)

}