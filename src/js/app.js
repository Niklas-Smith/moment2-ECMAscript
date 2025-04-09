
let courses = [];

document.querySelector("#courseCode").addEventListener("click", sortCourseCode);

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

