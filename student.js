function loadFiles() {
const cls = document.getElementById("classFilter").value;
const sub = document.getElementById("subjectFilter").value;


db.collection("files")
.where("class", "==", cls)
.where("subject", "==", sub)
.get().then(snapshot => {
let out = "";
snapshot.forEach(doc => {
let f = doc.data();
out += `<div class='file-item'><b>${f.name}</b><br><a href='${f.url}' download>Download</a></div>`;
});
document.getElementById("studentFiles").innerHTML = out;
});
}
