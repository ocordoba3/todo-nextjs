# Development

Iniciar la app en desarrollo

1. Levantar la bdd

```
docker compose up -d
```

2. Renombrar .env.template a .env
3. Remplazar las variables de entorno
4. Ejecutar el SEED para [iniciar la base de datos](localhost:3000/api/seed) con un metodo _POST_

# Prisma

```
npx prisma init
npx prisma generate
```

Ejecutar cada vez que hayan cambios en el modelo

```
npx prisma migrate dev
```
