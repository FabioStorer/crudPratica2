const express = require('express');
const aeroporto_router = require('./routers/aeroporto_router.js');
const caneta_router = require('./routers/caneta_router.js');
const moto_router = require('./routers/moto_router.js');
const refrigerante_router = require('./routers/refrigerante_router.js');
const endereco = require('./middlewares/cep_endereco.js');
const port = 5000;
const app = express();

app.use(express.json());

app.use('/aeroporto', endereco, aeroporto_router);
app.use('/caneta', caneta_router);
app.use('/moto', moto_router);
app.use('/refrigerante', refrigerante_router);

app.listen(port, () => { console.log(`Server running at port ${port}.`) });