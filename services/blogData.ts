import { BlogPost, BlockType } from '../types';

/* 
  INSTRUCTIONS FOR MANAGING CONTENT:
  
  1. IMAGES:
     - Create a folder named `images` inside your `public` folder.
     - Ideally, create subfolders for each day or post to keep things organized.
     - Example: `public/images/day-01/cover.jpg`
     - When referencing in code below, use the path starting with `/images/...`
       (e.g., content: '/images/day-01/cover.jpg')

  2. ADDING A POST:
     - Create a unique ID (slug).
     - Add the object to the `posts` array.
     - Commit and push to GitHub.
*/

export const posts: BlogPost[] = [
  {
    id: 'test',
    title: 'Test',
    date: '2025-11-23',
    location: 'Melbourne, Australia',
    summary: 'This is a test entry.',
    // coverImage: '/images/Wooper.jpg',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Test Entry'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "This is a test paragraph."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/Wooper.jpg',
        meta: {
          alt: 'Wooper'
        }
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Wooper's Birthday!"
      }
    ]
  },
  {
    id: '24-Nov-2025-v1',
    title: 'Leaving Melbourne',
    date: '2025-11-24',
    location: 'Melbourne to Chengdu',
    summary: 'Melbourne to Chengdu',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Melbourne to Chengdu'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Taking flight 3U3886 to Chengdu"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/24-Nov-2025/Planes.jpg',
      }
    ]
  },
  {
    id: '25-Nov-2025-v1',
    title: 'Chengdu Day 1',
    date: '2025-11-25',
    location: 'Chengdu',
    summary: 'Chengdu Day 1',
    coverImage: '/images/25-Nov-2025/ThatchedCottageMuseum.JPG',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Chengdu Day 1'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Landed very early in the morning at Chengdu Tianfu airport. Checked into hotel."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/ChillingAccom.JPG',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Had breaky at LaiTangYuan. 四喜汤圆 (tang yuan), 钟水饺 (bottom dumplings), 玻璃烧麦 (green thing to the left) & 原汤水饺 (the dumplings in the yellow soup)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/breakfast.JPG',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Chengdu Du Fu Thatched Cottage Museum"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/ThatchedCottageMuseum.JPG',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/ThatchedCottageMuseum2.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "喜茶 break! I had the grape fruit tea. Very yummy."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/XiCha.JPG',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Light lunch at 人民公园 (People's Park). 担担面 (noodles) & 钟水饺 (dumplings)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/Lunch.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Walked to Tianfu Square and explored the area"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/TianfuSquare.JPG',
      },
            {
        type: BlockType.PARAGRAPH,
        content: "Dinner at 陶德砂锅."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/Dinner1.JPG',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/25-Nov-2025/Dinner2.JPG',
      }
    ]
  },
  {
    id: '26-Nov-2025-v1',
    title: 'Chengdu Day 2',
    date: '2025-11-26',
    location: 'Chengdu',
    summary: 'Chengdu Day 2',
    coverImage: '/images/26-Nov-2025/DuJiangYan2.jpg',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Chengdu Day 2'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Breaky at a local spot. 甜水面 (centre), 钟水饺 (bottom right), 龙抄手 (bottom left), 担担面 (top left), & 素椒杂酱面 (top right)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/Breakfast-26-Nov.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "We took a DiDi an hour north to visit the SanXingDui museum. The museum contains artificats from an ancient Shu city during the Shang dynasty."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/SanXingDui1.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/SanXingDui2.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Aunty took us to a local restaurant in SanXingDui for lunch. We ordered 肝腰合炒, 青炒豌豆尖, 回锅肉 & 酸菜粉丝汤"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/Lunch-26-Nov.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Travelled an hour west to the scenic mountain views of DuJiangYan"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/DuJiangYan1.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/DuJiangYan2.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "We rushed to the panda centre in DuJiangYan but it was closed :(:(:("
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/ClosedPandas.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "We returned to Chengdu and had hotpot for dinner. Despite being super spicy it was delicious (apart from the pork that had gone off...)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/ChengduHotPot.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Today's route"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/26-Nov-2025/Map-26-Nov.jpg',
      }
    ]
  },
  {
    id: '27-Nov-2025-v1',
    title: 'Chongqing Day Trip',
    date: '2025-11-27',
    location: 'Chongqing',
    summary: 'Chongqing Day Trip',
    coverImage: '/images/27-Nov-2025/RiverIntersection-Raffles.jpg',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Chonqing Day Trip'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Woke up very early. Grabbed breakfast at a closeby Lawson, and took a train to Chongqing (重庆)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/ChengduTrainStation.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Kuixing building (Rooftop plaza)."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/KuiXingBuilding.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Light lunch - 重庆小面 (Chongqing little noodles)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/ChongQingLittleNoodles.jpg',
      },   
      {
        type: BlockType.PARAGRAPH,
        content: "Walked to Jiefangbei Pedestrian Street & Time Square."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/SquareChongQing.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "喜茶 break!"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/XiCha-27-Nov.jpg',
      },      
      {
        type: BlockType.PARAGRAPH,
        content: "Chili ice cream"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/ChiliIceCream.jpg',
      },   
      {
        type: BlockType.PARAGRAPH,
        content: "Cable car"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/CableCar.jpg',
      },        
      {
        type: BlockType.PARAGRAPH,
        content: "Walked to Raffles for the view"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/RiverIntersection-Raffles.jpg',
      },  
      {
        type: BlockType.PARAGRAPH,
        content: "Ate at a local hotpot place that our taxi driver recommended ... by far the best hotpot I've ever had"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/ChongQingHotpot-VeryGood.jpg',
      },  
      {
        type: BlockType.PARAGRAPH,
        content: "Finally visited Hongyadong before taking the train back to Chengdu"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/YellowCompactVillage.jpg',
      }, 
      {
        type: BlockType.PARAGRAPH,
        content: "Today's route"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/27-Nov-2025/Map-27-Nov.jpg',
      }
    ]
  },
  {
    id: '28-Nov-2025-v1',
    title: 'Chengdu to Beijing',
    date: '2025-11-28',
    location: 'Chengdu to Beijing',
    summary: 'Pandas & Peking Duck',
    coverImage: '/images/28-Nov-2025/RedPanda1.jpg',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Chengdu to Beijing'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Pandas!!!!!!!!!!!!!!!! :):):)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/Panda.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/RedPanda1.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/RedPanda2.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/Peacock.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "In the afternoon we took a plane from Chengdu to Beijing"
      },
      {
        type: BlockType.PARAGRAPH,
        content: "We had peking duck for dinner at 四季民福. Absolutely fantastic peking duck - the duck was perfectly tender and its skin melted in my mouth."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/PekingDuck2.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "For dessert, we had an interesting soup with fish maw (bladder). Then, in the bottom image, from top to bottom:"
      },
      {
        type: BlockType.PARAGRAPH,
        content: "1. Pea pudding (豌豆黄WanDouHuang) is a light yellow, delicately sweet Beijing dessert made from peeled yellow peas; it melts in the mouth and is enjoyed in spring and as a cooling summer treat. Palace versions became famous because Empress Dowager Cixi loved them, while the coarse-ground versions were common at spring temple fairs, especially during the lunar March 3rd “Pantao Festival” near Dongbianmen. Although once widely loved, authentic pea pudding is now harder to find. It's made by cooking soaked yellow peas until soft, mixing with sugar, then cooling the mixture to set before cutting it into squares, its natural color coming from the peas themselves."
      },
      {
        type: BlockType.PARAGRAPH,
        content: "2. White Bean Roll (芸豆卷YunDouJuan) is a traditional Chinese pastry made mainly from mashed white kidney beans and sweet red bean paste. It is known for its snow-white appearance, soft and delicate texture, and melt-in-the-mouth taste. To make it, cooked and peeled white beans are mashed into a smooth paste, spread onto plastic wrap, and rolled together with a layer of red bean filling. Originally a folk snack, Yun Dou Juan later became a dessert served in the Qing imperial court."
      },
      {
        type: BlockType.PARAGRAPH,
        content: "3. Donkey Rolling(驴打滚LvDaGun), also called soybean flour cake, is a traditional snack from Northeast China, old Beijing, and Tianjin, known for its distinct yellow, white, and red layers. Its name comes from the final step of coating the roll in soybean flour, which resembles the dust raised by wild donkeys rolling on the ground. Made with millet flour, soybean flour, sweet bean paste, sugar, sesame oil, and aromatics, it involves preparing the dough, making the filling, and shaping the roll. The finished snack is soft, sweet, and fragrant, with bean paste that melts in the mouth and a golden soybean coating enjoyed by all ages."
      },
      {
        type: BlockType.PARAGRAPH,
        content: "4. Ai Wo Wo (艾窝窝)（steamed glutinous rice cake with sweet stuffing ）is a long-standing traditional Beijing snack dating back to the Ming dynasty and beloved by the public. It features a soft, sticky outer shell made from glutinous rice flour and wheat flour, wrapped around a variety of fillings such as walnuts, sesame seeds, melon seeds, or mashed Chinese yam—simple, natural ingredients that are both nutritious and fragrant. Snow-white in color and sweet in flavor, Ai Wo Wo is often decorated with a small piece of red hawthorn jelly for a festive look. Its name comes from the thin layer of flour dusted on the outside and the small indentation pressed into the top."
      },
      {
        type: BlockType.PARAGRAPH,
        content: "5. Chilled Red Bean Jelly （小豆凉糕 )(XiaoDouLiangGao) is a traditional Beijing summer dessert made from red beans cooked, sieved, sweetened, and set with agar or gelatin. It has a soft, mildly sweet, cool texture and a purplish-brown color, and is traditionally considered refreshing and heat-clearing. I particularly enjoyed this one."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/PekingDuck3.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/28-Nov-2025/PekingDuck4.jpg',
      }
    ]
  },
  {
    id: '29-Nov-2025-v1',
    title: 'Beijing Day 1',
    date: '2025-11-29',
    location: 'Beijing',
    summary: 'The Great Wall of China',
    coverImage: '/images/29-Nov-2025/GreatWall2.jpg',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Beijing Day 1'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Breaky"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/Breakfast-29Dec.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Drove to the Great Wall (慕田峪 - mutianyu)"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/GreatWall1.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/GreatWall2.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/GreatWall3.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/GreatWall4.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Xi Cha Break!"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/XiCha-29Nov.jpg',
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Hotpot at 南门涮肉 (nanmen hotpot). 太好吃了！"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/HotPot1.jpg',
      },
      {
        type: BlockType.IMAGE,
        content: '/images/29-Nov-2025/HotPot2.jpg',
      },
    ]
  }
];

// Helper to sort posts by date (newest first)
export const getSortedPosts = (): BlogPost[] => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostById = (id: string): BlogPost | undefined => {
  return posts.find(p => p.id === id);
};

export const getPostsByMonth = (year: number, month: number): BlogPost[] => {
  return posts.filter(p => {
    const d = new Date(p.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
};