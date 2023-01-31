const container = document.getElementById("container");
const kucuksayi = document.getElementById("islem");
const buyuksayi = document.getElementById("sonuc");
var ilksayi;
var ikincisayi;
var islem;
var sonuc;
var target;
container.addEventListener("click",hesapla);
function hesapla(e){
    target = e.target.id;
    switch(target){
        case "*":
            ilksayi = kucuksayi.value;
            kucuksayi.value = "";
            islem="*";
            return 0;
        case "%":
            ilksayi = kucuksayi.value;
            kucuksayi.value = "";
            islem="%";
            return 0;
        case "+":
            ilksayi = kucuksayi.value;
            kucuksayi.value = "";
            islem="+";
            return 0;
        case "-":
            ilksayi = kucuksayi.value;
            kucuksayi.value = "";
            islem="-";
            return 0;
        case "c":
            kucuksayi.value = "";
            buyuksayi.value = 0;
            return 0;
        case "=":
            ikincisayi = kucuksayi.value;
            kucuksayi.value = "";
            hesap();
            buyuksayi.value = sonuc;
            kucuksayi.value = sonuc;
            return 0;
        case "£":
            if(kucuksayi.value==""){
                kucuksayi.value="-";
                return 0;
            }
            kucuksayi.value = parseFloat(kucuksayi.value);
            kucuksayi.value = -1 * kucuksayi.value;
            return 0;
        default:
            kucuksayi.value=kucuksayi.value + target;
            return 0;
    }
}
function hesap(){
    ilksayi = parseFloat(ilksayi);
    ikincisayi = parseFloat(ikincisayi);
    switch(islem){
        case "%":
            sonuc = ilksayi/ikincisayi;
            return 0;
        case "*":
            sonuc = ilksayi*ikincisayi;
            return 0;
        case "-":
            sonuc = ilksayi-ikincisayi;
            return 0;
        case "+":
            sonuc = ilksayi+ikincisayi;
            return 0;

    }
}
