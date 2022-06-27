let bt = document.getElementById('Logar');
let form = document.getElementById('formLogin');


bt.addEventListener("click", fnEntrar);

function fnEntrar(){
    form.style.display = 'block';
}

let btf = document.getElementById('fechar');

btf.addEventListener("click", fnFechar);

function fnFechar(){
    form.style.display = 'none';
}

let formu = document.getElementById('formLogin');
let email = document.getElementById('user');
let senha = document.getElementById('senha');
//let tk = localStorage.getItem('token');
let iconeBusca = document.getElementById('idBusca');
let btEntrar = document.getElementById('entrar');

let btT = document.getElementById('btMsgT');
let msgLoginT = document.getElementById('msgLoginTrue');

let msgLoginF = document.getElementById('msgLoginFalse');
let btF = document.getElementById('btMsgF');

/*
if(tk){
    iconeBusca.style.display = 'block';
}
*/
btEntrar.addEventListener("click", fnValidar);
function fnValidar(){
    let contE = email.value.length;
    let contS = senha.value.length;
    if(contE < 3 || contS < 3){
        email.value = "";
        senha.value = "";
        msgLoginF.style.display = 'block';
        btF.addEventListener("click", function(e){
            msgLoginF.style.display = 'none';
            e.preventDefault();
        })
    }
    formu.addEventListener('submit', function(e) {
        axios.post('https://projeto-web-dautfpr.herokuapp.com/cadastrar', {
            email: email.value,
            password: senha.value
        })
        .then(function (response) {
            //console.log(response.data.token);
            //localStorage.setItem('token', response.data.token);
            form.style.display = 'none';
            iconeBusca.style.display = 'block';
            email.value = "";
            senha.value = "";
            msgLoginT.style.display = 'block';
            btT.addEventListener("click", function(e){
                msgLoginT.style.display = 'none';
                e.preventDefault();
            })
        })
        .catch(function(err){
            email.value = "";
            senha.value = "";
            msgLoginF.style.display = 'block';
            btF.addEventListener("click", function(e){
                msgLoginF.style.display = 'none';
                e.preventDefault();
            })
        })
        e.preventDefault();
    });
}