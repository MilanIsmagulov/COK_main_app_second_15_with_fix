window.dataLoaded = false;
    let title_of_eom = themeOfDEC;
    let methodRecomendation = ' ';
    let dropType = 2;
    let typeOfButtons = 'video'; // Можер быть "hexagon", "lightning", "tiles" или "video" или "custom";
    let timings = [ // если typeOfButtons = 'video'
        { time: 4.56, name: "Виды электротравм" }, // если typeOfButtons = 'video'
        { time: 11.22, name: "Классификация производственных помещений и причин электротравматизма" }, // если typeOfButtons = 'video'
        { time: 29, name: "Система стандартов безопасности труда" }, // если typeOfButtons = 'video'
        { time: 43, name: "Оказание первой помощи пострадавшим от электрического тока" }, // если typeOfButtons = 'video'
        { time: 66.44, name: "Электрозащитные средства и предохранительные приспособления" }, // если typeOfButtons = 'video'
        { time: 92.22, name: "Способы защиты от поражения электрическим током в  энергоустановках" } // если typeOfButtons = 'video'
    ]; // если typeOfButtons = 'video'
    let pathToVideo = './content/page_content/video_15.mp4'; // если typeOfButtons = 'video'
    let videoTitle2 = ' '; // если typeOfButtons = 'video'
    // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let customPage = ``; // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let background_type = dropType;
    let literaListEOM1 = 
    `«Менумеров, Р. М. Электробезопасность: учебное пособие для спо / Р. М. Менумеров. – 3-е изд., перераб. – Санкт-Петербург: Лань, 2024. – 220 с. – ISBN 978-5-8114-9912-0» 
    «Шевченко, М. В. Электробезопасность: учебное пособие / М. В. Шевченко, П. П. Проценко, Е. С. Дубкова. – Благовещенск: ДальГАУ, 2023. – 191 с. – ISBN 978-5-9642-0579-1» 
    «Электробезопасность: учебное пособие / И. А. Рахимжанова, А. Ф. Абдюкаева, В. А. Пушко, В. В. Пугачев. – Оренбург: Оренбургский ГАУ, 2022. – 129 с. – ISBN 978-5-6049001-0-9»
    «Электробезопасность работников электрических сетей: учебное пособие / Е. Е. Привалов, А. В. Ефанов, С. С. Ястребов, В. А. Ярош ; под редакцией Е. Е. Привалова. – Ставрополь: СтГАУ, 2018. – 296 с.»
    «Титова, Т. С. Электробезопасность в электроустановках напряжением до 1000 вольт: учебно-методическое пособие / Т. С. Титова, Е. Н. Быстров, О. И. Тихомиров. – Санкт-Петербург: ПГУПС, 2013. – 186 с. – ISBN 978-5-7641-0448-5»`
    // Список литературы
    const data = {
        "index_0":{
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "paragraph_1":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": " "},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ],
            "paragraph_2":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": false},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "}
            ],
            "paragraph_3":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "},
                {"text":" "}
            ],
            "paragraph_4":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text":" "},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ]
        },
        "index_1":{
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            "paragraph_1":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": " "},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ],
            "paragraph_2":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"text": false},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "}
            ],
            "paragraph_3":[
                {"subtitle2lvl": "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"image": true, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "},
                {"text":" "}
            ],
        },
    };
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;