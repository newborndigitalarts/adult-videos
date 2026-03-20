// ── NVC DATA — v3 ────────────────────────────────────────────
// Tek veri kaynağı. index.html ve video.html bu dosyayı yükler.
// Admin paneli video ekle/sil işlemlerinde SADECE bu dosyayı günceller.
// v3: id:39 source tutarsızlığı düzeltildi (xvideos→xhamster)

const videos = [
  { id:2, source:"xvideos", title:"Llorando y gritando en anal doloroso", tags:["anal","latina","painful"], views:"5.1M", duration:"10 min", hd:true, isNew:true, addedAt:24, xvId:"kdatkmhd92c", embedUrl:"https://www.xvideos.com/embedframe/kdatkmhd92c" },
  { id:3, source:"xvideos", title:"18 years old first anal is so painful", tags:["anal","teen","painful","first time"], views:"5.9M", duration:"10 min", hd:true, isNew:true, addedAt:23, xvId:"uebpaim777c", embedUrl:"https://www.xvideos.com/embedframe/uebpaim777c" },
  { id:10, source:"xvideos", title:"19yo girl with big ass gets rough painful anal sex", tags:["anal","teen","big ass","rough","painful"], views:"14.6M", duration:"13 min", hd:true, isNew:false, addedAt:16, xvId:"klekcih2186", embedUrl:"https://www.xvideos.com/embedframe/klekcih2186" },
  { id:21, source:"xvideos", title:"Painful anal with huge orgasm and yells", tags:["anal","painful","orgasm","big cock"], views:"37.8M", duration:"5 min", hd:true, isNew:false, addedAt:5, xvId:"kbabulo578b", embedUrl:"https://www.xvideos.com/embedframe/kbabulo578b" },
  { id:22, source:"xvideos", title:"Blowjob german teen", tags:["amateur","homemade"], views:"46K", duration:"00:40", hd:true, isNew:false, addedAt:26, xvId:"iivdvlv8d66", embedUrl:"https://www.xvideos.com/embedframe/iivdvlv8d66" },
  { id:23, source:"xvideos", title:"Deepthroating Blowjob With Cum", tags:["amateur","homemade","blowjob"], views:"355K", duration:"07:46", hd:true, isNew:false, addedAt:27, xvId:"mmcaeme144", embedUrl:"https://www.xvideos.com/embedframe/mmcaeme144" },
  { id:24, source:"xvideos", title:"Deepthroat Blowjob", tags:["deepthroat","amateur","homemade"], views:"11.5M", duration:"03:43", hd:true, isNew:false, addedAt:28, xvId:"hpktmcac4a", embedUrl:"https://www.xvideos.com/embedframe/hpktmcac4a" },
  { id:25, source:"xvideos", title:"Deep throat Queen", tags:["deepthroat","amateur"], views:"11.4M", duration:"07:16", hd:true, isNew:false, addedAt:29, xvId:"ikvldlv738b", embedUrl:"https://www.xvideos.com/embedframe/ikvldlv738b" },
  { id:26, source:"xvideos", title:"Amateur Anal Compilation", tags:["anal","compilation","amateur","homemade"], views:"820K", duration:"16:16", hd:true, isNew:true, addedAt:30, xvId:"uvphdfmcdca", embedUrl:"https://www.xvideos.com/embedframe/uvphdfmcdca" },
  { id:27, source:"xvideos", title:"Teen Ass Fucked by a b. Man", tags:["anal","teen","homemade","amateur"], views:"", duration:"01:53", hd:true, isNew:false, addedAt:31, xvId:"kpmolab1c77", embedUrl:"https://www.xvideos.com/embedframe/kpmolab1c77" },
  { id:29, source:"xhamster", title:"Cuckold invited a friend for anal sex with his SexWife", tags:["cuckold","anal","wife","rough","amateur"], views:"888K", duration:"01:23", hd:true, isNew:false, addedAt:33, xvId:"13863614", embedUrl:"https://xhamster.com/xembed.php?video=13863614" },
  { id:30, source:"xhamster", title:"Wife taken in all the holes", tags:["gangbang","amateur","rough","homemade","double penetration"], views:"986K", duration:"01:38", hd:true, isNew:false, addedAt:34, xvId:"xhgKu8u", embedUrl:"https://xhamster.com/xembed.php?video=xhgKu8u" },
  { id:31, source:"pornhub", title:"Hard in the ass in four while sucking two more cock", tags:["gangbang","anal","amateur","rough","homemade"], views:"381K", duration:"01:21", hd:true, isNew:false, addedAt:35, xvId:"647d53d861c4f", embedUrl:"https://www.pornhub.com/embed/647d53d861c4f" },
  { id:32, source:"xhamster", title:"Cumslut Wife Lets Guys Cum On And In Her", tags:["doggystyle","homemade","gangbang","milf","wife sharing","amateur"], views:"675K", duration:"06:55", hd:true, isNew:false, addedAt:36, xvId:"xhF3CBZ", embedUrl:"https://xhamster.com/xembed.php?video=xhF3CBZ" },
  { id:33, source:"xhamster", title:"wifesharing", tags:["sharing","amateur","homemade","mmf","double penetration"], views:"864K", duration:"04:44", hd:true, isNew:false, addedAt:37, xvId:"9218463", embedUrl:"https://xhamster.com/xembed.php?video=9218463" },
  { id:34, source:"xhamster", title:"Wife gets used by the friends of the hubby !!!", tags:["sharing","amateur","homemade","doggystyle"], views:"645K", duration:"02:00", hd:true, isNew:false, addedAt:38, xvId:"10614748", embedUrl:"https://xhamster.com/xembed.php?video=10614748" },
  { id:35, source:"xhamster", title:"Amateur wife first time cuckold", tags:["wife sharing","amateur","homemade","blonde","threesome","tag team","mmf"], views:"421K", duration:"08:56", hd:true, isNew:false, addedAt:39, xvId:"12623636", embedUrl:"https://xhamster.com/xembed.php?video=12623636" },
  { id:36, source:"xhamster", title:"Hot gang DP", tags:["gangbang","amateur","painful","double penetration","homemade","sharing"], views:"254K", duration:"00:45", hd:true, isNew:false, addedAt:40, xvId:"xhvSuSg", embedUrl:"https://xhamster.com/xembed.php?video=xhvSuSg" },
  { id:37, source:"xvideos", title:"BBC DP Painal for wife", tags:["painal","bbc","wife","sharing","anal","amateur","brunette","double penetration","milf","mmf","threesome","homemade"], views:"1.5M", duration:"03:48", hd:true, isNew:false, addedAt:41, xvId:"iikhfthd84e", embedUrl:"https://www.xvideos.com/embedframe/iikhfthd84e" },
  { id:38, source:"xvideos", title:"Up her ass", tags:["anal","painal","amateur","doggystyle","milf","painful","rough","homemade","bbc"], views:"1.3M", duration:"08:35", hd:true, isNew:false, addedAt:42, xvId:"hoeumcd3fed", embedUrl:"https://www.xvideos.com/embedframe/hoeumcd3fed" },
  { id:39, source:"xhamster", title:"Husbands Filming their Hot Wives in Action", tags:["amateur","gangbang","doggystyle","threesome","wife","mmf","sharing","compilation","tag team","milf"], views:"998K", duration:"24:03", hd:true, isNew:false, addedAt:43, xvId:"8670479", embedUrl:"https://xhamster.com/xembed.php?video=8670479" },
  { id:41, source:"xhamster", title:"Husband coaches wife", tags:["cuckold","wife","homemade"], views:"668K", duration:"07:16", hd:true, isNew:false, addedAt:45, xvId:"14385902", embedUrl:"https://xhamster.com/xembed.php?video=14385902" },
  { id:42, source:"xvideos", title:"Awesome russian girl", tags:["russian","amateur","blowjob","deepthroat"], views:"652K", duration:"05:54", hd:true, isNew:false, addedAt:46, xvId:"ivdkochfcb0", embedUrl:"https://www.xvideos.com/embedframe/ivdkochfcb0" }
];

