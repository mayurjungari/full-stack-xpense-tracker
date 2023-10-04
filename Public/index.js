

document.addEventListener('DOMContentLoaded', () => {
    const unorderlist = document.getElementById('unlist');
    console.log('hello')

async function fetchdata()
{

try
{
    const response= await fetch('/expense/getdata')
    const data=  await response.json();
 data.forEach(item => {
    const li=document.createElement('li');
    li.textContent=`${item.ID}---${item.Price} Rs---${item.Reason}-----${item.Desc}`
    //--------------------adding delete button
    const deletebutton=document.createElement('button')
    deletebutton.className='btn-primary delete'
    deletebutton.type='button'
    deletebutton.textContent='Delete'

    //-----adding event listener to delebutton
    deletebutton.addEventListener('click',async ()=>{
        try
      {  const response = await fetch(`/expense/deletedata/${item.ID}`,{
            method : 'DELETE'
        }) 
        if (response.ok) {
                  li.remove();
        } else {
            console.error('Error deleting data:');
        }
       }
       catch(error)
       {
            console.log(error)
       }

    })
    li.appendChild(deletebutton)
    unorderlist.appendChild(li)
 });


}
 catch (error) {
    console.log(error)
    
}





}
fetchdata();
   
});
