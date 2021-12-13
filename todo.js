


// First we need to get the button to add task

let button=document.getElementById('btn');








tasks=[];


function fn(){

    let r=document.getElementsByName('task')[0];
    tasks.push(r.value);
    display();
   

  
    
    
}
var del_butn=document.getElementsByTagName('INPUT')[3];

button.addEventListener('click',fn);

var i=0;
let display= function(){
    let ol_list=document.getElementsByClassName('list')[0];
    
    // This will display from the last list element so it wont begin from first all over again.
    for(var i=tasks.length-1;i<tasks.length;i++){ 
        let new_elem=document.createElement('li');
        new_elem.style.margin= '0 0 0 0' ;
        new_elem.style.display='inline-block';
        let single_task=tasks[i];
        new_elem.innerText=single_task;
        ol_list.appendChild(new_elem);
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.style.width='18px';
        checkbox.style.height='20px';
       
        checkbox.style.marginLeft="40px";
        checkbox.style.marginBottom="0";
        checkbox.style.opacity="0.8";
        checkbox.color="red";
       
       
        new_elem.appendChild(checkbox);   //appending checkbox as child of a list element

        // creating a button for delete

        var del=document.createElement('INPUT');
        del.setAttribute("type","button");
        del.value="❌";
       
        new_elem.appendChild(del);       //appending elem as child of a list element
        del.id=`btn_${i}`;               // creating id for each delete btn
        new_elem.id=`li_btn_${i}`;       // creating id for each li elem

        checkbox.id=`${i}`;

        ol_list.appendChild(new_elem);

    


    
        // delete the li from ordered list

        // create an eventListener for clicking the x button

        var delete_task=function(event){
            
            let id=event.target.id;
            console.log(id);

            // to delete from DOM
        
            let element_id=`li_${id}`;
            console.log(element_id)
            let task_todel=document.getElementById(element_id);
            task_todel.remove();

            // delete from task list

            let index=id.split("_")[1];
            tasks.splice(index,1);



        
        }
        del.addEventListener('click',delete_task);

        var mark_item=function(){
            if (this.checked) {
                let id=this.id;

                // to mark strikethrough of li elem

                let element_id=`li_btn_${id}`;
                console.log(element_id);
                let task_marked=document.getElementById(element_id);
                let str=task_marked;
                str.style.textDecoration='line-through';
                str.style.color='grey';


              } else {
                    let id=this.id;
                    let element_id=`li_btn_${id}`;
                    console.log(element_id);
                    let task_marked=document.getElementById(element_id);
                    let str=task_marked;
                    str.style.textDecoration='none';
                    str.style.color='white';
                    
              }
        }

        checkbox.addEventListener('change',mark_item);



    }
    
}























