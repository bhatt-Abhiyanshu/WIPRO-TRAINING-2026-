export const getUser=()=>localStorage.getItem("user");

export const isAdmin=()=>getUser()==="101";