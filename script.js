const balance=document.getElementById('balance');
const moneycredit=document.getElementById('money-credit');
const moneydebit=document.getElementById('money-debit');
const list=document.getElementById('list');
const addform=document.getElementById('add-form');
const reason=document.getElementById('reason');
const amount=document.getElementById('Amount');

const Transactions=[
    {id:1, reason:'salary',amount:2000} ,
    {id:2, reason:'bills',amount:-500} ,
    {id:3, reason:'party',amount:-100} ,
    {id:4, reason:'cloths',amount:200} 
]
let transactions=Transactions;
 function displaytransaction(transactions)
 {
     const type=transactions.amount > 0 ? '+':'-';
     const transactionLI=document.createElement('li');
     transactionLI.classList.add(transactions.amount > 0 ? 'credit':'debit');
     transactionLI.innerHTML=`
     ${transactions.reason}<span>${transactions.amount}</span>
     <button class="dlt-btn" >X</button>
     `
     list.appendChild(transactionLI);
 }

 function init()
 {
     list.innerHTML='';
     transactions.forEach(displaytransaction);
     updatebalances();
 }
 init();
 function createid() {
    return Math.floor(Math.random() * 100000000000);
};
function addtransaction(e){
    e.preventDefault();
    if(reason.value.trim()==='' || amount.value.trim()===''){
        alert('please provide reason and amount for transaction')
    }
    else
    {
    const transaction={
        id: createid(),
        reason: reason.value,
        amount:+amount.value
    }
    transactions.push(transaction);
    displaytransaction(transaction);
    updatebalances();
    reason.value='';
    amount.value='';
}
};
function updatebalances(){
    const tranactionamount=transactions.map(transaction=> transaction.amount);
    const totalbalance=tranactionamount.reduce((acc,amount)=>(acc+=amount),0);
    const crbal=tranactionamount.filter(amount=>amount>0).reduce((acc,amount)=>(acc+=amount),0);
    const dbbal=tranactionamount.filter(amount=>amount<0).reduce((acc,amount)=>(acc+=amount),0);
    balance.innerText=`$${totalbalance}`;
    moneycredit.innerText=`$${crbal}`;
    moneydebit.innerText=`$${dbbal}`;

    
};
 addform.addEventListener('submit', addtransaction);