const THUMBS = {
  "8670479":"https://ic-vt-nss.xhcdn.com/a/OTRiMmRkNWU4ODI0MDAzMGI0MmFjNGQ2YzIxNzlmMDk/s(w:1280,h:720),webp/008/670/479/v2/2560x1440.206.webp",
  "9218463":"https://ic-vt-nss.xhcdn.com/a/YTI1ZmZmZDRmNGEwNjcxNzM4NjI4YTBmNzAyNzg3ZmM/s(w:1280,h:720),webp/009/218/463/v2/2560x1440.207.webp",
  "12623636":"https://ic-vt-nss.xhcdn.com/a/M2I5ZmMyNTQyY2Y4MTkxNzE1NGM5NTQwZjRjYjU4OGU/s(w:1280,h:720),webp/012/623/636/v2/2560x1440.229.webp",
  "13863614":"https://ic-vt-nss.xhcdn.com/a/MGViNTY4YTVkMjAxNmQ4YTg0NjQ1MDI4MzJhNDdlN2U/s(w:1280,h:720),webp/013/863/614/v2/2560x1440.204.webp",
  "14385902":"https://ic-vt-nss.xhcdn.com/a/YWI0NjkxMThjYWVkYTRiMjRkN2VlYzNhZDllZjRlNGM/s(w:1280,h:720),webp/014/385/902/v2/2560x1440.220.webp",
  "kdatkmhd92c":"https://thumb-cdn77.xvideos-cdn.com/e45152e0-1792-4c1c-a567-0e47ae0ea543/0/xv_5_t.jpg",
  "uebpaim777c":"https://thumb-cdn77.xvideos-cdn.com/617b6438-4097-41e7-9948-b6edf20c1105/0/xv_3_t.jpg",
  "klekcih2186":"https://thumb-cdn77.xvideos-cdn.com/4d1d8c9a-a73f-45ad-a64e-5a2eebc68554/0/xv_27_t.jpg",
  "kbabulo578b":"https://thumb-cdn77.xvideos-cdn.com/fc572b6a-9b48-43f7-8966-5eddc997c661/0/xv_27_t.jpg",
  "iivdvlv8d66":"https://thumb-cdn77.xvideos-cdn.com/eb514b80-4b29-4f2b-8457-cae1acb66b41/0/xv_21_t.jpg",
  "mmcaeme144":"https://thumb-cdn77.xvideos-cdn.com/304e970e-6510-4595-80a9-fef377b98baf/0/xv_5_t.jpg",
  "hpktmcac4a":"https://thumb-cdn77.xvideos-cdn.com/1a996871-4333-4385-8ffa-ea1b7a799e59/0/xv_4_t.jpg",
  "ikvldlv738b":"https://thumb-cdn77.xvideos-cdn.com/32bb653a-4bf9-4f26-9275-e557dc6f60db/0/xv_6_t.jpg",
  "uvphdfmcdca":"https://thumbs-gcore.xvideos-cdn.com/45ac1efa-fe06-453d-a3aa-7fa1301daf1c/0/xv_9_t.jpg",
  "kpmolab1c77":"https://thumb-cdn77.xvideos-cdn.com/f7e7ca15-f812-4581-9435-68456572e1bc/0/xv_27_t.jpg",
  "xhgKu8u":"https://ic-vt-nss.xhcdn.com/a/NzkzNTJmMjk2OWQ0MjcyYTU0MTNkOWMxZWI5ZWZlMjU/s(w:1280,h:720),webp/021/473/360/v2/2560x1440.207.webp",
  "647d53d861c4f":"https://ei.phncdn.com/videos/202306/05/432911551/original/(m=eafTGgaaaa)(mh=XLEvSbwNnvLwlx6L)14.jpg",
  "xhF3CBZ":"https://ic-vt-nss.xhcdn.com/a/MTQ0NzUyNzdlNDI2MjM4NzBhOTk2N2EwMmMwYzZlMjc/s(w:1280,h:720),webp/017/994/540/v2/2560x1440.207.webp",
  "xhvSuSg":"https://ic-vt-nss.xhcdn.com/a/Y2I1M2E4ODU1NDVkZGIwZTJjOWFiNjEyMGJmMzY5ZGY/s(w:1280,h:720),webp/017/373/315/v2/2560x1440.208.webp",
  "iikhfthd84e":"https://thumb-cdn77.xvideos-cdn.com/aa28fc12-bdb7-486a-8601-ffe8d436c084/0/xv_28_t.jpg",
  "hoeumcd3fed":"https://thumb-cdn77.xvideos-cdn.com/03435b5d-3541-4310-87c1-735528466dab/0/xv_15_t.jpg",
  "ivdkochfcb0":"https://thumbs-gcore.xvideos-cdn.com/bda8fb7f-fdf3-412b-86de-7fc3be197c77/0/xv_24_t.jpg"
};
