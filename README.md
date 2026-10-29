# Rise

Rise é uma plataforma angolana para produtores venderem infoprodutos com pagamentos digitais, gestão de carteira, afiliados e distribuição de conteúdo.

## Stack
- Front-end: React + Vite + TypeScript + Tailwind CSS + React Router
- Back-end: Supabase (Postgres, Auth, Storage, RLS, Edge Functions em Deno)
- Deploy: Netlify
- Idioma: português de Angola (pt-AO)
- Moeda: Kwanza (Kz)

## Estrutura do projeto
- `src/` — aplicação React
- `supabase/migrations/001_init.sql` — schema da base de dados
- `supabase/functions/create-payment/index.ts` — criação de pagamentos
- `supabase/functions/payment-webhook/index.ts` — webhook de confirmação
- `supabase/seed.sql` — dados iniciais de demonstração

## Como correr localmente
```bash
npm install
npm run dev
```

## Como publicar
- executar SQL no Supabase
- configurar buckets de storage
- criar environment variables no Netlify
- publicar a app com `npm run build`

## Design
A plataforma respeita a identidade visual pedida:
- fundo escuro #0A0908
- superfícies em vidro com blur
- gradiente bege metálico
- interface PT-AO
- PWA instalável
