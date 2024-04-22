<h2>Ejercicio 11</h2>
<h3>numero positivo negativo</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numero0 Como Real
            escribir "Ingresar un numero: "
            leer numero0
            si (numero0 < 0)  entonces 
                escribir "El numero que ingresaste es negativo" 
                si (numero1 > 0) Entonces
                    escribir "El numero que ingresaste es positivo"
                FinSi
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 12</h2>
<h3>par o impar</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numero1 Como Entero
            escribir "Ingrese un numero entero" 
            leer numero1
            si (numero1 % 2 = 0) Entonces
                escribir "El numero ingresado es impar"
                si (numero1 % 2 = 0) Entonces
                    Escribir "El numero ingresado es par"
                FinSi
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 13</h2>
<h3>dia de la semana</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numero2 Como Entero
            definir dias Como Entero
            escribir "Ingresa un numero del 1 al 7"
            leer numero2
            si (numero2 = 1) Entonces
                Escribir "lunes" 
            FinSi
            si (numero2 = 2) Entonces
                escribir "Martes"
            FinSi
            si (numero2 = 3 ) Entonces
                Escribir "Miercoles"
            FinSi
            si (numero2 = 4) Entonces
                Escribir "Jueves"
            FinSi
            si (numero2 = 5) Entonces
                Escribir "Viernes"
            FinSi
            si (numero2 = 6 ) Entonces
                escribir "Sabado"
            FinSi
            si (numero2 = 7 ) Entonces
                Escribir "Domingo"
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 14</h2>
<h3>mayor de tres numeros</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numero1 como entero 
            definir numero2 como entero
            definir numero3 Como Entero
            escribir "Ingresa un numero entero: "
            leer numero1
            escribir "Ingresa otro numero entero: "
            leer numero2
            escribir "Ingresa otro numero entero: "
            leer numero3
            si (numero1 > numero2) y (numero1 >numero3) Entonces
                Escribir "El numero ingtresado primero: ",numero1, " es mayor a el numero ingresado de segundo:"  numero2 " y a numero inresado de tercero: " numero3
            FinSi
            si (numero2 > numero1) y (numero2 > numero3) Entonces
                Escribir "El numero ingresado de segundo: ", numero2 ," es mayor a el numero ingresado en primero :" numero1 " y a numero ingresado tercero: " numero3
            FinSi
            si (numero3 > numero1) y (numero3 > numero2) Entonces
                Escribir "El numero ingresado de tercero: ", numero3, " es mayor a el numero ingresado de primero: " numero1 " y a numero ingrtesado de segundo: " numero2
            FinSi
            si (numero1=numero2) y (numero1=numero3) Entonces
                Escribir "Son los mismos valores"
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 15</h2>
<h3>aprobado o reprobado</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numero1 Como Entero
            escribir "Ingrese un numero entero"
            leer numero1
            si (numero1 <= 10) Entonces
                Escribir "El numero que ingresate esta en el rango del 1 al 10"
            FinSi
            si (numero1 > 10) Entonces
                Escribir "El numero esta fuera del rango "
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 16</h2>
<h3>rango de numero</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir numero1 Como Entero
            escribir "Ingrese un numero entero"
            leer numero1
            si (numero1 <= 10) Entonces
                Escribir "El numero que ingresate esta en el rango del 1 al 10"
            FinSi
            si (numero1 > 10) Entonces
                Escribir "El numero esta fuera del rango "
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 17</h2>
<h3>categoria de edad</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir edad Como Entero
            Escribir "Ingresa tu edad"
            leer edad
            si (edad <= 12) Entonces
                Escribir "Eres un niño"
            FinSi
            si (edad <= 17) Entonces
                Escribir "Eres un adolescente"
            FinSi
            si (edad <= 64) Entonces
                Escribir "Eres un adulto"
            FinSi
            si (edad > 65 ) Entonces
                Escribir "Eres un adulto mayor"
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 18</h2>
<h3>calculadora de descuento</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir precio como real
            definir final como real
            escribir "Ingresa el precio"
            leer precio
            final = 10*precio /100
            si (precio >= 100) Entonces
                Escribir "Tu precio final es de: ", final
            FinSi 
            si (precio < 100) Entonces
                Escribir "Tu total es de: ", precio
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 19</h2>
<h3>divisibilidad po 5 y 3</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir num Como Entero
            escribir "Ingresar un numero"
            leer num 
            si (num % 3 = 0) y (num % 5 = 0) Entonces
                Escribir "Tu numero ingresado es divisible entre 3 y 5"
            FinSi
            si (num % 3 = 1) y (num % 5 = 1) Entonces
                Escribir "El numero ingresado no es divisible entre 3 y 5"
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 20</h2>
<h3>dia habil o fin de semana</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir nume Como Entero
            Escribir "In gresar un  numero entero del 1 al 7"
            leer nume
            si (nume <= 5) Entonces
                Escribir "Es un dia hábil"
            FinSi
            si (nume = 6) o (nume = 7) Entonces
                Escribir "Es dia del fin de semana"
            FinSi
        FinAlgoritmo
    </code>
</pre>

<br>