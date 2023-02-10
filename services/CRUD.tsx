

export async function deleteData({title, id}:any) {
    await fetch(`http://localhost:3000/api/${title.toLowerCase()}/${id}`,{
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return 1
}
