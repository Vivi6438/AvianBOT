export type BirdMedia = {
  slug: string;
  names: string[];
  image: string;
  audio: string;
};

// 94 hồ sơ từ tài liệu + Bồng chanh từ dữ liệu hiện có.
// Tên tệp có dấu và chữ hoa phải khớp với hai gói media đã gửi.
// Ưng biển dùng nhãn Pandion haliaetus theo yêu cầu; bản ghi gốc được giữ nguyên.
export const birdMedia: BirdMedia[] = [
  {
    "slug": "bong-chanh",
    "names": [
      "bồng chanh"
    ],
    "image": "/images/bong-chanh.jpg",
    "audio": "/audio/bong-chanh.wav"
  },
  {
    "slug": "bach-thanh-nau",
    "names": [
      "Bách thanh nâu",
      "Brown Shrike",
      "Lanius cristatus",
      "bach thanh nau"
    ],
    "image": "/images/Bách thanh nâu.png",
    "audio": "/audio/Bách thanh nâu.mp3"
  },
  {
    "slug": "bach-thanh-duoi-dai",
    "names": [
      "Bách thanh đuôi dài",
      "Long-tailed Shrike",
      "Lanius schach",
      "bach thanh duoi dai"
    ],
    "image": "/images/Bách thanh đuôi dài.png",
    "audio": "/audio/Bách thanh đuôi dài.mp3"
  },
  {
    "slug": "det-to-baya",
    "names": [
      "Dệt tổ Baya",
      "Baya Weaver",
      "Ploceus philippinus",
      "det to baya"
    ],
    "image": "/images/Dệt tổ Baya.png",
    "audio": "/audio/Dệt tổ Baya.mp3"
  },
  {
    "slug": "chich-la-chan-xam",
    "names": [
      "Chích lá chân xám",
      "Pale-legged Leaf Warbler",
      "Phylloscopus tenellipes",
      "chich la chan xam"
    ],
    "image": "/images/Chích lá chân xám.png",
    "audio": "/audio/Chích lá chân xám.mp3"
  },
  {
    "slug": "chich-bac-cuc",
    "names": [
      "Chích Bắc Cực",
      "Arctic Warbler",
      "Phylloscopus borealis",
      "chich bac cuc"
    ],
    "image": "/images/Chích Bắc Cực.png",
    "audio": "/audio/Chích Bắc Cực.mp3"
  },
  {
    "slug": "chich-nau",
    "names": [
      "Chích nâu",
      "Dusky Warbler",
      "Phylloscopus fuscatus",
      "chich nau"
    ],
    "image": "/images/Chích nâu.png",
    "audio": "/audio/Chích nâu.mp3"
  },
  {
    "slug": "vanh-khuyen-nhat-ban",
    "names": [
      "Vành khuyên Nhật Bản",
      "Swinhoe's White-eye",
      "Zosterops simplex",
      "vanh khuyen nhat ban"
    ],
    "image": "/images/Vành khuyên Nhật Bản.png",
    "audio": "/audio/Vành khuyên Nhật Bản.mp3"
  },
  {
    "slug": "chich-say-phuong-dong",
    "names": [
      "Chích sậy phương Đông",
      "Oriental Reed Warbler",
      "Acrocephalus orientalis",
      "chich say phuong dong"
    ],
    "image": "/images/Chích sậy phương Đông.png",
    "audio": "/audio/Chích sậy phương Đông.mp3"
  },
  {
    "slug": "chich-mo-rong",
    "names": [
      "Chích mỏ rộng",
      "Thick-billed Warbler",
      "Arundinax aedon",
      "chich mo rong"
    ],
    "image": "/images/Chích mỏ rộng.png",
    "audio": "/audio/Chích mỏ rộng.mp3"
  },
  {
    "slug": "se-nha",
    "names": [
      "Sẻ nhà",
      "House Sparrow",
      "Passer domesticus",
      "se nha"
    ],
    "image": "/images/Sẻ nhà.png",
    "audio": "/audio/Sẻ nhà.mp3"
  },
  {
    "slug": "se-cay-a-au",
    "names": [
      "Sẻ cây Á - Âu",
      "Eurasian Tree Sparrow",
      "Passer montanus",
      "se cay a au"
    ],
    "image": "/images/Sẻ cây Á - Âu.png",
    "audio": "/audio/Sẻ cây Á - Âu.mp3"
  },
  {
    "slug": "chich-bong-duoi-dai",
    "names": [
      "Chích bông đuôi dài",
      "Common Tailorbird",
      "Orthotomus sutorius",
      "chich bong duoi dai"
    ],
    "image": "/images/Chích bông đuôi dài.png",
    "audio": "/audio/Chích bông đuôi dài.mp3"
  },
  {
    "slug": "chien-chien-bung-hung",
    "names": [
      "Chiền chiện bụng hung",
      "Plain Prinia",
      "Prinia inornata",
      "chien chien bung hung"
    ],
    "image": "/images/Chiền chiện bụng hung.png",
    "audio": "/audio/Chiền chiện bụng hung.mp3"
  },
  {
    "slug": "chien-chien-dong-hung",
    "names": [
      "Chiền chiện đồng hung",
      "Zitting Cisticola",
      "Cisticola juncidis",
      "chien chien dong hung"
    ],
    "image": "/images/Chiền chiện đồng hung.png",
    "audio": "/audio/Chiền chiện đồng hung.mp3"
  },
  {
    "slug": "chao-mao",
    "names": [
      "Chào mào",
      "Red-whiskered Bulbul",
      "Pycnonotus jocosus",
      "chao mao"
    ],
    "image": "/images/Chào mào.png",
    "audio": "/audio/Chào mào.mp3"
  },
  {
    "slug": "bong-lau-trung-quoc",
    "names": [
      "Bông lau Trung Quốc",
      "Light-vented bulbul",
      "Pycnonotus sinensis",
      "bong lau trung quoc"
    ],
    "image": "/images/Bông lau Trung Quốc.png",
    "audio": "/audio/Bông lau Trung Quốc.mp3"
  },
  {
    "slug": "bong-lau-tai-trang",
    "names": [
      "Bông lau tai trắng",
      "Sooty-headed Bulbul",
      "Pycnonotus aurigaster",
      "bong lau tai trang"
    ],
    "image": "/images/Bông lau tai trắng.png",
    "audio": "/audio/Bông lau tai trắng.mp3"
  },
  {
    "slug": "chia-voi-trang",
    "names": [
      "Chìa vôi trắng",
      "White Wagtail",
      "Motacilla alba",
      "chia voi trang"
    ],
    "image": "/images/Chìa vôi trắng.png",
    "audio": "/audio/Chìa vôi trắng.mp3"
  },
  {
    "slug": "manh-lon",
    "names": [
      "Manh lớn",
      "Richard's Pipit",
      "Anthus richardi",
      "manh lon"
    ],
    "image": "/images/Manh lớn.png",
    "audio": "/audio/Manh lớn.mp3"
  },
  {
    "slug": "chia-voi-xam",
    "names": [
      "Chìa vôi xám",
      "Grey Wagtail",
      "Motacilla cinerea",
      "chia voi xam"
    ],
    "image": "/images/Chìa vôi xám.png",
    "audio": "/audio/Chìa vôi xám.mp3"
  },
  {
    "slug": "sao-nau",
    "names": [
      "Sáo nâu",
      "Common Myna",
      "Acridotheres tristis",
      "sao nau"
    ],
    "image": "/images/Sáo nâu.png",
    "audio": "/audio/Sáo nâu.mp3"
  },
  {
    "slug": "sao-sau",
    "names": [
      "Sáo sậu",
      "Black-collared Starling",
      "Gracupica nigricollis",
      "sao sau"
    ],
    "image": "/images/Sáo sậu.png",
    "audio": "/audio/Sáo sậu.mp3"
  },
  {
    "slug": "sao-da-mot-so-noi-goi-la-chim-yeng",
    "names": [
      "Sáo đá",
      "Common Hill Myna",
      "Gracula religiosa",
      "Chim yểng",
      "Sáo đá, một số nơi gọi là chim yểng",
      "sao da"
    ],
    "image": "/images/Sáo đá.png",
    "audio": "/audio/Sáo đá.mp3"
  },
  {
    "slug": "mai-hoa",
    "names": [
      "Mai hoa",
      "Red Avadavat",
      "Amandava amandava"
    ],
    "image": "/images/Mai hoa.png",
    "audio": "/audio/Mai hoa.mp3"
  },
  {
    "slug": "di-da",
    "names": [
      "Di đá",
      "Scaly-breasted Munia",
      "Lonchura punctulata",
      "di da"
    ],
    "image": "/images/Di đá.png",
    "audio": "/audio/Di đá.mp3"
  },
  {
    "slug": "di-cam",
    "names": [
      "Di cam",
      "White-rumped Munia",
      "Lonchura striata"
    ],
    "image": "/images/Di cam.png",
    "audio": "/audio/Di cam.mp3"
  },
  {
    "slug": "di-dau-trang",
    "names": [
      "Di đầu trắng",
      "White-headed Munia",
      "Lonchura maja",
      "di dau trang"
    ],
    "image": "/images/Di đầu trắng.png",
    "audio": "/audio/Di đầu trắng.mp3"
  },
  {
    "slug": "san-nhen-nho",
    "names": [
      "Săn nhện nhỏ",
      "Little Spiderhunter",
      "Arachnothera longirostra",
      "san nhen nho"
    ],
    "image": "/images/Săn nhện nhỏ.png",
    "audio": "/audio/Săn nhện nhỏ.mp3"
  },
  {
    "slug": "hut-mat-do",
    "names": [
      "Hút mật đỏ",
      "Crimson Sunbird",
      "Aethopyga siparaja",
      "hut mat do"
    ],
    "image": "/images/Hút mật đỏ.png",
    "audio": "/audio/Hút mật đỏ.mp3"
  },
  {
    "slug": "nhan-hong-trang-xibia",
    "names": [
      "Nhạn hông trắng Xibia",
      "Common House-Martin",
      "Delichon urbicum",
      "nhan hong trang xibia"
    ],
    "image": "/images/Nhạn hông trắng Xibia.png",
    "audio": "/audio/Nhạn hông trắng Xibia.mp3"
  },
  {
    "slug": "nhan-bung-trang",
    "names": [
      "Nhạn bụng trắng",
      "Barn Swallow",
      "Hirundo rustica",
      "nhan bung trang"
    ],
    "image": "/images/Nhạn bụng trắng.png",
    "audio": "/audio/Nhạn bụng trắng.mp3"
  },
  {
    "slug": "bat-ruoi-taiga",
    "names": [
      "Bắt ruồi Taiga",
      "Taiga Flycatcher",
      "Ficedula albicilla",
      "bat ruoi taiga"
    ],
    "image": "/images/Bắt ruồi Taiga.png",
    "audio": "/audio/Bắt ruồi Taiga.mp3"
  },
  {
    "slug": "se-bui-dau-den",
    "names": [
      "Sẻ bụi đầu đen",
      "Common Stonechat",
      "Saxicola torquatus",
      "se bui dau den"
    ],
    "image": "/images/Sẻ bụi đầu đen.png",
    "audio": "/audio/Sẻ bụi đầu đen.mp3"
  },
  {
    "slug": "chich-choe-than",
    "names": [
      "Chích chòe than",
      "Oriental Magpie-robin",
      "Copsychus saularis",
      "Chích choè than",
      "chich choe than"
    ],
    "image": "/images/Chích chòe than.png",
    "audio": "/audio/Chích chòe than.mp3"
  },
  {
    "slug": "cheo-beo-den",
    "names": [
      "Chèo bẻo đen",
      "Black Drongo",
      "Dicrurus macrocercus",
      "cheo beo den"
    ],
    "image": "/images/Chèo bẻo đen.png",
    "audio": "/audio/Chèo bẻo đen.mp3"
  },
  {
    "slug": "chien-chien-lon",
    "names": [
      "Chiền chiện lớn",
      "Striated grassbird",
      "Megalurus palustris",
      "chien chien lon"
    ],
    "image": "/images/Chiền chiện lớn.png",
    "audio": "/audio/Chiền chiện lớn.mp3"
  },
  {
    "slug": "chim-khach",
    "names": [
      "Chim khách",
      "Racket-tailed Treepie",
      "Crypsirina temia",
      "chim khach"
    ],
    "image": "/images/Chim khách.png",
    "audio": "/audio/Chim khách.mp3"
  },
  {
    "slug": "choang-choang-hung",
    "names": [
      "Choàng choàng hung",
      "Rufous Treepie",
      "Dendrocitta vagabunda",
      "choang choang hung"
    ],
    "image": "/images/Choàng choàng hung.png",
    "audio": "/audio/Choàng choàng hung.mp3"
  },
  {
    "slug": "qua",
    "names": [
      "Quạ",
      "Large-billed Crow",
      "Corvus macrorhynchos",
      "qua"
    ],
    "image": "/images/Quạ.png",
    "audio": "/audio/Quạ.mp3"
  },
  {
    "slug": "cu-lon-phuong-tay",
    "names": [
      "Cú lợn phương Tây",
      "Western Barn Owl",
      "Tyto alba",
      "cu lon phuong tay"
    ],
    "image": "/images/Cú lợn phương Tây.png",
    "audio": "/audio/Cú lợn phương Tây.mp3"
  },
  {
    "slug": "cu-vo-lung-nau",
    "names": [
      "Cú vọ lưng nâu",
      "Brown Boobook",
      "Ninox scutulata",
      "cu vo lung nau"
    ],
    "image": "/images/Cú vọ lưng nâu.png",
    "audio": "/audio/Cú vọ lưng nâu.mp3"
  },
  {
    "slug": "cu-meo-khoang-co",
    "names": [
      "Cú mèo khoang cổ",
      "Collared Scops-Owl",
      "Otus lettia",
      "cu meo khoang co"
    ],
    "image": "/images/Cú mèo khoang cổ.png",
    "audio": "/audio/Cú mèo khoang cổ.mp3"
  },
  {
    "slug": "cu-ca-nau",
    "names": [
      "Cú cá nâu",
      "Brown Fish-Owl",
      "Ketupa zeylonensis",
      "cu ca nau"
    ],
    "image": "/images/Cú cá nâu.png",
    "audio": "/audio/Cú cá nâu.mp3"
  },
  {
    "slug": "cu-gay",
    "names": [
      "Cu gáy",
      "Spotted Dove",
      "Streptopelia chinensis",
      "cu gay"
    ],
    "image": "/images/Cu gáy.png",
    "audio": "/audio/Cu gáy.mp3"
  },
  {
    "slug": "bo-cau-van",
    "names": [
      "Bồ câu vằn",
      "Zebra Dove",
      "Geopelia striata",
      "bo cau van"
    ],
    "image": "/images/Bồ câu vằn.png",
    "audio": "/audio/Bồ câu vằn.mp3"
  },
  {
    "slug": "cu-ngoi",
    "names": [
      "Cu ngói",
      "Red Collared Dove",
      "Streptopelia tranquebarica",
      "cu ngoi"
    ],
    "image": "/images/Cu ngói.png",
    "audio": "/audio/Cu ngói.mp3"
  },
  {
    "slug": "choat-bung-xam",
    "names": [
      "Choắt bụng xám",
      "Wood sandpiper",
      "Tringa glareola",
      "choat bung xam"
    ],
    "image": "/images/Choắt bụng xám.png",
    "audio": "/audio/Choắt bụng xám.mp3"
  },
  {
    "slug": "choat-nho",
    "names": [
      "Choắt nhỏ",
      "Common Sandpiper",
      "Actitis hypoleucos",
      "choat nho"
    ],
    "image": "/images/Choắt nhỏ.png",
    "audio": "/audio/Choắt nhỏ.mp3"
  },
  {
    "slug": "choat-mo-cong-be",
    "names": [
      "Choắt mỏ cong bé",
      "Whimbrel",
      "Numenius phaeopus",
      "Choắt nhỏ cong bé",
      "choat mo cong be"
    ],
    "image": "/images/Choắt mỏ cong bé.png",
    "audio": "/audio/Choắt mỏ cong bé.mp3"
  },
  {
    "slug": "choat-nau",
    "names": [
      "Choắt nâu",
      "Common Redshank",
      "Tringa totanus",
      "choat nau"
    ],
    "image": "/images/Choắt nâu.png",
    "audio": "/audio/Choắt nâu.mp3"
  },
  {
    "slug": "choat-lon",
    "names": [
      "Choắt lớn",
      "Common Greenshank",
      "Tringa nebularia",
      "choat lon"
    ],
    "image": "/images/Choắt lớn.png",
    "audio": "/audio/Choắt lớn.mp3"
  },
  {
    "slug": "choat-mo-cong-lon",
    "names": [
      "Choắt mỏ cong lớn",
      "Eurasian Curlew",
      "Numenius arquata",
      "Mỏ cong Á - Âu",
      "Mỏ cong Á Âu",
      "choat mo cong lon"
    ],
    "image": "/images/Choắt mỏ cong lớn.png",
    "audio": "/audio/Choắt mỏ cong lớn.mp3"
  },
  {
    "slug": "re-tran-trang",
    "names": [
      "Rẽ trán trắng",
      "Dunlin",
      "Calidris alpina",
      "re tran trang"
    ],
    "image": "/images/Rẽ trán trắng.png",
    "audio": "/audio/Rẽ trán trắng.mp3"
  },
  {
    "slug": "choat-bung-trang",
    "names": [
      "Choắt bụng trắng",
      "Green Sandpiper",
      "Tringa ochropus",
      "choat bung trang"
    ],
    "image": "/images/Choắt bụng trắng.png",
    "audio": "/audio/Choắt bụng trắng.mp3"
  },
  {
    "slug": "choi-choi-bung-den",
    "names": [
      "Choi choi bụng đen",
      "Black-bellied plover",
      "Pluvialis squatarola",
      "choi choi bung den"
    ],
    "image": "/images/Choi choi bụng đen.png",
    "audio": "/audio/Choi choi bụng đen.mp3"
  },
  {
    "slug": "choi-choi-song",
    "names": [
      "Choi choi sông",
      "Little Ringed Plover",
      "Charadrius dubius",
      "choi choi song"
    ],
    "image": "/images/Choi choi sông.png",
    "audio": "/audio/Choi choi sông.mp3"
  },
  {
    "slug": "te-vat",
    "names": [
      "Te vặt",
      "Red-wattled Lapwing",
      "Vanellus indicus",
      "te vat"
    ],
    "image": "/images/Te vặt.png",
    "audio": "/audio/Te vặt.mp3"
  },
  {
    "slug": "ga-loi-nuoc-mien-an",
    "names": [
      "Gà lôi nước miền Ấn",
      "Bronze-winged Jacana",
      "Metopidius indicus",
      "ga loi nuoc mien an"
    ],
    "image": "/images/Gà lôi nước miền Ấn.png",
    "audio": "/audio/Gà lôi nước miền Ấn.mp3"
  },
  {
    "slug": "cut-nho",
    "names": [
      "Cút nhỏ",
      "Common Buttonquail",
      "Turnix sylvaticus",
      "cut nho"
    ],
    "image": "/images/Cút nhỏ.png",
    "audio": "/audio/Cút nhỏ.mp3"
  },
  {
    "slug": "ca-kheo",
    "names": [
      "Cà kheo",
      "Black Winged Stilt",
      "Himantopus himantopus",
      "ca kheo"
    ],
    "image": "/images/Cà kheo.png",
    "audio": "/audio/Cà kheo.mp3"
  },
  {
    "slug": "ung-bien",
    "names": [
      "Ưng biển",
      "Pandionidae",
      "Pandion haliaetus",
      "ung bien"
    ],
    "image": "/images/Ưng biển.png",
    "audio": "/audio/Ưng biển.mp3"
  },
  {
    "slug": "dieu-an-ong",
    "names": [
      "Diều ăn ong",
      "Crested Honey-buzzard",
      "Pernis ptilorhynchus",
      "dieu an ong"
    ],
    "image": "/images/Diều ăn ong.png",
    "audio": "/audio/Diều ăn ong.mp3"
  },
  {
    "slug": "dieu-hoa-mien-dien",
    "names": [
      "Diều hoa Miến Điện",
      "Crested Serpent-Eagle",
      "Spilornis cheela",
      "Diều hoa miến diện",
      "dieu hoa mien dien"
    ],
    "image": "/images/Diều hoa Miến Điện.png",
    "audio": "/audio/Diều hoa Miến Điện.mp3"
  },
  {
    "slug": "sa-dau-nau",
    "names": [
      "Sả đầu nâu",
      "White-throated Kingfisher",
      "Halcyon smyrnensis",
      "sa dau nau"
    ],
    "image": "/images/Sả đầu nâu.png",
    "audio": "/audio/Sả đầu nâu.mp3"
  },
  {
    "slug": "trau-duoi-xanh",
    "names": [
      "Trảu đuôi xanh",
      "Blue-tailed Bee-eater",
      "Merops philippinus",
      "trau duoi xanh"
    ],
    "image": "/images/Trảu đuôi xanh.png",
    "audio": "/audio/Trảu đuôi xanh.mp3"
  },
  {
    "slug": "trau-dau-hung",
    "names": [
      "Trảu đầu hung",
      "Asian Green Bee-eater",
      "Merops orientalis",
      "trau dau hung"
    ],
    "image": "/images/Trảu đầu hung.png",
    "audio": "/audio/Trảu đầu hung.mp3"
  },
  {
    "slug": "vit-troi",
    "names": [
      "Vịt trời",
      "Mallard",
      "Anas platyrhynchos",
      "vit troi"
    ],
    "image": "/images/Vịt trời.png",
    "audio": "/audio/Vịt trời.mp3"
  },
  {
    "slug": "vit-dau-vang",
    "names": [
      "Vịt đầu vàng",
      "Eurasian wigeon",
      "Mareca penelope",
      "vit dau vang"
    ],
    "image": "/images/Vịt đầu vàng.png",
    "audio": "/audio/Vịt đầu vàng.mp3"
  },
  {
    "slug": "ga-nuoc-van",
    "names": [
      "Gà nước vằn",
      "Slaty-breasted Rail",
      "Lewinia striata",
      "ga nuoc van"
    ],
    "image": "/images/Gà nước vằn.png",
    "audio": "/audio/Gà nước vằn.mp3"
  },
  {
    "slug": "cum-num",
    "names": [
      "Cúm núm",
      "Watercock",
      "Gallicrex cinerea",
      "cum num"
    ],
    "image": "/images/Cúm núm.png",
    "audio": "/audio/Cúm núm.mp3"
  },
  {
    "slug": "cuoc-nguc-trang",
    "names": [
      "Cuốc ngực trắng",
      "White-breasted Waterhen",
      "Amaurornis phoenicurus",
      "cuoc nguc trang"
    ],
    "image": "/images/Cuốc ngực trắng.png",
    "audio": "/audio/Cuốc ngực trắng.mp3"
  },
  {
    "slug": "trich-co",
    "names": [
      "Trích cồ",
      "Grey-headed Swamphen",
      "Porphyrio poliocephalus",
      "trich co"
    ],
    "image": "/images/Trích cồ.png",
    "audio": "/audio/Trích cồ.mp3"
  },
  {
    "slug": "sam-cam",
    "names": [
      "Sâm cầm",
      "Common Coot",
      "Fulica atra",
      "sam cam"
    ],
    "image": "/images/Sâm cầm.png",
    "audio": "/audio/Sâm cầm.mp3"
  },
  {
    "slug": "kich",
    "names": [
      "Kịch",
      "Common Moorhen",
      "Gallinula chloropus",
      "kich"
    ],
    "image": "/images/Kịch.png",
    "audio": "/audio/Kịch.mp3"
  },
  {
    "slug": "tim-vit",
    "names": [
      "Tìm vịt",
      "Plaintive Cuckoo",
      "Cacomantis merulinus",
      "tim vit"
    ],
    "image": "/images/Tìm vịt.png",
    "audio": "/audio/Tìm vịt.mp3"
  },
  {
    "slug": "cu-cu-soc-vinh",
    "names": [
      "Cu cu sọc vịnh",
      "Banded Bay Cuckoo",
      "Cacomantis sonneratii",
      "cu cu soc vinh"
    ],
    "image": "/images/Cu cu sọc vịnh.png",
    "audio": "/audio/Cu cu sọc vịnh.mp3"
  },
  {
    "slug": "bim-bip-lon",
    "names": [
      "Bìm bịp lớn",
      "Greater Coucal",
      "Centropus sinensis",
      "bim bip lon"
    ],
    "image": "/images/Bìm bịp lớn.png",
    "audio": "/audio/Bìm bịp lớn.mp3"
  },
  {
    "slug": "bim-bip-nho",
    "names": [
      "Bìm bịp nhỏ",
      "Lesser Coucal",
      "Centropus bengalensis",
      "bim bip nho"
    ],
    "image": "/images/Bìm bịp nhỏ.png",
    "audio": "/audio/Bìm bịp nhỏ.mp3"
  },
  {
    "slug": "cu-cu-an-do",
    "names": [
      "Cu cu Ấn Độ",
      "Indian Cuckoo",
      "Cuculus micropterus",
      "cu cu an do"
    ],
    "image": "/images/Cu cu Ấn Độ.png",
    "audio": "/audio/Cu cu Ấn Độ.mp3"
  },
  {
    "slug": "cu-muoi-duoi-dai",
    "names": [
      "Cú muỗi đuôi dài",
      "Large-tailed Nightjar",
      "Caprimulgus macrurus",
      "Cú muỗi đuôi lớn",
      "cu muoi duoi dai"
    ],
    "image": "/images/Cú muỗi đuôi dài.png",
    "audio": "/audio/Cú muỗi đuôi dài.mp3"
  },
  {
    "slug": "cu-muoi-chau-a",
    "names": [
      "Cú muỗi châu Á",
      "Indian Nightjar (hoặc Asian Nightjar)",
      "Caprimulgus asiaticus",
      "cu muoi chau a"
    ],
    "image": "/images/Cú muỗi châu Á.png",
    "audio": "/audio/Cú muỗi châu Á.mp3"
  },
  {
    "slug": "vac",
    "names": [
      "Vạc",
      "Black-crowned Night Heron",
      "Nycticorax nycticorax",
      "vac"
    ],
    "image": "/images/Vạc.png",
    "audio": "/audio/Vạc.mp3"
  },
  {
    "slug": "diec-xam",
    "names": [
      "Diệc xám",
      "Grey Heron",
      "Ardea cinerea",
      "diec xam"
    ],
    "image": "/images/Diệc xám.png",
    "audio": "/audio/Diệc xám.mp3"
  },
  {
    "slug": "vac-ra",
    "names": [
      "Vạc rạ",
      "Eurasian bittern",
      "Botaurus stellaris",
      "vac ra"
    ],
    "image": "/images/Vạc rạ.png",
    "audio": "/audio/Vạc rạ.mp3"
  },
  {
    "slug": "co-ngang-lon",
    "names": [
      "Cò ngàng lớn",
      "Great White Egret",
      "Ardea alba",
      "co ngang lon"
    ],
    "image": "/images/Cò ngàng lớn.png",
    "audio": "/audio/Cò ngàng lớn.mp3"
  },
  {
    "slug": "co-trang",
    "names": [
      "Cò trắng",
      "Little Egret",
      "Egretta garzetta",
      "co trang"
    ],
    "image": "/images/Cò trắng.png",
    "audio": "/audio/Cò trắng.mp3"
  },
  {
    "slug": "co-ruoi",
    "names": [
      "Cò ruồi",
      "Cattle Egret",
      "Bubulcus ibis",
      "co ruoi"
    ],
    "image": "/images/Cò ruồi.png",
    "audio": "/audio/Cò ruồi.mp3"
  },
  {
    "slug": "co-bo",
    "names": [
      "Cò bợ",
      "Chinese Pond Heron",
      "Ardeola bacchus",
      "co bo"
    ],
    "image": "/images/Cò bợ.png",
    "audio": "/audio/Cò bợ.mp3"
  },
  {
    "slug": "co-nhan",
    "names": [
      "Cò nhạn",
      "Asian Openbill (hoặc Asian Open-billed Stork)",
      "Anastomus oscitans",
      "Cò ốc",
      "co nhan"
    ],
    "image": "/images/Cò nhạn.png",
    "audio": "/audio/Cò nhạn.mp3"
  },
  {
    "slug": "cat-trung-quoc",
    "names": [
      "Cắt Trung Quốc",
      "Eurasian Hobby",
      "Falco subbuteo",
      "cat trung quoc"
    ],
    "image": "/images/Cắt Trung Quốc.png",
    "audio": "/audio/Cắt Trung Quốc.mp3"
  },
  {
    "slug": "cat-lung-hung",
    "names": [
      "Cắt lưng hung",
      "Common Kestrel",
      "Falco tinnunculus",
      "cat lung hung"
    ],
    "image": "/images/Cắt lưng hung.png",
    "audio": "/audio/Cắt lưng hung.mp3"
  },
  {
    "slug": "yen-co",
    "names": [
      "Yến cọ",
      "Asian Palm Swift",
      "Cypsiurus balasiensis",
      "yen co"
    ],
    "image": "/images/Yến cọ.png",
    "audio": "/audio/Yến cọ.mp3"
  },
  {
    "slug": "yen-mao",
    "names": [
      "Yến mào",
      "Crested Treeswift",
      "Hemiprocne coronata",
      "yen mao"
    ],
    "image": "/images/Yến mào.png",
    "audio": "/audio/Yến mào.mp3"
  },
  {
    "slug": "go-kien-co-quap",
    "names": [
      "Gõ kiến cổ quặp",
      "Eurasian wryneck",
      "Jynx torquilla",
      "go kien co quap"
    ],
    "image": "/images/Gõ kiến cổ quặp.png",
    "audio": "/audio/Gõ kiến cổ quặp.mp3"
  }
];
