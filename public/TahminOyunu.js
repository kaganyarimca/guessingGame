/**
 * 
 */
 const acilisMetni="Sayı tahmin oyununa hoşgeldiniz.  ";
 var sonucParagrafi;
 var tutulanDeger=0; 
 var tahminiAltSiniri=1; // Minimum bu sayıya kadar seçilebilir.
 var tahminiUstSiniri=20; //Maximum bu sayıya kadar seçilebilir.
 var tahminSayisi;
 
 
 
 function sayfaYukle(){ // sayfa ilk açılırken karşımıza çıkan görüntü ve işlevler!
	
	sonucParagrafi=document.getElementById("p-1");
	sonucParagrafi.innerHTML=acilisMetni;
	
	document.getElementById("input-3").disable=true;
	document.getElementById("button-1").disabled=true;

	document.getElementById("input-1").setAttribute("min",tahminiAltSiniri);	 // Alt sınır.
	document.getElementById("input-1").setAttribute("max",tahminiAltSiniri);	
	document.getElementById("input-2").setAttribute("min",tahminiAltSiniri);	 // Üst sınır.
	document.getElementById("input-2").setAttribute("max",tahminiAltSiniri);
	document.getElementById("input-3").setAttribute("min",tahminiAltSiniri);	 // Tahmin..
	document.getElementById("input-3").setAttribute("max",tahminiAltSiniri);
	
	
}

function yeniSayiTut(){
	var min=+document.getElementById("input-1").value; // Kesirli sayı alınabilir bu yüzden + konuldu.
	var max=+document.getElementById("input-2").value;
	
	
	if(min<max){
		var deger=rastgeleSayi(min,max);
		var tahminGirisi=document.getElementById("input-3");
		tahminGirisi.setAttribute("min",min);
		tahminGirisi.setAttribute("max",max);
		tahminGirisi.setAttribute=false;
		tahminGirisi.value=min;
		document.getElementById("button-1").disabled=false;
		
		// Tutulan değer denetimi burada yapılırç.
		
		tutulanDeger=deger;
		tahminSayisi=0;
		sonucParagrafi.innerHTML=min+ "ile"+ max +"arasında bir sayı tuttum."; //*** Dikkat hata olabilri. */
		console.log(min+" , " +max+ " ---> " + deger);
		
		
	}
	else alert("min < max şeklinde bir sayı yazınız!!!");

}

// Rastgele sayının amacı min ve max değerlerinin arasından bir sayı bulmaktır . 
function rastgeleSayi(min,max){
	
	var hamDeger, asilDeger;	
	min= Math.ceil(min); // ceil=tavan.
	max= Math.floor(max); // floor= taban
	hamDeger=Math.random(); // random 0 ile 1 arasında sayı üretir.
	asilDeger=hamDeger*(max-min+1)+min; // burada, üretilen sayının asıl bulunması sağlanır.
	asilDeger=Math.floor(asilDeger);
	return asilDeger;
	
 
	
}


function tahminEt(){
	

}

