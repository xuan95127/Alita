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
      { es: "Hay un gato verde en el jardín.", zh: "花园里有一只绿色的猫。" }
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
    id: 16,
    title: "下雨天",
    emoji: "🌧️",
    level: "入门",
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
    id: 17,
    title: "在公园里",
    emoji: "🌳",
    level: "入门",
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
    id: 18,
    title: "家庭晚餐",
    emoji: "🍽️",
    level: "进阶",
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
  }
];

// ==================== 情景对话 ====================
// 5 个真实场景对话
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
  }
];
