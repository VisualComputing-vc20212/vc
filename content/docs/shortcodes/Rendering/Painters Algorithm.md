# Painters' Algorithm

El algoritmo del pintor, también algoritmo de ordenación de la profundidad o relleno prioritario, es un algoritmo para la determinación de la superficie visible en gráficos 3D,que funciona polígono a polígono para la eliminación de superficies ocultas al punto de vista del observador. Este algoritmo crea imágenes clasificando los polígonos dentro de la imagen por su profundidad y colocando cada polígono en orden desde el objeto más lejano al más cercano.

Fue propuesto inicialmente como un método básico para abordar el *problema de la determinación de la superficie oculta* por Martin Newell, Richard Newell y Tom Sancha en 1972. Se llama así porque el pintado del cuadro se hace en orden decreciente de la distancia. La distancia es desde el plano de la vista. Los polígonos a más distancia se pintan primero.

Cuando el pintor hace un cuadro, primero pinta todo el lienzo con el color de fondo. Luego, se añaden los objetos más lejanos, como las montañas o los árboles. A continuación, se añaden al cuadro los objetos posteriores o de primer plano. 

<center><img src="https://media.giphy.com/media/JnFjMQgSDNPV7EFcbF/giphy.gif" ></center>

Los objetos están dispuestos en orden creciente a la coordenada z. El renderizado se realiza en orden de la coordenada z. Los objetos más lejanos oscurecerán a los cercanos.  Los píxeles de la parte trasera sobrescribirán los píxeles de los objetos más lejanos.

Si los valores z de dos se superponen, podemos determinar el orden correcto a partir del valor Z como se muestra en la figura (a).

Si los objetos z se superponen entre sí, como en la figura (b), este correcto orden se puede mantener cortando los objetos superpuestos.

<center><img src="https://edunextuploads.s3.amazonaws.com/1639374264845618174708.jpg"></center>

### Pseudocódigo

Pasos realizados en la clasificación en profundidad
1. Ordenar todos los polígonos según la coordenada z.
2. Encontrar ambigüedades: encontrar si la coordenada z se superpone, dividir el polígono si es necesario.
3. Convertir cada polígono en orden creciente de la coordenada z.

```
sort polygons by depth 
    for each polygon p:
        for each pixel that p covers:
            paint p.color on pixel
```

Se aplica la prueba: 
1. ¿A está detrás de B y no se solapa con él en la dimensión de Z como se muestra en la figura (a)?
2. Si A está detrás de B en z y no se solapa en x o y como se muestra en la fig (b)
3. Si A está detrás de B en Z y totalmente fuera de B con respecto al plano de la vista como se muestra en la fig (c)
4. Si A está detrás de B en Z y B está totalmente dentro de A con respecto al plano de visión, como se muestra en la figura (d)

<center><img src="https://edunextuploads.s3.amazonaws.com/163937429751712709052.jpg"></center>

### Complejidad temporal 

La complejidad temporal depende en gran medida del algoritmo de ordenamiento utilizado para ordenar los polígonos. Suponiendo el uso del algoritmo de ordenamiento más óptimo, el algoritmo de pintor tiene una complejidad en el peor de los casos: {{< katex display >}} \mathcal{O}(n\log{}n + n*m) {{< /katex >}} donde n es el número de polígonos y m es el número de píxeles a rellenar.


### Complejidad espacial

El peor caso de complejidad espacial del algoritmo del pintor es {{< katex display >}} \mathcal{O}(n+m) {{< /katex >}} donde n es el número de polígonos y m es el número de píxeles a rellenar.


| Ventajas                                           | Limitaciones                                           |
|----------------------------------------------------|--------------------------------------------------------|
| <ul><li>**Estructura gráfica básica:** El algoritmo no es tan complejo en estructura. Esta simplicidad lo hace útil en escenarios de gráficos de poca dificultad.</li><li>**Eficiencia de la memoria:** El algoritmo prioriza el uso eficiente de la memoria, pero a expensas de una mayor procesamiento, ya que se deben renderizar todas las partes de todas las imágenes.</li></ul>|<ul><li>**Superposición cíclica:** En el caso de superposición cíclica, es imposible determinar qué polígono está por encima de los demás. En este caso, los polígonos se deben cortar para permitir la ordenación.</li><li>**Polígonos penetrantes:** La perforación de polígonos surge cuando un polígono se cruza con otro. Este problema se puede resolver cortando los polígonos.</li></ul> |

### Referencias

Computer Graphics Painter’s Algorithm - javatpoint. (s. f.). Www.Javatpoint.Com Recuperado 12 de diciembre de 2021, de https://www.javatpoint.com/computer-graphics-painter-algorithm 

Wikipedia contributors. (2021, 23 noviembre). Painter’s algorithm. Wikipedia. Recuperado 12 de diciembre de 2021, de https://en.wikipedia.org/wiki/Painter%27s_algorithm 

GeeksforGeeks. (2021, 21 noviembre). Painter’s Algorithm in Computer Graphics. Recuperado 12 de diciembre de 2021, de https://www.geeksforgeeks.org/painters-algorithm-in-computer-graphics/ 
