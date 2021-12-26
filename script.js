const keycode = document.querySelector('.keycode-display');
const textDisplay = document.querySelector('.text-display');
const cards = document.querySelector('.cards');
const toggleButton = document.getElementById('theme-button');

document.addEventListener('DOMContentLoaded', ready)

function ready(){
    const html = document.querySelector('html');
    html.classList.add('light-theme');
    html.classList.remove('dark-theme');
    toggleButton.textContent = 'Dark theme';
}

window.addEventListener('keydown', function (e){
    const title = document.querySelector('title');
    title.innerHTML = `${e.keyCode} Event KeyCode`;
    textDisplay.style.display = 'none'
    keycode.style.display = 'inline-block'
    keycode.innerHTML = `${e.keyCode}`
    cards.innerHTML = `
    <div class="card event-key">
        <div class="card-header">
          event.key
        </div>
        <div class="card-content" onclick= "copied(this.textContent)">
         <span>${e.key === ' '? 'Space': e.key}</span>
        </div>
    </div>
    <div class="card event-which">
       <div class="card-header">
         event.keyCode
       </div>
       <div class="card-content" onclick= "copied(this.textContent)">
        <span>${e.keyCode}</span>
       </div>
    </div>
    <div class="card event-code">
         <div class="card-header">
            event.code
         </div>
        <div class="card-content" onclick= "copied(this.textContent)">
            <span>${e.code}</span>
        </div>
    </div>
</div>`
})

function copied(value){
    navigator.clipboard.writeText(value).then(
        function(){
            alert('Copied!')
        }
    )
}

let toggle = true;

toggleButton.addEventListener('click',function(){
    const html = document.querySelector('html');
    if(toggle){
        html.classList.add('light-theme');
        html.classList.remove('dark-theme');
        toggleButton.textContent = 'Dark theme';
        toggle = false;
    }
    else{
        html.classList.add('dark-theme');
        html.classList.remove('light-theme');
        toggleButton.textContent = 'Light theme';
        toggle = true;
    }
})