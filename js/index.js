var initialTime = performance.now();
var clickedTime;
var tappedTimes = []; 
var totalTaps = [];
var diffs = [];
var testTimes = [[0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]];
var beepTimes = [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [2.081164098303706, 2.103377277568487, 2.1880298195429067, 2.2113598850314, 2.184623801972916, 2.0249053105857087, 2.221030701959876, 2.220268273336429, 2.09566647004893, 2.182698953609362]];
//var beepTimes = [[1.0014087719189124, 1.1940901006869495, 1.0623159981102346, 1.0543864670007634, 1.177465559924843, 1.1424130960053671, 1.1647037012693222, 1.1632393130723047, 1.1978192340652456, 1.1401692456477368, 1.1439566389393063, 1.1467076006843309, 1.1351408482434524, 1.1576462954919986, 1.1273623632527119, 1.0572211729543886, 1.1013301055811913, 1.0248043021787847, 1.1183080383156854, 1.0102717074479146, 1.1263280337510533, 1.0453044838837697, 1.1304178471211024, 1.025907048248247, 1.1549492645716217, 1.0314693463264206, 1.1967230224046035, 1.0325538239914103, 1.1435553373207517, 1.0161940859125485, 1.0049617169371365, 1.082325954364539, 1.189636149052221, 1.0837061690042882, 1.1358064316916037, 1.128795894602451, 1.0230121886743495, 1.1103425054752212, 1.0675041522853836, 1.0572118610819394], [2.0960757247949884, 2.040980248748134, 2.0690670412852867, 2.026076832688895, 2.018526196520914, 2.016012467414063, 2.033389182982533, 2.0940980966741507, 2.0173713407965557, 2.032235754483726, 2.029213121022964, 2.081056894187588, 2.0548732631057036, 2.0050198388667466, 2.0550113638722056, 2.0857484534177737, 2.0000305235948157, 2.082220790372673, 2.015766700608941, 2.013524674435008], [0.621775310982063, 0.6041301760926533, 0.6167768520490996, 0.657943158072242, 0.6666454181448846, 0.6958183527239299, 0.6115076515466593, 0.6951815879675822, 0.6241080946258284, 0.669412352639792, 0.6982732435086625, 0.6342561291408728, 0.6081435953107597, 0.6444382425032822, 0.6578523169679835, 0.6371041820309078, 0.6685648885070974, 0.6676997502219915, 0.6872182259625018, 0.6199191156945145, 0.6295075318061469, 0.6397150092156544, 0.6680028621127218, 0.6738111187814173, 0.6483888645836346, 0.6820272568445507, 0.6761259563139183, 0.6567746379873323, 0.6143124174712851, 0.6059958512715685, 0.6512910631035318, 0.6930301514035556, 0.6605431571297331, 0.6810856859048305, 0.676130945467017, 0.6385966642404394, 0.6962926419033391, 0.6788511177941665, 0.6693661107376435, 0.6105590318762025, 0.611872461565538, 0.6484717434004283, 0.6301772597288534, 0.6761722042364477, 0.6588113435000857, 0.606083497250204, 0.6438967684461304, 0.6239672603538857, 0.6248008589914268, 0.6252050658007675, 0.6687538658011584, 0.6021251188534665, 0.6495473407055851, 0.6641033761623948, 0.624916685905438, 0.6105305819368707, 0.6065692135601095, 0.6928905700140789, 0.6532785278158623, 0.6460616585372596, 0.6944203501991778, 0.6904092985951188, 0.6418058045318009, 0.6126109248076952, 0.6361696204437167, 0.6875105369329387], [1.5740727278521034, 1.5391666933310535, 1.5454175831491002, 1.6112275757826777, 1.5031138065174363, 1.6305672252472683, 1.636178756765138, 1.6383323012864561, 1.540718591977735, 1.6476840932333667, 1.6339654010489217, 1.5056557314192904, 1.5955066792248591, 1.6317159486478519, 1.6277391609310106, 1.5603376389381045, 1.6415096028062492, 1.605796914374852, 1.5396937362266214, 1.6140578110792356, 1.5142655894163286, 1.547265570977043, 1.5880300784274217, 1.5846113029640478, 1.5588166358214557, 1.6158884919569192], [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [2.18037256502917, 2.083743317589922, 2.0991518131419875, 2.113678128688537, 2.1539165954760255, 2.013177904136872, 2.0003695552800957, 2.1646114754302834, 2.137026895884466, 2.018445442272155, 2.094016449562752, 2.1894676999438114, 2.018107774265098, 2.0018825226879677, 2.0580987518389433, 2.032036357860363, 2.1319210554789074, 2.00201350613736, 2.035703860439253, 2.12248914090395], [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6], [1.0151631561698702, 1.0530171553491268, 1.0845934018927514, 1.07261222360486, 1.0324321585705583, 1.0677108675109015, 1.005957378355164, 1.0368243892678466, 1.021291247426942, 1.0675863993747485, 1.027168828663459, 1.0055203702689104, 1.0523825279730206, 1.053993253966579, 1.08038141971863, 1.0785150900322655, 1.0660746810943742, 1.0429066872836963, 1.0325496891953414, 1.060767311658007, 1.0222334705416138, 1.0716429656723583, 1.007521010979477, 1.0432799752999848, 1.0276327403642695, 1.0854348928107398, 1.0612250387133908, 1.090183006294834, 1.0839768909071945, 1.065275211622645, 1.0837959258408743, 1.0970462833464993, 1.0436920239755128, 1.0511029387251647, 1.036795614029436, 1.0786004317279314, 1.0343724092276854, 1.0651517333259708, 1.0044213300281728, 1.088611638308618], [1.5692877330447055, 1.5500041054484197, 1.543886936296951, 1.5771019751705049, 1.589153377852999, 1.597503557471035, 1.5353205280239253, 1.5746581993080941, 1.504658868351779, 1.5409002956723714, 1.5564055359421758, 1.5716265431048142, 1.5539264272939781, 1.5364848927027912, 1.5663269575726069, 1.5200320113887116, 1.5710106879145624, 1.5405592931166385, 1.5355370182557995, 1.5861261089927432, 1.597353416136828, 1.547724071640478, 1.562384658538873, 1.5254588441076522, 1.5934707505733652, 1.5163838759959818], [2.013904390921569, 2.000788373462077, 2.0484053666490514, 2.0289056215167562, 2.014783501322731, 2.0271914590586815, 2.006235507428601, 2.0172224381560118, 2.019877165674388, 2.041443724419958, 2.034485019627947, 2.0002685782998, 2.0452064670363272, 2.0239636594072734, 2.0228919504774243, 2.0060418285753503, 2.0409392261405066, 2.049493378988813, 2.0486450780133514, 2.01779886225561], [0.6444745616433638, 0.6326321484596077, 0.6045877814080738, 0.6292496416612955, 0.6292738564484771, 0.6071616746891962, 0.6276974704111073, 0.6153530542416807, 0.648843487829154, 0.6140023847627606, 0.6393740771090581, 0.6337828373861253, 0.6223868409073321, 0.6308137862838313, 0.6092279126853963, 0.61181962011517, 0.6252600519965967, 0.6248656571544131, 0.6458829616978428, 0.6279983796555159, 0.6360963022208023, 0.6365798989730606, 0.6329139045947364, 0.6174829104133018, 0.608299528156605, 0.6015677797877116, 0.6452162239025692, 0.629066606528068, 0.623261995326484, 0.6249690554516694, 0.6023505788858046, 0.6112487790972925, 0.6330665196365559, 0.6356312733517478, 0.6339510416229999, 0.6317281550003194, 0.6184807311467869, 0.6262466524524177, 0.6010375085237315, 0.6123468840416383, 0.6394562495507586, 0.6269253671764143, 0.6056959578541163, 0.6395364226509778, 0.6402977991196284, 0.623495231058622, 0.6417447943362606, 0.6139545446527077, 0.6177602749897984, 0.6172647426450923, 0.631039073326134, 0.6400505040393244, 0.6499829887899077, 0.638665627487071, 0.6325263034383571, 0.6106978987734798, 0.6438955542458027, 0.6379524186577005, 0.6038652132797516, 0.6034990968087608, 0.6398518938006965, 0.6082797585644034, 0.6377445207150989, 0.6090468765009568, 0.6161564719876645, 0.6131901510248582], [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5], [1.0009107862727662, 1.022182855515238, 1.0009114853009011, 1.0284039944933943, 1.0202697255684836, 1.0164399422348906, 1.015586510573231, 1.0304607946368292, 1.032985762730869, 1.018675151897901, 1.041169229154061, 1.0484093607942662, 1.0086157385871979, 1.0399109072512336, 1.0471171188586594, 1.0085772550510121, 1.0186148875102525, 1.0083563389980692, 1.0082965760170217, 1.0166008624935805, 1.0428014816570754, 1.0419997836285348, 1.0181203001617156, 1.0223853928727125, 1.0142696667408126, 1.0412197948547315, 1.027297282877873, 1.0447874553045915, 1.0081495610348274, 1.0011197144932253, 1.0114425891728982, 1.0258499473116158, 1.0334282466299025, 1.0092153374533, 1.0259895957314538, 1.0268977629869023, 1.0405042552236312, 1.0026434616283353, 1.0168968988266336, 1.0013150773435608], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [0.600691979550041, 0.6006081458868782, 0.7822558073404802, 0.6283957628579038, 0.7494772273654345, 0.6864690899640633, 0.6055488366520316, 0.7928823422426836, 0.7539251525822249, 0.7371933086268389, 0.7091583120081968, 0.6930727272320621, 0.6093981373803968, 0.6706879730135378, 0.7261981998252279, 0.7701420726579311, 0.7596516895369577, 0.7401840204175979, 0.7175088537122551, 0.7908813746049574, 0.6113283596743181, 0.6208088037874899, 0.6052290425875745, 0.6173134227422127, 0.6956371950109436, 0.7182537148826611, 0.636565079898977, 0.7003427570756301, 0.7164201036192626, 0.7820665817336229, 0.7185816459188268, 0.6793894339046626, 0.6289933932868278, 0.6634059504724888, 0.7122787544088159, 0.6688411647110466, 0.6142296168596137, 0.6818101723429766, 0.7271196332723775, 0.7411380136992326, 0.7874513061446178, 0.7757183882684267, 0.7158124366624581, 0.7138194009273249, 0.7944766108860136, 0.6703535285999271, 0.6845788292475788, 0.6569552043348039, 0.7062607553958172, 0.7029202013187806, 0.6825147146035857, 0.7378469368321452, 0.6030316289473295, 0.6613968697359378, 0.7408757272547465, 0.6418800696362584, 0.662766864255349, 0.7345985255019833, 0.709266484143824, 0.6649397748262724, 0.7012550741259324, 0.6430896694886292, 0.6749461094402011, 0.6516265344584893, 0.613626187045542, 0.6150202217227657], [2.1437265201779523, 2.1087058750495324, 2.0444915382839914, 2.13573393524927, 2.143661059506983, 2.090742818247258, 2.139217305285208, 2.0276452651887586, 2.1086650398289777, 2.1008520872564724, 2.096970699707918, 2.018069230074937, 2.0964754821569795, 2.0227477201873594, 2.013818716679399, 2.0397274278185686, 2.0586366495157424, 2.0362049072157493, 2.095950010573052, 2.0141193589455466], [0.6010232216522774, 0.722429870932953, 0.6123899119757261, 0.7413814419642093, 0.7369548497567272, 0.6513451454512554, 0.6341447281749482, 0.6664357568503982, 0.7467665176402176, 0.6879982838840104, 0.672916072209909, 0.6296332965698136, 0.7282281510509248, 0.6550071471622794, 0.6998881057515945, 0.7317569812297889, 0.6921844564018673, 0.7015239726040057, 0.6488783210678526, 0.7099870130004907, 0.6693058423708731, 0.7081557995928992, 0.6745763378769839, 0.6234222773709335, 0.7091065135941844, 0.6266414835562295, 0.6183840471060409, 0.7416505623202789, 0.6642045940302478, 0.672021961359024, 0.6302791408511521, 0.6115124569368118, 0.6288145126801268, 0.6834741934258566, 0.6712124682101404, 0.6405934165493867, 0.7339124245443938, 0.6640023459716634, 0.7013333563028951, 0.7172358157537952, 0.700173991681002, 0.704276247287381, 0.6451175614184373, 0.6026726921903571, 0.7358018996982671, 0.749019305841188, 0.7350181350619669, 0.6468309853818571, 0.6290553089730622, 0.708857458031758, 0.6546319106555607, 0.7174245942900755, 0.667971324287051, 0.621267783345444, 0.6272160976918527, 0.6641265220135302, 0.7393373908306667, 0.6198713165780946, 0.7349546965748378, 0.7161284839711789, 0.6332347979997812, 0.6926069181261696, 0.6590234293679813, 0.7344713432159595, 0.7491903924051038, 0.6706506867442344], [1.5460221008371131, 1.5068398593899202, 1.5242915701423203, 1.5497223329455436, 1.521212028317568, 1.5399388815625277, 1.5438065184013088, 1.5075938103314348, 1.5386454715416908, 1.5428017415400903, 1.5070406128618365, 1.5226865281757664, 1.5396830552761835, 1.5063234965210073, 1.5144050984392792, 1.5369493470362803, 1.5272762291963404, 1.5333113068628907, 1.5221864150922308, 1.50980153586916, 1.511554876125127, 1.5438848666581308, 1.5233292500694402, 1.5402140364024923, 1.5262367190671071, 1.5125386644198695], [1.0640841957497893, 1.0904766576944351, 1.0529533619142495, 1.066620705244982, 1.0846887371989848, 1.009146415952186, 1.040754313028386, 1.1019593294174355, 1.046081246215341, 1.0361745751868745, 1.0290573009624961, 1.014852204479924, 1.0465639458522902, 1.1043987480714414, 1.0496721267848694, 1.03998949027696, 1.1299310496428037, 1.1269263786070862, 1.104578685883481, 1.1456413131944796, 1.0374658639692018, 1.1055588432463752, 1.079024125954187, 1.0667515615679946, 1.0281271820442315, 1.106674405992646, 1.1430855053513802, 1.115461688479392, 1.0007617856136093, 1.080982729549725, 1.019388879942763, 1.0326962947666765, 1.043229666807524, 1.0091450496850811, 1.0227238079704497, 1.0002422764150964, 1.1460792538197502, 1.126633708556071, 1.064636335937576, 1.132566933738951], [1.5569732936410086, 1.6444798272388443, 1.508690753795759, 1.6657107946668954, 1.5114628833103816, 1.6526532611216753, 1.5631903979946047, 1.5875859838079842, 1.5686603651867113, 1.6643264138437455, 1.5753303137392454, 1.563811936212459, 1.6875687695862194, 1.5228035315984938, 1.5447597658537953, 1.6326937239770751, 1.5906428554278529, 1.6987393397239425, 1.6844948278013798, 1.5397382932349823, 1.6465980611279996, 1.6574237059556838, 1.5953650906501085, 1.6435756355184745, 1.5616906053550759, 1.664490848293941]];
//[(1, 0.2), (2, 0.1), (0.6, 0.1), (1.5, 0.15), (2, 0), (2, 0.2), (0.6, 0), (1, 0.1), (1.5, 0.1), (2, 0.05), (0.6, 0.05), (1.5, 0), (1, 0.05), (1, 0), (0.6, 0.2), (2, 0.15), (0.6, 0.15), (1.5, 0.05), (1, 0.15), (1.5, 0.2)]
multiplyElements(beepTimes, 1000);
multiplyElements(testTimes, 1000);
var gracePeriod = 1500;
var lastPressed = 0;
var lastBeeped = performance.now();
var volume = 10;
a = new AudioContext();
var currentTrial = 0;
var pay = 0.1;
var keyToTrack = 90;
var keyToTrackText = "z";
var begin = false;
var test = false;
var email = false;
var delay = 1000;
var setup_beeps = true;
var userCode = new Date().getTime();

