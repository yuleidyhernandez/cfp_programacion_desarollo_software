<h2>Ejercicio 31</h2>
<h3>suma de numeros</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            resultado = 0
            Para num = 1 Hasta 10 con Paso 1 Hacer
                resultado = resultado + num
            Fin Para
            escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 32</h2>
<h3>tabla de multiplicar</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir num Como Entero
            escribir "Ingrese un numero"
            leer num
            para sum = 1 hasta 10  con paso 1 Hacer
                i= num * 1
            escribir num '*',sum '=' num * sum
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 33</h2>
<h3>factorial</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            resultado = 1
            definir factor Como Entero 
            escribir "Ingresa un numero"
            leer factor
            para a = 1 hasta factor con paso 1 hacer 
                resultado = resultado * a
            FinPara
            escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 34</h2>
<h3>contador regresivo</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            para a = 10 Hasta 1 con paso -1 hacer
                escribir a
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 35</h2>
<h3>impresion de caracteres</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            para e = 1 hasta 5 con paso 1 hacer 
                texto1 = texto1 + " *"
                escribir texto1
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 36</h2>
<h3>potencias de dos</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numer,resultado Como Entero
            escribir "ingresar numero"
            leer numer
            Para potencia = 0 Hasta 4 Con Paso 1 Hacer
                si potencia = 0 Entonces
                    resultado = 1
                SiNo
                    resultado = resultado * numer
                    escribir num," potencia ",potencia " = ",resultado
                FinSi
            Fin Para
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 37</h2>
<h3>suma de numeros pares</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            resultado = 0
            para a = 2 Hasta 20 Con Paso 2 Hacer
                resultado = resultado + a
            FinPara
            escribir resultado
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 38</h2>
<h3>contador de digitos</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir cantidad Como caracter
            definir numero1 Como entero
            escribir "Ingrese un numero"
            leer numero1
            cantidad = ConvertirATexto(numero1)
            cantidades = Longitud(cantidad)
            sum = 0
            para i = 1 hasta cantidades con paso 1 Hacer 
                sum = sum + 1
            FinPara
            escribir sum
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 39</h2>
<h3>secuencia fibonaci</h3>
<pre>
    <code>
        Algoritmo sin_titulo 
            Definir anterios Como Entero
            Definir actual Como entero
            para i= 0 hasta 10 con paso 1 Hacer
                Escribir actual
                si (i= 0) Entonces
                    anterior = 0
                    actual = 1
                sino 
                    resultado = actual + anterior
                    anterior = actual
                    actual = resultado  
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 40</h2>
<h3>patro  numerico</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir resultado Como Caracter
            para i = 0 Hasta 3 Con Paso 1 Hacer
                resultado = Concatenar(resultado,ConvertirATexto(i))
                escribir resultado
            FinPara
        FinAlgoritmo
    </code>
</pre>

<br>
