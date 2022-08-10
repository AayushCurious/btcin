// const top= document.querySelector('.top');


// const menubar=document.querySelector('.menubar');
const wallet=document.querySelector('.wallet');
// const bodymain=document.querySelector('.body-main');
const referal=document.querySelector('.input');
const popup=document.querySelector('.popuptext')
const recipe=document.querySelector('.recipe')
// const get=document.querySelector('.GET');
// const accountrecords=document.querySelector('.account-records');
// const taken=document.querySelector('.taken');
// const given=document.querySelector('.given');
// const globalid=document.querySelector('.global-id');
// const globalReferal=document.querySelector('.globalReferal');


function copy(){
    var copyText = document.getElementById("text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}


async function connectWallet(){
    accounts=await window.ethereum.request({method:"eth_requestAccounts"}).catch((err)=>{
        console.log(err.code)
    })
    
    
    wallet.innerText="The wallet is connected";
    let referalLink=accounts[0];
    referal.innerText=referalLink.slice(6,12)
    console.log(accounts)
    recipe.value=accounts
    }
    

