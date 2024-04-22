<h2>Ejercicio 21</h2>
<h3>contador ascendente</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            numer = 0
            Mientras (numer < 10)  Hacer
                numer <- numer + 1
                Escribir  numer
            Fin Mientras
        FinAlgoritmo
    </code>
</pre>

<br>


<h2>Ejercicio 22</h2>
<h3>contador descendente</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            nume =11
            mientras (nume <> 1) Hacer
                nume <- nume - 1
                escribir nume
            FinMientras
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 23</h2>
<h3>suma de numeros positivos</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir posi como real

            repetir 
            escribir "Ingrese un numero: "
            leer posi

                positivos = posi + positivos
            Hasta Que (posi< 0)
            escribir positivos - posi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 24</h2>
<h3>adivina el numero</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir suerte, vari Como Entero

            vari <- azar(100)

            escribir "Adivina el numero secreto"
            escribir vari

            Repetir
                escribir "Ingresa un numero entero"
                leer suerte
            Hasta Que (vari= suerte)
                Escribir "felicidades " vari
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 25</h2>
<h3>validacion de contraseña</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir contraseña1,contraseña Como Caracter
            contraseña1= "hola"

            Repetir
                escribir "Ingresa tu contraseña"
                leer contraseña
            Hasta Que (contraseña= contraseña1)
                escribir "Acceso consedido"
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 26</h2>
<h3>numero positivo</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir numeroN Como Entero

            Repetir
                Escribir "Ingresa un numero entero negativo"
                leer numeroN
            Hasta Que (numeroN > 0)

            Escribir numeroN "  numero no valido"
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 27</h2>
<h3>suma de numeros pares</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir numer Como Entero
            Definir nosi Como Caracter

            Repetir
                Escribir "Ingresa un numero"
                leer numer

                Escribir "Quieres seguir ingresando numeros"
                leer nosi

                si (numer % 2 = 0) Entonces
                    num = numer + num
                    escribir ""
                FinSi
            Hasta Que (nosi = "no")
            escribir num
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 28</h2>
<h3>adivina el numero</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir gana, fijo,intentos Como Entero

            intentos  = 0
            fijo <- azar(50)

            escribir "Adivina el numero secreto"
            escribir fijo

            Repetir
                intentos = intentos +1
                escribir "Ingresa un numero entero"
                leer gana
            Hasta Que (fijo = gana)
            Escribir "felicidades:    Numero de intentos: " intentos
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 29</h2>
<h3>cálculo de factorial</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir factor Como Entero

            factorial = 0
            Escribir "Ingrese un numero entero positivo"
            leer factor

            mientras (factor > 0 ) Hacer
                factorial = factor + factor;
            Escribir factorial
            FinMientras
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 30</h2>
<h3>validacion de entrada</h3>

<pre>
    <code>
        Algoritmo sin_titulo
            definir contra Como Caracter

            Repetir
                escribir "Ingrese una contraseña"
                leer contra
            Hasta Que (contra < "8")
            escribir "Contraseña valida"
        FinAlgoritmo
    </code>
</pre>

<br>