//good place to find images: https://commons.wikimedia.org/wiki/Category:Dim_sum
//list of food http://www.dimsumcentral.com/dim-sum-menu-guide/
//list of food https://en.wikipedia.org/wiki/Dim_sum
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
    document.write("<div class='food-details-wrapper'><img  class='food-picture' src=" + examp.picture + " border='0' width='200' height='150'/>");
    document.write("<div class='food-details'><b>"+examp.chinese+"</b><br>"+examp.pinyin+"<br>"+examp.english+"</div></div>");
};



//Steamed Foods
document.write("<h2 id='Steamed'>Steamed Foods</h2>");

var steamedList = [];

function addSteamedFood(chinese, pinyin, english, picture){
  const foodItem = new food(chinese, pinyin, english, picture);
  steamedList.push(foodItem);
};

addSteamedFood(
  "小籠包",
  "xiǎo lóng bāo",
  "Soup Dumplings",
  "https://upload.wikimedia.org/wikipedia/commons/2/27/Soup_dumplings.jpg"//https://commons.wikimedia.org/w/index.php?search=soup+dumplings&title=Special%3ASearch&go=Go#/media/File:Soup_dumplings.jpg
);

addSteamedFood(
  "蝦餃",
  "xiā jiǎo",
  "Shrimp Dumplings",
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/Shrimp_dumplings_at_Golden_Unicorn%2C_Chinatown%2C_NYC%2C_April_2009.jpg"//https://commons.wikimedia.org/wiki/File:Shrimp_dumplings_at_Golden_Unicorn,_Chinatown,_NYC,_April_2009.jpg
);

addSteamedFood(
  "燒賣",
  "shāo mai",
  "Open Pork and Shrimp Dumpling",
  "https://upload.wikimedia.org/wikipedia/commons/2/21/Siumaai.jpg"//https://en.wikipedia.org/wiki/Shumai#/media/File:Siumaai.jpg
);

addSteamedFood(
  "鳳爪",
  "fèng zhuǎ",
  "Chicken Feet",
  "https://upload.wikimedia.org/wikipedia/commons/d/d6/2015_0410_Chicken_feet_dim_sum.jpg" //https://commons.wikimedia.org/wiki/Category:Chicken_feet_(dim_sum)#/media/File:2015_0410_Chicken_feet_dim_sum.jpg
);

addSteamedFood(
  "排骨",
  "pái gǔ",
  "Spare Ribs",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dimsumpaigui.jpg"//https://en.wikipedia.org/wiki/Spare_ribs#/media/File:Dimsumpaigui.jpg
)

addSteamedFood(
  "糯米雞",
  "nuò mǐ jī",
  "Sticky Rice wrapped in Lotus Leaf",
  "https://upload.wikimedia.org/wikipedia/commons/b/b3/Food_of_Japan_P1260950.JPG"//https://commons.wikimedia.org/wiki/Category:Dim_sum#/media/File:Food_of_Japan_P1260950.JPG
);

addSteamedFood(
  "牛肉丸",
  "niú ròu wán",
  "Steamed beef meatball",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/HK_Pacific_Plaza_SYP_%E5%BE%B7%E9%9F%BE%E8%8B%91_Tak_Hing_Yuen_Seafood_Restaurant_beef_meat_balls_Mar-2013_Bamboo_steamer.JPG" //https://en.wikipedia.org/wiki/Steamed_meatball#/media/File:HK_Pacific_Plaza_SYP_%E5%BE%B7%E9%9F%BE%E8%8B%91_Tak_Hing_Yuen_Seafood_Restaurant_beef_meat_balls_Mar-2013_Bamboo_steamer.JPG
);

addSteamedFood(
  "蒸叉燒包",
  "zhēng chā shāo bāo",
  "Barbeque Pork Bun",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Char_siu_bao.jpg" //https://commons.wikimedia.org/wiki/File:Char_siu_bao.jpg
);

addSteamedFood(
  "牛百葉",
  "niú bǎi yè",
  "Steamed Beef Tripe",
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Niubaiye.jpg"//https://commons.wikimedia.org/wiki/File:Niubaiye.jpg
)

