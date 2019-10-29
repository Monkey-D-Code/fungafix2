function makeorder(country_code, offer_id,referrer,product_price,pixel){  
	var pixel_code = pixel;
	var name= document.getElementById("name").value;
	var phone= document.getElementById("phone").value;
	phone= phone.replace(/\s/g, "");
	var offer_id=offer_id;
	var country_code=country_code;
	var referrer=referrer;
	var price=product_price;
	var phoneno = /^[\s()+-.]*([0-9][\s()+-.]*){6,20}$/;
	console.log("country_code: ",country_code);
	console.log("offer_id: ",offer_id);
	console.log("referrer: ",referrer);
	console.log("price: ",price);
	console.log("pixel_code: ",pixel_code);


	if(name.length==0){
		document.getElementById("errorname").innerHTML=defaults.get_locale_var('set_fio',country_code);
		document.getElementById("name").style.border = '1px solid red';
		exit;
	}else {
		document.getElementById("name").style.border = '1px solid #757575';
		document.getElementById("errorname").style.display='none';
	}
	if(phone.length==0){
		document.getElementById("errorphone").innerHTML=defaults.get_locale_var('set_phone',country_code);
		document.getElementById("phone").style.border = '1px solid red';
		exit;
	}else {
		document.getElementById("phone").style.border = '1px solid #757575';
		document.getElementById("errorphone").style.display='none';
	}
	if(!phone.match(phoneno)){
		document.getElementById("phone").value='';
		document.getElementById("phone").placeholder=defaults.get_locale_var('error_phone',country_code);
		document.getElementById("phone").style.backgroundColor = '#FDB6B6';
		exit;
	}else document.getElementById("phone").style.backgroundColor = '';

	var params = 'offer_id=' + encodeURI(offer_id) + '&country_code=' +  encodeURI(country_code) + '&referrer=' +  encodeURI(referrer) + '&price=' +  encodeURI(price) + '&name=' +  encodeURI(name)  + '&phone=' + encodeURI(phone);
	
	if (window.XMLHttpRequest)
		xmlhttp = new XMLHttpRequest();
	else
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			if (xmlhttp.responseText.match(/OK/)) {
				document.getElementById("result").innerHTML=defaults.get_locale_var('success_order',country_code); 
				document.getElementById("name").placeholder='';
				document.getElementById("name").style.backgroundColor = '';
				document.getElementById("phone").placeholder='';
				document.getElementById("phone").style.backgroundColor = '';
				document.getElementById("pixel").innerHTML=pixel_code; 
			}
			else {
				document.getElementById("result").innerHTML=defaults.get_locale_var('error_order',country_code); 
				document.getElementById("name").value='';
				document.getElementById("phone").value='';
				document.getElementById("name").placeholder='';
				document.getElementById("phone").placeholder='';
				document.getElementById("name").style.backgroundColor = '';
				document.getElementById("phone").style.backgroundColor = ''; 
			}
		}
	}
	xmlhttp.open("GET","../gbb_form/api_gbbforajax.php?"+params,true);
	xmlhttp.send();
}

