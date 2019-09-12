function cityFilter() {
	let states = [
					{
						"state": "Andaman & Nicobar Islands",
						"city" : ["Port Blair"]
					},
					{
						"state" : "Andhra Pradesh",
						"city" : ["Adilabad","Adoni","Alwal", "Anakapalle","Anantapur", "Bapatla", "Belampalli","Bhimavaram","Bhongir","Bobbili","Bodhan","Chilakalurupet","Chinna Chawk","Chirala","Chittur","Cuddapah","Dharmavaram","Dhone","Eluru","Gaddiannaram","Gadwal","Gajuwaka","Gudivada","Gudur","Guntakal","Guntur","Hindupur","Hyderabad","Jagtial","Kadiri","Kagaznagar","Kakinada","Kallur","Kamareddi","Kapra","Karimnagar","Karnul","Kavali","Khammam","Kodar","Kondukur","Koratla","Kottagudem","Kukatpalle","Lalbahadur Nagar","Machilipatnam","Mahbubnagar","Malkajgiri","Mancheral","Mandamarri","Mangalagiri","Markapur","Miryalaguda","Nalgonda","Nandyal","Narasapur","Narasaraopet","Nellur","Nirmal","Nizamabad","Nuzvid","Ongole","Palakollu","Palasa","Palwancha","Patancheru","Piduguralla","Ponnur","Proddatur","Qutubullapur","Rajamahendri","Rajampet","Rajendranagar","Ramachandrapuram","Ramagundam","Rayachoti","Rayadrug","Samalkot","Sangareddi","Sattenapalle","Serilungampalle","Siddipet","Sikandarabad","Sirsilla","Srikakulam","Srikalahasti","Suriapet","Tadepalle","Tadepallegudem","Tadpatri","Tandur","Tanuku","Tenali","Tirupati","Tuni","Uppal Kalan","Vijayawada","Vinukonda","Visakhapatnam","Vizianagaram" ]
					},					
					{
						"state": "Arunachal Pradesh",
						"city" : ["Itanagar"]
					},
					{
						"state": "Assam",
						"city": [ "Barpeta", "Bongaigaon", "Dhuburi", "Dibrugarh", "Diphu", " Guwahati", "Jorhat", "Karimganj", "Lakhimpur", "Lanka", "Nagaon", "Sibsagar", "Silchar", "Tezpur", "Tinsukia"]
					},
					{
						"state": "Bihar",
						"city" : ["Araria","Arrah","Aurangabad","Bagaha","Begusarai","Bettiah","Bhabua","Bhagalpur","Bihar","Buxar","Chhapra","Darbhanga","Dehri","DighaMainpura","Dinapur","Dumraon","Gaya","Gopalganj","Goura","Hajipur","Jahanabad","Jamalpur","Jamui","Katihar","Khagaria","Khagaul","Kishanganj","Lakhisarai","Madhipura","Madhubani","Masaurhi","Mokama","Motihari","Munger","Muzaffarpur","Nawada","Patna","Phulwari","Purnia","Raxaul","Saharsa","Samastipur","Sasaram","Sitamarhi","Siwan","Supaul"]
					},
					{
						"state": "Chandigarh",
						"city" : ["Chandigarh"]
					},
					{
						"state": "Chhatisgarh",
						"city" : ["Chhatisgarh"]
					},
					{
						"state" : "Dadra & Nagar Haveli",
						"city": ["Dadra & Nagar Haveli"]
					},
					{
						"state" : "Daman & Diu",
						"city": ["Daman & Diu"]
					},
					{
						"state" : "Delhi",
						"city": ["Bhalswa", "Jahangirpur","Burari","Chilla Saroda Bangar","Dallo Pura","Delhi","Deoli","Dilli Cantonment","Gharoli","Gokalpur","Hastsal","Jaffrabad","Karawal Nagar","Khajuri Khas","Kirari Suleman Nagar","Mandoli","Mithe Pur","Molarband","Mundka","Mustafabad","Nangloi Jat","Ni Dilli","Pul Pehlad","Puth Kalan","Roshan Pura","Sadat Pur Gujran","Sultanpur Majra","Tajpul","Tigri","Ziauddin Pur"]
					},
					{
						"state" : "Goa",
						"city": ["Madgaon","Mormugao","Panaji"]
					},
					{
						"state" : "Gujrat",
						"city": ["Ahmadabad","Amreli","Anand","Anjar","Bardoli","Bharuch","Bhavnagar","Bhuj","Borsad","Botad","Chandkheda","Chandlodiya","Dabhoi","Dahod","Dholka","Dhoraji","Dhrangadhra","Disa","Gandhidham","Gandhinagar","Ghatlodiya","Godhra","Gondal","Himatnagar","Jamnagar","Jetpur","Junagadh","Kalol","Keshod","Khambhat","Kundla","Mahuva","Mangrol","Modasa","Morvi","Nadiad","Navagam Ghed","Navsari","Palitana","Patan","Porbandar","Puna","Rajkot","Ramod","Ranip"]
					},
					{
						"state" : "Haryana",
						"city": ["Ambala","Ambala Cantonment","Ambala Sadar","Bahadurgarh","Bhiwani","Charkhi Dadri","Dabwali","Faridabad","Gohana","Hisar","Jagadhri","Jind","Kaithal","Karnal","Narnaul","Narwana","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Thanesar","Tohana","Yamunanagar"]
					},
					{
						"state" : "Himanchal Pradesh",
						"city": ["Shimla"]
					},
					{
						"state" : "Jammu & Kashmir",
						"city": ["Jammu & Kashmir"]
					},
					{
						"state" : "Jharkhand",
						"city": ["Adityapur","Bagbahra","Bhuli","Bokaro","Chaibasa","Chas","Daltenganj","Devghar","Dhanbad","Hazaribag","Jamshedpur","Jharia","Jhumri Tilaiya","Jorapokhar","Katras","Lohardaga","Mango","Phusro","Ramgarh","Ranchi","Sahibganj","Saunda","Sindari"]
					},
					{
						"state" : "Karnataka",
						"city": ["Bagalkot","Bangalore","Basavakalyan","Belgaum","Bellary","Bhadravati","Bidar","Bijapur","Bommanahalli","Byatarayanapura","Challakere","Chamrajnagar","Channapatna","Chik Ballapur","Chikmagalur","Chintamani","Chitradurga","Dasarahalli","Davanagere","Dod Ballapur","Gadag","Gangawati","Gokak","Gulbarga","Harihar","Hassan","Haveri","Hiriyur","Hosakote","Hospet","Hubli","Ilkal","Jamkhandi","Kanakapura","Karwar","Kolar","Kollegal","Koppal","Krishnarajapura","Mahadevapura","Maisuru","Mandya","Mangaluru","Nipani","Pattanagere","Puttur","Rabkavi","Raichur","Ramanagaram","Ranibennur","Robertsonpet","Sagar","Shahabad","Shahpur","Shimoga","Shorapur","Sidlaghatta","Sira","Sirsi","Tiptur","Tumkur","Udupi","Ullal","Yadgir","Yelahanka"]
					},
					{
						"state" : "Kerala",
						"city": ["Alappuzha","Beypur","Cheruvannur","Edakkara","Edathala","Kalamassery","Kannan Devan Hills","Kannangad","Kannur","Kayankulam","Kochi","Kollam","Kottayam","Koyilandi","Kozhikkod","Kunnamkulam","Malappuram","Manjeri","Nedumangad","Neyyattinkara","Palakkad","Pallichal","Payyannur","Ponnani","Talipparamba","Thalassery","Thiruvananthapuram","Thrippunithura","Thrissur","Tirur","Tiruvalla","Vadakara"]
					},
					{
						"state" : "Lakshadweep",
						"city": ["Lakshadweep"]
					},
					{
						"state" : "Madhya Pradesh",
						"city": ["Ashoknagar","Balaghat","Basoda","Betul","Bhind","Bhopal","BinaEtawa","Burhanpur","Chhatarpur","Chhindwara","Dabra","Damoh","Datia","Dewas","Dhar","Gohad","Guna","Gwalior","Harda","Hoshangabad","Indore","Itarsi","Jabalpur","Jabalpur Cantonment","Jaora","Khandwa","Khargone","Mandidip","Mandsaur","Mau","Morena","Murwara","Nagda","Nimach","Pithampur","Raghogarh","Ratlam","Rewa","Sagar","Sarni","Satna","Sehore","Sendhwa","Seoni","Shahdol","Shajapur","Sheopur","Shivapuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Vidisha"]
					},
					{
						"state" : "Maharashtra",
						"city": ["Achalpur","Ahmadnagar","Akola","Akot","Amalner","Ambajogai","Amravati","Anjangaon","Aurangabad","Badlapur","Ballarpur","Baramati","Barsi","Basmat","Bhadravati","Bhandara","Bhiwandi","Bhusawal","Bid","Mumbai","Buldana","Chalisgaon","Chandrapur","Chikhli","Chiplun","Chopda","Dahanu","Deolali","Dhule","Digdoh","Diglur","Gadchiroli","Gondiya","Hinganghat","Hingoli","Ichalkaranji","Jalgaon","Jalna","Kalyan","Kamthi","Karanja","Khadki","Khamgaon","Khopoli","Kolhapur","Kopargaon","Latur","Lonavale","Malegaon","Malkapur","Manmad","Mira Bhayandar","Nagpur","Nalasopara","Nanded","Nandurbar","Nashik","Navghar","Navi Mumbai","Osmanabad","Palghar","Pandharpur","Parbhani","Phaltan","Pimpri","Pune","Pune Cantonment","Pusad","Ratnagiri","SangliMiraj","Satara","Shahada","Shegaon","Shirpur","Sholapur","Shrirampur","Sillod","Thana","Udgir","Ulhasnagar","Uran Islampur","Vasai","Virar","Wadi","Wani","Wardha","Warud","Washim","Yavatmal"]
					},
					{
						"state" : "Manipur",
						"city": ["Imphal"]
					},
					{
						"state" : "Meghalaya",
						"city": ["Shilong", "tura"]
					},
					{
						"state" : "Mizoram",
						"city": ["Aizawl", "Lunglie"]
					},
					{
						"state" : "Nagaland",
						"city": ["Dimapur","Kohima","Wokha","Nagaland"]
					},
					{
						"state" : "Orissa",
						"city": ["Balangir","Baleshwar","Barbil","Bargarh","Baripada","Bhadrak","Bhawanipatna","Bhubaneswar","Brahmapur","Brajrajnagar","Dhenkanal","Jaypur","Jharsuguda","Kataka","Kendujhar","Paradwip","Puri","Raurkela","Raurkela Industrial Township","Rayagada","Sambalpur","Sunabeda"]
					},
					{
						"state" : "Pondicherry",
						"city": ["Karaikal","Ozhukarai","Pondicherry"]
					},
					{
						"state" : "Punjab",
						"city": ["Abohar","Amritsar","Barnala","Batala","Bathinda","Dhuri","Faridkot","Fazilka","Firozpur","Firozpur Cantonment","Gobindgarh","Gurdaspur","Hoshiarpur","Jagraon","Jalandhar","Kapurthala","Khanna","Kot Kapura","Ludhiana","Malaut","Maler Kotla","Mansa","Moga","Mohali","Pathankot","Patiala","Phagwara","Rajpura","Rupnagar","Samana","Sangrur","Sirhind","Sunam","Tarn Taran"]
					},
					{
						"state" : "Rajasthan",
						"city": ["Ajmer","Alwar","Balotra","Banswara","Baran","Bari","Barmer","Beawar","Bharatpur","Bhilwara","Bhiwadi","Bikaner","Bundi","Chittaurgarh","Chomun","Churu","Daosa","Dhaulpur","Didwana","Fatehpur","Ganganagar","Gangapur","Hanumangarh","Hindaun","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunun","Jodhpur","Karauli","Kishangarh","Kota","Kuchaman","Ladnun","Makrana","Nagaur","Nawalgarh","Nimbahera","Nokha","Pali","Rajsamand","Ratangarh","Sardarshahr","Sawai Madhopur","Sikar","Sujangarh","Suratgarh","Tonk","Udaipur"]
					},
					{
						"state" : "Sikkim",
						"city": ["Sikkim"]
					},
					{
						"state" : "Tamil Nadu",
						"city": ["Alandur","Ambattur","Ambur","Arakonam","Arani","Aruppukkottai","Attur","Avadi","Avaniapuram","Bodinayakkanur","Chengalpattu","Dharapuram","Dharmapuri","Dindigul","Erode","Gopichettipalaiyam","Gudalur","Gudiyattam","Hosur","Idappadi","Kadayanallur","Kambam","Kanchipuram","Karur","Kavundampalaiyam","Kovilpatti","Koyampattur","Krishnagiri","Kumarapalaiyam","Kumbakonam","Kuniyamuthur","Kurichi","Madhavaram","Madras","Madurai","Maduravoyal","Mannargudi","Mayiladuthurai","Mettupalayam","Mettur","Nagapattinam","Nagercoil","Namakkal","Nerkunram","Neyveli","Pallavaram","Pammal","Pannuratti","Paramakkudi","Pattukkottai","Pollachi","Pudukkottai","Puliyankudi","Punamalli","Rajapalaiyam","Ramanathapuram","Salem","Sankarankoil","Sivakasi","Srivilliputtur","Tambaram","Tenkasi","Thanjavur","Theni Allinagaram","Thiruthangal","Thiruvarur","Thuthukkudi","Tindivanam","Tiruchchirappalli","Tiruchengode","Tirunelveli","Tirupathur","Tiruppur","Tiruvannamalai","Tiruvottiyur","Udagamandalam","Udumalaipettai","Valparai","Vaniyambadi","Velampalaiyam","Velluru","Viluppuram","Virappanchatram","Virudhachalam","Virudunagar"]
					},
					{
						"state" : "Tripura",
						"city": ["Agartala", "Agartala MCI", "Badharghat"]
					},
					{
						"state" : "Uttaranchal",
						"city": ["Dehra Dun","Dehra Dun Cantonment","Gola Range","Haldwani","Haridwar","Kashipur","Pithoragarh","Rishikesh","Rudrapur","Rurki"]
					},
					{
						"state" : "Uttara Pradesh",
						"city": ["Agra","Aligarh","Allahabad","Amroha","Aonla","Auraiya","Ayodhya","Azamgarh","Baheri","Bahraich","Ballia","Balrampur","Banda","Baraut","Bareli","Basti","Behta Hajipur","Bela","Bhadohi","Bijnor","Bisalpur","Biswan","Budaun","Bulandshahr","Chandausi","Chandpur","Chhibramau","Chitrakut Dham","Dadri","Deoband","Deoria","Etah","Etawah","Faizabad","Faridpur","Farrukhabad","Fatehpur","Firozabad","Gajraula","Ganga Ghat","Gangoh","Ghaziabad","Ghazipur","Gola Gokarannath","Gonda","Gorakhpur","Hapur","Hardoi","Hasanpur","Hathras","Jahangirabad","Jalaun","Jaunpur","Jhansi","Kadi","Kairana","Kannauj","Kanpur","Kanpur Cantonment","Kasganj","Khatauli","Khora","Khurja","Kiratpur","Kosi Kalan","Laharpur","Lakhimpur","Lakhnau","Lakhnau Cantonment","Lalitpur","Loni","Mahoba","Mainpuri","Mathura","Mau","Mauranipur","Mawana","Mirat","Mirat Cantonment","Mirzapur","Modinagar","Moradabad","Mubarakpur","Mughal Sarai","Muradnagar","Muzaffarnagar","Nagina","Najibabad","Nawabganj","Noida","Obra","Orai","Pilibhit","Pilkhuwa","Rae Bareli","Ramgarh Nagla Kothi","Rampur","Rath","Renukut","Saharanpur","Sahaswan","Sambhal","Sandila","Shahabad","Shahjahanpur","Shamli","Sherkot","Shikohabad","Sikandarabad","Sitapur","Sukhmalpur Nizamabad","Sultanpur","Tanda","Tilhar","Tundla","Ujhani","Unnao","Varanasi","Vrindavan"]
					},
					{
						"state" : "West Bangale",
						"city": ["Alipur Duar","Arambagh","Asansol","Ashoknagar Kalyangarh","Baharampur","Baidyabati","Baj Baj","Bally","Bally Cantonment","Balurghat","Bangaon","Bankra","Bankura","Bansbaria","Baranagar","Barddhaman","Basirhat","Bhadreswar","Bhatpara","Bidhannagar","Binnaguri","Bishnupur","Bolpur","Calcutta","Chakdaha","Champdani","Chandannagar","Contai","Dabgram","Darjiling","Dhulian","Dinhata","Dum Dum","Durgapur","Gangarampur","Garulia","Gayespur","Ghatal","Gopalpur","Habra","Halisahar","Haora","HugliChunchura","Ingraj Bazar","Islampur","Jalpaiguri","Jamuria","Jangipur","Jhargram","Kaliyaganj","Kalna","Kalyani","Kamarhati","Kanchrapara","Kandi","Karsiyang","Katwa","Kharagpur","Kharagpur Railway Settlement","Khardaha","Kharia","Koch Bihar","Konnagar","Krishnanagar","Kulti","Madhyamgram","Maheshtala","Memari","Midnapur","Naihati","Navadwip","Ni Barakpur","North Barakpur","North Dum Dum","Old Maldah","Panihati","Phulia","Pujali","Puruliya","Raiganj","Rajpur","Rampur Hat","Ranaghat","Raniganj","Rishra","Shantipur","Shiliguri","Shrirampur","Siuri","South Dum Dum","Titagarh","Ulubaria","UttarparaKotrung"]
					}
				];

	let select = document.getElementById('cities');
	let state = document.getElementById('states');

	for(let x = 0; x < states.length; x++) {
		
		if(states[x].state == state.value) {
			for(let i = select.options.length-1; i > 0 ; i--) {
				select.remove(i);
			}
			for(let i = 0; i < states[x].city.length; i++){
				var option = document.createElement("option");
				option.text = states[x].city[i];
				option.value = states[x].city[i];
				select.add(option, select[i+1]);
			}
			break;
		}
	}
}