function get_browser() {
	var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
	if(/trident/i.test(M[1])){
		tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
		return {name:'IE',version:(tem[1]||'')};
	}
	if(M[1]==='Chrome'){
		tem=ua.match(/\bOPR|Edge\/(\d+)/)
		if(tem!=null)   {return {name:'Opera', version:tem[1]};}
	}
	M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
	return {
		name: M[0],
		version: M[1]
	};
}

var browser = get_browser();
document.getElementById("js_check").style.display = "none";

function multiplyElements(arr, factor) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			arr[i][j] *= factor;
		}
	}
}

function getDiffs(arr1, arr2) {
	out = [];
	var l = arr1.length;
	if (arr1.length > arr2.length) {
		l = arr2.length;
	}
	for (var i = 0; i < l; i++) {
		var diff = Math.abs(arr1[i] - arr2[i]);

		if (diff < 500) {
			out.push(diff);
		}
	}
	return out;
}

function getCumulative(arr) {
	out = [];
	for (var i = 0; i < arr.length; i++) {
		out.push(sumArr(arr, 0, i));
	}
	return out;
}

function arrayToStr(arr) {
	out = "[";
	for (var i = 0; i < arr.length; i++) {
		out += "[";
		for (var j = 0; j < arr[i].length; j++) {
			out += arr[i][j];
			if (j != arr[i].length - 1) {
				out += ", ";
			}
		}
		out += "]";
		if (i != arr.length - 1) {
			out += ", ";
		}
	}
	out += "]";
	return out;
}

