import{r as a,Z as h,_ as o,x,j as s,C as j,B as u}from"./index-1282e87c.js";import{T as p,f as m}from"./format-a4ca6fee.js";const f=()=>{const[r,c]=a.useState({limit:1,skip:0}),[i,{data:d}]=h(),[n,{isSuccess:l}]=o();return a.useEffect(()=>{i(r)},[r]),a.useEffect(()=>{l&&x.success("status update success")},[l]),s.jsxs(j,{children:[s.jsxs("select",{class:"form-select my-3",onChange:e=>c({...r,limit:e.target.value}),children:[s.jsx("option",{value:"1",children:"1"}),s.jsx("option",{value:"2",children:"2"}),s.jsx("option",{value:"5",children:"5"}),s.jsx("option",{value:"10",children:"10"})]}),d&&s.jsxs(p,{className:"table table-bordered",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"order id"}),s.jsx("th",{children:"address"}),s.jsx("th",{children:"city"}),s.jsx("th",{children:"payment"}),s.jsx("th",{children:"products"}),s.jsx("th",{children:"status"}),s.jsx("th",{children:"order on"})]})}),s.jsx("tbody",{children:d.result.map(e=>s.jsxs("tr",{className:`
                                ${e.status==="delivered"&&"table-success"}
                                ${e.status==="cancel"&&"table-danger"}
                            `,children:[s.jsx("td",{children:e._id}),s.jsx("td",{children:e.address}),s.jsx("td",{children:e.city}),s.jsx("td",{children:e.payment}),s.jsx("td",{children:e.products.map(t=>s.jsxs("div",{className:"d-flex gap-3",children:[s.jsx("img",{src:t.hero[0],height:50,alt:""}),s.jsxs("div",{children:[s.jsx("h6",{children:t.name}),s.jsxs("h6",{children:["price: ",t.price]})]})]}))}),s.jsx("td",{children:s.jsxs("select",{onChange:t=>n({_id:e._id,status:t.target.value}),value:e.status,className:"form-control",children:[s.jsx("option",{value:"palced",children:"palced"}),s.jsx("option",{value:"delivered",children:"delivered"}),s.jsx("option",{value:"cancel",children:"cancel"})]})}),s.jsx("td",{children:m(e.createdAt,"dd-MMM-yyyy")})]}))})]}),d&&[...Array(Math.ceil(d.total/r.limit)).keys()].map(e=>s.jsx(u,{className:"me-1",onClick:t=>c({...r,skip:e}),children:e+1}))]})};export{f as default};
