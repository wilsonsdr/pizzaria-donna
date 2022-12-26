window.watsonAssistantChatOptions = {
  integrationID: "e8cc4174-7c74-4592-b2d0-0e9ad1f0b948", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "c0836a95-5090-48b4-81e9-3883edf774ea", // The ID of your service instance.
  onLoad: function (instance) { instance.render(); }
};
setTimeout(function () {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});