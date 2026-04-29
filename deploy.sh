#!/bin/bash

# Script de deploy para Hostinger com SSH
# Uso: ./deploy.sh ou bash deploy.sh

set -e  # Exit se algum comando falhar

# ============ CONFIGURAÇÕES ============
REMOTE_USER="u936031702"
REMOTE_HOST="147.93.37.88"
REMOTE_PORT="65002"
REMOTE_PATH="/home/u936031702/public_html"  # Ajuste conforme necessário
BRANCH="dev/basic-landpage"  # Branch para fazer pull

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Iniciando deploy...${NC}"

# ============ PASSO 1: Push local ============
echo -e "${YELLOW}📤 1. Fazendo push das mudanças...${NC}"
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "Nada para commitar"
git push origin $BRANCH
echo -e "${GREEN}✓ Push completo${NC}"

# ============ PASSO 2: SSH Pull, Build e Restart ============
echo -e "${YELLOW}🔄 2. Executando no servidor...${NC}"

ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST << EOF
  set -e
  
  cd $REMOTE_PATH
  
  echo "📥 Fazendo git pull..."
  git pull origin $BRANCH
  
  echo "📦 Instalando dependências..."
  npm install --production
  
  echo "🔨 Fazendo build..."
  npm run build
  
  echo "♻️  Reiniciando aplicação..."
  # Hostinger usa PM2, então:
  pm2 restart all || true
  
  echo "✅ Deploy completo!"
EOF

echo -e "${GREEN}✅ Deploy finalizado com sucesso!${NC}"
