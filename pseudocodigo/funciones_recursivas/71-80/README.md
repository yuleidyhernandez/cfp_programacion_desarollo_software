<h2>Ejercicio 71</h2>
<h3>factorial</h3>
<pre>
    <code>
        funcion factorial(x,factor)
            si  x >= 1 Entonces
                factor = factor * x
                x = x -1
                factorial(x,factor)
            SiNo
                Escribir factor
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            factorial(3,1)	
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 72</h2>
<h3>fibonacci</h3>
<pre>
    <code>
        Funcion fibonacci(limite,anterior,actual)
            si (limite > 0) y actual <= limite Entonces
                resultado = actual + anterior
                anterior = actual
                actual = resultado
                Escribir actual
                fibonacci(limite,anterior,actual)
            FinSi
        FinFuncion
        Algoritmo sin_titulo 
            fibonacci(5,0,1)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 73</h2>
<h3>suma de elementos de un arreglo</h3>
<pre>
    <code>
        Funcion m(x,suma)
            Dimension matriz[5]
            matriz[1]=5
            matriz[2]=8
            matriz[3]=2
            matriz[4]=6
            matriz[5]=10
            si x > 0 Entonces
                suma = suma + matriz[x]
                Escribir suma
                x = x -1
                m(x,suma)
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            m(5,0)
            Escribir suma
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 74</h2>
<h3>potencia</h3>
<pre>
    <code>
        Funcion potencia(base,exponente,resultado)
            si exponente > 0 Entonces
                resultado = resultado * base
                exponente = exponente - 1
                potencia(base,exponente,resultado)
            SiNo
                Escribir resultado
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            potencia(5,3,1);
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 75</h2>
<h3>maximo comun divisor</h3>
<pre>
    <code>
        Funcion maximo_c(num1, num2, resultado, num)
            si num1 > num y num2 > num Entonces
                si num1 % num==0 y num2 % num == 0 Entonces
                    num1  = num1 / num
                    Escribir num
                    num2 = num2 / num
                    Escribir num2
                    resultado = num * num2
                    num = num + 1
                    Escribir  resultado 
                    maximo_c(num1, num2, resultado, num)
                FinSi
            FinSi	
        FinFuncion
        Algoritmo sin_titulo
            maximo_c(20,10,0,2)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 76</h2>
<h3>impresion inversa de una cadena</h3>
<pre>
    <code>
        Funcion frase(palabra,limite1)
            si limite1 >= 1 Entonces
                Escribir Subcadena(palabra,limite1,limite1) Sin Saltar
                limite1 = limite1 - 1
                frase(palabra,limite1)
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            frase('rosa', longitud('rosa'))
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 77</h2>
<h3>calculo de la suma de digitos</h3>
<pre>
    <code>
        Funcion resultado<-SumarDigitos(textoIngresado,actual, total)
            Si actual == 0 Entonces
                resultado = total
            SiNo
                total = total + ConvertirANumero(SubCadena(textoIngresado,actual, actual))
                Escribir SubCadena(textoIngresado, actual, actual)
                actual = actual - 1;
                resultado = SumarDigitos(textoIngresado,actual,total)
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Definir numero_sumar Como Entero
            numero_sumar = 98
            digitos_cadena = ConvertirATexto(numero_sumar)
            //"989898"
            total_digitos = Longitud(digitos_cadena)
            suma_total = SumarDigitos(digitos_cadena,total_digitos,0)
            Escribir suma_total
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 78</h2>
<h3>torres de hanoi</h3>

