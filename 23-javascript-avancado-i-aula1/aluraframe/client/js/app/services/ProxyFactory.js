            //get vai ser sempre chamado toda vez que eu tentar ler qualquer propriedade do objeto
            // quando chamado, me da o TARGET (referencia ao objeto original que esta sendo encapsulado pelo proxy);
            // PROP -> a propriedade que está sendo acessada
            // RECEIVER -> uma referencia ao proprio proxy

            // Quando executamos a TRAP(ARMADILHA), temos que dar o valor retornado após ter interceptado a propriedade de leitura

            //ARGUMENTS é um parametro acessível em qualquer função que me da acesso à todos os parâmetros da função 
class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get(target, prop, receiver) {

                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {

                    return function() {

                        console.log(`interceptando ${prop}`); 
                        
                        Reflect.apply(target[prop], target, arguments);
                        
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set (target, prop, value, receiver) {
                if(props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _ehFuncao(func) {

        return typeof(func) == typeof(Function)
    }
}