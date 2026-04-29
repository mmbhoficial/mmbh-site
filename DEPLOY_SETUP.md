# 🚀 Guia de Deploy Automatizado com SSH

## Pré-requisitos

1. **Acesso SSH ao Hostinger** (você deve ter recebido as credenciais)
2. **Git instalado no servidor** (geralmente já vem)
3. **Node.js e npm no servidor** (Hostinger já tem)

## Setup Inicial (fazer uma única vez)

### 1. Configurar o script de deploy

Abra o arquivo `deploy.sh` e preencha:

```bash
REMOTE_USER="seu_usuario"      # Seu usuário SSH do Hostinger
REMOTE_HOST="seu_host.com"     # Seu host (ex: marchada.hostinger.com ou IP)
REMOTE_PATH="/home/seu_usuario/public_html"  # Caminho onde o site está
BRANCH="dev/basic-landpage"    # Sua branch
```

### 2. Configurar SSH key (opcional, mas recomendado)

Para não precisar digitar senha sempre:

```bash
# No seu Mac local:
ssh-keygen -t ed25519 -C "seu_email@example.com"

# Depois copia a chave pública para o servidor:
ssh-copy-id -i ~/.ssh/id_ed25519.pub seu_usuario@seu_host.com
```

### 3. Preparar no servidor (SSH)

```bash
# Conecte via SSH:
ssh seu_usuario@seu_host.com

# Entre no diretório do site:
cd /home/seu_usuario/public_html

# Clone o repositório (primeira vez):
git clone https://github.com/seu_usuario/seu_repo.git .

# Instale as dependências:
npm install

# Faça o build inicial:
npm run build

# Verifique se PM2 está rodando:
pm2 list

# Se não estiver, inicie:
pm2 start npm --name "mmbh-site" -- start
```

## Como Usar (depois de configurado)

### Opção 1: Script automático (recomendado)

```bash
# Make o script executável:
chmod +x deploy.sh

# Execute:
./deploy.sh
```

Isso vai:
1. ✅ Fazer commit e push das mudanças locais
2. ✅ Fazer pull no servidor
3. ✅ Instalar dependências
4. ✅ Fazer build
5. ✅ Reiniciar a aplicação

### Opção 2: Manual via SSH

Se preferir fazer step-by-step:

```bash
ssh seu_usuario@seu_host.com

cd /home/seu_usuario/public_html
git pull origin dev/basic-landpage
npm install --production
npm run build
pm2 restart all
```

## Troubleshooting

### "Permission denied" ao conectar SSH
- Verifique o usuário e host
- Confirme se a SSH key foi configurada corretamente

### "npm: command not found"
- Node.js não está no PATH
- Contate Hostinger para verificar instalação

### "git: not a git repository"
- Você precisa fazer `git clone` da primeira vez
- Ou fazer `git init` se for primeira vez

### Aplicação não reinicia
- Verifique se PM2 está rodando: `pm2 list`
- Se não estiver, use: `pm2 start npm --name "app" -- start`

## Dicas

- **Sempre faça commit local antes de fazer deploy**
- **Teste as mudanças localmente com `npm run dev`**
- **Monitore os logs do servidor:** `pm2 logs`
- **Para ver status:** `pm2 monit`

## Credenciais Necessárias

Você pode encontrar seus dados de SSH no Hostinger:
1. Acesse o painel Hostinger
2. Vá em "Gerenciador de Arquivos" ou "SSH"
3. Procure por "SSH details" ou "Credenciais SSH"
4. Você verá: usuário, host e porta (geralmente 22)

---

**Dúvidas?** Me avisa que ajusto o script! 🚀
