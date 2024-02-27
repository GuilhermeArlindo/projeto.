function main()
{
    var num = parseInt(document.getElementById("num").value);
    var resp = document.getElementById("resposta");

    if(document.getElementById("CF").checked==true)
        resp.innerHTML = cf(num);
    if(document.getElementById("FC").checked==true)
        resp.innerHTML = fc 
}

function cf(x)
{
    return (1.8*x + 32);
}

function fc(x)
{
    return ( (x-32)*5/9)
}
