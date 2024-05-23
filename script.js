//ini js 
function kirim() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;
    var hasil = Number(angka1) *  Number(angka2) /2 ;
    document.getElementById("hasil").innerHTML = hasil ;
}
function jumlah() {
    var sisiA = document.getElementById("sisiA").value;
    var sisiB = document.getElementById("sisiB").value;
    var sisiC = document.getElementById("sisiC").value;
    var total = Number(sisiA) +  Number(sisiB) + Number(sisiC) ;
    document.getElementById("total").innerHTML = total ;
}


    

