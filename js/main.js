// רשימה של המערכות
const jsonData = 
 {
        "generators": [
            {
                "id": 1,
                "pic":"img/oliveoil.jpg",
                "title": "שמן זית",
                "abstract": "לשמן הזית סגולות מרפאות רבות ומעבר לכך הוא נגיש ונמצא בכל בית.",
                "fullContent": "חממו כמות קטנה של שמן זית, טבלו צמר גפן בשמן וסחטו מספר טיפות אל תוך האוזן. רצוי לסתום את האוזן בכדור צמר גפן. חשוב לא לחמם את השמן יתר על המידה, בדקו את מידת החום לפני שאתם מחדירים לאוזן. כמו כן אל תחדירו לאוזן במידה ויש הפרשות רבות מהאוזן.",
                "cat":"oil"
            },
            {
                "id": 2,
                "pic":"img/onion.jpg",
                "title": "בצל",
                "abstract": "בצל הוא אחת מהאנטיביוטיקות של הטבע, ואחת מתרופות הסבתא הנפוצות ביותר. הוא יכול לסייע מאוד במקרה של כאבי אוזניים.",
                "fullContent": "יש לערבב מים עם מעט אבקת בצל, מרחו את המשחה שנוצרה על החלק החיצוני של האוזן. אתם יכולים לנגב אותה לאחר 10-20 דקות עם מגבת רטובה. מומלץ להשתמש עד שלוש פעמים ביום.",
                "cat":"food"
            },
            {
                "id": 3,
                "pic":"img/hotwaterbottle.jpg",
                "title": "חימום האזור",
                "abstract": "טיפול ביתי ונגיש תמיד, כמו קומפרסים חמים, כרית חימום או בקבוק חם.",
                "fullContent": "קומפרסים חמים, כרית חימום או בקבוק חם שיונחו על האזור, יעזרו באלחוש הכאב ובהפחתת נפיחות.  בשביל קומפרס חם טבלו מגבת נקייה במים חמימים, סחטו היטב והצמידו לאוזן. חשוב  לוודא שמידת החום נוחה לחולה.",
                "cat":"other"
            },
            {
                "id": 4,
                "pic":"img/salt.jpg",
                "title": "מלח",
                "abstract": "מלח סופח נוזלים ולכן יכול לסייע מאוד במקרה של הצטברות וגודש.",
                "fullContent": "חממו מלח גס ושימו אותו בתוך שקית קטנה או בתוך גרב.אפשר גם לשים את המלח לפני החימום אבל חשוב להשתמש בבד שלא יישרף. הניחו על האוזן אחרי שווידאתם שזה לא חם מידי",
                "cat":"food"
            },
      {
    
                "id": 5,
                "pic":"img/steam.jpg",
                "title": "אדים",
                "abstract": "כדי לפתוח את כל תעלות הנשימה ולהפחתת לחץ באוזניים ישנו טיפול ביתי מוכר והוא שאיפת אדים.",
                "fullContent": "מלאו סיר במים, הרתיחו על הגז, הורידו מהגז וטפטפו מעט שמן אקליפטוס לסיר. מקמו את ראשכם מעל הסיר, רצוי לשים חתיכת בד או מגבת שתעטוף אתכם ואת הסיר, שאפו את האדים. תוספת  טובה לאדים תהיה שמן אקליפטוס שעוזר לפתיחת כל המעברים.",
                "cat":"other"
            },
      {
                "id": 6,
                 "pic":"img/lavenderoil.jpg",
                "title": "שמן לבנדר",
                "abstract": "לשמן זה יש תכונה אנטי דלקתית.",
                "fullContent": "מרחו כמה טיפות על האוזן (לא בתוכה) ומסביבה. ניתן לעסות בעזרת השמן מסביב לאוזן, כלפי הסנטר. העיסוי עוזר לפיזור הנוזלים וטוב גם ללא שמן.",
                "cat":"oil"
            },
      {
                "id": 7,
                "pic":"img/hydrogen.jpg",
                "title": "מי חמצן",
                "abstract": "יכול לעזור במקרה של מוגלה באוזן.",
                "fullContent": "לטפטף מי חמצן כשלוש פעמים ביום. רצוי להשתמש במי חמצן בריכוז של 3%-1%. ",
                "cat":"other"
            },
      {
                "id": 8,
                "pic":"img/Vinegar.jpg",
                "title": "חומץ תפוחים",
                "abstract": "חומץ תפוחים הוא טיפול יעיל בכאבי אוזניים בגלל התכונות האנטי דלקתיות והאנטיבקטריאליות שלו.",
                "fullContent": "מערבבים חומץ תפוחים עם מים חמים וסופגים כדור כותנה בתמיסה. מניחים את כדור הכותנה באוזן עד 10 דקות.",
                "cat":"food"
            },
      {
                "id": 9,
                "pic":"img/chamomile.jpg",
                "title": "קמומיל",
                "abstract": "קמומיל יכול לסייע בכאבי אוזניים כשמדובר בדלקת או גירויים. טיפול טבעי מוצלח נוסף משתמש בסגולותיו הטובות של הקמומיל.",
                "fullContent": "בשלו כמות גדולה של קמומיל במים, סננו, הזליפו טיפה לאוזן לאחר שהתקרר מעט.",
                "cat":"food"
            },
      {
                "id": 10,
                "pic":"img/oregano.jpg",
                "title": "שמן אורגנו",
                "abstract": "שמן אורגנו יכול להפחית דלקות ולסייע בהקלה על כאבי אוזניים.",
                "fullContent": "שימו לב לדלל את שמן האורגנו בשמן זית לפני השימוש, מומלץ מעל גיל שנתיים. דללו טיפת שמן אורגנו על חמש טיפות שמן זית וטפטפו לתוך האוזן 2-3 טיפות. חשוב לבדוק רגישות לשמן  המדולל על איזור חיצוני בגוף טרם השימוש.",
                "cat":"oil"
            },
    

    
        ]
    }

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems()
});

