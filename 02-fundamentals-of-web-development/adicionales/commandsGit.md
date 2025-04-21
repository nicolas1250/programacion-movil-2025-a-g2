# 🧾 Hoja de Trucos de Git: 50 Comandos Esenciales

 ### Git es un sistema de control de versiones distribuido creado por Linus Torvalds en 2005. Permite mantener un historial de cambios, colaborar con otros desarrolladores y gestionar versiones del código fuente. 


# ⚙️ Configuración Inicial
### Ver configuración de Git
```
git config -l
```
 #### Muestra la configuración actual de Git: nombre de usuario, correo, editor, etc.  


### Configurar nombre de usuario global
```
git config --global user.name "Fabio"
```
#### Define tu nombre de usuario que será usado en todos tus commits.

### Configurar correo electrónico global
```
git config --global user.email "email@ejemplo.com"
```
#### Define el correo que aparecerá en tus commits.

### Guardar credenciales en caché
```
git config --global credential.helper cache
```
#### Evita tener que ingresar usuario y contraseña cada vez que interactúas con un repositorio remoto.

## 📁 Gestión de Repositorios
### Inicializar repositorio
```
git init
```
#### Crea un nuevo repositorio Git en el directorio actual.  


### Añadir un archivo al área de preparación (staging)
```
git add archivo.txt
```
#### Prepara el archivo para ser confirmado (commit).

### Añadir todos los archivos al staging
```
git add .
```
#### Incluye todos los archivos modificados y nuevos en el staging.

### Añadir archivos con un patrón específico
```
git add fil*
```
#### Añade al staging todos los archivos que empiecen con "fil".

### Ver estado del repositorio
```
git status
```
#### Muestra qué archivos están en staging, modificados o sin seguimiento.

## ✅ Confirmaciones (Commits)
### Confirmar cambios (abre editor)
```
git commit
```
#### Abre el editor de texto para escribir un mensaje de confirmación detallado.

### Confirmar con mensaje corto
```
git commit -m "mensaje"
```
#### Realiza un commit con un mensaje simple directamente desde la terminal.

### Añadir y confirmar cambios en un solo paso
```
git commit -a -m "mensaje"
```
#### Añade todos los archivos rastreados modificados y hace un commit.

### Editar el último commit
```
git commit --amend
```
#### Permite modificar el mensaje o agregar archivos al último commit (si no ha sido compartido aún).

## 🔍 Historial y Cambios
### Ver historial de commits
```
git log
```
#### Lista todos los commits del repositorio con fecha, autor y mensaje.

### Ver historial con diferencias incluidas
```
git log -p
```
#### Muestra además los cambios realizados en cada commit.

### Ver un commit específico
```
git show commit_id
```
#### Despliega el detalle completo de un commit específico.

### Ver estadísticas de cambios
```
git log --stat
```
#### Muestra archivos modificados y número de líneas cambiadas en cada commit.

### Ver diferencias antes de confirmar
```
git diff
```
#### Muestra cambios realizados en archivos que aún no han sido añadidos al staging.

### Ver diferencias en un archivo específico
```
git diff archivo.py
```
#### Muestra los cambios hechos en un archivo concreto.

### Ver cambios que ya están en staging
```
git diff --staged
```
#### Muestra los cambios que ya están listos para ser confirmados.

### Añadir cambios de forma interactiva
```
git add -p
```
#### Permite revisar los cambios y decidir qué partes añadir al staging.

## 🧹 Archivos
### Eliminar un archivo rastreado
```
git rm archivo.txt
```
#### Elimina el archivo del repositorio y del sistema de archivos.

### Renombrar un archivo
```
git mv archivo_viejo.txt archivo_nuevo.txt
```
#### Cambia el nombre de un archivo y prepara el cambio para confirmar.

## ⏪ Revertir Cambios
### Descartar cambios locales en un archivo
```
git checkout archivo.txt
```
#### Restaura el archivo a su última versión confirmada.

### Eliminar archivo del staging
```
git reset HEAD archivo.txt
```
#### Quita un archivo del staging sin perder los cambios locales.

### Interactuar con los cambios staged
```
git reset HEAD -p
```
#### Selecciona partes específicas para deshacer del staging.

### Revertir el último commit
```
git revert HEAD
```
#### Crea un nuevo commit que deshace los cambios del último.

### Revertir un commit antiguo
```
git revert commit_id
```
#### Crea un commit que deshace los cambios de un commit específico.

## 🌿 Ramas
### Crear una nueva rama

```
git branch nombre_rama
```
#### Crea una nueva rama, pero no cambia a ella automáticamente.

### Cambiar a otra rama
```
git checkout nombre_rama
```
#### Cambia a la rama especificada.

### Crear y cambiar de rama en un solo paso
```
git checkout -b nombre_rama
```
#### Crea una nueva rama y cambia a ella inmediatamente.

### Ver todas las ramas locales
```
git branch
```
#### Muestra una lista de ramas locales. La actual se marca con un asterisco.

### Eliminar una rama
```
git branch -d nombre_rama
```
#### Elimina una rama local si ya fue fusionada.

## 🔀 Fusionar y Rebase
### Fusionar una rama
```
git merge nombre_rama
```
#### Une los cambios de nombre_rama en la rama actual.

### Cancelar una fusión con conflictos
```
git merge --abort
```
#### Detiene la fusión y vuelve al estado anterior.

### Rebase con otra rama
```
git rebase nombre_rama
```
#### Reaplica commits de tu rama encima de otra.

### Rebase interactivo
```
git rebase -i master
```
#### Permite reorganizar, editar, fusionar o eliminar commits recientes.

## 🌐 Repos Remotos
### Añadir un repositorio remoto
```
git remote add origin https://url_repo
```
#### Vincula tu repositorio local con uno remoto.

### Ver repositorios remotos configurados
```
git remote -v
```
#### Muestra URLs de origen y subida del repositorio remoto.

### Mostrar detalles del remoto
```
git remote show origin
```
#### Información detallada sobre el remoto origin.

### Subir cambios al remoto
```
git push
```
#### Envía los commits locales al repositorio remoto.

### Obtener cambios del remoto
```
git pull
```
#### Descarga y fusiona cambios del repositorio remoto.

### Obtener cambios sin fusionar
```
git fetch
```
#### Descarga nuevos commits sin aplicarlos aún a tu rama actual.

### Actualizar referencias remotas
```
git remote update
```
#### Actualiza información sobre ramas remotas sin hacer fetch o pull.

### Ver ramas remotas rastreadas
```
git branch -r
```
#### Lista las ramas remotas conocidas.

### Ver historial de la rama remota
```
git log origin/main
```
#### Muestra el historial de commits de la rama main del remoto.

### Fusionar rama remota con rama local
```
git merge origin/main
```
#### Aplica cambios del remoto main a tu rama local.

### Subir nueva rama al remoto y establecer seguimiento
```
git push -u origin nombre_rama
```
#### Sube una nueva rama y configura el seguimiento automático con el remoto.

### Eliminar una rama remota
```
git push --delete origin nombre_rama
```
#### Borra una rama del repositorio remoto.

## ⚠️ Push Forzado (Usar con cuidado)
### Forzar envío de cambios
```
git push -f
```
#### Sobrescribe el historial remoto. Úsalo solo si estás seguro y nadie más trabaja sobre esa rama.