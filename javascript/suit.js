var tanya = true;
while (tanya) {
        //menampilkan pilihan player
        var p = prompt("pilih : kertas, batu, gunting");
        //menampilkan bilangan random
        var comp = Math.random();

        if (comp < 3.4) {
                comp = "kertas";
        } else if (comp >= 3.4 && comp < 6.7) {
                comp = "batu";
        } else {
                comp = "gunting";
        }

        var hasil = "";
        //menentukan rules
        if (p == comp) {
                hasil = "SERI";
        } else if (p == "kertas") {
                hasil = comp == "batu" ? "MENANG" : "KALAH";
        } else if (p == "batu") {
                hasil = comp == "gunting" ? "MENANG" : "KALAH";
        } else if (p == "gunting") {
                hasil = comp == "kertas" ? "MENANG" : "KALAH";
        } else {
                hasil = "memasukan pilihan yang salah";
        }

        //tampilkan hasilnya
        alert(
                "player memilih : " +
                        p +
                        "\ncomputer memilih : " +
                        comp +
                        "\nmaka hasilnya : player " +
                        hasil
        );
        tanya = confirm("bermain lagi?");
}
alert("terima kasih sudah bermain");
