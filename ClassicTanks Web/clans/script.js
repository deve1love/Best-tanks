window.onload = function(){
	
		var rawContent = document.getElementById('inpText').value;
		
		document.getElementById('desc').innerHTML = `${rawContent.replace(/\n/g, '<br>')}`
	} 

    function filterClans(x){
        let clans = document.getElementsByClassName('clan_row');

        for(var i = 0; i < clans.length; i++){
            clans[i].style.display = "none";
        }

        if(x.value.length < 1) {
            for(var i = 0; i < clans.length; i++){
                clans[i].style.display = "table-row";
            }
        } else {
            for(var i = 0; i < clans.length; i++){
                if(clans[i].id.toLowerCase().includes(x.value.toLowerCase())) {
                    clans[i].style.display = "table-row";
                }
            }
        }
    }