function sumArr(arr, start, end) {
	var total = 0;
	for (var i = start; i <= end; i++) {
		total = total + arr[i];
	}
	return total;
}

function beep(vol, freq, duration, start) {
	v = a.createOscillator();
	u = a.createGain();
	v.connect(u);
	v.frequency.value = freq;
	v.type="square";
	u.connect(a.destination);
	u.gain.value = vol * 0.01;
	v.start(a.currentTime + start);
	v.stop(a.currentTime + start + duration * 0.001);
}

function genBeeps(intervals) {
	initialTime = performance.now();
	for (var i = 0; i < intervals.length; i++) {
		beep(volume, 250, 150, sumArr(intervals, 0, i)/1000);
	}
}

function add(a, b) {
	return a + b;
}

function begin() {
	begin = true;
}

function prepareNextExperiment() {
	toDone.onclick = function () { dispFinalScreen() };
	document.getElementById("toDone").style.display = "block";
	document.getElementById("counters").style.display = "block";
	document.getElementById("footer").style.display = "block";
	document.getElementById("status").innerHTML = "Status: Ready";
	document.getElementById("button").innerHTML = "Start next sequence";
	document.getElementById("button").style.background = "grey";
	document.getElementById("button").onclick = nextExperiment;
	document.getElementById("complete").innerHTML = "Sequences complete: " + currentTrial + "/20";
	document.getElementById("complete1").innerHTML = "Sequences complete: " + currentTrial + "/20";
	document.getElementById("money").innerHTML = "Money earned: $" + (currentTrial * pay).toFixed(2);
	document.getElementById("money1").innerHTML = "Money earned: $" + (currentTrial * pay).toFixed(2);
	document.onkeydown = null;
	document.getElementById("printReactionTime").innerHTML = "";
	tappedTimes = [];
}

