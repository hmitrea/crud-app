/* eslint-disable */

// delete items from shopping list
const deletes = document.querySelectorAll('.delete')


function removeFromDatabase () {

}

// iterate through .delete buttons
deletes.forEach(btn => {
    btn.addEventListener('click', function() {
        var li = this.parentNode;
        var item = li.querySelector('.text').innerHTML;
        console.log('item is: ', item);
        // removeFromDatabase(item)
        li.remove();
    })
})

