import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as s}from"./assets/vendor-77e16229.js";let r=null;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],g()}};f("input#datetime-picker",h);const o=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");o.setAttribute("disabled","true");o.addEventListener("click",T);function g(){r<new Date?(s.error({title:"Error",titleColor:"#ffffff",message:"Please choose a date in the future",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),o.setAttribute("disabled","true")):o.removeAttribute("disabled")}function T(){if(r>new Date){s.success({title:"Timer On",message:"The timer has started",position:"topRight"});const t=setInterval(()=>{let e=r-new Date;if(e>=0){const n=v(e);C(n)}else c.removeAttribute("disabled"),s.success({title:"Timer Finish",message:"The timer is over",position:"topRight"}),clearInterval(t)},1e3);c.setAttribute("disabled","true"),o.setAttribute("disabled","true")}}function C(t){const{days:e,hours:n,minutes:i,seconds:a}=t;p.textContent=String(e).padStart(2,"0"),S.textContent=String(n).padStart(2,"0"),y.textContent=String(i).padStart(2,"0"),b.textContent=String(a).padStart(2,"0")}function v(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
