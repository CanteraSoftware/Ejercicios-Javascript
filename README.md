# Ejercicio 1

###### Ahora vamos a definir una función `concatenacionEsIgual` que recibe tres strings y nos dice si la concatenación de los dos primeros es igual al tercero:

```
concatenacionEsIgual ("mari", "posa", "langosta") false
concatenacionEsIgual ("guarda", "ropas", "guardaropas") true
```

#### Definí la función `concatenacionEsIgual`

# Ejercicio 2

#### Ya sabemos que es muy importante saludar al llegar, el problema esta en que el saludo depende de la hora del día. ¡Por suerte este problema se puede resolver programando!

#### Podríamos tener una función que dado un nombre y un horario retorne el saludo correcto. Si antes de las 12 debería ser `buenos días`, si es después `buenas tardes`

#### Por ejemplo:

```
saludar ("Luis", 11)
"Buenos días Luis"
saludar ("Carolina", 12)
"Buenas tardes Carolina"
saludar ("Rocío", 13)
"Buenas tardes Rocío"
```

#### Definí la función `saludar`

# Ejercicio 3

#### Vamos a sumarle funciones a una extravagante calculadora. Queremos obtner la suma de los elementos mayores a 7 de una lista. Por ejemplo:

```
sumaDeLosMayoreASiete ([2,5,9,8,11])
28  Porque es la suma de 9, 8 y 11.
```

#### Defini la función `sumaDeLosMayoresASiete`

# Ejercicio 4

#### Una conocida aplicación para escuchar música online quiere hacer un resumen con la información importante de sus canciones. Las canciones se almacenan como registros de la siguiente forma:

```
let elGenioDeLaNada = {
nombre: "El genio de la nada",
banda: "Eruca Sativa",
duracion: 4
};
let lotusFlower = {
nombre: "Lotus flower",
banda: "Radiohead",
duracion: 5
};
```

#### Queremos definir una función que retorne un resumen de manera simple. Por ejemplo:

```
resumenCancion (elGenioDeLaNada)
"El genio de la nada de la banda Eruta Sativa tiene una duración de 240 segundos"
resumenCancion (lotusFlower)
"Lotus flower de la banda Radiohead tiene una duración de 300 segundos"
```

#### Definí la función `resumenCancion` que nos permita obtener el resumen solicitado.

# Ejercicio 5

#### Dejemos atrás los tableros y ¡Pasemos a JavaScript!

#### Aveces la matemática puede ser un poco tediosa. La buena noticia es que ahora podemos crear funciones que nos ayuden a resolver estos problemas.

#### Para eso vamos a crear una función que reciba 3 números y nos diga si la resta entre los 2 primeros es mayor al tercero. Por ejemplo:

```
laRestaEsMasGrande (4,2,8)
false /Porque 4 menos 2 es 2 y es menor a 84
laRestaEsMasGrande (12,3,5)
true /Porque 12 menos 3 es 9 y es mayor a 5
```

#### Definí la función `laRestaEsMasGrande`.

# Ejercicio 6

#### Queremos crear un mezclador de palabras que reciba 2 palabras y un número. Si el número es mejor o igual a 6 el mezclador concatena la primera palabra con la segunda. En cambio, si el número es mayor a 6, concantena la segunda con la primera:

```
mezcladorDePalabras ("planta", "naranja", 6)
"plantanaranja"
mezcladorDePalabras ("amor", "amarillo",5)
"amoramarillo"
mezcladorDePalabras ("mate", "pato", 7)
"patomate"
```

#### Definí la función `mezcladorDePalabras`.

# Ejercicio 7

#### Ale está haciendo un trabajo de investigación y nos pidió ayuda. Necesita poder sumar la cantidad de letras de las palabras cortas. Una palabra se considera corta si tiene 6 o menos letras. Veamos un ejemplo:

```
sumaDeLetrasDeCortas ([hola", "murcielago", "caballo", "choclo", "poco", "luz", "sol"])
20
```

#### Definí la función `sumaDeLetrasDeCortas`.

# Ejercicio 8

