let num_1 = '';
let result= '';

document.querySelectorAll('.box').forEach(function(number){
    number.addEventListener('click',
    function(){
        if (number.value != '+' && number.value != '-' && number.value != '*' && number.value != '/' && number.value != '=' && number.value != 'ac' && number.value != 'del'){
        num_1 += number.innerHTML
        document.querySelector('#screen_1').innerText = num_1
        }  
        else if (number.value == "+"){
            num_1 = num_1 + '+'
            document.querySelector('#screen_1').innerText = ''
            document.querySelector('#screen_2').innerText = num_1
        }
        else if (number.value == "-"){
            num_1 = num_1 + '-'
            document.querySelector('#screen_1').innerText = ''
            document.querySelector('#screen_2').innerText = num_1
        }
        else if (number.value == "*"){
            num_1 = num_1 + "*"
            document.querySelector('#screen_1').innerText = ''
            document.querySelector('#screen_2').innerText = num_1
        }
        else if (number.value == "/"){
            num_1 = num_1 + '/'
            document.querySelector('#screen_1').innerText = ''
            document.querySelector('#screen_2').innerText = num_1
        }
        else if (number.value == "="){
            result = eval(num_1)
            num_1=''
            document.querySelector('#screen_1').innerText = ''
            document.querySelector('#screen_2').innerText = result
        }
        else if (number.value == "ac"){
          document.querySelector('#screen_1').innerText = ''
          document.querySelector('#screen_2').innerText = ''
          result = ''
          num_1 = ''
        }
        else if (number.value == 'del'){
            num_1 = num_1.slice(0,-1)
            document.querySelector('#screen_1').innerText = num_1
        }

    })
})
