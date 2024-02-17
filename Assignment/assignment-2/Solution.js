function downloader(url){
    //Any body who want to download something first and then execute something else can use this function
    return new Promise((res,rej)=>{
        console.log("Started downloading from",url);
        setTimeout(()=>{
          console.log("Download completed");
          //with the download content, whatever you want to do you can do
          let downloadedData="Dummy content";
          res(downloadedData);//cb-->any callback
        },4000)
    })
  }
  
  function writeFile(data){
    return new Promise((res,rej)=>{
        console.log("Started writing data",data);
        setTimeout(()=>{
          console.log("Writing completed");
          //with the witten content, whatever you want to do you can do
          let fileName="Dummy.txt";
          res(fileName);//cb-->any callback
        },2000)
    })
   
  }
  
  function uploadFile(fileName,newurl){
    return new Promise((res,rej)=>{
        console.log("Started uploading file",fileName,"on the url",newurl);
        setTimeout(()=>{
          console.log("Uploading completed");
          //with the download content, whatever you want to do you can do
          let uploadResponse="SUCCESS";
          res(uploadResponse);//cb-->any callback
        },3000)
    })
  }



// downloader("www.google.com")
// .then((downloadedData) => {
//      writeFile(downloadedData).then((fileName) => {
//         uploadFile(fileName, "drive.google.com");
//     });
// })


  //let's start implementation
  console.log("Starting the Program");
  downloader("www.google.com")
  .then((downloadedData)=>writeFile(downloadedData))
  .then((fileName)=>uploadFile(fileName,"xxt.com"))
  .then((value)=>console.log(value))
  
