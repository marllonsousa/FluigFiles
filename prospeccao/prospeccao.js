$(document).ready(function () {
    $("#show_fNTorna,#show_fNFisc,#show_fNFinc,#show_preViabApv,#show_estOrc,#show_preViab_infos,#show_mntRpv,#show_cttAprv,#tktMedio,#div_tktMedio,#presRetorno,#dados_corretor").hide()

    if (ATV) {
        $(".select2").select2();
        // CONTROLA CLICKS
        $("select[name$='slt_fmrNeg']").change(function () {
            var click = $(this).val();
            switch (click) {
                case "Compra e Venda":
                    $("#show_fNTorna,#show_fNFisc,#show_fNFinc").hide();
                    break;
                case "Permuta Física":
                    $("#show_fNFisc").show();
                    $("#show_fNFinc,#show_fNTorna").hide();
                    break;
                case "Permuta Financeira":
                    $("#show_fNFinc").show();
                    $("#show_fNFisc,#show_fNTorna").hide();
                    break;
                case "Permuta Física e Financeira":
                    $("#show_fNFisc,#show_fNFinc").show();
                    $("#show_fNTorna").hide();
                    break;
                case "Permuta Física e Torna":
                    $("#show_fNFisc,#show_fNTorna").show();
                    $("#show_fNFinc").hide();
                    break;
                case "Permuta Financeira e Torna":
                    $("#show_fNFinc,#show_fNTorna").show();
                    $("#show_fNFisc").hide();
                    break;
                case "Permuta Física, Financeira e Torna":
                    $("#show_fNTorna, #show_fNFisc, #show_fNFinc").show();
                    break;
                default:
                    $("#show_fNTorna, #show_fNFisc, #show_fNFinc").hide();
                    break;
            }
        });
        // Levantamento Orçamento
        show_on_click("rd_estOrc", "Não", null, "show_estOrc")
        hide_on_load("rd_estOrc", "Não", null, "show_estOrc")
        // Pre-Viabilidade
        $("[name$='rd_preViab']").click(function () {
            switch ($(this).val()) {
                case "Não":
                    $("#show_preViabApv").show()
                    $("#show_preViab_infos").hide()
                    break;
                case "Sim, solicitar informações p/ Orçamento":
                case "Sim (Do Estudo de massa)":
                case "Sim, solicitar informações p/ Viabilidade":
                    $("#show_preViab_infos").show()
                    $("#show_preViabApv").hide()
                    break;
                default:
                    $("#show_preViabApv,#show_preViab_infos").hide()
                    break;
            }
        })
        // Analise Minuta
        show_on_click("rd_apvMnt", "Não", null, "show_mntRpv")
        hide_on_load("rd_apvMnt", "Não", null, "show_mntRpv")
        // Pre Viabilidade
        show_on_click("rd_preViab", "Não", null, "show_preViabApv")
        hide_on_load("rd_preViab", "Não", null, "show_preViabApv")
        // Negociacao Terrenista
        show_on_click("rd_negTrr", "Sim", null, "dados_corretor")
        hide_on_load("rd_negTrr", "Sim", null, "dados_corretor")
        // Presidencia
        show_on_click("rd_PresTrrAutorizado", "Sim", null, "div_tktMedio")
        show_on_click("rd_PresTrrAutorizado", "Não", null, "presRetorno")
        hide_on_load("rd_PresTrrAutorizado", "Sim", null, "div_tktMedio")
        hide_on_load("rd_PresTrrAutorizado", "Não", null, "presRetorno")
        // Assinatura do contrato (INTER E TERRENISTA)
        show_on_click("rd_cttAprv", "Sim", null, "show_cttAprv")
        hide_on_load("rd_cttAprv", "Sim", null, "show_cttAprv")
        // Analise Comercial - tktMedio
        show_on_click("rd_ansComrc", "Sim", null, "tktMedio")
        hide_on_load("rd_ansComrc", "Sim", null, "tktMedio")
    }
});

// Controlador dos clicks (nome do input,valor pra verificar, ..., id da div pra exibir)
function show_on_click(campo, valor1, valor2, show) {
    $("[name$='" + campo + "']").click(function () {
        if (valor2 == null) {
            if ($(this).val() == valor1) {
                $("#" + show).show();
            } else {
                $("#" + show).hide();
            }
        } else {
            if ($(this).val() == valor1 || $(this).val() == valor2) {
                $("#" + show).show();
            } else {
                $("#" + show).hide();
            }
        }
    });
}
// Controla a exibição dos campos ocultos
function hide_on_load(campo, valor1, valor2, show) {
    if (valor2 == null) {
        if ($("[name$='" + campo + "']:checked").val() == valor1) {
            $("#" + show).show();
        } else {
            $("#" + show).hide();
        }
    } else {
        if ($("[name$='" + campo + "']:checked").val() == valor1 || $("[name$='" + campo + "']:checked").val() == valor2) {
            $("#" + show).show();
        } else {
            $("#" + show).hide();
        }
    }
}