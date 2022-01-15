'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ec22c47c69864ae94f0fa843a4dfa4ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d75f8d07d8c0a3eccd4b576c52eb3068",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ad94195d4205e0ad9f9095e7a202047",
".git/logs/refs/heads/main": "cfe93e39a03add3d60b2f5fac1ed8a93",
".git/logs/refs/remotes/origin/main": "980bfdc47a7a1c57ce21ce605adb4491",
".git/objects/00/814769fa5b7d32df913ee3e53e257740368754": "d582e075233922d35d5dd5bc16c98a7e",
".git/objects/00/844ee0c763ba78449e3abe6b9892b5687b43a0": "54e5314ead4d19ac1cb44f8d92666a1f",
".git/objects/02/b09480d1a94dcb69f446227f62b4cc5e706f46": "f0b4ef493faf7cde032eacba22755ea8",
".git/objects/03/bcf9294d4f5791be37b92a93e91fdc1a0148c2": "1d40cd7fe75b2b3c0ea162a9b9db1492",
".git/objects/04/fa61ebf63db921355746a89e7d32b3ba9c25fd": "91709bcd951d58bb3a4d27df857138d4",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0d/2a375dd2b2aa097ab18aa6bdbb133c70483bae": "c24b7efbe18726e6d5f4befed3b4cb22",
".git/objects/12/3b4ec8115ae204f2e38a06ecb68895d3a29f35": "23ed6f2798fcf6e736612bb932bf0da3",
".git/objects/12/f8b6026c5f9e0b3bca911a2e063a50affe9b4e": "7ec3be22ff93553f1a314574738474e9",
".git/objects/14/e3f03e5ac4d904b887a48782d4973d32a4bfce": "0612bb7c1a32a891ae746a31729f54b5",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1f/bd76e365c2b6a323de9adcfa19afa87195ca3e": "285d93014568d6a751556a813878dce0",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/8115bb6a602e6c29683d23c385d1553fcd0f5e": "68a3bc06536d1a8065d94a25e4491341",
".git/objects/28/3ca4e3bb8396c9cd67053cdc8f0b4dfe76363c": "7e3b4b1c2cc37fd866205241be5c9b6a",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/3bae20ca8174d4a17254bcd9f8935df1834697": "5bd31e96e1994e97a62e8d8a67043cb1",
".git/objects/2d/f4fb682edd5ae85c3ca7336020fb170541b297": "f77257389020cd854b2fe49fa4ae72b1",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/36/35050bf23921567df39070271d7fd8402d7dc6": "49610a2e270a8bd7ea95befb4b542270",
".git/objects/36/6d265a5fb9c1fc9a2705f9d2ef4098eb35fdfb": "8b661b3407cbfe526ed947c34fd20669",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/f948df75ed3a697417412ecdae4f81ce2356e7": "d996245087e02d4886b1010c55232317",
".git/objects/3b/2612f28fbae5f122cfde357a3ad283c5fa3e32": "8237a9495845202e2dbb73f87196fd38",
".git/objects/3f/dfeb53dd759fa99ad17a883103d965dae23650": "ae19d32a14c2c9a842f64ff18fc657eb",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/b463556b14b92b7bae75463bc04710403f83c5": "3ecb90c6f7b066d9fd73e257132e8f58",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/58/1d2a9ef88ca195fd89b092ffdccc8caed1d33c": "32c8bb2d7df93b37168b7b6b6725c20a",
".git/objects/5a/b0235b48652ed90d5349c45e189721168f2e7a": "8698d58985958510d21f459880dc1e28",
".git/objects/5c/b758b847db49bbc075047d4806fe4a7ca58c30": "04151cf8f6246fa1af13fb45ee9fbb69",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/1461097fd5b807ed3da14262a6d853ee9d9395": "200019b24fae023a39acf7fb98e867da",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6b/d220b60116470b137b96d3a57e709a33df71f3": "ffcfec2e8c8d9944ee3950259650492f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/ea2cce27415d8b7363c5d2952f8a677bda390f": "8cdcc359a02914d3a5d5fd7782e1cbde",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/324f550577c5e19c6a27abd680c6a109445fcf": "f82561eec6563d85daed97010967073f",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/1cd6e4d73379bb0240c7a008cf480694c1ddb1": "73e30e79bba792c9b88a22eefafad877",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/95/fa3e0049778266324db944536ed35221a4c428": "eb66c1738b3f7069e0c1cef8dcdb5c1c",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/4eed1a0d4edf694ea207870f161283d9a295dd": "d158e4b5441fee60e6271bcb81aab40d",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b0/0af9e87a5cdfa55d994da5932839725c492f6f": "8477138da5fbca4416fc5aa0f9f8bbf0",
".git/objects/b1/26ea56a7d82f139781dc7973cbd60cadb718c8": "770ad83278f9b0090f4caf781ab325f4",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/4a27e7c360f0034d863f80fbbf24477985edad": "a08518126153e5b2028f702db7af3bc4",
".git/objects/bf/2a0042c1c3295fba08fbb7830cd4f09457ca04": "f238fa5f850535d94a13a07d36d89f76",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c4/37a3a690fd00b34e81b75f92bf52a6cdc510eb": "ccaa53e81be696b6ffe25735399ae60f",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c8/17674869ff698c2f06bf8011caf921e37b7bfd": "59584285ceca69e6a89fde925b86d350",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/f0d3fd6b2aeb2ad84bd784d3a347aba1e752ea": "565553db87c53c3f02e36f7991e9846c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/d8cc793ad9b25fb9f11062aa541d99c1ef2294": "52f58258043916a919c4f98568bb1f7d",
".git/objects/d0/eb48fabf61b2449587c342d554be993ddd7791": "7d7d6ab92668a006afc7fc49c07e3b1c",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/29cbc638ca660b25dcfcf9f3784fdfad387730": "472ee6df67cc56f34173d839613dfee5",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/df/4cb024eaaf4d38fb42b03d1e886e663a91499d": "09a56f37fe4fa3ac3f17e5d8468b2d7f",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e1/7baa34ef229a8835ef84145c7337aef887d2fe": "f89ba7a3fbb521ef71cc6eb42d42d612",
".git/objects/e5/12fe8d01c79a9f49c130615d9fa8415a0fe45a": "2009414a7eb751ca787fb608a72bec61",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/eb/91fac1ccc28153a8813a3a11c3588c9126a324": "4548b8ef791bd077ffc80ff0131351fc",
".git/objects/ec/9598973007741b410359efc4c0849155ee827d": "554a722d08296914cd255dadfb68870b",
".git/objects/ee/3dcc50879f08233db4e263073eeb3f85191f65": "c9f09e6749f01a4fcd610154d57145c3",
".git/objects/ee/45470ee6e6f77184575c6a5be732327a488ebc": "e73eeb0a1db21e0c21df5d3654f5b438",
".git/objects/f2/8b57fc8014a5887757473f166c779d510cae03": "335191806aadee516eaf4b8747ce8e55",
".git/objects/f7/7b3969fa96ca72719f6709d1e017b23e5de71c": "a3165efc5f48ffa6066eab8d1216fd44",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/main": "6d545b26b56196932f809bbb2f98098a",
".git/refs/remotes/origin/main": "6d545b26b56196932f809bbb2f98098a",
"assets/AssetManifest.json": "c280e3809eb31dcf88355fb9102d4602",
"assets/assets/9fe9ab6c": "bf0152e44c037bcc169404491d7f7e9d",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/profile1.png": "bf0152e44c037bcc169404491d7f7e9d",
"assets/assets/profile2.jpg": "942dec55ffe76c977a92810da139bc9d",
"assets/assets/profile3.png": "2e3e6ac9eb1e3444884e86a7e5e5a913",
"assets/assets/projects/1b148888": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/1f4f3a73": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/2df70776": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/77d2a2af": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/7ef28ba0": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/d70958d": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/grocery.png": "c56abe580df880ebf96f2811deb663f6",
"assets/assets/projects/grocery_icon.png": "2a007ef2552b4a96e31ae4738aea9ef1",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/movie.png": "f2da5c1ce198e4115c09a4ab9fd55062",
"assets/assets/projects/shop_zone.png": "2940d8c9f19d5cbe9040277bfc43ac43",
"assets/assets/projects/sociocon.png": "f8d0dde5ad2af14dc6176a7fbe45b96d",
"assets/assets/projects/socioIcon.png": "7f1b7df49b61f777fdd07900b2098395",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/ml.png": "bdf2d6884969f92640d9c0beb68f39c0",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/7260f3e4": "d41d8cd98f00b204e9800998ecf8427e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "879e0dbdc4f2d172c686709bd5f69b31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cupertino_icons/assets/f44c04ec": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/1352343c": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/1464fb2d": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/3c1361e1": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/3ee2f74a": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/42558bb9": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/76122828": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/ca864875": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/dcb18ec": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/e619d8df": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/1ad4c7f4": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/font_awesome_flutter/lib/fonts/c56bcc99": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "c140dbe13ae2707de0e331234d7fb433",
"icons/Icon-192.png": "c140dbe13ae2707de0e331234d7fb433",
"icons/Icon-521.png": "74fce97519f26a91ceea91e7762d3337",
"index.html": "01e80a627bbab79b36f0de1b73f8bb81",
"/": "01e80a627bbab79b36f0de1b73f8bb81",
"main.dart.js": "ef2436ae4acca87b3094d729b2c0be8b",
"manifest.json": "41a92d26b88535535e22e5e3604d7a71",
"version.json": "13fd936c0e71c5d218594761cde5fc61"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
