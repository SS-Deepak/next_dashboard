const Type = (title, key, width)=>{
    const type = {
        title, key, width
    }
    return type
}

export const List = [
    Type(" ","blankIndex","verySmall"),
    Type("#","hashIndex","verySmall"),
    
    Type("Email","emp_email","medium"),
    Type("First Name","fn","small"),
    Type("Last Name","ln","small"),
    Type("Date of Joining","doj","small"),
    
    Type("Name","name","Xsmall"),
    Type("Subject of Leave","sol","Lmedium"),
    Type("From Date","fd","small"),
    Type("To Date","td","small"),
    Type("Status","status","small"),
    Type("Comment","comment","small"),
    
    Type("Employee Name","en","large"),
    Type("Remarks","remark","large"),
    
    Type("Holiday Date","hd","medium"),
    Type("Day","day","small"),
    Type("Title", "title", "small"),
    
    Type("Date added","cda","Lmedium"),
    Type("Name","cname","Lmedium"),
    Type("Email ID","cemail","Lmedium"),
    Type("Phone","cphone","Lmedium"),
    
    Type("Date added","p_da","S_small"),
    Type("Estimated Delivery Date","p_edd","S_small"),
    Type("Name","p_name","S_small"),
    Type("Client","p_client","S_small"),
    Type("Status","p_status","S_small"),
    Type("Description","p_desc","medium"),
    Type("Created By","p_created_at","SS_small"),
    Type("Assign To","p_assign_to","SS_small"),
    
    Type("Date Added", "date", "Xmedium"),
    Type("","btns","Xmedium"),
    
]


