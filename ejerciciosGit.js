### Ejercicio 1: Clonación de un Repositorio.
Clona un repositorio remoto a tu máquina local.

#### Instrucciones:
1. Usa el comando `git clone` para clonar el siguiente repositorio: `https://github.com/example/example-repo.git`

#### Solución:
// bash
git clone https://github.com/example/example-repo.git


### Ejercicio 2: Creación y Cambio de Ramas
**Descripción:** Crea una nueva rama y cambia a esa rama.

#### Instrucciones:
1. Crea una nueva rama llamada `feature-branch`.
2. Cambia a la nueva rama.

#### Solución:
// bash
git checkout -b feature-branch


### Ejercicio 3: Realizar y Revertir Commits
**Descripción:** Realiza un commit y luego reviértelo.

#### Instrucciones:
1. Añade un archivo llamado `example.txt` al repositorio.
2. Realiza un commit con el mensaje "Add example.txt".
3. Reviérte el commit realizado.

#### Solución:
// bash
touch example.txt
git add example.txt
git commit -m "Add example.txt"
git revert HEAD


### Ejercicio 4: Fusiones y Resolución de Conflictos
**Descripción:** Crea un conflicto de fusión y resuélvelo.

#### Instrucciones:
1. En la rama `main`, crea y añade un archivo `conflict.txt` con el contenido "Version 1".
2. Realiza un commit.
3. Crea una nueva rama llamada `conflict-branch`.
4. En la rama `conflict-branch`, edita `conflict.txt` para que contenga "Version 2".
5. Realiza un commit.
6. Cambia a la rama `main` y edita `conflict.txt` para que contenga "Version 3".
7. Realiza un commit.
8. Funde (merge) la rama `conflict-branch` en `main` y resuelve el conflicto.

#### Solución:
// bash
# En la rama main
echo "Version 1" > conflict.txt
git add conflict.txt
git commit -m "Add conflict.txt with Version 1"

# Crear y cambiar a la rama conflict-branch
git checkout -b conflict-branch
echo "Version 2" > conflict.txt
git add conflict.txt
git commit -m "Edit conflict.txt to Version 2"

# Cambiar a la rama main
git checkout main
echo "Version 3" > conflict.txt
git add conflict.txt
git commit -m "Edit conflict.txt to Version 3"

# Intentar fusionar la rama conflict-branch en main
git merge conflict-branch

# Resolver el conflicto
# Abre conflict.txt y elige qué contenido mantener o combina ambos.
# Supongamos que mantenemos "Version 3" y añadimos "Version 2".
# El archivo conflict.txt quedaría así:
# Version 3
# Version 2

# Añadir y realizar commit de la resolución del conflicto
git add conflict.txt
git commit -m "Resolve merge conflict between conflict-branch and main"


### Ejercicio 5: Rebasing de una Rama
**Descripción:** Realiza un rebase de una rama sobre otra.

#### Instrucciones:
1. Crea una nueva rama llamada `feature-rebase`.
2. Añade un archivo llamado `rebase.txt` en la rama `feature-rebase`.
3. Realiza un commit con el mensaje "Add rebase.txt".
4. Cambia a la rama `main` y realiza algunos cambios (e.g., añade otro archivo `main-change.txt`).
5. Realiza un commit en `main`.
6. Cambia a la rama `feature-rebase` y realiza un rebase sobre `main`.

#### Solución:
//bash
# Crear y cambiar a la rama feature-rebase
git checkout -b feature-rebase
echo "Rebase content" > rebase.txt
git add rebase.txt
git commit -m "Add rebase.txt"

# Cambiar a la rama main y realizar cambios
git checkout main
echo "Main change" > main-change.txt
git add main-change.txt
git commit -m "Add main-change.txt"

# Cambiar a la rama feature-rebase y realizar rebase
git checkout feature-rebase
git rebase main

### Ejercicio 6: Stashing
**Descripción:** Utiliza el stash para guardar y restaurar cambios no confirmados.

#### Instrucciones:
1. Realiza algunos cambios en un archivo existente o crea uno nuevo (por ejemplo, `stash.txt`).
2. Guarda los cambios en el stash.
3. Realiza algún otro cambio en la rama `main`.
4. Recupera los cambios guardados en el stash.

#### Solución:
  //bash
# Realizar cambios en un archivo existente o crear uno nuevo
echo "Stash this change" > stash.txt
git add stash.txt

# Guardar los cambios en el stash
git stash

# Realizar algún otro cambio en la rama main
echo "Another change" > another-change.txt
git add another-change.txt
git commit -m "Add another-change.txt"

# Recuperar los cambios guardados en el stash
git stash pop


### Ejercicio 7: Trabajar con Remotos
**Descripción:** Añade un nuevo remoto y empuja los cambios a ese remoto.

#### Instrucciones:
1. Añade un nuevo remoto llamado `backup` que apunte a `https://github.com/example/backup-repo.git`.
2. Empuja la rama `main` al remoto `backup`.

#### Solución:
// bash
# Añadir un nuevo remoto
git remote add backup https://github.com/example/backup-repo.git

# Empujar la rama main al remoto backup
git push backup main


### Ejercicio 8: Búsqueda de Cambios (Blame)
**Descripción:** Utiliza `git blame` para encontrar quién realizó un cambio en una línea específica de un archivo.

#### Instrucciones:
1. Encuentra quién realizó el cambio en la primera línea de `example.txt`.

#### Solución:
// bash
git blame example.txt -L 1,1


