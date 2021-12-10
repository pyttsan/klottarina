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
    ">>Flow<< <br> Das haben wir lustiger Weise auf Studenterhytta gehoert als wir privat oben waren und entspannt vor dem Kamin fletzten. Deshalb muss ich dabei immer an sehr fluessigen und heissen Brownie denken.",
    ">>Cmon Talk<< <br> Einfach ein geiler Typ und ein geiles Konzert an das ich gerne zurueck denke.",
    ">>My humps<< <br> Auch ein Klassiker zum Putzen, der mich immer an den Brunch bei uns am 17.Mai erinnert und wie du eindrucksvoll deine Textkenntnisse von Black Eye Peas Liedern bewiesen hast.",
    ">>Sunny side of the street<< <br> Es gibt natuerlich viele Swing Lieder, die mich an dich erinnern, aber dieses besonders. Ich seh uns beide immer verrueckt ueber die Tanzflaeche huepfen und denk zu gerne an die ugly trumpet ;) Es lief vor allem als wir am letzten Abend vom Winterjump von der Party nach Hause liefen. Sozusagen das Abschiedslied unseres letzten gemeinsamen Tanzfestivals.",
    ">>Black Fur<< <br> Das lief als wir zusammen mit Robin, Marcel, Emil und Annika (glaube ich zumindest) Minigolf spielen waren. Das war ein sehr lustiger Abend auch wenn ich einfach nicht gut darin war. ^^",
    ">>The Cabin<< <br> Dazu muss ich eigentlich nicht viel sagen... Kein Lied beschreibt einen Cabin trip und zeigt die Begeisterung dafuer so gut wie dieses. Ich bekomme immer wieder eine Sehnsucht nach Norwegen, wenn ich das hoere.",
    ">>A New Error<< <br> Das ist und bleibt einfach mein Lieblingslied von Moderat und ich bin unendlich neidisch, dass du sie noch live erleben durftest. Ich verbinde es aber vor allem mit dir, weil ich nur zu gerne in deinem Zimmer sass und mir das Plakat von denen anschauen konnte.",
    ">>Take Five<< <br> Keiner, aber wirklich keiner ist verrueckt genug dieses Lied in eine Lindy Playliste zu packen, ausser dir natuerliich. Was dazu gefuehrt hat, dass ich sehr schoene Taenze zu diesem Lied hatte. Besonders bei dem Workshop von Karri und Tanja als wir zusammen im Uebungsraum dazu getanzt haben.",
    ">>Too insistent<< <br> Das erinnert mich immer an unsere gemeinsame Zeit mit Michiel und wie wir zusammen nach Studenterhytta gefahren sind, um dort zu lernen. Keine Pruefungsphase war je so produktiv und gleichzeitig entspannt wie die dort ooben. Einfach ein bisschen Skifahren und Sauna und schon lernt sich es besser.",
    ">>A Song That Will Help You Remember to Forget<< <br> Auch wenn wir das mit dem EMMM bei Johannes schnell schleifen lassen haben, war es doch immer einfach geil. Ich war selten so bereit fuer den Tag wie nach einer EMMM. Ich hoffe, wir koennen das wieder ein bisschen mehr aufleben lassen.",
    ">>45<< <br> Einfach mal ein bisschen gute Laune zwischendurch.",
    ">>All that Jazz<< <br> Ich bin in Liebe mit dir... Eigentlich erinnert mich das vor allem an Marcel und wie er uns mit dem Lied genervt hat, aber ich muss aber auch immer an den Cabin trip zu Holmvassgamme denken. Wie geil es war ueber den gefrorenen See zu fahren und wie unglaublig lustig es war als du mit dem Gesicht voraus in den Schnee gefallen bist. ^^",
    ">>You & Me<< <br> Ach ja wie die letzten Jahre wohl ohne Corona ausgesehen haetten...? Wir waeren auf jeden Fall zusammen nach Prag gafahren und haetten zu diesem und anderen Liedern von MEUTE meinen Geburtstag gefeiert. Das bedauere ich wirklich sehr, dass das nicht mehr geklappt hat.",
    ">>Dream a little dream of me<< <br> Unser Lied muss natuerlich auch dabei sein. Und nein, es ist nicht cheek to cheek! Um die Spannung fuer morgen noch zu waren, gibts das Lied schon heute.",
    ">>Green & Gold<< <br> Dafuer gibt es heute ein ganz neues Lied, was ich tatsaechlich nicht wirklich mit dir gehoert habe, aber ich habe es irgendwann auf deiner Playlist gefunden und es in meine uebernommen und seitdem sehr viel gehoert. Vor allem morgens auf dem Weg zur Arbeit habe ich damit meine gute Laune befeuert und bin immer ganz beschwingt im Buero angekommen. Und damit zeigt es, dass 24 viel zu wenig Tage sind fuer all die Musik die uns verbindet und dass vor allem auch staendig neue hinzu kommen werden.",
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

