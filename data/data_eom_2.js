window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Ознакомьтесь с техникой безопасности при работах в электроустановках.",
        "step_of_popup": "Ознакомьтесь с техникой безопасности при работах в электроустановках.",
        "paragraph_1":[
            {"text2": "<b class='blue_header big_rectangle'>1. Подготовка к работе</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>Перед началом работ ознакомьтесь с проектной документацией и инструкциями по эксплуатации электроустановок.</li>
                        <li>Проведите инструктаж работников, объяснив порядок выполнения работ и меры безопасности.</li>
                        <li>Убедитесь, что все необходимые средства индивидуальной защиты (СИЗ) в исправном состоянии.</li>
                    </ol>
            `},
            {"text2": "<b class='blue_header big_rectangle'>2. Индивидуальная защита</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>Используйте СИЗ: диэлектрические перчатки, резиновую обувь, защитные каски и очки.</li>
                        <li>Обеспечьте наличие средств для оказания первой помощи.</li>
                    </ol>
            `},
            {"text2": "<b class='blue_header big_rectangle'>3. Электробезопасность</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>Перед началом работ отключите электроустановку от сети и выполните её заземление.</li>
                        <li>Используйте только исправные инструменты и оборудование с изоляцией, соответствующей требованиям.</li>
                    </ol>
            `},
            {"text2": "<b class='blue_header big_rectangle'>4. Работы под напряжением</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>Выполняйте работы под напряжением только при наличии специального разрешения и под контролем ответственного лица.</li>
                        <li>Используйте диэлектрические инструменты и средства защиты при работе под напряжением.</li>
                    </ol>
            `},
            {"text2": "<b class='blue_header big_rectangle'>5. Контроль за работой оборудования</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>Регулярно проверяйте состояние электрооборудования и систем защиты.</li>
                        <li>Не допускайте перегрева оборудования и проводников, следите за состоянием изоляции.</li>
                    </ol>
            `},
            {"text2": "<b class='blue_header big_rectangle'>6. Порядок действий в экстренных ситуациях</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>При обнаружении неисправностей немедленно прекратите работу и сообщите об этом ответственному лицу.</li>
                        <li>В случае аварии или поражения электротоком следуйте установленным процедурам оказания первой помощи и вызова экстренных служб.</li>
                    </ol>
            `},
            {"text2": "<b class='blue_header big_rectangle'>7. Окончание работ</b>"},
            {"text2":  `
                    <ol style='font-size: clamp(16px, 2vw, 25px); margin-left: 50px;'>
                        <li>После завершения работ убедитесь в полной их безопасности и отключите все инструменты.</li>
                        <li>Зафиксируйте выполненные работы в журнале учета.</li>
                    </ol>
            `},
        ],
    },
    "index_2":{
        "subtitle": "Установите правильный порядок действий при подготовке к работе в электроустановках.",
        "step_of_popup": "Установите правильный порядок действий при подготовке к работе в электроустановках.",
        "test":[
            {"type": 3},
            {"image": false, "image_path": "./content/video/test_video.mp4"},
            {"answers": [
                "Ознакомиться с проектной документацией и инструкциями по эксплуатации электроустановок",
                "Провести инструктаж работников",
                "Убедиться в наличии СИЗ",
                "Отключить электроустановку от сети и заземлить"
            ]}
        ],
    },
    "index_3":{
        "subtitle": "Изучите классификацию факторов, влияющих на исход поражения человека электрическим током.",
        "step_of_popup": "Изучите классификацию факторов, влияющих на исход поражения человека электрическим током.",
        "paragraph_1":[
            {"text":  `
                <b>Поражение электрическим током</b> – это серьезная опасность, с которой могут столкнуться работники, осуществляющие деятельность в электроустановках. Исход поражения может варьироваться от легкого шока до тяжелых травм или летального исхода. Для понимания того, как различные факторы влияют на последствия удара током, необходимо рассмотрение нескольких ключевых категорий. <br><br>
                <b class='blue_header'>
                    Классификации факторов, влияющих на исход поражения человека электрическим током <br><br>
                </b>
                <table class="iksweb" style='width: 100%'>
                    <tbody>
                        <tr>
                            <th colspan="2">1. Параметры электрической сети</th>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Величина напряжения сети</td>
                            <td>Чем выше напряжение, тем больше опасность</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Род и частота электрического тока</td>
                            <td>Переменный ток (AC) опаснее постоянного (DC)</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Электрическое сопротивление изоляции фаз сети относительно земли</td>
                            <td>Низкое сопротивление изоляции увеличивает риск поражения</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Емкость фаз сети относительно земли</td>
                            <td>Большая емкость может увеличить ток утечки, повышая опасность</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Режим нейтрали электрической сети</td>
                            <td>Режим нейтрали влияет на распределение тока в случае короткого замыкания</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Режим работы электрической сети</td>
                            <td>Режимы работы сети, такие как пуск, остановка, аварийные режимы, могут создавать повышенную опасность</td>
                        </tr>
                    </tbody>
                </table>
            `},
        ],
        "paragraph_2":[
            {"text":  `
                <table class="iksweb" style='width: 100%'>
                    <tbody>
                        <tr>
                            <th colspan="2">2. Индивидуальные свойства человека</th>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Состояние здоровья</td>
                            <td>Сердечно-сосудистые заболевания, проблемы с нервной системой увеличивают риск</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Психофизическое состояние</td>
                            <td>Усталость, стресс, употребление алкоголя или наркотиков снижают концентрацию и реакцию</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Фактор внимания</td>
                            <td>Отвлечение внимания может привести к неосторожным действиям</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Квалификация</td>
                            <td>Отсутствие необходимых знаний и навыков работы с электроустановками повышает риск</td>
                        </tr>
                    </tbody>
                </table>
            `},
        ],
        "paragraph_3":[
            {"text":  `
                <table class="iksweb" style='width: 100%'>
                    <tbody>
                        <tr>
                            <th colspan="2">3. Параметры цепи поражения</th>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Величина напряжения прикосновения</td>
                            <td>Напряжение, которое человек может получить при прикосновении к токоведущим частям</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Величина электрического тока, проходящего через тело</td>
                            <td>Сила тока определяет степень тяжести поражения</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Продолжительность воздействия тока</td>
                            <td>Чем дольше воздействие, тем тяжелее последствия</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Электрическое сопротивление средств защиты, обуви, пола</td>
                            <td>Электрическое сопротивление обуви, пола и других защитных средств влияет на величину тока, проходящего через тело</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Электрическое сопротивление тела человека</td>
                            <td>Сопротивление тела человека зависит от его состояния здоровья, влажности кожи и других факторов</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Путь тока через тело человека</td>
                            <td>Путь тока влияет на степень поражения органов и систем</td>
                        </tr>
                    </tbody>
                </table>
            `},
        ],
        "paragraph_4":[
            {"text":  `
                <table class="iksweb" style='width: 100%'>
                    <tbody>
                        <tr>
                            <th colspan="2">4. Условия окружающей среды</th>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Атмосферные условия</td>
                            <td>Влажность, температура, атмосферное давление могут повлиять на сопротивление тела и опасность поражения</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Концентрация в воздухе СО и др. веществ</td>
                            <td>Наличие вредных веществ в воздухе может ухудшить состояние пострадавшего и затруднить оказание помощи</td>
                        </tr>
                        <tr>
                            <td style='font-weight: 700'>Электрическое и магнитное поле</td>
                            <td>Наличие сильных электрических и магнитных полей может увеличить опасность</td>
                        </tr>
                    </tbody>
                </table>
            `},
        ],
        "paragraph_5":[
            {"text": false},
            {"image": true, "image_path": "./content/shema_15_3.png", "img_sign": "Схема факторов, влияющих на исход поражения человека электрическим током"}
        ],
        "paragraph_6":[
            {"text": "Схема показывает, что исход поражения человека электрическим током зависит от комплексного воздействия различных факторов, и важно учитывать все эти факторы для минимизации риска."},
        ],
    },
    "index_4":{
        "subtitle": "Установите соответствие между факторами, влияющими на исход поражения электрическим током и их параметрами.",
        "step_of_popup": "Установите соответствие между факторами, влияющими на исход поражения электрическим током и их параметрами.",
        "test": [{
            "type": 7
        }, {
            "anwserArr2": [
                "Величина напряжения сети",
                "Род и частота электрического тока",
                "Емкость фаз сети относительно земли",
                "Режим нейтрали электрической сети",
                "Режим работы электрической сети",

                "Электрическое и магнитное поля",
                "Величина напряжения прикосновения",
                "Путь тока через тело человека",
                "Продолжительность воздействия тока",
                "Величина электрического тока, проходящего через тело",
            ]
        }, {
            "answersInCol": [[
                "Величина напряжения сети",
                "Род и частота электрического тока",
                "Емкость фаз сети относительно земли",
                "Режим нейтрали электрической сети",
                "Режим работы электрической сети",
            ], 
            [
                "Электрическое и магнитное поля",
                "Величина напряжения прикосновения",
                "Путь тока через тело человека",
                "Продолжительность воздействия тока",
                "Величина электрического тока, проходящего через тело",
            ]
            ]
        }, {
            "columns": ['Пераметры электрической сети', 'Праметры цепи поражения']
        }],
    },
    "index_5":{
        "subtitle": "Какие из следующих факторов влияют на исход поражения человека электрическим током. <b class='black_sub'>(Выберите все правильные ответы)</b>",
        "step_of_popup": "Какие из следующих факторов влияют на исход поражения человека электрическим током.",
        "test": [{
            "type": 1
        }, {
            "answers": [
                "Напряжение тока", 
                "Влажность среды", 
                "Сопротивление кожи", 
                "Длительность воздействия тока", 
                "Технические характеристики используемого электротехнического оборудования", 
                "Температура окружающего воздуха"
            ]
        }, {
            "correct_answer": [0,1,2,3,4]
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }],
    },
    "index_6":{
        "subtitle": "Ознакомьтесь с правилами соблюдения собственной безопасности на месте происшествия.",
        "step_of_popup": "Ознакомьтесь с правилами соблюдения собственной безопасности на месте происшествия.",
        "paragraph_1":[
            {"text2": `
                <style>
                    * {
                        font-family: 'Montserrat', sans-serif;
                    }
                    .six_fifteen_wrapper_custom {
                        display: flex;
                        min-height: 500px !important;
                    }
                    .six_fifteen_number_custom {
                        font-size: 60px;
                        font-weight: 900;
                        padding: 15px;
                        color: #6c788a;
                    }
                    .six_fifteen_number_custom:nth-child(even) {
                        color: #44546a;
                    }
                    .six_fifteen_central_wrapper {
                        margin-right: 15px;
                        max-width: 1000px;
                    }
                    .six_fifteen_underline_custom {
                        height: 75px;
                        border-bottom: 1px solid #000000;
                    }
                    .six_fifteen_text_custom p{
                        margin-top: 25px;
                        margin-bottom: 25px;
                    }
                    .six_fifteen_warning_custom {
                        font-size: clamp(18px, 1.5vw, 25px) !important;
                        background-color: #ffcacd;
                        padding: 25px;
                        border-radius: 2px;
                    }
                    .six_fifteen_warning_custom *{
                        font-size: clamp(18px, 1.5vw, 25px) !important;
                    }
                    .six_fifteen_header_custom {
                        font-weight: 800;
                        margin-bottom: 15px;
                        color: #c00101;
                    }
                    .six_fifteen_image_wrapper{
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .six_fifteen_image_wrapper img{
                        max-height: 550px;
                        filter: drop-shadow(7px 19px 37px #00000015);
                    }
                    .without_header {
                        padding-top: 0;
                    }
                    .six_fifteen_left_side{
                        display: flex;
                    }
                    @media(max-width: 1080px){
                        .six_fifteen_image_wrapper{
                            width: 100%;
                        }
                        .six_fifteen_wrapper_custom{
                            flex-direction: column-reverse;
                        }
                        .six_fifteen_second{
                            flex-direction: column;
                        }
                        .six_fifteen_number_custom{
                            margin-left: -25px;
                        }
                    }
                    @media(max-width: 670px){
                        .six_fifteen_image_wrapper img{
                            max-height: 350px;
                        }
                    }
                    @media(max-width: 370px){
                        .six_fifteen_image_wrapper img{
                            max-height: 300px;
                        }
                        .six_fifteen_number_custom{
                            padding: 5px;
                        }
                        .six_fifteen_number_custom{
                            font-size: 40px;
                        }
                    }
                </style>
                <div class="six_fifteen_wrapper_custom">
                    <div class="six_fifteen_left_side">
                        <div class="six_fifteen_number_custom">01</div>
                        <div class="six_fifteen_central_wrapper">
                            <div class="six_fifteen_underline_custom"> </div>
                            <div class="six_fifteen_text_custom">
                                <p>Если есть вероятность возгорания, взрыва, обвала и прочего, что может угрожать жизни – вынести пострадавшего из очага возможного возгорания, взрыва или обвала</p>
                            </div>
                            <div class="six_fifteen_warning_custom">
                                <div class="six_fifteen_header_custom">ВНИМАНИЕ</div>
                                <i>В очаге обрушения, пожара или взрыва имеют право работать только профессиональные спасатели, пожарные и личный состав спецподразделений. Лицам других профессий запрещено входить в опасную зону и находиться там по своей инициативе.</i>
                            </div>
                        </div>
                    </div>
                    <div class="six_fifteen_image_wrapper"><img src="./content/15_6_1.png" alt="1"></div>
                </div>
                <div class="six_fifteen_wrapper_custom six_fifteen_second">
                    <div class="six_fifteen_image_wrapper"><img src="./content/15_6_2.png" alt="1"></div>
                    <div class="six_fifteen_left_side">
                        <div class="six_fifteen_number_custom">02</div>
                        <div class="six_fifteen_central_wrapper">
                            <div class="six_fifteen_underline_custom"> </div>
                            <div class="six_fifteen_text_custom">
                                <p>Если пострадавший лежит в зоне шагового напряжения или касается электрического провода, то приближаться к нему можно только в диэлектрических ботах или «гусиным шагом». Прикасаться к пострадавшему можно только после полного освобождения его от действия электрического тока</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="six_fifteen_wrapper_custom">
                    <div class="six_fifteen_left_side">
                        <div class="six_fifteen_number_custom">03</div>
                        <div class="six_fifteen_central_wrapper">
                            <div class="six_fifteen_underline_custom"> </div>
                            <div class="six_fifteen_text_custom">
                                <p>Когда в замкнутом пространстве ощущается запах газа или у пострадавшего отмечается неестественно розовый цвет кожи, необходимо вынести его из опасной зоны или разбить окна</p>
                            </div>
                            <div class="six_fifteen_warning_custom">
                                <div class="six_fifteen_header_custom">ВНИМАНИЕ</div>
                                <i>Недопустимо пользоваться зажигалками или спичками, включать электрооборудование или наносить удары металлическими предметами в любом загазованном пространстве.</i>
                            </div>
                            <div class="six_fifteen_warning_custom without_header">
                                <i>Прежде чем оказывать первую помощь необходимо согласно требованиям служебных инструкций обеспечить собственную безопасность.</i>
                            </div>
                        </div>
                    </div>
                    <div class="six_fifteen_image_wrapper"><img src="./content/15_6_3.png" alt="1"></div>
                </div>
            `},
        ],
    },
    "index_7":{
        "subtitle": "Что необходимо сделать перед тем, как оказывать первую помощь в ситуации с возможным возгоранием, взрывом или обвалом.",
        "step_of_popup": "Что необходимо сделать перед тем, как оказывать первую помощь в ситуации с возможным возгоранием, взрывом или обвалом.",
        "test": [{
            "type": 1
        }, {
            "answers": [
                "Немедленно вызвать скорую помощь", 
                "Убедиться в безопасности для себя и окружающих, прежде чем войти в опасную зону", 
                "Сразу приступить к оказанию первой помощи"
            ]
        }, {
            "correct_answer": [1]
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }],
    },
    "index_8":{
        "subtitle": "Изучите правила освобождения пострадавшего от действия электрического тока под напряжением и эвакуации пострадавшего из зоны действия электрического тока до 1000В.",
        "step_of_popup": "Изучите правила освобождения пострадавшего от действия электрического тока под напряжением и эвакуации пострадавшего из зоны действия электрического тока до 1000В.",
        "paragraph_1":[
            {"text2": `
                <style>
                    .eight_fifteen_wrapper_custom{
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;
                    }
                    .eight_fifteen_element{
                        margin: 25px;
                        width: 400px;
                    }
                    .eight_fifteen_element p{
                        text-align: start;
                    }
                    .eight_fifteen_icon{
                        height: 100px;
                        margin-bottom: 10px;
                    }
                    .eight_fifteen_icon img{
                        height: 100%;
                    }
                    .eight_fifteen_element i{
                        font-size: clamp(16px, 1.5vw, 20px);
                    }
                </style>
                <div class="eight_fifteen_wrapper_custom">
                    <div class="eight_fifteen_element">
                        <div class="eight_fifteen_icon"><img src="./content/15_8_1.png" alt="1"></div>
                        <p><b class="blue_header">1. </b>Надеть диэлектрические перчатки.</p>
                    </div>
                    <div class="eight_fifteen_element">
                        <div class="eight_fifteen_icon"><img src="./content/15_8_2.png" alt="1"></div>
                        <p><b class="blue_header">2. </b>Отключить электрооборудование.</p>
                    </div>
                    <div class="eight_fifteen_element">
                        <div class="eight_fifteen_icon"><img src="./content/15_8_3.png" alt="1"></div>
                        <p><b class="blue_header">3. </b>Освободить пострадавшего от контакта с электрооборудованием или электрическими проводами.</p>
                        <i>Во избежание поражения током за пострадавшего следует браться только одной рукой и только за сухую одежду</i>
                    </div>
                    <div class="eight_fifteen_element">
                        <div class="eight_fifteen_icon"><img src="./content/15_8_4.png" alt="1"></div>
                        <p><b class="blue_header">4. </b>Подложить под пострадавшего диэлектрический коврик.</p>
                        <i>Если в пределах видимости находятся все необходимые СИЗ , обязательно воспользоваться ими. Помните о собственной безопасности! Нельзя браться за мокрую одежду или открытые участки тела пострадавшего</i>
                    </div>
                </div>
            `},
        ],
        "paragraph_2":[
            {"text": "Под ЛЭП пострадавшего следует оттащить не менее чем на 8 метров от лежащего на земле провода. В помещениях достаточно переместить пострадавшего не менее чем на 4 метра от источника тока."},
        ],
    },
    "index_9":{
        "subtitle": "Изучите правила освобождения пострадавшего от действия электрического тока при напряжении cвыше 1000 В и эвакуации пострадавшего из зоны действия электрического тока.",
        "step_of_popup": "Изучите правила освобождения пострадавшего от действия электрического тока при напряжении cвыше 1000 В и эвакуации пострадавшего из зоны действия электрического тока.",
        "paragraph_1":[
            {"text2": `
                    <style>
                    :root{
                        --main-blue-color-custom: #0070c0;
                        --main-sea-color-custom: #3cba94;
                        --main-box-shadow-custom: 1px 3px 15px 5px rgba(0,0,0,0.35);
                        --main-height: 180px;
                        --clip-path-border-radius: 15px;
                        --pl-pr-htc-custom: clamp(15px, 3vw, 60px);
                        --main-custom-list-height: 200px;
                        --marker-size: 150px;
                    }
                    *{
                        margin: 0;
                        padding: 0;
                        font-family: 'Montserrat', sans-serif;
                    }
                    html{
                        height: 100% !important;
                    }
                    body {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        height: 100%;
                    }
                    body::-webkit-scrollbar {
                        width: 10px;
                    }
                    body::-webkit-scrollbar-track {
                        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
                        background-color: #f9f9fd;
                    }
                    body::-webkit-scrollbar-thumb {
                        background-color: #356184;
                        background: linear-gradient(180deg, #00c6fb, #005bea);
                    }
                    h3{
                        margin-bottom: 15px;
                    }
                    p{
                        text-align: justify;
                        text-indent: 0%;
                        margin-bottom: 15px;
                    }
                    ul li{
                        margin-bottom: 20px;
                    }
                    ol{
                        margin-left: 3vw;
                    }
                    ol li::marker{
                        font-weight: 700;
                    }
                    dialog {
                        position: absolute;
                        text-align: end;
                        left: 25%;
                        top: 5%;
                        width: 50%;
                        height: 100%;
                        border-radius: 20px; /* Закругленные углы */
                        padding: 20px; /* Отступы внутри окна */
                        border: none; /* Убираем стандартные границы */
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Тень для глубины */
                        height: 80%;
                    }
                    dialog::-webkit-scrollbar {
                        width: 0px;
                    }
                    dialog button {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;
                        margin: 10px;
                        width: 50px;
                        height: 50px;
                        min-width: 50px;
                        min-height: 50px;
                        max-width: 50px;
                        max-height: 50px;
                        border: 0;
                        background-color: #99999960;
                        border-radius: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1001;
                    }
                    dialog::-webkit-scrollbar-track {
                        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
                        background-color: #f9f9fd;
                    }
                    dialog::-webkit-scrollbar-thumb {
                        background-color: #356184;
                        background: linear-gradient(180deg, #00c6fb, #005bea);
                    }
                    dialog p{
                        width: 95% !important;
                        height: 95%;
                        text-align: center;
                    }
                    dialog p img{
                        height: 100%;
                        width: 100% !important;
                        max-width: 700px;
                        object-fit: contain;
                    }
                    dialog::backdrop {
                        background: rgba(0, 0, 0, 0.1); /* Полупрозрачный фон для модального окна */
                    }
                    main{
                        display: grid;
                        justify-items: center;
                        grid-template-columns: repeat(3, 1fr);
                        width: 100%;
                    }
                    section {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        
                    }
                    section img{
                        width: 40%;
                        margin-left: -50px;
                        margin-bottom: 15px;
                    }
                    .number_fifteen_wrapper_custom{
                        position: relative;
                        width: 450px;
                        margin: 50px;
                        margin-bottom: 50px;
                        margin-top: 50px;
                        border-radius: 25px;
                        min-height: 475px;
                        background-color: #f2f2f2;
                        box-shadow: var(--main-box-shadow-custom);
                    }
                    .number_fifteen_wrapper_custom *{
                        user-select: none;
                    }
                    .number_fifteen_custom{
                        position: absolute;
                        top: -60px;
                        left: -30px;
                        font-size: 150px !important;
                        font-weight: 900;
                    }
                    .header_fifteen_custom{
                        text-align: center;
                        width: 80%;
                        font-weight: 700;
                        margin-bottom: 35px;
                    }
                    .grey_header_fifteen_custom {
                        font-size: clamp(16px, 3vw, 27px) !important;
                    }
                    .text_wrapper_fifteen_custom{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 35px;
                        padding: 15px;
                        height: calc(100% - 100px);
                        border-radius: 15px;
                        border: 1px solid var(--color);
                    }
                    .text_fifteen_custom{
                        text-align: start;
                        font-size: clamp(16px, 3vw, 22px) !important;
                        color: #000 !important;
                    }
                    .text_fifteen_custom i{
                        font-size: clamp(16px, 3vw, 22px) !important;
                    }
                    .header_fifteen_custom{
                        font-size: 20px !important;
                    }
                    .first_color{
                        color: #0070c0 !important;
                        --color: #0070c0 !important;
                    }
                    .second_color{
                        color: #2e8e70;
                        --color: #2e8e70;
                    }
                    .third_color{
                        color: #24a4bf;
                        --color: #24a4bf;
                    }
                    .fourth_color{
                        color: #3cba94;
                        --color: #3cba94;
                    }
                    .fifth_color{
                        color: #44546a;
                        --color: #44546a;
                    }
                    .sixth_color{
                        color: #ff0000;
                        --color: #ff0000;
                    }
                    .seventh_color{
                        color: #8497b0;
                        --color: #8497b0;
                    }
                    .text_fifteen_section_custom{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .text_fifteen_section_custom ul{
                        text-decoration: dotted !important;
                        margin-left: 50px;
                    }   
                    .text_fifteen_section_custom ul li, .text_fifteen_section_custom ul li b{
                        font-size: 20px !important;
                    }
                    @media (max-width: 1650px) {
                        main{
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 1100px) {
                        main{
                            grid-template-columns: repeat(1, 1fr);
                        }
                        section{
                            flex-direction: column;
                        }
                        section img {
                            width: 100%;
                        }
                    }
                    @media (max-width: 525px) {
                        .number_fifteen_wrapper_custom{
                            width: calc(100% - 75px);
                            margin-left: 10px;
                            margin-right: 10px;
                        }
                        .number_fifteen_custom{
                            top: -50px;
                            left: -30px;
                            font-size: 100px !important;
                            margin: 15px !important;
                        }
                        .header_fifteen_custom{
                            margin-bottom: 15px;
                        }
                        .highter_custom{
                            height: 560px !important;
                        }
                    }
                </style>
                <main>
                    <div class="number_fifteen_wrapper_custom">
                        <div class="number_fifteen_custom first_color">1</div>
                        <div class="text_wrapper_fifteen_custom first_color">
                            <div class="header_fifteen_custom">Убедитесь в безопасности</div>
                            <div class="text_fifteen_custom">
                                Убедитесь, что освободить пострадавшего безопасно. Проверьте наличие опасностей, таких как огонь, взрыв, или другие риски.
                            </div>
                        </div>
                    </div>
                    <div class="number_fifteen_wrapper_custom">
                        <div class="number_fifteen_custom fifth_color">2</div>
                        <div class="text_wrapper_fifteen_custom fifth_color">
                            <div class="header_fifteen_custom">Отключите электрический источник</div>
                            <div class="text_fifteen_custom">
                                Если это возможно, отключите электрический источник (выключатель, автомат, и т.д.).<br><br>
                                Если вы не можете отключить источник, не приближайтесь к пострадавшему
                            </div>
                        </div>
                    </div>
                    <div class="number_fifteen_wrapper_custom">
                        <div class="number_fifteen_custom second_color">3</div>
                        <div class="text_wrapper_fifteen_custom second_color">
                            <div class="header_fifteen_custom">Наденьте снаряжение</div>
                            <div class="text_fifteen_custom">
                                Наденьте диэлектрические перчатки и ботинки, чтобы минимизировать риск поражения электрическим током. <br><br>
                                <i>Убедитесь, что ваше снаряжение не имеет повреждений</i>
                            </div>
                        </div>
                    </div>
                    <div class="number_fifteen_wrapper_custom highter_custom">
                        <div class="number_fifteen_custom fourth_color">4</div>
                        <div class="text_wrapper_fifteen_custom fourth_color">
                            <div class="header_fifteen_custom">Используйте диэлектрический предмет</div>
                            <div class="text_fifteen_custom">
                                Если необходимо использовать физическую силу, делайте это с помощью диэлектрического предмета (например, палки, швабры или другого изолированного инструмента), чтобы отодвинуть провод или освободить пострадавшего. <br><br>
                                <i>Не касайтесь пострадавшего напрямую, пока он находится под воздействием электрического тока.</i>
                            </div>
                        </div>
                    </div>
                    <div class="number_fifteen_wrapper_custom">
                        <div class="number_fifteen_custom seventh_color">5</div>
                        <div class="text_wrapper_fifteen_custom seventh_color">
                            <div class="header_fifteen_custom">Убедите покинуть опасную зону</div>
                            <div class="text_fifteen_custom">
                                Если пострадавший в сознании и может двигаться, попытайтесь убедить его покинуть опасную зону.<br><br>
                                <i>Используйте «гусиный шаг»* (перемещение в сторону по диагонали) для безопасного выхода из зоны шагающего напряжения.</i>
                            </div>
                        </div>
                    </div>
                    <div class="number_fifteen_wrapper_custom">
                        <div class="number_fifteen_custom sixth_color">6</div>
                        <div class="text_wrapper_fifteen_custom sixth_color">
                            <div class="header_fifteen_custom">Вызовите службы экстренной помощи</div>
                            <div class="text_fifteen_custom">
                                Как только пострадавший будет освобождён, или если вы не можете помочь самостоятельно, вызовите службы экстренной помощи.
                            </div>
                        </div>
                    </div>
                </main>
                <section>
                    <img src="./content/1pr.png" alt="1">
                    <div class="text_fifteen_section_custom">
                        <div>
                            <h3 class="grey_header_fifteen_custom fifth_color">«Гусиный шаг»</h3>
                            <ul>
                                <li>стопы ног <b>сомкнуты</b> между собой</li>
                                <li>подошвы скользят вдоль друг друга, <b>не отрываясь от земли</b></li>
                                <li>пятка скользящей ноги приставляется <b>к носку</b> опорной ноги</li>
                            </ul>
                        </div>
                    </div>
                </section>
            `},
        ],
    },
    "index_10":{
        "subtitle": "Установите правильный порядок действий по отделению пострадавшего от токоведущих частей, находящихся под напряжением.",
        "step_of_popup": "Установите правильный порядок действий по отделению пострадавшего от токоведущих частей, находящихся под напряжением.",
        "test": [{
            "type": 3
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }, {
            "answers": [
            "Надеть диэлектрические перчатки",
            "Отключить электрооборудование",
            "Освободить пострадавшего от контакта с электрооборудованием или электрическими проводами",
            "Подложить под пострадавшего диэлектрический коврик", 
            "Если в пределах видимости находятся все необходимые средства защиты, обязательно воспользоваться ими"
        ]
        }],
    },
    "index_11":{
        "subtitle": "Изучите правила освобождения пострадавшего от действия электрического тока при напряжении cвыше 1000 В и эвакуации пострадавшего из зоны действия электрического тока.",
        "step_of_popup": "Изучите правила освобождения пострадавшего от действия электрического тока при напряжении cвыше 1000 В и эвакуации пострадавшего из зоны действия электрического тока.",
        "paragraph_1":[
            {"text2": `
                    <style>
                        *{
                            font-family: 'Montserrat';
                        }
                        main{
                            position: relative !important;
                        }
                        :root{
                            --main-size: 100px;
                        }
                        .eleven_fifteen_abs_line {
                            position: absolute;
                            height: 105%;
                            width: 2px;
                            background-color: #0070c0;
                        }
                        .eleven_fifteen_wrapper {
                            display: flex;
                            align-items: center;
                            margin-bottom: 50px;
                        }
                        .eleven_fifteen_icon {
                            width: var(--main-size);
                            height: var(--main-size);
                            min-width: var(--main-size);
                            min-height: var(--main-size);
                            margin: 1vw;
                        }
                        .eleven_fifteen_icon img{
                            width: 100%;
                            height: 100%;
                        }
                        .eleven_fifteen_markers {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: flex-start;
                        }
                        .eleven_fifteen_dot_wrapper {
                            position: relative !important;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .eleven_fifteen_dot {
                            width: calc(var(--main-size)/2);
                            height: calc(var(--main-size)/2);
                            min-width: calc(var(--main-size)/2);
                            min-height: calc(var(--main-size)/2);
                            border-radius: 50vw;
                            background-color: #0070c0;
                            margin-left: 2vw;
                            margin-right: 2vw;
                        }
                        .eleven_fifteen_text_content {
                            margin-left: 2vw;
                            font-size: clamp(16px, 1.5vw, 25px);
                            display: flex;
                            flex-direction: column;
                        }
                        .eleven_fifteen_text_content b{
                            margin-bottom: 15px;
                        }
                        .eleven_fifteen_blue_header {
                            height: clamp(50px, 15vw, 110px);
                            width: clamp(200px, 25vw, 375px);
                            margin: 2vw;
                            background-color: #0070c0;
                            border-radius: 2px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: clamp(35px, 6vw, 70px) !important;
                            color: #fff;
                            font-weight: 900;
                            margin-bottom: 25px !important;
                        }
                        @media(max-width: 800px){
                            :root{
                                --main-size: 50px;
                            }
                            .text2{
                                margin-left: 5px;
                            }
                        }
                    </style>

                    <main>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_1.png" alt="1"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                </div>
                                <div class="eleven_fifteen_abs_line">
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 1
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Оценить сначала собственную безопасность, потом безопасность пострадавшего</b>
                                    <p>Убедитесь, что обстановка безопасна для вас прежде, чем подойти к пострадавшему. Оцените потенциальные угрозы, такие как электрические провода, ядовитые газы и прочее.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_2.png" alt="2"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 2
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Обеспечить безопасность (убрать угрожающие факторы)</b>
                                    <p>Устраните или минимизируйте опасные элементы в окружении пострадавшего. Это может включать отключение электрооборудования, перемещение пострадавшего из зоны опасности и т.д.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_3.png" alt="3"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 3
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Опросить пострадавшего</b>
                                    <p>Если сознание пострадавшего позволяет, узнайте о его состоянии: что произошло, какие у него боли или другие симптомы. Это поможет вам лучше понять ситуацию.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_4.png" alt="4"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 4
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Позвать на помощь окружающих</b>
                                    <p>Если кто-то рядом, призовите их на помощь. Дополнительные ресурсы могут быть полезны.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_5.png" alt="5"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 5
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Осмотреть пострадавшего с головы до ног (или с ног до головы) на наличие травм</b>
                                    <p>Тщательно осмотрите тело пострадавшего на предмет видимых травм, кровотечений или других опасных состояний.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_6.png" alt="6"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 6
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>При вызове скорой помощи сообщить полную информацию</b>
                                    <p>Передайте оператору скорой помощи полную информацию о происшествии: место, количество пострадавших, описание их состояния и характер травм.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_7.png" alt="7"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 7
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Воспользоваться аптечкой и подручными средствами</b>
                                    <p>Если у вас есть аптечка с основными средствами первой помощи, используйте её для оказания необходимой помощи (бинты, антисептики и т.д.).</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_8.png" alt="8"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 8
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Контролировать состояние до прибытия врача</b>
                                    <p>Следите за состоянием пострадавшего, обращая внимание на его сознание, дыхание и пульс. Если состояние ухудшается, бейте тревогу и вызывайте дополнительную помощь, если это необходимо.</p>
                                </div>
                            </div>
                        </div>
                        <div class="eleven_fifteen_wrapper">
                            <div class="eleven_fifteen_icon"><img src="./content/15_11_9.png" alt="9"></div>
                            <div class="eleven_fifteen_markers">
                                <div class="eleven_fifteen_dot_wrapper">
                                    <div class="eleven_fifteen_dot">
                                    </div>
                                    <div class="eleven_fifteen_abs_line">
                                    </div>
                                </div>
                            </div>
                            <div class="eleven_fifteen_text_wrapper">
                                <div class="eleven_fifteen_blue_header">
                                    Шаг 9
                                </div>
                                <div class="eleven_fifteen_text_content">
                                    <b>Доложить по прибытию медику полную информацию о несчастном случае и пострадавшем</b>
                                    <p>При передаче пострадавшего медицинскому персоналу, кратко и точно изложите информацию о происшествии и состоянии пострадавшего.</p>
                                </div>
                            </div>
                        </div>
                    </main>
            `},
        ],
    },
    "index_12":{
        "subtitle": "Установите правильный порядок действии при оказании первой медицинской помощи.",
        "step_of_popup": "Установите правильный порядок действии при оказании первой медицинской помощи.",
        "test": [{
            "type": 3
        }, {
            "image": false,
            "image_path": "./content/video/test_video.mp4"
        }, {
            "answers": ["Оценить сначала собственную безопасность, потом безопасность пострадавшего", "Обеспечить безопасность (убрать угрожающие факторы)", "Опросить пострадавшего", "Позвать на помощь окружающих", "Осмотреть пострадавшего с головы до ног (или с ног до головы) на наличие травм", "При вызове скорой помощи сообщить полную информацию", "Воспользоваться аптечкой и подручными средствами", "Контролировать состояние до прибытия врача", "Доложить по прибытию медику полную информацию о несчастном случае и пострадавшем"]
        }],
    },
    "index_13":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;