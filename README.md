# 🚀 Pokemon Website

## Este projeto é uma aplicação web moderna construída para visualização e estudo de frontend.

## ✨ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) — Superset de JavaScript com tipagem
- [TanStack Query](https://tanstack.com/query/latest) — Gerenciamento de estado assíncrono
- [Material UI](https://mui.com/) — Biblioteca de componentes UI

---

## 📁 Estrutura do Projeto

```bash
.
├── app/                # Rotas da aplicação (Next.js)
├── components/         # Componentes reutilizáveis da UI
├── features/           # Custom hooks e componentes específicos para cara página web
├── interfaces/         # Tipagens globais
├── utils/              # Utilitários diversos
```

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/dornellesfr/Pokemon-web.git
cd Pokemon-web
```

2. Instale as dependências:

```bash
pnpm install
```

---

## 🛠️ Scripts

```bash
# Iniciar o servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Rodar o projeto em modo produção
pnpm start
```

---

## 🌐 Requisições com TanStack Query

O projeto usa o `QueryClientProvider` para gerenciar requisições com cache e estados assíncronos. Os hooks são organizados dentro da pasta `features/`.

## 🎨 Estilização com Material UI

Para agilidade e fácil manutenção no código, escolhi material UI por ser uma das libs mais difundidas na comunidade e por ser simples de usar.

---

## ✅ Funcionalidades

- 🔧 Setup com TypeScript e ESLint
- ⚡ Requisições otimizadas com cache e fetch automático
- 🎨 UI moderna com Material UI e tema personalizado
- 📂 Estrutura escalável e modular

---

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Material UI](https://mui.com/)
