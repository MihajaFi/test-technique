function StringCutter(){
    let str = "blablablabaq dfjqdsf qsdfm qsdf qds";

    let maxLength = 30;
    let StringCut = str.slice(0, maxLength);
    
    if (str.length > maxLength) {
      StringCut += "...";
    }
    
}

StringCutter(console.log(StringCutter));