#### Los servicios de película bajo demanda lograron despertar un interés renovado en la sociedad por el cine y las series. Es por ello que contamos registros de este estilo:

```
let gus = {
nick: "Wuisti",
promedioPeliculasMensuales: 5,
plataforma: "Netflix"
};
let ariel = {
nick: "Ari",
promedioPeliculasMensuales: 10,
plataforma: "Amazon"
};
```

#### Ahora debemos definir una función que permita obtener un resumen de la información registrada de manera simple. Por ejemplo:

```
resumenInfo (gus)
"Se estima que Wuisti verá 60 películas en un año con la plataforma de Netflix"
```

# Ejercicio 9

#### Vamos a un maravilloso mundo ... ¡el de la matemática!

#### Los números se pueden operar y comparar. Nada nos impide hacer un poco de ambas al mismo tiempo.

#### Para eso vamos a crear una función que reciba 3 números y nos diga si la suma de los primeros es menor al tercero. Por ejemplo:

```
esMenorLaSuma (2 4, 8)
true /Porque 6 es menor que 8
esMenorLaSuma (3, 5, 7)
false /Porque 8 es mayor a 7
```

#### Definí la función `esMenorLaSuma`

# Ejercicio 10

#### Si hay algo que a Ale le molesta es o pasar frío o abrigarse de más. Pero lo que sí sabe, más allá de la temperatura, es de qué color vestirse ese día. Para eso, pensó en una función que recibe una temperatura y un color y responde qué ropa de ese color ponerse. Si la temperatura es 22 grados o más, se pone una remera de ese color. Si no, se pone una campera de ese color:

```
vestirseAcorde (22,"negra")
"Remera negra"
vesitirseAcorde (21, "verde")
"Campera verde"
vestirseAcorde (23, "violeta")
"Remera violeta"
```

#### Definí la función `vestirseAcorde`.

# Ejercicio 11

#### Para quienes no suelen leer, la concentración puede variar cuando aparecen palabras largas. Para filtrarlas vamos a crear una función que dada una lista de palabras nos devuelva una lista nueva con las que tengan más de 6 caracteres.

```
palabraLargs (["jarra", "polilla", "caracol", "gato", "provincia"])
["polilla", "caracol", "provincia"]
```

#### Definí la función `palabrasLargas`.

# Ejercicio 12

#### En una biblioteca guardan registro de todos los libros leídos por las personas que la concurren. Estos registros tienen la siguiente forma:

```
let juan = {
nombre: "Juan Arrever",
librosLeidos: [ "El conde de Montecristo", "La palabra", "Mi planta de naranja lima"],
anioSuscripcion: 1992
};
let elena = {
nombre: "Elena Chalver",
librosLeidos: ["Rabia", "Vida de Bob Marley"],
aniosSuscripcion: 1987
};
```

#### Ahora debemos definir una función que permita obtener un resumen de la información registrada de manera simple. Por ejemplo:

```
resumenSuscripcion (juan)
"Juan Arrever se suscribió hace 28 años y leyó 3 ejemplares"
resumenSuscripcion (elena)
"Elena Chalver se suscribió hace 33 años y leyó 2 ejemplares"
```

#### Definí la función `resumenSuscripcion` que nos permita obtener la información requerida

# Ejercicio 13

#### En este ejercicio vamos a definir una función que nos permita saber si la tierra es fértil para plantar, es decir, si su ph es 5 y su porcentaje de humedad esta entre 26 y 39.

#### Por ejemplo:

```
esTierraFertil (5,30)
true
esTierraFertil (5,20)
false /porque 20 es menor que 26
esTierraFertil (3,30)
false /porque 3 es distinto de 5
```

#### Definí la función `esTierraFertil` que reciba un ph y un porcentaje de humedad y nos diga si la tierra es fértil.

# Ejercicio 14

#### Un local que vende productos de forma mayorista y minorista nos pidio ayuda para simplificar qué precio le corresponde a un producto a partir de las unidades a comprar.

#### Para ello definiremos una función que reciba las unidades a comprar, el precio minorista y el precio mayorista por unidad. Sabemos que a partir de 18 unidades venden a precio mayorista. Por ejemplo:

