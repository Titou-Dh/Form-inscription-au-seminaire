function test() {
    if (document.getElementById("band").value == "") {
        document.getElementById("tb").setAttribute("hidden", "");
        document.getElementById("bc").setAttribute("hidden", "");
    } else {
        document.getElementById("tb").removeAttribute("hidden");
        document.getElementById("bc").removeAttribute("hidden");
    }
}

function emp() {
    n = document.getElementById("n").value;
    if (n == "") {
        ch = "";
        document.getElementById("inputs").innerHTML = ch;
    } else if (isNaN(n)) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Le nombre de participant doit étre numérique!",
        });
    } else {
        ch = "";
        n = parseInt(n);
        for (i = 1; i <= n; i++) {
            ch =
                ch +
                '<fieldset class="mb-3"><legend>employé(e) numéro ' +
                i +
                ':</legend><div class="row w-100 "><div class="col-4"><input class="col-4 form-control" name="n' +
                i +
                '" id="n' +
                i +
                '" type="text" placeholder="Nom"></div><div class="col-4"><input class="col-4 form-control" name="p' +
                i +
                '" id="p' +
                i +
                '" type="text" placeholder="prénom"></div><div class="col-4"><input type="text" class="col-4 form-control" name="prof' +
                i +
                '" id="prof' +
                i +
                '" placeholder="Profession" ></div><div class="col-8"><input type="text" class="col-8 form-control" name="email' +
                i +
                '" id="email' +
                i +
                '" placeholder="email" ></div><div class="col-4 mb-3"><input type="text" class="col-4 form-control" name="tel' +
                i +
                '" id="tel' +
                i +
                '" placeholder="Téléphone" ></div><lengend>Hébergement *</lengend><div class="form-group mb-3 px-3"><select class="form-control  " name="" id=""><option value="">Aucune</option></select></div></div></fieldset>';
        }
        document.getElementById("inputs").innerHTML = ch;
    }
}