function startPractice() {
	testTimes = testTimes[0];
	document.getElementById("statusPractice").innerHTML = "Status: Tap along...";
	document.getElementById("buttonPractice").innerHTML = "Tap along...";
	document.getElementById("buttonPractice").style.background = "grey";
	var keyPressed = false;
	document.onkeydown = function () {
		keyPressed = true;
	};
	var labelLength = testTimes.reduce(add, 0);
	var exLength = labelLength + testTimes[0]*15;
	setTimeout(function () {
		document.getElementById("statusPractice").innerHTML = "Status: Keep tapping...";
		document.getElementById("buttonPractice").innerHTML = "Keep tapping...";
		document.getElementById("buttonPractice").style.background = "#4CAF50";
	}, labelLength + 2000);

	setTimeout(function () {
		// Move on to the next experiment once the current experiment is over
		document.getElementById("buttonPractice").innerHTML = "STOP";
		document.getElementById("buttonPractice").style.background = "red";
	}, exLength - 1000 + 2000);

	setTimeout(function () {
		genBeeps(testTimes);
	}, 2000);

//	document.onkeydown = function () {
//	document.getElementById("key_reminder2").innerHTML = "Remember, you selected the following key to tap: <b>" + keyToTrackText + "</b>";
//	};

	setTimeout(function () {
		toPre.style.display = "block";
		if (keyPressed) {
			document.getElementById("recorded2").style.display = "block";
		}
	}, exLength + 2000);
}