```
precioACobrarPorUnidad (10,60,50)
50
precioACobrarPorUnidad (19,80,60)
60
precioACobrarPorUnidad (17,20,10)
20
```

#### Definí la función `precioACobrarPorUnidad`

# Ejercicio 15

#### Para quienes no suelen leer, la concentración puede variar cuando aparecen palabras largas. Para filtrarlas vamos a crear una función que dada una lista de palabras nos devuelva una lista nueva con las que tenga más de 6 caracteres.

```
palabrasLargas (["jarra", "polilla","caracol","gato", "provincia"])
["polilla","caracol", "provincia"]
```

#### Definí la función `palabrasLargas`

# Ejercicio 16

#### A partir de un censo nos pidieron poder pasar en limpio la información de los datos obtenidos. Para ello contamos con registros habitacionales de distintas familias. Por ejemplo:

```
let casaChaldu = {
familia: "Chaldu",
integrantes: ["Elena", "Tita", "Marucha"],
direccion: "Pordomingo 400"
}
let casaDominguez = {
familia: "Dominguez",
integrantes: ["Olivia","Micaela", "Sol", "Alex"],
direccion: "Belgrano 350"
}
```

#### Definí la función `resumenDeInformacion` que permita obtener un resumen de la información registrada. Por ejemplo:

```
resumenDeInformacion (casaChaldu)
"La familia Chaldu cuenta con 3 integrantes que viven en Pordomingo 400"
resumenDeInformacion (casaDominguez)
"La familia Dominguez cuenta con 4 integrantes que viven en Belgrano 350"
```

# Ejercicio 17

#### Ro está programando una aplicación con distintas funcionalidades del clima. En esta oportunidad nos pidió ayuda para definir una función que nos indique si el clima esta agradable la cuál llamaremos `esDiaLindo`. Para que esto suceda la temperatura tiene que ser `20` y no tiene que estar lloviendo. Por ejemplo:

```
esDiaLindo (20, false)
true
esDiaLindo (20, true)
false /Porque esta lloviendo
esDiaLindo (18, false)
false /Porque la temperatura es menor a 20
```

#### Definí la función `esDiaLindo` que recibe como argumentos una temperatura y un boolenano que indica si esta lloviendo.

# Ejercicio 18

#### En este ejercicio necesitamos definir una función que nos indique si una serie terminó. Para saber si termino o no vamos a considerar que las series que emitieron su última temporada antes del `2010` están finalizadas.

#### Para ello vamos a definir la función `situacionSerie` que recibe un año como argumento y retornará "Concluida" o "Pendiente" según corresponda. Por ejemplo:

```
situacionSerie (2007)
"Concluida"
situacionSerie (2021)
"Pendiente"
```

#### Definí la función `situacionSerie` con el argumento correspondiente.

# Ejercicio 19

#### A veces queremos llevar registro de la distancia recorrida y calcularla puede ser una tarea tediosa. ¡Pero la programación puede ayudarnos!

#### Para eso vamos a definir una función que reciba una lista con la cantidad de kilómetros recorridos por una persona y nos retorne el total en metros. Por ejemplo:

```
metrosRecorridos ([1,3,20,21])
26000 /Porque 1+ 3 + 20 + 2 = 26 y 26 * 1000 = 26000
metrosRecorridos ([1,0,1,2])
4000 /Porque 1 + 0 + 1 + 2 = 4 *  y 4 * 1000 = 4000
```

#### Definí la función `metrosRecorridos`.

# Ejercicio 20

#### En un curso de química nos pidieron una función que se encargue de hacer un resumen de la información de los elementos de la tabla periodica. Para ello contamos con registros como estos:

```
let radio = {
elemento: "Radio",
aniosDeDescubrimiento: 1898,
fueDescubiertoPor: "Madame Curie"
}
let kripton = {
elemento: "Kriptón"
aniosDeDescubrimiento: 1898,
fueDescubiertoPor: "William Ramsay"
}
```

#### Definí la función `resumenDeAtomo` que permita obtener un resumen de la información registrada. Por ejemplo

```
resumenDeAtomo (radio)
```
