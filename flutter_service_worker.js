'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c366341fa369cb9415a174a884997d56",
"index.html": "fdae0b9a00edd867ba472d1acb4561b1",
"/": "fdae0b9a00edd867ba472d1acb4561b1",
"main.dart.js": "e9cdd2315f34bfcb39b9a066f575f33b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"android/local.properties": "1c67fb2e530ba32b7405ce39772d8213",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "93eb07ec70c3a498be133b3c96a35477",
"web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"assets/AssetManifest.json": "ae3476ad722439769cacc2d84c00694f",
"assets/NOTICES": "9973933f81d416a3983a08c1d5b9414e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0dbbfd65dcd1e2788106fa43e624f7b5",
"assets/fonts/MaterialIcons-Regular.otf": "6c56e61a09ae8fb6adeb019815054277",
"assets/assets/images/background_clara_hofburg.png": "8874a2edf3d2bdaa4bcba3ef6809519f",
"assets/assets/images/blank.png": "99824404f50654ecf0457b146bbb2442",
"assets/assets/images/Clara/Clara_Heldenplatz/Sam.%2520Alter%2520Musikinstrumente%2520.jpg": "1ebfcf5bb44f22c2e14c25e5d0ff327b",
"assets/assets/images/Clara/Clara_Heldenplatz/Johannes_Brahms_portrait.jpg": "fa0ec5661d3c65174d0c9d6218e9cc55",
"assets/assets/images/Clara/Clara_Heldenplatz/Robert%2520Schumann.jpg": "d626666bbfaa5428c1a085c5a13595cb",
"assets/assets/images/Clara/Clara_Heldenplatz/clara%2520schumann%25202.jpg": "80b765140b5a229bb5c0bf61027886ff",
"assets/assets/images/Clara/Clara_Tuchlauben/TiuchlaubenGesderMusikfreunde.jpg": "71f92b8ec3c16976b6754414883f3de7",
"assets/assets/images/Clara/Clara_Tuchlauben/background_tuchlauben.png": "661c2c676cb9bf0eb50499f29b7a3329",
"assets/assets/images/Clara/Clara_Tuchlauben/Wieck-Torte.jpg": "a0e0235cc2d5a7afdd4889f0308d37ec",
"assets/assets/images/Clara/Clara_Tuchlauben/Altes_Musikvereinsgeb%25C3%25A4ude.jpg": "2dd77a88a9df283a26366b066a99776a",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/Alma_Mahler_1899a.jpg": "87002dab2576d6bcf7d934a5f1beb61e",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/Palais_Wittgenstein_Rote_Salon_1910.JPG": "137d36be8c6ddda99a350dc335f867fb",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/Palais_Wittgenstein_Musiksalon_1910.JPG": "738aea354893a4ce18a0019f90bf72d6",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/4_The_grand_staircase_in_the_Alleegasse.jpg": "f67d86e3b3b2516a44c2a3a444a43c96",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/1288432_default.jpg": "74070e97400d126e555c505842349e52",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/mf_clara_05_header.png": "b5fcfa40cb2efa8ce1f8b85f40581bde",
"assets/assets/images/Clara/Clara_Argentienierstra%25C3%259Fe/Clara_Schumann_1853.jpg": "0dc0ea261be3b2900ac6bdc500ef57b5",
"assets/assets/images/Clara/Clara_Graben/background_graben.png": "851e50803c02d7ce14b9c8379610727b",
"assets/assets/images/Clara/Clara_Graben/Franz_Joseph_1865.jpg": "396090ff07d4a1aa9b9f746e44a7b73a",
"assets/assets/images/Clara/Clara_Graben/kaiserhymne.jpg": "50ab746adf2c0593a5243ff7d4c63495",
"assets/assets/images/Clara/Clara_Graben/Clara_Schumann_Franz_Luckhardt.png": "9cb1be16839f9bc22b8417715eadc44f",
"assets/assets/images/Clara/Clara_Musikvereinplatz/Brahms_4c%25201.jpg": "09b5db84a8d7a45b028133c5697ae888",
"assets/assets/images/Clara/Clara_Musikvereinplatz/musikverein_alt.png": "ecb2132ad74710d3d7bd50832b8d5328",
"assets/assets/images/Clara/Clara_Musikvereinplatz/mf_clara_06_footer.png": "6f6ad82ee8875ccbce0a0bec1a889746",
"assets/assets/images/Clara/Clara_Musikvereinplatz/Brahms%2520Saal%25201.jpg": "51ea66f91403f2a09ac31c35b2bede97",
"assets/assets/images/Clara/Clara_Bauernmarkt/Joseph%2520von%2520Eichendorff%2520%2520Foto%2520H.-P.Haack.jpg": "4cc2d3fd61f1ac076cda2dfddea57f92",
"assets/assets/images/Clara/Clara_Bauernmarkt/background_Bauernmarkt.png": "8e2d64334ed7162ee5e036515e9cdfcf",
"assets/assets/images/Clara/Clara_Bauernmarkt/Robert%2520Schumann.jpg": "d626666bbfaa5428c1a085c5a13595cb",
"assets/assets/images/Clara/Clara_Bauernmarkt/clarajung.jpeg": "0c68111413b6eedcfc0dd0344742219a",
"assets/assets/images/Clara/Clara_Bauernmarkt/Grillparzer.jpg": "bb5bc3a0aff04f836207a3acf17d6d72",
"assets/assets/images/Clara/Clara_Bauernmarkt/Grundhof_1940.jpg": "a8eed151107a7904af78bdc6e9c7d317",
"assets/assets/images/Baker/heldenplatz_baker_2.jpg": "bfdfcbdde8ea8b2b25db0637a568b5c1",
"assets/assets/images/Baker/kaerntnerst_baker_2.jpg": "cd70ca0187ddf39480cb6149e33e6277",
"assets/assets/images/Baker/kaerntnerst_baker_tanz.jpg": "72bf2c793e94e48cca9ffb582f81dd20",
"assets/assets/images/Baker/favoriten_paris.jpg": "6a65f03a6011513da6186b924cf6a510",
"assets/assets/images/Baker/ring_baker_1.jpg": "4cb7645f05605d5499bccaf732fb717f",
"assets/assets/images/Baker/seilers_baker_ronacher.jpg": "5a7a394286d52f35b0a589f08dd24ca7",
"assets/assets/images/Baker/favoriten_baker_1.jpg": "f8ff2c82a6ced21ec3236a4ac4ff6f2d",
"assets/assets/images/Baker/ring_baker_hotel_bristl.jpg": "a9b963c52b9388670d87a08a414ea9dc",
"assets/assets/images/Baker/favoriten_johanstraustheater.jpg": "218150da5a26fb7b32ad44eb56a9b00d",
"assets/assets/images/Baker/kaerntnerst_baker_bg.png": "81106c37b8a412a1853b316cc7e74124",
"assets/assets/images/Baker/heldenplaz_baker_bg.png": "1f9e75948e50a5336e08b0f119920da4",
"assets/assets/images/Baker/ring_baker_blackwomen.jpg": "b4a966ffe91b2eb6062e848f27f0a8f8",
"assets/assets/images/Baker/ring_baker_bg.png": "a52a1b8d97ae6489a50794097a6a00fd",
"assets/assets/images/Baker/seilers_baker_3.jpg": "f898eed9ee718b4cd23c6c7261bfa903",
"assets/assets/images/Baker/seilers_baker_2.jpg": "8a17e897d37d3936bd5fc4690b21416b",
"assets/assets/images/Baker/seilers_baker1.jpg": "9e81bf2c014451454729b7841d7548bc",
"assets/assets/images/Baker/heldenplatz_baker_1.jpeg": "ed61424475819ecbaefff787d067df89",
"assets/assets/images/Baker/favoriten_gedenktafel.jpg": "baa508861c0d38d80b0b7ee971cf6810",
"assets/assets/images/Baker/seilers_baker_bg.png": "8fbf7a1f0248d62348ff68c625fd768f",
"assets/assets/images/Baker/kaerntnerst_baker1.jpg": "1129e42dafa091cad276e899c478c5a1",
"assets/assets/images/Baker/seilers_baker_4.jpg": "c6fb525e9665c81819111c28ebca6a43",
"assets/assets/images/splash.mp4": "9de98fd48dee578050f2d55a8d849418",
"assets/assets/images/mf_main_bg.png": "bba4923f9de36f5b815b3e0c1fd7a47c",
"assets/assets/images/waypoints_all/waypoint_clara.png": "dfe386d48378f410604ead2d86a015b7",
"assets/assets/images/waypoints_all/waypoint_strauss%2520copy.png": "878ff4a84f3bc1b65910f9514392f582",
"assets/assets/images/waypoints_all/waypoint_klassikerinnen.png": "05a595b3d3a9aaac2834255747f5c24c",
"assets/assets/images/waypoints_all/waypoint_nsverfemte.png": "f5a66a3a4ae714b79799e1aaef75929e",
"assets/assets/images/waypoints_all/waypoint_baker.png": "a69197ac4fb662e33b73a9dc9114101e",
"assets/assets/images/waypoints_all/waypoint_strauss.png": "a11c05474cb399e64e294883f893161c",
"assets/assets/images/mf_logo_B.png": "c7fa885d5d738c49b6cbbfe987a9c976",
"assets/assets/images/mf_logo.png": "bb7db17dafd4c89b00cc9c6683304d34",
"assets/assets/images/strauss_img/strauss_palaiscoburg/Family_portrait_of_Prinz_Leopold_of_Saxe-Coburg-Gotha.jpg": "aaf7c7dc9db7c23b0a05ad312c6e6520",
"assets/assets/images/strauss_img/strauss_palaiscoburg/Geiger_Konstanze_Adelheid_Therese.jpg": "0b24875c68ffa7e011d3027db13bad98",
"assets/assets/images/strauss_img/strauss_palaiscoburg/Coburgpalais.jpg": "15a3d0c51e927d8294bf0f984d3af8a1",
"assets/assets/images/strauss_img/strauss_nussdorf/Tomasek.jpg": "281249dbe3569a1221d1b083a057ce48",
"assets/assets/images/strauss_img/strauss_nussdorf/Sechter.jpg": "41ce1fbb8c5661aacc15ebd8378a20c9",
"assets/assets/images/strauss_img/strauss_nussdorf/SisiAnkunftInNu%25C3%259Fdorf.jpg": "1dea2b6bf3c975338ee9070b3ee502ef",
"assets/assets/images/strauss_img/strauss_wiednerhauptstr/GoldenesLamm.jpg": "25f2f927259ee868cc3462a57756653c",
"assets/assets/images/strauss_img/strauss_wiednerhauptstr/GoldenesLamm_AntiquariatJohannesM%25C3%25BCllerSzbg.jpg": "a543617fe22c221350bc9373436ba6da",
"assets/assets/images/strauss_img/strauss_karlsplatz/Musikvereinsgeb%25C3%25A4ude_Schlusssteinlegung_01_03_1870.jpg": "4a54e0eeadac26ce5633368a0e8c5129",
"assets/assets/images/strauss_img/strauss_karlsplatz/Rudolf_Habsburg_and_Princess_Stephanie.jpg": "917c31bfde51a662814a73cf2145d4ff",
"assets/assets/images/strauss_img/strauss_karlsplatz/Gisela%2520Frankl%2520%25E2%2580%2593%2520Bezirksmuseum%2520Leopoldstadt.jpg": "a89de1c283fe4b9e60bd1e5504542a44",
"assets/assets/images/strauss_img/strauss_karlsplatz/Allegory_on_the_betrothal_of_Crown_Prince_Rudolf_and_Stephanie_of_Belgium.jpg": "21c9b035acfedb2bff944cd333b63810",
"assets/assets/images/strauss_img/strauss_karlsplatz/Gisela%2520Frankl%25C3%2596sterreichische%2520Nationalbibliothek.jpg": "526335852720cca1966a1c825bcf5fde",
"assets/assets/images/strauss_img/strauss_zieglergasse/640px-Groepsportret_eerste_Europese_damesorkest_Erstes_Europ%25C3%25A4isches_Damen-Orchester_(titel_op_object),_RP-F-F00627.jpg": "e04cefc15c5b6f50e55f4502a669c736",
"assets/assets/images/strauss_img/strauss_zieglergasse/Weinlich.sophie-drinker-institut.jpg": "7d202f6aa4ab51cb618249036793601e",
"assets/assets/images/strauss_img/strauss_landstrasserhpt/Postkarte_SuesseMaedelnAK_10101828_ScanHB.Wiener%2520Damen.Orchester.jpg": "61cfb9326e0b06304f1f270b0c72f6ac",
"assets/assets/images/strauss_img/strauss_landstrasserhpt/drehersaal-bm03.jpg": "e1d5d4c0817eb4e94554036f02d53e2a",
"assets/assets/images/strauss_img/strauss_landstrasserhpt/head_drehersetablissement_bm03.jpg": "077273a18766ee2e23451cdc635d0d0a",
"assets/assets/images/strauss_img/strauss_prater/gelaende_der_wiener_weltausstellung_mit_rotunde_original.jpg": "bffe5f6f171fd0d9f34b53c9f47c9ac9",
"assets/assets/images/strauss_img/strauss_prater/Rotunde_Weltausstellung_1873.jpg": "27786a81f6a80442e6a17bb6f9c687b3",
"assets/assets/images/strauss_img/strauss_prater/Damenkapelle.jpg": "0b947410bc560a80333a9f11976ad196",
"assets/assets/images/strauss_img/strauss_prater/640px-Eingangstor_Weltausstellung_1873.jpg": "844708d0768b7825c8d1921f2d9a350c",
"assets/assets/images/strauss_img/strauss_prater/640px-Weinlichs_Damenorchester,_Erstes_Europ%25C3%25A4isches_Damenorchester.png": "19e68fe46da24d3337ed3aec28ebd809",
"assets/assets/images/strauss_img/strauss_spiegelgasse/Waldm%25C3%25BCller_La_soprano_Josephine_Fr%25C3%25B6hlich,_el_bar%25C3%25ADtono_Johann_Michael_Vogl_y_Franz_Schubert_cantan_y_tocan_un_lied_a_tres_voc.png": "3bf809707fbc7b0a881283a9f830a462",
"assets/assets/images/strauss_img/strauss_spiegelgasse/FranzSchubert_1826_JosephineFr%25C3%25B6hlichMitteoestnationalbib.jpg": "1f17293cad76bfc7ba0a5120cd19defe",
"assets/assets/images/strauss_img/strauss_spiegelgasse/Josephine_Froehlich.jpg": "13dfbc47bd77129dd7505f14f1cdb270",
"assets/assets/images/strauss_img/strauss_spiegelgasse/Moritz_Michael_Daffinger_Franz_Grillparzer.jpg": "3904ed8cf2bc25a4b8fc074a292e1443",
"assets/assets/images/Stadt-Wien_Logo_pos_rgb.gif": "4e24098adef771e64fcdccc906582f4f",
"assets/assets/images/wiener_img/wiener_florianigasse/Blahetka%2520Guntramsdorf%2520Tafel%2520.JPG": "7a6333600aeb7a486ea2802154761916",
"assets/assets/images/wiener_img/wiener_florianigasse/Blahetka.jpg": "fedcc42b7e10f779a634367c609747ca",
"assets/assets/images/wiener_img/wiener_himmelpfortgasse/Auernhammer_Himmelpfortgasse.jpg": "8a310581be9c8514e0ba69e8530e972a",
"assets/assets/images/wiener_img/wiener_himmelpfortgasse/AuernhammerHimmelpfortgasse_6-Josepha.jpg": "19a1bbaa4a365221bd6b8312c977d38c",
"assets/assets/images/wiener_img/wiener_kohlmarkt/Metastasio,_Gro%25C3%259Fes_Michaelerhaus,_Vienna.jpg": "0d9497e9ee009a47b14b8fbe6333c4a7",
"assets/assets/images/wiener_img/wiener_kohlmarkt/Grosses_Michaelerhaus.jpg": "3374cf4edbe1f6b4fc022dc03196c197",
"assets/assets/images/wiener_img/wiener_kohlmarkt/metastasiomichaelerhaus_1gt.jpg": "ccff311f2144f0a0537438438be90d61",
"assets/assets/images/wiener_img/wiener_postgasse/fehlt.jpg": "90c69ebf76b10e20d7775aaf4724208c",
"assets/assets/images/wiener_img/wiener_karlsplatz/Musikverein_um_1898.jpg": "2796a79158a76944d37a564662dd5104",
"assets/assets/images/wiener_img/wiener_karlsplatz/Nannette%2520Streicher%2520und%2520klavier.jpeg": "996ecbe25398e5b7cf95fb67587df640",
"assets/assets/images/wiener_img/wiener_michaelerkirche/Martines%25201773.jpg": "f74ccc9d4cdd0c265ca764a647223f84",
"assets/assets/images/wiener_img/wiener_ungargasse/Nannette_Ungargasse_46.jpg": "39fa024a38f5b7831069da153730f44a",
"assets/assets/images/wiener_img/wiener_marxerfriedhof/Nannette%2520Streiche%2520portr%25C3%25A4t.jpeg": "b4ba5fab3ebe99c98aab068dbe533c55",
"assets/assets/images/wiener_img/wiener_augustinerkirche/ParadisAugustinerkirche.jpg": "d2ab1246dfdcbeffe0529190dbc83a3d",
"assets/assets/images/wiener_img/wiener_augustinerkirche/ParadisAugustinerkirche2.jpg": "9c3f42709e3b1e109f56d0cddeb9a100",
"assets/assets/images/wiener_img/wiener_augustinerkirche/Augustinian_Church_Vienna.jpg": "e3531546575e027ac176fe02bee4b1ea",
"assets/assets/images/wiener_img/wiener_rasumovskygasse/ParadisPalais_Mesmer.jpg": "f6bc795c07c00feaab32375efbd712da",
"assets/assets/images/wiener_img/wiener_helferstorferstrasse/fehlt.jpg": "90c69ebf76b10e20d7775aaf4724208c",
"assets/assets/images/wiener_img/wiener_rabensteig/Testament%2520Paradis%2520Kopie.jpg": "b05c2283aa32c26955ec2b8f282b7005",
"assets/assets/images/wiener_img/wiener_rabensteig/Testament%2520Paradis%2520Seite%25203%2520Kopie.jpg": "b535c4d572973fe4cc5689fcc6998f2a",
"assets/assets/images/wiener_img/wiener_rabensteig/Paradis%2520Haus_Rabensteig_8.JPG": "52006633c2f461bffeb0ea6e2cf7a645",
"assets/assets/images/ns_img/ns_alserstrasse/LisaMariaMayer_1925_OENB.jpg": "1fd4a657739180f534992e1f61779227",
"assets/assets/images/ns_img/ns_oppolzergasse/JosefineWinter.jpg": "0e257b82566e2d3f6b1fe205cd2f6a2c",
"assets/assets/images/ns_img/ns_wollzeile/CamillaFrydan_1920_unbekannt.png": "22a9c684ba7489a8355abf9191ec5c52",
"assets/assets/images/ns_img/ns_wollzeile/Camilla_Frydan_IchbraucheinMaedl_Hans-Joerg_Gaugelhofer_EnsembleOperTee_2022.jpg": "4726f18771d1602c5779d658ee3dc8ca",
"assets/assets/images/ns_img/ns_wollzeile/Ns_Wollzeile36.jpg": "802ac285ba0f9301d1052857643e9263",
"assets/assets/images/ns_img/ns_wollzeile/CamillaFrydan_Abschiedsbrief_1920_unbekannt.jpg": "f2602b3553bd03931aabee67713fc0e9",
"assets/assets/images/ns_img/ns_rechtewienzeile/hilde_loewe_moriaschen.jpg": "8c3cd423bfb5fe5a7b30a3ac4c5775ae",
"assets/assets/images/ns_img/ns_rechtewienzeile/NS_RechteWienzeile.jpg": "ffcad75d4116ba25178ef8a8d2afb3b7",
"assets/assets/images/ns_img/ns_rechtewienzeile/HildeLoeweFotostudioFayerWien1925.jpg": "55febb23c26ef3d35311443c0f4ac0bc",
"assets/assets/images/ns_img/ns_rechtewienzeile/HildeLoewe_Ankuendigung_1944.jpg": "83580480a1b2a24363e89e5cd02e4cf1",
"assets/assets/images/ns_img/ns_rechtewienzeile/HildeLoewe_TextFritzLohner_WienBerlinLeipzig_EditionScala_1930.jpg": "11871e3570f8bad1f85a9c27e60963e0",
"assets/assets/images/ns_img/ns_rechtewienzeile/HildaLoeweFlatter.jpg": "06b9f567c541031e4cb790361052348f",
"assets/assets/images/ns_img/ns_strozzigasse/NS_Strozzigasse8.jpg": "66fa4a6e80d72015441a8f6b9f7197a0",
"assets/assets/images/ns_img/ns_strozzigasse/Vally_Weigl_%25C2%25A9_Georg_Fayer.jpg": "523062674573f418e05edef29edd504a",
"assets/assets/images/ns_img/ns_rahlgasse/1060Rahlgasse4AnitaBildMaedchengym.jpg": "02443be0debca59baaf66ceb88bd2fe8",
"assets/assets/images/ns_img/ns_kaasgraben/1190Kaasgrabengasse36MariaHoferYellaHertzka.jpg": "9f81bc07a92749d0f565cbb00935d25d",
"assets/assets/images/ns_img/ns_johannesgasse_fehlt/fehlt.jpg": "90c69ebf76b10e20d7775aaf4724208c",
"assets/assets/audio/clara_audio/Bauernmarkt%25204.mp3": "cb16e563e4792fc08537e7129e23b5cf",
"assets/assets/audio/clara_audio/Heldenplatz.mp3": "c6f2e58a2a979c3decaf508f90a4ede4",
"assets/assets/audio/clara_audio/Argentinierstra%25C3%259Fe16.mp3": "d582af3ffb6b876838a2aef704e06b44",
"assets/assets/audio/clara_audio/Graben%252019.mp3": "cea03a44525e9242bc7254a0c941458e",
"assets/assets/audio/clara_audio/Clara%2520Schumann%2520Souvenir%2520de%2520Vienne.mp3": "c65f8659709529c3396075b627f47934",
"assets/assets/audio/clara_audio/Musikvereinsplatz%25201.mp3": "b0e054bd5023366b885c60d30139b92c",
"assets/assets/audio/clara_audio/Tuchlauben%252012.mp3": "c9ff491afcb2e38b39cd31f84f7038ca",
"assets/assets/audio/baker_audio/baker_strausstheater.mp3": "0057b45c1ebfd08b6c15e839ee40b634",
"assets/assets/audio/baker_audio/baker_parlament.mp3": "5ecd0fe5f10a59d25acd251b1ea6c27c",
"assets/assets/audio/baker_audio/baker_strohkoffer.mp3": "da761890ceec8849073b2a3c80f6154e",
"assets/assets/audio/baker_audio/baker_bristol.mp3": "83f2e3b3185d6bac4872b5635c3dbfa6",
"assets/assets/audio/baker_audio/baker_ronacher.mp3": "824b96d1808ca21a239c16254db8466b",
"assets/assets/audio/wiener_audio/wiener_florianigasse_kochgasse.mp3": "61f58d247b4003612a52cfe04c336346",
"assets/assets/audio/wiener_audio/martinezmichaelerhaus.mp3": "9e6ff14b07c12c8c0b90e7bccc68993d",
"assets/assets/audio/wiener_audio/wiener_ungargasse46.mp3": "7d2468cbbd7d162a2c9db2e3436ef372",
"assets/assets/audio/wiener_audio/nanettestreicherungargasse.mp3": "d6a8f4b135f9dd5b7e1afa5e6c7e5862",
"assets/assets/audio/wiener_audio/blahetkaflorianigasse.mp3": "509f08167d33f95ae6f452cfea1930e0",
"assets/assets/audio/wiener_audio/wiener_rabensteig.mp3": "4c9da650830fcd596555a913f2af48f3",
"assets/assets/audio/wiener_audio/wiener_himmelpfortgasse.mp3": "07f9be15dccc3368cb5938fef7666939",
"assets/assets/audio/wiener_audio/wiener_rasumovskygasse29.mp3": "e27a48a499dc07247dad46b19062acbf",
"assets/assets/audio/wiener_audio/wiener_augustinerkirche.mp3": "9d57d6d8dfbae858a96471a00405cd37",
"assets/assets/audio/wiener_audio/wiener_karlsplatz_musikfreunde.mp3": "e7a36a0e15b57c10d05dcc2f63fd2890",
"assets/assets/audio/wiener_audio/paradisrasumovskygasse.mp3": "9e15a45c9d52545119904b56cc48a5d4",
"assets/assets/audio/wiener_audio/paradisrabensteig.mp3": "88f5ffe8ca1cf3e6d00a210e5c93e0e7",
"assets/assets/audio/wiener_audio/auernhammerb%25C3%25A4ckerstrasse.mp3": "16b698b4840563408e593168e3493c4d",
"assets/assets/audio/wiener_audio/wiener_rabensteig8.mp3": "c84f42995ed2846408958bcea22673ea",
"assets/assets/audio/wiener_audio/nanettestreichermarxerfriedhof.mp3": "35af222610ded96af2c6ec6ab4834dca",
"assets/assets/audio/wiener_audio/nanettekarlsplatz.mp3": "b6098b52f79042363416ee5dc2eb3d50",
"assets/assets/audio/wiener_audio/wiener_ungargasse.mp3": "4f595e3e7a8f5bcff536d5c0dc2fbf7a",
"assets/assets/audio/wiener_audio/wiener_rasumovskygasse.mp3": "eb6146d7a1e1a8e44f8049cff0354753",
"assets/assets/audio/wiener_audio/wiener_stmichael.mp3": "5f3ff45d9e61bdf80ffda1f2f629fd82",
"assets/assets/audio/wiener_audio/paradisaugustinerkirche.mp3": "fa23dcf5bf0d82456848d0749b274856",
"assets/assets/audio/wiener_audio/wiener_marxerfriedhof.mp3": "34f5cf2c2c16433522a26e638d3ceb34",
"assets/assets/audio/wiener_audio/wiener_florianigasse.mp3": "488070fe3df9abf9bea2dbd911edc47a",
"assets/assets/audio/wiener_audio/martinezmichaelerkirche.mp3": "04d4e0d76a1f82e0f8c3b14bc34c18e2",
"assets/assets/audio/wiener_audio/gollenhofer.mp3": "a309418cb6fd0fbad52c39025f6bde0b",
"assets/assets/audio/wiener_audio/wiener_stmarxerfriedhof.mp3": "85e61c779c8f9c177d08bac98bc46481",
"assets/assets/audio/wiener_audio/wiener_baeckerstrasse.mp3": "23a57fa0928e89cca10a3775b83d03fd",
"assets/assets/audio/wiener_audio/wiener_himmelpfortgasse6.mp3": "ae3c2dff682b743eb58dc634d7269bfc",
"assets/assets/audio/wiener_audio/wiener_kohlmarkt.mp3": "32b7fb78282797f217808af05b98e7f9",
"assets/assets/audio/wiener_audio/wiener_karlsplatz.mp3": "3d4aa5f0b99849d9bee5952418a76d2c",
"assets/assets/audio/wiener_audio/auernhammerhimmelpfortgasse.mp3": "0ebc1e76ddd64f435639164f7fd22b1c",
"assets/assets/audio/wiener_audio/wiener_kohlmarkt_michaelerhaus.mp3": "838281714925b73f5787c4db1a066490",
"assets/assets/audio/wiener_audio/wiener_baeckerstrasse13.mp3": "9a0a129e7cbecb6851e87c70c8327397",
"assets/assets/audio/ns_audio/ns_oppolzergasse.mp3": "9f3798bd81bbcf62c04847bb8724023f",
"assets/assets/audio/ns_audio/ns_strozzigasse.mp3": "424b0b3a0374aadca3a9fc23645a93e0",
"assets/assets/audio/ns_audio/ns_johannesgasse.mp3": "7106c7e1030bcbbfc86d1011f07eef79",
"assets/assets/audio/ns_audio/ns_kaasgraben.mp3": "09bc4b8e4f0d21c798415abb91fbd368",
"assets/assets/audio/ns_audio/ns_rechtewienzeile.mp3": "335967173ec98c6d78e299ce4892b8fe",
"assets/assets/audio/ns_audio/ns_wollzeile.mp3": "903da6d6276907a8011053c4ea9a10f5",
"assets/assets/audio/ns_audio/ns_rahlgasse.mp3": "a91f86f4e833889f98b4f34df5b838da",
"assets/assets/audio/ns_audio/ns_alserstrasse.mp3": "ebbf5bf827bf8705fbf483ce65124b00",
"assets/assets/audio/strauss_audio/strauss_spiegelgasse.mp3": "44e812fed8672461bcca619b2503edad",
"assets/assets/audio/strauss_audio/strauss_wiedernhaupt.mp3": "84fac422630401e10e2b7386ecf2ed90",
"assets/assets/audio/strauss_audio/strauss_palaiscoburg.mp3": "0f84909404483e6d83f65b9256982f38",
"assets/assets/audio/strauss_audio/strauss_karlsplatz.mp3": "985cafd98a8e185d48ae062cc0b058b4",
"assets/assets/audio/strauss_audio/strauss_prater.mp3": "d6cc7fc3cd26ffdde1c3ffb522fff2fb",
"assets/assets/audio/strauss_audio/strauss_zieglergasse.mp3": "144c7ef32e6fca0e888c520786a8416c",
"assets/assets/audio/strauss_audio/strauss_landstrasse.mp3": "9b5aa6584ad6542f57ac828a15bb5505",
"assets/assets/audio/strauss_audio/strauss_nussdorf.mp3": "5c4adbba032b2bb984de77e8343b1e1c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "975dc0db1105c611c9e22631a547f9f7",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
