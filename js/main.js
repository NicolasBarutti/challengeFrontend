let chatInstance = null;

window.watsonAssistantChatOptions = {
    integrationID: "39ece48d-9e2c-41db-8960-6e9ddc36e811",
    region: "us-south",
    serviceInstanceID: "ec4e5cbf-4028-4208-9bd2-d162992405ea",
    onLoad: async (instance) => {
        chatInstance = instance; // Guarda a referência para a instância do chat
    }
};

setTimeout(function(){
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
}, 0);

// Supondo que o ID do seu botão seja 'chat'
document.getElementById('chat').addEventListener('click', function() {
    if (chatInstance) {
        chatInstance.render().then(() => {
            chatInstance.openWindow(); // Abre a janela do chat quando o botão é clicado
        });
    }
});


