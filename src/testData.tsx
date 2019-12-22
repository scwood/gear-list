import Papa from "papaparse";
import GearListSection from "./dataObjects/GearListSection";
import GearListItem from "./dataObjects/GearListItem";

const exportedLighterPackData = `Item Name,Category,desc,qty,weight,unit
Atom Packs Atom+,Pack,pack,1,24,ounce
Trash compactor bag,Pack,liner,1,0.7,ounce
TarpTent Stratospire 2,Shelter,"inner, fly, stuff sack, stakes",1,44.6,ounce
Monoprice Carbon Cork Trekking poles,Shelter,trekking poles / tent poles,1,15.2,ounce
Katabatic Alsek,Sleep,quilt,1,24,ounce
Kelty Cosmic down 20,Sleep,sleeping bag,0,45,ounce
Thermarest Xlite,Sleep,sleeping pad,1,12,ounce
Aeros UL pillow,Sleep,pillow,1,2.9,ounce
Mountain Hardware Canyon Shirt,Clothes,button up shirt,1,0,ounce
Nike Pro Running Shorts,Clothes,shorts,1,5.1,ounce
Injinji running socks,Clothes,socks,2,2,ounce
Altra Lone Peak,Clothes,shoes,1,0,ounce
Altra Gaitors,Clothes,gaitors,1,0,pound
Frogg Toggs,Clothes,rain jacket,1,5.6,ounce
Aliexpress Down jacket,Clothes,down jacket,1,5,ounce
Dance pants,Clothes,wind pant,1,3.7,ounce
Generic Beanie,Clothes,warm hat,1,1.6,ounce
Canon g7xii,Electronics,camera,1,11.2,ounce
iPhone 8 w/case,Electronics,"phone, camera, gps",1,7.9,ounce
Apple Earpods,Electronics,earbuds,1,0.5,ounce
Foxelli headlamp,Electronics,headlamp,1,2.4,ounce
Anker 10000,Electronics,powerbank,1,6.3,ounce
Lightning Cable,Electronics,to charge phone,1,0.7,ounce
USB2 cable,Electronics,to charge headlamp / powerbank / camera,1,0,ounce
Ziplock Bag,Electronics,to hold the stuff,1,0.2,ounce
Zpacks Food Bag,Food and Water,bag for food,1,3.3,ounce
Sea to summit long handled spoon,Food and Water,utensil,1,0.5,ounce
Talenti Gelato Container,Food and Water,cold soaking container,1,0,pound
Smartwater 1L,Food and Water,water bottle,2,37.5,gram
Katadyn BeFree,Food and Water,water filter,1,2.2,ounce
EVA foam pad,Misc,sit pad,1,1,ounce
Hillsound Crampon Ultra,Misc,microspikes,0,16,ounce
BV500,Misc,bear can,0,41,ounce`;

const parsed: Papa.ParseResult = Papa.parse(exportedLighterPackData, {
  header: true
});

interface TestData {
  items: { [id: string]: GearListItem };
  sections: { [id: string]: GearListSection };
  sectionOrder: string[];
}

const testData: TestData = {
  items: {},
  sections: {},
  sectionOrder: []
};

const sectionNameToId: { [key: string]: string } = {};

parsed.data.forEach((item, index) => {
  const itemId = "i" + index;
  testData.items[itemId] = {
    id: itemId,
    name: item["Item Name"],
    description: item.desc,
    quantity: item.qty,
    weight: item.weight,
    unit: item.unit
  };
  const sectionName = item.Category;
  let sectionId;
  if (sectionName in sectionNameToId) {
    sectionId = sectionNameToId[sectionName];
  } else {
    sectionId = "s" + Object.keys(sectionNameToId).length;
    sectionNameToId[sectionName] = sectionId;
    testData.sectionOrder.push(sectionId);
    testData.sections[sectionId] = {
      id: sectionId,
      name: sectionName,
      itemIds: []
    };
  }
  testData.sections[sectionId].itemIds.push(itemId);
});

export default testData;
