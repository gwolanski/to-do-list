(()=>{"use strict";let e=[],t=["Example"],n=document.getElementById("form-container"),d=document.getElementById("task-form");function c(){let e=document.getElementById("project-error");e&&e.remove()}function l(){let e=document.getElementById("projects");e.innerHTML="";for(let n=0;n<t.length;n++){let d=document.createElement("div");d.classList.add("project-container"),e.appendChild(d);let c=document.createElement("div");c.classList.add("project-text"),c.innerHTML=t[n],d.appendChild(c);let i=document.createElement("img");i.classList.add("delete"),i.src="./images/trash.png",i.addEventListener("click",(e=>{var d;d=n,t.splice(d,1),l()})),d.appendChild(i)}}function i(){n.style.display="none"}document.getElementById("new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="block"})),document.getElementById("cancel-new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="none",c()})),document.getElementById("add-new-project").addEventListener("click",(e=>{let n=document.getElementById("new-project-entry").value,d=document.getElementById("new-project-entry"),i=document.getElementById("new-project-form");if(""!=n)c(),t.push(n),i.reset(),l();else{let e=document.createElement("div");e.id="project-error",e.innerHTML="This field is required*",d.parentNode.insertBefore(e,d.nextSibling)}})),document.getElementById("new-task-container").addEventListener("click",(e=>{n.style.display="block",function(){let e=document.getElementById("project-selection");e.innerHTML="";for(let n=0;n<t.length;n++){let d=document.createElement("option");d.innerHTML=t[n],e.appendChild(d)}}()})),document.getElementById("close-button").addEventListener("click",(e=>{i()})),document.getElementById("submit-button").addEventListener("click",(t=>{t.preventDefault(),function(){let t=document.getElementById("title-input").value,n=document.getElementById("description-input").value,c=document.getElementById("date-input").value,l=document.getElementById("priority-input").value,s=document.getElementById("project-selection").value,a=new o(t,n,c,l,s);e.push(a),r(),i(),d.reset()}()}));class o{constructor(e,t,n,d,c){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.projectSelection=c}}function r(){let t=document.getElementById("tasks");t.innerHTML="";for(let n=0;n<e.length;n++){let d=document.createElement("div");d.classList.add("task-container");let c=document.createElement("input");c.type="checkbox",c.addEventListener("change",(function(){this.checked}));let l=document.createElement("div");l.classList.add("task-title"),l.innerHTML=e[n].title;let i=document.createElement("div");i.classList.add("task-description"),i.innerHTML=e[n].description;let o=document.createElement("div");o.classList.add("task-due-date"),o.innerHTML=e[n].dueDate;let s=document.createElement("div");s.classList.add("task-project"),""==e[n].project?s.innerHTML="":s.innerHTML=e[n].project;let a=document.createElement("div");a.classList.add("task-priority"),a.innerHTML=e[n].priority,console.log("taskList[0]:"+e[0].title);let m=document.createElement("img");m.classList.add("delete"),m.src="./images/trash-black.png",m.addEventListener("click",(t=>{var d;d=n,e.splice(d,1),r()})),t.appendChild(d),d.appendChild(c),d.appendChild(l),d.appendChild(o),d.appendChild(a),d.appendChild(m)}}})();