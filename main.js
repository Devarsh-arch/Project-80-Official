display_student_name = [];
function submit(){
    name_1 = document.getElementById("input_1").value
    name_1 = name_1 + " "
    display_student_name.push(name_1)
    name_2 = document.getElementById("input_2").value
    name_2 = name_2 + " "
    display_student_name.push(name_2)
    name_3 = document.getElementById("input_3").value
    name_3 = name_3 + " "
    display_student_name.push(name_3)
    name_4 = document.getElementById("input_4").value
    name_4 = name_4 + " "
    display_student_name.push(name_4)
    name_5 = document.getElementById("input_5").value
    name_5 = name_5 + " "
    display_student_name.push(name_5)
    name_6 = document.getElementById("input_6").value
    display_student_name.push(name_6)

    console.log(display_student_name)
    document.getElementById("display_name_1").innerHTML = display_student_name;
}

function sort_it(){
    display_student_name_sort = display_student_name.sort()
    console.log(display_student_name_sort)
    document.getElementById("display_name_2").innerHTML = display_student_name_sort;
}