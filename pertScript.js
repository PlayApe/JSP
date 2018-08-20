

function calc() {
    var opt, optw, pro, prow, pes, pesw, result, p;
    opt = document.getElementById("opt").value;
    optw = document.getElementById("optw").value;
    pro = document.getElementById("pro").value;
    prow = document.getElementById("prow").value;
    pes = document.getElementById("pes").value;
    pesw = document.getElementById("pesw").value;
    p = document.getElementById("out");
    
    opt = parseInt(opt);
    optw = parseInt(optw);
    pro = parseInt(pro);
    prow = parseInt(prow);
    pes = parseInt(pes);
    pesw = parseInt(pesw);
    
    result = ((opt*optw)+(pro*prow)+(pes*pesw))/(optw+prow+pesw);
    //alert(result);
    p.innerHTML += result;
}
