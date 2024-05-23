<h2>Ejercicio 61</h2>
<h3>suma de dos numeros</h3>
<pre>
    <code>
        Funcion suma <- sumaNumeros  (x,z)
            //Escribir 'Ingresa dos numeros enteros'
            //leer x 
            //Leer z
            suma = x + z
        FinFuncion
        Algoritmo ejercicio61
            suma = sumaNumeros(5 , 5);
            Escribir 'La suma de los dos numeros es: ', suma;
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 62</h2>
<h3>factorial de un numero</h3>
<pre>
    <code>
        Funcion factorial <- numer(x)
            factor <- 1
            i <- 1
            mientras i <= x  Hacer
                factor = factor * i
                i = i + 1
                factorial = factor
            FinMientras
        FinFuncion
        Algoritmo sin_titulo
            factorial = numer(3) 
            Escribir 'El factorial del numero ingresado es: ',factorial;
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 63</h2>
<h3>mayor de tres numeros</h3>
<pre>
    <code>
        Funcion nume <- mayor_ (a,b,c)
            si a > b y a > c Entonces
                nume = a
            FinSi
            si b > a y b > c Entonces
                nume = b
            FinSi
            si c > a y c > b Entonces
                nume = c
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            nume = mayor_(3,5,2)
            Escribir'El numero mayor es: ' nume
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 64</h2>
<h3>area de un circulo</h3>
<pre>
    <code>
        Funcion area <- radio(a)
            Escribir 'Ingresa un tu radio del circulo'
            leer radi
            area = ( radi * radi) * 3.1416 
        FinFuncion
        Algoritmo sin_titulo
            area = radio(a)
            Escribir 'El area del circulo es: ', area;
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 65</h2>
<h3>potencia de un numero</h3>
<pre>
    <code>
        Funcion base <- exponente(a,b)
            base = a
            para i = 1 Hasta b Con Paso 1 Hacer
                base = base * a
                Escribir base
            FinPara
        FinFuncion
        Algoritmo sin_titulo
            base = exponente(3,5);
            Escribir 'El resultado es: ', base;
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 66</h2>
<h3>ordanamiento de una lista</h3>
<pre>
    <code>
        Funcion li(numeros_a)
            para i = 1 Hasta 6 Con Paso 1 Hacer
                menor1 = numeros_a[i]
                posicion_menor1 = i
                para p = i + 1 Hasta 6 Con Paso 1 Hacer
                    Si numeros_a[i] > numeros_a[p] Entonces
                        numeros_a[i]  = numeros_a[p]
                        numeros_a[p] = menor1
                        menor1 =  numeros_a[i] 
                    Fin Si
                FinPara
                Escribir numeros_a[i]
            FinPara
        FinFuncion
        Algoritmo sin_titulo
            definir numeros_a, menor1, posicion_menor Como Entero
            Dimension numeros_a[6]
            numeros_a[1]= 2
            numeros_a[2]= 8
            numeros_a[3]= 6
            numeros_a[4]= 4
            numeros_a[5]= 1
            numeros_a[6]= 3
            li(numeros_a)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 67</h2>
<h3>promedio de una lista</h3>
<pre>
    <code>
        funcion notas <- promedio(lista)
            para i= 1 hasta 10 Con Paso 1 Hacer
                notas = notas + i
            FinPara
        FinFuncion
        Algoritmo sin_titulo
            Definir numeros_ Como Entero
            Dimension numeros_[6]
            numeros_[1]= 2
            numeros_[2]= 8
            numeros_[3]= 6
            numeros_[4]= 4
            numeros_[5]= 1
            numeros_[6]= 3
            notas = promedio(numeros_)
            Escribir notas / 6
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 68</h2>
<h3>inversion de una cadena</h3>
<pre>
    <code>
        Funcion cadena1(frase)
            cantidad= Longitud(frase)
            para i = cantidad Hasta 1 Con Paso -1 hacer
                Escribir Subcadena(frase,i,i) Sin Saltar
            FinPara
        FinFuncion
        Algoritmo sin_titulo
            cadena1('rosa')
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 69</h2>
<h3>verificacion de numeros primos</h3>
<pre>
    <code>
        Funcion numer(uno,dos) 
            Definir num Como Entero
            primo = Verdadero
            para i = 2 Hasta num-1 Con Paso 1 Hacer
                si num % i == 0 Entonces
                    primo = Falso
                FinSi
            FinPara
            Escribir primo
        FinFuncion
        Algoritmo sin_titulo
            numer(7,primo)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 70</h2>
<h3>coinversion de grados celsius a Fahrenheit</h3>
<pre>
    <code>
        Funcion conversion(numero1)
            temperatura1 <- numero1 * (9 / 5) + 32
            escribir "La temperatura en grados Fahrenheit es: ", temperatura1
        FinFuncion
        Algoritmo sin_titulo
            escribir " Ingresa la temperatura en grados celsius" 
            leer numero1
            conversion(numero1)
        FinAlgoritmo
    </code>
</pre>

<br>