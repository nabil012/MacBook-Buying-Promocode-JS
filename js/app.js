// MEMORY***************

function memoryCost (number,cost){
    const memoryType  = document.getElementById('memory-'+number)
const memoryPrice = document.getElementById('memory')
memoryPrice.innerText = cost
totalCosting()

}
document.getElementById('memory-8gb').addEventListener('click',function(){   
    memoryCost('8gb',100)
})

document.getElementById('memory-16gb').addEventListener('click',function(){ 
    memoryCost('16gb',200)
})

// SSD***********

function ssdCost(number,price){
    const ssdType = document.getElementById('ssd-'+number)
    const ssdCost = document.getElementById('ssd')
    ssdCost.innerText = price
    totalCosting()
}

document.getElementById('ssd-256gb').addEventListener('click',function(){
    ssdCost('256gb',150) 
})

document.getElementById('ssd-512gb').addEventListener('click',function(){  
    ssdCost('512gb',300) 
})

document.getElementById('ssd-1tb').addEventListener('click',function(){  
    ssdCost('1tbb',450) 
   
})

//  delivery**************

function deliveryCost (type,price){
    const deliveryType = document.getElementById (type+'-delivery')
    const deliveryCost = document.getElementById('delivery')
    deliveryCost.innerText = price
    totalCosting()
}

document.getElementById('free-delivery').addEventListener('click',function(){  
  deliveryCost('free',0)
})

document.getElementById('costly-delivery').addEventListener('click',function(){  
    deliveryCost('costly',20)
})

function totalCosting(){
    const macBookPrice = document.getElementById('macBook')

    const memoryPrice = document.getElementById('memory')
    
    const ssdPrice = document.getElementById('ssd')

    const deliveryFee = document.getElementById('delivery')

const totalPrice = document.getElementById('totalCost')

totalPrice.innerText = parseFloat(macBookPrice.innerText) + parseFloat(deliveryFee.innerText) + parseFloat (memoryPrice.innerText) + parseFloat(ssdPrice.innerText)

offerCosting()
}

function offerCosting(){

    const offerCost = document.getElementById('offerCost')
  
    const totalPrice = document.getElementById('totalCost')
    
    offerCost.innerText = parseFloat(totalPrice.innerText)

}

document.getElementById('apply-promo').addEventListener('click',function(){

const offerCost = document.getElementById('offerCost')

const promoCode = document.getElementById('promo-code')
const promoCodeInText = promoCode.value

if(promoCodeInText == 'offer10'){
  const newOfferCost = offerCost.innerText - parseFloat(offerCost.innerText) /10
  const finalOffer = Math.round(newOfferCost) 
  offerCost.innerText = finalOffer
}
promoCode.value= ''

})