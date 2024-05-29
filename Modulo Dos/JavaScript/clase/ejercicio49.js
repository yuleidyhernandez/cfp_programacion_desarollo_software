// Ordenamiento de array

let arrayPrincipal = [5,6,3,2,4,8];

let menor = 0;


for (i = 0; i < 6; i++) {
    menor = arrayPrincipal[i];
    for (j = i + 0 ; j < 6; j++) {
        if (arrayPrincipal[i] > arrayPrincipal[j]) {
            arrayPrincipal[i] = arrayPrincipal[j];
            arrayPrincipal[j] = menor;
            menor = arrayPrincipal[i];
        }
    }
    console.log(arrayPrincipal[i]);
};