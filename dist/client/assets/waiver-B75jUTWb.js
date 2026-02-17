import{u as c,r as s,j as e,L as m,c as h,a as p}from"./main-DCY8EkL4.js";const u=`
RELEASE OF LIABILITY, ASSUMPTION OF RISK, AND WAIVER OF CLAIMS

Yellow Cat ClubHouse - Play Place Participation Agreement

By signing below, I, the parent/guardian of the minor child(ren) listed, acknowledge and agree to the following:

1. ASSUMPTION OF RISK
I understand that participation in play activities at Yellow Cat ClubHouse involves physical activity and may involve risks of injury, including but not limited to slips, falls, collisions, and minor injuries. I voluntarily assume all such risks on behalf of myself and my child(ren).

2. RELEASE OF LIABILITY
I hereby release, waive, discharge, and covenant not to sue Yellow Cat ClubHouse, its owners, operators, employees, and agents from any and all liability, claims, demands, actions, or causes of action arising out of or related to any loss, damage, or injury, including death, that may be sustained by my child(ren) or myself while participating in activities at the facility, whether caused by the negligence of the releasees or otherwise.

3. PARENT/GUARDIAN CONSENT
I certify that I am the parent or legal guardian of the minor child(ren) and have the authority to execute this agreement on their behalf.

4. MEDICAL/HEALTH ACKNOWLEDGMENT
I represent that my child(ren) are in good physical condition and have no known medical conditions that would prevent safe participation in play activities. I agree to inform staff of any allergies, medical conditions, or special needs.

5. SUPERVISION
I understand that I am responsible for supervising my child(ren) while at Yellow Cat ClubHouse and will ensure they follow all posted rules and staff instructions.

6. PHOTO RELEASE (Optional)
I grant Yellow Cat ClubHouse permission to use photographs or video of my child(ren) for promotional purposes. I may revoke this consent in writing at any time.

I HAVE READ THIS AGREEMENT, UNDERSTAND ITS TERMS, AND AGREE TO BE BOUND BY IT.
`.trim(),y=h({method:"POST"}).handler(p("82840c9b189de50abfe2ab4931d7b5ef1a519429086fdcc92ffed4c33648c241"));function g(){const o=c(),[a,n]=s.useState(!1),[r,i]=s.useState(!1),l=async t=>{if(t.preventDefault(),!!a){i(!0);try{await y(),await o.navigate({to:"/dashboard"})}catch(d){console.error(d),i(!1)}}};return e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-16",children:[e.jsx("h1",{className:"text-4xl font-bold text-primary-900 dark:text-primary-100",children:"Legal Waiver & Release"}),e.jsx("p",{className:"mt-2 text-slate-600 dark:text-slate-400",children:"Please read and accept the following before using Yellow Cat ClubHouse facilities."}),e.jsx("div",{className:"mt-8 max-h-[50vh] overflow-y-auto rounded-xl border border-olive-200 bg-olive-50/50 p-6 dark:border-slate-600 dark:bg-primary-950/30",children:e.jsx("pre",{className:"whitespace-pre-wrap font-sans text-sm text-primary-900 dark:text-primary-200",children:u})}),e.jsxs("form",{onSubmit:l,className:"mt-8",children:[e.jsxs("label",{className:"flex items-start gap-3",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:t=>n(t.target.checked),className:"mt-1 h-5 w-5 rounded border-olive-300 text-primary-600 focus:ring-primary-500"}),e.jsx("span",{className:"text-primary-700 dark:text-primary-200",children:"I have read, understood, and agree to the terms of this waiver and release of liability. I am the parent or legal guardian of the child(ren) who will participate, and I have the authority to sign on their behalf."})]}),e.jsxs("div",{className:"mt-6 flex gap-4",children:[e.jsx("button",{type:"submit",disabled:!a||r,className:"rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50",children:r?"Processing...":"I Agree - Continue"}),e.jsx(m,{to:"/",className:"rounded-md border border-olive-300 px-6 py-2 font-medium text-primary-700 hover:bg-primary-50 dark:border-slate-600 dark:text-primary-200 dark:hover:bg-primary-900/50",children:"Cancel"})]})]})]})}export{g as component};
