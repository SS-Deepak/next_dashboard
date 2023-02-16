const Type = ( key, width)=>{
    const type = {
         key, width
    }
    return type
}

export const ListPanel = [
  
    Type("hashIndex","verySmall"),
    Type("email","medium"),
    Type("firstname","small"),
    Type("lastname","small"),
    Type("doj","Xsmall"),
    
    Type("name","Xsmall"),
    Type("subject","Lmedium"),
    Type("fromdate","small"),
    Type("todate","small"),
    // Type("status","small"),
    Type("comment","small"),
    
    Type("employeeName","large"),
    Type("remark","large"),
    
    Type("date","medium"),
    Type("day","small"),
    Type( "title", "large"),
    
    Type("cda","Lmedium"),
    Type("cname","Lmedium"),
    Type("cemail","Lmedium"),
    Type("cphone","Lmedium"),

    Type("p_da","S_small"),
    Type("p_edd","S_small"),
    Type("p_name","S_small"),
    Type("p_client","S_small"),
    Type("p_status","S_small"),
    Type("p_desc","medium"),
    Type("p_created_at","SS_small"),
    Type("p_assign_to","SS_small"),
    
    // Type("","btns","Xmedium"),
    
]


export const ListButtons = [
    {
        title: "Login",
        color: "primary",
        key :"loginBtn"
    },
    {
        title: "Edit",
        color: "primary",
        key :"editBtn"
    } ,
    {
        title: "Delete",
        color: "danger",
        key :"deleteBtn"
    } ,
    {
        title: "Welcome Mail",
        color: "success",
        key :"mailEPloginBtn"
    } ,
    {
        title: "Mail Employee Portal Login",
        color: "success",
        key :"welcomeMailBtn"
    },
    {
        title: "Reject",
        color: "danger",
        key: "rejectBtn"
    },
    {
        title: "Accept",
        color: "success",
        key: "acceptBtn"
    },
    {
        title: "Details",
        color: "success",
        key: "detailBtn"
    }
]