

const carta = (titulo, tipo, tecno) => {
    let tecnologiasHTML = '';
    for (let i = 0; i < tecno.length; i++) {
        if(i < 4){
            tecnologiasHTML += `<li>${tecno[i]}</li>`
        }
    }
    let card = "<div class='card'>"+
                        "<div class='front-face'>"+
                            "<div class='contents front'>"+
                                `<p>${titulo}</p>`+
                                "<p class='bottom-bar'></p>"+
                                "<div>"+
                                    `<span>${tipo}</span>`+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='back-face'>"+
                            "<div class='contents back'>"+
                                `<h2>${titulo}</h2>`+
                                "<ul>"+
                                    `${tecnologiasHTML}`+
                                "</ul>"+
                                "<h3>Leer mas</h3>"+
                                "<div class='icons'>"+                 
                                    "<div class='btn-card-back'>"+
                                        "<button class='btn-cod-card'>"+
                                            "<img src='src/img/icons/dev-icon.svg' alt=''>"+
                                            "<span class='card-btn-info'>Codigo</span>"+
                                        "</button>"+
                                    "</div>"+
                                    "<div class='btn-card-back'>"+
                                        "<button class='btn-info-card'>"+
                                            "<img src='src/img/icons/newpage-icon.svg' alt=''>"+
                                            "<span class='card-btn-info'>Info</span>"+
                                        "</button>"+
                                    "</div>"+            
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
 return card;
}

export default {carta};