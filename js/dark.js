    
 let checkbox = document.getElementById("darkmode");
         let body = document.getElementById('body')
         
         checkbox.addEventListener( 'change', function() {
         if(this.checked) {
             body.classList.add('dark')
         } else {
             body.classList.remove('dark')     
         }
         });

         if(localStorage.getItem('dark')) {
            body.classList.add('dark');
       }