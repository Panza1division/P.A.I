/* Przez okna dialogowe wyegzekwuj trzy liczby rzeczywiste takie, by spełniały warunek trójkąta. Ponowne wczytywanie tych liczb należy poprzedzić oknem z komunikatem o złych danych. Oblicz jego pole i obwód, a następnie w oknie dialogowym wyświetl boki i wyniki obliczeń (3 miejsca po przecinku) wraz z odpowiednimi komunikatami.
(prompt("Podaj 3 liczby rzeczywiste:"+ ""))*/

let a, b, c, ob,p, S;

do{
    do{
        a=parseInt(prompt("Podaj długosć boku a: "));
    }while(isNaN(a||a<=0))
    do{
        b=parseInt(prompt("Podaj długosć boku b: "));
    }while(isNaN(b||b<=0))
    do{
        c=parseInt(prompt("Podaj długosć boku c: "));
    }while(isNaN(c||c<=0))   
}while(a+b<c||b+c<a||a+c<b);
ob = a+b+c;
p = (ob/2);
S=(Math.sqrt(p*(p-a)*(p-b)*(p-c)));
alert("Pierwszy bok=" +a.toFixed(3)+ "\nDrugi bok= " +b.toFixed(3)+ "\nTrzeci bok= " +c.toFixed(3)+ "\nObwód to= " +ob.toFixed(3)+ "\nPole to= " +S.toFixed(3));