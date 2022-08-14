window.watsonAssistantChatOptions = {
  integrationID: "6182c7df-2bca-41ce-9a1b-a9eaa2edd956", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "a3380792-edb3-4e49-af8d-cf61531466d4", // The ID of your service instance.
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
