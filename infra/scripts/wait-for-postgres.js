const { exec } = require("node:child_process");
// eslint-disable-next-line no-unused-vars
const { stdout } = require("node:process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres esta pronto e aceitando conexoes!\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexoes");
checkPostgres();
