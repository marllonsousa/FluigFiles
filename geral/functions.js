// Ação ao clicar no botão documento
$(document).ready(function () {
    displayBtnFiles()
    $(".copyCode").click(function (e) {
        e.preventDefault()
        navigator.clipboard.writeText($(this).val())
        FLUIGC.toast({
            title: '',
            message: 'O Código ' + $(this).val() + ' foi copiado!',
            type: 'success'
        });
    })
})
function viewDoc() {
    var url = "https://interconstrutora136393.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=";
    parent.open(url + $("#documento").val());
}
function visualizarSolicitacao() {
    var url = "https://interconstrutora136393.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId="
    parent.open(url + $("#solicitacao").val());
}
function anexarFile(nome, input) {
    var btn = parent.document.getElementById("ecm-navigation-inputFile-clone");
    if (btn && document.createEvent) {
        btn.setAttribute("data-on-camera", "true");
        if (nome && input) {
            btn.setAttribute("data-file-name-camera", nome)
            btn.setAttribute("data-inputNameFile", input)
        }
        btn.click();
    }
}