for(i=0; i<steamedList.length; i++){
  display(steamedList[i])
};

//Fried and Baked Foods
document.write("<h2 id='FriedBaked'>Fried and Baked Foods</h2>")

var friedBakedList = [];

function addfriedBakedFood(chinese, pinyin, english, picture){
  const foodItem = new food(chinese, pinyin, english, picture);
  friedBakedList.push(foodItem);
};

addfriedBakedFood(
  "焗叉燒包",
  "jú chā shāo bāo",
  "Barbeque Pork Bun",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Char_siu_bao.jpg" //https://commons.wikimedia.org/wiki/File:Char_siu_bao.jpg
);

addfriedBakedFood(
  "叉燒酥",
  "chā shāo sū",
  "Barbeque Pork Pastry",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Char_siew_sou.JPG" //https://commons.wikimedia.org/wiki/Category:Cha_siu_pastry#/media/File:Char_siew_sou.JPG
);

addfriedBakedFood(
  "鹹水角",
  "xián shuǐ jiǎo",
  "Deep Fried Dumpling",
  "https://c1.staticflickr.com/3/2370/2395821806_c86b79f2f0_z.jpg" //https://www.flickr.com/photos/aptronym/2395821806
);

addfriedBakedFood(
  "蔥油餅",
  "cōng yóu bǐng",
  "Scallion Pancake",
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Spring_onion_pancake_2013.JPG" //https://commons.wikimedia.org/wiki/Category:Cong_you_bing#/media/File:Spring_onion_pancake_2013.JPG
);

addfriedBakedFood(
  "春捲",
  "chūn juǎn",
  "Spring Roll",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/VegetableSpringRolls.JPG" //https://en.wikipedia.org/wiki/Spring_roll#/media/File:VegetableSpringRolls.JPG
);

addfriedBakedFood(
  "芋角",
  "yù jiǎo",
  "Taro Dumpling",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Dish_of_taro_balls_at_Li_Wah_Dim_Sum.jpg"//https://commons.wikimedia.org/w/index.php?search=taro+dim+sum&title=Special%3ASearch&profile=default&fulltext=1#/media/File:Dish_of_taro_balls_at_Li_Wah_Dim_Sum.jpg)
);

addfriedBakedFood(
  "蘿蔔糕",
  "luó bo gāo",
  "Turnip Cake",
  "https://upload.wikimedia.org/wikipedia/commons/1/16/2016_0626_lo_bak_gow.jpg"//https://en.wikipedia.org/wiki/Turnip_cake#/media/File:2016_0626_lo_bak_gow.jpg
);

for(i=0; i<friedBakedList.length; i++){
  display(friedBakedList[i])
};

//Rolls Dishes
document.write("<h2 id='Special'>Rice Noodle Rolls and Special Foods</h2>");

var rollsSpecialList = [];

function addRollsSpecialFood(chinese, pinyin, english, picture){
  const foodItem = new food(chinese, pinyin, english, picture);
  rollsSpecialList.push(foodItem);
};

addRollsSpecialFood(
  "牛腸",
  "niú cháng",
  "Beef Noodle Rolls",
  "https://upload.wikimedia.org/wikipedia/commons/b/b0/HK_%E9%A6%99%E6%B8%AF%E4%BB%94_Aberdeen_%E7%A8%BB%E9%A6%99%E9%9B%86%E5%9C%98_Tao_Heung_Restaurant_Group_%E8%92%B8%E8%85%B8%E7%B2%89_Rice_noodle_rolls_May-2012.JPG"//https://commons.wikimedia.org/wiki/File:HK_%E9%A6%99%E6%B8%AF%E4%BB%94_Aberdeen_%E7%A8%BB%E9%A6%99%E9%9B%86%E5%9C%98_Tao_Heung_Restaurant_Group_%E8%92%B8%E8%85%B8%E7%B2%89_Rice_noodle_rolls_May-2012.JPG
);

addRollsSpecialFood(
  "蝦腸",
  "xiā cháng",
  "Shrimp Noodle Rolls",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/In_restaurant_in_Stanley%2C_Hong_Kong_%286993584027%29.jpg"//https://commons.wikimedia.org/wiki/File:In_restaurant_in_Stanley,_Hong_Kong_(6993584027).jpg
);