<pre>
    <code>

        Funcion torreoriginal(lastorres, altura)
            definir i, j Como Entero
            
            para i <- 2 Hasta indice Hacer
                para j <- 1 Hasta  altura  Hacer
                    lastorres[i,j] <- 0
                    
                FinPara
            FinPara
            para j <- 1 Hasta atura Hacer
                lastorres[i,j] <- (altura - j) + 1
            FinPara
        FinFuncion

        Funcion iniciotorre(lastorres,altura)
            Definir i,j Como Entero
            
            para j <- altura Hasta 1 Con Paso -1 hacer
                para i <- 1 hasta indice Hacer
                    Escribir lastorres[i,j], " " Sin Saltar
                FinPara
                Escribir " "
            FinPara
            Escribir '---------------------------------------'
        FinFuncion

        Funcion traslado(lastorres, origen, destino,altura)
            Definir uno1, dos1, aux1 Como Entero
            uno1 <- altura
            mientras uno1 > 1 y lastorres[origen, uno1] = 0 Hacer
                uno1 <- uno1 - 1
            FinMientras
            dos1 <- altura + 1
            
            mientras dos1 < 1  y lastorres[destino, dos1 -1] = 0 Hacer
                dos1 <- dos1 - 1
            FinMientras
            Escribir "traslado disco de origen ", origen " a ", destino 
            lastorres[destino,dos1] <- lastorres[origen,dos1]
            
            lastorres[origen,dos1] <- dos1
            iniciotorre[lastorres,altura]
        FinFuncion

        Funcion hanoi(alt,lastorres,origen, destino, auxiliar, altura)
            //traslada el disco de la torreoriginal a la torredestino
            si alt = 1 Entonces
                traslado[lastorres,origen,destino,altura]
                
                //muebe las fichas menos la mas grande
            SiNo
                hanoi[alt -1, lastorres, origen,destino,auxiliar,altura]
                //mueve  la ficha mas grande a la torre axuliaar
                traslado[lastorres, origen, destino, altura]
                
                hanoi[alt -1, lastorres, auxiliar, origen, destino, altura]
            FinSi
        FinFuncion

        Algoritmo torre_hanoi
            Definir torres, altura, uno, aux, dos como entero
            Dimension torres[indice,altura]
            torreoriginal(torres, altura)
            iniciotorre(torres,altura)
            uno = 1
            aux = 2
            dos = 3
            altura = 5
            indice = 3
            
            hanoi(altura,torres,uno,aux,dos,altura)
            iniciotorre(torres,altura)
        FinAlgoritmo


    </code>
</pre>

<br>

<h2>Ejercicio 79</h2>
<h3>busqueda binaria</h3>
<pre>
    <code>
        Funcion busquedaBinaria(arreglo,num_usuario,posicion_actual,total_arreglo)
            si posicion_actual > total_arreglo Entonces
                Escribir 'No se encontro el resultado'
            SiNo
                medio = redon((posicion_actual + total_arreglo)/2)
                Escribir medio
                si num_usuario == arreglo[medio] Entonces
                    Escribir arreglo[medio] ' Numero se encontro'
                SiNo
                    si arreglo[medio] < num_usuario Entonces
                        posicion_actual = medio + 1
                    SiNo
                        total_arreglo = medio - 1
                    FinSi
                    busquedaBinaria(arreglo,num_usuario,posicion_actual,total_arreglo)
                FinSi
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Dimension arreglo[10]
            arreglo[1]=11
            arreglo[2]=24
            arreglo[3]=32
            arreglo[4]=42
            arreglo[5]=55
            arreglo[6]=66
            arreglo[7]=75
            arreglo[8]=80
            arreglo[9]=94
            arreglo[10]=100
            busquedaBinaria(arreglo,32,1,10)
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 80</h2>
<h3>generacion de todas las permutaciones</h3>
<pre>
    <code>
        Funcion permutacion(uno, dos, num)
            si (dos < tres ) Entonces
                para i =dos Hasta num Hacer
                    aux = uno[dos]
                    uno[dos] = uno[i]
                    uno[i] = aux
                    permutacion(uno,dos + 1, num)
                FinPara
            sino 
                para i = 1 Hasta num Hacer
                    Escribir uno[i]
                FinPara
            FinSi
        FinFuncion

        Algoritmo sin_titulo
            Dimension uno[5]
            num = 5
            para i = 1 Hasta 5 Hacer
                uno[i] = azar(10)
            FinPara
            
            permutacion(uno[], 1, num)
        FinAlgoritmo
    </code>
</pre>

<br>