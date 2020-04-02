// Required for side-effects
require("firebase/firestore");
document.addEventListener('DOMContentLoaded',function(){
console.log("test");
// Firestoreのオブジェクト取得
var db = firebase.firestore();
console.log("test2");
// このあたりにこれから掲載するサンプルコードなどを記述。
var weeks = db.collection('weeks');
var real_table_id;
//weeksコレクションの中のtimeが一番最近のドキュメントを取得①
weeks.orderBy("time", "desc").limit(1)
  .get()
  .then((querySnapshot) => {
     querySnapshot.forEach( (doc) => {
       console.log(doc.data());
        //そのドキュメントのtable_idコレクションを取得②
        doc.collection("table_id").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc2) {
                //
                real_table_id = document.getElementById(doc2.id);
                real_table_id.textContent = doc2.name;
            });
        });

       
     });
   });


  
},false);




