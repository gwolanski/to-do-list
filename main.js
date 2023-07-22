(()=>{"use strict";let e=[],t=document.getElementById("task-form");class n{constructor(e,t,n,d,c,i){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.projectSelection=c,this.taskComplete=i}}function d(){let t=document.getElementById("tasks");t.innerHTML="";for(let n=0;n<e.length;n++){let c=document.createElement("div");c.classList.add("task-container");let i=document.createElement("input");i.type="checkbox",i.addEventListener("change",(function(){this.checked?(c.classList.add("checked"),e[n].taskComplete=!0):(c.classList.remove("checked"),e[n].taskComplete=!1)})),1==e[n].taskComplete?c.classList.add("checked"):c.classList.remove("checked");let l=document.createElement("div");l.classList.add("task-details"),l.classList.add("expandable");let a=document.createElement("div");a.classList.add("task-title"),a.innerHTML=e[n].title;let s=document.createElement("div");s.classList.add("task-description"),s.innerHTML=`<b>Description:</b> ${e[n].description}`;let o=document.createElement("div");o.classList.add("task-due-date"),o.innerHTML=e[n].dueDate;let r=document.createElement("div");r.classList.add("task-project"),r.innerHTML=`<b>Project:</b> ${e[n].projectSelection}`;let m=document.createElement("div");m.classList.add("task-priority"),m.innerHTML=`<b>Priority:</b> ${e[n].priority}`;let p=document.createElement("img");p.classList.add("expand-button"),p.src="./images/expand-arrow.png",p.addEventListener("click",(e=>{l.classList.toggle("expanded")}));let u=document.createElement("img");u.classList.add("delete"),u.src="./images/trash-black.png",u.addEventListener("click",(t=>{var c;c=n,e.splice(c,1),d()})),t.appendChild(c),c.appendChild(i),c.appendChild(l),l.appendChild(a),l.appendChild(o),l.appendChild(m),l.appendChild(p),l.appendChild(u),l.appendChild(s),l.appendChild(r),l.appendChild(m)}}function c(){document.getElementById("form-container").style.display="none"}let i=[];function l(){let e=document.getElementById("project-error");e&&e.remove()}function a(){let e=document.getElementById("projects");e.innerHTML="";for(let t=0;t<i.length;t++){let n=document.createElement("div");n.classList.add("project-container"),e.appendChild(n);let d=document.createElement("div");d.classList.add("project-text"),d.innerHTML=i[t],n.appendChild(d);let c=document.createElement("img");c.classList.add("delete"),c.src="./images/trash.png",c.addEventListener("click",(e=>{var n;n=t,i.splice(n,1),a()})),n.appendChild(c)}}let s=document.getElementById("form-container");document.getElementById("new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="block"})),document.getElementById("cancel-new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="none",l()})),document.getElementById("add-new-project").addEventListener("click",(function(){let e=document.getElementById("new-project-entry").value,t=document.getElementById("new-project-entry"),n=document.getElementById("new-project-form");if(""!=e)l(),i.push(e),n.reset(),a();else{let e=document.createElement("div");e.id="project-error",e.innerHTML="This field is required*",t.parentNode.insertBefore(e,t.nextSibling)}return i})),document.getElementById("new-task-container").addEventListener("click",(e=>{s.style.display="block",function(){let e=document.getElementById("project-selection");e.innerHTML="";let t=document.createElement("option");t.innerHTML=" ",e.appendChild(t);for(let t=0;t<i.length;t++){let n=document.createElement("option");n.innerHTML=i[t],e.appendChild(n)}}()})),document.getElementById("close-button").addEventListener("click",(e=>{c()})),document.getElementById("submit-button").addEventListener("click",(i=>{i.preventDefault(),function(){if(""==document.getElementById("title-input").value)return alert("Title is required"),!1;!function(){let i=document.getElementById("title-input").value,l=document.getElementById("description-input").value,a=document.getElementById("date-input").value,s=document.getElementById("priority-input").value,o=document.getElementById("project-selection").value,r=new n(i,l,a,s,o,!1);e.push(r),d(),c(),t.reset()}()}()}))})();