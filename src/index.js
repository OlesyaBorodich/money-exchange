
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
       return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
	} else { 
	     var result = {};
         var h = Math.floor(currency / 50);
         
			    if (h > 0) {
				    result.H = h;
					currency = currency - (h * 50);
                 }  var q = Math.floor(currency / 25) ;


				 if (q > 0) {
				        result.Q = q;
						currency = currency - (q * 25);
                  } 
                   var d = Math.floor(currency / 10);


				if  (d > 0) {
					       result.D = d;
						   currency = currency - (d * 10);
                    }  
                    var n = Math.floor(currency / 5);


				if (n > 0) {
					           result.N = n;
						       currency = currency - (n * 5);
                       }
                        var p = Math.floor(currency / 1);

                        
				 if (p > 0) {
						       result.P = p;
						}
						return result;
					}
      
}