//יצירת האלמנטים על המסך
function createItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = "";

    const list = document.createElement("ul");
    list.setAttribute("id", "topics-list");

    jsonData.generators.forEach(generator => {
        const listItem = document.createElement("li");
        listItem.setAttribute("id", `li_${generator.id}`);
  
        listItem.addEventListener("click", clickTopic);

        // יצירה של האלמנט שמחזיק בו את כל המידע
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "list-item-container");

        // יצירה של תמונה, כותרת ופסקה המתארת את התרופה
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", generator.pic);
        imgElement.setAttribute("alt", generator.title); // Add alt text for accessibility

  
        const titleElement = document.createElement("h3");
        const titleText = document.createTextNode(`${generator.title}`);
        titleElement.appendChild(titleText);

    
        const abstractElement = document.createElement("p");
        abstractElement.setAttribute("class", "abstract"); 
        const abstractText = document.createTextNode(`${generator.abstract}`);
        abstractElement.appendChild(abstractText);

        // יצירת כפתור אופן השימוש
        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("type", "button");
        buttonElement.setAttribute("class", "btn btn-secondary btn-lg");
        buttonElement.appendChild(document.createTextNode("אופן השימוש"));

        buttonElement.addEventListener("mouseenter", function () {
            buttonElement.style.backgroundColor = "#B1BA97";
        });

        // הסרה של מעבר עכבר
        buttonElement.addEventListener("mouseleave", function () {
            buttonElement.style.backgroundColor = ""; 
        });

    
        containerDiv.appendChild(imgElement);
        containerDiv.appendChild(titleElement);
        containerDiv.appendChild(abstractElement);
        containerDiv.appendChild(buttonElement);

        buttonElement.addEventListener("click", (e) => clickTopic(e, generator.id));

        listItem.appendChild(containerDiv);

        list.appendChild(listItem);
    });

    itemsContainer.appendChild(list);
}



//לחיצה על התרופה והצגה של מידע נוסף

function clickTopic(e, id) {
    const currentGenerator = jsonData.generators.find(g => g.id == id);

    if (currentGenerator) {
        const { title, abstract, link, fullContent } = currentGenerator;
        const displayedContent = fullContent ? fullContent : "Full content not available";

        // מעדכן את הכותרת ואת התוכן
        const chosenItemModalLabel = document.querySelector("#chosenItemModalLabel");
        if (chosenItemModalLabel) {
            chosenItemModalLabel.innerHTML = title;
        }

        const chosenItemTextElement = document.querySelector("#chosenItemText");

        if (chosenItemTextElement) {
            chosenItemTextElement.innerHTML = displayedContent;

            // פתיחה של החלונית פופ אפ
            $('#chosenItemModal').modal('show');
        } 
    }
}

//סגירה של חלונית הפופ אפ-מידע נוסף
function closeChosenItem() {
    $('#chosenItemModal').modal('hide');
}



//חיפוש לפי שם בתיבת חיפוש- הםונקציה מוודאת שהיא נקראת ומופעלת באמצעות כפתור
function SearchItem() {
    console.log("Function called");
    document.getElementById("mySearch").placeholder = "Search files";
}

//הפעלה של הפונקצית חיפוש
function filterItems(searchInput) {
   
    searchInput = searchInput.toLowerCase();
    jsonData.generators.forEach(generator => {
        const listItem = document.getElementById(`li_${generator.id}`);

        if (listItem) {
            const title = generator.title.toLowerCase();
            // בודק האם הכותרת מכילה תווים שזהים לתווים בחיפוש
            const containsMatch = title.includes(searchInput);
            listItem.style.display = containsMatch ? "block" : "none";
        }
    });
}



//הסתרה של תפריט ניווט
function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}


//חיפוש לפי קטגוריה
function filterByCategory(category) {
    jsonData.generators.forEach(generator => {
        const listItem = document.getElementById(`li_${generator.id}`);

        if (listItem) {
            const matchesCategory = category === 'all' || generator.cat === category;
            listItem.style.display = matchesCategory ? "block" : "none";
        }
    });
}
