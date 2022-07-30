$(document).ready(()=>{
    $.ajax({
        url: "/config.json",
        success: (data)=>{
            try {
                if(!data instanceof Object)data = JSON.parse(data);
                if(window.location.hash===""){
                    document.getElementsByClassName("loading-text")[0].innerHTML = "Link parameter error,and we will jump to"+data.backTo.sitename+"<dot>...</dot>"
                    setTimeout(()=>{
                        window.location.href = data.backTo.url;
                    },5000)
                    return;
                }
                let reg = new RegExp(/#(.*)/g);
                let base64 = reg.exec(window.location.hash)[1]
                let link = window.atob(base64)
                let referrer = document.referrer.split('/')[2];
                referrer = referrer===undefined?"":referrer;
                console.log(link,referrer)
                if(data.allowlist.length!=0){
                    let allowed = false
                    for(i in data.allowlist){
                        if(referrer.endsWith(data.allowlist[i])){
                            allowed = true;
                            break;
                        }
                    }
                    console.log("allowlist checked")
                    if(!allowed){
                        console.log("Blocked")
                        popUpWarning(data,link)
                        return
                    }
                    setTimeout(function(){
                        window.location.href = link
                    },3000)
                }
            } catch (error) {
                console.log(error)
                dump()
            }
        },
        error: ()=>{
            console.log("Config LOST")
            dump()
        }
    })
})
function popUpWarning(config,link){
    console.log("popUp")
    swal.fire({
        title: "Are you sure to visit?",
        text: "The URL does not belong to"+config.sitename+"，\nAre you sure to visit"+link+"？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sure",
        cancelButtonText: "Cancel",
      }).then(function(isConfirm){
        console.log(isConfirm)
        if (isConfirm) {
            console.log('setTimeout')
            setTimeout(function(){
                window.location.href = link
            },3000)
        }    
        else {
            window.opener=null;
            window.open('','_self');
            window.close();
            /* 微信浏览器关闭 */ 
            WeixinJSBridge.call('closeWindow');
        }
    })
}
function dump(){
    document.getElementsByClassName("loading-text")[0].innerHTML = "Parse error! Return to the previous page after 5 seconds..."
    setTimeout(()=>{
        window.location.href = document.referrer
    },5000)
    return;
}