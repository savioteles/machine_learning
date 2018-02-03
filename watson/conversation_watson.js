//Importa as dependencias
var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Configura o servico de conversa
var conversation = new ConversationV1({
  username: 'USERNAME', // troca pelo username da sua conta. Voce consegue essa informacao em deploy e depois Credentials
  password: 'PASSWORD', // troca pelo password da sua conta. Voce consegue essa informacao em deploy e depois Credentials
  version: 'v1',
  version_date: '2017-05-26'
});

workspace_id = 'WORKSPACE_ID'
// Inicia a conversa com uma mensagem vazia
conversation.message({workspace_id: workspace_id}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  var endConversation = false;

  //Verifica se a flag eh para finalizar a conversa
  if (response.output.action === 'end_conversation') {
    // Usuario diz tchau e sai.
    console.log(response.output.text[0]);
    endConversation = true;
  } else {
    // Se tiver algum texto na resposta, mostra ele na tela.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
  }

  // Se a conversa NAO terminou, vai para a proxima rodada de conversas
  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conversation.message({workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      // Envia o contexto de volta para manter o estado.
      context : response.context,
    }, processResponse)
  }
}