(()=>{"use strict";let e=[],t=document.getElementById("task-form");class n{constructor(e,t,n,d,i){this.title=e,this.description=t,this.dueDate=n,this.priority=d,this.projectSelection=i}}function d(){let t=document.getElementById("tasks");t.innerHTML="";for(let n=0;n<e.length;n++){let i=document.createElement("div");i.classList.add("task-container");let l=document.createElement("input");l.type="checkbox",l.addEventListener("change",(function(){this.checked}));let c=document.createElement("div");c.classList.add("task-details"),c.classList.add("expandable");let r=document.createElement("div");r.classList.add("task-title"),r.innerHTML=e[n].title;let a=document.createElement("div");a.classList.add("task-description"),a.innerHTML=`<b>Description:</b> ${e[n].description}`;let o=document.createElement("div");o.classList.add("task-due-date"),o.innerHTML=e[n].dueDate;let s=document.createElement("div");s.classList.add("task-project"),s.innerHTML=`<b>Project:</b> ${e[n].projectSelection}`;let m=document.createElement("div");m.classList.add("task-priority"),m.innerHTML=`<b>Priority:</b> ${e[n].priority}`;let p=document.createElement("img");p.classList.add("expand-button"),p.src="./images/expand-arrow.png",p.addEventListener("click",(e=>{c.classList.toggle("expanded")}));let u=document.createElement("img");u.classList.add("delete"),u.src="./images/trash-black.png",u.addEventListener("click",(t=>{var i;i=n,e.splice(i,1),d()})),t.appendChild(i),i.appendChild(l),i.appendChild(c),c.appendChild(r),c.appendChild(o),c.appendChild(m),c.appendChild(p),c.appendChild(u),c.appendChild(a),c.appendChild(s),c.appendChild(m)}}function i(){document.getElementById("form-container").style.display="none"}let l=[];function c(){let e=document.getElementById("project-error");e&&e.remove()}function r(){let e=document.getElementById("projects");e.innerHTML="";for(let t=0;t<l.length;t++){let n=document.createElement("div");n.classList.add("project-container"),e.appendChild(n);let d=document.createElement("div");d.classList.add("project-text"),d.innerHTML=l[t],n.appendChild(d);let i=document.createElement("img");i.classList.add("delete"),i.src="./images/trash.png",i.addEventListener("click",(e=>{var n;n=t,l.splice(n,1),r()})),n.appendChild(i)}}let a=document.getElementById("form-container");document.getElementById("new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="block"})),document.getElementById("cancel-new-project").addEventListener("click",(e=>{document.getElementById("new-project-form").style.display="none",c()})),document.getElementById("add-new-project").addEventListener("click",(function(){let e=document.getElementById("new-project-entry").value,t=document.getElementById("new-project-entry"),n=document.getElementById("new-project-form");if(""!=e)c(),l.push(e),n.reset(),r();else{let e=document.createElement("div");e.id="project-error",e.innerHTML="This field is required*",t.parentNode.insertBefore(e,t.nextSibling)}return l})),document.getElementById("new-task-container").addEventListener("click",(e=>{a.style.display="block",function(){let e=document.getElementById("project-selection");e.innerHTML="";let t=document.createElement("option");t.innerHTML=" ",e.appendChild(t);for(let t=0;t<l.length;t++){let n=document.createElement("option");n.innerHTML=l[t],e.appendChild(n)}}()})),document.getElementById("close-button").addEventListener("click",(e=>{i()})),document.getElementById("submit-button").addEventListener("click",(l=>{l.preventDefault(),function(){if(""==document.getElementById("title-input").value)return alert("Title is required"),!1;!function(){let l=document.getElementById("title-input").value,c=document.getElementById("description-input").value,r=document.getElementById("date-input").value,a=document.getElementById("priority-input").value,o=document.getElementById("project-selection").value,s=new n(l,c,r,a,o);e.push(s),d(),i(),t.reset()}()}()}))})();