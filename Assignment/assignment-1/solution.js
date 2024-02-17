function downloader(url,cb){
  //Any body who want to download something first and then execute something else can use this function
  console.log("Started downloading from",url);
  setTimeout(()=>{
    console.log("Download completed");
    //with the download content, whatever you want to do you can do
    let downloadedData="Dummy content";
    cb(downloadedData);//cb-->any callback
  },4000)
}

function writeFile(data,cb){
  console.log("Started writing data",data);
  setTimeout(()=>{
    console.log("Writing completed");
    //with the witten content, whatever you want to do you can do
    let fileName="Dummy.txt";
    cb(fileName);//cb-->any callback
  },2000)
}

function uploadFile(fileName,newurl,cb){
  console.log("Started uploading file",fileName,"on the url",newurl);
  setTimeout(()=>{
    console.log("Uploading completed");
    //with the download content, whatever you want to do you can do
    let uploadResponse="SUCCESS";
    cb(uploadResponse);//cb-->any callback
  },3000)
}

//let's start implementation
console.log("Starting the Program");
downloader("www.google.com",(downloadedData)=>{
 writeFile(downloadedData,(fileName)=>{
     uploadFile(fileName,"xtx.com",(uploadResponse)=>{
        console.log(uploadResponse);
     })
  })
})
