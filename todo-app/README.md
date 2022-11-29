# Deno, PrismaによるTodo app

## prisma

init
```
// --allow-sys --allow-run --allow-netも必要
deno run --allow-read --allow-env --allow-write npm:prisma@^4.5 init
```

マイグレーション
```
deno run -A npm:prisma@^4.5 db push
```

コード生成
```
deno run -A --unstable npm:prisma@^4.5 generate
```