const item_contents = [
    "text 1<br>fhgfhgfghfhh<br>ghvhgvhgcchchg ghvhjhvj jbhjbjh jhjhjh jh jjhjh   j  j",
    "text 2",
    "text 3",
    "text 4",
    "text 5",
    "text 6",
    "text 7",
    "text 8",
    "text 9",
    "text 10",
    "text 11",
    "text 12",
    "text 13",
    "text 14",
    "text 15",
    "text 16",
    "text 17",
    "text 18",
    "text 19",
    "text 20",
    "text 21",
    "text 22",
    "text 23",
    "text 24",
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

