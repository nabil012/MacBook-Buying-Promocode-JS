// MEMORY***************


document.getElementById('memory-8gb').addEventListener('click',function(){   
    const memoryPrice = document.getElementById('memory') 
    memoryPrice.innerText = 100
  
    totalCosting()
})

document.getElementById('memory-16gb').addEventListener('click',function(){ 
    const memoryPrice = document.getElementById('memory') 
    memoryPrice.innerText = 200
    
    totalCosting()


})

// SSD***********


document.getElementById('ssd-256gb').addEventListener('click',function(){
    const ssdPrice = document.getElementById('ssd') 
    ssdPrice.innerText = 150
    totalCosting()
    
})

document.getElementById('ssd-512gb').addEventListener('click',function(){  
    const ssdPrice = document.getElementById('ssd') 
    ssdPrice.innerText = 300
    totalCosting()
   
})

document.getElementById('ssd-1tb').addEventListener('click',function(){  
    const ssdPrice = document.getElementById('ssd') 
    ssdPrice.innerText = 450
    totalCosting()
   
})

//  delivery**************


document.getElementById('free-delivery').addEventListener('click',function(){  
    const deliveryFee = document.getElementById('delivery') 
    deliveryFee.innerText = 0
    totalCosting()
   
})
document.getElementById('costly-delivery').addEventListener('click',function(){  
    const deliveryFee = document.getElementById('delivery') 
    deliveryFee.innerText = 20
    totalCosting()
    
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