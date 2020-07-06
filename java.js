function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


    //   حق القائمه المنسدله 
       let select = document.getElementById("select"),
        arr = [ " joker"," shrek" ," london has" ]
         for(var i = 0; i < arr.length; i++)
         {
           let option = document.createElement("OPTION"),
            txt = document.createTextNode(arr[i]);
            option.appendChild(txt);
             option.setAttribute("value",arr[i]);
             select.insertBefore(option,select.lastChild);
         }
  
         function q1(){
            let movie = document.getElementById("moviename").value;
            arr.push(movie);
        }
            q1()
            console.log(arr)