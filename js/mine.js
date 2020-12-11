
    let TaskName = document.getElementById("TaskName");
    let TaskDate = document.getElementById("TaskDate");
    var tablebody  = document.getElementById("tablebody");
    let taskCtainer = [];
    var toggle = false ;
    var globalIndex ;
    mybtn.onclick = function()
    {

        if (TaskName.value == '' && TaskDate.value == '') {
            alert("TaskName must be filled out And Date ");
            return false;
        }
            
        if (toggle === false )
        {
            addTask();
        }
        else 
        {
            updatedata()
        }
      
    }

    if(localStorage.getItem("myTask")== null)
    {
        taskCtainer= [] ;
    }
    else
    {
        taskCtainer = JSON.parse(localStorage.getItem("myTask")) ;
        show()
    }
function addTask()
{
     TaskInput =
    {
          name : TaskName.value,
          Date : TaskDate.value
    }
    taskCtainer.push(TaskInput) ;
    localStorage.setItem("myTask", JSON.stringify(taskCtainer));          
    show ()
}
// checkData = function(){
//     for(;;){
//         TaskInput = addTask()
//         if( TaskName.value =='') alert('invalid') ;
//         if(TaskDate.value =='') alert('invalid');
//     }

// }
// checkData()
function show ()
{
    var Container="";

    for (var i = 0; i < taskCtainer.length; i++)
     {
       
        Container += `<tr> <td>`+i +`</td> 
                         <td>`+taskCtainer[i].name +`</td> 
                         <td>`+taskCtainer[i].Date +`</td> 
                         <td><button  onclick="ret(`+i+`)" class='btn btn-warning'>Edit</button></td> 
                         <td><button onclick='deletTask(`+i+`);' class='btn btn-success'>DONE</button></td> 
                         </tr>`
    }
  
    tablebody.innerHTML=Container ;
  
}

function deletTask(index)
{
    taskCtainer.splice(index,1);
    localStorage.setItem("myTask", JSON.stringify(taskCtainer));          
    show ()
}




function ret(index)
{
    toggle = true ;
    TaskName.value = taskCtainer[index].name 
    TaskDate.value = taskCtainer[index].Date 
    globalindex = index ;
    mybtn.innerHTML= "update"
}

function updatedata ()
{
    taskCtainer[globalindex].name = TaskName.value
    taskCtainer[globalindex].Date = TaskDate.value
    localStorage.setItem("myTask", JSON.stringify(taskCtainer));          
     show()
      toggle = false ;
     mybtn.innerHTML="submit"
}
