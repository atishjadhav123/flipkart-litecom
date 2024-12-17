import{r as l,S as q,U as L,V as R,W as A,x as y,j as e,C as U,B as d,J as H}from"./index-1282e87c.js";import{u as B,c as D,a as h}from"./index.esm-ca37ee4d.js";import{S as V}from"./Spinner-188b2ae9.js";import{C as j}from"./Card-2fa0d696.js";import{F as u}from"./FormControl-a3986128.js";const W=()=>{const[N,f]=l.useState(!1),[i,m]=l.useState([]),[S,p]=l.useState([]),{data:g}=q(),[C,{isSuccess:P,isLoading:F}]=L(),[v,{isSuccess:b,isLoading:E}]=R(),[w,{isSuccess:_,isLoading:k}]=A(),[r,x]=l.useState(),n=B({enableReinitialize:!0,initialValues:{name:r?r.name:"",desc:r?r.desc:"",price:r?r.price:"",qty:r?r.qty:"",hero:r?r.hero:""},validationSchema:D({name:h().required("Enter name"),desc:h().required("Enter desc"),price:h().required("Enter price"),qty:h().required("Enter qty")}),onSubmit:(s,{resetForm:c})=>{if(r){console.log("update called");const t=new FormData;for(const a in s)a!=="hero"&&t.append(a,s[a]);for(const a of i)t.append("remove",a);for(const a of s.hero)t.append("hero",a);w({_id:r._id,fd:t}),x(null),m([])}else{const t=new FormData;for(const a in s)a!=="hero"&&t.append(a,s[a]);for(const a of s.hero)t.append("hero",a);v(t)}p([]),c()}}),o=s=>H({"form-control my-2":!0,"is-invalid":n.touched[s]&&n.errors[s],"is-valid":n.touched[s]&&!n.errors[s]});return l.useEffect(()=>{b&&y.success("product create success")},[b]),l.useEffect(()=>{P&&y.success("product delete success")},[P]),e.jsxs(U,{children:[E||F||k?e.jsxs(e.Fragment,{children:["Please Wait ... ",e.jsx(V,{})," "]}):e.jsxs(j,{className:"mb-5",children:[e.jsx(j.Header,{children:"Product"}),e.jsx(j.Body,{children:e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(u,{className:o("name"),placeholder:"Enter Product Name",...n.getFieldProps("name")}),e.jsx(u,{className:o("desc"),placeholder:"Enter Product Description",...n.getFieldProps("desc")}),e.jsx(u,{type:"number",className:o("price"),placeholder:"Enter Product Price",...n.getFieldProps("price")}),e.jsx(u,{type:"number",className:o("qty"),placeholder:"Enter Product Qty",...n.getFieldProps("qty")}),r?e.jsxs(e.Fragment,{children:[r.hero.map(s=>e.jsx("div",{children:e.jsxs("div",{className:`${i.includes(s)&&"border border-danger my-2"} d-flex justify-content-between align-items-center px-4`,children:[e.jsx("img",{src:s,height:100,className:"me-2 rounded-3",alt:""}),i.includes(s)?e.jsx(d,{onClick:c=>m(i.filter(t=>s!==t)),variant:"dark",children:"cancel"}):e.jsx(d,{variant:"danger",onClick:c=>{i.includes(s)||m([...i,s])},children:"Remove"})]})})),N?e.jsxs(e.Fragment,{children:[e.jsx(u,{type:"file",multiple:!0,onChange:s=>{const c=[];for(const t of s.target.files)c.push(URL.createObjectURL(t));p(c),n.setFieldValue("hero",s.target.files)},className:o("hero"),placeholder:"Enter Product Hero"}),e.jsx(d,{onClick:s=>f(!1),variant:"dark",children:"cancel"})]}):e.jsx(d,{onClick:s=>f(!0),className:"my-3",children:"Add New Image"})]}):e.jsx(e.Fragment,{children:e.jsx(u,{type:"file",multiple:!0,onChange:s=>{const c=[];for(const t of s.target.files)c.push(URL.createObjectURL(t));n.setFieldValue("hero",s.target.files),p(c)},className:o("hero"),placeholder:"Enter Product Hero"})}),S.map(s=>e.jsx("img",{src:s,height:50,alt:""})),r?e.jsxs(e.Fragment,{children:[e.jsx(d,{type:"submit",variant:"warning",className:"w-100 btn-lg",children:"Update Product"}),e.jsx(d,{type:"button",onClick:s=>x(null),variant:"outline-dark",className:"w-100 btn-lg mt-3",children:"Cancel"})]}):e.jsx(d,{type:"submit",className:"w-100 btn-lg",children:"Add Product"})]})})]}),e.jsxs("table",{class:"table table-dark table-striped table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"name"}),e.jsx("th",{children:"desc"}),e.jsx("th",{children:"price"}),e.jsx("th",{children:"qty"}),e.jsx("th",{children:"hero"}),e.jsx("th",{children:"actions"})]})}),e.jsx("tbody",{children:g&&g.result.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.name}),e.jsx("td",{children:s.desc}),e.jsx("td",{children:s.price}),e.jsx("td",{children:s.qty}),e.jsx("td",{children:s.hero.map(c=>e.jsx("img",{src:c,height:50,className:"mx-2 rounded-2",alt:""}))}),e.jsxs("td",{children:[e.jsx(d,{onClick:c=>x(s),className:"me-2",variant:"warning",children:"Edit"}),e.jsx(d,{className:"me-2",variant:"danger",onClick:c=>C(s._id),children:"Remove"})]})]},s._id))})]})]})};export{W as default};