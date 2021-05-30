'use strict'
let information  = [];
let submit = document.getElementById('form');

function Store(username , type , salary , condition)
{
    this.username = username ; 
    this.type = type ;
    this.salary = salary;
    this.condition=condition;
    information.push(this);
    
}



submit.addEventListener('submit', handleclick);

function handleclick(event){
 
    event.preventDefault();
    let username = document.getElementById('storname').value;
    let typename = document.getElementById('type').value;
    let randomsal = salaryrandom(100,600);
    let condition ='';
    if (randomsal<=250)
      condition = 'used';
     else if(randomsal>250)
      condition = 'new';
    
     let storeInfo = new Store(username,typename,randomsal,condition);
     setting();
     storeInfo.render();


}
function salaryrandom(min,max){
  
  return Math.floor(Math.random() * (max - min) + min);
}

function setting(){
    let data1 = JSON.stringify(information);
     localStorage.setItem('data' , data1);
 
}



    let continar = document.getElementById('continar');
    let table =document.createElement('table');
    continar.appendChild(table);
    let thead = document.createElement('thead')
    table.appendChild(thead);
    let trhead = document.createElement('tr');
    thead.appendChild(trhead);
    let thhead = document.createElement('th');
     trhead.appendChild(thhead);
     thhead.textContent='store name ';

     thhead = document.createElement('th');
     trhead.appendChild(thhead);
     thhead.textContent='type ';

     thhead = document.createElement('th');
     trhead.appendChild(thhead);
     thhead.textContent='price ';

     thhead = document.createElement('th');
     trhead.appendChild(thhead);
     thhead.textContent='condition '
     let trbody = document.createElement('tbody');
     table.appendChild(trbody);
    

    Store.prototype.render = function(){
        
        trbody.textContent =''  ;
       
  
        for (let index = 0; index < information .length; index++) {
            let trdata = document.createElement('tr');
            trbody.appendChild(trdata);

            let tdbody = document.createElement('td') ;
            trbody.appendChild(tdbody);
            tdbody.textContent = this.username;
            tdbody = document.createElement('td') ;
            trbody.appendChild(tdbody);
            tdbody.textContent = this.type;
            tdbody = document.createElement('td') ;
            trbody.appendChild(tdbody);
            tdbody.textContent = this.salary;
            tdbody = document.createElement('td') ;
            trbody.appendChild(tdbody);
            tdbody.textContent = this.condition;
            
        }
        
    }

    function gitting(){
    let gititem = localStorage.getItem('data');
    let gitEl = JSON.parse(gititem);
    let objinfo;
    if(gitEl != null)
      {
       for (let index = 0; index < gitEl.length; index++) {
           objinfo =new Store(gitEl[index].username, gitEl[index].type , gitEl[index].salary , gitEl[index].condition);
           
       } 
       objinfo.render();  
      }
    }
    
 
gitting();