
var oBilme = 0
var oBilmeme = 0
var pcBilme = 0
var pcBilmeme = 0
var oBerabere = 0
var pcBerabere = 0
var oOran = 0
var pcOran = 0
var skor = 0
var seçtiğim = rastgeleSeçim()
function rastgeleSeçim() {
  const sayı = Math.floor(Math.random() * 3);
  if (sayı === 0) return "taş";
  if (sayı === 1) return "kağıt";
  return "makas";
}

function taş(){
    const seçim = "taş"
    if(seçtiğim === "makas"){
            alert("Kazandınız. Benim Seçimim " + seçtiğim + " idi")
            document.getElementById("dogru").play();
            oBilme++
            oBilmeKaydet()
            document.getElementById("oBilme").textContent = oBilme
            pcBilmeme++
            pcBilmemeKaydet()
            document.getElementById("pcBilmeme").textContent = pcBilmeme
            skor += 5
            skorKaydet()
            document.getElementById("skor").textContent = "Skorunuz: " + skor
            pc()
            o()
            seçtiğim = rastgeleSeçim();
        }else if(seçim === seçtiğim){
            alert("Berabere")
            pcBerabere++
            pcBerabereKaydet()
            document.getElementById("pcBerabere").textContent = pcBerabere
            oBerabere++
            oBerabereKaydet()
            document.getElementById("oBerabere").textContent = oBerabere
            pc()
            o()
            seçtiğim = rastgeleSeçim();
        }else{
            alert("Kaybettiniz. Benim Seçimim " + seçtiğim + " idi.")
            document.getElementById("yanlis").play();
            oBilmeme++
            oBilmemeKaydet()
            document.getElementById("oBilmeme").textContent = oBilmeme
            pcBilme++
            pcBilmeKaydet()
            document.getElementById("pcBilme").textContent = pcBilme
            pc()
            o()
            seçtiğim = rastgeleSeçim();
            if(skor<2){
                skor = 0
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }else{
                skor -= 3
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }
        }
}

function kağıt(){
    const seçim = "kağıt"
        if(seçtiğim === "taş"){
            alert("Kazandınız. Benim Seçimim " + seçtiğim + " idi.")
            document.getElementById("dogru").play();
            oBilme++
            oBilmeKaydet()
            document.getElementById("oBilme").textContent = oBilme
            pcBilmeme++
            pcBilmemeKaydet()
            document.getElementById("pcBilmeme").textContent = pcBilmeme
            skor += 5
            skorKaydet()
            document.getElementById("skor").textContent = "Skorunuz: " + skor
            pc()
            o()
            seçtiğim = rastgeleSeçim();
        }else if(seçim === seçtiğim){
            alert("Berabere")
            pcBerabere++
            pcBerabereKaydet()
            document.getElementById("pcBerabere").textContent = pcBerabere
            oBerabere++
            oBerabereKaydet()
            document.getElementById("oBerabere").textContent = oBerabere
            pc()
            o()
            seçtiğim = rastgeleSeçim();
        }else{
            alert("Kaybettiniz. Benim Seçimim " + seçtiğim + " idi.")
            document.getElementById("yanlis").play();
            oBilmeme++
            oBilmemeKaydet()
            document.getElementById("oBilmeme").textContent = oBilmeme
            pcBilme++
            pcBilmeKaydet()
            document.getElementById("pcBilme").textContent = pcBilme
            pc()
            o()
            seçtiğim = rastgeleSeçim();
            if(skor<2){
                skor = 0
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }else{
                skor -= 3
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }
        }
    }

function makas(){
    const seçim = "makas"
    if(seçtiğim === "kağıt"){
            alert("Kazandınız. Benim Seçimim " + seçtiğim + " idi.")
            document.getElementById("dogru").play();
            oBilme++
            oBilmeKaydet()
            document.getElementById("oBilme").textContent = oBilme
            pcBilmeme++
            pcBilmemeKaydet()
            document.getElementById("pcBilmeme").textContent = pcBilmeme
            skor += 5
            skorKaydet()
            document.getElementById("skor").textContent = "Skorunuz: " + skor
            pc()
            o()
            seçtiğim = rastgeleSeçim();
        }else if(seçim === seçtiğim){
            alert("Berabere")
            pcBerabere++
            pcBerabereKaydet()
            document.getElementById("pcBerabere").textContent = pcBerabere
            oBerabere++
            oBerabereKaydet()
            document.getElementById("oBerabere").textContent = oBerabere
            pc()
            o()
            seçtiğim = rastgeleSeçim();
        }else{
            alert("Kaybettiniz. Benim Seçimim " + seçtiğim + " idi.")
            document.getElementById("yanlis").play();
            oBilmeme++
            oBilmemeKaydet()
            document.getElementById("oBilmeme").textContent = oBilmeme
            pcBilme++
            pcBilmeKaydet()
            document.getElementById("pcBilme").textContent = pcBilme
            pc()
            o()
            seçtiğim = rastgeleSeçim();
            if(skor<2){
                skor = 0
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }else{
                skor -= 3
                skorKaydet()
                document.getElementById("skor").textContent = "Skorunuz: " + skor
            }
        }
}

