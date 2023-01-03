//  BT5: IN SỐ NGUYÊN TỐ 
document.getElementById('btnInSo').onclick = function(){
    let nhapSo = +document.getElementById('nhapSoN').value;
    let ketQua = '';
    for(let iSo = 2; iSo <= nhapSo; iSo ++){
        let KtSNT = true;
        for(let i = 2; i <= Math.sqrt(iSo); i ++){
            if(iSo % i === 0){
                KtSNT = false;
                break;
            }
        }
        if(KtSNT){
            ketQua += iSo + ' ';
        }
    }
    document.getElementById('ketQua5').innerHTML = ketQua; 
}