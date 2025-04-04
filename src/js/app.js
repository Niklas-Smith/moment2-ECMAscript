
let courses = [];

window.onload = () => {
    getCourses();

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
    
        codeEl .innerHTML="" 
    
        courses.forEach(course => {
    
            codeEl.innerHTML += `<tr> <td>${course.code}</td> <td>${course.coursename}</td> <td>${course.progression}</td> </tr>`;

});

    
 }