addRollsSpecialFood(
  "炸兩",
  "zhá liǎng",
  "Chinese donut stick roll",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/Leongs_Legend%2C_Chinatown%2C_London_%283964225020%29.jpg"//https://commons.wikimedia.org/wiki/File:Leongs_Legend,_Chinatown,_London_(3964225020).jpg
);

addRollsSpecialFood(
  "腐皮捲",
  "fǔ pí juǎn",
  "Tofu Skin Roll",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tofuskinroll.jpg"//https://en.wikipedia.org/wiki/Tofu_skin_roll#/media/File:Tofuskinroll.jpg
);

//clams
//garlic pea sprouts
//Congee

addRollsSpecialFood

for(i=0; i<rollsSpecialList.length; i++){
  display(rollsSpecialList[i])
};

//Dessert Dishes
document.write("<h2 id='Dessert'>Dessert</h2>");

var dessertList = [];

function addDessertFood(chinese, pinyin, english, picture){
  const foodItem = new food(chinese, pinyin, english, picture);
  dessertList.push(foodItem);
};

addDessertFood(
  "蛋撻",
  "dàn tǎ",
  "Egg Tart",
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Egg_Tarts_with_Puff_Pastry.jpg"//https://en.wikipedia.org/wiki/Egg_tart#/media/File:Egg_Tarts_with_Puff_Pastry.jpg
);

addDessertFood(
  "煎堆",
  "jiān duī",
  "Sesame Ball",
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Jiandui_with_Black_%26_White_Sesame.jpg"//https://en.wikipedia.org/wiki/Jian_dui#/media/File:Jiandui_with_Black_%26_White_Sesame.jpg
);

addDessertFood(
  "豆腐花",
  "dòu fu huā",
  "Tofu Pudding",
  "https://upload.wikimedia.org/wikipedia/commons/d/d8/10_Thousand_Buddhas_Monastery_%E8%B1%86%E8%85%90%E8%8A%B1_Bean_Curd_2.jpg"//https://en.wikipedia.org/wiki/File:10_Thousand_Buddhas_Monastery_%E8%B1%86%E8%85%90%E8%8A%B1_Bean_Curd_2.jpg
);

addDessertFood(
  "椰汁糕",
  "yē zhī gāo",
  "Coconut Pudding",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Coconutbar.jpg"//https://en.wikipedia.org/wiki/Coconut_bar#/media/File:Coconutbar.jpg
);

addDessertFood(
  "芒果布甸",
  "máng guǒ bù diàn",
  "Mango Pudding",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mango_pudding.JPG"//https://en.wikipedia.org/wiki/Mango_pudding#/media/File:Mango_pudding.JPG
)

addDessertFood(
  "馬拉糕",
  "mǎ lā gāo",
  "Steamed Sponge Cake",
  "https://upload.wikimedia.org/wikipedia/commons/0/00/HK_Sheung_Wan_%E5%AF%B6%E6%B9%96%E9%87%91%E5%AE%B4_Treasure_Lake_Seafood_Restaurant_food_Chinese_Steamed_Sponge_Cake_%E9%A6%AC%E6%8B%89%E7%B3%95_Mah_Lai_Goh_Jan-2013.JPG" //https://commons.wikimedia.org/wiki/Category:Chinese_steamed_sponge_cake#/media/File:HK_Sheung_Wan_%E5%AF%B6%E6%B9%96%E9%87%91%E5%AE%B4_Treasure_Lake_Seafood_Restaurant_food_Chinese_Steamed_Sponge_Cake_%E9%A6%AC%E6%8B%89%E7%B3%95_Mah_Lai_Goh_Jan-2013.JPG
);

addDessertFood(
  "白糖糕",
  "bái táng gāo",
  "White Sugar Sponge Cake",
  "https://upload.wikimedia.org/wikipedia/commons/7/77/WhiteSugarCake.jpg"//https://en.wikipedia.org/wiki/White_sugar_sponge_cake#/media/File:WhiteSugarCake.jpg
);

for(i=0; i<dessertList.length; i++){
  display(dessertList[i])
};
