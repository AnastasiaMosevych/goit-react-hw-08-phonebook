"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[700],{9001:function(n,e,t){t.d(e,{D:function(){return o}});var a,r=t(168),i=t(7402).Z.h1(a||(a=(0,r.Z)(['\n    margin-top: 50px;\n    font-size: 40px;\n    font-family: font-family: Georgia, "Times New Roman", Times, serif;\n    font-weight: 700;\n    text-align: center;\n']))),c=t(184),o=function(n){var e=n.title;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i,{children:e})})}},4700:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var a,r=t(9001),i=t(5604),c=t(4396),o=t(9434),s=t(168),u=t(7402).Z.button(a||(a=(0,s.Z)(["\n\tpadding: 5px 12px 5px 12px;\n\tcolor: #FFF;\n\tmargin-left: 10px;\n\tbackground: #1abc9c;\n\tfont-size: 16px;\n\ttext-align: center;\n\tfont-style: normal;\n\twidth: 100px;\n\tborder: 1px solid #16a085;\n\tborder-radius: 6px;\n\tborder-width: 1px 1px 3px;\n"]))),d=t(208),l=t(184),x=function(n){var e=n.contactId,t=(0,o.v9)(c.Vc),a=(0,o.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{onClick:function(){return function(n){a((0,d.GK)(n))}(e)},type:"button",value:e,disabled:t,children:"Delete"})})},h=function(n){var e=n.contact,t=e.name,a=e.number,r=e.id;return(0,l.jsxs)(i.HC,{children:[t,": ",a,(0,l.jsx)(x,{contactId:r})]})},m=function(){var n=(0,o.v9)(c.F4);return 0!==n.length&&(0,l.jsx)(i.W2,{children:(0,l.jsx)(i.Ay,{children:n.map((function(n){return(0,l.jsx)(h,{contact:n},n.id)}))})})},f=t(9439),p=t(2791),j=t(4330),v=function(){var n=(0,o.v9)(c.K2),e=(0,o.I0)(),t=(0,p.useState)(""),a=(0,f.Z)(t,2),r=a[0],i=a[1],s=(0,p.useState)(""),u=(0,f.Z)(s,2),x=u[0],h=u[1];return(0,l.jsx)(j.x,{onSubmit:function(t){t.preventDefault();!function(e){var t=e.toLowerCase();return!!n.find((function(n){return n.name.toLowerCase()===t}))}(r)?(e((0,d.uK)({name:r,number:x})),i(""),h("")):alert("".concat(r," is already in contacts"))},children:(0,l.jsxs)("div",{children:[(0,l.jsx)(j.__,{children:"Name"}),(0,l.jsx)(j.II,{onChange:function(n){var e=n.target;i(e.value)},type:"text",value:r,name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)(j.__,{children:"Number"}),(0,l.jsx)(j.II,{onChange:function(n){var e=n.target;h(e.value)},type:"tel",value:x,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)(j.c1,{type:"submit",children:"Add contact"})]})})},b=t(2759),g=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.zK);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.__,{children:"Find contacts by name"}),(0,l.jsx)(j.II,{onChange:function(e){var t=e.target;n((0,b.T)(t.value))},type:"search",name:"filter",value:e})]})},y=function(){return(0,l.jsxs)(i.W2,{children:[(0,l.jsx)(r.D,{title:"Phonebook"}),(0,l.jsx)(v,{}),(0,l.jsx)(r.D,{title:"Contacts"}),(0,l.jsx)(g,{}),(0,l.jsx)(m,{})]})}}}]);
//# sourceMappingURL=700.e0df5693.chunk.js.map