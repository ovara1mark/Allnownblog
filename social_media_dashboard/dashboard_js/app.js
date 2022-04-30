//when clicked the background changes to light

//get the button element
let toggle_btn = document.querySelector("#switch")


//when the button is clicked the main is been targeted
toggle_btn.addEventListener("click", function(){

    let pg = document.getElementById("pg")
    
    if(pg.innerHTML === "Light Mode"){

        pg.innerHTML = "Dark Mode"
    }else{
        pg.innerHTML = "Light Mode"
    }

    let main = document.getElementById('main')
    let card = document.querySelector('#card_toggle')
    let card_2 = document.querySelector('#card_toggle_2')
    let card_3 = document.querySelector('#card_toggle_3')
    let card_4 = document.querySelector('#card_toggle_4')
    let card_5 = document.querySelector('#card_toggle_5')
    let card_6 = document.querySelector('#card_toggle_6')
    let card_7 = document.querySelector('#card_toggle_7')
    let card_8 = document.querySelector('#card_toggle_8')
    let card_9 = document.querySelector('#card_toggle_9')
    let card_10 = document.querySelector('#card_toggle_10')
    let card_11 = document.querySelector('#card_toggle_11')
    let card_12 = document.querySelector('#card_toggle_12')

    let text_1 = document.querySelector('#text_1')
    let text_2 = document.querySelector('#text_2')

    let p_1 = document.querySelector('#p_1')
    let p_2 = document.querySelector('#p_2')
    let p_3 = document.querySelector('#p_3')
    let p_4 = document.querySelector('#p_4')
    let p_5 = document.querySelector('#p_5')
    let p_6 = document.querySelector('#p_6')
    let p_7 = document.querySelector('#p_7')
    let p_8 = document.querySelector('#p_8')
    let p_9 = document.querySelector('#p_9')
    let p_10 = document.querySelector('#p_10')
    let p_11 = document.querySelector('#p_11')
    let p_12 = document.querySelector('#p_12')

    let fx_1 = document.querySelector('#fx_1')
    let fx_2 = document.querySelector('#fx_2')
    let fx_3 = document.querySelector('#fx_3')
    let fx_4 = document.querySelector('#fx_4')
    let fx_5 = document.querySelector('#fx_5')
    let fx_6 = document.querySelector('#fx_6')
    let fx_7 = document.querySelector('#fx_7')
    let fx_8 = document.querySelector('#fx_8')
    let fx_9 = document.querySelector('#fx_9')
    let fx_10 = document.querySelector('#fx_10')
    let fx_11 = document.querySelector('#fx_11')
    let fx_12 = document.querySelector('#fx_12')
    let fx_13 = document.querySelector('#fx_13')
    let fx_14 = document.querySelector('#fx_14')
    let fx_15 = document.querySelector('#fx_15')
    let fx_16 = document.querySelector('#fx_16')



    
    if(main.classList.contains('toggle') && card.classList.contains('card')){
        main.classList.remove('toggle')
        card.classList.remove('card')
        card_2.classList.remove('card')
        card_3.classList.remove('card')
        card_4.classList.remove('card')
        card_5.classList.remove('card')
        card_6.classList.remove('card')
        card_7.classList.remove('card')
        card_8.classList.remove('card')
        card_9.classList.remove('card')
        card_10.classList.remove('card')
        card_11.classList.remove('card')
        card_12.classList.remove('card')

        text_1.classList.remove('text_1')
        text_2.classList.remove('text_2')

        p_1.classList.remove('text_1')
        p_2.classList.remove('text_1')
        p_3.classList.remove('text_1')
        p_4.classList.remove('text_1')
        p_5.classList.remove('text_1')
        p_6.classList.remove('text_1')
        p_7.classList.remove('text_1')
        p_8.classList.remove('text_1')
        p_9.classList.remove('text_1')
        p_10.classList.remove('text_1')
        p_11.classList.remove('text_1')
        p_12.classList.remove('text_1')



        

        
    }
    else{
        main.classList.add('toggle')
        card.classList.add('card')
        card_2.classList.add('card')
        card_3.classList.add('card')
        card_4.classList.add('card')
        card_5.classList.add('card')
        card_6.classList.add('card')
        card_7.classList.add('card')
        card_8.classList.add('card')
        card_9.classList.add('card')
        card_10.classList.add('card')
        card_11.classList.add('card')
        card_12.classList.add('card')

        text_1.classList.add('text_1')
        text_2.classList.add('text_2')

        p_1.classList.add('text_1')
        p_2.classList.add('text_1')
        p_3.classList.add('text_1')
        p_4.classList.add('text_1')
        p_5.classList.add('text_1')
        p_6.classList.add('text_1')
        p_7.classList.add('text_1')
        p_8.classList.add('text_1')
        p_9.classList.add('text_1')
        p_10.classList.add('text_1')
        p_11.classList.add('text_1')
        p_12.classList.add('text_1')
        


    }
})
//and the background of the card