function skorKaydet() {
    let a = localStorage.setItem("skor", skor);
}

function oBilmeKaydet() {
    localStorage.setItem("oBilme", oBilme);
}

function oBilmemeKaydet() {
    localStorage.setItem("oBilmeme", oBilmeme);
}

function pcBilmeKaydet() {
    localStorage.setItem("pcBilme", pcBilme);
}

function pcBilmemeKaydet() {
    localStorage.setItem("pcBilmeme", pcBilmeme);
}

function pcBerabereKaydet() {
    localStorage.setItem("pcBerabere", pcBerabere);
}

function oBerabereKaydet() {
    localStorage.setItem("oBerabere", oBerabere);
}

function oOranKaydet() {
    localStorage.setItem("oOran", oOran);
}

function pcOranKaydet() {
    localStorage.setItem("pcOran", pcOran);
}

window.onload = function () {
    const kayitliSkor = localStorage.getItem("skor");
    if (kayitliSkor !== null) {
        skor = parseInt(kayitliSkor);
        document.getElementById("skor").textContent = "Skorunuz: " + skor;
    }

    const kayitliOBilme = localStorage.getItem("oBilme");
    if (kayitliOBilme !== null) {
        oBilme = parseInt(kayitliOBilme);
        document.getElementById("oBilme").textContent = oBilme;
    }

    const kayitliOBilmeme = localStorage.getItem("oBilmeme");
    if (kayitliOBilmeme !== null) {
        oBilmeme = parseInt(kayitliOBilmeme);
        document.getElementById("oBilmeme").textContent = oBilmeme;
    }

    const kayitliPcBilme = localStorage.getItem("pcBilme");
    if (kayitliPcBilme !== null) {
        pcBilme = parseInt(kayitliPcBilme);
        document.getElementById("pcBilme").textContent = pcBilme;
    }

    const kayitliPcBilmeme = localStorage.getItem("pcBilmeme");
    if (kayitliPcBilmeme !== null) {
        pcBilmeme = parseInt(kayitliPcBilmeme);
        document.getElementById("pcBilmeme").textContent = pcBilmeme;
    }

    const kayitliPcBerabere = localStorage.getItem("pcBerabere");
    if (kayitliPcBerabere !== null) {
        pcBerabere = parseInt(kayitliPcBerabere);
        document.getElementById("pcBerabere").textContent = pcBerabere;
    }

    const kayitliOBerabere = localStorage.getItem("oBerabere");
    if (kayitliOBerabere !== null) {
        oBerabere = parseInt(kayitliOBerabere);
        document.getElementById("oBerabere").textContent = oBerabere;
    }

    const kayitliOOran= localStorage.getItem("oOran");
    if (kayitliOOran !== null) {
        oOran = parseInt(kayitliOOran);
        document.getElementById("oOran").textContent = "%" + oOran;
    }

    const kayitliPcOran = localStorage.getItem("pcOran");
    if (kayitliPcOran !== null) {
        pcOran = parseInt(kayitliPcOran);
        document.getElementById("pcOran").textContent = "%" + pcOran;
    }
};

function pc(){
    pcOran = (pcBilme/(pcBilme+pcBilmeme+pcBerabere))*100
    document.getElementById("pcOran").textContent = "%" + Math.round(pcOran)
    pcOranKaydet()
}

function o(){
    oOran = (oBilme/(oBerabere+oBilme+oBilmeme))*100
    oOranKaydet()
    document.getElementById("oOran").textContent = "%" + Math.round(oOran)
}

function sıfırla() {
    if (confirm("Skorları sıfırlamak istediğine emin misin?")) {
        skor = 0;
        oBilme = 0;
        oBilmeme = 0;
        pcBilme = 0;
        pcBilmeme = 0;
        oBerabere = 0;
        pcBerabere = 0;
        oOran = 0;
        pcOran = 0;

        localStorage.removeItem("skor");
        localStorage.removeItem("oBilme");
        localStorage.removeItem("oBilmeme");
        localStorage.removeItem("pcBilme");
        localStorage.removeItem("pcBilmeme");
        localStorage.removeItem("oBerabere");
        localStorage.removeItem("pcBerabere");
        localStorage.removeItem("oOran");
        localStorage.removeItem("pcOran");

        document.getElementById("skor").textContent = "Skorunuz: 0";
        document.getElementById("oBilme").textContent = "0";
        document.getElementById("oBilmeme").textContent = "0";
        document.getElementById("pcBilme").textContent = "0";
        document.getElementById("pcBilmeme").textContent = "0";
        document.getElementById("pcBerabere").textContent = "0";
        document.getElementById("oBerabere").textContent = "0";
        document.getElementById("oOran").textContent = "%0";
        document.getElementById("pcOran").textContent = "%0";
    }
}