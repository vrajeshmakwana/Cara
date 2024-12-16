// ======================== Cart Removing Item when Click on remove button ============== //
let removeBtn = document.querySelectorAll("#remove")
let removeTableData = document.querySelectorAll("#RemoveData")
let table = document.querySelector("table")


// =============== Setting Id for each row ======================= //
// for (let i = 1; i < table.rows.length; i++) 
//     {
        
//         table.rows[i].id  = "row" + i;
//     }
// ========== These is used to remove data from the database and displaying appropriate message =============== //
removeBtn.forEach(value => 
    value.addEventListener("click",(e) =>{
        e.preventDefault();
        let pid = e.target.getAttribute("data-pid")
        
             
        
        let option = {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
        
            },
            
            body: JSON.stringify(pid) 
          }
          
        let result = confirm("Are you sure you want to remove Cartoon T-Shirt  from your cart")
        if (result)
        {

            let response = fetch("http://127.0.0.1:5000/removeItem",option) 
            
        
            response.then((res) =>{
                alert("Item is Removed Successfully")
                
                if (res.ok) 
                {
                    let deleterow = document.getElementById("row"+pid)
                    deleterow.classList.add("fade-out")
                    deleterow.remove()
                } 
                else 
                {
                    alert("Something Went Wrong")
                }

                
                
            })           
        }
       
    
}))