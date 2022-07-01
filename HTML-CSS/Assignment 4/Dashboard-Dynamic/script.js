let courses=[{
    "title":"Acceleration",
    "subject":"Physics |",
    "Grade":"Grade 7",
    "extra":"+2",
    "units":4,
    "lessons":18,
    "topics":24,
    "options":["Mr Frank's Class A","Mr Frank's Class B","All Classes","No Classes"],
    "students":"50 Students |",
    "duration":"21-Jan-2020 - 21-Aug-2020",
    "courseImage":"./images/imageMask-1.svg",
    "preview":"./images/preview.svg",
    "manage":"./images/managecourse.svg",
    "grade":"./images/gradesubmissions.svg",
    "report":"./images/reports.svg",
    "starred":true,
    "starImage":"./images/favourite.svg",
    "expired":true
},{
    "title":"Displacement, Velocity and Speed",
    "subject":"Physics 2 |",
    "Grade":"Grade 6",
    "extra":"+3",
    "units":2,
    "lessons":15,
    "topics":20,
    "options":["Mr Frank's Class A","Mr Frank's Class B","All Classes","No Classes"],
    "students":"50 Students |",
    "duration":"21-Jan-2020 - 21-Aug-2020",
    "courseImage":"./images/imageMask-1.svg",
    "preview":"./images/preview.svg",
    "manage":"./images/managecourse.svg",
    "grade":"./images/gradesubmissions.svg",
    "report":"./images/reports.svg",
    "starred":true,
    "starImage":"./images/favourite.svg",
    "expired":false
}]


let container=document.getElementById('courses-container')
let div=document.createElement('div')

courses.forEach(course=>{
    let div1=document.createElement('div')
    div1.classList.add("course-card")

    let div2=document.createElement('div')
    div2.classList.add("standard-info")

    let div3=document.createElement('div')
    div3.classList.add("course-image")

    let img1=document.createElement('img')
    img1.classList.add("course-image")
    img1.setAttribute("src",course.courseImage)
    img1.setAttribute("alt","course image")

    div3.appendChild(img1)
    div2.appendChild(div3)
    div1.appendChild(div2)
    //Keep updating below
    container.appendChild(div1)
    //Keep updating above

    let div4=document.createElement('div')
    div4.classList.add("course-info")

    let div5=document.createElement('div')
    div5.classList.add("course-title")

    let h3=document.createElement("h3")
    h3.innerHTML=course.title
    h3.classList.add("course-title")

    if(course.starred){
        let img2=document.createElement('img')
        img2.classList.add("favourite")
        img2.setAttribute("src",course.starImage)
        img2.setAttribute("alt","favourite")

        h3.appendChild(img2)
    }

    div5.appendChild(h3)
    div4.appendChild(div5)

    //Keep updating below
    div2.appendChild(div4)
    div1.appendChild(div2)
    //Keep updating above
    

    let div6=document.createElement('div')
    div6.classList.add("course-eligibility")

    let span1=document.createElement('span')
    span1.innerHTML=course.subject

    let span2=document.createElement('span')
    span2.innerHTML=course.Grade

    let span3=document.createElement('span')
    span3.innerHTML=course.extra
    span3.classList.add("extra")

    div6.appendChild(span1)
    div6.appendChild(span2)
    div6.appendChild(span3)

    div4.appendChild(div6)

    let div7=document.createElement('div')
    div7.classList.add("course-content-info")

    let span4=document.createElement('span')
    span4.innerHTML="<strong>"+course.units+"</strong> Units "

    let span5=document.createElement('span')
    span5.innerHTML="<strong>"+course.lessons+"</strong> Lessons "
    // span5.innerHTML(" Lessons")

    let span6=document.createElement('span')
    span6.innerHTML="<strong>"+course.topics+"</strong> Topics"
    // span6.innerHTML(" Topics")



    div7.appendChild(span4)
    div7.appendChild(span5)
    div7.appendChild(span6)

    div4.appendChild(div7)

    let div8=document.createElement('div')
    div8.classList.add("option-datalist")

    let input=document.createElement("input")
    input.classList.add("option-select-class")
    input.setAttribute("list","options-class")
    input.setAttribute("name","options-class")

    div8.appendChild(input)
    let datalist=document.createElement("datalist")
    datalist.setAttribute("id","options-class")

    let options=course.options
    options.forEach(op=>{
        var option = document.createElement('option');
        option.value=op
        datalist.appendChild(option)
    })

    div8.appendChild(datalist)
    div4.appendChild(div8)

    let div9=document.createElement('div')
    div9.classList.add("course-schedule-info")
    let span7=document.createElement('span')
    span7.innerHTML=course.students
    let span8=document.createElement('span')
    span8.innerHTML=course.duration

    div9.appendChild(span7)
    div9.appendChild(span8)

    div4.appendChild(div9)

    let div10=document.createElement('div')
    div10.classList.add("course-actions")

    let div11=document.createElement('div')
    div11.setAttribute("role","button")
    let img3=document.createElement('img')
    img3.setAttribute("src",course.preview)
    img3.setAttribute("alt","course preview")
    div11.appendChild(img3)
    div10.appendChild(div11)


    let div12=document.createElement('div')
    div12.setAttribute("role","button")
    let img4=document.createElement('img')
    img4.setAttribute("src",course.manage)
    img4.setAttribute("alt","course manage")
    div12.appendChild(img4)
    div10.appendChild(div12)

    let div13=document.createElement('div')
    div13.setAttribute("role","button")
    let img5=document.createElement('img')
    img5.setAttribute("alt","course grade")
    img5.setAttribute("src",course.grade)
    div13.appendChild(img5)
    div10.appendChild(div13)

    let div14=document.createElement('div')
    div14.setAttribute("role","button")
    let img6=document.createElement('img')
    img6.setAttribute("alt","course report")
    img6.setAttribute("src",course.report)
    div14.appendChild(img6)
    div10.appendChild(div14)

    div1.appendChild(div10)

    if(course.expired){
        let div15=document.createElement('div')
        div15.classList.add("expired")

        let span9=document.createElement('span')
        span9.innerHTML="EXPIRED"

        div15.appendChild(span9)

        div1.appendChild(div15)
    }
})