function nextExperiment() {
	document.getElementById("userCode").value = userCode;
	document.getElementById("data").value = arrayToStr(totalTaps);
	document.getElementById("experimentID").value = (currentTrial - (0 - 1)); // avoids js ambiguity between + as addition and concatenation
	document.getElementById("status").innerHTML = "Status: Tap along...";
	var labelLength = beepTimes[currentTrial].reduce(add, 0);
	var exLength = labelLength + beepTimes[currentTrial][0]*15;
	setTimeout(function () {
		document.getElementById("status").innerHTML = "Status: Keep tapping...";
		document.getElementById("button").innerHTML = "Keep tapping...";
		document.getElementById("button").style.background = "#4CAF50";
	}, labelLength + 2000);

	setTimeout(function () {
		// Move on to the next experiment once the current experiment is over
		document.getElementById("button").innerHTML = "STOP";
		document.getElementById("button").style.background = "red";
	}, exLength - 1000 + 2000);

	setTimeout(function () {
		// Move on to the next experiment once the current experiment is over
		currentTrial++;
		totalTaps.push(tappedTimes);
		if (tappedTimes.length > 0) {
			document.getElementById("recorded").style.display = "block";
		}
		diffs = diffs.concat(getDiffs(getCumulative(beepTimes[currentTrial-1]), tappedTimes));
		// Asynchronously save the data
		$.ajax({
			url: "save.php",
			type: "POST",
			data: { key: '2F7E0461B3F2D3D9D0F977DB9B7CCCA055DDC78AE1EE00C52DD982ED91E7F355', userCode: userCode, experimentID: currentTrial, data: arrayToStr(totalTaps) },
			cache: false,
			success: function (response) {
				alert(response);
				//  $('#thenode').html(response);
			}
		});
		if (currentTrial == beepTimes.length) {
			dispFinalScreen();
			document.getElementById("complete1").innerHTML = "Sequences complete: " + currentTrial + "/20";
			document.getElementById("money1").innerHTML = "Money earned: $" + (currentTrial * pay).toFixed(2);
			return;
		}
		prepareNextExperiment();
	}, exLength + 2000);

	setTimeout(function () {
		genBeeps(beepTimes[currentTrial]);
	}, 2000);

	toDone.onclick = null;
	document.getElementById("button").innerHTML = "Tap along...";
	document.getElementById("recorded").style.display = "none";
	document.getElementById("button").style.background = "grey";
	document.getElementById("button").onclick = null;
	document.getElementById("toDone").style.display = "none";
	document.getElementById("counters").style.display = "none";
	document.getElementById("footer").style.display = "none";
	document.onkeydown = recordKey;
}

