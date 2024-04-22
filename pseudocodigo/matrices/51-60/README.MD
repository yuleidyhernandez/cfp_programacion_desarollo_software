<h2>Ejercicio 51</h2>
<h3>suma de matrices</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir matrix1, matrix2, suma,suma1 Como Entero
            Dimension matrix1[3,3]
            Dimension matrix2[3,3]
            //Asignar valores a mi primera matriz
                matrix1[1,1] = 5
                matrix1[1,2] = 1
                matrix1[1,3] = 2
                matrix1[2,1] = 8
                matrix1[2,2] = 9
                matrix1[2,3] = 3
                matrix1[3,1] = 8
                matrix1[3,2] = 9
                matrix1[3,3] = 2
                //Asignar valor a mi segunda matriz
                matrix2[1,1] = 8
                matrix2[1,2] = 5
                matrix2[1,3] = 2
                matrix2[2,1] = 8
                matrix2[2,2] = 6
                matrix2[2,3] = 3
                matrix2[3,1] = 8
                matrix2[3,2] = 2
                matrix2[3,3] = 5
                para i = 1 Hasta 3 Con Paso 1 Hacer
                    para j = 1 Hasta  3 Con Paso 1 Hacer
                        escribir matrix1[i,j] " " " " Sin Saltar 
                        suma = suma + matrix1[i,j]
                    FinPara
                    Escribir " "
                FinPara
                Escribir ""
                para i = 1 Hasta 3 Con Paso 1 Hacer
                    para j = 1 Hasta  3 Con Paso 1 Hacer
                        escribir matrix2[i,j] " " " " Sin Saltar 
                        suma1 = suma1 + matrix2[i,j]
                    FinPara
                    Escribir " "
                FinPara
                Escribir ""
                Escribir 'La suma de ambas matrices es: ' suma+ suma1
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 52</h2>
<h3>promedio por columna</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir promedio_columna, suma como entero
            Dimension promedio_columna[3,4]
            promedio_columna[1,1]=8
            promedio_columna[2,1]=5 
            promedio_columna[3,1]=9
            promedio_columna[1,2]=3
            promedio_columna[2,2]=2
            promedio_columna[3,2]=7
            promedio_columna[1,3]=2
            promedio_columna[2,3]=4
            promedio_columna[3,3]=5
            promedio_columna[1,4]=3
            promedio_columna[2,4]=8
            promedio_columna[3,4]=2
            para c = 1 Hasta 4 Con Paso 1 Hacer
                para f = 1 Hasta 3 Con Paso 1 Hacer
                    suma <- suma + promedio_columna[f,c]
                FinPara
                Escribir suma 	/ 3	
            FinPara
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 53</h2>
<h3>suma de diagonales</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir matriz, suma, suma2 Como entero
            Dimension matriz[5,5]
            matriz[1,1] =5	
            matriz[1,2] =2	
            matriz[1,3] =8	
            matriz[1,4] =3	
            matriz[1,5] =2	
            matriz[2,1] =5	
            matriz[2,2] =5	
            matriz[2,3] =8	
            matriz[2,4] =6	
            matriz[2,5] =4	
            matriz[3,1] =7
            matriz[3,2] =9	
            matriz[3,3] =3	
            matriz[3,4] =4	
            matriz[3,5] =2	
            matriz[4,1] =5
            matriz[4,2] =8	
            matriz[4,3] =6	
            matriz[4,4] =5	
            matriz[4,5] =2	
            matriz[5,1] =4
            matriz[5,2] =2	
            matriz[5,3] =2	
            matriz[5,4] =7	
            matriz[5,5] =9	
            suma = 0
            suma1 = 0
            para i= 1 Hasta  5 Con Paso 1 Hacer
                suma = suma + matriz[i,i]
                suma1 = suma1 + matriz[i,6-i]
            FinPara
            Escribir suma
            escribir suma1
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 54</h2>
<h3>mayor elemento por fila</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir mayor_fila,mayor_1 Como Entero
            Dimension mayor_fila[4,3]
            mayor_fila[1,1] = 1
            mayor_fila[1,2] = 2
            mayor_fila[1,3] = 4
            mayor_fila[2,1] = 8
            mayor_fila[2,2] = 5
            mayor_fila[2,3] = 3
            mayor_fila[3,1] = 3
            mayor_fila[3,2] = 9
            mayor_fila[3,3] = 5
            mayor_fila[4,1] = 6
            mayor_fila[4,2] = 2
            mayor_fila[4,3] = 3
            para i = 1 Hasta 4 Con Paso 1 Hacer
                mayor_1 = mayor_fila[i,1]
                Para j = 1 Hasta 3 Con Paso 1 Hacer
                    si  mayor_fila[i,j] > mayor_1  Entonces
                        mayor_1 = mayor_fila[i,j]
                    FinSi
                FinPara
                Escribir mayor_1
            FinPara
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 55</h2>
<h3>rotacion de matrices</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir matriz, matriz2 Como Entero
            Definir grafica Como Caracter
            Dimension matriz[4,4]
            matriz[1,1] =1
            matriz[1,2] =2
            matriz[1,3] =3
            matriz[1,4] =4
            matriz[2,1] =5
            matriz[2,2] =6
            matriz[2,3] =7
            matriz[2,4] =8
            matriz[3,1] =9
            matriz[3,2] =10
            matriz[3,3] =11
            matriz[3,4] =12
            matriz[4,1] =13
            matriz[4,2] =14
            matriz[4,3] =15
            matriz[4,4] =16
            para i = 1 Hasta 4 Con Paso 1 Hacer
                para j = 1 Hasta  4 Con Paso 1 Hacer
                    escribir matriz[i,j] " " " " Sin Saltar 
                FinPara
                Escribir " "
            FinPara
            Escribir ""
            para i = 1 Hasta 4 Con Paso 1 Hacer
                para j = 4 Hasta  1 Con Paso -1 Hacer
                    escribir matriz[j,i] " " " " Sin Saltar 
                FinPara
                Escribir " "
            FinPara
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 56</h2>
<h3>laberinto</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            //Definir mis Variables
            Definir laberinto Como Entero
            //Asignar la Dimension  de mi matriz
            Dimension laberinto[10,10]
            //Guardar la posicion original de donde empieza mi laberinto
            f_u = 1
            c_u= 9
            //Asignar valores a las posisiones donde ira mi camino
            laberinto[1,9] = 8
            laberinto[2,9] = 1
            laberinto[2,8] = 1
            laberinto[3,8] = 1
            laberinto[3,7] = 1
            laberinto[3,6] = 1
            laberinto[4,6] = 1
            laberinto[5,6] = 1
            laberinto[5,7] = 1
            laberinto[6,7] = 1
            laberinto[6,8] = 1
            laberinto[6,9] = 1
            laberinto[7,9] = 1
            laberinto[8,9] = 1
            laberinto[8,10]= 1
            laberinto[9,10]= 1
            laberinto[10,10]=1
            Repetir
                //limpia lapantalla y muestra la posicion de donde se ubuca el jugador
                Limpiar Pantalla
                Escribir f_u
                Escribir c_u
                //USE UN PARA PARA ASIGNAR LOS CIEN VALORES A MI MATRIZ
                Escribir 'Matriz original'
                para i = 1 Hasta 10 Con Paso 1 Hacer
                    para j = 1 Hasta 10 Con Paso 1 Hacer
                        Si i = f_u y j = c_u Entonces
                            laberinto[i,j] = 8
                        FinSi
                        Escribir laberinto[i,j] " " '|' "  " Sin Saltar
                    FinPara
                    Escribir " "
                FinPara
                Escribir ' '
                //meniu de opciones:para donde se quiere mover el jugador
                Escribir'Selecciona una opcion: 1.abajo, 2.arriba, 3.izquierda, 4.derecha'
                Leer menu
                //condicionales si se cumple la condicion el jugador se podra mover si no se cumple se quedara donde mismo
                si menu = '1' Y laberinto[f_u+1,c_u] <> 0  Entonces
                    laberinto[f_u,c_u] = 1
                    f_u = f_u + 1
                Finsi
                si menu='2' Y laberinto[f_u,c_u - 1] <> 0 Entonces
                    laberinto[f_u,c_u] = 1
                    f_u = f_u - 1
                FinSi
                si menu='3' Y laberinto[f_u,c_u - 1] <> 0  Entonces
                    laberinto[f_u,c_u] = 1
                    c_u = c_u - 1
                FinSi
                si menu='4' Y laberinto[f_u,c_u +1] <> 0 Entonces
                    laberinto[f_u,c_u] = 1
                        c_u = c_u + 1
                FinSi
            Hasta Que f_u=-1 o c_u=-1
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 57</h2>
<h3>busca minas</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir mapa,cantidad_minas Como Entero
            Definir perdio Como Logico
            Dimension mapa[10,10]
            cantidad_minas = Aleatorio(3,5)
            Escribir 'cantidad de minas ',cantidad_minas
            para mina=1 hasta cantidad_minas Con Paso 1 Hacer
                fila_aleatorio = aleatorio(1,10)
                columna_aleatorio= aleatorio(1,10)
                mapa[fila_aleatorio,columna_aleatorio] = 5
            FinPara
            perdio = Falso
            Repetir
                contador = 0
                Escribir 'Ingresa a la posicion que deseas iniciar'
                leer ingreso
                para fila = 1 Hasta 10 Con Paso 1 Hacer
                    para columna= 1 Hasta 10 Con Paso 1 Hacer
                        contador= contador +1
                        si contador = ingreso Entonces
                            si mapa[fila,columna] = 5 Entonces
                                perdio= verdadero
                            SiNo
                                mapa[fila,columna] = 1
                            FinSi
                        FinSi
                        Escribir mapa[fila,columna] ' ' '|' ' ' Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara		
            Hasta Que perdio = Verdadero 
            Escribir ' '
                Escribir 'Has perdido pisaste una mina'
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 59</h2>
<h3>rompecabezas</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            definir rompecabezas, rompecabezas_resuelto Como entero
            Definir validadacion Como Logico
            Dimension rompecabezas[4,4]
            Dimension rompecabezas_resuelto[4,4]
            Para i = 1 Hasta 15 Con Paso 1 Hacer
                Repetir
                    validacion = verdadero
                    fila=Aleatorio(1,4)
                    columna=Aleatorio(1,4)
                    si rompecabezas[fila,columna] ==  0 Entonces
                        rompecabezas[fila,columna] = i
                        validacion = Falso
                    FinSi
                Hasta Que validacion = falso
            FinPara
            Repetir
                completado = Verdadero
                para f = 1 Hasta 4 Con Paso 1 Hacer
                    para c = 1 Hasta 4 Con Paso 1 Hacer
                        Escribir  rompecabezas[f,c] "-" Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara
                Escribir 'Ingresa el numero que deseas mover'
                Leer direccion
                para f = 1 Hasta 4 Con Paso 1 Hacer
                    para c = 1  Hasta 4 Con Paso 1 Hacer
                        //Derecha
                        Si c + 1 <=4 Y rompecabezas[f,c] == direccion Y rompecabezas[f,c+1] == 0  Entonces
                            rompecabezas[f,c + 1]= direccion
                            rompecabezas[f,c] = 0
                            f = 5
                            c = 5
                        SiNo
                            //Abajo
                            Si (f + 1) <= 4  Y rompecabezas[f,c] == direccion Y rompecabezas[f+1,c] == 0 Entonces
                                rompecabezas[f+1, c]= rompecabezas[f,c]
                                rompecabezas[f,c]=0
                                f = 4
                                c = 4
                            SiNo
                                //izquierda
                                Si c -1 >= 1 Y rompecabezas[f,c] == direccion Y rompecabezas[f,c-1] == 0 Entonces
                                    rompecabezas[f,c-1]= direccion
                                    rompecabezas[f,c] = 0
                                    f = 5
                                    c = 5
                                SiNo
                                    //arriba
                                    Si f- 1 >= 1 Y rompecabezas[f,c] == direccion Y rompecabezas[f-1,c] == 0 Entonces
                                        rompecabezas[f-1,c]= direccion
                                        rompecabezas[f,c] = 0
                                        f = 5
                                        c = 5
                                    FinSi
                                FinSi
                            FinSi
                        FinSi
                    FinPara
                FinPara
                contador = 0
                Para i = 1 Hasta 4 Hacer
                    Para j = 1 Hasta 4 Hacer
                        contador = contador + 1
                        si rompecabezas[i,j] <> contador Y rompecabezas[i,j] <> 0 Entonces
                            Escribir contador					
                            completado = Falso
                            j = 4
                            i = 4
                        FinSi
                    FinPara
                FinPara
            Hasta Que completado ==  Verdadero
            si completado == Verdadero Entonces
                Escribir '¡Hasta luego!'
            FinSi
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 60</h2>
<h3>sudoku</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir sudoku Como Entero
            Definir separador Como Caracter
            Definir existe Como logico
            Dimension sudoku[9,9]
        //	escribir 'Ingresa un numero'
        //	leer num
            existe = Falso
            para f = 1 Hasta 9 Con Paso 1 Hacer
                para c = 1 Hasta 9 Con Paso 1 Hacer
                    para num = 1 Hasta 9 Con Paso 1 Hacer
                        existe = Falso
                        Repetir
                            para vc = 1 Hasta 9 Con Paso 1 Hacer
                                si num ==sudoku[f,vc] Entonces
                                    existe = Verdadero
                                    vc = 9
                                FinSi
                            FinPara
                            para vf = 1 Hasta 9 Con Paso 1 hacer 
                                si num == sudoku[vf,c] Entonces
                                    existe = Verdadero
                                    vf = 9
                                FinSi
                            FinPara
                            si f >= 1 y f <= 3 Entonces
                                inicioFila = 1
                            SiNo
                                si f >= 4 y f <= 6 Entonces
                                    inicioFila = 4
                                SiNo
                                    inicioFila = 7
                                FinSi
                            FinSi
                            si c >= 1 y c <= 3 Entonces
                                inicioColumna = 1
                            SiNo
                                si c >= 4 y c <= 6 Entonces
                                    inicioColumna = 4
                                SiNo
                                    inicioColumna = 7
                                FinSi
                            FinSi
                            para i = inicioFila  Hasta inicioFila Con Paso +2 Hacer
                                para j = inicioColumna Hasta inicioColumna Con Paso +2 Hacer
                                    si num == sudoku[i,j] Entonces
                                        i = inicioFila +2
                                        j = inicioColumna +2
                                        existe = Verdadero
                                    FinSi
                                FinPara
                            FinPara
                            si  existe == Falso Entonces
                                sudoku[f,c] = num
                                num = 9
                            FinSi
                        Hasta Que existe = verdadero 
                    FinPara
                    si sudoku[f,c] == 0 Entonces
                        f = 1
                        c=1
                    FinSi
                FinPara
            FinPara	
            Para f = 1 Hasta 9 Con Paso 1 Hacer
                para c= 1 Hasta 9 Con Paso 1 Hacer  
                    si c <> 3 y c <> 6 Entonces
                        separador = ' '
                    SiNo
                        separador=' |'
                    FinSi
                    Escribir sudoku[f,c],separador ' ' Sin Saltar
                FinPara
                Escribir ''
                si f =3 o f = 6 Entonces
                    Escribir '---------------------------'
                FinSi
            FinPara
        FinAlgoritmo
   </code>
</pre>

<br>

<h2>Ejercicio 52</h2>
<h3>eliminacion de doplicados</h3>
<pre>
    <code>
   </code>
</pre>

<br>