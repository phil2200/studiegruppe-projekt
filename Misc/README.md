# 50NE WEBSHOP
## 1. Beskrivelse 
Vi ønsker, at vores system skal kunne håndtere lagring af brugeroplysninger med henblik på, at brugeren skal kunne lave en ordre/bestilling på vores webshops produkter.

Systemet besidder et navigationssystem, der lader brugeren navigere rundt mellem produkterne, som består af henholdsvis “T-shirts” og “Hoodies”, “brugerprofil”, “Help/FAQ” og “indkøbskurv”

“Indkøbskurven” skal give brugeren mulighed for at få et overblik over vedkommendes valgte produkter, samt en summering af den samlede pris. Under “brugerprofil”  skal det være muligt for brugeren at oprette en bruger, hvorved systemet skal kunne behandle lagring af brugeroplysninger til fremtidig login. Det skal derudover være muligt for den oprettede bruger at få en oversigt over brugerens egne oplysninger, igangværende ordre, ordrestatus, samt tidligere ordrer. 

Vores system skal endvidere bestå af en betalingsside, hvor brugeren kan få et overblik over varer i “indkøbskurven”, samt have muligheden for at benytte sig af en eventuel rabatkode. Derudover skal betalingssiden indeholde betalingsoplysninger, som umiddelbart bliver MobilePay. Dertil skal det være muligt at se en estimeret forventet tid på leveringen af brugerens ordrer. 

Når betalingen er gennemført skal vores system videreføre brugeren til en gennemført-betalingsside, hvor ordren er blevet bekræftet. På denne side skal systemet oplyse brugerens ordrenummer, bestilte varer, samt opgive ordrens “alder”, altså dato og tidspunkt for, hvornår ordren er blevet bekræftet og gennemført. 

## 2. Sketches 
De 6 billeder nedenfor viser vores idé med webshoppen 

Tekst skrevet med rødt er vejledende tekst, som ikke skal fremgå på webshoppen

![Products](https://github.com/phil2200/studiegruppe-projekt/blob/master/products.png)
![product](https://github.com/phil2200/studiegruppe-projekt/blob/master/product.png)
![shipping](https://github.com/phil2200/studiegruppe-projekt/blob/master/shipping.png)
![payment](https://github.com/phil2200/studiegruppe-projekt/blob/master/payment.png)
![user](https://github.com/phil2200/studiegruppe-projekt/blob/master/user.jpg)
![userprofile](https://github.com/phil2200/studiegruppe-projekt/blob/master/user2.png)

## 3. Kravspecifikationer
Vores første kravsspecifikation er oprettelse af bruger, som skal kunne lagre bruger-oplysninger til fremtidig login. Dette skal føre til en brugerprofil, som indeholder:
<ul>
Brugeroplysninger, som skal kunne redigeres
</ul>
<ul>
Ordrestatus på den igangværende ordre
</ul>
<ul>
Ordrehistorik, som indebærer tidligere ordrer
</ul>
<ul>
Mulighed for at slette brugerprofil 
</ul>

Næst skal der være en navigationsoversigt, som skal give brugeren mulighed for at navigere rundt på siden. Nedenstående punkter er indholdet i navigationsoversigten
<ul>
”Home”, som er strartsiden
</ul>
<ul>
”Produkter”, herunder ”T-shirts” og ”Hoodies”, som er de produkter, der forhandles på webshoppen
</ul>
<ul>
”Help/FAQ”, som skal indeholde de mest stillede spørgsmål med svar, kunne fx være spørgsmål omkring returnering af produkter
</ul>
<ul>
Ikoner i øvre-højre hjørne er genveje til ”brugerprofil” og ”indkøbskurv”
</ul>

Ovenstående fører til at indkøbskurven har følgende kravsspecifikationer
<ul>
Overblik over produkter
</ul>
<ul>
Summering af priser
</ul>
<ul>
Kontaktinformation på brugeren
</ul>
<ul>
Leveringsinformation
</ul>
<ul>
Forventet leveringstid
</ul>
<ul>
Rabatkode
</ul>

Endvidere bliver man først til en betalingsside, hvor man kan få et overblik over varer i ”indkøbskurv”, igen en summering af priser og et betalingsvindue, hvor der kan betales med MobilePay 

Til sidst vil man komme frem til en gennemført-betalingsside, hvor man vil få oplyst ordrenummer, få en bekræftelse på bestillingen og hertil også en oversigt over de bestilte varer.

## 4. UML-diagram
![UML-diagram](https://github.com/phil2200/studiegruppe-projekt/blob/master/UML%20For%205One.%20drawio.jpg)
