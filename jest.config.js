// Permite que o JEST consiga rodar os testes no banco como o NEXT,
// por padrao ele nao possui este recurso.
const nextJest = require("next/jest");

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
