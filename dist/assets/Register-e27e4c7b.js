import{K as c,n as p,r as u,x,j as e,C as h,B as j,J as f}from"./index-1282e87c.js";import{u as b,c as g,a as i}from"./index.esm-ca37ee4d.js";import{S as N}from"./Spinner-188b2ae9.js";import{R as v}from"./Row-5a9fd9b5.js";import{C as w}from"./Col-46511ea1.js";import{C as o}from"./Card-2fa0d696.js";const q=()=>{const[t,{isSuccess:l,isLoading:n}]=c(),m=p(),s=b({enableReinitialize:!0,initialValues:{name:"",email:"",mobile:"",password:""},validationSchema:g({name:i().required("Enter Name"),email:i().required("Enter email"),mobile:i().required("Enter mobile"),password:i().required("Enter mobile")}),onSubmit:(r,{resetForm:d})=>{t(r),d()}}),a=r=>f({"form-control my-2":!0,"is-invalid":s.touched[r]&&s.errors[r],"is-valid":s.touched[r]&&!s.errors[r]});return u.useEffect(()=>{l&&(x.success("register success"),m("/login"))},[l]),n?e.jsxs("div",{children:["Please Wait.. ",e.jsx(N,{})]}):e.jsx(e.Fragment,{children:e.jsx(h,{children:e.jsx(v,{children:e.jsx(w,{sm:{span:6,offset:3},children:e.jsxs(o,{children:[e.jsx(o.Header,{children:"Register"}),e.jsx(o.Body,{children:e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx("input",{className:a("name"),...s.getFieldProps("name"),type:"text",placeholder:"Name"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.name}),e.jsx("input",{className:a("email"),...s.getFieldProps("email"),type:"email",placeholder:"Email"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.email}),e.jsx("input",{className:a("mobile"),...s.getFieldProps("mobile"),placeholder:"Mobile no"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.mobile}),e.jsx("input",{className:a("password"),...s.getFieldProps("password"),type:"password",placeholder:"Password"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.password}),e.jsx(j,{variant:"primary",className:"w-100",type:"submit",children:"Register"})]})})]})})})})})};export{q as default};
