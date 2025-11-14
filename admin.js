 function uploadFile() {
const cls = document.getElementById("classSelect").value;
const sub = document.getElementById("subjectSelect").value;
const file = document.getElementById("fileInput").files[0];


const path = `materials/${cls}/${sub}/${file.name}`;


storage.ref(path).put(file).then(() => {
storage.ref(path).getDownloadURL().then(url => {
db.collection("files").add({ class: cls, subject: sub, name: file.name, url });
document.getElementById("uploadMsg").innerText = "Uploaded Successfully!";
});
});
}
