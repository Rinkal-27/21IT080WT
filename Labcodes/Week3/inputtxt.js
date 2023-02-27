
function addItem() {
    console.log("addItem");
    const item=-document.getElementById("idItem").value;
    document.getElementById("idItem").value="";
    const list=document.getElementById("idListItems");
    const li=document.createElement("li").textContent=item;
    list.appendChild(li);
}


