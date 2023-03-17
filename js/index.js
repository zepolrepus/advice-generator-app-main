const advice_id = document.querySelector('#advice_id');
const advice_text = document.querySelector('#advice_text');

async function getAdvices() {
    let res = await fetch('https://api.adviceslip.com/advice');
    let json = await res.json();
    
    
    advice_id.textContent = `#${json.slip.id}`;
    advice_text.textContent = json.slip.advice;

}

document.addEventListener('click', async (e)=>{
    if(e.target.matches('.change') || e.target.matches('.changeIcon')){
        getAdvices();
    }
});