
let courses = [];
/* creat an empty array */

window.onload = () => {
    getCourses();


    document.querySelector("#filter").addEventListener("input", filterInput);
      /* Add eventlisterner to filter id that respond with input. */
    }
/* This happend when homepage load (call function getcourses) */

    async function getCourses() {
        try{
        const resp = await fetch ("https://webbutveckling.miun.se/files/ramschema_ht24.json")
        /* try to fetch (get) information from an api */
        if(!resp.ok) {

            throw new error("Kan inte läsa in")
        }

        /* if canot get information show error */
        courses = await resp.json();
          /* Put information we get from fetch into my empty array  */
        loadCourses(courses)
       /* call  function loadCourses  */
     
        } catch(error) {

            console.error(error);
        }
        /* Write out if any error in consolo log  */
    }

/* async function that get fetch data from an Api  */


    function loadCourses(courses) {

        const codeEl = document.querySelector("#course");
    /* creat a varible that store id #course */
        codeEl.innerHTML=""
        /* Cler codeEl innerhtml */
        courses.forEach(course => {
    
            codeEl.innerHTML += `<tr> <td>${course.code}</td> <td>${course.coursename}</td> <td>${course.progression}</td> </tr>`;

             /* Loop from the data we got from api a table with course.code , course.coursename and course.progression that in end look like 
             
             <tbody>
               <tr>
                <td>
                Course.code , course.coursname and course.progression
                </td>
                </tr>
             </tbody>
             
             */

});

let courseCodeEl = document.getElementById("courseCode")  
courseCodeEl.addEventListener("click", sortCourseCode )
/* creat a varible that store id #courseCode */
/* Add eventlister that on click call a function */

let courseNameEl = document.getElementById("courseName")  
courseNameEl.addEventListener("click", sortCourseName )
/* creat a varible that store id #courseName */
/* Add eventlister that on click call a function */

let courseProgEl = document.getElementById("courseProg")  
courseProgEl.addEventListener("click", sortcourseProg )
/* creat a varible that store id #courseProg */
/* Add eventlister that on click call a function */

 }

 function filterInput() {
    const filterValue = document.querySelector("#filter").value;
/* Create a Varible that store the id filter and look for value that input */
    const filterData = courses.filter(course => 
course.code.toLowerCase().includes(filterValue.toLowerCase()) ||
course.coursename.toLowerCase().includes(filterValue.toLowerCase()) ||
course.progression.toLowerCase().includes(filterValue.toLowerCase())


/* Create filter that works for lowercase and uppercase spelling when write in id filter */
/* it Check for course (code,coursname and progression) if anything matches */
    );

loadCourses(filterData)

/* Call function loadCourses*/
 }

function sortCourseCode() {

    
    const sortCode = courses
    /* create Varible that store information from courses*/
    sortCode.sort((a,b) => a.code > b.code ? 1 : -1)
        /* Sort sortCode.code when click on courseCode id in alphabetical order*/
    loadCourses(courses)
/* Call function loadCourses*/
}


function sortCourseName() {

    
    const sortName = courses
    /* create Varible that store information from courses*/
    sortName.sort((a,b) => a.coursename > b.coursename ? 1 : -1)
    /* Sort sortName.coursname when click on courseName id in alphabetical order*/
    loadCourses(courses)
/* Call function loadCourses*/
}



function sortcourseProg() {

    
    const sortProg = courses
    /* create Varible that store information from courses*/
    sortProg.sort((a,b) => a.progression > b.progression ? 1 : -1)
    /* Sort sortProg.progression when click on courseProg id in alphabetical order*/
    loadCourses(courses)
/* Call function loadCourses*/
}