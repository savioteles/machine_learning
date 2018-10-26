# IBM Watson

## Instalação do Nodejs
- Instale o Nodejs com o comando abaixo:

```
wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install gcc g++ make
```

- Instale o Yarn (gerenciador de dependências) com o comando abaixo:

```
sudo apt-get install curl
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install -y yarn
```

# Execute o projeto

- Baixe o projeto do github
```
sudo apt-get install -y git
git clone https://github.com/watson-developer-cloud/assistant-simple.git
cd assistant-simple
```
- Renomei o arquivo *.env.example* para *.env*
- Configure a chave o arquivo *.env* com as chaves do workspace do Watson seguindo o tutorial do projeto no [github](https://github.com/watson-developer-cloud/assistant-simple#configuring-the-application)
- Inicie o projeto com o comando abaixo:

```
npm start
```
