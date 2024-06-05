### Ejercicio 1: Manejo de Listas
**Descripción:** Escribe una función que reciba una lista de números y devuelva otra lista con los números duplicados eliminados.

#### Instrucciones:
1. Define una función `remove_duplicates`.
2. La función debe recibir una lista de números.
3. Debe devolver una nueva lista sin elementos duplicados.

#### Solución:
# python
def remove_duplicates(numbers):
    return list(set(numbers))

# Ejemplo de uso
numbers = [1, 2, 2, 3, 4, 4, 5]
print(remove_duplicates(numbers))  # Salida: [1, 2, 3, 4, 5]

### Ejercicio 2: Manejo de Diccionarios
**Descripción:** Escribe una función que reciba un diccionario y devuelva una lista de las claves ordenadas alfabéticamente.

#### Instrucciones:
1. Define una función `sorted_keys`.
2. La función debe recibir un diccionario.
3. Debe devolver una lista de las claves ordenadas alfabéticamente.

#### Solución:
#python
def sorted_keys(d):
    return sorted(d.keys())

# Ejemplo de uso
d = {'apple': 1, 'banana': 2, 'cherry': 3}
print(sorted_keys(d))  # Salida: ['apple', 'banana', 'cherry']

### Ejercicio 3: Lectura y Escritura de Archivos
**Descripción:** Escribe una función que lea un archivo de texto y cuente la cantidad de palabras que contiene.

#### Instrucciones:
1. Define una función `count_words`.
2. La función debe recibir el nombre de un archivo.
3. Debe devolver la cantidad de palabras en el archivo.

#### Solución:
#python
def count_words(filename):
    with open(filename, 'r') as file:
        text = file.read()
        words = text.split()
        return len(words)

# Ejemplo de uso
# Supongamos que tenemos un archivo "example.txt" con el siguiente contenido:
# "Hello world! This is a test."
# Guardamos el contenido en el archivo "example.txt"
with open('example.txt', 'w') as file:
    file.write("Hello world! This is a test.")

print(count_words('example.txt'))  # Salida: 5


### Ejercicio 4: Clases y Objetos
**Descripción:** Define una clase `Rectangle` con métodos para calcular el área y el perímetro.

#### Instrucciones:
1. Define una clase `Rectangle`.
2. La clase debe tener dos atributos: `width` y `height`.
3. Debe tener un método `area` que calcule el área.
4. Debe tener un método `perimeter` que calcule el perímetro.

#### Solución:
#python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# Ejemplo de uso
rect = Rectangle(3, 4)
print(rect.area())       # Salida: 12
print(rect.perimeter())  # Salida: 14


### Ejercicio 5: Manejo de Excepciones
**Descripción:** Escribe una función que intente convertir una cadena a un número entero y maneje la excepción si la conversión falla.

#### Instrucciones:
1. Define una función `convert_to_int`.
2. La función debe recibir una cadena.
3. Debe intentar convertir la cadena a un número entero y devolverlo.
4. Si la conversión falla, debe devolver un mensaje de error.

#### Solución:
#python
def convert_to_int(s):
    try:
        return int(s)
    except ValueError:
        return "Error: la cadena no se puede convertir a un entero."

# Ejemplo de uso
print(convert_to_int("123"))  # Salida: 123
print(convert_to_int("abc"))  # Salida: "Error: la cadena no se puede convertir a un entero."


### Ejercicio 6: Uso de Módulos
**Descripción:** Escribe una función que calcule el factorial de un número utilizando el módulo `math`.

#### Instrucciones:
1. Importa el módulo `math`.
2. Define una función `calculate_factorial`.
3. La función debe recibir un número.
4. Debe devolver el factorial del número utilizando `math.factorial`.

#### Solución:
#python
import math

def calculate_factorial(n):
    return math.factorial(n)

# Ejemplo de uso
print(calculate_factorial(5))  # Salida: 120


### Ejercicio 7: Generadores
**Descripción:** Escribe una función generadora que devuelva los primeros `n` números de la secuencia de Fibonacci.

#### Instrucciones:
1. Define una función `fibonacci`.
2. La función debe recibir un número `n`.
3. Debe generar los primeros `n` números de la secuencia de Fibonacci.

#### Solución:
#python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Ejemplo de uso
print(list(fibonacci(5)))  # Salida: [0, 1, 1, 2, 3]


### Ejercicio 8: Listas por Compresión
**Descripción:** Escribe una lista por compresión que devuelva una lista de los cuadrados de los números del 1 al 10.

#### Instrucciones:
1. Define una lista por compresión.
2. La lista debe contener los cuadrados de los números del 1 al 10.

#### Solución:
# python
squares = [x**2 for x in range(1, 11)]
print(squares)  # Salida: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


### Ejercicio 9: Decoradores
**Descripción:** Escribe un decorador que registre la fecha y hora en que se llama a una función.

#### Instrucciones:
1. Define un decorador `log_datetime`.
2. El decorador debe imprimir la fecha y hora antes de llamar a la función decorada.
3. Aplica el decorador a una función de ejemplo.

#### Solución:
# python
from datetime import datetime

def log_datetime(func):
    def wrapper(*args, **kwargs):
        print(f"Llamada a la función {func.__name__} en: {datetime.now()}")
        return func(*args, **kwargs)
    return wrapper

@log_datetime
def say_hello():
    print("Hello!")

# Ejemplo de uso
say_hello()
# Salida:
# Llamada a la función say_hello en: YYYY-MM-DD HH:MM:SS.ssssss
# Hello!


### Ejercicio 10: Uso de Argumentos y Parámetros
**Descripción:** Escribe una función que acepte cualquier cantidad de argumentos y devuelva su suma.

#### Instrucciones:
1. Define una función `sum_all`.
2. La función debe aceptar cualquier cantidad de argumentos.
3. Debe devolver la suma de todos los argumentos.

#### Solución:
# python
def sum_all(*args):
    return sum(args)

# Ejemplo de uso
print(sum_all(1, 2, 3, 4))  # Salida: 10
print(sum_all(10, 20))      # Salida: 30
