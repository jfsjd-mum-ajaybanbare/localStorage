var x = document.getElementById('btn');
x.addEventListener('click', localdemo);

function localdemo(){
    const student = {
        name: document.getElementById('n1').value,
        age: document.getElementById('n2').value
    }
    var studentStore = []
    console.log(student);
    console.log(studentStore);
    studentStore.push(student);
    localStorage.setItem("items", JSON.stringify(studentStore));
}

