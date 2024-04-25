const tcpy = document.getElementById("copiar")
const texto = document.getElementById("email")

function Linkedin(){
    var display = document.getElementById("loading").style.display;
if(display == "none")
    document.getElementById("loading").style.display = 'block',
    setTimeout( function() { window.location = 'https://www.linkedin.com/in/tiago-leonardo-schroeder-44200a241/' }, 750 );
else
    document.getElementById("loading").style.display = 'none';
    document.getElementById("paragrafo").style.display = 'none';
}

function Github(){
    var display = document.getElementById("loading").style.display;
if(display == "none")
    document.getElementById("loading").style.display = 'block',
    setTimeout( function() { window.location = 'https://github.com/TiagoLeoSchroeder' }, 1200 );
else
    document.getElementById("loading").style.display = 'none';
    document.getElementById("paragrafo").style.display = 'none';
}

function IrParaPagina(){
    var display = document.getElementById("loading").style.display;
if(display == "none")
    document.getElementById("loading").style.display = 'block',
    setTimeout( function() { window.location = '' }, 1200 );
else
    document.getElementById("loading").style.display = 'none';
    document.getElementById("paragrafo").style.display = 'none';
}

function Projetos(){
    var display = document.getElementById("loading").style.display;
if(display == "none")
    document.getElementById("loading").style.display = 'block',
    setTimeout( function() { window.location = '' }, 1200 ),
    alert('Este botão não possui uma funcionalidade ainda, no momento está apenas como decoração. Para acessar os projetos de sites, acesse meu Github.');
else
    document.getElementById("loading").style.display = 'none';
    document.getElementById("paragrafo").style.display = 'none';
}


function SobreMim(){
    var display = document.getElementById("loading").style.display;
if(display == "none")
    document.getElementById("loading").style.display = 'block',
    setTimeout( function() { window.location = '' }, 1200 );
else
    document.getElementById("loading").style.display = 'none';
    document.getElementById("paragrafo").style.display = 'none';
}


tcpy.addEventListener("click",(evt)=>{
    texto.select()
    texto.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(texto.value)
    alert("Copiado!");
})