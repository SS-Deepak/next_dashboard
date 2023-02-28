

export async function deleteData({title, id}:any) {
    await fetch(`${process.env.BASE_PATH}/${title.toLowerCase()}/${id}`,{
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    return 1
}
