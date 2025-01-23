const boros_manifesto = "Mikor a szüleiddel ezt az iskolát választottátok, egyik legfontosabb szempont az lehetett, hogy végzés után könnyen el tudj helyezkedni, könnyen tudj tovább haladni."+
"Az átlagostól jobb tovább lépési lehetőséget a Petrikben eddig végzett diákok tudása miatt biztosítják mind a munkáltatók, mind a felsőoktatás dolgozói. És most az osztályotokban vannak, akik még az adatbáziskezelőt is alig indították el és szinte semmit sem tanultak az elmúlt hónapokban. Helyette a többieket szórakoztatják órán és szünetben is. És nekem jó, sőt jeles jegyet kell adnom nekik, mert a beadott munkáik alapján csak ilyet adhatok. Miért nem tudom a tudásuk alapján értékelni őket? Mert a jó fej osztálytársak tálcán kínálják a kiadott feladatokra a megoldást. Sajnos néha még erről a tálcáról sem tudnak választani, mert annyira csekély a tudásuk. Őket nem érdekli mi lesz másfél év múlva. Most akarják jól érezni magukat."+
"Akik most a mások tudásából élnek elfeledkeznek arról, hogy ki fognak lépni az iskolából és amit itt kellett volna megtanulniuk azt máshol nem fogják megkapni!"+
"Akik segítenek nekik, valójában tudatlanságban tartják őket és ezzel a leggonoszabb dolgot teszik velük. Most elhitetik velük, hogy így minden rendben, de nem lesznek velük ott, amikor a tudás hiányukkal szembesítik majd őket. Arra sem gondolnak, hogy jól fizető állást bukhatnak az általuk megsegített társaik segítségével, mert futótűzként terjed majd a hír, hogy már a Petrik sem a régi, tudatlanul is elvégezhető. A munkáltatók inkább máshol végzettet fognak helyettük választani."+
"És még egy mondat a tiszteletről. Tudom tisztelni azokat, akik az érdemtelenül gyenge jegy miatt felemelik a szavukat, de azokat már kevésbé, akik szemet hunynak akkor, ha érdemtelenül kapnak jó jegyet."+
"Tudom tisztelni azokat, akik segítenek társaiknak a problémák megoldásában, de nem tudom tisztelni azokat, akik tudatlanságban tartják társaikat, hogy jó fejnek tűnjenek."+
"Boldog új évet!"

borosArray = boros_manifesto.split(" ");

function borosIpsum(wordcount,linebreak) {
    ipsumArray = [];
    for(i=0; i<=wordcount; i++) {
        ipsumArray.push(i%linebreak==0?"\n":""+borosArray[Math.floor(Math.random() * (borosArray.length-1))])
    }
    return ipsumArray.join(" ")
}

console.log(borosIpsum(500,0))