function pokreni(){
    let dugme = document.getElementById("dugmeFree");
    let dugme2 = document.getElementById("aboutButton");
    let dugme3 = document.getElementById("buttonLawOne");
    
    
    dugme.onclick = function(){    
        window.location.href = '#freeConsutation';
    }
    
    dugme2.onclick = function(){    
        window.location.href = '#pocetnaSekcija';
    }
    
     dugme3.onclick = function(){    
        window.location.href = '#expertTeam';
    }
}