let inputEl = document.getElementById('input');
let btnEl = document.getElementById('btn');
let listEl = document.getElementById('list');

btnEl.addEventListener('click', function(){
    if (inputEl.value === '') {
        alert('Please enter a value');
        return;
    }else{
        let listItem = document.createElement('li');
        listItem.textContent = "📝 ";
        let span = document.createElement('span');
        span.textContent = inputEl.value;
        let delItem = document.createElement('div');
        delItem.textContent = 'x';
        listItem.appendChild(span);
        listItem.appendChild(delItem);
        listEl.appendChild(listItem);
    }
        inputEl.value = '';
        save();
});
        listEl.addEventListener('click', function(e){
            if(e.target.tagName === "SPAN"){
                e.target.classList.toggle('checked');
                save();
            }
            else if(e.target.tagName === "DIV"){
                e.target.parentElement.remove();
                save();
            }
        }, false); 

    function save(){
        localStorage.setItem('data', listEl.innerHTML);
    };

    function display(){
        listEl.innerHTML = localStorage.getItem('data');
    }
    display();