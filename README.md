# task-management-ai

```
todo-app/
├── src/
│   ├── config/                # MongoDB, environment config
│   ├── controllers/           # Express controllers
│   ├── models/                # Mongoose schemas
│   ├── routes/                # Route definitions
│   ├── services/              # Business logic
│   │   ├── ai/                # LLM integration (Gemini etc.)
│   │   │   ├── IAiProvider.ts # Interface for AI providers
│   │   │   ├── GeminiProvider.ts
│   ├── types/                 # Shared TypeScript types/interfaces
│   ├── utils/                 # Utility functions
│   ├── app.ts                 # Express app init
│   └── server.ts              # Server entry point
├── tests/                     # Jest unit/integration tests
├── .env
├── .gitignore
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Building

```
// Init Node (Will create pa)
npm init -y

// Install dependencies
npm install express mongoose dotenv
npm install -D typescript ts-node-dev @types/node @types/express nodemon ts-node

npm install -D jest ts-jest @types/jest supertest @types/supertest
npx ts-jest config:init

// Init TS
npx tsc --init
```