function dispFinalScreen() {
	document.getElementById("footer").style.display = "none";
	var experimentDiv = document.getElementById("experiment");
	var doneDiv = document.getElementById("done");
	var userCode = new Date().getTime();
	document.getElementById("code").innerHTML = userCode;
	if (test) {
		document.getElementById("result").innerHTML = arrayToStr(totalTaps);
	}

	document.getElementById("userCode").value = userCode;
	document.getElementById("data").value = arrayToStr(totalTaps);

	experimentDiv.style.display = "none";
	doneDiv.style.display = "block";

	var trace = {
			x: diffs,
			type: 'histogram',
	};
	var layout = {
			xaxis: {title: "Button Press Timing Error (milliseconds)"}, 
			yaxis: {title: "#"},
	};
	var data = [trace];
	Plotly.newPlot('plot', data, layout);

	if (email) {
		var templateParams = {
				id: userCode,
				results: arrayToStr(totalTaps),
				test: test
		};

		emailjs.send('gmail','results_email', templateParams);
	}
}

function dispExperimentScreen() {
	var setupDiv = document.getElementById("setup");
	var experimentDiv = document.getElementById("experiment");

	setupDiv.style.display = "none";
	experimentDiv.style.display = "block";
}

function clock() {
	clickedTime = performance.now();
	if (Math.abs(clickedTime - lastPressed) > 100) {
		tappedTimes.push(Math.round((clickedTime - initialTime)*100)/100);
		lastPressed = clickedTime;
	}
	if (test) {
		document.getElementById("printReactionTime").innerHTML = "tappedTimes: " + tappedTimes + " ms";
	}
}

