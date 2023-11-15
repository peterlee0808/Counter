// set initial count
let count = 0;

// select value and buttons
const value =document.querySelector('#value');
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('squ')){
            count *=count;
        }
        else{
            count = 0;
        }
        // 再補一個判斷式，平方，上面的else 要改成else if
        // 如果數字大於1000，counter變成紅色
        if(count >0){
            value.style.color ="green";
        }
        if(count>1000){
            value.style.color="red";
        }
        if(count <0){
            value.style.color='brown'
        }
        if(count===0){
            value.style.color="#222";
        }
        
        value.textContent = count;
    });
});
