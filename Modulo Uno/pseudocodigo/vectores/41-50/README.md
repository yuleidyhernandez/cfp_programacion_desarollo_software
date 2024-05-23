<h2>Ejercicio 41</h2>
<h3>suma de elementos</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir valor1 como entero
            Definir  numero1 Como Entero

            Dimension numero1[5]

            para i = 1 Hasta 5 con paso 1 Hacer
                escribir "Ingrese 5 numeros"
                Leer numero1[i]
                valor1 = numero1[i] + valor1
            FinPara
            escribir valor1
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 42</h2>
<h3>contador de ocurrencias</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir numeros1 Como real
            definir menor1,mayor1 Como real
            Dimension numeros1[8]

            numeros1[1]=11
            numeros1[2]=11.5
            numeros1[3]=10.5
            numeros1[4]=1
            numeros1[5]=12
            numeros1[6]=20
            numeros1[7]=15
            numeros1[8]=9

            mayor1 = numeros1[1]
            menor1 = numeros1[1]

            para i= 1 Hasta 8 Con Paso 1 Hacer
                Si numeros1[i] > mayor1 Entonces
                    mayor1 = numeros1[i]
                FinSi

                si  numeros1[i] < menor1 Entonces
                    menor1 <- numeros1[i]
                FinSi

            FinPara
            escribir "El numero mayor es: ",mayor1
            Escribir "El numero menor es: ",menor1
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 43</h2>
<h3>calculo de descuento por categoria</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir promedio,califi, suma Como Entero
            Dimension promedio[10]

            promedio[1] = 5
            promedio[2] = 6
            promedio[3] = 9
            promedio[4] = 9
            promedio[5] = 8
            promedio[6] =5
            promedio[7] = 7
            promedio[8] =4
            promedio[9] =8
            promedio[10]=7

            para i= 1 hasta 10 Con Paso 1 Hacer
                suma = suma + promedio[i]
            FinPara
            escribir suma / 10
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 44</h2>
<h3>ordanamiento de array</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir numeros1 como entero
            Dimension numeros1[6]

            numeros1[1]=7
            numeros1[2]=4
            numeros1[3]=3
            numeros1[4]=4
            numeros1[5]=5
            numeros1[6]=6

            para i= 1 Hasta 6 Con Paso 1 Hacer
                si i % 2 = 0 Entonces
                    contador = contador +1
                FinSi
            FinPara
            Escribir  contador
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 45</h2>
<h3>eliminacion de duplicados</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir letra, abecedario Como Caracter
            Dimension abecedario[7]

            abecedario[1]= "a"
            abecedario[2]= "b"
            abecedario[3]= "c"
            abecedario[4]= "d"
            abecedario[5]= "e"
            abecedario[6]= "f"
            abecedario[7]= "g"

            Escribir "Ingresa una letra"
            leer letra
            
            para i= 1 Hasta 7 Con Paso 1 Hacer
                escribir "entrae"
                si letra == abecedario[i] Entonces
                    escribir "La letra ingresada ya existe"
                    i = 7
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 46</h2>
<h3>inversion de un array</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir numeros1 Como Entero
            Dimension numeros1[10]
            para i = 10 Hasta 1 Con Paso -1 Hacer
                numeros1[i] = i
                Escribir numeros1[i]
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 47</h2>
<h3>contador de ocurrencias</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir letras,letra Como Caracter
            Escribir "Ingresa una letra"
            leer letra
            total  = 0
            Dimension letras[15]
            letras[1]="a"
            letras[2]="b"
            letras[3]="e"
            letras[4]="j"
            letras[5]="a"
            letras[6]="h"
            letras[7]="e"
            letras[8]="r"
            letras[9]="m"
            letras[10]="o"
            letras[11]="s"
            letras[12]="a"
            letras[13]="a"
            letras[14]="a"
            letras[15]="a"
            para i = 1 Hasta 15 Con Paso 1 Hacer
                si letras[i] = letra Entonces
                    total = total + 1
                FinSi
            FinPara
            escribir total
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 48</h2>
<h3>calculo de descuento por categoria</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir categoria,producto como caracter
            dimension producto[2,3]
            Dimension categoria[3,2]
            // La siguiente linea es para asignar el valor a las filas
            para f= 1 Hasta 2 Con Paso 1 Hacer
                producto[1,1] = 'pantalon' 
                producto[1,2]= '100'
                producto[1,3]='A'
                producto[2,1] ='camisa'
                producto[2,2]='85'
                producto[2,3]='B'
                categoria[1,1]="A"
                categoria[1,2]='10'
                categoria[2,1]= "B"
                categoria[2,2]='5'
                categoria[3,1]= "C"
                categoria[3,2]='0'
                //La siguiente linea es para recorer fila columna de categoria
                para fc = 1 Hasta 3 con paso 1 Hacer
                    si producto[f,3] = categoria[fc,1] Entonces
                        descuento = ConvertirANumero(producto[f,2]) * ConvertirANumero(categoria[fc,2]) / 100
                        resultado = ConvertirANumero(producto[f,2])-descuento
                    FinSi
                FinPara
                Escribir resultado
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 49</h2>
<h3>ordamiento de array</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numeros_a, menor1, posicion_menor Como Entero
            Dimension numeros_a[6]
            numeros_a[1]= 2
            numeros_a[2]= 8
            numeros_a[3]= 6
            numeros_a[4]= 4
            numeros_a[5]= 1
            numeros_a[6]= 3
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
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 50</h2>
<h3>eliminacion de doplicados</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir num1, nva,ultima_posicion Como Entero
            Definir existe Como Logico
            Dimension num1[12]
            Dimension nva[12]
            num1[1]= 9 
            num1[2]= 7
            num1[3]= 8
            num1[4]= 2
            num1[5]= 8
            num1[6]= 4
            num1[7]= 10 
            num1[8]= 5
            num1[9]= 8
            num1[10]= 15
            num1[11]= 8
            num1[12]= 4
            existe = Falso
            ultima_posicion = 1
            para i = 1  Hasta 12 Con Paso 1 Hacer
                existe = Falso
                para p = 1 hasta 12 Con Paso 1 Hacer
                    si nva[p] = num1[i]  Entonces
                        existe = Verdadero
                        p = 12
                    FinSi
                FinPara
                si (existe = Falso ) Entonces
                    Escribir num1[i]
                    nva[ultima_posicion] = num1[i]
                    ultima_posicion = ultima_posicion + 1
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>