function exonore() {
    document.getElementById("Exonore").setAttribute("hidden", "");
    document.getElementById("te").setAttribute("hidden", "");
}
function exonore2() {
    document.getElementById("Exonore").removeAttribute("hidden");
    document.getElementById("te").removeAttribute("hidden");
}
function virm() {
    document.getElementById("cheq").style.backgroundColor = "";
    document.getElementById("cheq").style.color = "";

    document.getElementById("cash").style.backgroundColor = "";
    document.getElementById("cash").style.color = "";

    document.getElementById("bank").style.background = "#38a1f4";
    document.getElementById("bank").style.color = "#fefefe";
    document.getElementById("Chéques image").setAttribute("hidden", "");
    document.getElementById("nom_bonk").removeAttribute("hidden");
    document.getElementById("num").removeAttribute("hidden");
    document.getElementById("titre").setAttribute("hidden", "");
    document.getElementById("num").placeholder = "Date de virement";
    document.getElementById("i").innerHTML +=
        "<i class='input-icon fa fa-bank'></i>";
}
function chq() {
    document.getElementById("bank").style.backgroundColor = "";
    document.getElementById("bank").style.color = "";

    document.getElementById("cheq").style.backgroundColor = "";
    document.getElementById("cheq").style.color = "";

    document.getElementById("cash").style.backgroundColor = "";
    document.getElementById("cash").style.color = "";

    document.getElementById('cheq').style.background = "#38a1f4";
    document.getElementById('cheq').style.color = "#fefefe";
    document.getElementById("nom_bonk").removeAttribute("hidden");
    document.getElementById("num").removeAttribute("hidden");
    document.getElementById("titre").removeAttribute("hidden");
    document.getElementById("num").placeholder = "numéro de Chéque";
    document.getElementById("i").innerHTML +=
        "<i class='input-icon fa fa-bank'></i>";
    document.getElementById("Chéques image").removeAttribute("hidden");
}
function inst() {
    document.getElementById('bank').style.backgroundColor = '';
    document.getElementById('bank').style.color = '';

    document.getElementById('cheq').style.backgroundColor = '';
    document.getElementById('cheq').style.color = '';

    document.getElementById('cash').style.backgroundColor = '';
    document.getElementById('cash').style.color = '';

    document.getElementById('cash').style.background = "#38a1f4";
    document.getElementById('cash').style.color = "#fefefe";
    
    document.getElementById("nom_bonk").setAttribute("hidden", "");
    document.getElementById("num").setAttribute("hidden", "");
    document.getElementById("titre").setAttribute("hidden", "");
    document.getElementById("i").innerHTML =
        '<input hidden type="text" id="nom_bonk"  class="form-control mb-3" name="nom_bank" placeholder="Nom de la Banque" />';
    document.getElementById("Chéques image").setAttribute("hidden", "");
}
function verif() {
    if (f.nom_soc.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "nom société est obligatoire !",
        });
        return false;
    }
    // }else if (!(/^[A-Za-z]*$/.test(f.nom_soc.value))) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Erreur',
    //         text: 'nom societé doit être alphbitque !'
    //     });
    //     return false;

    // }

    if (f.band.value != "" && f.bande.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "le fichier de bande commande est obligatoire !",
        });
        return false;
    }
    if (f.adr_soc.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "l'adresse de société est obligatoire!",
        });
        return false;
    }
    if (f.mail_soc.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "l'email de société est obligatoire!",
        });
        return false;
    } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            f.email_soc.value
        )
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Le format de l'e-mail de société n'est pas valide !",
        });
        return false;
    }

    if (f.tel_soc.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "le téléphone de société est obligatoire!",
        });
        return false;
    } else if (
        !(
            /^[0-9-]{8}$/.test(f.tel_soc.value) ||
            /^[+]+[0-9-]{11}$/.test(f.tel_soc.value)
        )
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Le format de le téléphone de société n'est pas valide !",
        });
        return false;
    }

    if (f.tunisia_regions.selectedIndex == 0) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "la région de société est obligatoire!",
        });
        return false;
    }
    n = document.getElementById("n").value;
    if (n == "" || isNaN(n)) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Le nombre de participant est obligatoire!",
        });
        return false;
    }

    ch = "";
    n = parseInt(n);
    for (i = 1; i <= n; i++) {
        nom = document.getElementById("n" + i).value;
        p = document.getElementById("p" + i).value;
        prof = document.getElementById("prof" + i).value;
        email = document.getElementById("email" + i).value;
        tel = document.getElementById("tel" + i).value;

        if (!/^[A-Za-z]/.test(nom)) {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Le nom de participant numéro " + i + " est obligatoire !",
            });
            return false;
        }
        if (!/^[A-Za-z]/.test(p)) {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Le prenom de participant numéro " + i + " est obligatoire !",
            });
            return false;
        }
        if (
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(
                email
            )
        ) {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text:
                    "Le format de l'e-mail de participant numéro " +
                    i +
                    " n'est pas valide !",
            });
            return false;
        }
        if (!(/^[0-9-]{8}$/.test(tel) || /^[+]+[0-9-]{11}$/.test(tel))) {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text:
                    "Le format de tel de participant numéro " + i + " n'est pas valide !",
            });
            return false;
        }
    }
    if (f.ex[0].checked == f.ex[1].checked) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Attestation d'éxonoration est obligatoire!",
        });
        return false;
    }

    if (f.ex[0].checked && f.Exonore.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Attestation d'éxonoration est obligatoire!",
        });
        return false;
    }

    if (!/^[A-Za-z- -]/.test(f.nom_res.value) || f.nom_res.value.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "vérifier le nom et prénom du responsable de la formation !",
        });
        return false;
    }
    if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            f.email_res.value
        )
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "vérifier l'e-mail du responsable de la formation !",
        });
        return false;
    }
    if (
        !(
            /^[0-9-]{8}$/.test(f.GSM_res.value) ||
            /^[+]+[0-9-]{11}$/.test(f.GSM_res.value)
        )
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Le format de GSM de résponsable de la formation n'est pas valide !",
        });
        return false;
    }
    if (f.myfile.value == "") {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "cachet et signature obligatoire !",
        });
        return false;
    }
    if (
        document.querySelector('input[name="heb"]:checked')?.value.length ==
        undefined
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Choisissez votre hebergement !",
        });
        return false;
    }

    if (
        f.payment[0].checked == f.payment[1].checked &&
        f.payment[1].checked == f.payment[2].checked
    ) {
        Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Détails de paiement est obligatoire !",
        });
        return false;
    }

    if (f.payment[0].checked) {
        if (f.num.value == "") {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "date de virement est obligatoire !",
            });
            return false;
        }
        if (f.nom_bank.value == "") {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Nom de la Banque est obligatoire !",
            });
            return false;
        }
    }
    if (f.payment[1].checked) {
        if (f.num.value == "") {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "numéro de virement est obligatoire !",
            });
            return false;
        }
        if (f.nom_bank.value == "") {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Nom de la Banque est obligatoire !",
            });
            return false;
        }
        if (f.file3.value == "") {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Chéques est obligatoire !",
            });
            return false;
        }
    }

    return true;
}
