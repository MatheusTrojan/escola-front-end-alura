var ConnectionFactory = (function () {

    const stores = ["negociacoes"];
    const version = 4;
    const dbName = "aluraframe"

    var connection = null;

    var close = null

    return class ConnectionFactory {

        constructor() {

            throw new Error ("Não é possível criar instâncias de ConnectionFactory!");
        }

        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(dbName, version);

                openRequest.onupgradeneeded = e => {

                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {

                    if(!connection) {
                        connection = e.target.result

                        close = connection.close;

                        connection.close = function() {
                            throw new Error ("Você não pode fechar diretamente a conexão!");
                        };
                    }
                    resolve(connection);
                };

                openRequest.onerror = e => {

                    console.log(e.target.error);

                    reject(e.target.error.name);
                };
            });
        }

        static _createStores(connection) {

            stores.forEach(store => {

                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store)
                }
                connection.createObjectStore(store, { autoIncrement: true })                
            })
        }

        static closeConnection() {
            //para o usuário nao conseguir invocar o metodo connection.close diretamente, criamos a variavel close que recebeu os mesmoo parametros do metodo connectiom.close, e em seguida delegamos a ele uma nova função que dispara um erro informando que não é possivel fechar diretamente a conexão. Após isso, criamos o método estático que de fato fecha a conexão ao invocar a variável close linkada ao connection.close original
            if (connection) {
                Reflect.apply(close, connection, [])
                connection = null;
            }
        }

    };
})();
//envolvendo toda function entre parenteses e adicionando os outros 2 parensetes ao final, criamos uma funcão auto invocada