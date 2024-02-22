# azure-function-keyvault-secrets
Example of a function in Azure that reads a secret

## Creation Secret in Azure Key Vault

```bash
az keyvault create --name "soenSecret" --resource-group "rg-soen" --location "EastUS"
az keyvault secret set --vault-name "soenSecret" --name "CompanyName" --value "SOEN"
```
## Deleting Secret in Azure Key Vault

```bash
az keyvault secret delete --name "CompanyName" --vault-name "soenSecret"
az keyvault delete --name "soenSecret" --resource-group "rg-soen" --location "EastUS"
```

## Testing the function in local environment

```bash
func start
```
http://localhost:7071/api/HttpExample

## Deploying the function in azure environment

```bash
func azure functionapp publish azure-function-keyvault-secrets
```