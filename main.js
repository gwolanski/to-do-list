(()=>{"use strict";let e=[],t=[],n=document.getElementById("task-form"),d=document.getElementById("edit-form-container");class i{constructor(e,t,n,d,i,l){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.projectSelection=d,this.taskComplete=l}}function l(){document.getElementById("tasks").innerHTML="",console.log("taskList before:"+e.length);for(let t=0;t<e.length;t++)c(e[t]);console.log("taskList after:"+e.length)}function c(t){let n=document.getElementById("tasks"),i=document.createElement("div");i.classList.add("task-container");let c=document.createElement("input");c.type="checkbox",c.addEventListener("change",(function(){this.checked?(i.classList.add("checked"),t.taskComplete=!0):(i.classList.remove("checked"),t.taskComplete=!1)})),1==t.taskComplete?i.classList.add("checked"):i.classList.remove("checked");let o=document.createElement("div");o.classList.add("task-details"),o.classList.add("expandable");let s=document.createElement("div");s.classList.add("task-title"),s.innerHTML=t.title;let a=document.createElement("div");a.classList.add("task-description"),a.innerHTML=`<b>Description:</b> ${t.description}`;let r=document.createElement("div");r.classList.add("task-due-date"),r.innerHTML=t.dueDate;let m=document.createElement("div");m.classList.add("task-project"),m.innerHTML=`<b>Project:</b> ${t.projectSelection}`;let u=document.createElement("div");u.classList.add("task-priority"),u.innerHTML=`<b>Priority:</b> ${t.priority}`;let p=document.createElement("img");p.classList.add("expand-button"),p.src="./images/expand-arrow.png",p.addEventListener("click",(e=>{o.classList.toggle("expanded")}));let E=document.createElement("img");E.classList.add("edit"),E.src="./images/edit.png",E.addEventListener("click",(n=>{!function(t){const n=e.indexOf(t);let i=e[n],c=document.getElementById("edit-title-input"),o=document.getElementById("edit-description-input"),s=document.getElementById("edit-date-input"),a=document.getElementById("edit-project-selection"),r=document.getElementById("edit-priority-input");c.value=i.title,o.value=i.description,s.value=i.dueDate,a.value=i.projectSelection,r.value=i.priority,d.style.display="block",console.log("taskList:"+e),document.getElementById("submit-edits-button").addEventListener("click",(e=>{e.preventDefault(),console.log(`EditTitle: ${c.value}`),i.title=c.value,i.description=o.value,i.dueDate=s.value,i.projectSelection=a.value,i.priority=r.value,d.style.display="none",l()}))}(t)}));let g=document.createElement("img");g.classList.add("delete"),g.src="./images/trash-black.png",g.addEventListener("click",(n=>{!function(t){const n=e.indexOf(t);e.splice(n,1),l()}(t)})),n.appendChild(i),i.appendChild(c),i.appendChild(o),o.appendChild(s),o.appendChild(r),o.appendChild(u),o.appendChild(p),o.appendChild(E),o.appendChild(g),o.appendChild(a),o.appendChild(m),o.appendChild(u)}function o(){document.getElementById("form-container").style.display="none"}let s=[],a=document.getElementById("selection-header-container");function r(){let e=document.getElementById("project-error");e&&e.remove()}function m(){let e=document.getElementById("projects");e.innerHTML="";for(let t=0;t<s.length;t++){let n=document.createElement("div");n.classList.add("project-container"),e.appendChild(n);let d=document.createElement("div");d.classList.add("project-text"),d.innerHTML=s[t],n.appendChild(d),d.addEventListener("click",(e=>{a.innerHTML="";let n=document.createElement("div");n.innerHTML=s[t],n.setAttribute("id","selection-header"),a.appendChild(n)}));let i=document.createElement("img");i.classList.add("delete"),i.src="./images/trash.png",i.addEventListener("click",(e=>{var n;n=t,s.splice(n,1),m()})),n.appendChild(i)}}let u=!1,p=document.getElementById("form-container");document.getElementById("new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="block"})),document.getElementById("cancel-new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="none",r()})),document.getElementById("add-new-project").addEventListener("click",(function(){let e=document.getElementById("new-project-entry").value,t=document.getElementById("new-project-entry"),n=document.getElementById("new-project-form");if(""!=e)r(),s.push(e),n.reset(),m();else{let e=document.createElement("div");e.id="project-error",e.innerHTML="This field is required*",t.parentNode.insertBefore(e,t.nextSibling)}return s})),document.getElementById("new-task-container").addEventListener("click",(e=>{p.style.display="block",function(){let e=document.getElementById("project-selection");e.innerHTML="";let t=document.createElement("option");t.innerHTML=" ",e.appendChild(t);for(let t=0;t<s.length;t++){let n=document.createElement("option");n.innerHTML=s[t],e.appendChild(n)}}()})),document.getElementById("close-button").addEventListener("click",(e=>{o()})),document.getElementById("close-edits-button").addEventListener("click",(e=>{d.style.display="none"})),document.getElementById("submit-button").addEventListener("click",(t=>{t.preventDefault(),function(){if(""==document.getElementById("title-input").value)return alert("Title is required"),!1;!function(){let t=document.getElementById("title-input").value,d=document.getElementById("description-input").value,c=document.getElementById("date-input").value,s=document.getElementById("project-selection").value,a=document.getElementById("priority-input").value,r=new i(t,d,c,s,a,!1);e.push(r),l(),o(),n.reset()}()}()})),document.getElementById("all-tasks").addEventListener("click",(e=>{u=!1,a.innerHTML="",l()})),document.getElementById("projects").addEventListener("click",(n=>{u=!0;let d=document.getElementById("selection-header").innerHTML;t=[],e.forEach((e=>{e.projectSelection==d&&t.push(e)})),function(){document.getElementById("tasks").innerHTML="";for(let e=0;e<t.length;e++)c(t[e])}()}))})();