var defaults = {
    get_locale_var: function(var_name,country_code) {
        country = country_code.toLowerCase();
        return this.locale[country][var_name] !== undefined ?
            this.locale[country][var_name] : this.locale[this._locale][var_name];
    },
    locale: {
        ru:{
            set_country: 'Вы не выбрали страну',
            set_fio: 'Вы не заполнили ФИО',
            set_phone: 'Вы не заполнили Телефон',
            set_comment: 'Расскажите о вашей проблеме',
            set_holder_name: 'Заполните имя номинанта',
            set_house: 'House is a required field',
            set_nomin: 'Заполните номинацию',
            set_address: 'Заполните адрес',
            set_city: 'Заполните город',
            error_email: 'Неверно заполнен электронный адрес',
            error_fio: 'Неверно заполнено ФИО',
            error_address: 'Неверный адрес, пожалуйста, заполните форму заново',
            error_phone: 'Неверно заполнен Телефон',
            exit_text: 'Вы точно хотите закрыть вкладку? До завершения заказа осталось нажать одну кнопку!'
        },
        hi:{
            set_country: 'आपने देश का चयन नहीं किया',
            set_fio: 'आपनें पूरा नाम नहीं भरा',
            error_fio: 'गलत नाम',
            set_phone: 'आपनें फोन नंबर नहीं भरा',
          	error_address: 'Invalid address, please, refill the form',
            set_house: 'House is a required field',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            error_phone: 'गलत फोन नंबर',
            exit_text: 'क्या आप सुनिश्चित रूप से छोड़ना चाहते हैं? आप अपने आर्डर से बस एक चरण की दूरी पर हैं',
        },
		id:{
            set_country: 'Anda belum memilih negara',
            set_fio: 'Anda belum mengisi nama lengkap',
            error_fio: 'Nama tidak valid',
          	error_address: 'Invalid address, please, refill the form',
			set_house: 'House is a required field',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
           	set_phone: 'Anda belum mengisi nomor telepon',
            error_phone: 'Nomor telepon tidak valid',
            exit_text: 'Apakah Anda yakin Anda ingin meninggalkan laman ini? Hanya tinggal satu langkah lagi untuk menyelesaikan pesanan Anda!',
        },
        ms:{
            set_country: 'Anda tidak memilih negara',
			set_house: 'House is a required field',
            set_fio: 'Anda tidak mengisi nama penuh',
            error_fio: 'Nama tidak sah',
            set_phone: 'Anda tidak mengisi nombor telefon',
          	error_address: 'Invalid address, please, refill the form',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            error_phone: 'Nombor telefon tidak sah',
            exit_text: 'Adakah anda pasti anda ingin keluar? Hanya tinggal satu langkah lagi daripada pesanan anda!',
        },
        bg:{
            set_country: 'Вие не сте избрали държава',
			set_house: 'House is a required field',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            set_fio: 'Моля, въведете валидно име',
            error_fio: 'Моля, въведете валидно име',
            set_phone: 'Моля, въведете телефон за връзка',
          	error_address: 'Invalid address, please, refill the form',
            error_phone: 'Телефонния номер е въведен неправилно',
            exit_text: 'Сигурни ли сте че искате да затворите раздел? До приключване на поръчката кликнете с левия бутон един бутон!',
			success_order: 'Благодарим Ви за Вашата поръчка. Скоро ще получите обаждане от на официалния център за обслужване на клиенти! Проверете дали въведените данни по-горе са правилни. Ако има грешка, молим, попълнете формуляра отново.',
			error_order: 'Уви възникна грешка при обработването на данните. Молим, попълнете формуляра отново!',
        },
        ro:{
            set_country: 'Vă rugăm să completați câmpul "Nume/Prenume"',
            set_fio: 'Cimpul a fost completat incorect "Nume/Prenume"',
			set_house: 'House is a required field',
            error_fio: 'Cimpul a fost completat incorect  "Nume/Prenume"',
            set_phone: 'Vă rugăm să completați câmpul "Telefon"',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
          	set_city: 'City is a required field',
            error_phone: 'Cimpul a fost completat incorect "Telefon"',
            exit_text: 'Sunteți sigur că doriți să închideți o filă? Până la finalizarea comenzii stânga faceți clic pe un buton!',
			success_order: 'Vă mulțumim pentru comanda dvs. În curând, veți fi contactat(ă) de un reprezentant al call centerului oficial! Vă rugăm să vă asigurați că datele introduse în câmpurile de mai sus sunt corecte. Dacă nu sunt, vă rugăm să completați formularul din nou!',
			error_order: 'Ne pare rău, a apărut o eroare în timpul procesului. Vă rugăm să completați formularul din nou!',
        },
        br:{
            set_country: 'Não selecionou país',
            set_fio: 'Por gentileza, verifique os seus dados',
			set_house: 'House is a required field',
            error_fio: 'Por gentileza, verifique os seus dados',
          	error_address: 'Invalid address, please, refill the form',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            set_phone: 'or gentileza, verifique os seus dados',
            error_phone: 'or gentileza, verifique os seus dados',
            exit_text: 'Tem certeza de que quer fechar uma guia? Até a conclusão da ordem esquerda clique em um botão!'
        },
        hu:{
            set_country: 'Nem választott ország',
			set_house: 'House is a required field',
            set_fio: 'Nem kitölteni Név és vezetéknév',
            error_fio: 'Helytelenül kitöltött Név és vezetéknév',
            set_phone: 'Nem kitölteni Phone',
          	error_address: 'Invalid address, please, refill the form',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            error_phone: 'Helytelenül kitöltött Telefon',
            exit_text: 'Biztos benne, hogy be akarja zárni a lapra? Befejezéséig a rendelés bal gombbal egy gombot!',
			success_order: 'Köszönjük a rendelésed. Ügyfélszolgálati munkatársunk hamarosan felhív a hivatalos telefonos központjából! Kérjük, győződj meg róla, a fenti adatok megfelelnek a valóságnak. Amennyiben ez nem így van, kérjük töltsd ki újra az adatlapot!',
		  error_order: 'Elnézést kérünk, de hiba történt az adatok feldolgozása során. Kérjük, töltsd ki az adatlapot újra! ',
        },
        tr:{
            set_country: 'Siz ülkeyi seçmediniz',
			set_house: 'House is a required field',
            set_fio: 'Adınızı yazınız lütfen',
            error_fio: 'Adınız yalnış yazılmış',
          	error_address: 'Geçersiz adres, litfen tekrar giriniz',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            set_phone: 'Telefon numaranızı yazınız lütfen',
            error_phone: 'Telefon numarası yanlış yazılmış',
            exit_text: 'Sayfamızı kapatmak istediniz. Eminmisiniz? Sipariş etmek icin son tıklama lazım!',
        },
        pl:{
            set_country: 'Podaj kraju',
			set_house: 'House is a required field',
            set_fio: 'Podaj imię i nazwisko',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
          	error_address: 'Invalid address, please, refill the form',
            error_fio: 'Podaj realne imię i nazwisko',
            set_phone: 'Podaj numer telefonu',
            error_phone: 'Podaj realny numer telefonu',
            exit_text: 'Czy na pewno chcesz zamknąć kartę?',
			success_order: 'Dziękujemy za złożenie zamówienia. Wkrótce skontaktuje się z Tobą pracownik oficjalnego call center! Prosimy upewnić się, że powyższe pola zostały wypełnione prawidłowo. Jeżeli nie, prosimy wypełnić formularz ponownie!',
			error_order: 'Przepraszamy, wystąpił błąd. Prosimy wypełnić formularz ponownie!',
        },
        es:{
            set_country: 'No escogió un país',
			set_house: 'House is a required field',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            set_fio: 'No escribió su nombre y apellido',
          	error_address: 'Invalid address, please, refill the form',
            error_fio: 'Usted escribió mal su nombre y apellido',
            set_phone: 'No escribió su teléfono',
            error_phone: 'Escribio mal su teléfono',
            exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
			success_order: 'Gracias por tu pedido. Muy pronto recibirás una llamada del centro de llamadas oficial. Comprueba que los campos que has introducido anteriormente son correctos. Si no lo son, rellena el formulario de nuevo.',
			error_order: 'Lo sentimos, se ha producido un error en el proceso. Por favor, vuelve a rellenar el formulario.',
        },
      	cl:{
            set_country: 'No escogió un país',
			set_house: 'House is a required field',
            set_fio: 'No escribió su nombre y apellido',
            error_fio: 'Usted escribió mal su nombre y apellido',
          	error_address: 'Invalid address, please, refill the form',
            set_phone: 'No escbribió su teléfono',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            error_phone: 'Escribio mal su teléfono',
            exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!',
        },
        en:{
            set_country: 'Select country',
            set_house: 'House is a required field',
            set_fio: 'Name is a required field',
            error_fio: 'Name field is entered incorrectly',
            set_phone: 'Phone number is a required field',
            set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            error_email: 'The email is entered incorrectly',
            error_phone: 'The phone number is entered incorrectly',
            exit_text: 'You really want to close tab?'
        },
        ja:{
            set_country: '国を選択していません',
            set_house: '家の情報をご入力ください',
            set_fio: '苗字と名前を入力していません',
            error_fio: '無効の苗字と名前です',
            set_phone: '電話番号を入力していません',
            set_address: '住所を入力してください',
          	error_address: '無効の住所です。再度ご入力ください',
            set_city: '都市名を入力してください',
            error_email: '無効のメールアドレスです',
            error_phone: '無効の電話番号です',
            exit_text: '本当にタブを閉じますか？左のボタンを押せば注文が完了します！'
        },
      	nl:{
            set_country: 'Je hebt het land nietgekozen',
          	set_house: 'Huisnummer is eenverplicht veld',
            set_fio: 'Je hebt naam achternaam niet ingevuld',
            error_fio: 'Naamenachternaamzijnniet correct ingevuld',
            set_phone: 'Je hebtTelefoonnummernietingevuld',
          	set_comment: 'Vertel over je probleem',
            set_address: 'Vul het adres is',
          	error_address: 'Ongeldigadres, vulalsjeblieft het formulieropnieuw in',
            set_city: 'Vul de woonplaats in',
            error_email: 'Het e-mailadres in niet correct ingevuld',
            error_phone: 'Telefoonnummer is niet correct ingevuld',
            exit_text: 'Weet je zekerdat je het tabblad wilt sluiten? Nog maar één knop teklikken om je bestellingafteronden!'
        },
	    pt:{
            set_country: 'Não selecionou o país',
          set_house: 'House is a required field',
            set_fio: 'Não preencheu o nome completo',
            error_fio: 'Nome inválido',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            set_phone: 'Não preencheu o telefone',
            error_phone: 'Número de telefone inválido',
            exit_text: 'Tem a certeza de que quer sair? Está apenas a um passo da sua encomenda!',
			success_order: 'Agradecemos a sua encomenda. Em breve, receberá uma chamada do call center oficial! Por favor certifique-se de que os campos que preencheu estão corretos. Se não estiverem, por favor preencha novamente o formulário!',
			error_order: 'Pedimos desculpa, ocorreu um erro no processo. Por favor preencha novamente o formulário!',
        },
      	zh:{
            set_country: '你沒有選擇國家',
			set_house: 'House is a required field',
            set_fio: '你沒有填寫完整姓名',
            error_fio: '無效姓名',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            set_phone: '你沒有填寫電話號碼',
            error_phone: '無效電話號碼',
            exit_text: '你是否確定要離開？離你的訂單僅剩一步了！',
        },
      	km:{
            set_country: 'លោកអ្នកមិនបានជ្រើសរើសប្រទេស',
			set_house: 'House is a required field',
            set_fio: 'លោកអ្នកមិនបានបំពេញឈ្មោះពេញ',
            error_fio: 'ឈ្មោះមិនត្រឹមត្រូវ',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            set_phone: 'លោកអ្នកមិនបានបញ្ចូលលេខទូរសព្',
            error_phone: 'លេខទូរសព្ទមិនត្រឹមត្រូវ',
            exit_text: 'តើអ្នកពិតជាចង់ចាកចេញមែនឬទេ? នៅសល់តែមួយជំហានទៀតអ្នកនឹងបញ្ជាទិញបានហើយ!',
        },
      	nb:{
            set_country: 'Du valgte ikke land',
          set_house: 'House is a required field',
            set_fio: 'Du oppgav ikke fullt navn',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	nn:{
            set_country: 'Du valgte ikke land',
          set_house: 'House is a required field',
            set_fio: 'Du oppgav ikke fullt navn',
            error_fio: 'Ugyldig navn',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	no:{
            set_country: 'Du valgte ikke land',
          set_house: 'House is a required field',
            set_fio: 'Du oppgav ikke fullt navn',
          	set_address: 'Address is a required field',
            set_city: 'City is a required field',
          	error_address: 'Invalid address, please, refill the form',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	nb_no:{
            set_country: 'Du valgte ikke land',
          set_house: 'House is a required field',
            set_fio: 'Du oppgav ikke fullt navn',
          	set_address: 'Address is a required field',
            set_city: 'City is a required field',
            error_fio: 'Ugyldig navn',
            set_phone: 'Du oppgav ikke fullt telefonnummer',
          	error_address: 'Invalid address, please, refill the form',
            error_phone: 'Ugyldig telefonnummer',
            exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!',
        },
      	ur:{
          set_country: 'آپ نے ملک کا انتخاب نہیں کیا',
          set_house: 'گھر ایک مطلُوبہ فِیلڈ ہے',
          set_fio: 'آپ نے پورا نام درج نہیں کیا ',
          set_address: 'پتہ ایک مطلُوبہ فِیلڈ ہے',
          set_city: 'شہر ایک مطلُوبہ فِیلڈ ہے',
          error_fio: 'غیر موزوں نام ',
          error_address: 'غیرمعتبرپتہ، برائے مہربانی فارم کو دُوبارہ پُر کریں',
          set_phone: 'آپ نے فون نمبر درج نہیں کیا',
          error_phone: 'آپ نے فون نمبر درج نہیں کیاغیر موزوں فون نمبر',
          exit_text: 'کیا آپ اس صفحے سے جانا چاہتے ہیں؟ آپ اپنا آرڈر بک کرانے سے صرف ایک کلک دوری پر ہیں ',
        },
      	fil:{
            set_country: 'Hindi mo pinili ang bansa',
			set_house: 'House is a required field',
            set_fio: 'Hindi mo pinunan ang buong pangalan',
            error_fio: 'Inbalidong pangalan',
          	set_address: 'Address is a required field',
            set_city: 'City is a required field',
            set_phone: 'Hindi mo pinunan ang telepono',
          	error_address: 'Invalid address, please, refill the form',
            error_phone: 'Inbalidong numero ng telepono',
            exit_text: 'Sigurado ka bang gusto mong umalis? Ikaw ay isang hakbang nalang mula sa iyong order!',
        },
      	ar:{
            set_country: 'أنت لم تختر البلاد',
          set_house: 'House is a required field',
            set_fio: 'أنت لم تملء الاسم الكامل',
            error_fio: 'اسم غير صالح',
          	set_address: 'Address is a required field',
            set_city: 'City is a required field',
            set_phone: 'أنت لم تدخل رقم الهاتف',
          	error_address: 'Invalid address, please, refill the form',
            error_phone: 'رقم الهاتف غير صحيح',
            exit_text: 'هل أنت متأكد أنك تريد أن تغادر؟ كنت للتو في خطوة واحدة من النظام الخاص بك!',
        },
      	vi:{
            set_country: 'Bạn chưa chọn quốc gia',
          set_house: 'House is a required field',
            set_fio: 'Bạn chưa điền họ tên',
            error_fio: 'Tên không hợp lệ',
            set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
          	set_phone: 'Bạn chưa điền số điện thoại',
            error_phone: 'Số điện thoại không hợp lệ',
            exit_text: 'Bạn có chắc muốn rời đi không? Chỉ còn còn một bước đặt hàng nữa thôi!',
        },
      	ng:{
            set_country: 'Select country',
          set_house: 'House is a required field',
            set_fio: 'Name is a required field',
          	set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
          	set_city: 'City is a required field',
            error_fio: 'Name field is entered incorrectly',
            set_phone: 'Phone number is a required field',
            error_phone: 'The phone number is entered incorrectly',
            exit_text: 'You really want to close tab?',
        },
        rs:{
            set_country: 'Niste odaberete zemlju',
          set_house: 'House is a required field',
            set_fio: 'Niste popunite imenom',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            error_fio: 'Invalid format Ime',
          	error_address: 'Invalid address, please, refill the form',
            set_phone: 'Niste napuniti telefon',
            error_phone: 'Invalid format Telefon',
            exit_text: 'Da li ste sigurni da želite da zatvorite karticu ? Pre završetka naloga ostaje jedan taster pritisnuti!'
        },
        fr:{
            set_country: 'Vous n\'avez pas choisi le pays',
          set_house: 'House is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_fio: 'Vous n\'avez pas indiqué le nom',
            error_fio: 'Le nom est incorrect',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            set_phone: 'Vous n\'avez pas indiqué le numéro de téléphone',
            error_phone: 'Le numéro de téléphone est uncorrecte',
            exit_text: 'Êtes-vous sûr de fermer l\'onglet ? Il vous reste de cliquer sur un seul bouton pour passer la commande !',
			success_order: "Nous vous remercions de votre commande. Vous recevrez un appel du centre d'appel officiel sous peu! Veuillez vous assurer que les champs ci-dessus ont été remplis correctement. Si ce n'est pas le cas, veuillez remplir le formulaire à nouveau!",
			error_order: 'Désolé, une erreur est survenue lors de la commande. Merci de remplir le formulaire à nouveau!',
        },
        it:{
            set_country: 'Cortesemente compilare questo spazio vuoto',
          set_house: 'House is a required field',
            set_fio: 'Non è stato inserito il nome',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
          	error_address: 'Invalid address, please, refill the form',
            error_fio: 'Errato il nome',
            set_phone: 'Inserire il numero di telefono',
            error_phone: 'Errato il numero di telefono',
            exit_text: 'Sicuro di chiudere la pagina? Per completare l\'ordine basta solo premere il bottone!',
			success_order: 'Grazie per l’ordine effettuato. Presto riceverai una chiamata dal call center ufficiale! Assicurati che i campi sopra indicati siano corretti. Se non lo sono, compila di nuovo il modulo!',
			error_order: 'Ci dispiace, si è verificato un errore. Si prega di ricompilare il modulo!',
        },
        de:{
            set_country: 'Das Land ist nicht gewählt.',
			set_house: 'House is a required field',
            set_fio: 'Name ist nicht ausgefüllt',
            error_fio: 'Name ist falsch ausgefüllt',
            set_phone: 'Telefon ist nicht ausgefüllt',
            set_address: 'Ausfüllen Sie die Adresse',
            set_city: 'Ausfüllen Sie die Stadt',
            error_email: 'Falsche E-Mail-Adresse',
            error_phone: 'Telefon ist falsch ausgefüllt',
            exit_text: 'Wirklich diesen Tab schließen? Bis Bestellungsabnahme bleibt nur ein Klick!',
            error_address: 'Falshe Adresse!Bitte korrigieren Sie diese Bestellmaske',
			success_order: 'Vielen Dank für Ihre Bestellung. Bald erhalten Sie einen Anruf vom offiziellen Callcenter! Bitte stellen Sie sicher, dass die oben angegebenen Felder korrekt sind. Wenn nicht, bitte füllen Sie das Formular erneut aus!',
			error_order: 'Entschuldigung, es gab einen Fehler in diesem Prozess. Bitte füllen Sie das Formular erneut aus!',
        },
        cz:{
            set_country: 'Nezvolil jste zemi',
            set_fio: 'Nevypsal jste jméno, jméno po otci a příjmení',
            error_fio: 'Nesprávně zadané jméno, jméno po otci a příjmení',
            set_phone: 'Nezadal jste Telefonní číslo',
          	error_address: 'Invalid address, please, refill the form',
            error_phone: 'Nesprávě zadané Telefonní číslo',
          	set_address: 'Address is a required field',
			set_house: 'House is a required field',
          	set_city: 'City is a required field',
            exit_text: 'Jistě chcete uzavřít stránku? Abyste ukončil zadání objednávky, náleží stlačit jedno tlačítko!',
            set_comment: 'Řeknete prosím o Vašem problému',
            set_holder_name: 'Zadejte prosím jméno nominanta',
            set_nomin: 'Zadejte prosím nominaci',
			success_order: 'Děkujeme za vaši objednávku. Brzy se vám ozve oficiální call centrum. Prosím ujistěte se, že jste všechna pole vyplnili správně. Pokud jste někde udělali chybu, vyplňte formulář znovu.',
			error_order: 'Omlouváme se, během objednávky se vyskytla chyba. Prosím vyplňte formulář znovu!',
        },
      	cn: {
          	set_country: 'You haven’t chosen your country',
          set_house: 'House is a required field',
            set_fio: 'You haven’t entered  your first and last name',
          	set_address: 'Address is a required field',
          	set_city: 'City is a required field',
            error_fio: 'Your first and last name were entered incorrectly',
          	error_address: 'Invalid address, please, refill the form',
            set_phone: 'You haven’t entered your phone number',
            error_phone: 'Your phone number was entered incorrectly',
            exit_text: 'Do you really want to close the tab? Before an order completion  you should press only 1 button!',
        },
      	sk: {
          set_country: 'Nezadali ste krajinu',
          set_fio: 'Nezadali ste plné meno',
          error_fio: 'Neplatné plné meno',
          error_address: 'Invalid address, please, refill the form',
          set_address: 'Address is a required field',
          set_city: 'City is a required field',
          set_house: 'House is a required field',
          set_phone: 'Nezadali ste telefón',
          error_phone: 'Neplatný telefón',
          exit_text: 'Ste istí, že chcete zatvoriť kartu? Pre dokončenie objednávky zostalo potrebné jedné kliknutie!',
          set_comment: 'Povedzte niečo o svojom probléme',
          set_holder_name: 'Vyplňte meno kandidáta',
          set_nomin: 'Vyplňte nomináciu',
		  success_order: 'Ďakujeme vám za objednávku. Čoskoro vám zavolá od oficiálneho call centra! Uistite sa, že vyššie uvedené polia sú správne vyplnené. Ak nie, vyplňte formulár znova!',
		  error_order: 'Ľutujeme, došlo k chybe v procese. Vyplňte formulár znova!',
        },
		si: {
          set_country: 'Niste vstopili v državo',
          set_fio: 'Niste vnesli polnega imena',
          error_fio: 'Neveljavno polno ime',
          error_address: 'Neveljaven naslov, prosim, izpolnite obrazec',
          set_address: 'Naslov je obvezno polje',
          set_city: 'Mesto je obvezno polje',
          set_house: 'Hiša je obvezno polje',
          set_phone: 'Niste vnesli telefona',
          error_phone: 'Neveljaven telefon',
          exit_text: 'Ste prepričani, da želite zapreti kartico? Za dokončanje naročila je bil en klik!',
          set_comment: 'Reci nekaj o tvojem problemu',
          set_holder_name: 'Izpolnite ime kandidata',
          set_nomin: 'Izpolnite nominacijo',
		  success_order: 'Zahvaljujemo se vam za vaše naročilo. Kmalu boste prejeli klic od uradnega klicnega centra izdelka. Prosimo, prepričajte se, da so zgornja polja pravilno izpolnjena. Morebitne napake popravite!',
		  error_order: 'Med obdelavo je prišlo do napake. Prosimo, ponovno izpolnite obrazec.',
        },
      	th: {
          set_fio: 'คุณยังไม่ได้กรอกชื่อ',
          set_phone: 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
          error_address: 'ที่อยู่ไม่ถูกต้องโปรดเติมเงินในแบบฟอร์ม',
          set_address: 'ที่อยู่เป็นฟิลด์ที่ต้องระบุ',
          set_house: 'บ้านเป็นเขตข้อมูลที่จำเป็น',
          set_city: 'เมืองเป็นเขตข้อมูลที่จำเป็น',
          error_phone: 'หมายเลขโทรศัพท์ผิด! โปรดป้อนหมายเลขโทรศัพท์มือถือของคุณ',
		  success_order: 'ขอบคุณสำหรับคำสั่งซื้อของคุณ เร็ว ๆ นี้คุณจะได้รับสายจากศูนย์บริการของผู้จัดจำหน่ายอย่างเป็นทางการ!  <br> โปรดตรวจสอบว่ารายการด้านบนที่คุณป้อนถูกต้อง ถ้าไม่ใช่กรุณากรอกแบบฟอร์มอีกครั้ง!',
		  error_order: 'ขออภัยมีข้อผิดพลาดในกระบวนการ โปรดกรอกแบบฟอร์มอีกครั้ง!',
		  placeholder_name: 'ชื่อและนามสกุล',
		  placeholder_phone: 'โทรศัพท์',
        },
      	gr: {
          set_fio: '*Δεν έχετε συμπληρώσει το ονοματεπώνυμο',
          set_phone: '*Δεν έχετε συμπληρώσει τηλέφωνο',
          error_address: 'Invalid address, please, refill the form',
          set_address: 'Address is a required field',
          set_house: 'House is a required field',
          set_city: 'City is a required field',
          error_phone: 'Λάθος αριθμός τηλεφώνου! Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου ξεκινώντας με 69',
		  success_order: 'Ευχαριστούμε για την παραγγελία. Σύντομα θα λάβετε κλήση από το τηλεφωνικό κέντρο του επίσημου προμηθευτή! Παρακαλούμε, βεβαιωθείτε ότι τα παραπάνω στοιχεία που εισαγάγατε είναι σωστά. Αν δεν είναι, παρακαλούμε συμπληρώστε τη φόρμα ξανά!',
		  error_order: 'Λυπούμαστε, προέκυψε κάποιο σφάλμα κατά τη διαδικασία. Παρακαλούμε συμπληρώστε τη φόρμα ξανά!',
		  placeholder_name: 'Όνοματεπώνυμο',
		  placeholder_phone: 'Τηλέφωνο',
        },
      	ko:{
          set_country: '국가를 선택하지 않았습니다',
          set_fio: '성명을 입력하지 않았습니다',
          error_fio: '유효하지 않은 이름',
          set_address: 'Address is a required field',
          set_city: 'City is a required field',
          set_house: 'House is a required field',
          error_address: 'Invalid address, please, refill the form',
          set_phone: '전화번호를 입력하지 않았습니다',
          error_phone: '유효하지 않은 전화번호',
          exit_text: '정말 이 페이지에서 나오시겠습니까? 주문까지 오직 한 단계만 남았습니다!',
        },
    }
};

function settext(country_code){
	var country = country_code.toLowerCase();
	console.log("country_code1: ",country);
	document.getElementById("name").placeholder=defaults.get_locale_var('placeholder_name',country);
	document.getElementById("phone").placeholder=defaults.get_locale_var('placeholder_phone',country);
}