var recordButtonClick = function() {
	clock();
}

document.onkeyup = function() {
	document.getElementById("key_reminder").innerHTML = "Remember, you selected the following key to tap: " + keyToTrackText;
	document.getElementById("key_reminder2").innerHTML = "Remember, you selected the following key to tap: " + keyToTrackText;
}

slider.oninput = function() {
	sound.innerHTML = "<b>Current sound</b>: " + this.value + "%";
	volume = this.value;
}

setInterval( function() {
	if (setup_beeps) {
		beep(volume, 250, 100, 0);
	}
}, 1000);

var changeKey = function(e) {
	keyToTrackText = e.key;
	if (keyToTrackText == " ") {
		keyToTrackText = "Space";
	}
	key.innerHTML = "<b>Current key</b>: " + keyToTrackText;
	keyToTrack = e.keyCode;
};


var recordKey = function(e) {
	var keyCode = e.keyCode;
	if (keyCode == keyToTrack) {
//		document.getElementById("key_reminder").innerHTML = "Remember, you selected the following key to tap: <b>" + keyToTrackText + "</b>";
		clock();
	}
};

toKey.onclick = function () {
	setup_sound.style.display = "none";
	setup_key.style.display = "block";
	document.onkeydown = changeKey;
//	volume = Math.round((volume + 100) / 2);
	setup_beeps = false;
}

toInstr0.onclick = function () {
	setup_key.style.display = "none";
	instr_0.style.display = "block";
	document.onkeydown = null;
	document.getElementById("instr_1_text").innerHTML = "1. Place your hand in a comfortable position with your pointer finger on the key you selected (" + keyToTrackText + "), like in the photo example below.";
	document.getElementById("key_reminder").innerHTML = "Remember, you selected the following key to tap: " + keyToTrackText;
	document.getElementById("key_reminder2").innerHTML = "Remember, you selected the following key to tap: " + keyToTrackText;
	toInstr1.style.display = "none";
	setTimeout(function () {
		toInstr1.style.display = "block";
	}, 1000);
}

toInstr1.onclick = function () {
	instr_0.style.display = "none";
	instr_1.style.display = "block";
	toInstr2.style.display = "none";
	setTimeout(function () {
		toInstr2.style.display = "block";
	}, 3000);
}

toInstr2.onclick = function () {
	instr_1.style.display = "none";
	instr_2.style.display = "block";
	toInstr3.style.display = "none";
	setTimeout(function () {
		toInstr3.style.display = "block";
	}, 5000);
}

toInstr3.onclick = function () {
	instr_2.style.display = "none";
	instr_3.style.display = "block";
	toDemo.style.display = "none";
	setTimeout(function () {
		toDemo.style.display = "block";
	}, 5000);
}

toDemo.onclick = function () {
	instr_3.style.display = "none";
	demo.style.display = "block";
}

toPractice.onclick = function () {
	demo.style.display = "none";
	practice.style.display = "block";
}

toRound.onclick = function () {
	practice.style.display = "none";
	practiceRound.style.display = "block";
	toPre.style.display = "none";
}

toPre.onclick = function () {
	practiceRound.style.display = "none";
	pre.style.display = "block";
	toExperiment.style.display = "none";
	setTimeout(function () {
		toExperiment.style.display = "block";
	}, 1000);
}

toExperiment.onclick = function () {
	pre.style.display = "none";
	experiment.style.display = "block";
}

toDone.onclick = function () { dispFinalScreen() };

function openFullscreen(elem) {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}
}

var fs = false;
document.addEventListener('webkitfullscreenchange', exitHandler, false);
document.addEventListener('mozfullscreenchange', exitHandler, false);
document.addEventListener('fullscreenchange', exitHandler, false);
document.addEventListener('MSFullscreenChange', exitHandler, false);

function exitHandler()
{
	if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
	{
		if (fs) {
			container.style.padding = "0px";
			fs = false;
			fullscreen_button.style.display = "block";
		}
		else {
			container.style.padding = "10px";
			fs = true;
			fullscreen_button.style.display = "none";
		}
	}
}

var body = document.getElementById("container");
document.getElementById("fullscreen_button").onclick = function () { openFullscreen(body) };