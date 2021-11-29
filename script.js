const item_contents = [
    ">>Fokk lunsj<< <br> Das erste Lied, was ich mit dir verbinde. Es erinnert mich immer an unseren ersten gemeinsamen Tag und wie wir mit den Jungs und Ingrid auf deiner Couch gechillt haben, um uns norwegische Musik zeigen zu lassen. Mit diesem Lied haben wir die ersten Vokabeln zusammen gelernt und uns gefragt warum man nach Obst fragen sollte, wenn man doch eigentlich Schokolade will...",
    ">>Goody goody<< <br> Klar Lindy Musik! ",
    ">>What you know<< <br> I can taste oder doch take it..? Dieses und ganz viele andere Lieder von Two Door Cinema Club haben unsere Roadtrips noch schoner gemacht. Egal wohin mit dir als DJ ist die Fahrt einfach lustiger gewesen.",
    ">>Me too<< <br> Deine Girly Dance Playliste ist immer noch die beste Unterstuetzung beim Putzen. Ich seh uns beide immer noch durch die Kueche in Moholt tanzen dabei und einfach Spass haben trotz laestigen Aufgaben.",
    ">>Rain Dance<< <br> Kommen wir endlich mal zum mehr Techno. Dieses Lied laesst mich vor allem an die Dnace Shows denken und an unsere gemeinsame Begeisterung fuer Tanzen neben dem Swing. Es war so schoen dich als anmutige Schneeflocke zu sehen <3.<br> ",
    ">>Fredag<< <br> Ich weiss heute ist Montag, aber ein bisschen gute Laune am Montag ist vielleicht nicht schlecht. Ich muss dabei jedenfalls immer an sehr berunkene Norweger auf Studenterhytta denken und vor allem an den entspannten hot tub nach der Party.",
    ">>We are the Astroid!<< <br> Ja mann! Ich haette wahrscheinlich Extrawelt nie so lieben gelernt wie mit dir. Besonders bei dem Lied habe ich dich vor Augen wie du dazu abgehst. Ich hoffe wirklich instandig, dass die irgendwann in Norwegen oder Schweden auflegen und wir das zusammen erleben koennen. Du haelst wenigstens mit mir bis zum Ende durch nicht so wie andere ^^.",
    ">>Fever<< <br> Dieses tolle Gefuehl vom Blues was ich in meinem Koerper spuere bei dem Lied einfach geil. Und mit niemandem habe ich so viel Blues getanzt wie mit dir, seis solo und online, ganz eng in einer Bar in Bruessel oder schon in voller Montur mit Rucksack auf Realfagsparketten.",
    ">>Green Mountain State<< <br> Heute mal wieder ein bisschen mehr Entspannung so wie bei dem Yoga mit Viktoria in Moholt...nicht. Trotzdem war es immer wieder schoen den Samstag mit Brunch und Yoga zu verbringen, was wir bald auch wieder tun koennen.",
    ">>Flow<< <br> ",
    ">>Too insistent<< <br> ",
    ">>My humps<< <br> ",
    ">>Sunny side of the street<< <br> Es gibt natuerlich viele Swing Lieder, die mich an dich erinnern, aber dieses besonders. Ich seh uns beide immer verrueckt ueber die Tanzflaeche huepfen und denk zu gerne an die ugly trumpet ;) Es lief vor allem als wir am letzten Abend vom Winterjump von der Party nach Hause liefen. Sozusagen das Abschiedslied unseres letzten gemeinsamen Tanzfestivals.",
    ">>Black Fur<< <br> ",
    ">>The Cabin<< <br> ",
    ">>Cry Me a River<< <br> ",
    ">>A New Error<< <br> ",
    ">>Take Five<< <br> ",
    ">>Cmon Talk<< <br> ",
    ">>A Song That Will Help You Remember to Forget<< <br> ",
    ">><45< <br> ",
    ">>You & Me<< <br> ",
    ">>Dream a little dream of me<< <br> ",
    ">>Green & Gold<< <br> ",
]

function run() {
    let container = document.getElementById("container");
    let modal = document.getElementById("modal")
    let modal_content = document.getElementById("modal-content")
    var date = new Date().getDate();

    let item_list = [18,4,7,11,13,23,17,1,10,22,6,12,3,15,21,8,0,16,20,2,9,14,5,19]
    for (let i of item_list) {
        let item = document.createElement("DIV")
        item.id = "item_" + i
        item.classList.add("item")
        item.onclick = function(e) {
            if (date > i) {
                modal.style.display = "block"
                modal_content.innerHTML = item_contents[i]
            }
        }
        item.innerHTML = i + 1
        container.appendChild(item)
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }
}

