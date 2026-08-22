// ==================== Mini Español 故事库 ====================
// 15 个西语短故事，每个含理解题
// 结构：{ id, unitId, title, level, sentences: [{es, zh}], questions: [{q, options, answer}] }

const STORIES = [
  {
    id: 1, unitId: 2, title: "El encuentro", level: "A1",
    description: "两个朋友相遇",
    icon: "👋",
    sentences: [
      { es: "María camina por el parque.", zh: "玛丽亚在公园里走。" },
      { es: "Ve a su amigo Pedro.", zh: "她看到了朋友佩德罗。" },
      { es: "—¡Hola, María! ¿Cómo estás?", zh: "—你好，玛丽亚！你好吗？" },
      { es: "—Muy bien, gracias. ¿Y tú?", zh: "—我很好，谢谢。你呢？" },
      { es: "—Adiós, María. ¡Hasta mañana!", zh: "—再见，玛丽亚。明天见！" }
    ],
    questions: [
      {
        q: "María 见到的人是谁？",
        options: ["Pedro", "Juan", "Ana", "Pablo"],
        answer: 0
      },
      {
        q: "他们在哪里相遇？",
        options: ["学校", "公园", "家", "商店"],
        answer: 1
      },
      {
        q: "Pedro 怎么样？",
        options: ["很累", "很好", "很饿", "很冷"],
        answer: 1
      }
    ]
  },
  {
    id: 2, unitId: 3, title: "En la tienda", level: "A1",
    description: "在商店买水果",
    icon: "🛒",
    sentences: [
      { es: "Ana va a la frutería.", zh: "安娜去水果店。" },
      { es: "Compra tres manzanas y dos plátanos.", zh: "她买了三个苹果和两根香蕉。" },
      { es: "La cuenta son cinco euros.", zh: "一共五欧元。" },
      { es: "—Gracias, ¡adiós!", zh: "—谢谢，再见！" }
    ],
    questions: [
      {
        q: "Ana 买了什么？",
        options: ["橘子", "苹果和香蕉", "西瓜", "葡萄"],
        answer: 1
      },
      {
        q: "一共多少钱？",
        options: ["三欧元", "五欧元", "十欧元", "两欧元"],
        answer: 1
      },
      {
        q: "Ana 买了几个苹果？",
        options: ["两个", "三个", "五个", "一个"],
        answer: 1
      }
    ]
  },
  {
    id: 3, unitId: 4, title: "El dibujo", level: "A1",
    description: "画一幅画",
    icon: "🎨",
    sentences: [
      { es: "El niño dibuja una casa.", zh: "男孩画了一栋房子。" },
      { es: "La casa es roja y grande.", zh: "房子是红色的大房子。" },
      { es: "El cielo es azul y el sol es amarillo.", zh: "天空是蓝色，太阳是黄色。" },
      { es: "Hay un pájaro verde en el jardín.", zh: "花园里有一只绿色的小鸟。" }
    ],
    questions: [
      {
        q: "房子是什么颜色？",
        options: ["蓝色", "绿色", "红色", "黄色"],
        answer: 2
      },
      {
        q: "花园里有什么？",
        options: ["狗", "猫", "鸟", "鱼"],
        answer: 1
      },
      {
        q: "太阳是什么颜色？",
        options: ["红色", "绿色", "蓝色", "黄色"],
        answer: 3
      }
    ]
  },
  {
    id: 4, unitId: 5, title: "Un día normal", level: "A1",
    description: "普通的一天",
    icon: "⏰",
    sentences: [
      { es: "Me despierto a las siete de la mañana.", zh: "我早上七点起床。" },
      { es: "Desayuno pan con café.", zh: "我早餐吃面包喝咖啡。" },
      { es: "Voy al trabajo a las nueve.", zh: "我九点去上班。" },
      { es: "Ceno con mi familia a las ocho de la noche.", zh: "我晚上八点和家人吃晚饭。" },
      { es: "Duermo a las once.", zh: "我十一点睡觉。" }
    ],
    questions: [
      {
        q: "他几点起床？",
        options: ["六点", "七点", "八点", "九点"],
        answer: 1
      },
      {
        q: "他早餐吃什么？",
        options: ["鸡蛋", "面包和咖啡", "水果", "米饭"],
        answer: 1
      },
      {
        q: "他几点睡觉？",
        options: ["九点", "十点", "十一点", "十二点"],
        answer: 2
      }
    ]
  },
  {
    id: 5, unitId: 6, title: "La familia de Ana", level: "A1",
    description: "安娜的家庭",
    icon: "👨‍👩‍👧",
    sentences: [
      { es: "Ana tiene una familia grande.", zh: "安娜有一个大家庭。" },
      { es: "Su mamá se llama Carmen.", zh: "她妈妈叫卡门。" },
      { es: "Su papá se llama José.", zh: "她爸爸叫何塞。" },
      { es: "Tiene dos hermanos: Pedro y Luis.", zh: "她有两个兄弟：佩德罗和路易斯。" },
      { es: "Y una hermana pequeña, Rosa.", zh: "还有一个妹妹，罗莎。" }
    ],
    questions: [
      {
        q: "Ana 的妈妈叫什么？",
        options: ["Ana", "Carmen", "Rosa", "José"],
        answer: 1
      },
      {
        q: "Ana 有几个兄弟？",
        options: ["一个", "两个", "三个", "没有"],
        answer: 1
      },
      {
        q: "Ana 的妹妹叫什么？",
        options: ["Carmen", "Luis", "José", "Rosa"],
        answer: 3
      }
    ]
  },
  {
    id: 6, unitId: 7, title: "En el doctor", level: "A1",
    description: "看医生",
    icon: "👨‍⚕️",
    sentences: [
      { es: "Me duele la cabeza y la garganta.", zh: "我头疼喉咙也疼。" },
      { es: "Voy al doctor.", zh: "我去看医生。" },
      { es: "El doctor me examina los ojos y la boca.", zh: "医生检查我的眼睛和嘴。" },
      { es: "—Tienes gripe. Descansa mucho.", zh: "—你感冒了。多休息。" }
    ],
    questions: [
      {
        q: "病人哪里疼？",
        options: ["手和脚", "头和喉咙", "眼睛和耳朵", "背和腰"],
        answer: 1
      },
      {
        q: "医生诊断是什么病？",
        options: ["发烧", "感冒", "咳嗽", "过敏"],
        answer: 1
      },
      {
        q: "医生检查了哪些部位？",
        options: ["手和脚", "眼睛和嘴", "头和脚", "耳朵和鼻子"],
        answer: 1
      }
    ]
  },
  {
    id: 7, unitId: 8, title: "En el restaurante", level: "A1",
    description: "在餐厅",
    icon: "🍽️",
    sentences: [
      { es: "El camarero llega con el menú.", zh: "服务员拿着菜单过来。" },
      { es: "Quiero pollo con arroz, por favor.", zh: "我想要鸡肉饭，谢谢。" },
      { es: "¿Y para beber?", zh: "喝点什么？" },
      { es: "Un vaso de agua, gracias.", zh: "一杯水，谢谢。" },
      { es: "La cuenta, por favor. ¿Cuánto es?", zh: "请买单。多少钱？" }
    ],
    questions: [
      {
        q: "客人点了什么主菜？",
        options: ["牛肉", "鸡肉饭", "鱼", "沙拉"],
        answer: 1
      },
      {
        q: "客人喝什么？",
        options: ["咖啡", "茶", "水", "果汁"],
        answer: 2
      },
      {
        q: "客人最后说什么？",
        options: ["谢谢", "买单", "再见", "好吃"],
        answer: 1
      }
    ]
  },
  {
    id: 8, unitId: 9, title: "En el mercado", level: "A1",
    description: "在市场",
    icon: "🍎",
    sentences: [
      { es: "Voy al mercado los domingos.", zh: "我周日去市场。" },
      { es: "Compro manzanas, naranjas y plátanos.", zh: "我买苹果、橘子和香蕉。" },
      { es: "Las fresas están muy ricas.", zh: "草莓很好吃。" },
      { es: "También compro verduras: tomates y zanahorias.", zh: "我也买蔬菜：西红柿和胡萝卜。" }
    ],
    questions: [
      {
        q: "他什么时候去市场？",
        options: ["周一", "周三", "周日", "周六"],
        answer: 2
      },
      {
        q: "他买了什么水果？",
        options: ["苹果和梨", "苹果、橘子和香蕉", "西瓜和葡萄", "草莓和樱桃"],
        answer: 1
      },
      {
        q: "他买了什么蔬菜？",
        options: ["土豆和洋葱", "西红柿和胡萝卜", "白菜和菠菜", "黄瓜和茄子"],
        answer: 1
      }
    ]
  },
  {
    id: 9, unitId: 10, title: "En el zoológico", level: "A1",
    description: "在动物园",
    icon: "🦁",
    sentences: [
      { es: "Hoy vamos al zoológico.", zh: "今天我们去动物园。" },
      { es: "Vemos leones, tigres y elefantes.", zh: "我们看了狮子、老虎和大象。" },
      { es: "Los monos son muy graciosos.", zh: "猴子非常滑稽。" },
      { es: "Mi animal favorito es el caballo.", zh: "我最喜欢的动物是马。" }
    ],
    questions: [
      {
        q: "他们去了哪里？",
        options: ["公园", "动物园", "海滩", "山"],
        answer: 1
      },
      {
        q: "他们看到了哪些动物？",
        options: ["狗和猫", "狮子、老虎和大象", "鸟和鱼", "马和牛"],
        answer: 1
      },
      {
        q: "作者最喜欢什么动物？",
        options: ["狮子", "猴子", "大象", "马"],
        answer: 3
      }
    ]
  },
  {
    id: 10, unitId: 11, title: "De compras", level: "A1",
    description: "去购物",
    icon: "👕",
    sentences: [
      { es: "Necesito ropa nueva.", zh: "我需要新衣服。" },
      { es: "Compro una camisa blanca y unos zapatos negros.", zh: "我买了一件白衬衫和一双黑鞋。" },
      { es: "También llevo un sombrero.", zh: "我也戴了一顶帽子。" },
      { es: "Todo cuesta cien euros.", zh: "一共一百欧元。" }
    ],
    questions: [
      {
        q: "作者买了什么？",
        options: ["裤子和鞋", "衬衫和鞋", "裙子和帽子", "外套和手套"],
        answer: 1
      },
      {
        q: "衬衫是什么颜色？",
        options: ["黑色", "白色", "蓝色", "红色"],
        answer: 1
      },
      {
        q: "一共多少钱？",
        options: ["五十欧元", "一百欧元", "两百欧元", "八十欧元"],
        answer: 1
      }
    ]
  },
  {
    id: 11, unitId: 12, title: "Mi casa", level: "A1",
    description: "我的家",
    icon: "🏠",
    sentences: [
      { es: "Mi casa es grande y bonita.", zh: "我的家又大又漂亮。" },
      { es: "Tiene tres dormitorios y dos baños.", zh: "有三个卧室和两个浴室。" },
      { es: "La cocina es grande y moderna.", zh: "厨房又大又现代。" },
      { es: "En el salón hay un sofá grande.", zh: "客厅里有一张大沙发。" }
    ],
    questions: [
      {
        q: "家有几个卧室？",
        options: ["两个", "三个", "四个", "五个"],
        answer: 1
      },
      {
        q: "厨房怎么样？",
        options: ["小", "旧", "大而现代", "暗"],
        answer: 2
      },
      {
        q: "客厅里有什么？",
        options: ["床", "沙发", "桌子", "电视"],
        answer: 1
      }
    ]
  },
  {
    id: 12, unitId: 14, title: "El viaje", level: "A1",
    description: "一次旅行",
    icon: "✈️",
    sentences: [
      { es: "Voy a viajar a Madrid en avión.", zh: "我要坐飞机去马德里。" },
      { es: "El vuelo es a las diez de la mañana.", zh: "航班是早上十点。" },
      { es: "Necesito el pasaporte y la maleta.", zh: "我需要护照和行李箱。" },
      { es: "En el aeropuerto compro un café.", zh: "在机场我买了一杯咖啡。" }
    ],
    questions: [
      {
        q: "作者要去哪里？",
        options: ["巴塞罗那", "马德里", "巴黎", "伦敦"],
        answer: 1
      },
      {
        q: "坐什么交通工具？",
        options: ["火车", "汽车", "飞机", "船"],
        answer: 2
      },
      {
        q: "需要带什么？",
        options: ["护照和行李箱", "票和钱", "手机和钥匙", "书和笔记本"],
        answer: 0
      }
    ]
  },
  {
    id: 13, unitId: 15, title: "En la escuela", level: "A1",
    description: "在学校",
    icon: "📚",
    sentences: [
      { es: "Hoy tengo clase de español.", zh: "今天我有西语课。" },
      { es: "La profesora se llama María.", zh: "老师叫玛丽亚。" },
      { es: "Escribo en mi cuaderno con un bolígrafo azul.", zh: "我用蓝圆珠笔在笔记本上写。" },
      { es: "Estudio mucho para el examen.", zh: "我用功学习准备考试。" }
    ],
    questions: [
      {
        q: "今天上什么课？",
        options: ["数学", "英语", "西语", "历史"],
        answer: 2
      },
      {
        q: "老师叫什么？",
        options: ["Ana", "Carmen", "María", "José"],
        answer: 2
      },
      {
        q: "用哪种颜色的笔？",
        options: ["红色", "黑色", "蓝色", "绿色"],
        answer: 2
      }
    ]
  },
  {
    id: 14, unitId: 17, title: "El partido", level: "A1",
    description: "足球比赛",
    icon: "⚽",
    sentences: [
      { es: "Hoy hay un partido de fútbol.", zh: "今天有足球比赛。" },
      { es: "Mi equipo favorito juega en el estadio.", zh: "我最喜欢的队在体育场踢。" },
      { es: "El partido es muy emocionante.", zh: "比赛非常激动人心。" },
      { es: "¡Ganamos tres a dos!", zh: "我们以三比二赢了！" }
    ],
    questions: [
      {
        q: "今天有什么比赛？",
        options: ["篮球", "足球", "网球", "游泳"],
        answer: 1
      },
      {
        q: "比赛在哪里？",
        options: ["公园", "体育场", "学校", "家"],
        answer: 1
      },
      {
        q: "比分是多少？",
        options: ["二比一", "三比二", "一比零", "四比三"],
        answer: 1
      }
    ]
  },
  {
    id: 15, unitId: 25, title: "La fiesta sorpresa", level: "A2",
    description: "惊喜派对",
    icon: "🎉",
    sentences: [
      { es: "Hoy es el cumpleaños de mi amiga.", zh: "今天是我朋友的生日。" },
      { es: "Organizamos una fiesta sorpresa.", zh: "我们准备了一个惊喜派对。" },
      { es: "Compramos un pastel y regalos.", zh: "我们买了蛋糕和礼物。" },
      { es: "Cuando llega, decimos: ¡Feliz cumpleaños!", zh: "当她到时我们说：生日快乐！" },
      { es: "Todos cantamos y bailamos juntos.", zh: "我们一起唱歌跳舞。" }
    ],
    questions: [
      {
        q: "今天是什么日子？",
        options: ["新年", "朋友生日", "圣诞节", "婚礼"],
        answer: 1
      },
      {
        q: "他们买了什么？",
        options: ["花和气球", "蛋糕和礼物", "糖果和酒", "书和笔"],
        answer: 1
      },
      {
        q: "他们做了什么？",
        options: ["吃饭", "唱歌跳舞", "玩游戏", "看电影"],
        answer: 1
      }
    ]
  },
  {
    id: 16, unitId: 5, title: "下雨天", description: "雨天待在家里", level: "A1",
    icon: "🌧️",
    sentences: [
      { es: "Hoy llueve mucho.", zh: "今天雨下得很大。" },
      { es: "María mira por la ventana.", zh: "玛丽亚望着窗外。" },
      { es: "Su gato duerme en el sofá.", zh: "她的猫在沙发上睡觉。" },
      { es: "María toma un libro y lee.", zh: "玛丽亚拿起一本书读起来。" },
      { es: "La lluvia suena como música.", zh: "雨声像音乐一样。" }
    ],
    questions: [
      {
        q: "今天天气怎么样？",
        options: ["下大雪", "出太阳", "下大雨", "刮大风"],
        answer: 2
      },
      {
        q: "猫在哪里？",
        options: ["桌子上", "沙发上", "床上", "地板上"],
        answer: 1
      },
      {
        q: "玛丽亚在做什么？",
        options: ["做饭", "听音乐", "看书", "画画"],
        answer: 2
      }
    ]
  },
  {
    id: 17, unitId: 6, title: "在公园里", description: "和爸爸去公园玩", level: "A1",
    icon: "🌳",
    sentences: [
      { es: "Pedro va al parque con su papá.", zh: "佩德罗和爸爸去公园。" },
      { es: "El parque tiene muchos árboles.", zh: "公园里有很多树。" },
      { es: "Pedro juega con una pelota.", zh: "佩德罗在玩球。" },
      { es: "Su papá lee el periódico.", zh: "他爸爸在读报纸。" },
      { es: "Después, comen un helado.", zh: "之后，他们吃冰淇淋。" }
    ],
    questions: [
      {
        q: "谁和佩德罗去公园？",
        options: ["妈妈", "爸爸", "爷爷", "朋友"],
        answer: 1
      },
      {
        q: "佩德罗在玩什么？",
        options: ["玩具车", "皮球", "风筝", "滑梯"],
        answer: 1
      },
      {
        q: "他们最后吃了什么？",
        options: ["蛋糕", "三明治", "冰淇淋", "水果"],
        answer: 2
      }
    ]
  },
  {
    id: 18, unitId: 8, title: "家庭晚餐", description: "一家人围坐吃饭", level: "A2",
    icon: "🍽️",
    sentences: [
      { es: "Es la hora de cenar.", zh: "晚餐时间到了。" },
      { es: "La mesa tiene sopa, pan y ensalada.", zh: "桌上有汤、面包和沙拉。" },
      { es: "Todos se sientan a la mesa.", zh: "大家坐到桌前。" },
      { es: "El padre dice: 'Buen provecho'.", zh: "爸爸说：'请慢用'。" },
      { es: "La familia habla y ríe mucho.", zh: "全家人又说又笑。" }
    ],
    questions: [
      {
        q: "桌上有什么？",
        options: ["只有米饭", "汤、面包和沙拉", "披萨和可乐", "面条"],
        answer: 1
      },
      {
        q: "爸爸说了什么？",
        options: ["我爱你", "请慢用", "生日快乐", "新年好"],
        answer: 1
      },
      {
        q: "家人的气氛如何？",
        options: ["很安静", "很紧张", "很开心", "很无聊"],
        answer: 2
      }
    ]
  },
  // ============ A1 新增故事 (id 19-34) ============
  {
    id: 19, unitId: 10, title: "Mi mascota", level: "A1",
    description: "我的小宠物",
    icon: "🐶",
    sentences: [
      { es: "Ana tiene un perro.", zh: "安娜有一只狗。" },
      { es: "El perro se llama Toby.", zh: "这只狗叫托比。" },
      { es: "Toby es marrón y pequeño.", zh: "托比是棕色的，很小。" },
      { es: "Ana pasea a Toby cada día.", zh: "安娜每天带托比散步。" },
      { es: "Toby corre muy rápido en el parque.", zh: "托比在公园里跑得很快。" }
    ],
    questions: [
      { q: "Ana 的宠物叫什么？", options: ["Toby", "Max", "Lucas", "Coco"], answer: 0 },
      { q: "Toby 是什么颜色？", options: ["黑色", "白色", "棕色", "黄色"], answer: 2 },
      { q: "Ana 每天带 Toby 做什么？", options: ["洗澡", "散步", "喂食", "睡觉"], answer: 1 }
    ]
  },
  {
    id: 20, unitId: 8, title: "La merienda", level: "A1",
    description: "下午茶时间",
    icon: "🍪",
    sentences: [
      { es: "Son las cuatro de la tarde.", zh: "现在是下午四点。" },
      { es: "Tengo mucha hambre.", zh: "我非常饿。" },
      { es: "Como un sándwich y una manzana.", zh: "我吃一个三明治和一个苹果。" },
      { es: "Bebo un vaso de leche.", zh: "我喝一杯牛奶。" },
      { es: "¡Qué rica merienda!", zh: "下午茶真好吃！" }
    ],
    questions: [
      { q: "下午茶是几点？", options: ["三点", "四点", "五点", "六点"], answer: 1 },
      { q: "他/她 吃了什么？", options: ["三明治和苹果", "面条和汤", "米饭和鱼", "沙拉和面包"], answer: 0 },
      { q: "喝的是什么？", options: ["水", "茶", "牛奶", "果汁"], answer: 2 }
    ]
  },
  {
    id: 21, unitId: 4, title: "Pintamos un cuadro", level: "A1",
    description: "我们画一幅画",
    icon: "🎨",
    sentences: [
      { es: "Pedro y María pintan juntos.", zh: "佩德罗和玛丽亚一起画画。" },
      { es: "Pintan el cielo de color azul.", zh: "他们把天空画成蓝色。" },
      { es: "El sol es grande y amarillo.", zh: "太阳又大又黄。" },
      { es: "Ponen tres flores rojas.", zh: "他们画了三朵红色的花。" },
      { es: "El cuadro es muy bonito.", zh: "这幅画非常漂亮。" }
    ],
    questions: [
      { q: "谁在一起画画？", options: ["佩德罗", "玛丽亚", "佩德罗和玛丽亚", "孩子们"], answer: 2 },
      { q: "天空是什么颜色？", options: ["红色", "蓝色", "绿色", "黄色"], answer: 1 },
      { q: "太阳怎么样？", options: ["小而红", "大而黄", "大而白", "小而蓝"], answer: 1 }
    ]
  },
  {
    id: 22, unitId: 5, title: "La hora de dormir", level: "A1",
    description: "睡觉时间",
    icon: "🌙",
    sentences: [
      { es: "Son las nueve de la noche.", zh: "现在是晚上九点。" },
      { es: "Me lavo los dientes.", zh: "我刷牙。" },
      { es: "Me pongo el pijama.", zh: "我穿上睡衣。" },
      { es: "Mi mamá lee un cuento.", zh: "我妈妈读一个故事。" },
      { es: "Me duermo muy rápido.", zh: "我很快就睡着了。" }
    ],
    questions: [
      { q: "睡觉时间是几点？", options: ["七点", "八点", "九点", "十点"], answer: 2 },
      { q: "睡前做什么？", options: ["看电视", "刷牙", "玩游戏", "吃零食"], answer: 1 },
      { q: "谁读故事？", options: ["爸爸", "妈妈", "爷爷", "奶奶"], answer: 1 }
    ]
  },
  {
    id: 23, unitId: 12, title: "Mi habitación", level: "A1",
    description: "我的房间",
    icon: "🛏️",
    sentences: [
      { es: "Mi habitación es pequeña.", zh: "我的房间很小。" },
      { es: "Hay una cama y una mesa.", zh: "有一张床和一张桌子。" },
      { es: "En la mesa hay muchos libros.", zh: "桌子上有很多书。" },
      { es: "La ventana es grande.", zh: "窗户很大。" },
      { es: "Me gusta mucho mi habitación.", zh: "我非常喜欢我的房间。" }
    ],
    questions: [
      { q: "房间是大还是小？", options: ["很大", "很小", "中等", "没说"], answer: 1 },
      { q: "桌子上有什么？", options: ["玩具", "书", "食物", "衣服"], answer: 1 },
      { q: "她/他 喜欢房间吗？", options: ["不喜欢", "很喜欢", "一般", "没感觉"], answer: 1 }
    ]
  },
  {
    id: 24, unitId: 3, title: "Contamos números", level: "A1",
    description: "数数",
    icon: "🔢",
    sentences: [
      { es: "La profesora cuenta con los niños.", zh: "老师和小朋友们一起数数。" },
      { es: "Uno, dos, tres...", zh: "一、二、三……" },
      { es: "Hay diez manzanas en la mesa.", zh: "桌上有十个苹果。" },
      { es: "Cada niño toma una.", zh: "每个小朋友拿一个。" },
      { es: "Ahora quedan cinco manzanas.", zh: "现在剩下五个苹果。" }
    ],
    questions: [
      { q: "桌上有几个苹果？", options: ["五个", "八个", "十个", "十二个"], answer: 2 },
      { q: "每个孩子拿几个？", options: ["一个", "两个", "三个", "四个"], answer: 0 },
      { q: "还剩几个？", options: ["三个", "四个", "五个", "六个"], answer: 2 }
    ]
  },
  {
    id: 25, unitId: 6, title: "La familia de Luis", level: "A1",
    description: "路易斯的家庭",
    icon: "👨‍👩‍👧‍👦",
    sentences: [
      { es: "Luis vive con su familia.", zh: "路易斯和家人一起住。" },
      { es: "Su padre se llama Carlos.", zh: "他爸爸叫卡洛斯。" },
      { es: "Su madre se llama Marta.", zh: "他妈妈叫玛尔塔。" },
      { es: "Tiene una hermana menor.", zh: "他有一个妹妹。" },
      { es: "Todos son muy felices.", zh: "大家都很幸福。" }
    ],
    questions: [
      { q: "爸爸叫什么？", options: ["Luis", "Carlos", "Pedro", "Miguel"], answer: 1 },
      { q: "妈妈叫什么？", options: ["Marta", "Ana", "Rosa", "Elena"], answer: 0 },
      { q: "Luis 有几个兄弟姐妹？", options: ["没有", "一个妹妹", "两个哥哥", "一个弟弟"], answer: 1 }
    ]
  },
  {
    id: 26, unitId: 8, title: "El mercado", level: "A1",
    description: "在市场",
    icon: "🥕",
    sentences: [
      { es: "Voy al mercado con mi abuela.", zh: "我和奶奶去市场。" },
      { es: "Compramos tomates y cebollas.", zh: "我们买了番茄和洋葱。" },
      { es: "Las fresas están muy ricas.", zh: "草莓很好吃。" },
      { es: "La señora del puesto sonríe.", zh: "摊位的女士微笑着。" },
      { es: "Pagamos y volvemos a casa.", zh: "我们付了钱就回家。" }
    ],
    questions: [
      { q: "和谁去市场？", options: ["妈妈", "奶奶", "朋友", "姐姐"], answer: 1 },
      { q: "买了什么蔬菜？", options: ["番茄和洋葱", "土豆和胡萝卜", "生菜和黄瓜", "豆角和茄子"], answer: 0 },
      { q: "摊位的女士怎么样？", options: ["生气", "微笑", "伤心", "睡觉"], answer: 1 }
    ]
  },
  {
    id: 27, unitId: 11, title: "La ropa", level: "A1",
    description: "衣服",
    icon: "👕",
    sentences: [
      { es: "Hoy hace frío.", zh: "今天很冷。" },
      { es: "Me pongo una chaqueta azul.", zh: "我穿上一件蓝色的外套。" },
      { es: "También llevo un gorro rojo.", zh: "我还戴一顶红色的帽子。" },
      { es: "Mis zapatos son nuevos.", zh: "我的鞋子是新的。" },
      { es: "¡Estoy listo para salir!", zh: "我准备好出门了！" }
    ],
    questions: [
      { q: "今天天气怎么样？", options: ["很热", "很冷", "很暖", "下雨"], answer: 1 },
      { q: "外套是什么颜色？", options: ["红色", "蓝色", "绿色", "黑色"], answer: 1 },
      { q: "帽子是什么颜色？", options: ["蓝色", "白色", "红色", "黄色"], answer: 2 }
    ]
  },
  {
    id: 28, unitId: 9, title: "La ensalada de frutas", level: "A1",
    description: "水果沙拉",
    icon: "🥗",
    sentences: [
      { es: "Hoy preparo una ensalada de frutas.", zh: "今天我做一份水果沙拉。" },
      { es: "Pongo manzanas, naranjas y plátanos.", zh: "我放苹果、橙子和香蕉。" },
      { es: "Añado fresas y uvas.", zh: "我加上草莓和葡萄。" },
      { es: "Mi hermano come todo.", zh: "我哥哥全吃完了。" },
      { es: "¡Qué rico!", zh: "真好吃！" }
    ],
    questions: [
      { q: "沙拉里有什么？", options: ["只有苹果", "很多水果", "只有葡萄", "只有香蕉"], answer: 1 },
      { q: "谁吃完了沙拉？", options: ["妈妈", "爸爸", "哥哥", "妹妹"], answer: 2 },
      { q: "做的人觉得好吃吗？", options: ["不好吃", "真好吃", "一般", "很辣"], answer: 1 }
    ]
  },
  {
    id: 29, unitId: 14, title: "Vamos a la playa", level: "A1",
    description: "去海滩",
    icon: "🏖️",
    sentences: [
      { es: "El domingo vamos a la playa.", zh: "星期天我们去海滩。" },
      { es: "El coche tarda una hora.", zh: "开车要一个小时。" },
      { es: "El mar es azul y grande.", zh: "大海又蓝又大。" },
      { es: "Nadamos y jugamos en la arena.", zh: "我们在沙子上游泳和玩耍。" },
      { es: "Comemos un helado al volver.", zh: "回家路上我们吃冰淇淋。" }
    ],
    questions: [
      { q: "什么时候去海滩？", options: ["星期六", "星期天", "星期一", "星期五"], answer: 1 },
      { es: "车开了多久？", options: ["半小时", "一小时", "两小时", "三小时"], answer: 1 },
      { q: "回家路上吃了什么？", options: ["三明治", "冰淇淋", "水果", "蛋糕"], answer: 1 }
    ]
  },
  {
    id: 30, unitId: 14, title: "El autobús", level: "A1",
    description: "坐公交车",
    icon: "🚌",
    sentences: [
      { es: "Espero el autobús en la parada.", zh: "我在车站等公交车。" },
      { es: "Llega el número veinticinco.", zh: "25路车到了。" },
      { es: "Subo y pago el billete.", zh: "我上车买票。" },
      { es: "Me siento cerca de la ventana.", zh: "我坐在窗户旁边。" },
      { es: "Bajo en la cuarta parada.", zh: "我在第四站下车。" }
    ],
    questions: [
      { q: "坐的是几路车？", options: ["15路", "20路", "25路", "30路"], answer: 2 },
      { es: "坐在哪里？", options: ["门口", "窗边", "中间", "最后一排"], answer: 1 },
      { q: "在哪一站下车？", options: ["第二站", "第三站", "第四站", "第五站"], answer: 2 }
    ]
  },
  {
    id: 31, unitId: 8, title: "En la panadería", level: "A1",
    description: "在面包店",
    icon: "🥖",
    sentences: [
      { es: "Entro en la panadería.", zh: "我走进面包店。" },
      { es: "Huele muy bien.", zh: "闻起来很香。" },
      { es: "Compro pan y un croissant.", zh: "我买面包和一个牛角包。" },
      { es: "La panadera es muy amable.", zh: "面包师很友好。" },
      { es: "Vuelvo a casa feliz.", zh: "我开心地回家。" }
    ],
    questions: [
      { q: "店里闻起来怎么样？", options: ["很臭", "很香", "没味道", "很甜"], answer: 1 },
      { q: "买了什么？", options: ["蛋糕", "面包和可颂", "饼干", "三明治"], answer: 1 },
      { q: "面包师怎么样？", options: ["很凶", "很友好", "很冷淡", "很忙"], answer: 1 }
    ]
  },
  {
    id: 32, unitId: 15, title: "La biblioteca", level: "A1",
    description: "在图书馆",
    icon: "📚",
    sentences: [
      { es: "Voy a la biblioteca después de clase.", zh: "下课后我去图书馆。" },
      { es: "Leo un libro de animales.", zh: "我看一本关于动物的书。" },
      { es: "La biblioteca está en silencio.", zh: "图书馆很安静。" },
      { es: "Tomo dos libros para mi casa.", zh: "我借了两本书回家。" },
      { es: "Devuelvo los libros la próxima semana.", zh: "我下周还书。" }
    ],
    questions: [
      { q: "什么时候去图书馆？", options: ["下课后", "上课前", "午饭时", "睡觉前"], answer: 0 },
      { q: "借了几本书？", options: ["一本", "两本", "三本", "四本"], answer: 1 },
      { q: "什么时候还？", options: ["今天", "明天", "下周", "下个月"], answer: 2 }
    ]
  },
  {
    id: 33, unitId: 6, title: "El parque de juegos", level: "A1",
    description: "游乐场",
    icon: "🎠",
    sentences: [
      { es: "Los niños corren al parque.", zh: "孩子们跑向公园。" },
      { es: "Hay un tobogán y un columpio.", zh: "有一个滑梯和一个秋千。" },
      { es: "Mi hermana pequeña se ríe mucho.", zh: "我小妹妹笑得很开心。" },
      { es: "Mi papá nos vigila.", zh: "我爸爸看着我们。" },
      { es: "Es un día muy divertido.", zh: "是非常有趣的一天。" }
    ],
    questions: [
      { q: "游乐场有什么？", options: ["滑梯和秋千", "跷跷板", "蹦床", "摩天轮"], answer: 0 },
      { q: "谁在笑？", options: ["哥哥", "小妹妹", "妈妈", "爸爸"], answer: 1 },
      { q: "谁看着孩子们？", options: ["妈妈", "爸爸", "奶奶", "老师"], answer: 1 }
    ]
  },
  {
    id: 34, unitId: 8, title: "La sopa caliente", level: "A1",
    description: "热汤",
    icon: "🍲",
    sentences: [
      { es: "Hoy hace mucho frío.", zh: "今天很冷。" },
      { es: "Mi abuela hace sopa de pollo.", zh: "我奶奶做鸡汤。" },
      { es: "La sopa está muy caliente.", zh: "汤很热。" },
      { es: "Huele muy bien.", zh: "闻起来很香。" },
      { es: "Toda la familia come junta.", zh: "全家人一起吃。" }
    ],
    questions: [
      { q: "今天天气如何？", options: ["很热", "很冷", "凉爽", "温暖"], answer: 1 },
      { q: "谁做的汤？", options: ["妈妈", "奶奶", "爸爸", "姐姐"], answer: 1 },
      { q: "汤怎么样？", options: ["很凉", "很热", "很咸", "很淡"], answer: 1 }
    ]
  },
  // ============ A2 新增故事 (id 35-48) ============
  {
    id: 35, unitId: 22, title: "En el hotel", level: "A2",
    description: "在旅馆",
    icon: "🏨",
    sentences: [
      { es: "Llegamos al hotel por la tarde.", zh: "我们下午到达旅馆。" },
      { es: "La recepcionista nos da la llave.", zh: "前台给我们钥匙。" },
      { es: "Nuestra habitación está en el tercer piso.", zh: "我们的房间在三楼。" },
      { es: "La habitación tiene dos camas y un balcón.", zh: "房间有两张床和一个阳台。" },
      { es: "Desde el balcón vemos el mar.", zh: "从阳台能看到大海。" }
    ],
    questions: [
      { q: "什么时候到酒店？", options: ["早上", "下午", "晚上", "半夜"], answer: 1 },
      { q: "房间在几楼？", options: ["二楼", "三楼", "四楼", "五楼"], answer: 1 },
      { q: "从阳台能看到什么？", options: ["山", "森林", "大海", "城市"], answer: 2 }
    ]
  },
  {
    id: 36, unitId: 14, title: "En el avión", level: "A2",
    description: "在飞机上",
    icon: "✈️",
    sentences: [
      { es: "El avión sale a las ocho.", zh: "飞机八点起飞。" },
      { es: "Nos sentamos cerca de la ventana.", zh: "我们坐在窗边。" },
      { es: "La azafata nos ofrece un zumo.", zh: "空姐给我们果汁。" },
      { es: "El viaje dura dos horas.", zh: "旅程持续两小时。" },
      { es: "Llegamos a Barcelona.", zh: "我们到达巴塞罗那。" }
    ],
    questions: [
      { q: "飞机几点起飞？", options: ["六点", "七点", "八点", "九点"], answer: 2 },
      { q: "旅程多久？", options: ["一小时", "两小时", "三小时", "四小时"], answer: 1 },
      { q: "去哪里？", options: ["马德里", "巴塞罗那", "瓦伦西亚", "塞维利亚"], answer: 1 }
    ]
  },
  {
    id: 37, unitId: 32, title: "En el banco", level: "A2",
    description: "在银行",
    icon: "🏦",
    sentences: [
      { es: "Voy al banco a sacar dinero.", zh: "我去银行取钱。" },
      { es: "Espero en la cola quince minutos.", zh: "我排队等了十五分钟。" },
      { es: "El cajero es muy amable.", zh: "柜员很友好。" },
      { es: "Saco doscientos euros.", zh: "我取了二百欧元。" },
      { es: "Guardo el dinero en mi cartera.", zh: "我把钱放到钱包里。" }
    ],
    questions: [
      { q: "去银行做什么？", options: ["存钱", "取钱", "开户", "借钱"], answer: 1 },
      { q: "等了多久？", options: ["五分钟", "十分钟", "十五分钟", "二十分钟"], answer: 2 },
      { q: "取了多少钱？", options: ["一百欧", "两百欧", "三百欧", "五百欧"], answer: 1 }
    ]
  },
  {
    id: 38, unitId: 8, title: "La receta de paella", level: "A2",
    description: "海鲜饭食谱",
    icon: "🥘",
    sentences: [
      { es: "Hoy cocino paella valenciana.", zh: "今天我做瓦伦西亚海鲜饭。" },
      { es: "Necesito arroz, mariscos y azafrán.", zh: "我需要米、海鲜和藏红花。" },
      { es: "Primero sofrío la cebolla y el ajo.", zh: "我先炒洋葱和大蒜。" },
      { es: "Después añado el arroz y el agua.", zh: "然后我加入米和水。" },
      { es: "La paella queda deliciosa.", zh: "海鲜饭做得很美味。" }
    ],
    questions: [
      { q: "做什么菜？", options: ["意大利面", "海鲜饭", "寿司", "咖喱"], answer: 1 },
      { q: "需要哪些材料？", options: ["米和肉", "米和海鲜", "面条和奶酪", "米和蔬菜"], answer: 1 },
      { q: "先炒什么？", options: ["米", "洋葱和大蒜", "海鲜", "水"], answer: 1 }
    ]
  },
  {
    id: 39, unitId: 30, title: "Primer día de trabajo", level: "A2",
    description: "工作的第一天",
    icon: "💼",
    sentences: [
      { es: "Hoy es mi primer día de trabajo.", zh: "今天是我工作的第一天。" },
      { es: "Llego a la oficina a las nueve.", zh: "我九点到办公室。" },
      { es: "Mi jefa me presenta al equipo.", zh: "我的上司把我介绍给团队。" },
      { es: "Todos son muy simpáticos.", zh: "大家都很友好。" },
      { es: "Estoy muy contenta con el trabajo.", zh: "我非常喜欢这份工作。" }
    ],
    questions: [
      { q: "几点到办公室？", options: ["八点", "九点", "十点", "十一点"], answer: 1 },
      { q: "谁介绍给团队？", options: ["同事", "上司", "朋友", "客户"], answer: 1 },
      { q: "对新工作感觉如何？", options: ["不喜欢", "很喜欢", "一般", "很紧张"], answer: 1 }
    ]
  },
  {
    id: 40, unitId: 25, title: "La cena de Navidad", level: "A2",
    description: "圣诞晚餐",
    icon: "🎄",
    sentences: [
      { es: "Toda la familia se reúne el 24 de diciembre.", zh: "全家人十二月二十四日聚在一起。" },
      { es: "Mi madre cocina pavo asado.", zh: "我妈妈做烤火鸡。" },
      { es: "Comemos tarde, a las diez.", zh: "我们吃得很晚，十点才吃。" },
      { es: "Después abrimos los regalos.", zh: "之后我们拆礼物。" },
      { es: "Es la mejor noche del año.", zh: "这是一年中最美好的夜晚。" }
    ],
    questions: [
      { q: "什么时候聚会？", options: ["12月24日", "12月25日", "12月31日", "1月1日"], answer: 0 },
      { q: "主菜是什么？", options: ["烤鸡", "烤火鸡", "烤鸭", "烤牛"], answer: 1 },
      { q: "吃完饭做什么？", options: ["睡觉", "看电视", "拆礼物", "回家"], answer: 2 }
    ]
  },
  {
    id: 41, unitId: 30, title: "Entrevista de trabajo", level: "A2",
    description: "工作面试",
    icon: "🤝",
    sentences: [
      { es: "Tengo una entrevista a las tres.", zh: "我三点有一个面试。" },
      { es: "Llego diez minutos antes.", zh: "我提前十分钟到。" },
      { es: "Llevo mi currículum y mi DNI.", zh: "我带着简历和身份证。" },
      { es: "El jefe me hace muchas preguntas.", zh: "老板问了我很多问题。" },
      { es: "Espero su respuesta la próxima semana.", zh: "我等他下周的回答。" }
    ],
    questions: [
      { q: "面试几点？", options: ["两点", "三点", "四点", "五点"], answer: 1 },
      { q: "带了什么？", options: ["简历和身份证", "简历和书", "礼物和简历", "手机和钥匙"], answer: 0 },
      { q: "什么时候得到答复？", options: ["今天", "明天", "下周", "下个月"], answer: 2 }
    ]
  },
  {
    id: 42, unitId: 19, title: "El tiempo hoy", level: "A2",
    description: "今天的天气",
    icon: "⛅",
    sentences: [
      { es: "Hoy hace buen tiempo.", zh: "今天天气好。" },
      { es: "El sol brilla en el cielo.", zh: "太阳在天上闪耀。" },
      { es: "La temperatura es de veinte grados.", zh: "气温二十度。" },
      { es: "No hay viento ni lluvia.", zh: "没有风也没有雨。" },
      { es: "Es un día perfecto para caminar.", zh: "是散步的好日子。" }
    ],
    questions: [
      { q: "今天天气怎么样？", options: ["不好", "很好", "很冷", "下雨"], answer: 1 },
      { q: "气温多少？", options: ["15度", "20度", "25度", "30度"], answer: 1 },
      { q: "适合做什么？", options: ["睡觉", "散步", "工作", "学习"], answer: 1 }
    ]
  },
  {
    id: 43, unitId: 15, title: "El examen de matemáticas", level: "A2",
    description: "数学考试",
    icon: "📝",
    sentences: [
      { es: "Mañana tenemos examen de matemáticas.", zh: "明天我们有数学考试。" },
      { es: "Estudio toda la tarde.", zh: "我整个下午在学习。" },
      { es: "Mi hermano me ayuda con los problemas.", zh: "我哥哥帮我做题。" },
      { es: "Estoy un poco nerviosa.", zh: "我有点紧张。" },
      { es: "Espero sacar buena nota.", zh: "我希望考好成绩。" }
    ],
    questions: [
      { q: "什么考试？", options: ["语文", "数学", "英语", "物理"], answer: 1 },
      { q: "谁帮她？", options: ["妈妈", "爸爸", "哥哥", "老师"], answer: 2 },
      { q: "她感觉如何？", options: ["很兴奋", "有点紧张", "很开心", "很饿"], answer: 1 }
    ]
  },
  {
    id: 44, unitId: 22, title: "Buscando piso", level: "A2",
    description: "找房子",
    icon: "🏠",
    sentences: [
      { es: "Busco un piso para alquilar.", zh: "我找一套房子租。" },
      { es: "Necesito dos habitaciones y una cocina.", zh: "我需要两间卧室和一个厨房。" },
      { es: "El precio no puede ser muy alto.", zh: "价格不能太高。" },
      { es: "Visito tres pisos esta semana.", zh: "这周我看了三套房。" },
      { es: "Espero encontrar uno pronto.", zh: "我希望很快找到。" }
    ],
    questions: [
      { q: "找什么样的房子？", options: ["买", "租", "卖", "建"], answer: 1 },
      { q: "需要几间卧室？", options: ["一间", "两间", "三间", "四间"], answer: 1 },
      { q: "看了几套房？", options: ["一套", "两套", "三套", "四套"], answer: 2 }
    ]
  },
  {
    id: 45, unitId: 18, title: "Concierto de música", level: "A2",
    description: "音乐会",
    icon: "🎵",
    sentences: [
      { es: "Esta noche hay un concierto en el parque.", zh: "今晚公园里有音乐会。" },
      { es: "Tocan música flamenca.", zh: "他们演奏弗拉门戈音乐。" },
      { es: "La guitarra suena muy bien.", zh: "吉他听起来很棒。" },
      { es: "Mucha gente baila y canta.", zh: "很多人跳舞唱歌。" },
      { es: "Lo pasamos muy bien.", zh: "我们玩得很开心。" }
    ],
    questions: [
      { q: "在哪里有音乐会？", options: ["剧院", "公园", "酒吧", "学校"], answer: 1 },
      { q: "演奏什么音乐？", options: ["摇滚", "流行", "弗拉门戈", "古典"], answer: 2 },
      { q: "大家做什么？", options: ["睡觉", "吃饭", "跳舞唱歌", "工作"], answer: 2 }
    ]
  },
  {
    id: 46, unitId: 28, title: "En el médico", level: "A2",
    description: "看医生",
    icon: "🏥",
    sentences: [
      { es: "No me siento bien hoy.", zh: "我今天不舒服。" },
      { es: "Tengo fiebre y dolor de cabeza.", zh: "我发烧头疼。" },
      { es: "Voy al médico por la mañana.", zh: "我上午去看医生。" },
      { es: "El doctor me receta unas pastillas.", zh: "医生给我开了些药片。" },
      { es: "Tengo que descansar tres días.", zh: "我得休息三天。" }
    ],
    questions: [
      { q: "她怎么了？", options: ["很开心", "发烧头疼", "很兴奋", "很饿"], answer: 1 },
      { q: "医生开了什么？", options: ["药片", "针", "草药", "糖"], answer: 0 },
      { q: "要休息几天？", options: ["一天", "两天", "三天", "一周"], answer: 2 }
    ]
  },
  {
    id: 47, unitId: 14, title: "Perdemos el tren", level: "A2",
    description: "错过了火车",
    icon: "🚂",
    sentences: [
      { es: "Llegamos tarde a la estación.", zh: "我们到车站晚了。" },
      { es: "El tren ya ha salido.", zh: "火车已经开走了。" },
      { es: "Tenemos que esperar el siguiente.", zh: "我们得等下一班。" },
      { es: "El próximo sale en una hora.", zh: "下一班一小时后开。" },
      { es: "Compramos un bocadillo mientras esperamos.", zh: "等的时候我们买了个三明治。" }
    ],
    questions: [
      { q: "为什么没赶上火车？", options: ["车坏了", "到晚了", "票丢了", "睡过头"], answer: 1 },
      { q: "下一班什么时候？", options: ["半小时后", "一小时后", "两小时后", "三小时后"], answer: 1 },
      { q: "等的时候买了什么？", options: ["水", "三明治", "杂志", "咖啡"], answer: 1 }
    ]
  },
  {
    id: 48, unitId: 30, title: "Reunión de trabajo", level: "A2",
    description: "工作会议",
    icon: "📊",
    sentences: [
      { es: "Tenemos una reunión a las diez.", zh: "我们十点有会议。" },
      { es: "El jefe presenta el proyecto nuevo.", zh: "老板介绍新项目。" },
      { es: "Todos tomamos notas.", zh: "大家都做笔记。" },
      { es: "Al final, hacemos preguntas.", zh: "最后我们提问。" },
      { es: "La reunión dura una hora.", zh: "会议开了一小时。" }
    ],
    questions: [
      { q: "会议几点？", options: ["九点", "十点", "十一点", "十二点"], answer: 1 },
      { q: "谁介绍新项目？", options: ["同事", "老板", "客户", "秘书"], answer: 1 },
      { q: "会议开了多久？", options: ["半小时", "一小时", "两小时", "三小时"], answer: 1 }
    ]
  },
  // ============ B1 新增故事 (id 49-56) ============
  {
    id: 49, unitId: 37, title: "Planes para el futuro", level: "B1",
    description: "未来计划",
    icon: "🚀",
    sentences: [
      { es: "Acabo de terminar la universidad.", zh: "我刚大学毕业。" },
      { es: "Quiero trabajar en una empresa internacional.", zh: "我想在国际公司工作。" },
      { es: "También me gustaría aprender chino.", zh: "我也想学中文。" },
      { es: "En cinco años, espero tener mi propia casa.", zh: "五年后，我希望有自己的房子。" },
      { es: "Sé que será difícil, pero no me rindo.", zh: "我知道会很难，但我不放弃。" }
    ],
    questions: [
      { q: "主人公刚完成什么？", options: ["中学", "大学", "硕士", "博士"], answer: 1 },
      { q: "五年后想要什么？", options: ["买车", "自己的房子", "结婚", "出国"], answer: 1 },
      { q: "他/她 还想学什么？", options: ["法语", "中文", "日语", "韩语"], answer: 1 }
    ]
  },
  {
    id: 50, unitId: 36, title: "Dieta saludable", level: "B1",
    description: "健康饮食",
    icon: "🥗",
    sentences: [
      { es: "Decidí cambiar mi alimentación.", zh: "我决定改变我的饮食。" },
      { es: "Como más frutas y verduras.", zh: "我吃更多水果和蔬菜。" },
      { es: "Bebo dos litros de agua al día.", zh: "我每天喝两升水。" },
      { es: "Ya no como tanta comida rápida.", zh: "我不再吃那么多快餐。" },
      { es: "Me siento con más energía.", zh: "我感到更有活力。" }
    ],
    questions: [
      { q: "决定改变什么？", options: ["工作", "饮食", "睡眠", "运动"], answer: 1 },
      { q: "每天喝多少水？", options: ["一升", "两升", "三升", "四升"], answer: 1 },
      { q: "感觉如何？", options: ["更累", "更有活力", "更饿", "更困"], answer: 1 }
    ]
  },
  {
    id: 51, unitId: 35, title: "Una decisión difícil", level: "B1",
    description: "艰难的决定",
    icon: "🤔",
    sentences: [
      { es: "Tengo que elegir entre dos ofertas de trabajo.", zh: "我得在两个工作机会中选择。" },
      { es: "Una es en Madrid, otra en Barcelona.", zh: "一个在马德里，一个在巴塞罗那。" },
      { es: "El sueldo de Madrid es mejor.", zh: "马德里的工资更好。" },
      { es: "Pero en Barcelona vive mi familia.", zh: "但我的家人在巴塞罗那。" },
      { es: "Es una decisión muy difícil.", zh: "这是个非常难的决定。" }
    ],
    questions: [
      { q: "两个工作在哪里？", options: ["马德里和巴塞罗那", "瓦伦西亚和塞维利亚", "巴黎和罗马", "伦敦和柏林"], answer: 0 },
      { q: "哪个工资好？", options: ["马德里", "巴塞罗那", "一样", "没说"], answer: 0 },
      { q: "家人在哪？", options: ["马德里", "巴塞罗那", "瓦伦西亚", "国外"], answer: 1 }
    ]
  },
  {
    id: 52, unitId: 38, title: "Negociando el precio", level: "B1",
    description: "讨价还价",
    icon: "💰",
    sentences: [
      { es: "Quiero comprar un coche de segunda mano.", zh: "我想买一辆二手车。" },
      { es: "El vendedor pide diez mil euros.", zh: "卖家要一万欧元。" },
      { es: "Yo le ofrezco ocho mil.", zh: "我出八千。" },
      { es: "Después de negociar, llegamos a nueve mil.", zh: "讨价还价后，我们达成九千。" },
      { es: "Firmamos el contrato y me lo llevo.", zh: "我们签了合同，我就开走了。" }
    ],
    questions: [
      { q: "买什么样的车？", options: ["新的", "二手的", "租的", "借的"], answer: 1 },
      { q: "原价多少？", options: ["八千欧", "九千欧", "一万欧", "一万二千欧"], answer: 2 },
      { q: "最后成交价？", options: ["八千欧", "九千欧", "一万欧", "一万一千欧"], answer: 1 }
    ]
  },
  {
    id: 53, unitId: 41, title: "Aprendiendo un idioma", level: "B1",
    description: "学习一门语言",
    icon: "🗣️",
    sentences: [
      { es: "Llevo un año estudiando español.", zh: "我学西语一年了。" },
      { es: "Al principio era muy difícil.", zh: "一开始非常难。" },
      { es: "Ahora puedo mantener conversaciones simples.", zh: "现在我能进行简单对话。" },
      { es: "Practico todos los días con una aplicación.", zh: "我每天用一个 App 练习。" },
      { es: "Mi meta es hablar con fluidez el próximo año.", zh: "我的目标是明年流利地说。" }
    ],
    questions: [
      { q: "学了多久？", options: ["半年", "一年", "两年", "三年"], answer: 1 },
      { q: "现在能做什么？", options: ["写小说", "简单对话", "做翻译", "教书"], answer: 1 },
      { q: "怎么练习？", options: ["看书", "用 App", "看电视剧", "找老师"], answer: 1 }
    ]
  },
  {
    id: 54, unitId: 39, title: "Escribiendo un email", level: "B1",
    description: "写邮件",
    icon: "📧",
    sentences: [
      { es: "Tengo que escribir un email importante.", zh: "我得写一封重要的邮件。" },
      { es: "Empiezo con un saludo formal.", zh: "我用正式称呼开头。" },
      { es: "Explico el motivo del mensaje.", zh: "我解释邮件的目的。" },
      { es: "Adjunto el documento solicitado.", zh: "我附上要求的文件。" },
      { es: "Antes de enviar, lo reviso dos veces.", zh: "发送前我检查两遍。" }
    ],
    questions: [
      { q: "邮件怎么开头？", options: ["亲", "正式称呼", "嘿", "你好"], answer: 1 },
      { q: "附上了什么？", options: ["照片", "文件", "视频", "链接"], answer: 1 },
      { q: "发送前做什么？", options: ["睡觉", "检查两遍", "吃饭", "听音乐"], answer: 1 }
    ]
  },
  {
    id: 55, unitId: 43, title: "Diferencias culturales", level: "B1",
    description: "文化差异",
    icon: "🌍",
    sentences: [
      { es: "Vivo en España desde hace dos años.", zh: "我在西班牙住了两年了。" },
      { es: "Al principio me extrañaban muchas cosas.", zh: "一开始很多事让我惊讶。" },
      { es: "Ahora entiendo la cultura local.", zh: "现在我理解当地文化了。" },
      { es: "Me gusta la siesta y las tapas.", zh: "我喜欢午睡和小吃。" },
      { es: "Echo de menos a mi familia, pero estoy feliz aquí.", zh: "我想念家人，但在这里很开心。" }
    ],
    questions: [
      { q: "在西班牙多久了？", options: ["一年", "两年", "三年", "四年"], answer: 1 },
      { q: "喜欢什么？", options: ["咖啡和面包", "午睡和小吃", "披萨和可乐", "米饭和面条"], answer: 1 },
      { q: "感觉如何？", options: ["想回家", "很开心", "很无聊", "很紧张"], answer: 1 }
    ]
  },
  {
    id: 56, unitId: 40, title: "Una emergencia", level: "B1",
    description: "紧急情况",
    icon: "🚨",
    sentences: [
      { es: "Anoche hubo un accidente en la calle.", zh: "昨晚街上出了事故。" },
      { es: "Una señora se cayó y se rompió la pierna.", zh: "一位女士摔倒了，摔断了腿。" },
      { es: "Llamamos a la ambulancia inmediatamente.", zh: "我们立刻叫了救护车。" },
      { es: "La ambulancia llegó en diez minutos.", zh: "救护车十分钟就到了。" },
      { es: "Ahora la señora está en el hospital.", zh: "现在那位女士在医院里。" }
    ],
    questions: [
      { q: "谁出事了？", options: ["小孩", "先生", "女士", "老人"], answer: 2 },
      { q: "怎么伤了？", options: ["摔断腿", "手臂受伤", "撞车", "晕倒"], answer: 0 },
      { q: "救护车多久到？", options: ["五分钟", "十分钟", "二十分钟", "半小时"], answer: 1 }
    ]
  },
  // ============ B2 新增故事 (id 57-60) ============
  {
    id: 57, unitId: 45, title: "Reflexión sobre la felicidad", level: "B2",
    description: "关于幸福的思考",
    icon: "💭",
    sentences: [
      { es: "Mucha gente cree que la felicidad está en el dinero.", zh: "很多人认为幸福在于金钱。" },
      { es: "Sin embargo, las investigaciones muestran otra cosa.", zh: "然而，研究显示了另一回事。" },
      { es: "Las relaciones personales son más importantes.", zh: "人际关系更重要。" },
      { es: "Pasar tiempo con la familia reduce el estrés.", zh: "和家人相处能减少压力。" },
      { es: "Quizás la verdadera riqueza está en los pequeños momentos.", zh: "也许真正的财富在于小瞬间。" }
    ],
    questions: [
      { q: "很多人认为幸福在于什么？", options: ["金钱", "名声", "权力", "健康"], answer: 0 },
      { q: "研究显示什么更重要？", options: ["工作", "金钱", "人际关系", "名声"], answer: 2 },
      { q: "真正的财富在于？", options: ["大房子", "跑车", "小瞬间", "高位"], answer: 2 }
    ]
  },
  {
    id: 58, unitId: 50, title: "El cambio climático", level: "B2",
    description: "气候变化",
    icon: "🌱",
    sentences: [
      { es: "El cambio climático es uno de los mayores retos actuales.", zh: "气候变化是当今最大挑战之一。" },
      { es: "Los glaciares se derriten a un ritmo alarmante.", zh: "冰川以惊人的速度融化。" },
      { es: "Cada persona puede contribuir con pequeñas acciones.", zh: "每个人都能用小行动做贡献。" },
      { es: "Reciclar, usar transporte público y ahorrar energía.", zh: "回收、乘坐公共交通、节约能源。" },
      { es: "El futuro del planeta depende de nuestras decisiones.", zh: "地球的未来取决于我们的决定。" }
    ],
    questions: [
      { q: "什么是当今最大挑战之一？", options: ["贫穷", "气候变化", "疾病", "战争"], answer: 1 },
      { q: "冰川怎么样？", options: ["在扩大", "在融化", "没变化", "在形成"], answer: 1 },
      { q: "个人能做什么？", options: ["什么都不做", "小行动", "只靠政府", "移民"], answer: 1 }
    ]
  },
  {
    id: 59, unitId: 47, title: "El poder de la lectura", level: "B2",
    description: "阅读的力量",
    icon: "📖",
    sentences: [
      { es: "Leer es una de las actividades más enriquecedoras.", zh: "阅读是最丰富的活动之一。" },
      { es: "Un buen libro nos transporta a otros mundos.", zh: "一本好书把我们带到其他世界。" },
      { es: "Desarrolla la empatía y el pensamiento crítico.", zh: "它培养同理心和批判性思维。" },
      { es: "Los grandes líderes han sido grandes lectores.", zh: "伟大的领导者都是伟大的读者。" },
      { es: "Dedicar treinta minutos al día marca la diferencia.", zh: "每天花三十分钟会有不同的效果。" }
    ],
    questions: [
      { q: "阅读被认为是什么？", options: ["浪费时间", "最丰富的活动", "无聊的", "困难的活动"], answer: 1 },
      { q: "阅读培养什么？", options: ["肌肉", "同理心和批判性思维", "财富", "权力"], answer: 1 },
      { q: "建议每天花多久阅读？", options: ["十分钟", "三十分钟", "一小时", "两小时"], answer: 1 }
    ]
  },
  {
    id: 60, unitId: 48, title: "Tradiciones que evolucionan", level: "B2",
    description: "演变的传统",
    icon: "🎭",
    sentences: [
      { es: "Las tradiciones no son estáticas, evolucionan con el tiempo.", zh: "传统不是静止的，它随时间演变。" },
      { es: "La forma de celebrar la Navidad ha cambiado mucho.", zh: "庆祝圣诞节的方式已经变了很多。" },
      { es: "Antes las familias se reunían físicamente.", zh: "以前家人会聚在一起。" },
      { es: "Ahora, muchos usan videollamadas para conectar.", zh: "现在很多人用视频通话联系。" },
      { es: "Lo importante sigue siendo el vínculo emocional.", zh: "重要的依然是情感联系。" }
    ],
    questions: [
      { q: "传统是怎么样的？", options: ["静止的", "演变的", "已消失", "不重要"], answer: 1 },
      { q: "以前怎么庆祝圣诞？", options: ["视频通话", "家人聚在一起", "独自过", "旅行"], answer: 1 },
      { q: "现在很多人用什么联系？", options: ["写信", "电话", "视频通话", "电报"], answer: 2 }
    ]
  }
];

