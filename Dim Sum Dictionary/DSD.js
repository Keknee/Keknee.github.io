//good place to find images: https://commons.wikimedia.org/wiki/Category:Dim_sum
//list of food http://www.dimsumcentral.com/dim-sum-menu-guide/
//list of food https://en.wikipedia.org/wiki/Dim_sum

//create food class
let food = class{
  constructor(chinese, pinyin, english, picture) {
    this.chinese = chinese;
    this.pinyin = pinyin;
    this.english = english;
    this.picture = picture;
  }
};

//function that displays the info
function display(examp){
  document.write('<img name="example" src=' + examp.picture + ' border="0" width="200" height="150"/>');
  document.write("<br>"+examp.chinese+"<br>"+examp.pinyin+"<br>"+examp.english+"<br>");
};

//Dishes

//Steamed Dishes
document.write("Steamed Dishes<br>");

const XiaoLongbao = new food(
  "小籠包",
  "xiǎo lóng bāo",
  "Soup Dumplings",
  "https://upload.wikimedia.org/wikipedia/commons/2/27/Soup_dumplings.jpg"//https://commons.wikimedia.org/w/index.php?search=soup+dumplings&title=Special%3ASearch&go=Go#/media/File:Soup_dumplings.jpg
);

const XiaJiao = new food(
  "蝦餃",
  "xiā jiǎo",
  "Shrimp Dumplings",
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/Shrimp_dumplings_at_Golden_Unicorn%2C_Chinatown%2C_NYC%2C_April_2009.jpg"//https://commons.wikimedia.org/wiki/File:Shrimp_dumplings_at_Golden_Unicorn,_Chinatown,_NYC,_April_2009.jpg
);

const ShaoMai = new food(
  "燒賣",
  "shāo mai",
  "Open Pork and Shrimp Dumpling",
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shaomai_by_Kent_Wang_in_Seattle%2C_Vancouver.jpg"//https://commons.wikimedia.org/w/index.php?search=shaomai&title=Special%3ASearch&profile=default&fulltext=1#/media/File:Shaomai_by_Kent_Wang_in_Seattle,_Vancouver.jpg
);

const FengZhua = new food(
  "鳳爪",
  "fèng zhuǎ",
  "Chicken Feet",
  "https://upload.wikimedia.org/wikipedia/commons/d/d6/2015_0410_Chicken_feet_dim_sum.jpg" //https://commons.wikimedia.org/wiki/Category:Chicken_feet_(dim_sum)#/media/File:2015_0410_Chicken_feet_dim_sum.jpg
);

const NuoMiJi = new food(
  "糯米雞",
  "nuò mǐ jī",
  "Sticky Rice wrapped in Lotus Leaf",
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/Food_of_Japan_P1260950.JPG"//https://commons.wikimedia.org/wiki/Category:Dim_sum#/media/File:Food_of_Japan_P1260950.JPG
);

const NiuRouWan = new food(
  "牛肉丸",
  "niú ròu wán",
  "Steamed beef meatball",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/HK_Pacific_Plaza_SYP_%E5%BE%B7%E9%9F%BE%E8%8B%91_Tak_Hing_Yuen_Seafood_Restaurant_beef_meat_balls_Mar-2013_Bamboo_steamer.JPG" //https://en.wikipedia.org/wiki/Steamed_meatball#/media/File:HK_Pacific_Plaza_SYP_%E5%BE%B7%E9%9F%BE%E8%8B%91_Tak_Hing_Yuen_Seafood_Restaurant_beef_meat_balls_Mar-2013_Bamboo_steamer.JPG
);

const SteamedChaSiuBao = new food(
  "蒸叉燒包",
  "zhēng chā shāo bāo",
  "Barbeque Pork Bun",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Char_siu_bao.jpg" //https://commons.wikimedia.org/wiki/File:Char_siu_bao.jpg
);

//Fried & Baked Dishes
document.write("Fried & Baked Dishes<br>");

const BakedChaSiuBao = new food(
  "焗叉燒包",
  "jú chā shāo bāo",
  "Barbeque Pork Bun",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Char_siu_bao.jpg" //https://commons.wikimedia.org/wiki/File:Char_siu_bao.jpg
);

const ChaSiuSu = new food(
  "叉燒酥",
  "chā shāo sū",
  "Barbeque Pork Pastry",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Char_siew_sou.JPG" //https://commons.wikimedia.org/wiki/Category:Cha_siu_pastry#/media/File:Char_siew_sou.JPG
);

const XianShuiJiao = new food(
  "鹹水角",
  "xián shuǐ jiǎo",
  "Deep Fried Dumpling",
  "https://c1.staticflickr.com/3/2370/2395821806_c86b79f2f0_z.jpg" //https://www.flickr.com/photos/aptronym/2395821806
);

const CongYouBing = new food(
  "蔥油餅",
  "cōng yóu bǐng",
  "Scallion Pancake",
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Spring_onion_pancake_2013.JPG" //https://commons.wikimedia.org/wiki/Category:Cong_you_bing#/media/File:Spring_onion_pancake_2013.JPG
);

const ChunJuan = new food(
  "春捲",
  "chūn juǎn",
  "Spring Roll",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/VegetableSpringRolls.JPG" //https://en.wikipedia.org/wiki/Spring_roll#/media/File:VegetableSpringRolls.JPG
);

const FuPiJuan = new food(
  "腐皮捲",
  "fǔ pí juǎn",
  "Tofu Skin Roll",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tofuskinroll.jpg"//https://en.wikipedia.org/wiki/Tofu_skin_roll#/media/File:Tofuskinroll.jpg
);

//Noodles & Special Dishes
document.write("Noodles & Special Dishes<br>")

//Dessert Dishes
document.write("Dessert Dishes<br>");

const MaLaGao = new food(
  "馬拉糕",
  "mǎ lā gāo",
  "Steamed Sponge Cake",
  "https://upload.wikimedia.org/wikipedia/commons/0/00/HK_Sheung_Wan_%E5%AF%B6%E6%B9%96%E9%87%91%E5%AE%B4_Treasure_Lake_Seafood_Restaurant_food_Chinese_Steamed_Sponge_Cake_%E9%A6%AC%E6%8B%89%E7%B3%95_Mah_Lai_Goh_Jan-2013.JPG" //https://commons.wikimedia.org/wiki/Category:Chinese_steamed_sponge_cake#/media/File:HK_Sheung_Wan_%E5%AF%B6%E6%B9%96%E9%87%91%E5%AE%B4_Treasure_Lake_Seafood_Restaurant_food_Chinese_Steamed_Sponge_Cake_%E9%A6%AC%E6%8B%89%E7%B3%95_Mah_Lai_Goh_Jan-2013.JPG
);
