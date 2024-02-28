const DES = require("./des/des");

const fastify = require("fastify")({ logger: true });

fastify.get("/encrypt", function handler(request, reply) {
  console.log(request.query);

  const key = request.query?.key;
  const des = new DES(key);

  const plaintext = request.query?.message;
  des.encrypt(plaintext);
  console.info(des.data, des.dataAsString);
  const _encrypt = des.dataAsString;

  const cipher = des.data;
  des.decrypt(cipher);
  console.info(des.data, des.dataAsString);
  const _decrypt = des.dataAsString.split("\u0000").join("");

  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "POST");

  reply.send({ encrypt: _encrypt, decrypt: _decrypt });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