// ==================== 情景对话 ====================
// 20 个真实场景对话
const CONVERSATIONS = [
  {
    id: 1, title: "在咖啡馆", icon: "☕", level: "A1",
    description: "点一杯咖啡",
    lines: [
      { speaker: "waiter", es: "¡Buenos días! ¿Qué desea?", zh: "早上好！您想要什么？" },
      { speaker: "user", prompt: true, options: [
        { text: "Un café con leche, por favor.", feedback: "¡Perfecto!" },
        { text: "Quiero un té verde.", feedback: "Muy bien." },
        { text: "La cuenta, por favor.", feedback: "Oh, ¿ya se va? Bueno, son 3 euros." }
      ]},
      { speaker: "waiter", es: "¿Algo de comer?", zh: "要吃点东西吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, un croissant.", feedback: "Excelente elección." },
        { text: "No, gracias.", feedback: "De acuerdo." }
      ]},
      { speaker: "waiter", es: "Son cinco euros en total.", zh: "一共五欧元。" },
      { speaker: "user", prompt: true, options: [
        { text: "Aquí tiene. ¡Gracias!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 2, title: "问路", icon: "🗺️", level: "A1",
    description: "问路去火车站",
    lines: [
      { speaker: "local", es: "¿Necesita ayuda?", zh: "需要帮忙吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, ¿dónde está la estación de tren?", feedback: "¡Buena pregunta!" },
        { text: "No, gracias.", feedback: "De acuerdo, buen día." }
      ]},
      { speaker: "local", es: "Siga recto dos cuadras y gire a la derecha.", zh: "直走两个街区，然后右转。" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Está lejos?", feedback: "No, unos cinco minutos a pie." },
        { text: "Muchas gracias.", feedback: "¡De nada!" }
      ]},
      { speaker: "local", es: "¡De nada! ¡Buen viaje!", zh: "不客气！旅途愉快！" }
    ]
  },
  {
    id: 3, title: "自我介绍", icon: "👋", level: "A1",
    description: "第一次见面",
    lines: [
      { speaker: "other", es: "¡Hola! ¿Cómo te llamas?", zh: "你好！你叫什么名字？" },
      { speaker: "user", prompt: true, options: [
        { text: "Me llamo Ana. ¿Y tú?", feedback: "¡Mucho gusto, Ana!" },
        { text: "Estoy bien, gracias.", feedback: "Bien, pero ¿cuál es tu nombre?" }
      ]},
      { speaker: "other", es: "Soy Pedro. ¿De dónde eres?", zh: "我叫佩德罗。你是哪里人？" },
      { speaker: "user", prompt: true, options: [
        { text: "Soy de China.", feedback: "¡Qué interesante!" },
        { text: "Tengo veinte años.", feedback: "Bien, pero te pregunté de dónde eres." }
      ]},
      { speaker: "other", es: "¡Bienvenido! ¿Hablas español?", zh: "欢迎！你说西语吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, un poco. Estoy aprendiendo.", feedback: "¡Genial! Yo te ayudo." },
        { text: "Muy bien, gracias.", feedback: "Me alegro por ti." }
      ]}
    ]
  },
  {
    id: 4, title: "购物", icon: "🛍️", level: "A1",
    description: "买水果",
    lines: [
      { speaker: "seller", es: "¡Buenos días! ¿En qué puedo ayudarle?", zh: "早上好！有什么可以帮您的？" },
      { speaker: "user", prompt: true, options: [
        { text: "Quiero manzanas, por favor.", feedback: "¿Cuántas?" },
        { text: "Hola, ¿cómo estás?", feedback: "Bien, gracias. ¿Qué necesita?" }
      ]},
      { speaker: "seller", es: "¿Cuántas manzanas quiere?", zh: "您想要几个苹果？" },
      { speaker: "user", prompt: true, options: [
        { text: "Tres, por favor.", feedback: "Son tres euros." },
        { text: "Diez.", feedback: "¡Wow, le gustan las manzanas!" }
      ]},
      { speaker: "seller", es: "Son tres euros. ¿Algo más?", zh: "三欧元。还要别的吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, naranjas también.", feedback: "Excelente." },
        { text: "No, gracias. ¡Adiós!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 5, title: "打电话", icon: "📞", level: "A2",
    description: "给朋友打电话",
    lines: [
      { speaker: "other", es: "¿Diga?", zh: "喂？" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Está María?", feedback: "Sí, soy yo. ¿Quién es?" },
        { text: "Hola, ¿hablo con Pedro?", feedback: "No, soy María." }
      ]},
      { speaker: "other", es: "Sí, soy yo. ¿Quién es?", zh: "是我。你是哪位？" },
      { speaker: "user", prompt: true, options: [
        { text: "Soy Ana, tu amiga.", feedback: "¡Hola, Ana! ¿Cómo estás?" },
        { text: "No quiero decir.", feedback: "¿Quién habla? ¿Hola?" }
      ]},
      { speaker: "other", es: "¡Hola, Ana! ¿Cómo estás?", zh: "你好，安娜！你好吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Muy bien, gracias. ¿Quieres salir esta tarde?", feedback: "¡Sí, me encanta la idea!" }
      ]}
    ]
  },
  {
    id: 6, title: "在餐厅", icon: "🍕", level: "A1",
    description: "点餐",
    lines: [
      { speaker: "seller", es: "¡Buenas noches! Aquí tiene el menú.", zh: "晚上好！这是菜单。" },
      { speaker: "user", prompt: true, options: [
        { text: "Gracias. ¿Qué recomienda?", feedback: "La paella es muy buena." },
        { text: "No quiero comer.", feedback: "¿Solo tomar algo entonces?" }
      ]},
      { speaker: "seller", es: "La paella es muy buena hoy.", zh: "今天的海鲜饭很好吃。" },
      { speaker: "user", prompt: true, options: [
        { text: "Quiero paella, por favor.", feedback: "Excelente elección." },
        { text: "¿Tienen pizza?", feedback: "Sí, tenemos margarita y pepperoni." }
      ]},
      { speaker: "seller", es: "¿Y para beber?", zh: "喝点什么？" },
      { speaker: "user", prompt: true, options: [
        { text: "Un vaso de agua, por favor.", feedback: "Enseguida." },
        { text: "Una cerveza.", feedback: "Muy bien, señor." }
      ]}
    ]
  },
  {
    id: 7, title: "问路", icon: "🗺️", level: "A2",
    description: "问路去图书馆",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Perdone, ¿dónde está la biblioteca?", feedback: "Siga recto dos calles." },
        { text: "Hola, ¿cómo te llamas?", feedback: "Me llamo Carlos. ¿Necesita ayuda?" }
      ]},
      { speaker: "other", es: "Siga recto dos calles y gire a la derecha.", zh: "直走两个街区，然后右转。" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Está lejos?", feedback: "A unos diez minutos caminando." },
        { text: "Muchas gracias, adiós.", feedback: "¡De nada!" }
      ]},
      { speaker: "other", es: "A unos diez minutos caminando.", zh: "走路大约十分钟。" },
      { speaker: "user", prompt: true, options: [
        { text: "Perfecto, muchas gracias.", feedback: "¡De nada, buen día!" }
      ]}
    ]
  },
  // ============ 新增对话 (id 8-20) ============
  {
    id: 8, title: "打招呼", icon: "👋", level: "A1",
    description: "认识新朋友",
    lines: [
      { speaker: "other", es: "¡Hola! ¿Cómo te llamas?", zh: "你好！你叫什么名字？" },
      { speaker: "user", prompt: true, options: [
        { text: "Me llamo Carlos. ¿Y tú?", feedback: "Encantado, yo soy Marta." },
        { text: "Estoy bien.", feedback: "Me alegro, pero ¿cuál es tu nombre?" }
      ]},
      { speaker: "other", es: "¿De dónde eres?", zh: "你是哪里人？" },
      { speaker: "user", prompt: true, options: [
        { text: "Soy de Madrid. ¿Y tú?", feedback: "Yo soy de Barcelona." },
        { text: "Tengo veinte años.", feedback: "Bien, pero te pregunté de dónde eres." }
      ]},
      { speaker: "other", es: "¡Mucho gusto, Carlos!", zh: "很高兴认识你，卡洛斯！" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Igualmente!", feedback: "¡Qué bien!" }
      ]}
    ]
  },
  {
    id: 9, title: "在面包店", icon: "🥖", level: "A1",
    description: "买面包",
    lines: [
      { speaker: "seller", es: "Buenos días, ¿qué desea?", zh: "早上好，您想要什么？" },
      { speaker: "user", prompt: true, options: [
        { text: "Una barra de pan, por favor.", feedback: "Algo más?" },
        { text: "No quiero nada.", feedback: "Bueno, hasta luego." }
      ]},
      { speaker: "seller", es: "¿Algo más? Tenemos bollos recién hechos.", zh: "还要别的吗？我们有新出炉的小面包。" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, dos bollos.", feedback: "Son tres euros en total." },
        { text: "No, solo el pan. Gracias.", feedback: "Un euro con cincuenta, por favor." }
      ]},
      { speaker: "seller", es: "Aquí tiene. ¡Buen día!", zh: "给您。祝您一天好！" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Gracias, igualmente!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 10, title: "问时间", icon: "🕐", level: "A1",
    description: "问现在几点",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Perdone, ¿qué hora es?", feedback: "Son las tres y cuarto." },
        { text: "¿Cómo se llama usted?", feedback: "Me llamo Pedro. ¿Necesita algo?" }
      ]},
      { speaker: "other", es: "Son las tres y cuarto.", zh: "三点一刻。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias.", feedback: "¡De nada!" },
        { text: "¿Y los minutos?", feedback: "Ya le dije, las tres y cuarto." }
      ]},
      { speaker: "other", es: "Llegas tarde, ¿no?", zh: "你迟到了，对吧？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, un poco. ¡Voy corriendo!", feedback: "¡Suerte!" }
      ]}
    ]
  },
  {
    id: 11, title: "介绍朋友", icon: "🤝", level: "A1",
    description: "把朋友介绍给别人",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Te presento a mi amigo Luis.", feedback: "¡Mucho gusto, Luis!" }
      ]},
      { speaker: "other", es: "¡Mucho gusto, Luis!", zh: "很高兴认识你，路易斯！" },
      { speaker: "user", prompt: true, options: [
        { text: "Luis es de México.", feedback: "¡Qué interesante!" },
        { text: "Luis tiene un perro.", feedback: "Bien, pero no pregunté eso." }
      ]},
      { speaker: "other", es: "¿Y a qué se dedica Luis?", zh: "路易斯是做什么工作的？" },
      { speaker: "user", prompt: true, options: [
        { text: "Es estudiante de medicina.", feedback: "¡Qué bien!" },
        { text: "Es muy alto.", feedback: "Sí, pero ¿a qué se dedica?" }
      ]}
    ]
  },
  {
    id: 12, title: "订外卖", icon: "🍕", level: "A1",
    description: "电话订餐",
    lines: [
      { speaker: "seller", es: "Pizza Roma, ¿en qué puedo ayudarle?", zh: "罗马披萨，有什么可以帮您？" },
      { speaker: "user", prompt: true, options: [
        { text: "Quiero pedir una pizza margarita.", feedback: "¿Tamaño grande o mediana?" },
        { text: "¿A qué hora cierran?", feedback: "A las once de la noche." }
      ]},
      { speaker: "seller", es: "¿Grande o mediana?", zh: "大号还是中号？" },
      { speaker: "user", prompt: true, options: [
        { text: "Grande, por favor.", feedback: "¿Y su dirección?" },
        { text: "Mediana.", feedback: "Muy bien, ¿dirección?" }
      ]},
      { speaker: "seller", es: "Su dirección, por favor.", zh: "请告诉我您的地址。" },
      { speaker: "user", prompt: true, options: [
        { text: "Calle Mayor, 25, segundo piso.", feedback: "Perfecto, treinta minutos." }
      ]},
      { speaker: "seller", es: "Treinta minutos. ¡Gracias!", zh: "三十分钟。谢谢！" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Muchas gracias!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 13, title: "找厕所", icon: "🚻", level: "A1",
    description: "在公共场所找厕所",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Perdone, ¿dónde están los servicios?", feedback: "Al fondo a la derecha." },
        { text: "¿Qué hora es?", feedback: "Las cinco, pero ¿qué necesita?" }
      ]},
      { speaker: "other", es: "Al fondo del pasillo, a la derecha.", zh: "走廊尽头，右边。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias.", feedback: "¡De nada!" }
      ]},
      { speaker: "other", es: "¿Necesita algo más?", zh: "还需要别的吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "No, eso es todo. ¡Adiós!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 14, title: "坐公交", icon: "🚌", level: "A1",
    description: "问公交线路",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "¿Este autobús va al centro?", feedback: "Sí, es la línea 24." },
        { text: "¿Cuánto cuesta?", feedback: "Un euro con cincuenta." }
      ]},
      { speaker: "other", es: "Sí, esta es la línea 24.", zh: "是的，这是24路。" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Cuántas paradas hasta el centro?", feedback: "Unas cinco paradas." },
        { text: "¿Tiene cambio?", feedback: "Sí, puede pagar con tarjeta." }
      ]},
      { speaker: "other", es: "Tiene que bajarse en la Plaza Mayor.", zh: "您得在大广场站下。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias por la ayuda.", feedback: "¡De nada, buen viaje!" }
      ]}
    ]
  },
  {
    id: 15, title: "在药房", icon: "💊", level: "A2",
    description: "买药",
    lines: [
      { speaker: "seller", es: "Buenos días, ¿en qué puedo ayudarle?", zh: "早上好，有什么可以帮您？" },
      { speaker: "user", prompt: true, options: [
        { text: "Tengo dolor de cabeza. ¿Tiene algo?", feedback: "Sí, este ibuprofeno le va bien." },
        { text: "¿A qué hora abren?", feedback: "A las nueve, ¿qué necesita?" }
      ]},
      { speaker: "seller", es: "¿Tiene receta médica?", zh: "您有医生处方吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "No, no tengo.", feedback: "Sin receta le puedo dar paracetamol." },
        { text: "Sí, aquí está.", feedback: "Perfecto, espere un momento." }
      ]},
      { speaker: "seller", es: "Tómelo cada ocho horas.", zh: "每八小时服用一次。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias. ¿Cuánto es?", feedback: "Cinco euros, por favor." }
      ]}
    ]
  },
  {
    id: 16, title: "退换货", icon: "🔄", level: "A2",
    description: "在商店退货",
    lines: [
      { speaker: "seller", es: "¿En qué puedo ayudarle?", zh: "有什么可以帮您？" },
      { speaker: "user", prompt: true, options: [
        { text: "Quiero devolver esta camisa.", feedback: "¿Tiene el ticket de compra?" },
        { text: "¿Tienen camisas azules?", feedback: "Sí, en la sección de caballeros." }
      ]},
      { speaker: "seller", es: "¿Cuál es el problema?", zh: "有什么问题？" },
      { speaker: "user", prompt: true, options: [
        { text: "Me queda pequeña.", feedback: "¿Quiere cambiarla por otra talla?" },
        { text: "No me gusta el color.", feedback: "Lo siento, no hacemos devoluciones por color." }
      ]},
      { speaker: "seller", es: "Le puedo hacer un cambio o un vale.", zh: "我可以给您换或给购物券。" },
      { speaker: "user", prompt: true, options: [
        { text: "Un vale, por favor.", feedback: "Aquí tiene, válido por seis meses." }
      ]}
    ]
  },
  {
    id: 17, title: "看电影", icon: "🎬", level: "A2",
    description: "和朋友约看电影",
    lines: [
      { speaker: "other", es: "¿Quieres ir al cine esta tarde?", zh: "今天下午你想去看电影吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Sí! ¿Qué película?", feedback: "La nueva de acción, dicen que es buena." },
        { text: "No puedo, tengo que estudiar.", feedback: "Otra vez entonces." }
      ]},
      { speaker: "other", es: "¿A qué hora te viene bien?", zh: "几点你方便？" },
      { speaker: "user", prompt: true, options: [
        { text: "A las seis está bien.", feedback: "Perfecto, nos vemos a las seis." },
        { text: "Muy tarde, ¿a las tres?", feedback: "A las tres hay función, pero es doblada." }
      ]},
      { speaker: "other", es: "Reservo las entradas por Internet.", zh: "我在网上订票。" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Genial! ¿Cuánto cuesta cada entrada?", feedback: "Ocho euros, yo invito." }
      ]}
    ]
  },
  {
    id: 18, title: "生病问候", icon: "🤒", level: "A2",
    description: "问候生病的同事",
    lines: [
      { speaker: "other", es: "¿Cómo te encuentras hoy?", zh: "你今天怎么样？" },
      { speaker: "user", prompt: true, options: [
        { text: "Mejor, gracias. Ya no tengo fiebre.", feedback: "¡Qué bien! Me alegro." },
        { text: "Muy mal, no puedo trabajar.", feedback: "Lo siento, ¿necesitas algo?" }
      ]},
      { speaker: "other", es: "¿Fuiste al médico?", zh: "你看医生了吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, me dio antibióticos.", feedback: "Bien, tómatelos a tiempo." },
        { text: "No, no hace falta.", feedback: "Mejor ve, no te descuides." }
      ]},
      { speaker: "other", es: "Te deseo una pronta recuperación.", zh: "祝你早日康复。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias por preocuparte.", feedback: "¡De nada! Cuídate." }
      ]}
    ]
  },
  {
    id: 19, title: "工作面试", icon: "💼", level: "B1",
    description: "正式工作面试",
    lines: [
      { speaker: "boss", es: "Buenos días, siéntese por favor.", zh: "早上好，请坐。" },
      { speaker: "user", prompt: true, options: [
        { text: "Buenos días, encantado de conocerle.", feedback: "El gusto es mío." },
        { text: "Hola, ¿qué tal?", feedback: "Bien, gracias. ¿Preparado?" }
      ]},
      { speaker: "boss", es: "Hábleme de su experiencia profesional.", zh: "请谈谈您的工作经验。" },
      { speaker: "user", prompt: true, options: [
        { text: "Llevo cinco años en el sector.", feedback: "Bien, ¿por qué dejó su último trabajo?" },
        { text: "Soy muy trabajador.", feedback: "Bien, pero cuénteme detalles." }
      ]},
      { speaker: "boss", es: "¿Por qué quiere trabajar con nosotros?", zh: "您为什么想和我们一起工作？" },
      { speaker: "user", prompt: true, options: [
        { text: "Admiro su empresa y su misión.", feedback: "Me gusta su respuesta." },
        { text: "Porque pagan bien.", feedback: "Entiendo, pero la motivación importa." }
      ]},
      { speaker: "boss", es: "Le llamaremos la próxima semana.", zh: "我们下周给您打电话。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias por su tiempo.", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 20, title: "处理投诉", icon: "📞", level: "B1",
    description: "电话处理客户投诉",
    lines: [
      { speaker: "client", es: "Buenos días, quiero poner una queja.", zh: "早上好，我想投诉。" },
      { speaker: "user", prompt: true, options: [
        { text: "Lo siento, ¿qué ha pasado?", feedback: "Pedí un producto y llegó roto." },
        { text: "No aceptamos quejas.", feedback: "Perdone, pero soy su cliente." }
      ]},
      { speaker: "client", es: "El producto llegó en mal estado.", zh: "产品到达时已经坏了。" },
      { speaker: "user", prompt: true, options: [
        { text: "Le enviaremos uno nuevo sin costo.", feedback: "Eso espero, gracias." },
        { text: "Tendrá que devolverlo usted.", feedback: "Eso no me parece justo." }
      ]},
      { speaker: "client", es: "Espero una solución rápida.", zh: "我希望快速解决。" },
      { speaker: "user", prompt: true, options: [
        { text: "Lo tendrá en 24 horas. Disculpe las molestias.", feedback: "De acuerdo, gracias." }
      ]}
    ]
  },
  // ============ 实用生活/旅行对话 (id 21-32) ============
  {
    id: 21, title: "兑换货币", icon: "💱", level: "A1",
    description: "在银行换钱",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Buenos días, quiero cambiar euros a dólares.", feedback: "¿Cuántos euros?" },
        { text: "¿A qué hora cierran?", feedback: "A las cinco." }
      ]},
      { speaker: "teller", es: "¿Cuánto desea cambiar?", zh: "您想换多少？" },
      { speaker: "user", prompt: true, options: [
        { text: "Quinientos euros.", feedback: "A hoy son quinientos cuarenta dólares." },
        { text: "No sé, ¿cuál es el cambio?", feedback: "Un euro es un dólar con ocho." }
      ]},
      { speaker: "teller", es: "Aquí tiene su dinero y el recibo.", zh: "给您钱和收据。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias. ¡Adiós!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 22, title: "在机场", icon: "✈️", level: "A1",
    description: "办理登机手续",
    lines: [
      { speaker: "agent", es: "Buenas tardes, ¿su pasaporte por favor?", zh: "下午好，请出示护照。" },
      { speaker: "user", prompt: true, options: [
        { text: "Aquí tiene. Voy a Madrid.", feedback: "Ventana o pasillo?" },
        { text: "¿A qué hora sale el vuelo?", feedback: "A las dieciocho treinta." }
      ]},
      { speaker: "agent", es: "¿Ventana o pasillo?", zh: "靠窗还是靠过道？" },
      { speaker: "user", prompt: true, options: [
        { text: "Ventana, por favor.", feedback: "Asiento 14A, aquí tiene su tarjeta." },
        { text: "Pasillo.", feedback: "Asiento 14C, buena elección." }
      ]},
      { speaker: "agent", es: "Su maleta va en la bodega.", zh: "您的行李要托运。" },
      { speaker: "user", prompt: true, options: [
        { text: "Vale, ¿dónde está la puerta?", feedback: "Puerta 23, zona B." }
      ]}
    ]
  },
  {
    id: 23, title: "试穿衣服", icon: "👗", level: "A1",
    description: "在服装店试衣间",
    lines: [
      { speaker: "seller", es: "¿En qué puedo ayudarle?", zh: "有什么可以帮您？" },
      { speaker: "user", prompt: true, options: [
        { text: "Quiero probarme este vestido.", feedback: "El probador está al fondo." },
        { text: "¿Tienen talla grande?", feedback: "Sí, le traigo una." }
      ]},
      { speaker: "seller", es: "¿Necesita otra talla?", zh: "需要其他尺码吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, una más grande por favor.", feedback: "Enseguida." },
        { text: "No, esta me queda bien.", feedback: "Perfecto, ¿se lo lleva?" }
      ]},
      { speaker: "seller", es: "La caja está por allí.", zh: "收银台在那边。" },
      { speaker: "user", prompt: true, options: [
        { text: "Gracias, voy a pagar.", feedback: "¡Buen día!" }
      ]}
    ]
  },
  {
    id: 24, title: "问价格", icon: "💵", level: "A1",
    description: "在市场问价",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "¿Cuánto cuesta el kilo de manzanas?", feedback: "Dos euros con cincuenta." },
        { text: "¿Dónde está el baño?", feedback: "Al fondo a la izquierda." }
      ]},
      { speaker: "seller", es: "Dos euros con cincuenta el kilo.", zh: "两欧五一公斤。" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Me da un kilo, por favor?", feedback: "Aquí tiene, son dos con cincuenta." },
        { text: "Muy caro, ¿hay más barato?", feedback: "Estas son las más frescas." }
      ]},
      { speaker: "seller", es: "¿Algo más?", zh: "还要别的吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "No, gracias. ¿Aceptan tarjeta?", feedback: "Sí, por supuesto." }
      ]}
    ]
  },
  {
    id: 25, title: "叫出租车", icon: "🚕", level: "A1",
    description: "电话叫车",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Buenos días, quiero pedir un taxi.", feedback: "¿A qué dirección?" },
        { text: "¿Cuánto cuesta al centro?", feedback: "Unos diez euros, depende." }
      ]},
      { speaker: "operator", es: "¿A qué dirección va?", zh: "您去哪？" },
      { speaker: "user", prompt: true, options: [
        { text: "A la Plaza Mayor, número cinco.", feedback: "El taxi llega en cinco minutos." },
        { text: "Al aeropuerto, por favor.", feedback: "Quince minutos, ¿muchas maletas?" }
      ]},
      { speaker: "operator", es: "El taxi llegará en cinco minutos.", zh: "出租车五分钟后到。" },
      { speaker: "user", prompt: true, options: [
        { text: "Perfecto, gracias.", feedback: "¡Buen viaje!" }
      ]}
    ]
  },
  {
    id: 26, title: "火车票", icon: "🎫", level: "A1",
    description: "在火车站买票",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Quiero un billete para Barcelona.", feedback: "¿Ida y vuelta?" },
        { text: "¿A qué hora sale el próximo tren?", feedback: "A las diez y cuarto." }
      ]},
      { speaker: "seller", es: "¿Solo ida o ida y vuelta?", zh: "单程还是往返？" },
      { speaker: "user", prompt: true, options: [
        { text: "Solo ida, por favor.", feedback: "Sesenta euros, ¿ventana o pasillo?" },
        { text: "Ida y vuelta.", feedback: "Cien euros, sale a las diez y cuarto." }
      ]},
      { speaker: "seller", es: "Su tren sale del andén tres.", zh: "您的车从三号站台出发。" },
      { speaker: "user", prompt: true, options: [
        { text: "Muchas gracias.", feedback: "¡Buen viaje!" }
      ]}
    ]
  },
  {
    id: 27, title: "找失物", icon: "🔍", level: "A1",
    description: "丢失物品",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "He perdido mi cartera. ¿Pueden ayudarme?", feedback: "¿Dónde la vio por última vez?" },
        { text: "¿Dónde está la comisaría?", feedback: "A dos calles de aquí." }
      ]},
      { speaker: "staff", es: "¿Dónde la vio por última vez?", zh: "您最后一次看见它在哪里？" },
      { speaker: "user", prompt: true, options: [
        { text: "En el autobús número 24.", feedback: "Voy a llamar a la central." },
        { text: "No estoy seguro.", feedback: "Describa la cartera, por favor." }
      ]},
      { speaker: "staff", es: "Aquí hay una encontrada esta mañana.", zh: "这里有一个今天早上找到的。" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Es la mía! Muchas gracias.", feedback: "¡Qué suerte! Pase a recogerla." }
      ]}
    ]
  },
  {
    id: 28, title: "营业时间", icon: "🕒", level: "A1",
    description: "问开门时间",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "¿A qué hora abren?", feedback: "A las diez de la mañana." },
        { text: "¿Están abiertos los domingos?", feedback: "Sí, de diez a dos." }
      ]},
      { speaker: "other", es: "Abrimos a las diez de la mañana.", zh: "我们上午十点开门。" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Y hasta qué hora?", feedback: "Hasta las nueve de la noche." },
        { text: "¿Cierran al mediodía?", feedback: "No, abrimos todo el día." }
      ]},
      { speaker: "other", es: "Cerramos a las nueve de la noche.", zh: "晚上九点关门。" },
      { speaker: "user", prompt: true, options: [
        { text: "Perfecto, gracias.", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 29, title: "退房", icon: "🛎️", level: "A1",
    description: "酒店退房",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Buenos días, quiero dejar la habitación.", feedback: "¿Su nombre, por favor?" },
        { text: "¿Puedo salir más tarde?", feedback: "Hasta las doce, sin recargo." }
      ]},
      { speaker: "receptionist", es: "¿Su nombre y número de habitación?", zh: "您贵姓和房间号？" },
      { speaker: "user", prompt: true, options: [
        { text: "Carlos López, habitación 305.", feedback: "Un momento, lo busco." },
        { text: "No recuerdo el número.", feedback: "No se preocupe, ¿su apellido?" }
      ]},
      { speaker: "receptionist", es: "Todo correcto. La cuenta son 180 euros.", zh: "都对的。一共180欧元。" },
      { speaker: "user", prompt: true, options: [
        { text: "¿Puedo pagar con tarjeta?", feedback: "Por supuesto." },
        { text: "Aquí tiene el efectivo.", feedback: "Gracias y buen viaje." }
      ]}
    ]
  },
  {
    id: 30, title: "饮料要求", icon: "🥤", level: "A1",
    description: "点饮料特殊要求",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Un café con leche, sin azúcar.", feedback: "Enseguida." },
        { text: "Un té, por favor.", feedback: "¿Con leche?" }
      ]},
      { speaker: "waiter", es: "¿Algo de comer?", zh: "要吃点什么吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Una tostada con tomate.", feedback: "Muy buena elección." },
        { text: "Solo la bebida, gracias.", feedback: "Vale, le traigo la cuenta." }
      ]},
      { speaker: "waiter", es: "Son cuatro euros en total.", zh: "一共四欧元。" },
      { speaker: "user", prompt: true, options: [
        { text: "Aquí tiene. ¡Gracias!", feedback: "¡Hasta luego!" }
      ]}
    ]
  },
  {
    id: 31, title: "拍照请求", icon: "📸", level: "A1",
    description: "请人帮忙拍照",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "Perdone, ¿me puede sacar una foto?", feedback: "¡Claro! ¿Con su móvil?" },
        { text: "¿Dónde está la fuente?", feedback: "Detrás de la catedral." }
      ]},
      { speaker: "other", es: "¡Claro! Sonría, por favor.", zh: "当然！请笑一笑。" },
      { speaker: "user", prompt: true, options: [
        { text: "Gracias. ¿Me la puede mandar?", feedback: "Deme su número." },
        { text: "Una más, por favor.", feedback: "A ver, una más." }
      ]},
      { speaker: "other", es: "Aquí tiene, salió muy bien.", zh: "给您，拍得很好。" },
      { speaker: "user", prompt: true, options: [
        { text: "¡Muchas gracias por su ayuda!", feedback: "¡De nada, buen día!" }
      ]}
    ]
  },
  {
    id: 32, title: "买纪念品", icon: "🎁", level: "A1",
    description: "在旅游点买礼物",
    lines: [
      { speaker: "user", prompt: true, options: [
        { text: "¿Tiene imanes de recuerdo?", feedback: "Sí, a tres euros cada uno." },
        { text: "¿Aceptan euros?", feedback: "Sí, y también tarjetas." }
      ]},
      { speaker: "seller", es: "¿Qué tipo busca?", zh: "您想要哪种？" },
      { speaker: "user", prompt: true, options: [
        { text: "Uno del Museo del Prado.", feedback: "Tengo varios, estos son bonitos." },
        { text: "Cualquiera, son para mis amigos.", feedback: "Le puedo hacer descuento por diez." }
      ]},
      { speaker: "seller", es: "¿Quiere una bolsa de regalo?", zh: "需要礼品袋吗？" },
      { speaker: "user", prompt: true, options: [
        { text: "Sí, por favor.", feedback: "Son veinticinco euros en total." }
      ]}
    ]
  }
];
