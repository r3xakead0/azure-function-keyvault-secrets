const { app } = require('@azure/functions');
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

app.http('HttpExample', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const credential = new DefaultAzureCredential();
        const url = "https://soensecret.vault.azure.net";
        const client = new SecretClient(url, credential) ;
        const secret = await client.getSecret("CompanyName");

        console.log("Secret: ", secret);
        return { body: `Secret value: ${secret.value}!` };
    }
});
