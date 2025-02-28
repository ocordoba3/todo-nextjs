# Development

Iniciar la app en desarrollo

1. Levantar la bdd

```
docker compose up -d
```

2. Crear una copia del _.env.template_ y renombrarla como _.env_
3. Ejecutar `npm install`
4. Ejecutar `npm run dev`
5. Remplazar las variables de entorno
6. Ejecutar

```
npx prisma migrate dev (Ejecutar cada vez que hayan cambios en el modelo)
npx prisma init
npx prisma generate
```

6. Ejecutar el SEED para [iniciar la base de datos](localhost:3000/api/seed) con un metodo _POST_
