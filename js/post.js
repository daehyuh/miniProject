const initializeDb = indexedDB.open('instagram', 1)
let filePath = ''

function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
  
    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
}

function loadFile(input) {


    var file = input.files[0];	//선택된 파일 가져오기


  	//새로운 이미지 div 추가
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');
    
    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);   
    
    newImage.style.width = "50%";
    newImage.style.height = "50%";
    newImage.style.objectFit = "contain";

    //이미지를 image-show div에 추가
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
};


function upload(){
var file = document.getElementById('chooseFile');

for (let index = 0; index < file.files.length; index++) {
  var filedata = file.files[index];

  
}

var reader = new FileReader();
var base64String;
reader.onload = () => {
  base64String = reader.result.split(',')[1];

  // Do something with the base64 string
  // base64 문자열로 무언가를 수행하기
  // console.log(base64String);
  
  // console.log(reader.toString())/
  
  var name = document.getElementById('name').value;
  var text = document.getElementById('text').value;
  // console.log('파일 경로 : ' + base64String);
  // console.log('작성자 이름 : ' + name);
  // console.log('내용 : ' + text);
  
  var data = new Object() ;
  data.author = name;
  data.content = text;
  data.imageUrl = [base64String];
  console.log(data);
  
  var storeName = "posts";
  var database = initializeDb.result
  var transaction = database.transaction([storeName], 'readwrite')
  var store = transaction.objectStore(storeName)
if (reader=='' || name=='' || text==''){
  alert('데이터가 유효하지 않습니다.');
  return false;
} else{
  store.add(data);
  // location.href='index.html';
}
};

// Read the file as a data URL
// 파일을 데이터 URL로 읽기
reader.readAsDataURL(filedata);
// 
}

function getDataUrl(img) {
  // Create canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // Set width and height
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw the image
  ctx.drawImage(img, 0, 0);
  
  var base64 = canvas.toDataURL('image/*');
  strImage = base64.replace(/^data:image\/[a-z]+;base64,/, "");
  }