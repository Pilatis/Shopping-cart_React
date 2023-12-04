const formatCurrency = (value) => {//Função chamada formatCurrency  que recebe um parametro `value`
  return value.toLocaleString('pt-br', {//Método que retorna representação regionais do usuário
    style: 'currency', //estilo de formatação (moeda)
    currency: 'BRL' //A moeda que vai ser usada
  });
}


export default formatCurrency
